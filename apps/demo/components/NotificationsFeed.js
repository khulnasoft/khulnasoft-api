"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var bs_1 = require("react-icons/bs");
var useNotifications_1 = __importDefault(require("../hooks/useNotifications"));
var useCurrentUser_1 = __importDefault(require("../hooks/useCurrentUser"));
var react_1 = require("react");
var NotificationsFeed = function () {
  var _a = (0, useCurrentUser_1.default)(),
    currentUser = _a.data,
    mutateCurrentUser = _a.mutate;
  var _b = (0, useNotifications_1.default)(
      currentUser === null || currentUser === void 0 ? void 0 : currentUser.id
    ).data,
    fetchedNotifications = _b === void 0 ? [] : _b;
  (0, react_1.useEffect)(
    function () {
      mutateCurrentUser();
    },
    [mutateCurrentUser]
  );
  if (fetchedNotifications.length === 0) {
    return (
      <div className="text-neutral-600 text-center p-6 text-xl">
        No notifications
      </div>
    );
  }
  return (
    <div className="flex flex-col">
      {fetchedNotifications.map(function (notification) {
        return (
          <div
            key={notification.id}
            className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800"
          >
            <bs_1.BsTwitter color="white" size={32} />
            <p className="text-white">{notification.body}</p>
          </div>
        );
      })}
    </div>
  );
};
exports.default = NotificationsFeed;
