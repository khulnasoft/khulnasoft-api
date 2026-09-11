"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Input = function (_a) {
  var placeholder = _a.placeholder,
    value = _a.value,
    _b = _a.type,
    type = _b === void 0 ? "text" : _b,
    onChange = _a.onChange,
    disabled = _a.disabled,
    label = _a.label;
  return (
    <div className="w-full">
      {label && (
        <p className="text-xl text-white font-semibold mb-2">{label}</p>
      )}
      <input
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="
          w-full
          p-4 
          text-lg 
          bg-black 
          border-2
          border-neutral-800 
          rounded-md
          outline-none
          text-white
          focus:border-sky-500
          focus:border-2
          transition
          disabled:bg-neutral-900
          disabled:opacity-70
          disabled:cursor-not-allowed
        "
      />
    </div>
  );
};
exports.default = Input;
