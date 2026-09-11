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
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var PostItem_1 = __importDefault(require("./PostItem"));
var client_1 = require("../../api/client");
var InfiniteScroll_1 = __importDefault(require("../InfiniteScroll"));
var InfinitePostFeed = function (_a) {
  var userId = _a.userId;
  var client = (0, client_1.useClient)();
  var _b = client.posts.useInfiniteList({
      userId: userId,
      // @ts-ignore
      include: ["items.user", "items.comments"],
    }),
    itemAndPlaceholderCount = _b.itemAndPlaceholderCount,
    useItem = _b.useItem;
  return (
    <div className="flex-auto">
      <InfiniteScroll_1.default
        itemCount={itemAndPlaceholderCount}
        useItem={useItem}
        minItemSize={100}
        Item={PostItem_1.default}
        Loading={LoadingItem}
        Error={ErrorItem}
      />
    </div>
  );
};
exports.default = InfinitePostFeed;
var StatusItem = React.forwardRef(function StatusItem(_a, ref) {
  var style = _a.style,
    children = _a.children;
  return (
    <div
      ref={ref}
      style={style}
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
    >
      {children}
    </div>
  );
});
var LoadingItem = React.forwardRef(function LoadingItem(props, ref) {
  return (
    <StatusItem {...props} ref={ref}>
      Loading...
    </StatusItem>
  );
});
var ErrorItem = React.forwardRef(function ErrorItem(_a, ref) {
  var error = _a.error,
    props = __rest(_a, ["error"]);
  return (
    <StatusItem {...props} ref={ref}>
      Error: {error.message}
    </StatusItem>
  );
});
