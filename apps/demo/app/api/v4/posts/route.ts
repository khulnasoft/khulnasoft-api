import { create } from "../../../../api/posts/create";
import { list } from "../../../../api/posts/list";
import { khulnasoftNextAppRoute } from "@khulnasoft-api/next";

const routerOptions = {
  basePathMap: { "/api/": "/api/v4/" },
};

export const GET = khulnasoftNextAppRoute(list, routerOptions);
export const POST = khulnasoftNextAppRoute(create, routerOptions);
