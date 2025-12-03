# @khulnasoft-api/next-auth: next-auth plugin for Khulnasoft API

Use this plugin to add `next-auth` session to Khulnasoft API
context.

# Getting started

> **Warning**
>
> This is alpha software, and we may make significant changes in the coming months.
> We're eager for you to try it out and let us know what you think!

This guide assumes you've already set up [@khulnasoft-api/next](/packages/next).

## Installation

```
npm i --save next-auth khulnasoft/khulnasoft-api#next-auth-0.0.3
```

## Add `[...nextauth]` route

Here is an example using `prisma`:

```ts
// ~/pages/api/auth/[...nextauth].ts

import bcrypt from "bcrypt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "~/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
```

## Add plugin to Khulnasoft instance

```diff
// ~/libs/khulnasoft.ts

import { Khulnasoft } from "khulnasoft";
import { makeNextPlugin } from "@khulnasoft-api/next";
+import { makeNextAuthPlugin } from "@khulnasoft-api/next-auth";
+import { authOptions } from "~/pages/api/auth/[...nextauth]";

const plugins = {
  next: makeNextPlugin(),
+  nextAuth: makeNextAuthPlugin({ authOptions }),
};

export const khulnasoft = new Khulnasoft({
  plugins,
});
```

## Optional: make a custom plugin to add the current user to Khulnasoft context

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
      context: PartialKhulnasoftContext<EC>
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

declare module "khulnasoft" {
  interface KhulnasoftCustomContext {
    currentUser?: User,
  }
}

const plugins = {
  next: makeNextPlugin(),
  nextAuth: makeNextAuthPlugin({ authOptions }),
+  currentUser: makeCurrentUserPlugin(),
};

export const khulnasoft = new Khulnasoft({
  plugins,
});
```
