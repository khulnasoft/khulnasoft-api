import { khulnasoft } from "../../libs/khulnasoft";

type PathParams = {
  id: number;
};

type QueryParams = {
  boolean?: boolean;
  number?: number;
  string?: string;
  date?: Date;
};

type Response = PathParams & QueryParams;

export const retrieve = khulnasoft
  .types<{ path: PathParams; query: QueryParams; response: Response }>()
  .endpoint({
    endpoint: "GET /api/params/{id}",
    async handler(params, ctx) {
      return params;
    },
  });
