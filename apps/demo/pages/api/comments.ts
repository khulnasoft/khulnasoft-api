import { comments } from "../../api/comments";
import { khulnasoftNextPageRoute } from "@khulnasoft-api/next";

export default khulnasoftNextPageRoute(comments.actions.create);
