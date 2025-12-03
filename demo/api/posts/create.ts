import { khulnasoft } from "../../libs/khulnasoft";
import { z } from "khulnasoft";
import { PostResponse } from "./models";

type QueryParams = {
  include?: z.Includes<PostResponse, 3>;
};

type Body = {
  body: string;
};

export const create = khulnasoft
  .types<{
    query: QueryParams;
    body: Body;
    response: PostResponse;
  }>()
  .endpoint({
    endpoint: "POST /api/posts",
    config: {
      authenticated: true,
    },
    async handler({ body }, ctx) {
      return await ctx.prisma.create({
        data: {
          userId: ctx.requireCurrentUser().id,
          body,
        },
      });
    },
  });
