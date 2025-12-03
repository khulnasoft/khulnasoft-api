import {
  AnyAPIDescription,
  AnyEndpoint,
  MakeKhulnasoftPlugin,
  NotFoundError,
  allEndpoints,
  isKhulnasoftError,
} from "khulnasoft";
import qs from "qs";
import { NextApiRequest, NextApiResponse } from "next";
import { TrieRouter } from "hono/router/trie-router";
import { endpointToHono } from "./endpointToHono";
import { NextRequest, NextResponse } from "next/server";
import { Result } from "hono/router";

declare module "khulnasoft" {
  interface KhulnasoftContext<EC extends AnyBaseEndpoint> {
    server: NextServerContext;
  }
}

export const makeNextPlugin = (): MakeKhulnasoftPlugin<any, {}> => () => ({
  /* there used to be statics here, now they got moved to standalone functions.
    maybe we'll eventually put something back here...
   */
});

export type NextServerContext = {
  type: "nextjs";
  args:
    | [NextApiRequest, NextApiResponse]
    | [NextRequest, { params: Record<string, any> }];
};

type RouterOptions = {
  catchAllParam?: string;
  basePathMap?: Record<string, string>;
};

const methods = ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"];

type PagesHandler = (
  req: NextApiRequest,
  res: NextApiResponse,
) => Promise<void>;

type AppHandler = (
  req: NextRequest,
  ctx: { params: Record<string, any> },
) => Promise<NextResponse>;

type AppHandlers = {
  GET: AppHandler;
  HEAD: AppHandler;
  POST: AppHandler;
  PUT: AppHandler;
  DELETE: AppHandler;
  PATCH: AppHandler;
  OPTIONS: AppHandler;
};

const makeAppHandlers = (handler: AppHandler): AppHandlers => ({
  GET: handler,
  HEAD: handler,
  POST: handler,
  PUT: handler,
  DELETE: handler,
  PATCH: handler,
  OPTIONS: handler,
});

