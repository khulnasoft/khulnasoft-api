import { type Request, type Application, type Router, type Response, RouterOptions } from "express";
import { AnyAPIDescription, AnyActionsConfig, EndpointResponseOutput, KhulnasoftContext, RequestData, EndpointResponseInput } from "khulnasoft";
import { type AnyEndpoint } from "khulnasoft";
export type ExpressServerContext = {
    type: "express";
    args: [Request, Response];
};
export type CreateExpressHandlerOptions = {
    /**
     * If false, errors will be passed to the `next` middleware;
     * otherwise the created express handler will send the appropriate
     * response if an error is caught.
     */
    handleErrors?: boolean;
};
type BasePathMap = Record<string, string>;
export type AddToExpressOptions = CreateExpressHandlerOptions & {
    /**
     * Mappings to apply to Khulnasoft API Endpoint paths.  For example
     * with `basePathMap: { '/api/', '/api/v2/' }, the endpoint
     * `GET /api/posts` would get transformed to `GET /api/v2/posts`
     */
    basePathMap?: BasePathMap;
};
/**
 * Runs Khulnasoft middleware and gets the parsed params
 * for a given Khulnasoft API Endpoint and Express Request/Response.
 *
 * @param endpoint the endpoint to execute the request on
 * @param req the Express request
 * @param res the Express response
 * @returns a Promise that resolves to the parsed params
 */
export declare function parseParams<EC extends AnyEndpoint>(endpoint: EC, req: Request, res: Response): Promise<RequestData<EC["path"], EC["query"], EC["body"]>>;
/**
 * Runs Khulnasoft middleware and gets the parsed params and context
 * for a given Khulnasoft API Endpoint and Express Request/Response.
 *
 * @param endpoint the endpoint to execute the request on
 * @param req the Express request
 * @param res the Express response
 * @returns a Promise that resolves to [params, context]
 */
export declare function parseParamsWithContext<EC extends AnyEndpoint>(endpoint: EC, req: Request, res: Response): Promise<[
    RequestData<EC["path"], EC["query"], EC["body"]>,
    KhulnasoftContext<EC>
]>;
/**
 * Creates a response for the given Khulnasoft endpoint.
 * @param endpoint An endpoint with a response schema
 * @param response The response data
 * @returns A promise that resolves to the schema-parsed response body,
 * or rejects if `response` fails validation
 */
export declare function makeResponse<EC extends AnyEndpoint>(endpoint: EC, response: EndpointResponseInput<EC>): Promise<EndpointResponseOutput<EC>>;
/**
 * Executes the given Express request on the given Khulnasoft API Endpoint, returning
 * the result from the endpoint handler without sending it in a response.
 *
 * @param endpoint the endpoint to execute the request on
 * @param req the Express request
 * @param res the Express response
 * @returns a Promise that resolves to the return value of the endpoint handler,
 * or rejects if it throws an error
 */
export declare function executeRequest<EC extends AnyEndpoint>(endpoint: AnyEndpoint, req: Request, res: Response): Promise<EndpointResponseOutput<EC>>;
/**
 * Registers a Khulnasoft endpoint with the given Express Application or Router.
 */
export declare function addEndpointRoute(router: Application | Router, endpoint: AnyEndpoint, options?: AddToExpressOptions): void;
type AnyResourceConfig = {
    actions: AnyActionsConfig | undefined;
    namespacedResources: Record<string, AnyResourceConfig> | undefined;
};
type AddEndpointsToExpressOptions = AddToExpressOptions & {
    /**
     * Whether to add 405 method not allowed handlers to the Express
     * Router or Application (defaults to true)
     */
    addMethodNotAllowedHandlers?: boolean;
};
/**
 * Creates an Express Router for the given Khulnasoft resource
 */
export declare function resourceRouter(resource: Pick<AnyResourceConfig, "actions" | "namespacedResources">, options?: AddEndpointsToExpressOptions & RouterOptions): Router;
/**
 * Creates an Express Router for the given Khulnasoft API
 */
export declare function apiRouter(api: AnyAPIDescription, options?: AddEndpointsToExpressOptions): Router;
export {};
//# sourceMappingURL=index.d.ts.map