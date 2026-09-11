"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var react_spinners_1 = require("react-spinners");
var useUser_1 = __importDefault(require("../../hooks/useUser"));
var PostFeed_1 = __importDefault(require("../../components/posts/PostFeed"));
var Header_1 = __importDefault(require("../../components/Header"));
var UserBio_1 = __importDefault(require("../../components/users/UserBio"));
var UserHero_1 = __importDefault(require("../../components/users/UserHero"));
var UserView = function () {
  var router = (0, router_1.useRouter)();
  var userId = router.query.userId;
  var _a = (0, useUser_1.default)(userId),
    fetchedUser = _a.data,
    isLoading = _a.isLoading;
  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <react_spinners_1.ClipLoader color="lightblue" size={80} />
      </div>
    );
  }
  return (
    <>
      <Header_1.default
        showBackArrow
        label={
          fetchedUser === null || fetchedUser === void 0
            ? void 0
            : fetchedUser.name
        }
      />
      <UserHero_1.default userId={userId} />
      <UserBio_1.default userId={userId} />
      <PostFeed_1.default userId={userId} />
    </>
  );
};
exports.default = UserView;
