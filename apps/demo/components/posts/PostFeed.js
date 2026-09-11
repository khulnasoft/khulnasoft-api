"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== "default") __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var PostItem_1 = __importDefault(require("./PostItem"));
var client_1 = require("../../api/client");
var PostFeed = function (_a) {
  var userId = _a.userId;
  var client = (0, client_1.useClient)();
  var _b = client.posts.useInfiniteList({
      userId: userId,
      pageSize: 5,
      // @ts-ignore
      include: ["items.user", "items.comments"],
    }),
    hasNextPage = _b.hasNextPage,
    isFetchingNextPage = _b.isFetchingNextPage,
    fetchNextPage = _b.fetchNextPage,
    items = _b.items;
  return (
    <>
      {items.map(function (post) {
        return <PostItem_1.default key={post.id} userId={userId} item={post} />;
      })}
      {hasNextPage ? (
        <LoadMoreButton
          loading={isFetchingNextPage}
          onClick={function () {
            return fetchNextPage();
          }}
        />
      ) : undefined}
    </>
  );
};
exports.default = PostFeed;
function LoadMoreButton(_a) {
  var loading = _a.loading,
    onClick = _a.onClick;
  return (
    <button
      className="
        text-white
        border-b-[1px]
        border-neutral-800
        p-5
        cursor-pointer
        hover:bg-neutral-900
        transition
        w-full
      "
      disabled={loading}
      onClick={onClick}
    >
      {loading ? "Loading..." : "Load more..."}
    </button>
  );
}
