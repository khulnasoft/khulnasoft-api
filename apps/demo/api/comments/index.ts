import { khulnasoft } from "../../libs/khulnasoft";
import { create } from "./create";
import { Comment, CommentSelection } from "./models";

export const comments = khulnasoft.resource({
  summary: "comments",
  internal: false,
  models: {
    Comment,
    CommentSelection,
  },
  actions: {
    create,
  },
});
