import { z } from "khulnasoft";
import { khulnasoft } from "../libs/khulnasoft";
import { users } from "./users";
import { posts } from "./posts";
import { params } from "./params";
import { comments } from "./comments";

export const api = khulnasoft.api({
  basePath: "/api",
  openapi: {
    endpoint: "GET /api/openapi",
  },
  resources: {
    users,
    posts,
    comments,
    params,
    test: khulnasoft.resource({
      summary: "test",
      internal: false,
      actions: {
        foo: khulnasoft.endpoint({
          endpoint: "PUT /api/foo/{value}",
          path: z.path({
            value: z.coerce.number(z.string()),
          }),
          response: z.response({
            foo: z.number(),
          }),
          handler({ value }) {
            return { foo: value };
          },
        }),
      },
    }),
  },
});
