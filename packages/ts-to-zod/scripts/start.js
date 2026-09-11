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
var ts_morph_1 = require("ts-morph");
var path = __importStar(require("path"));
var convertType_1 = require("../src/convertType");
function main(fileName) {
  var project = new ts_morph_1.Project({
    tsConfigFilePath: path.resolve(__dirname, "..", "tsconfig.json"),
  });
  var sourceFile = project.addSourceFileAtPath(fileName);
  var node =
    sourceFile.getTypeAlias("T") ||
    sourceFile.getInterface("T") ||
    sourceFile.getEnum("T");
  if (!node) throw new Error("failed to find type node to generate");
  var ctx = new convertType_1.ConvertTypeContext(
    new convertType_1.SchemaGenContext(project),
    node
  );
  var type = node.getType();
  if (!type) throw new Error("type not found");
  console.log(
    (0, ts_morph_1.printNode)(
      (0, convertType_1.convertType)(ctx, type, { variant: "node", node: node })
    )
  );
}
main(path.resolve(__dirname, "../test_code/simple.ts"));
