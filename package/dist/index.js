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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseParams = parseParams;
exports.parseParamsWithContext = parseParamsWithContext;
exports.makeResponse = makeResponse;
exports.executeRequest = executeRequest;
exports.addEndpointRoute = addEndpointRoute;
exports.resourceRouter = resourceRouter;
exports.apiRouter = apiRouter;
const express_1 = __importStar(require("express"));
const khulnasoft_1 = require("khulnasoft");
const khulnasoft_2 = require("khulnasoft");
/**
 * Runs Khulnasoft middleware and gets the parsed params
 * for a given Khulnasoft API Endpoint and Express Request/Response.
 *
 * @param endpoint the endpoint to execute the request on
 * @param req the Express request
 * @param res the Express response
 * @returns a Promise that resolves to the parsed params
 */
function parseParams(endpoint, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield parseParamsWithContext(endpoint, req, res))[0];
    });
}
/**
 * Runs Khulnasoft middleware and gets the parsed params and context
 * for a given Khulnasoft API Endpoint and Express Request/Response.
 *
 * @param endpoint the endpoint to execute the request on
 * @param req the Express request
 * @param res the Express response
 * @returns a Promise that resolves to [params, context]
 */
function parseParamsWithContext(endpoint, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { params: path, headers, body, query } = req;
        const { khulnasoft } = endpoint;
        const server = {
            type: "express",
            args: [req, res],
        };
        const context = khulnasoft.initContext({
            endpoint,
            headers,
            server,
        });
        const params = khulnasoft.initParams({
            path,
            query,
            body,
            headers,
        });
        return yield khulnasoft.parseParamsWithContext(params, context);
    });
}
/**
 * Creates a response for the given Khulnasoft endpoint.
 * @param endpoint An endpoint with a response schema
 * @param response The response data
 * @returns A promise that resolves to the schema-parsed response body,
 * or rejects if `response` fails validation
 */
function makeResponse(endpoint, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!endpoint.response) {
            throw new Error("endpoint has no response schema");
        }
        return yield endpoint.response.parseAsync(response);
    });
}
/**
 * Executes the given Express request on the given Khulnasoft API Endpoint, returning
 * the result from the endpoint handler without sending it in a response.
 *
 * @param endpoint the endpoint to execute the request on
 * @param req the Express request
 * @param res the Express response
 * @returns a Promise that resolves to the return value of the endpoint handler,
 * or rejects if it throws an error
 */
function executeRequest(endpoint, req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { params: path, headers, body, query } = req;
        const { khulnasoft } = endpoint;
        const server = {
            type: "express",
            args: [req, res],
        };
        const context = khulnasoft.initContext({
            endpoint,
            headers,
            server,
        });
        const params = khulnasoft.initParams({
            path,
            query,
            body,
            headers,
        });
        return yield khulnasoft.execute(params, context);
    });
}
/**
 * Creates an express route handler function for the given khulnasoft endpoint.
 */
function expressHandler(endpoint, options) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield executeRequest(endpoint, req, res);
            res.status(200).json(result);
            return;
        }
        catch (error) {
            if ((options === null || options === void 0 ? void 0 : options.handleErrors) === false) {
                next(error);
                return;
            }
            errorHandler(error, req, res, next);
            return;
        }
    });
}
const methodNotAllowedHandler = (req, res) => {
    res.status(405).send();
};
/**
 * The default Express error handler middleware for errors thrown from
 * Khulnasoft endpoints
 */
const errorHandler = (error, req, res) => {
    if ((0, khulnasoft_1.isKhulnasoftError)(error)) {
        res.status(error.statusCode).json(error.response);
        return;
    }
    console.error(`ERROR in ${req.method} ${req.url}:`, error instanceof Error ? error.stack : error);
    res.status(500).json({ error, details: "Failed to handle the request." });
};
function applyBasePathMap(path, basePathMap) {
    if (basePathMap) {
        for (const k in basePathMap) {
            if (path.startsWith(k)) {
                return path.replace(k, basePathMap[k]);
            }
        }
    }
    return path;
}
function convertExpressPath(path, basePathMap) {
    return applyBasePathMap(path, basePathMap)
        .split("/")
        .map((el) => el.replace(/^\{(.+)\}$/, ":$1"))
        .join("/");
}
/**
 * Registers a Khulnasoft endpoint with the given Express Application or Router.
 */
function addEndpointRoute(router, endpoint, options) {
    const [method, path] = (0, khulnasoft_2.parseEndpoint)(endpoint.endpoint);
    const expressPath = convertExpressPath(path, options === null || options === void 0 ? void 0 : options.basePathMap);
    const loweredMethod = method.toLowerCase();
    router[loweredMethod](expressPath, 
    // @ts-expect-error this is valid
    expressHandler(endpoint, options));
}
function addMethodNotAllowedHandlers(router, resource, options, visited = new Set()) {
    const { actions, namespacedResources } = resource;
    if (actions) {
        for (const action of Object.keys(actions)) {
            const endpoint = actions[action];
            if (!endpoint)
                continue;
            const [, path] = (0, khulnasoft_2.parseEndpoint)(endpoint.endpoint);
            if (visited.has(path))
                continue;
            visited.add(path);
            router.all(convertExpressPath(path, options === null || options === void 0 ? void 0 : options.basePathMap), 
            // @ts-expect-error
            methodNotAllowedHandler);
        }
    }
    if (namespacedResources) {
        for (const name of Object.keys(namespacedResources)) {
            addMethodNotAllowedHandlers(router, namespacedResources[name], options, visited);
        }
    }
}
/**
 * Registers all endpoints in a Khulnasoft resource with the given Express Application or Router.
 */
function addResourceRoutes(router, resource, options) {
    const { actions, namespacedResources } = resource;
    if (actions) {
        for (const action of Object.keys(actions)) {
            const endpoint = actions[action];
            if (!endpoint)
                continue;
            addEndpointRoute(router, endpoint, options);
        }
    }
    if ((options === null || options === void 0 ? void 0 : options.addMethodNotAllowedHandlers) !== false) {
        if (namespacedResources) {
            for (const name of Object.keys(namespacedResources)) {
                addResourceRoutes(router, namespacedResources[name], options);
            }
        }
        addMethodNotAllowedHandlers(router, resource, options);
    }
}
/**
 * Creates an Express Router for the given Khulnasoft resource
 */
function resourceRouter(resource, options) {
    const router = (0, express_1.Router)(options);
    router.use(express_1.default.json());
    router.use(express_1.default.text());
    router.use(express_1.default.raw());
    addResourceRoutes(router, resource, options);
    return router;
}
/**
 * Registers all endpoints in a Khulnasoft API with the given Express Application or Router.
 */
function addAPIRoutes(router, api, options) {
    const { topLevel, resources } = api;
    addResourceRoutes(router, {
        actions: topLevel.actions,
        namespacedResources: resources,
    }, options);
}
/**
 * Creates an Express Router for the given Khulnasoft API
 */
function apiRouter(api, options) {
    const router = (0, express_1.Router)();
    router.use(express_1.default.json());
    router.use(express_1.default.text());
    router.use(express_1.default.raw());
    addAPIRoutes(router, api, options);
    return router;
}
//# sourceMappingURL=index.js.map