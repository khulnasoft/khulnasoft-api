import {
  AnyEndpoint,
  MakeKhulnasoftPlugin,
  Params,
  KhulnasoftContext,
  UnauthorizedError,
} from "khulnasoft";
import { User } from ".prisma/client";
import prisma from "./prismadb";

export const makeCurrentUserPlugin =
  (): MakeKhulnasoftPlugin => (khulnasoft) => ({
    async middleware<EC extends AnyEndpoint>(
      params: Params,
      context: KhulnasoftContext<EC>,
    ) {
      const { session } = context;

      const email = session?.user?.email;
      const currentUser = email
        ? await prisma.user.findUniqueOrThrow({ where: { email } })
        : undefined;

      context.requireCurrentUser = (): User => {
        if (!currentUser) {
          throw new UnauthorizedError({ naughty: "you aint logged in!" });
        }
        return currentUser;
      };

      context.currentUser = currentUser;
    },
  });
