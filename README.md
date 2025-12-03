# @khulnasoft-api/hono: Hono plugin for Khulnasoft API

Use this plugin to serve a Khulnasoft API in a Hono app.

# Getting started

> **Warning**
>
> This is alpha software, and we may make significant changes in the coming months.
> We're eager for you to try it out and let us know what you think!

## Installation

```
npm i --save khulnasoft/khulnasoft-api#hono-0.1.0
```

## Creating a Hono app

```ts
import { khulnasoftApi } from "@khulnasoft-api/hono";
import { Hono } from "hono";
import api from "./api";

const app = new Hono();
app.use("*", khulnasoftApi(api));
```

Individual handlers can also use Hono responses:

```ts
const retrieve = khulnasoft.endpoint({
  endpoint: "GET /api/posts",
  response: z.any() as z.ZodType<Response>,
  handler: (_, context) => {
    const [c] = context.server.args;

    // c is a Hono context
    return c.redirect("/");
  },
});
```
