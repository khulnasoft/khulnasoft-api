---
sidebar_position: 5
---

# Resources

A Khulnasoft API resource declares a group of related response models and
[endpoints](/khulnasoft/endpoints). Here's a basic example:

```ts
// ~/api/posts/index.ts

import { khulnasoft } from "~/libs/khulnasoft";
import { create } from "./create";
import { list } from "./list";
import { retrieve } from "./retrieve";
import { Post, PostPage, PostSelection } from "./models";

export const posts = khulnasoft.resource({
  summary: "Posts; the tweets of this twitter clone",
  internal: false,
  models: {
    Post,
    PostPage,
    PostSelection,
  },
  actions: {
    create,
    list,
    retrieve,
  },
});
```

In this example, the imported `Post`, `PostPage`, and `PostSelection` are
response [schemas](/khulnasoft/category/schemas); declaring them in `models` causes the OpenAPI
endpoint to declare them in `#/components/schemas` and use `$ref`s to refer
to them elsewhere in the OpenAPI spec.

The imported `create`, `list`, and `retrieve` are [endpoints](/khulnasoft/endpoints).
In the client they will be accessible as `client.posts.create(...)` etc.
(assuming the API declares the `posts` resource as top level).

## Properties

### `models`

An object of named models; values must be response [schemas](/khulnasoft/category/schemas). The
OpenAPI endpoint will declare named models in `#/components/schemas`, named by the
keys in `models`.

### `actions`

An object of [endpoints](/khulnasoft/endpoints).
In the client they will be accessible as `client.posts.create(...)` etc.

### `namespacedResources`

An object of sub-resources. For example:

```ts
export const repos = khulnasoft.resource({
  namespacedResources: {
    issues: khulnasoft.resource({
      actions: {
        list: khulnasoft.endpoint(...) // would be available as client.repos.issues.list()
      }
    }),
  },
});
```
