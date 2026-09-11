import { api } from "../../api/api";
import { khulnasoftNextPageRoute } from "@khulnasoft-api/next";

export default khulnasoftNextPageRoute(api.topLevel.actions.getOpenapi);
