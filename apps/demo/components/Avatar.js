"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var router_1 = require("next/router");
var react_1 = require("react");
var useUser_1 = __importDefault(require("../hooks/useUser"));
var Avatar = function (_a) {
  var userId = _a.userId,
    isLarge = _a.isLarge,
    hasBorder = _a.hasBorder;
  var router = (0, router_1.useRouter)();
  var fetchedUser = (0, useUser_1.default)(userId).data;
  var onClick = (0, react_1.useCallback)(
    function (event) {
      event.stopPropagation();
      var url = "/users/".concat(userId);
      router.push(url);
    },
    [router, userId]
  );
  return (
    <div
      className={"\n        "
        .concat(hasBorder ? "border-4 border-black" : "", "\n        ")
        .concat(isLarge ? "h-32" : "h-12", "\n        ")
        .concat(
          isLarge ? "w-32" : "w-12",
          "\n        grow-0\n        shrink-0\n        rounded-full \n        hover:opacity-90 \n        transition \n        cursor-pointer\n        relative\n      "
        )}
    >
      <image_1.default
        fill
        style={{
          objectFit: "cover",
          borderRadius: "100%",
        }}
        alt="Avatar"
        onClick={onClick}
        src={
          (fetchedUser === null || fetchedUser === void 0
            ? void 0
            : fetchedUser.profileImage) || "/images/placeholder.png"
        }
      />
    </div>
  );
};
exports.default = Avatar;
