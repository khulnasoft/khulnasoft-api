"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g = Object.create(
        (typeof Iterator === "function" ? Iterator : Object).prototype
      );
    return (
      (g.next = verb(0)),
      (g["throw"] = verb(1)),
      (g["return"] = verb(2)),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var react_hot_toast_1 = require("react-hot-toast");
var react_1 = require("react");
var react_2 = require("next-auth/react");
var useLoginModal_1 = __importDefault(require("../../hooks/useLoginModal"));
var useRegisterModal_1 = __importDefault(
  require("../../hooks/useRegisterModal")
);
var Input_1 = __importDefault(require("../Input"));
var Modal_1 = __importDefault(require("../Modal"));
var RegisterModal = function () {
  var loginModal = (0, useLoginModal_1.default)();
  var registerModal = (0, useRegisterModal_1.default)();
  var _a = (0, react_1.useState)(""),
    email = _a[0],
    setEmail = _a[1];
  var _b = (0, react_1.useState)(""),
    password = _b[0],
    setPassword = _b[1];
  var _c = (0, react_1.useState)(""),
    username = _c[0],
    setUsername = _c[1];
  var _d = (0, react_1.useState)(""),
    name = _d[0],
    setName = _d[1];
  var _e = (0, react_1.useState)(false),
    isLoading = _e[0],
    setIsLoading = _e[1];
  var onToggle = (0, react_1.useCallback)(
    function () {
      if (isLoading) {
        return;
      }
      registerModal.onClose();
      loginModal.onOpen();
    },
    [loginModal, registerModal, isLoading]
  );
  var onSubmit = (0, react_1.useCallback)(
    function () {
      return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              _a.trys.push([0, 2, 3, 4]);
              setIsLoading(true);
              return [
                4 /*yield*/,
                axios_1.default.post("/api/register", {
                  email: email,
                  password: password,
                  username: username,
                  name: name,
                }),
              ];
            case 1:
              _a.sent();
              setIsLoading(false);
              react_hot_toast_1.toast.success("Account created.");
              (0, react_2.signIn)("credentials", {
                email: email,
                password: password,
              });
              registerModal.onClose();
              return [3 /*break*/, 4];
            case 2:
              error_1 = _a.sent();
              react_hot_toast_1.toast.error("Something went wrong");
              return [3 /*break*/, 4];
            case 3:
              setIsLoading(false);
              return [7 /*endfinally*/];
            case 4:
              return [2 /*return*/];
          }
        });
      });
    },
    [email, password, registerModal, username, name]
  );
  var bodyContent = (
    <div className="flex flex-col gap-4">
      <Input_1.default
        disabled={isLoading}
        placeholder="Email"
        value={email}
        onChange={function (e) {
          return setEmail(e.target.value);
        }}
      />
      <Input_1.default
        disabled={isLoading}
        placeholder="Name"
        value={name}
        onChange={function (e) {
          return setName(e.target.value);
        }}
      />
      <Input_1.default
        disabled={isLoading}
        placeholder="Username"
        value={username}
        onChange={function (e) {
          return setUsername(e.target.value);
        }}
      />
      <Input_1.default
        disabled={isLoading}
        placeholder="Password"
        type="password"
        value={password}
        onChange={function (e) {
          return setPassword(e.target.value);
        }}
      />
    </div>
  );
  var footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Sign in
        </span>
      </p>
    </div>
  );
  return (
    <Modal_1.default
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
exports.default = RegisterModal;
