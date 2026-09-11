"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var useUser_1 = __importDefault(require("../../hooks/useUser"));
var Avatar_1 = __importDefault(require("../Avatar"));
var UserHero = function (_a) {
  var userId = _a.userId;
  var fetchedUser = (0, useUser_1.default)(userId).data;
  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {(fetchedUser === null || fetchedUser === void 0
          ? void 0
          : fetchedUser.coverImage) && (
          <image_1.default
            src={fetchedUser.coverImage}
            fill
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar_1.default userId={userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};
exports.default = UserHero;
