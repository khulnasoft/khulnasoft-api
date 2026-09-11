"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var useLoginModal_1 = __importDefault(require("../hooks/useLoginModal"));
var useRegisterModal_1 = __importDefault(require("../hooks/useRegisterModal"));
var useCurrentUser_1 = __importDefault(require("../hooks/useCurrentUser"));
var Avatar_1 = __importDefault(require("./Avatar"));
var Button_1 = __importDefault(require("./Button"));
var client_1 = require("../api/client");
var react_query_1 = require("@tanstack/react-query");
var Form = function (_a) {
  var placeholder = _a.placeholder,
    isComment = _a.isComment,
    postId = _a.postId;
  var registerModal = (0, useRegisterModal_1.default)();
  var loginModal = (0, useLoginModal_1.default)();
  var client = (0, client_1.useClient)();
  var queryClient = (0, react_query_1.useQueryClient)();
  var currentUser = (0, useCurrentUser_1.default)().data;
  var _b = (0, react_1.useState)(""),
    body = _b[0],
    setBody = _b[1];
  var onSuccess = (0, react_1.useCallback)(
    function () {
      react_hot_toast_1.toast.success("Tweet created");
      setBody("");
      queryClient.invalidateQueries({
        queryKey: client.posts.list.getQueryKey(),
      });
      if (postId != null) {
        queryClient.invalidateQueries({
          queryKey: client.posts.retrieve.getQueryKey(postId),
        });
      }
    },
    [postId]
  );
  var onError = (0, react_1.useCallback)(function () {
    react_hot_toast_1.toast.error("Something went wrong");
  }, []);
  var createComment = client.comments.useCreate({
    onSuccess: onSuccess,
    onError: onError,
  });
  var createPost = client.posts.useCreate({
    onSuccess: onSuccess,
    onError: onError,
  });
  var isLoading = createComment.isLoading || createPost.isLoading;
  var onSubmit = (0, react_1.useCallback)(
    function () {
      if (isComment) {
        if (!postId) {
          react_hot_toast_1.toast.error(
            "You must have a post selected to add a comment."
          );
          return;
        }
        createComment.mutate({ body: body }, { query: { postId: postId } });
      } else {
        createPost.mutate({ body: body });
      }
    },
    [body, isComment, postId, createComment, createPost]
  );
  return (
    <div className="border-b-[1px] border-neutral-800 px-5 py-2">
      {currentUser ? (
        <div className="flex flex-row gap-4">
          <div>
            <Avatar_1.default
              userId={
                currentUser === null || currentUser === void 0
                  ? void 0
                  : currentUser.id
              }
            />
          </div>
          <div className="w-full">
            <textarea
              disabled={isLoading}
              onChange={function (event) {
                return setBody(event.target.value);
              }}
              value={body}
              className="
                disabled:opacity-80
                peer
                resize-none
                mt-3
                w-full
                bg-black
                ring-0
                outline-none
                text-[20px]
                placeholder-neutral-500
                text-white
              "
              placeholder={placeholder}
            ></textarea>
            <hr
              className="
                opacity-0
                peer-focus:opacity-100
                h-[1px]
                w-full
                border-neutral-800
                transition"
            />
            <div className="mt-4 flex flex-row justify-end">
              <Button_1.default
                disabled={isLoading || !body}
                onClick={onSubmit}
                label="Tweet"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="py-8">
          <h1 className="text-white text-2xl text-center mb-4 font-bold">
            Welcome to Twitter
          </h1>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button_1.default label="Login" onClick={loginModal.onOpen} />
            <Button_1.default
              label="Register"
              onClick={registerModal.onOpen}
              secondary
            />
          </div>
        </div>
      )}
    </div>
  );
};
exports.default = Form;
