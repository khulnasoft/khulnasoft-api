import * as React from "react";
import { AnyEndpoint, Khulnasoft, z } from "khulnasoft";
import { KhulnasoftReactQueryClient, createUseReactQueryClient } from "..";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, waitFor } from "@testing-library/react";
import {
  ClientUseMutateFunction,
  ClientUseMutationResult,
} from "../useMutation";

const khulnasoft = new Khulnasoft({ plugins: {} });

const api = khulnasoft.api({
  basePath: "/",
  resources: {
    query: khulnasoft.resource({
      summary: "query",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /query/{foo}",
          query: z.object({ bar: z.string() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    optionalQuery: khulnasoft.resource({
      summary: "optionalQuery",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /optionalQuery/{foo}",
          query: z.object({ bar: z.string().optional() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    pathQuery: khulnasoft.resource({
      summary: "pathQuery",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /pathQuery/{foo}",
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
        update: khulnasoft.endpoint({
          endpoint: "POST /pathOptionalQuery/{foo}",
          path: z.object({ foo: z.string() }),
          query: z.object({ bar: z.string().optional() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    body: khulnasoft.resource({
      summary: "body",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /body",
          body: z.object({ bar: z.string() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    pathBody: khulnasoft.resource({
      summary: "pathBody",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /pathBody/{foo}",
          path: z.object({ foo: z.string() }),
          body: z.object({ bar: z.string() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    queryBody: khulnasoft.resource({
      summary: "queryBody",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /queryBody",
          query: z.object({ foo: z.string() }),
          body: z.object({ bar: z.string() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    pathQueryBody: khulnasoft.resource({
      summary: "pathQueryBody",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /pathQueryBody/{foo}",
          path: z.object({ foo: z.string() }),
          query: z.object({ baz: z.string() }),
          body: z.object({ bar: z.string() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    optionalQueryBody: khulnasoft.resource({
      summary: "optionalQueryBody",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /optionalQueryBody",
          query: z.object({ foo: z.string().optional() }),
          body: z.object({ bar: z.string() }),
          response: z.any(),
          async handler() {},
        }),
      },
    }),
    pathOptionalQueryBody: khulnasoft.resource({
      summary: "pathOptionalQueryBody",
      actions: {
        update: khulnasoft.endpoint({
          endpoint: "POST /pathOptionalQueryBody/{foo}",
          path: z.object({ foo: z.string() }),
          query: z.object({ baz: z.string().optional() }),
          body: z.object({ bar: z.string() }),
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
  init?: RequestInit,
): Promise<Response> => {
  return new Response(
    JSON.stringify({
      req,
      body: typeof init?.body === "string" ? JSON.parse(init.body) : undefined,
    }),
  );
};

const queryClient = new QueryClient();

const baseUrl = "http://localhost:3000";

const useClient = createUseReactQueryClient<typeof api>(baseUrl, {
  fetch,
});

function testCase<
  E extends AnyEndpoint,
  TData extends { req: string; body?: object },
>(
  description: string,
  useMutation: (
    client: KhulnasoftReactQueryClient<typeof api>,
  ) => ClientUseMutationResult<E, TData>,
  doMutation: (mutate: ClientUseMutateFunction<E, TData>) => void,
  expectedUrl: string,
  expectedBody?: object,
): void {
  it(
    description,
    async () => {
      let hookResult: ClientUseMutationResult<E, TData> | undefined;
      const Comp = () => {
        const result = useMutation(useClient());
        hookResult = result;
        React.useEffect(() => {
          doMutation(result.mutate);
        }, []);
        return null;
      };
      render(
        <QueryClientProvider client={queryClient}>
          <Comp />
        </QueryClientProvider>,
      );
      await waitFor(() => expect(hookResult?.isSuccess).toEqual(true), {
        interval: 500,
        timeout: 10000,
      });
      expect(hookResult?.data?.req).toEqual(`${baseUrl}${expectedUrl}`);
      if (expectedBody) {
        expect(hookResult?.data?.body).toEqual(expectedBody);
      }
    },
    15000,
  );
}

describe("useMutation", () => {
  testCase(
    "post with required query",
    (client) => client.query.useUpdate(),
    (update) => update({ query: { bar: "b" } }),
    "/query?bar=b",
  );
  testCase(
    "post with omitted optional query",
    (client) => client.optionalQuery.useUpdate(),
    (update) => update(),
    "/optionalQuery",
  );
  testCase(
    "post with optional query",
    (client) => client.optionalQuery.useUpdate(),
    (update) => update({ query: { bar: "b" } }),
    "/optionalQuery?bar=b",
  );
  testCase(
    "post with path and required query",
    (client) => client.pathQuery.useUpdate(),
    (update) => update("a", { query: { bar: "b" } }),
    "/pathQuery/a?bar=b",
  );
  testCase(
    "post with path and optional query",
    (client) => client.pathOptionalQuery.useUpdate(),
    (update) => update("a", { query: { bar: "b" } }),
    "/pathOptionalQuery/a?bar=b",
  );
  testCase(
    "post with path and omitted optional query",
    (client) => client.pathOptionalQuery.useUpdate(),
    (update) => update("a"),
    "/pathOptionalQuery/a",
  );
  testCase(
    "post with body",
    (client) => client.body.useUpdate(),
    (update) => update({ bar: "a" }),
    "/body",
    { bar: "a" },
  );
  testCase(
    "post with path and body",
    (client) => client.pathBody.useUpdate(),
    (update) => update("a", { bar: "b" }),
    "/pathBody/a",
    { bar: "b" },
  );
  testCase(
    "post with query and body",
    (client) => client.queryBody.useUpdate(),
    (update) => update({ bar: "b" }, { query: { foo: "a" } }),
    "/queryBody?foo=a",
    { bar: "b" },
  );
  testCase(
    "post with path, query and body",
    (client) => client.pathQueryBody.useUpdate(),
    (update) => update("x", { bar: "b" }, { query: { baz: "a" } }),
    "/pathQueryBody/x?baz=a",
    { bar: "b" },
  );
  testCase(
    "post with optional query and body",
    (client) => client.optionalQueryBody.useUpdate(),
    (update) => update({ bar: "b" }, { query: { foo: "a" } }),
    "/optionalQueryBody?foo=a",
    { bar: "b" },
  );
  testCase(
    "post with omitted optional query and body",
    (client) => client.optionalQueryBody.useUpdate(),
    (update) => update({ bar: "b" }),
    "/optionalQueryBody",
    { bar: "b" },
  );
  testCase(
    "post with path, optional query and body",
    (client) => client.pathOptionalQueryBody.useUpdate(),
    (update) => update("x", { bar: "b" }, { query: { baz: "a" } }),
    "/pathOptionalQueryBody/x?baz=a",
    { bar: "b" },
  );
  testCase(
    "post with path, omitted optional query and body",
    (client) => client.pathOptionalQueryBody.useUpdate(),
    (update) => update("x", { bar: "b" }),
    "/pathOptionalQueryBody/x",
    { bar: "b" },
  );
});

it("post with query - onSuccess hook passed to useMutation", async () => {
  const endpoint = api.resources.query.actions.update;
  let onSuccessArgs: any[] | undefined;
  let hookResult: ClientUseMutationResult<typeof endpoint> | undefined;
  const Comp = () => {
    const result = useClient().query.useUpdate({
      onSuccess: (...args) => (onSuccessArgs = args),
    });
    hookResult = result;
    React.useEffect(() => {
      result.mutate({ query: { bar: "a" } });
    }, []);
    return null;
  };
  render(
    <QueryClientProvider client={queryClient}>
      <Comp />
    </QueryClientProvider>,
  );
  await waitFor(
    () => {
      expect(hookResult?.isSuccess).toEqual(true);
      expect(onSuccessArgs).toBeDefined();
    },
    {
      interval: 500,
      timeout: 10000,
    },
  );
  expect(hookResult?.data?.req).toMatchInlineSnapshot(
    `"http://localhost:3000/query?bar=a"`,
  );
  expect(hookResult?.data?.body).toMatchInlineSnapshot(`undefined`);
  expect(onSuccessArgs).toMatchInlineSnapshot(`
    [
      {
        "req": "http://localhost:3000/query?bar=a",
      },
      {
        "args": [
          {
            "query": {
              "bar": "a",
            },
          },
        ],
      },
      undefined,
    ]
  `);
}, 15000);
it("post with query - onSuccess hook passed to mutate fn", async () => {
  const endpoint = api.resources.query.actions.update;
  let onSuccessArgs: any[] | undefined;
  let hookResult: ClientUseMutationResult<typeof endpoint> | undefined;
  const Comp = () => {
    const result = useClient().query.useUpdate();
    hookResult = result;
    React.useEffect(() => {
      result.mutate({
        query: { bar: "a" },
        onSuccess: (...args) => (onSuccessArgs = args),
      });
    }, []);
    return null;
  };
  render(
    <QueryClientProvider client={queryClient}>
      <Comp />
    </QueryClientProvider>,
  );
  await waitFor(
    () => {
      expect(hookResult?.isSuccess).toEqual(true);
      expect(onSuccessArgs).toBeDefined();
    },
    {
      interval: 500,
      timeout: 10000,
    },
  );
  expect(hookResult?.data?.req).toMatchInlineSnapshot(
    `"http://localhost:3000/query?bar=a"`,
  );
  expect(hookResult?.data?.body).toMatchInlineSnapshot(`undefined`);
  expect(onSuccessArgs).toMatchInlineSnapshot(`
    [
      {
        "req": "http://localhost:3000/query?bar=a",
      },
      {
        "args": [
          {
            "query": {
              "bar": "a",
            },
          },
        ],
      },
      undefined,
    ]
  `);
}, 15000);

it("post with path, optional query and body - onSuccess hook passed to useMutation", async () => {
  const endpoint = api.resources.pathOptionalQueryBody.actions.update;
  let onSuccessArgs: any[] | undefined;
  let hookResult: ClientUseMutationResult<typeof endpoint> | undefined;
  const Comp = () => {
    const result = useClient().pathOptionalQueryBody.useUpdate({
      onSuccess: (...args) => (onSuccessArgs = args),
    });
    hookResult = result;
    React.useEffect(() => {
      result.mutate("a", { bar: "b" });
    }, []);
    return null;
  };
  render(
    <QueryClientProvider client={queryClient}>
      <Comp />
    </QueryClientProvider>,
  );
  await waitFor(
    () => {
      expect(hookResult?.isSuccess).toEqual(true);
      expect(onSuccessArgs).toBeDefined();
    },
    {
      interval: 500,
      timeout: 10000,
    },
  );
  expect(hookResult?.data?.req).toMatchInlineSnapshot(
    `"http://localhost:3000/pathOptionalQueryBody/a"`,
  );
  expect(hookResult?.data?.body).toMatchInlineSnapshot(`
    {
      "bar": "b",
    }
  `);
  expect(onSuccessArgs).toMatchInlineSnapshot(`
    [
      {
        "body": {
          "bar": "b",
        },
        "req": "http://localhost:3000/pathOptionalQueryBody/a",
      },
      {
        "args": [
          "a",
          {
            "bar": "b",
          },
        ],
      },
      undefined,
    ]
  `);
}, 15000);

it("post with path, optional query and body - onSuccess hook passed to mutate fn", async () => {
  const endpoint = api.resources.pathOptionalQueryBody.actions.update;
  let onSuccessArgs: any[] | undefined;
  let hookResult: ClientUseMutationResult<typeof endpoint> | undefined;
  const Comp = () => {
    const result = useClient().pathOptionalQueryBody.useUpdate();
    hookResult = result;
    React.useEffect(() => {
      result.mutate(
        "a",
        { bar: "b" },
        {
          onSuccess: (...args) => (onSuccessArgs = args),
        },
      );
    }, []);
    return null;
  };
  render(
    <QueryClientProvider client={queryClient}>
      <Comp />
    </QueryClientProvider>,
  );
  await waitFor(
    () => {
      expect(hookResult?.isSuccess).toEqual(true);
      expect(onSuccessArgs).toBeDefined();
    },
    {
      interval: 500,
      timeout: 10000,
    },
  );
  expect(hookResult?.data?.req).toMatchInlineSnapshot(
    `"http://localhost:3000/pathOptionalQueryBody/a"`,
  );
  expect(hookResult?.data?.body).toMatchInlineSnapshot(`
    {
      "bar": "b",
    }
  `);
  expect(onSuccessArgs).toMatchInlineSnapshot(`
    [
      {
        "body": {
          "bar": "b",
        },
        "req": "http://localhost:3000/pathOptionalQueryBody/a",
      },
      {
        "args": [
          "a",
          {
            "bar": "b",
          },
        ],
      },
      undefined,
    ]
  `);
}, 15000);

it("post with path, query and body - onSuccess hook passed to useMutation", async () => {
  const endpoint = api.resources.pathQueryBody.actions.update;
  let onSuccessArgs: any[] | undefined;
  let hookResult: ClientUseMutationResult<typeof endpoint> | undefined;
  const Comp = () => {
    const result = useClient().pathQueryBody.useUpdate({
      onSuccess: (...args) => (onSuccessArgs = args),
    });
    hookResult = result;
    React.useEffect(() => {
      result.mutate("a", { bar: "b" }, { query: { baz: "c" } });
    }, []);
    return null;
  };
  render(
    <QueryClientProvider client={queryClient}>
      <Comp />
    </QueryClientProvider>,
  );
  await waitFor(
    () => {
      expect(hookResult?.isSuccess).toEqual(true);
      expect(onSuccessArgs).toBeDefined();
    },
    {
      interval: 500,
      timeout: 10000,
    },
  );
  expect(hookResult?.data?.req).toMatchInlineSnapshot(
    `"http://localhost:3000/pathQueryBody/a?baz=c"`,
  );
  expect(hookResult?.data?.body).toMatchInlineSnapshot(`
    {
      "bar": "b",
    }
  `);
  expect(onSuccessArgs).toMatchInlineSnapshot(`
    [
      {
        "body": {
          "bar": "b",
        },
        "req": "http://localhost:3000/pathQueryBody/a?baz=c",
      },
      {
        "args": [
          "a",
          {
            "bar": "b",
          },
          {
            "query": {
              "baz": "c",
            },
          },
        ],
      },
      undefined,
    ]
  `);
}, 15000);
it("post with path, query and body - onSuccess hook passed to mutate fn", async () => {
  const endpoint = api.resources.pathQueryBody.actions.update;
  let onSuccessArgs: any[] | undefined;
  let hookResult: ClientUseMutationResult<typeof endpoint> | undefined;
  const Comp = () => {
    const result = useClient().pathQueryBody.useUpdate();
    hookResult = result;
    React.useEffect(() => {
      result.mutate(
        "a",
        { bar: "b" },
        {
          query: { baz: "c" },
          onSuccess: (...args) => (onSuccessArgs = args),
        },
      );
    }, []);
    return null;
  };
  render(
    <QueryClientProvider client={queryClient}>
      <Comp />
    </QueryClientProvider>,
  );
  await waitFor(
    () => {
      expect(hookResult?.isSuccess).toEqual(true);
      expect(onSuccessArgs).toBeDefined();
    },
    {
      interval: 500,
      timeout: 10000,
    },
  );
  expect(hookResult?.data?.req).toMatchInlineSnapshot(
    `"http://localhost:3000/pathQueryBody/a?baz=c"`,
  );
  expect(hookResult?.data?.body).toMatchInlineSnapshot(`
    {
      "bar": "b",
    }
  `);
  expect(onSuccessArgs).toMatchInlineSnapshot(`
    [
      {
        "body": {
          "bar": "b",
        },
        "req": "http://localhost:3000/pathQueryBody/a?baz=c",
      },
      {
        "args": [
          "a",
          {
            "bar": "b",
          },
          {
            "query": {
              "baz": "c",
            },
          },
        ],
      },
      undefined,
    ]
  `);
}, 15000);

function typeTests() {
  const client = useClient();

  // @ts-expect-error
  client.query.useUpdate().mutate();
  // @ts-expect-error
  client.query.useUpdate().mutate("a");
  // @ts-expect-error
  client.query.useUpdate().mutate({});
  // @ts-expect-error
  client.query.useUpdate().mutate({ query: {} });
  // @ts-expect-error
  client.query.useUpdate().mutate({ query: { bar: 1 } });
  client.query.useUpdate().mutate({ query: { bar: "a" }, onError: () => {} });
  client.query.useUpdate().mutate({ query: { bar: 1 } });
  client.query.useUpdate().mutate({ query: { bar: "a" }, onError: () => {} });

  // Valid usage with path only (optional query)
  client.optionalQuery.useUpdate().mutate("a");
  // Valid usage with empty query object
  client.optionalQuery.useUpdate().mutate("a", { query: {} });
  // Valid usage with query and options
  client.optionalQuery.useUpdate().mutate("a", {
    query: { bar: "a" },
  });
  // Valid usage with options only (path is required, so this should error)
  // @ts-expect-error - Path is required
  client.optionalQuery.useUpdate().mutate({ onError: () => {} });
  // Valid usage with path and options
  client.optionalQuery.useUpdate().mutate("a", { onError: () => {} });
  // Valid usage with all parameters
  client.optionalQuery.useUpdate().mutate("a", {
    query: { bar: "a" },
    onError: () => {},
  });

  // @ts-expect-error
  client.pathQuery.useUpdate().mutate();
  // @ts-expect-error
  client.pathQuery.useUpdate().mutate("a");
  // @ts-expect-error
  client.pathQuery.useUpdate().mutate({ query: { bar: "b" } });
  // @ts-expect-error
  client.pathQuery.useUpdate().mutate(1, { query: { bar: "b" } });
  // @ts-expect-error
  client.pathQuery.useUpdate().mutate("a", {});
  // @ts-expect-error
  client.pathQuery.useUpdate().mutate("a", { query: {} });
  // @ts-expect-error
  client.pathQuery.useUpdate().mutate("a", { query: { bar: 1 } });
  client.pathQuery
    .useUpdate()
    .mutate("a", { query: { bar: "b" }, onError: () => {} });

  // @ts-expect-error
  client.pathOptionalQuery.useUpdate().mutate();
  // @ts-expect-error
  client.pathOptionalQuery.useUpdate().mutate(1);
  // @ts-expect-error
  // This should error because query must be an object with a string 'bar' property
  // @ts-expect-error - Query must be an object with 'bar' property
  client.pathOptionalQuery.useUpdate().mutate("a", { query: 1 });
  // @ts-expect-error
  client.pathOptionalQuery.useUpdate().mutate("a", { query: { bar: 1 } });
  // @ts-expect-error
  client.pathOptionalQuery.useUpdate().mutate(1, { query: { bar: "a" } });
  // These should not error because query parameters are optional for pathOptionalQuery
  client.pathOptionalQuery.useUpdate().mutate("a");
  client.pathOptionalQuery.useUpdate().mutate("a", {});
  client.pathOptionalQuery.useUpdate().mutate("a", { query: { bar: "b" } });
  client.pathOptionalQuery
    .useUpdate()
    .mutate("a", { query: { bar: "b" }, onError: () => {} });

  // @ts-expect-error - Missing required body
  client.body.useUpdate().mutate();
  // @ts-expect-error - Body must be an object with 'bar' property
  client.body.useUpdate().mutate("a");
  // @ts-expect-error - Missing required 'bar' property in body
  client.body.useUpdate().mutate({});
  // @ts-expect-error - 'bar' must be a string
  client.body.useUpdate().mutate({ bar: 1 });
  // Valid usage with body
  client.body.useUpdate().mutate({ body: { bar: "a" } });
  // Valid usage with body and options
  client.body.useUpdate().mutate({ body: { bar: "a" } }, { onError: () => {} });

  // @ts-expect-error - Missing required path parameter and body
  client.pathBody.useUpdate().mutate();
  // @ts-expect-error - Missing required body
  client.pathBody.useUpdate().mutate("a");
  // @ts-expect-error - Missing required 'bar' property in body
  client.pathBody.useUpdate().mutate("a", {});
  // @ts-expect-error - 'bar' must be a string
  client.pathBody.useUpdate().mutate("a", { bar: 1 });
  // @ts-expect-error
  client.pathBody.useUpdate().mutate(1, { bar: "a" });
  client.pathBody.useUpdate().mutate("a", { bar: "a" });
  client.pathBody.useUpdate().mutate("a", { bar: "a" }, { onError: () => {} });

  // @ts-expect-error - Missing required query and body
  client.queryBody.useUpdate().mutate();
  // @ts-expect-error - Invalid parameter type
  client.queryBody.useUpdate().mutate(1);
  // @ts-expect-error - Missing required properties
  client.queryBody.useUpdate().mutate({});
  // @ts-expect-error - Invalid property types
  client.queryBody.useUpdate().mutate({ bar: 1 });
  // @ts-expect-error - Missing required body
  client.queryBody.useUpdate().mutate({ query: { bar: "a" } });
  // @ts-expect-error - Missing required query
  client.queryBody.useUpdate().mutate({ body: { bar: "a" } });
  // Valid usage with query and body
  client.queryBody.useUpdate().mutate({
    query: { bar: "a" },
    body: { bar: "a" },
  });
  // Valid usage with options
  client.queryBody.useUpdate().mutate(
    {
      query: { bar: "a" },
      body: { bar: "a" },
    },
    { onError: () => {} },
  );

  // @ts-expect-error
  client.optionalQueryBody.useUpdate().mutate();
  // @ts-expect-error
  client.optionalQueryBody.useUpdate().mutate(1);
  // @ts-expect-error - Missing required body
  client.optionalQueryBody.useUpdate().mutate();
  // @ts-expect-error - Invalid parameter type
  client.optionalQueryBody.useUpdate().mutate(1);
  // Valid usage with empty body (optional query, but body is required)
  client.optionalQueryBody.useUpdate().mutate({ body: {} });
  // @ts-expect-error - 'bar' in body must be a string
  client.optionalQueryBody.useUpdate().mutate({ body: { bar: 1 } });
  // Valid usage with optional query and empty body
  client.optionalQueryBody.useUpdate().mutate({
    query: { bar: "a" },
    body: {},
  });
  // @ts-expect-error - Missing required body
  client.optionalQueryBody.useUpdate().mutate({ query: { bar: "a" } });
  // Valid usage with both query and body
  client.optionalQueryBody.useUpdate().mutate(
    {
      query: { bar: "a" },
      body: { bar: "a" },
    },
    { onError: () => {} },
  );

  // @ts-expect-error - Missing required path and body
  client.pathOptionalQueryBody.useUpdate().mutate();
  // @ts-expect-error - Path must be a string
  client.pathOptionalQueryBody.useUpdate().mutate(1);
  // @ts-expect-error - Missing required body
  client.pathOptionalQueryBody.useUpdate().mutate("a");
  // Valid usage with path and empty body
  client.pathOptionalQueryBody.useUpdate().mutate("a", { body: {} });
  // @ts-expect-error - 'bar' in query must be a string
  client.pathOptionalQueryBody.useUpdate().mutate("a", {
    query: { bar: 1 },
    body: {},
  });
  // @ts-expect-error - 'bar' in body must be a string
  client.pathOptionalQueryBody.useUpdate().mutate("a", {
    body: { bar: 1 },
  });
  // @ts-expect-error - Path must be a string
  client.pathOptionalQueryBody.useUpdate().mutate(1, {
    query: { bar: "a" },
    body: { bar: "a" },
  });
  // Valid usage with all parameters
  client.pathOptionalQueryBody.useUpdate().mutate("a", {
    query: { bar: "a" },
    body: { bar: "a" },
  });
  // Valid usage with options
  client.pathOptionalQueryBody.useUpdate().mutate(
    "a",
    {
      query: { bar: "a" },
      body: { bar: "a" },
    },
    { onError: () => {} },
  );
}
