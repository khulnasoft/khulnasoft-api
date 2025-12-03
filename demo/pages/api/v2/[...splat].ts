import { api } from "../../../api/api";
import { khulnasoftNextPageCatchAllRouter } from "@khulnasoft-api/next";

export default khulnasoftNextPageCatchAllRouter(api, {
  catchAllParam: "splat",
  basePathMap: { "/api/": "/api/v2/" },
});
