"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const khulnasoft_1 = require("khulnasoft");
const index_1 = require("../index");
const util_1 = require("util");
const port = 7594;
const baseUrl = `http://0.0.0.0:${port}`;
const cleanup = [];
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield Promise.all(cleanup.map((task) => task()));
    cleanup.length = 0;
}));
function serve(app) {
    return __awaiter(this, void 0, void 0, function* () {
        let server;
        yield (0, util_1.promisify)((cb) => (server = app.listen(port, () => cb(null))))();
        cleanup.push(() => (0, util_1.promisify)((cb) => server.close(cb))());
    });
}
function serveEndpoint(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        (0, index_1.addEndpointRoute)(app, endpoint);
        return yield serve(app);
    });
}
const khulnasoft = new khulnasoft_1.Khulnasoft({ plugins: {} });
it("context.server", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield serveEndpoint(khulnasoft.endpoint({
            endpoint: "GET /foo",
            response: khulnasoft_1.z.object({
                server: khulnasoft_1.z.object({
                    type: khulnasoft_1.z.string(),
                    argCount: khulnasoft_1.z.number(),
                }),
            }),
            handler: (params, context) => {
                const { server } = context;
                return { server: { type: server.type, argCount: server.args.length } };
            },
        }));
        expect(yield fetch(baseUrl + "/foo").then((r) => r.json()))
            .toMatchInlineSnapshot(`
    {
      "server": {
        "argCount": 2,
        "type": "express",
      },
    }
  `);
    });
});
it("routing and basePathMap", function () {
    return __awaiter(this, void 0, void 0, function* () {
        const router = (0, index_1.apiRouter)(khulnasoft.api({
            basePath: "/",
            resources: {
                posts: khulnasoft.resource({
                    summary: "posts",
                    actions: {
                        retrieve: khulnasoft.endpoint({
                            endpoint: "GET /api/posts/:postId",
                            path: khulnasoft_1.z.object({ postId: khulnasoft_1.z.coerce.number() }),
                            response: khulnasoft_1.z.object({ postId: khulnasoft_1.z.coerce.number() }),
                            handler: (params) => params,
                        }),
                        update: khulnasoft.endpoint({
                            endpoint: "POST /api/posts/:postId",
                            path: khulnasoft_1.z.object({ postId: khulnasoft_1.z.coerce.number() }),
                            body: khulnasoft_1.z.object({ content: khulnasoft_1.z.string() }),
                            response: khulnasoft_1.z.object({
                                postId: khulnasoft_1.z.coerce.number(),
                                content: khulnasoft_1.z.string(),
                            }),
                            handler: (params) => params,
                        }),
                        list: khulnasoft.endpoint({
                            endpoint: "GET /api/posts",
                            response: khulnasoft_1.z.any().array(),
                            handler: () => [],
                        }),
                    },
                }),
                comments: khulnasoft.resource({
                    summary: "comments",
                    actions: {
                        retrieve: khulnasoft.endpoint({
                            endpoint: "GET /api/comments/:commentId",
                            path: khulnasoft_1.z.object({ commentId: khulnasoft_1.z.coerce.number() }),
                            response: khulnasoft_1.z.object({ commentId: khulnasoft_1.z.coerce.number() }),
                            handler: (params) => params,
                        }),
                    },
                }),
            },
        }), { basePathMap: { "/api/": "/" } });
        const app = (0, express_1.default)();
        app.use(router);
        yield serve(app);
        expect(yield fetch(baseUrl + "/posts").then((r) => r.json())).toMatchInlineSnapshot(`[]`);
        expect(yield fetch(baseUrl + "/posts/5").then((r) => r.json()))
            .toMatchInlineSnapshot(`
    {
      "postId": 5,
    }
  `);
        expect(yield fetch(baseUrl + "/posts/5", {
            method: "POST",
            body: JSON.stringify({ content: "foobar" }),
        }).then((r) => r.json())).toMatchInlineSnapshot(`
    {
      "error": "bad request",
      "issues": [
        {
          "code": "invalid_type",
          "expected": "object",
          "message": "Expected object, received string",
          "path": [
            "<khulnasoft request body>",
          ],
          "received": "string",
        },
      ],
    }
  `);
        expect(yield fetch(baseUrl + "/comments/3").then((r) => r.json()))
            .toMatchInlineSnapshot(`
    {
      "commentId": 3,
    }
  `);
        expect(yield fetch(baseUrl + "/posts/5", {
            method: "POST",
            body: JSON.stringify({ content: 1 }),
        })).toHaveProperty("status", 400);
        expect(yield fetch(baseUrl + "/posts/5", {
            method: "DELETE",
        })).toHaveProperty("status", 405);
        expect(yield fetch(baseUrl + "/posts/5/foo", {
            method: "GET",
        })).toHaveProperty("status", 404);
        expect(yield fetch(baseUrl + "/comments/3", {
            method: "POST",
        })).toHaveProperty("status", 405);
    });
});
it("path and query params", function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield serveEndpoint(khulnasoft.endpoint({
            endpoint: "GET /posts/:postId/comments/:commentId",
            path: khulnasoft_1.z.object({
                postId: khulnasoft_1.z.coerce.number(),
                commentId: khulnasoft_1.z.coerce.number(),
            }),
            query: khulnasoft_1.z.object({
                expand: khulnasoft_1.z
                    .enum(["user", "user.posts", "user.comments"])
                    .array()
                    .optional(),
            }),
            response: khulnasoft_1.z.object({
                postId: khulnasoft_1.z.number(),
                commentId: khulnasoft_1.z.number(),
                expand: khulnasoft_1.z
                    .enum(["user", "user.posts", "user.comments"])
                    .array()
                    .optional(),
            }),
            handler: (params) => params,
        }));
        expect(yield fetch(baseUrl + "/posts/5/comments/3").then((r) => r.json()))
            .toMatchInlineSnapshot(`
    {
      "commentId": 3,
      "postId": 5,
    }
  `);
        expect(yield fetch(baseUrl +
            `/posts/5/comments/3?expand[0]=user&expand[1]=${encodeURIComponent("user.posts")}`).then((r) => r.json())).toMatchInlineSnapshot(`
    {
      "commentId": 3,
      "expand": [
        "user",
        "user.posts",
      ],
      "postId": 5,
    }
  `);
    });
});
it(`error handling`, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield serveEndpoint(khulnasoft.endpoint({
            endpoint: "GET /foo",
            handler: () => {
                throw new khulnasoft_1.KhulnasoftError(427, { a: 1, b: 2 });
            },
        }));
        const response = yield fetch(baseUrl + "/foo");
        expect(response).toHaveProperty("status", 427);
        expect(yield response.json()).toMatchInlineSnapshot(`
    {
      "a": 1,
      "b": 2,
    }
  `);
    });
});
it(`handleErrors: false`, function () {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        app.use(express_1.default.json());
        app.use(express_1.default.text());
        app.use((0, index_1.apiRouter)(khulnasoft.api({
            basePath: "/",
            resources: {
                comments: khulnasoft.resource({
                    summary: "comments",
                    actions: {
                        retrieve: khulnasoft.endpoint({
                            endpoint: "GET /comments/:commentId",
                            path: khulnasoft_1.z.object({ commentId: khulnasoft_1.z.coerce.number() }),
                            handler: () => {
                                throw new Error("this is a test!");
                            },
                        }),
                    },
                }),
            },
        }), { handleErrors: false }));
        let gotErr;
        app.use("/comments/:commentId", (err, req, res, next) => {
            gotErr = err;
            res.status(427).send();
        });
        yield serve(app);
        expect(yield fetch(baseUrl + "/comments/5")).toHaveProperty("status", 427);
        expect(gotErr).toHaveProperty("message", "this is a test!");
    });
});
//# sourceMappingURL=express.test.js.map