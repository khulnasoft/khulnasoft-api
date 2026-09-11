"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var date_fns_1 = require("date-fns");
var useLoginModal_1 = __importDefault(require("../../hooks/useLoginModal"));
var useCurrentUser_1 = __importDefault(require("../../hooks/useCurrentUser"));
var useLike_1 = __importDefault(require("../../hooks/useLike"));
var Avatar_1 = __importDefault(require("../Avatar"));
var PostItem = (0, react_1.forwardRef)(function PostItem(_a, ref) {
  var _this = this;
  var _b;
  var _c = _a.item,
    item = _c === void 0 ? {} : _c,
    userId = _a.userId,
    style = _a.style;
  var router = (0, router_1.useRouter)();
  var loginModal = (0, useLoginModal_1.default)();
  var currentUser = (0, useCurrentUser_1.default)().data;
  var _d = (0, useLike_1.default)({ postId: item.id, userId: userId }),
    hasLiked = _d.hasLiked,
    toggleLike = _d.toggleLike;
  var goToUser = (0, react_1.useCallback)(
    function (ev) {
      ev.stopPropagation();
      router.push("/users/".concat(item.user.id));
    },
    [router, item.user.id]
  );
  var goToPost = (0, react_1.useCallback)(
    function () {
      router.push("/posts/".concat(item.id));
    },
    [router, item.id]
  );
  var onLike = (0, react_1.useCallback)(
    function (ev) {
      return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          ev.stopPropagation();
          if (!currentUser) {
            return [2 /*return*/, loginModal.onOpen()];
          }
          toggleLike();
          return [2 /*return*/];
        });
      });
    },
    [loginModal, currentUser, toggleLike]
  );
  var LikeIcon = hasLiked ? ai_1.AiFillHeart : ai_1.AiOutlineHeart;
  var createdAt = (0, react_1.useMemo)(
    function () {
      if (!(item === null || item === void 0 ? void 0 : item.createdAt)) {
        return null;
      }
      return (0, date_fns_1.formatDistanceToNowStrict)(
        new Date(item.createdAt)
      );
    },
    [item.createdAt]
  );
  return (
    <div
      ref={ref}
      style={style}
      onClick={goToPost}
      className="
        border-b-[1px] 
        border-neutral-800 
        p-5 
        cursor-pointer 
        hover:bg-neutral-900 
        transition
      "
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar_1.default userId={item.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              onClick={goToUser}
              className="
                text-white 
                font-semibold 
                cursor-pointer 
                hover:underline
            "
            >
              {item.user.name}
            </p>
            <span
              onClick={goToUser}
              className="
                text-neutral-500
                cursor-pointer
                hover:underline
                hidden
                md:block
            "
            >
              @{item.user.username}
            </span>
            <span className="text-neutral-500 text-sm">{createdAt}</span>
          </div>
          <div className="text-white mt-1">{item.body}</div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div
              className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-sky-500
            "
            >
              <ai_1.AiOutlineMessage size={20} />
              <p>
                {((_b = item.comments) === null || _b === void 0
                  ? void 0
                  : _b.length) || 0}
              </p>
            </div>
            <div
              onClick={onLike}
              className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-red-500
            "
            >
              <LikeIcon color={hasLiked ? "red" : ""} size={20} />
              <p>{item.likedIds.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
exports.default = PostItem;
