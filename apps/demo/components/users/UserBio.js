"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var bi_1 = require("react-icons/bi");
var date_fns_1 = require("date-fns");
var useCurrentUser_1 = __importDefault(require("../../hooks/useCurrentUser"));
var useUser_1 = __importDefault(require("../../hooks/useUser"));
var useFollow_1 = __importDefault(require("../../hooks/useFollow"));
var useEditModal_1 = __importDefault(require("../../hooks/useEditModal"));
var Button_1 = __importDefault(require("../Button"));
var UserBio = function (_a) {
  var _b;
  var userId = _a.userId;
  var currentUser = (0, useCurrentUser_1.default)().data;
  var fetchedUser = (0, useUser_1.default)(userId).data;
  var editModal = (0, useEditModal_1.default)();
  var _c = (0, useFollow_1.default)(userId),
    isFollowing = _c.isFollowing,
    toggleFollow = _c.toggleFollow;
  var createdAt = (0, react_1.useMemo)(
    function () {
      if (
        !(fetchedUser === null || fetchedUser === void 0
          ? void 0
          : fetchedUser.createdAt)
      ) {
        return null;
      }
      return (0, date_fns_1.format)(
        new Date(fetchedUser.createdAt),
        "MMMM yyyy"
      );
    },
    [
      fetchedUser === null || fetchedUser === void 0
        ? void 0
        : fetchedUser.createdAt,
    ]
  );
  return (
    <div className="border-b-[1px] border-neutral-800 pb-4">
      <div className="flex justify-end p-2">
        {(currentUser === null || currentUser === void 0
          ? void 0
          : currentUser.id) === userId ? (
          <Button_1.default secondary label="Edit" onClick={editModal.onOpen} />
        ) : (
          <Button_1.default
            onClick={toggleFollow}
            label={isFollowing ? "Unfollow" : "Follow"}
            secondary={!isFollowing}
            outline={isFollowing}
          />
        )}
      </div>
      <div className="mt-8 px-4">
        <div className="flex flex-col">
          <p className="text-white text-2xl font-semibold">
            {fetchedUser === null || fetchedUser === void 0
              ? void 0
              : fetchedUser.name}
          </p>
          <p className="text-md text-neutral-500">
            @
            {fetchedUser === null || fetchedUser === void 0
              ? void 0
              : fetchedUser.username}
          </p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">
            {fetchedUser === null || fetchedUser === void 0
              ? void 0
              : fetchedUser.bio}
          </p>
          <div
            className="
              flex 
              flex-row 
              items-center 
              gap-2 
              mt-4 
              text-neutral-500
          "
          >
            <bi_1.BiCalendar size={24} />
            <p>Joined {createdAt}</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-4 gap-6">
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">
              {(_b =
                fetchedUser === null || fetchedUser === void 0
                  ? void 0
                  : fetchedUser.followingIds) === null || _b === void 0
                ? void 0
                : _b.length}
            </p>
            <p className="text-neutral-500">Following</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <p className="text-white">
              {(fetchedUser === null || fetchedUser === void 0
                ? void 0
                : fetchedUser.followersCount) || 0}
            </p>
            <p className="text-neutral-500">Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
exports.default = UserBio;
