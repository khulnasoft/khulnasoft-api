"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var router_1 = require("next/router");
var useLoginModal_1 = __importDefault(require("../../hooks/useLoginModal"));
var useCurrentUser_1 = __importDefault(require("../../hooks/useCurrentUser"));
var SidebarTweetButton = function () {
  var router = (0, router_1.useRouter)();
  var loginModal = (0, useLoginModal_1.default)();
  var currentUser = (0, useCurrentUser_1.default)().data;
  var onClick = (0, react_1.useCallback)(
    function () {
      if (!currentUser) {
        return loginModal.onOpen();
      }
      router.push("/");
    },
    [loginModal, router, currentUser]
  );
  return (
    <div onClick={onClick}>
      <div
        className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center 
        bg-sky-500 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
      "
      >
        <fa_1.FaFeather size={24} color="white" />
      </div>
      <div
        className="
        mt-6
        hidden 
        lg:block 
        px-4
        py-2
        rounded-full
        bg-sky-500
        hover:bg-opacity-90 
        cursor-pointer
      "
      >
        <p
          className="
            hidden 
            lg:block 
            text-center
            font-semibold
            text-white 
            text-[20px]
        "
        >
          Tweet
        </p>
      </div>
    </div>
  );
};
exports.default = SidebarTweetButton;
