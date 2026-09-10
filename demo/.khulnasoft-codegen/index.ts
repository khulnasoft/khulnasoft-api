// @ts-nocheck: generated file - the lazy dynamic imports below
// intentionally use extensionless specifiers (see packages/cli/src/index.ts)
export const typeSchemas = {
  "GET /api/params/{id}": () =>
    import("./api/params/retrieve").then((mod) => mod.GET__api_params_$id$),
  "POST /api/posts": () =>
    import("./api/posts/create").then((mod) => mod.POST__api_posts),
  "GET /api/posts/{post}": () =>
    import("./api/posts/retrieve").then((mod) => mod.GET__api_posts_$post$),
};
