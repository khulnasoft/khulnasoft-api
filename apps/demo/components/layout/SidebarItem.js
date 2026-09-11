"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== "default") __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var router_1 = require("next/router");
var useLoginModal_1 = __importDefault(require("../../hooks/useLoginModal"));
var useCurrentUser_1 = __importDefault(require("../../hooks/useCurrentUser"));
var bs_1 = require("react-icons/bs");
var SidebarItem = function (_a) {
  var label = _a.label,
    Icon = _a.icon,
    href = _a.href,
    auth = _a.auth,
    onClick = _a.onClick,
    alert = _a.alert;
  var router = (0, router_1.useRouter)();
  var loginModal = (0, useLoginModal_1.default)();
  var currentUser = (0, useCurrentUser_1.default)().data;
  var handleClick = (0, react_1.useCallback)(
    function () {
      if (onClick) {
        return onClick();
      }
      if (auth && !currentUser) {
        loginModal.onOpen();
      } else if (href) {
        router.push(href);
      }
    },
    [router, href, auth, loginModal, onClick, currentUser]
  );
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div
        className="
        relative
        rounded-full 
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer 
        lg:hidden
      "
      >
        <Icon size={28} color="white" />
        {alert ? (
          <bs_1.BsDot
            className="text-sky-500 absolute -top-4 left-0"
            size={70}
          />
        ) : null}
      </div>
      <div
        className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-full 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      "
      >
        <Icon size={24} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
        {alert ? (
          <bs_1.BsDot
            className="text-sky-500 absolute -top-4 left-0"
            size={70}
          />
        ) : null}
      </div>
    </div>
  );
};
exports.default = SidebarItem;
