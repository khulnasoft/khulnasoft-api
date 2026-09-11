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
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCase = void 0;
var tm = __importStar(require("ts-morph"));
var convertType_1 = require("../convertType");
var testProject_1 = require("./testProject");
var time = process.env.TIME != null;
var testCase = function (_a) {
  var filename = _a.__filename,
    _b = _a.nodeName,
    nodeName = _b === void 0 ? "T" : _b,
    _c = _a.getNode,
    getNode =
      _c === void 0
        ? function (sourceFile) {
            return (
              sourceFile.getTypeAlias(nodeName) ||
              sourceFile.getInterface(nodeName) ||
              sourceFile.getEnum(nodeName)
            );
          }
        : _c,
    getType = _a.getType;
  if (time) console.time("getSourceFile");
  var sourceFile = testProject_1.testProject.getSourceFile(filename);
  if (time) console.timeEnd("getSourceFile");
  if (!sourceFile) {
    throw new Error("failed to get SourceFile");
  }
  if (time) console.time("getNode");
  var node = getNode(sourceFile);
  if (time) console.timeEnd("getNode");
  if (!node) {
    throw new Error("failed to get Node from SourceFile");
  }
  if (time) console.time("getType");
  var type = getType ? getType(sourceFile) : node.getType();
  if (time) console.timeEnd("getType");
  if (!type) {
    throw new Error("failed to get Type from SourceFile");
  }
  if (time) console.time("convertType");
  var ctx = new convertType_1.ConvertTypeContext(
    new convertType_1.SchemaGenContext(testProject_1.testProject),
    node
  );
  var actual = (0, convertType_1.convertType)(ctx, type, {
    variant: "type",
    type: type,
  });
  if (time) console.timeEnd("convertType");
  return tm.printNode(actual);
};
exports.testCase = testCase;
