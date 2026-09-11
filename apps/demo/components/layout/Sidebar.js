"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("next-auth/react");
var bi_1 = require("react-icons/bi");
var bs_1 = require("react-icons/bs");
var fa_1 = require("react-icons/fa");
var useCurrentUser_1 = __importDefault(require("../../hooks/useCurrentUser"));
var SidebarItem_1 = __importDefault(require("./SidebarItem"));
var SidebarLogo_1 = __importDefault(require("./SidebarLogo"));
var SidebarTweetButton_1 = __importDefault(require("./SidebarTweetButton"));
var Sidebar = function () {
  var currentUser = (0, useCurrentUser_1.default)().data;
  var items = [
    {
      icon: bs_1.BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: bs_1.BsBellFill,
      label: "Notifications",
      href: "/notifications",
      auth: true,
      alert:
        currentUser === null || currentUser === void 0
          ? void 0
          : currentUser.hasNotification,
    },
    {
      icon: fa_1.FaUser,
      label: "Profile",
      href: "/users/".concat(
        currentUser === null || currentUser === void 0 ? void 0 : currentUser.id
      ),
      auth: true,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo_1.default />
          {items.map(function (item) {
            return (
              <SidebarItem_1.default
                key={item.href}
                alert={item.alert}
                auth={item.auth}
                href={item.href}
                icon={item.icon}
                label={item.label}
              />
            );
          })}
          {currentUser && (
            <SidebarItem_1.default
              onClick={function () {
                return (0, react_1.signOut)();
              }}
              icon={bi_1.BiLogOut}
              label="Logout"
            />
          )}
          <SidebarTweetButton_1.default />
        </div>
      </div>
    </div>
  );
};
exports.default = Sidebar;
