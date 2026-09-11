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
exports.multiFileTestCase = void 0;
var ts_morph_1 = require("ts-morph");
var factory = ts_morph_1.ts.factory;
var convertType_1 = require("../convertType");
var testProject_1 = require("./testProject");
var generateFiles_1 = require("../generateFiles");
var filePathConfig_1 = require("../filePathConfig");
var path = __importStar(require("path"));
var pkg_up_1 = __importDefault(require("pkg-up"));
var multiFileTestCase = function (options) {
  return __awaiter(void 0, void 0, void 0, function () {
    var sourceFile,
      node,
      symbol,
      ctx,
      _i,
      _a,
      diagnostics,
      _b,
      _c,
      diagnostic,
      rootPackageJson,
      rootPath,
      result,
      genOptions,
      generationConfig,
      _d,
      _e,
      _f,
      file,
      statements,
      relativeFile,
      sourceFile_1;
    return __generator(this, function (_g) {
      switch (_g.label) {
        case 0:
          sourceFile = testProject_1.testProject.getSourceFile(
            options.__filename
          );
          if (!sourceFile) {
            throw new Error("failed to get SourceFile");
          }
          node = options.getNode
            ? options.getNode(sourceFile)
            : sourceFile.getTypeAlias("T") ||
              sourceFile.getInterface("T") ||
              sourceFile.getEnum("T");
          if (!node) {
            throw new Error("failed to get Node from SourceFile");
          }
          symbol = options.getSymbol
            ? options.getSymbol(sourceFile)
            : node.getSymbol();
          if (!symbol) {
            throw new Error("failed to get Symbol from SourceFile");
          }
          ctx = new convertType_1.SchemaGenContext(testProject_1.testProject);
          (0,
          convertType_1.convertSymbol)(ctx, symbol, { variant: "node", node: node });
          for (_i = 0, _a = ctx.diagnostics.values(); _i < _a.length; _i++) {
            diagnostics = _a[_i];
            if (diagnostics.errors.length > 0) {
              for (_b = 0, _c = diagnostics.errors; _b < _c.length; _b++) {
                diagnostic = _c[_b];
                console.error(diagnostic.message);
              }
            }
          }
          return [
            4 /*yield*/,
            (0, pkg_up_1.default)({
              cwd: __dirname,
            }),
          ];
        case 1:
          rootPackageJson = _g.sent();
          if (!rootPackageJson) {
            throw new Error("test must run within npm package");
          }
          rootPath = path.dirname(rootPackageJson);
          result = {};
          genOptions = options.genOptions || {
            genLocation: {
              type: "alongside",
              dependencyGenPath: "./dependency-schemas/",
            },
            rootPath: rootPath,
          };
          generationConfig = (0, filePathConfig_1.createGenerationConfig)(
            genOptions
          );
          for (
            _d = 0,
              _e = (0, generateFiles_1.generateFiles)(ctx, generationConfig);
            _d < _e.length;
            _d++
          ) {
            (_f = _e[_d]), (file = _f[0]), (statements = _f[1]);
            relativeFile = path.relative(rootPath, file);
            sourceFile_1 = factory.createSourceFile(
              statements,
              factory.createToken(ts_morph_1.ts.SyntaxKind.EndOfFileToken),
              0
            );
            result[relativeFile] = ts_morph_1.ts
              .createPrinter()
              .printFile(sourceFile_1);
          }
          return [2 /*return*/, result];
      }
    });
  });
};
exports.multiFileTestCase = multiFileTestCase;
