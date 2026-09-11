"use strict";
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Refine =
  exports.RefineSymbol =
  exports.Transform =
  exports.SchemaType =
  exports.TransformSymbol =
    void 0;
var zod_1 = __importDefault(require("zod"));
exports.TransformSymbol = Symbol("Transform");
var SchemaType = /** @class */ (function () {
  function SchemaType() {}
  return SchemaType;
})();
exports.SchemaType = SchemaType;
var Transform = /** @class */ (function (_super) {
  __extends(Transform, _super);
  function Transform() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this[_a] = true;
    return _this;
  }
  return Transform;
})(SchemaType);
exports.Transform = Transform;
_a = exports.TransformSymbol;
exports.RefineSymbol = Symbol("Refine");
var Refine = /** @class */ (function (_super) {
  __extends(Refine, _super);
  function Refine() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this[_b] = true;
    return _this;
  }
  Refine.prototype.transform = function (value) {
    if (!this.refine(value)) {
      throw new Error("value is not the right type");
    }
    return value;
  };
  return Refine;
})(Transform);
exports.Refine = Refine;
_b = exports.RefineSymbol;
var ParseFloat = /** @class */ (function (_super) {
  __extends(ParseFloat, _super);
  function ParseFloat() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ParseFloat.prototype.transform = function (value) {
    return parseFloat(value);
  };
  return ParseFloat;
})(Transform);
var ToString = /** @class */ (function (_super) {
  __extends(ToString, _super);
  function ToString() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ToString.prototype.transform = function (value) {
    return String(value);
  };
  return ToString;
})(Transform);
var httpPathSchema = zod_1.default.string().refine(function (value) {
  return value.startsWith("/");
});
var ToHttpPath = /** @class */ (function (_super) {
  __extends(ToHttpPath, _super);
  function ToHttpPath() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ToHttpPath.prototype.refine = function (value) {
    return value.startsWith("/");
  };
  return ToHttpPath;
})(Refine);
var ToDate = /** @class */ (function (_super) {
  __extends(ToDate, _super);
  function ToDate() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ToDate.prototype.transform = function (value) {
    return new Date(value);
  };
  return ToDate;
})(Transform);
var ToBigInt = /** @class */ (function (_super) {
  __extends(ToBigInt, _super);
  function ToBigInt() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ToBigInt.prototype.transform = function (value) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_c) {
        return [2 /*return*/, BigInt(value)];
      });
    });
  };
  return ToBigInt;
})(Transform);
var parseFloatInstance = new ParseFloat();
var toStringInstance = new ToString();
var toBigIntInstance = new ToBigInt();
var toHttpPathInstance = new ToHttpPath();
var genZodSchema = zod_1.default.object({
  a: zod_1.default
    .string()
    .transform(parseFloatInstance.transform)
    .transform(toStringInstance.transform)
    .transform(toBigIntInstance.transform)
    .nullable(),
  b: zod_1.default
    .number()
    .transform(toStringInstance.transform)
    .transform(toHttpPathInstance.transform)
    .optional(),
});
