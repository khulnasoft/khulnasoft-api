import { khulnasoft } from "../../libs/khulnasoft";
import { create } from "./create";
import { list } from "./list";
import { retrieve } from "./retrieve";
import { Post, PostPage, PostSelection } from "./models";

export const posts = khulnasoft.resource({
  summary: "Posts; the tweets of this twitter clone",
  internal: false,
  models: {
    Post,
    PostPage,
    PostSelection,
  },
  actions: {
    create,
    list,
    retrieve,
  },
});
