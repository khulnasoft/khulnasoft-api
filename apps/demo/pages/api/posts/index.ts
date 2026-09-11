import { posts } from "../../../api/posts";
import { khulnasoftNextPageRoute } from "@khulnasoft-api/next";

export default khulnasoftNextPageRoute(
  posts.actions.list,
  posts.actions.create
);
