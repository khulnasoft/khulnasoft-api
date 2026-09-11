"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = function (_a) {
  var label = _a.label,
    secondary = _a.secondary,
    fullWidth = _a.fullWidth,
    onClick = _a.onClick,
    large = _a.large,
    disabled = _a.disabled,
    outline = _a.outline;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={"\n        disabled:opacity-70\n        disabled:cursor-not-allowed\n        rounded-full\n        font-semibold\n        hover:opacity-80\n        transition\n        border-2\n        "
        .concat(fullWidth ? "w-full" : "w-fit", "\n        ")
        .concat(secondary ? "bg-white" : "bg-sky-500", "\n        ")
        .concat(secondary ? "text-black" : "text-white", "\n        ")
        .concat(secondary ? "border-black" : "border-sky-500", "\n        ")
        .concat(large ? "text-xl" : "text-md", "\n        ")
        .concat(large ? "px-5" : "px-4", "\n        ")
        .concat(large ? "py-3" : "py-2", "\n        ")
        .concat(outline ? "bg-transparent" : "", "\n        ")
        .concat(outline ? "border-white" : "", "\n        ")
        .concat(outline ? "text-white" : "", "\n      ")}
    >
      {label}
    </button>
  );
};
exports.default = Button;
