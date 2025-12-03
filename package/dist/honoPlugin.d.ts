import { Context } from "hono";
import { AnyAPIDescription } from "khulnasoft";
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
export declare function khulnasoftApi({ topLevel, resources }: AnyAPIDescription, options?: KhulnasoftAppOptions): import("hono").MiddlewareHandler<any, string, {}, Response>;
//# sourceMappingURL=honoPlugin.d.ts.map