"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var useUsers_1 = __importDefault(require("../../hooks/useUsers"));
var Avatar_1 = __importDefault(require("../Avatar"));
var FollowBar = function () {
  var _a = (0, useUsers_1.default)().data,
    users = _a === void 0 ? [] : _a;
  if (users.length === 0) {
    return null;
  }
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-neutral-800 rounded-xl p-4">
        <h2 className="text-white text-xl font-semibold">Who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map(function (user) {
            return (
              <div key={user.id} className="flex flex-row gap-4">
                <Avatar_1.default userId={user.id} />
                <div className="flex flex-col">
                  <p className="text-white font-semibold text-sm">
                    {user.name}
                  </p>
                  <p className="text-neutral-400 text-sm">@{user.username}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
exports.default = FollowBar;
