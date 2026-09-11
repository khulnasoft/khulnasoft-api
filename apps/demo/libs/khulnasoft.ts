import { Khulnasoft } from "khulnasoft";
import { makePrismaPlugin } from "@khulnasoft-api/prisma";
import { makeNextPlugin } from "@khulnasoft-api/next";
import { makeNextAuthPlugin } from "@khulnasoft-api/next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { makeCurrentUserPlugin } from "./currentUserPlugin";
import { User } from "@prisma/client";
import { typeSchemas } from "../.khulnasoft-codegen";

declare module "khulnasoft" {
  interface KhulnasoftCustomContext {
    currentUser?: User;
    requireCurrentUser: () => User;
  }
}

const plugins = {
  next: makeNextPlugin(),
  // @ts-ignore
  nextAuth: makeNextAuthPlugin({ authOptions }),
  prisma: makePrismaPlugin(),
  currentUser: makeCurrentUserPlugin(),
};

export const khulnasoft = new Khulnasoft({
  plugins,
  typeSchemas,
});
