import { khulnasoft } from "../../libs/khulnasoft";
import { z } from "khulnasoft";
import { PostResponse, PostIdLoader } from "./models";

type PathParams = {
  post: PostIdLoader;
};

type QueryParams = {
  include?: z.Includes<PostResponse, 3>;
  select?: z.Selects<PostResponse, 3>;
};

export const retrieve = khulnasoft
  .types<{ response: PostResponse; path: PathParams; query: QueryParams }>()
  .endpoint({
    endpoint: "GET /api/posts/{post}",

    async handler({ post }, ctx) {
      return post;
    },
  });
