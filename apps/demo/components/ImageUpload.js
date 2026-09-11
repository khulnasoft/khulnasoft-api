"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("next/image"));
var react_1 = require("react");
var react_dropzone_1 = require("react-dropzone");
var ImageUpload = function (_a) {
  var onChange = _a.onChange,
    label = _a.label,
    value = _a.value,
    disabled = _a.disabled;
  var _b = (0, react_1.useState)(value),
    base64 = _b[0],
    setBase64 = _b[1];
  var handleChange = (0, react_1.useCallback)(
    function (base64) {
      onChange(base64);
    },
    [onChange]
  );
  var handleDrop = (0, react_1.useCallback)(
    function (files) {
      var file = files[0];
      var reader = new FileReader();
      reader.onload = function (event) {
        setBase64(event.target.result);
        handleChange(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    [handleChange]
  );
  var _c = (0, react_dropzone_1.useDropzone)({
      maxFiles: 1,
      onDrop: handleDrop,
      disabled: disabled,
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    }),
    getRootProps = _c.getRootProps,
    getInputProps = _c.getInputProps;
  return (
    <div
      {...getRootProps({
        className:
          "w-full p-4 text-white text-center border-2 border-dotted rounded-md border-neutral-700",
      })}
    >
      <input {...getInputProps()} />
      {base64 ? (
        <div className="flex items-center justify-center">
          <image_1.default
            src={base64}
            height="100"
            width="100"
            alt="Uploaded image"
          />
        </div>
      ) : (
        <p className="text-white">{label}</p>
      )}
    </div>
  );
};
exports.default = ImageUpload;
