"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ai_1 = require("react-icons/ai");
var Button_1 = __importDefault(require("./Button"));
var Modal = function (_a) {
  var isOpen = _a.isOpen,
    onClose = _a.onClose,
    onSubmit = _a.onSubmit,
    title = _a.title,
    body = _a.body,
    actionLabel = _a.actionLabel,
    footer = _a.footer,
    disabled = _a.disabled;
  var handleClose = (0, react_1.useCallback)(
    function () {
      if (disabled) {
        return;
      }
      onClose();
    },
    [onClose, disabled]
  );
  var handleSubmit = (0, react_1.useCallback)(
    function () {
      if (disabled) {
        return;
      }
      onSubmit();
    },
    [onSubmit, disabled]
  );
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
        "
      >
        <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
          {/*content*/}
          <div
            className="
            h-full
            lg:h-auto
            border-0 
            rounded-lg 
            shadow-lg 
            relative 
            flex 
            flex-col 
            w-full 
            bg-black 
            outline-none 
            focus:outline-none
            "
          >
            {/*header*/}
            <div
              className="
              flex 
              items-center 
              justify-between 
              p-10 
              rounded-t
              "
            >
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button
                className="
                  p-1 
                  ml-auto
                  border-0 
                  text-white 
                  hover:opacity-70
                  transition
                "
                onClick={handleClose}
              >
                <ai_1.AiOutlineClose size={20} />
              </button>
            </div>
            {/*body*/}
            <div className="relative p-10 flex-auto">{body}</div>
            {/*footer*/}
            <div className="flex flex-col gap-2 p-10">
              <Button_1.default
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
exports.default = Modal;
