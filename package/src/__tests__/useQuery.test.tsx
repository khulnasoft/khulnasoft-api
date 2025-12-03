import * as React from "react";
import { Khulnasoft, z } from "khulnasoft";
import { KhulnasoftReactQueryClient, createUseReactQueryClient } from "..";
import {
  QueryClient,
  QueryClientProvider,
  UseQueryResult,
} from "@tanstack/react-query";
import { render, waitFor } from "@testing-library/react";

const khulnasoft = new Khulnasoft({ plugins: {} });

const api = khulnasoft.api({
  basePath: "/",
  resources: {
    query: khulnasoft.resource({
      summary: "query",
      actions: {
        retrieve: khulnasoft.endpoint({
          endpoint: "GET /query/{foo}",
          query: z.object({ bar: z.string() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    optionalQuery: khulnasoft.resource({
      summary: "optionalQuery",
      actions: {
        retrieve: khulnasoft.endpoint({
          endpoint: "GET /optionalQuery/{foo}",
          query: z.object({ bar: z.string().optional() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    pathQuery: khulnasoft.resource({
      summary: "pathQuery",
      actions: {
        retrieve: khulnasoft.endpoint({
          endpoint: "GET /pathQuery/{foo}",
          path: z.object({ foo: z.string() }),
          query: z.object({ bar: z.string() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    pathOptionalQuery: khulnasoft.resource({
      summary: "pathOptionalQuery",
      actions: {
        retrieve: khulnasoft.endpoint({
          endpoint: "GET /pathOptionalQuery/{foo}",
          path: z.object({ foo: z.string() }),
          query: z.object({ bar: z.string().optional() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
  },
});

// fetch mock that just echoes back its arguments
const fetch = async (
  req: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  return new Response(JSON.stringify({ req, init }));
};

const queryClient = new QueryClient();

const baseUrl = "http://localhost:3000";

const useClient = createUseReactQueryClient<typeof api>(baseUrl, {
  fetch,
});

describe("useQuery methods", () => {
  for (const [description, useQuery, expectedUrl] of [
    [
      "get with required query",
      (client) => client.query.useRetrieve({ bar: "b" }),
      "/query?bar=b",
    ],
    [
      "get with omitted optional query",
      (client) => client.optionalQuery.useRetrieve(),
      "/optionalQuery",
    ],
    [
      "get with optional query",
      (client) => client.optionalQuery.useRetrieve({ bar: "b" }),
      "/optionalQuery?bar=b",
    ],
    [
      "get with path and required query",
      (client) => client.pathQuery.useRetrieve("a", { bar: "b" }),
      "/pathQuery/a?bar=b",
    ],
    [
      "get with path and optional query",
      (client) => client.pathOptionalQuery.useRetrieve("a", { bar: "b" }),
      "/pathOptionalQuery/a?bar=b",
    ],
    [
      "get with path and omitted optional query",
      (client) => client.pathOptionalQuery.useRetrieve("a"),
      "/pathOptionalQuery/a",
    ],
  ] as [
    string,
    (client: KhulnasoftReactQueryClient<typeof api>) => UseQueryResult<any>,
    string
  ][]) {
    it(
      description,
      async () => {
        let hookResult: UseQueryResult<any> | undefined;
        const Comp = () => {
          hookResult = useQuery(useClient());
          return null;
        };
        render(
          <QueryClientProvider client={queryClient}>
            <Comp />
          </QueryClientProvider>
        );
        await waitFor(() => expect(hookResult?.isSuccess).toEqual(true), {
          interval: 500,
          timeout: 10000,
        });
        expect(hookResult?.data?.req).toEqual(`${baseUrl}${expectedUrl}`);
      },
      15000
    );
  }
});
