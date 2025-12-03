# @khulnasoft-api/prisma: Prisma plugin for Khulnasoft API

Provides highly productive ways of creating APIs with Prisma and Khulnasoft.

# Getting started

> **Warning**
>
> This is alpha software, and we may make significant changes in the coming months.
> We're eager for you to try it out and let us know what you think!

## Installation

```
npm i --save khulnasoft/khulnasoft-api#prisma-0.0.1
```

## Add plugin to khulnasoft instance

```diff
// ~/libs/khulnasoft.ts

import { Khulnasoft } from "khulnasoft";
+import { makePrismaPlugin } from "@khulnasoft-api/prisma";

const plugins = {
+  prisma: makePrismaPlugin(),
};

export const khulnasoft = new Khulnasoft({
  plugins,
});
```

## Declare `prismaModel` on a response type

```diff
// ~/api/posts/models.ts

import { z } from "khulnasoft";
+import prisma from "~/libs/prisma";

export const Post = z.response({
  id: z.string().uuid(),
  body: z.string().nullable().optional(),
  userId: z.string().uuid(),
}).prismaModel(prisma.post);
```

## Perform CRUD operations on response `prismaModel`

Any endpoint whose `response` has a `prismaModel` declared with have `ctx.prisma`
available in its `handler`. `ctx.prisma` provides wrappers for the following methods
that magically inject options for [`include`](/packages/khulnasoft/docs/inclusion.md)
and [`select`](/packages/khulnasoft/docs/selection.md) params as necessary:

- `findUnique`
- `findUniqueOrThrow`
- `findMany` (also magically [injects pagination options](/packages/prisma/docs/pagination.md#lower-level-ctxprismafindmanyoptions) from parameters)
- `create`
- `update`
- `delete`

> **Warning**
>
> This currently only works if the primary key is named `id`.
> We plan to remove this limitation soon.

```ts
// ~/api/posts/retrieve.ts

import { khulnasoft } from "~/libs/khulnasoft";
import { z } from "khulnasoft";
import prisma from "~/libs/prismadb";
import { Post } from "./models";

export const retrieve = khulnasoft.endpoint({
  endpoint: "GET /api/posts/{postId}",
  response: Post,
  path: z.object({
    postId: z.string(),
  }),
  query: z.object({
    include: z.includes(Post, 3).optional(),
    select: z.selects(Post, 3).optional(),
  }),
  async handler({ postId }, ctx) {
    // Prisma plugin magically injects options for include and select!
    return await ctx.prisma.findUniqueOrThrow({ where: { id: postId } });
  },
});
```

```ts
// ~/api/posts/create.ts

import { khulnasoft } from "~/libs/khulnasoft";
import { z } from "khulnasoft";
import { Post } from "./models";

export const create = khulnasoft.endpoint({
  endpoint: "POST /api/posts",
  response: Post,
  body: z.object({
    body: z.string(),
  }),
  async handler({ body }, ctx) {
    return await ctx.prisma.create({
      data: {
        userId: ctx.requireCurrentUser().id,
        body,
      },
    });
  },
});
```

## Use `prismaModelLoader` on a parameter

The following `post: z.string().prismaModelLoader(prisma.post)`
parameter takes a string `id` as input from the `{post}` path
parameter and is transformed to the fetched model instance in
the `handler`.

> **Warning**
>
> This currently only works if the primary key is named `id`.
> We plan to remove this limitation soon.

```ts
// ~/api/posts/retrieve.ts

import { khulnasoft } from "@/libs/khulnasoft";
import { z } from "khulnasoft";
import prisma from "@/libs/prismadb";
import { Post } from "./models";

export const retrieve = khulnasoft.endpoint({
  endpoint: "GET /api/posts/{post}",
  response: Post,
  path: z.object({
    post: z.string().prismaModelLoader(prisma.post),
  }),
  async handler({ post }, ctx) {
    // here post is fetched Prisma model, not a string
    return post;
  },
});
```

# In-depth topics

## [Pagination](/packages/prisma/docs/pagination.md)

`@khulnasoft-api/prisma` makes it easy to implement pagination with Prisma.
