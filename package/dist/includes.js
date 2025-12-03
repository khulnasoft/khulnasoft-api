"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.includesSymbol = void 0;
exports.includes = includes;
exports.getIncludes = getIncludes;
const z = __importStar(require("./z"));
exports.includesSymbol = Symbol("includes");
/**
 * Creates an include param from all includable paths in the given zod schema
 */
function includes(schema, depth = 3) {
    const values = [];
    function add(path, schema, depth) {
        if (depth < 0)
            return;
        const { shape } = schema;
        for (const key in shape) {
            const value = shape[key];
            const obj = unwrapIncludable(value);
            if (!obj)
                continue;
            const subpath = path ? `${path}.${key}` : key;
            if (z.isIncludable(value))
                values.push(subpath);
            add(subpath, obj, depth - 1);
        }
    }
    const obj = unwrapIncludable(schema);
    if (obj)
        add("", obj, depth);
    const [first, ...rest] = values;
    if (!first) {
        // @todo: get includable working again!
        console.warn(`schema has no includable properties`);
    }
    return z.array(z.enum([first, ...rest]))
        .transform((value) => {
        Object.defineProperty(value, exports.includesSymbol, {
            enumerable: false,
            value: true,
        });
        return value;
    })
        .withMetadata({ khulnasoft: { includes: true } });
}
function unwrapIncludable(e) {
    if (e instanceof z.ZodObject) {
        return e;
    }
    if (e instanceof z.ZodOptional ||
        e instanceof z.ZodNullable ||
        e instanceof z.ZodMetadata) {
        return unwrapIncludable(e.unwrap());
    }
    if (e instanceof z.ZodDefault) {
        return unwrapIncludable(e._def.innerType);
    }
    if (e instanceof z.ZodLazy) {
        return unwrapIncludable(e.schema);
    }
    if (e instanceof z.ZodEffects) {
        return unwrapIncludable(e.innerType());
    }
    if (e instanceof z.ZodArray) {
        return unwrapIncludable(e.element);
    }
    if (e instanceof z.ZodPipeline) {
        return unwrapIncludable(e._def.out);
    }
    // TODO: union, intersection, discriminated union?
}
function getIncludes(ctx) {
    var _a;
    const query = (_a = ctx.parsedParams) === null || _a === void 0 ? void 0 : _a.query;
    if (!query)
        return undefined;
    for (const param of Object.values(query)) {
        if (param != null && param[exports.includesSymbol]) {
            const include = param;
            if (!Array.isArray(include) ||
                include.some((e) => typeof e !== "string")) {
                throw new Error(`invalid include param; use z.includes()`);
            }
            return include;
        }
    }
    return undefined;
}
//# sourceMappingURL=includes.js.map