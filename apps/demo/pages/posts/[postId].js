"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var react_spinners_1 = require("react-spinners");
var Header_1 = __importDefault(require("../../components/Header"));
var Form_1 = __importDefault(require("../../components/Form"));
var PostItem_1 = __importDefault(require("../../components/posts/PostItem"));
var CommentFeed_1 = __importDefault(
  require("../../components/posts/CommentFeed")
);
var client_1 = require("../../api/client");
var PostView = function () {
  var router = (0, router_1.useRouter)();
  var postId = router.query.postId;
  var client = (0, client_1.useClient)();
  var _a = client.posts.useRetrieve(
      typeof postId === "string" ? postId : "",
      { include: ["user", "comments.user"] },
      { enabled: typeof postId === "string" }
    ),
    fetchedPost = _a.data,
    isLoading = _a.isLoading;
  if (isLoading || !fetchedPost) {
    return (
      <div className="flex justify-center items-center h-full">
        <react_spinners_1.ClipLoader color="lightblue" size={80} />
      </div>
    );
  }
  var comments = fetchedPost.comments;
  return (
    <>
      <Header_1.default showBackArrow label="Tweet" />
      <PostItem_1.default item={fetchedPost} />
      <Form_1.default
        postId={postId}
        isComment
        placeholder="Tweet your reply"
      />
      {comments && <CommentFeed_1.default comments={comments} />}
    </>
  );
};
exports.default = PostView;
