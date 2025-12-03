import { z, AnyZodObject, ZodTypeAny } from "zod";
import { AnyEndpoint, ZodObjectSchema } from "./khulnasoft";

// Helper type to check if an endpoint has a path schema
export type EndpointHasPath<E extends AnyEndpoint> = E extends {
  path: ZodObjectSchema;
}
  ? true
  : false;

// Helper type to extract the path input type
export type EndpointPathInput<E extends AnyEndpoint> = E extends {
  path: ZodObjectSchema;
}
  ? z.input<E["path"]>
  : undefined;

// Helper type to check if an endpoint has a query schema
export type EndpointHasQuery<E extends AnyEndpoint> = E extends {
  query: ZodObjectSchema;
}
  ? true
  : false;

// Helper type to extract the query input type
export type EndpointQueryInput<E extends AnyEndpoint> = E extends {
  query: ZodObjectSchema;
}
  ? z.input<E["query"]>
  : undefined;

// Helper type to check if an endpoint has a body schema
export type EndpointHasBody<E extends AnyEndpoint> = E extends {
  body: ZodObjectSchema;
}
  ? true
  : false;

// Helper type to extract the body input type
export type EndpointBodyInput<E extends AnyEndpoint> = E extends {
  body: ZodObjectSchema;
}
  ? z.input<E["body"]>
  : undefined;

// Helper type to check if an endpoint has a response schema
export type EndpointHasResponse<E extends AnyEndpoint> = E extends {
  response: ZodTypeAny;
}
  ? true
  : false;

// Helper type to extract the response output type
export type EndpointResponseOutput<E extends AnyEndpoint> = E extends {
  response: ZodTypeAny;
}
  ? z.output<E["response"]>
  : undefined;

export type EndpointHasRequiredQuery<E extends AnyEndpoint> =
  EndpointHasQuery<E> extends true
    ? {} extends EndpointQueryInput<E>
      ? false
      : true
    : false;
