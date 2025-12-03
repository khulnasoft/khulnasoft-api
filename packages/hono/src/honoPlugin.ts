import { Context } from "hono";
import { createMiddleware } from "hono/factory";
import { StatusCode } from "hono/utils/http-status";
import qs from "qs";
import {
  allEndpoints,
  AnyAPIDescription,
  AnyEndpoint,
  isKhulnasoftError,
  NotFoundError,
} from "khulnasoft";
import { isValidRouteMatch, makeRouteMatcher } from "./routeMatcher";

export type HonoServerContext = {
  type: "hono";
  args: [Context];
};

declare module "khulnasoft" {
  interface KhulnasoftContext<EC extends AnyBaseEndpoint> {
    server: HonoServerContext;
  }
}

export type KhulnasoftAppOptions = {
  handleErrors?: boolean;
};

const methods = ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"];

function makeHandler(endpoints: AnyEndpoint[], options?: KhulnasoftAppOptions) {
  const khulnasoft = endpoints[0]?.khulnasoft;
  if (!khulnasoft) {
    throw new Error(`endpoints[0].khulnasoft must be defined`);
  }

  const routeMatcher = makeRouteMatcher(endpoints);

  return createMiddleware(async (c, next) => {
    try {
      const match = routeMatcher.match(c.req.method, c.req.path);
      const { search } = new URL(c.req.url);

      if (!isValidRouteMatch(match)) {
        const enabledMethods = methods.filter((method) =>
          isValidRouteMatch(routeMatcher.match(method, c.req.path)),
        );
        if (enabledMethods.length) {
          return c.json(
            {
              message: `No handler for ${c.req.method}; only ${enabledMethods
                .map((x) => x.toUpperCase())
                .join(", ")}.`,
            },
            { status: 405 },
          );
        }
        if (options?.handleErrors !== false) {
          throw new NotFoundError();
        }
        await next();
        return;
      }

      const [endpoint, path] = match[0][0];
      const server: HonoServerContext = {
        type: "hono",
        args: [c],
      };

      const context = khulnasoft.initContext({
        endpoint,
        headers: c.req.header(),
        server,
      });

      const params = khulnasoft.initParams({
        path,
        query: search ? qs.parse(search.replace(/^\?/, "")) : {},
        // Don't use up the raw body in case the handler needs to use it:
        body: await c.req.raw
          .clone()
          .json()
          .catch(() => undefined),
        headers: c.req.header(),
      });

      const result = await khulnasoft.execute(params, context);

      if (result instanceof Response) {
        return result;
      }

      return c.json(result);
    } catch (error) {
      if (options?.handleErrors === false) {
        throw error;
      }

      if (isKhulnasoftError(error)) {
        return c.json(error.response, error.statusCode as any);
      }

      console.error(
        `ERROR in ${c.req.method} ${c.req.url}:`,
        error instanceof Error ? error.stack : error,
      );
      return c.json({ error, details: "Failed to handle the request." }, 500);
    }
  });
}

export function khulnasoftApi(
  { topLevel, resources }: AnyAPIDescription,
  options?: KhulnasoftAppOptions,
) {
  return makeHandler(
    allEndpoints({
      actions: topLevel?.actions,
      namespacedResources: resources,
    }),
    options,
  );
}
