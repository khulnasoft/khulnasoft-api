---
sidebar_position: 1
---

# Add user to Khulnasoft context

You may wish to set a current user property on the Khulnasoft context. The
Khulnasoft context can be extended by declaring an interface with the name
`KhulnasoftCustomContext` in the `khulnasoft` module. Here's how you can create
a custom plugin to do that:

```ts
// ~/libs/currentUserPlugin.ts

import {
  AnyEndpoint,
  MakeKhulnasoftPlugin,
  Params,
  PartialKhulnasoftContext,
} from "khulnasoft";

export const makeCurrentUserPlugin =
  (): MakeKhulnasoftPlugin => (khulnasoft) => ({
    async middleware<EC extends AnyEndpoint>(
      endpoint: EC,
      params: Params,
      context: PartialKhulnasoftContext<EC>,
    ) {
      const { session } = context;

      // session?.user is exactly what was returned from authorize(),
      // but doesn't have complete type information
      context.currentUser = session?.user as any;
    },
  });
```

```diff
// ~/libs/khulnasoft.ts

import { Khulnasoft } from "khulnasoft";
import { makeNextPlugin } from "@khulnasoft-api/next";
import { makeNextAuthPlugin } from "@khulnasoft-api/next-auth";
import { makeCurrentUserPlugin } from "./currentUserPlugin";
import { authOptions } from "~/pages/api/auth/[...nextauth]";

+declare module "khulnasoft" {
+  interface KhulnasoftCustomContext {
+    currentUser?: User;
+  }
+}

const plugins = {
  next: makeNextPlugin(),
  nextAuth: makeNextAuthPlugin({ authOptions }),
+  currentUser: makeCurrentUserPlugin(),
};

export const khulnasoft = new Khulnasoft({
  plugins,
});
```
