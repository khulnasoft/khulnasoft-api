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
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const khulnasoft_1 = require("khulnasoft");
const vitest_1 = require("vitest");
const honoPlugin_1 = require("./honoPlugin");
const khulnasoft = new khulnasoft_1.Khulnasoft({ plugins: {} });
(0, vitest_1.describe)("basic routing", () => {
    const api = khulnasoft.api({
        basePath: "/api",
        resources: {
            posts: khulnasoft.resource({
                summary: "posts",
                actions: {
                    retrieve: khulnasoft.endpoint({
                        endpoint: "GET /api/posts/:postId",
                        path: khulnasoft_1.z.object({ postId: khulnasoft_1.z.coerce.number() }),
                        query: khulnasoft_1.z.object({ expand: khulnasoft_1.z.string().array().optional() }),
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
                    update: khulnasoft.endpoint({
                        endpoint: "POST /api/comments/:commentId",
                        path: khulnasoft_1.z.object({ commentId: khulnasoft_1.z.coerce.number() }),
                        handler: () => {
                            throw new khulnasoft_1.UnauthorizedError();
                        },
                    }),
                },
            }),
        },
    });
    const app = new hono_1.Hono();
    app.use("*", (0, honoPlugin_1.khulnasoftApi)(api));
    (0, vitest_1.test)("list posts", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/posts");
        (0, vitest_1.expect)(response).toHaveProperty("status", 200);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      []
    `);
    }));
    (0, vitest_1.test)("retrieve posts", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/posts/5");
        (0, vitest_1.expect)(response).toHaveProperty("status", 200);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "postId": 5,
      }
    `);
    }));
    (0, vitest_1.test)("retrieve posts, wrong method", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/posts/5", {
            method: "PUT",
        });
        (0, vitest_1.expect)(response).toHaveProperty("status", 405);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "message": "No handler for PUT; only GET, POST.",
      }
    `);
    }));
    (0, vitest_1.test)("update posts", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/posts/5", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ content: "hello" }),
        });
        (0, vitest_1.expect)(response).toHaveProperty("status", 200);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "content": "hello",
        "postId": 5,
      }
    `);
    }));
    (0, vitest_1.test)("update posts, wrong content type", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/posts/5", {
            method: "POST",
            headers: {
                "content-type": "text/plain",
            },
            body: "hello",
        });
        (0, vitest_1.expect)(response).toHaveProperty("status", 400);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "error": "bad request",
        "issues": [
          {
            "code": "invalid_type",
            "expected": "object",
            "message": "Required",
            "path": [
              "<body>",
            ],
            "received": "undefined",
          },
        ],
        "message": "Required at "<body>"",
      }
    `);
    }));
    (0, vitest_1.test)("update posts, missing param", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/posts/5", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({}),
        });
        (0, vitest_1.expect)(response).toHaveProperty("status", 400);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "error": "bad request",
        "issues": [
          {
            "code": "invalid_type",
            "expected": "string",
            "message": "Required",
            "path": [
              "<body>",
              "content",
            ],
            "received": "undefined",
          },
        ],
        "message": "Validation error: Required at "<body>.content"",
      }
    `);
    }));
    (0, vitest_1.test)("retrieve comments", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/comments/3");
        (0, vitest_1.expect)(response).toHaveProperty("status", 200);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "commentId": 3,
      }
    `);
    }));
    (0, vitest_1.test)("not found", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/not-found");
        (0, vitest_1.expect)(response).toHaveProperty("status", 404);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "error": "not found",
      }
    `);
    }));
    (0, vitest_1.test)("throwing inside handler", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/comments/3", {
            method: "POST",
        });
        (0, vitest_1.expect)(response).toHaveProperty("status", 401);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "error": "unauthorized",
      }
    `);
    }));
});
(0, vitest_1.describe)("hono passthrough", () => {
    const baseApi = khulnasoft.api({
        basePath: "/api",
        resources: {
            posts: khulnasoft.resource({
                summary: "posts",
                actions: {
                    retrieve: khulnasoft.endpoint({
                        endpoint: "GET /api/posts",
                        handler: () => {
                            throw new Error("arbitrary error");
                        },
                    }),
                    create: khulnasoft.endpoint({
                        endpoint: "POST /api/posts",
                        body: khulnasoft_1.z.any(),
                        response: khulnasoft_1.z.any(),
                        handler: (body, context) => __awaiter(void 0, void 0, void 0, function* () {
                            const [c] = context.server.args;
                            return { bodyKhulnasoft: body, bodyRaw: yield c.req.raw.text() };
                        }),
                    }),
                },
            }),
            redirect: khulnasoft.resource({
                summary: "redirect",
                actions: {
                    retrieve: khulnasoft.endpoint({
                        endpoint: "GET /api/redirect",
                        response: khulnasoft_1.z.any(),
                        handler: (_, context) => {
                            const [c] = context.server.args;
                            return c.redirect("/");
                        },
                    }),
                },
            }),
        },
    });
    const app = new hono_1.Hono();
    app.use("*", (0, honoPlugin_1.khulnasoftApi)(baseApi, { handleErrors: false }));
    app.all("/public/*", (c) => {
        return c.text("public content", 200);
    });
    app.notFound((c) => {
        return c.text("custom not found", 404);
    });
    app.onError((err, c) => {
        return c.text(`custom error: ${err.message}`, 500);
    });
    (0, vitest_1.test)("hono response", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/redirect");
        (0, vitest_1.expect)(response).toHaveProperty("status", 302);
        (0, vitest_1.expect)(response.headers.get("location")).toMatchInlineSnapshot(`"/"`);
    }));
    (0, vitest_1.test)("public passthrough", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/public/foo/bar");
        (0, vitest_1.expect)(response).toHaveProperty("status", 200);
        (0, vitest_1.expect)(yield response.text()).toMatchInlineSnapshot(`"public content"`);
    }));
    (0, vitest_1.test)("not found passthrough", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/comments");
        (0, vitest_1.expect)(response).toHaveProperty("status", 404);
        (0, vitest_1.expect)(yield response.text()).toMatchInlineSnapshot(`"custom not found"`);
    }));
    (0, vitest_1.test)("error passthrough", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/posts");
        (0, vitest_1.expect)(response).toHaveProperty("status", 500);
        (0, vitest_1.expect)(yield response.text()).toMatchInlineSnapshot(`"custom error: arbitrary error"`);
    }));
    (0, vitest_1.test)("request passthrough", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield app.request("/api/posts", {
            method: "POST",
            body: JSON.stringify({ message: "hello" }),
        });
        (0, vitest_1.expect)(response).toHaveProperty("status", 200);
        (0, vitest_1.expect)(yield response.json()).toMatchInlineSnapshot(`
      {
        "bodyRaw": "{"message":"hello"}",
        "bodyKhulnasoft": {
          "message": "hello",
        },
      }
    `);
    }));
});
//# sourceMappingURL=honoPlugin.test.js.map