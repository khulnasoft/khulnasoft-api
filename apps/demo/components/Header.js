"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("next/router");
var react_1 = require("react");
var bi_1 = require("react-icons/bi");
var Header = function (_a) {
  var showBackArrow = _a.showBackArrow,
    label = _a.label;
  var router = (0, router_1.useRouter)();
  var handleBack = (0, react_1.useCallback)(
    function () {
      router.back();
    },
    [router]
  );
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {showBackArrow && (
          <bi_1.BiArrowBack
            onClick={handleBack}
            color="white"
            size={20}
            className="
              cursor-pointer 
              hover:opacity-70 
              transition
          "
          />
        )}
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};
exports.default = Header;
