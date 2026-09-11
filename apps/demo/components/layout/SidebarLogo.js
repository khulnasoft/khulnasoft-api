"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var bs_1 = require("react-icons/bs");
var SidebarLogo = function () {
  var router = (0, router_1.useRouter)();
  return (
    <div
      onClick={function () {
        return router.push("/");
      }}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    "
    >
      <bs_1.BsTwitter size={28} color="white" />
    </div>
  );
};
exports.default = SidebarLogo;
