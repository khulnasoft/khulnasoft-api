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
exports.preprocessEndpoint = preprocessEndpoint;
const tm = __importStar(require("ts-morph"));
const utils_1 = require("./utils");
const convertType_1 = require("ts-to-zod/dist/convertType");
// call expression is the expression (...endpoint())
function preprocessEndpoint(callExpression) {
  // lhs is the value on which .endpoint is being called
  const lhs = callExpression.getExpression();
  const endpointArgs = callExpression.getArguments();
  if (endpointArgs.length !== 1) return;
  const [endpointArg] = endpointArgs;
  const endpointType = endpointArg.getType();
  const endpointProperty = endpointType.getProperty("endpoint");
  if (!endpointProperty) return;
  const endpointPropertyType =
    endpointProperty.getTypeAtLocation(callExpression);
  const endpointPath = endpointPropertyType.getLiteralValue();
  if (typeof endpointPath !== "string") return;
  if (lhs instanceof tm.PropertyAccessExpression) {
    const typesExpr = lhs.getExpression();
    // we want .endpoint to be called on khulnasoft.types<{...}>()
    if (typesExpr instanceof tm.CallExpression) {
      const typesReceiver = typesExpr.getExpression();
      const symbol = typesReceiver.getSymbol();
      if (!symbol || !(0, utils_1.isSymbolKhulnasoftMethod)(symbol)) return;
      if (symbol.getEscapedName() !== "types") return;
      // types() cannot be called with arguments
      if (typesExpr.getArguments().length) return;
      const typeArguments = typesExpr.getTypeArguments();
      if (typeArguments.length !== 1) return;
      const [typeRef] = typeArguments;
      const schemaTypes = typeRef.getType();
      if (!schemaTypes.isObject()) return;
      let queryNodeType;
      let pathNodeType;
      let bodyNodeType;
      let responseNodeType;
      for (const property of schemaTypes.getProperties()) {
        const name = property.getName();
        switch (name) {
          case "query":
            queryNodeType = propertyToNodeType(property, typesExpr);
            break;
          case "path":
            pathNodeType = propertyToNodeType(property, typesExpr);
            break;
          case "body":
            bodyNodeType = propertyToNodeType(property, typesExpr);
            break;
          case "response":
            responseNodeType = propertyToNodeType(property, typesExpr);
            break;
          default:
            // TODO: add diagnostic for ignored field
            continue;
        }
      }
      return {
        endpointPath,
        callExpression,
        query: queryNodeType,
        path: pathNodeType,
        body: bodyNodeType,
        response: responseNodeType,
      };
    }
  }
}
function propertyToNodeType(property, location) {
  const node = (0, convertType_1.getPropertyDeclaration)(property);
  if (!node) throw new Error("internal error: invalid property encountered");
  return [node.getTypeNodeOrThrow(), property.getTypeAtLocation(location)];
}
//# sourceMappingURL=endpointPreprocess.js.map
