"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FollowBar_1 = __importDefault(require("./layout/FollowBar"));
var Sidebar_1 = __importDefault(require("./layout/Sidebar"));
var Layout = function (_a) {
  var children = _a.children;
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <Sidebar_1.default />
          <div
            className="
              col-span-3 
              lg:col-span-2 
              border-x-[1px] 
              border-neutral-800
              flex
              flex-col
            "
          >
            {children}
          </div>
          <FollowBar_1.default />
        </div>
      </div>
    </div>
  );
};
exports.default = Layout;