function makeRouter(
  endpoints: AnyEndpoint[],
  options?: RouterOptions,
): { appHandler: AppHandler; pagesHandler: PagesHandler } {
  const khulnasoft = endpoints[0]?.khulnasoft;
  if (!khulnasoft) {
    throw new Error(`endpoints[0].khulnasoft must be defined`);
  }

  const routeMatcher: TrieRouter<AnyEndpoint> = new TrieRouter();
  for (const endpoint of endpoints) {
    let [method, path] = endpointToHono(endpoint.endpoint);

    const basePathMap = options?.basePathMap;
    if (basePathMap) {
      // rewrite paths based on config…
      // TODO this is maybe not a feature we should keep.
      // (we just wanted it to serve routes from 2 places (Next and Hono) for testing purposes)
      for (const k in basePathMap) {
        if (path.startsWith(k)) {
          path = path.replace(k, basePathMap[k]);
          break;
        }
      }
    }
    routeMatcher.add(method, path, endpoint);
  }
  const catchAllParam = options?.catchAllParam;

  const appHandler = async (
    req: NextRequest,
    ctx: { params: Record<string, any> },
  ): Promise<NextResponse> => {
    try {
      const { method, url } = req;

      const { pathname, search } = new URL(url);
      const match = routeMatcher.match(method, pathname);

      if (!isValidRouteMatch(match)) {
        const enabledMethods = methods.filter((method) =>
          isValidRouteMatch(routeMatcher.match(method, pathname)),
        );
        if (enabledMethods.length) {
          return NextResponse.json(
            {
              message: `No handler for ${req.method}; only ${enabledMethods
                .map((x) => x.toUpperCase())
                .join(", ")}.`,
            },
            { status: 405 },
          );
        }
        throw new NotFoundError();
      }

      const [endpoint, path] = match[0][0];

      const server: NextServerContext = {
        type: "nextjs",
        args: [req, ctx],
      };
      const headers: Record<string, string> = {};
      req.headers.forEach((value, key) => (headers[key] = value));
      const context = khulnasoft.initContext({
        endpoint,
        // url: new URL(req.url!), // TODO make safe
        headers,
        server,
      });

      let query = search ? qs.parse(search.replace(/^\?/, "")) : {};
      if (catchAllParam) {
        // eslint-disable-next-line no-unused-vars
        let catchAll;
        ({ [catchAllParam]: catchAll, ...query } = query);
      }

      const bodyText = await req.text();

      const params = khulnasoft.initParams({
        path,
        query,
        body: bodyText ? JSON.parse(bodyText) : undefined,
        headers: req.headers,
      });

      const result = await khulnasoft.execute(params, context);
      return NextResponse.json(result);
    } catch (error) {
      if (isKhulnasoftError(error)) {
        return NextResponse.json(error.response, {
          status: error.statusCode,
        });
      }

      console.error(
        `ERROR in ${req.method} ${req.url}:`,
        error instanceof Error ? error.stack : error,
      );
      return NextResponse.json(
        { error, details: "Failed to handle the request." },
        { status: 500 },
      );
    }
  };

  const pagesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const resp = null as any as NextResponse;
    try {
      const { method, url } = req;
      if (!method) throw new Error(`missing req.method`);
      if (!url) throw new Error(`missing req.url`);
      if (!url.startsWith("/"))
        throw new Error(`expected url to start with /, but got ${url}`);

      const { pathname } = new URL(`http://localhost${url}`);
      const match = routeMatcher.match(method, pathname);

      if (!isValidRouteMatch(match)) {
        const enabledMethods = methods.filter((method) =>
          isValidRouteMatch(routeMatcher.match(method, pathname)),
        );
        if (enabledMethods.length) {
          res.status(405).json({
            message: `No handler for ${req.method}; only ${enabledMethods
              .map((x) => x)
              .join(", ")}.`,
          });
          return;
        }
        throw new NotFoundError();
      }

      const [endpoint, path] = match[0][0];

      const server: NextServerContext = {
        type: "nextjs",
        args: [req, res],
      };
      const context = khulnasoft.initContext({
        endpoint,
        // url: new URL(req.url!), // TODO make safe
        headers: req.headers,
        server,
      });

      let query = req.query;
      if (catchAllParam) {
        // eslint-disable-next-line no-unused-vars
        let catchAll;
        ({ [catchAllParam]: catchAll, ...query } = req.query);
      }

      const params = khulnasoft.initParams({
        path,
        query: qs.parse(query as any),
        body: req.body,
        headers: req.headers,
      });

      const result = await khulnasoft.execute(params, context);
      res.status(200).send(result);
    } catch (error) {
      if (isKhulnasoftError(error)) {
        res.status(error.statusCode).json(error.response);
        return;
      }

      console.error(
        `ERROR in ${req.method} ${req.url}:`,
        error instanceof Error ? error.stack : error,
      );
      res.status(500).json({ error, details: "Failed to handle the request." });
      return;
    }
  };
  return { appHandler, pagesHandler };
}

const isValidRouteMatch = (m: Result<AnyEndpoint>) => {
  if (!m) return false;

  if (m[0].length === 0) return false;

  return true;
};

export const khulnasoftNextPageRoute = <Endpoints extends AnyEndpoint[]>(
  ...endpoints: Endpoints
) => makeRouter(endpoints).pagesHandler;

export const khulnasoftNextPageCatchAllRouter = <API extends AnyAPIDescription>(
  { topLevel, resources }: API,
  options?: RouterOptions,
) =>
  makeRouter(
    allEndpoints({
      actions: topLevel?.actions,
      namespacedResources: resources,
    }),
    options,
  ).pagesHandler;

export const khulnasoftNextAppRoute = (
  endpoint: AnyEndpoint,
  options?: RouterOptions,
) => makeRouter([endpoint], options).appHandler;

export const khulnasoftNextAppCatchAllRouter = <API extends AnyAPIDescription>(
  { topLevel, resources }: API,
  options?: RouterOptions,
) =>
  makeAppHandlers(
    makeRouter(
      allEndpoints({
        actions: topLevel?.actions,
        namespacedResources: resources,
      }),
      options,
    ).appHandler,
  );
