import { khulnasoft } from "../../libs/khulnasoft";
import { z } from "khulnasoft";
import { User } from "./models";

export const list = khulnasoft.endpoint({
  endpoint: "GET /api/users",
  response: z.pageResponse(User),

  query: z.PaginationParams.extend({
    sortBy: z.enum(["createdAt"]).default("createdAt"),
    sortDirection: z.enum(["desc"]).default("desc"),
  }),
  async handler(params, ctx) {
    return await ctx.prisma.paginate({});
  },
});
