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
const React = __importStar(require("react"));
const khulnasoft_1 = require("khulnasoft");
const __1 = require("..");
const react_query_1 = require("@tanstack/react-query");
const react_1 = require("@testing-library/react");
const khulnasoft = new khulnasoft_1.Khulnasoft({ plugins: {} });
const api = khulnasoft.api({
    basePath: "/",
    resources: {
        query: khulnasoft.resource({
            summary: "query",
            actions: {
                retrieve: khulnasoft.endpoint({
                    endpoint: "GET /query/{foo}",
                    query: khulnasoft_1.z.object({ bar: khulnasoft_1.z.string() }),
                    response: khulnasoft_1.z.any(),
                    handler() {
                        return __awaiter(this, void 0, void 0, function* () { });
                    },
                }),
            },
        }),
        optionalQuery: khulnasoft.resource({
            summary: "optionalQuery",
            actions: {
                retrieve: khulnasoft.endpoint({
                    endpoint: "GET /optionalQuery/{foo}",
                    query: khulnasoft_1.z.object({ bar: khulnasoft_1.z.string().optional() }),
                    response: khulnasoft_1.z.any(),
                    handler() {
                        return __awaiter(this, void 0, void 0, function* () { });
                    },
                }),
            },
        }),
        pathQuery: khulnasoft.resource({
            summary: "pathQuery",
            actions: {
                retrieve: khulnasoft.endpoint({
                    endpoint: "GET /pathQuery/{foo}",
                    path: khulnasoft_1.z.object({ foo: khulnasoft_1.z.string() }),
                    query: khulnasoft_1.z.object({ bar: khulnasoft_1.z.string() }),
                    response: khulnasoft_1.z.any(),
                    handler() {
                        return __awaiter(this, void 0, void 0, function* () { });
                    },
                }),
            },
        }),
        pathOptionalQuery: khulnasoft.resource({
            summary: "pathOptionalQuery",
            actions: {
                retrieve: khulnasoft.endpoint({
                    endpoint: "GET /pathOptionalQuery/{foo}",
                    path: khulnasoft_1.z.object({ foo: khulnasoft_1.z.string() }),
                    query: khulnasoft_1.z.object({ bar: khulnasoft_1.z.string().optional() }),
                    response: khulnasoft_1.z.any(),
                    handler() {
                        return __awaiter(this, void 0, void 0, function* () { });
                    },
                }),
            },
        }),
    },
});
// fetch mock that just echoes back its arguments
const fetch = (req, init) => __awaiter(void 0, void 0, void 0, function* () {
    return new Response(JSON.stringify({ req, init }));
});
const queryClient = new react_query_1.QueryClient();
const baseUrl = "http://localhost:3000";
const useClient = (0, __1.createUseReactQueryClient)(baseUrl, {
    fetch,
});
describe("useQuery methods", () => {
    for (const [description, useQuery, expectedUrl] of [
        [
            "get with required query",
            (client) => client.query.useRetrieve({ bar: "b" }),
            "/query?bar=b",
        ],
        [
            "get with omitted optional query",
            (client) => client.optionalQuery.useRetrieve(),
            "/optionalQuery",
        ],
        [
            "get with optional query",
            (client) => client.optionalQuery.useRetrieve({ bar: "b" }),
            "/optionalQuery?bar=b",
        ],
        [
            "get with path and required query",
            (client) => client.pathQuery.useRetrieve("a", { bar: "b" }),
            "/pathQuery/a?bar=b",
        ],
        [
            "get with path and optional query",
            (client) => client.pathOptionalQuery.useRetrieve("a", { bar: "b" }),
            "/pathOptionalQuery/a?bar=b",
        ],
        [
            "get with path and omitted optional query",
            (client) => client.pathOptionalQuery.useRetrieve("a"),
            "/pathOptionalQuery/a",
        ],
    ]) {
        it(description, () => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            let hookResult;
            const Comp = () => {
                hookResult = useQuery(useClient());
                return null;
            };
            (0, react_1.render)(React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
                React.createElement(Comp, null)));
            yield (0, react_1.waitFor)(() => expect(hookResult === null || hookResult === void 0 ? void 0 : hookResult.isSuccess).toEqual(true), {
                interval: 500,
                timeout: 10000,
            });
            expect((_a = hookResult === null || hookResult === void 0 ? void 0 : hookResult.data) === null || _a === void 0 ? void 0 : _a.req).toEqual(`${baseUrl}${expectedUrl}`);
        }), 15000);
    }
});
//# sourceMappingURL=useQuery.test.js.map