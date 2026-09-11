import { api } from "../../../../api/api";
import { khulnasoftNextAppCatchAllRouter } from "@khulnasoft-api/next";

const { GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS } =
  khulnasoftNextAppCatchAllRouter(api, {
    catchAllParam: "splat",
    basePathMap: { "/api/": "/api/v3/" },
  });

export { GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS };
