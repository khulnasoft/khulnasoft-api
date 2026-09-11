"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var react_1 = require("react");
var date_fns_1 = require("date-fns");
var Avatar_1 = __importDefault(require("../Avatar"));
var CommentItem = function (_a) {
  var _b = _a.data,
    data = _b === void 0 ? {} : _b;
  var router = (0, router_1.useRouter)();
  var goToUser = (0, react_1.useCallback)(
    function (ev) {
      ev.stopPropagation();
      router.push("/users/".concat(data.user.id));
    },
    [router, data.user.id]
  );
  var createdAt = (0, react_1.useMemo)(
    function () {
      if (!(data === null || data === void 0 ? void 0 : data.createdAt)) {
        return null;
      }
      return (0, date_fns_1.formatDistanceToNowStrict)(
        new Date(data.createdAt)
      );
    },
    [data.createdAt]
  );
  return (
    <div
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
        <Avatar_1.default userId={data.user.id} />
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
              {data.user.name}
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
              @{data.user.username}
            </span>
            <span className="text-neutral-500 text-sm">{createdAt}</span>
          </div>
          <div className="text-white mt-1">{data.body}</div>
        </div>
      </div>
    </div>
  );
};
exports.default = CommentItem;
