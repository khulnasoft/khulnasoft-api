export type FrameworkCategory =
  | "backend"
  | "frontend"
  | "fullstack"
  | "language"
  | "platform"
  | "tooling"
  | "service"
  | "other";

export type FrameworkStatus = "catalog" | "adapter" | "planned";

export type FrameworkVariant = "light" | "dark";

export type Framework = {
  readonly id: string;
  readonly name: string;
  readonly category: FrameworkCategory;
  readonly status: FrameworkStatus;
  readonly baseId: string;
  readonly variant?: FrameworkVariant;
  readonly aliases: readonly string[];
};

export type FrameworkAsset = {
  readonly id: string;
  readonly variant: FrameworkVariant;
  readonly path: string;
};

const requestedIds = [
  "actix-web",
  "angular",
  "ash-dark",
  "ash",
  "assemble",
  "astro-dark",
  "astro",
  "aurelia",
  "axum",
  "blitz",
  "brunch",
  "bun",
  "chargejs",
  "container",
  "django",
  "docusaurus",
  "docz",
  "dojo",
  "eleventy",
  "elysia",
  "ember",
  "eve-dark",
  "eve",
  "express-dark",
  "express",
  "fastapi",
  "fasthtml-dark",
  "fasthtml",
  "fastify-dark",
  "fastify",
  "flask",
  "foundation",
  "gatsby",
  "go",
  "gridsome",
  "h3",
  "hexo",
  "hono",
  "hugo",
  "hydrogen",
  "hyperapp",
  "ionic",
  "jekyll",
  "koa",
  "lovable",
  "mastra-dark",
  "mastra",
  "mdx-deck",
  "middleman",
  "mithriljs",
  "mkdocs",
  "nestjs",
  "next-dark",
  "next",
  "nitro",
  "node",
  "nuxt",
  "other",
  "parcel",
  "polymer",
  "preact",
  "python",
  "react-router-dark",
  "react-router",
  "react",
  "redwoodjs",
  "remix-no-shadow",
  "remix",
  "riot",
  "ruby",
  "rust",
  "saber",
  "sanity-dark",
  "sanity-v2",
  "sanity",
  "scullyio-logo",
  "sendgrid",
  "services",
  "solid",
  "stencil",
  "storybook",
  "svelte",
  "tanstack-start-dark",
  "tanstack-start",
  "umi",
  "vanilla",
  "vite",
  "vue",
  "vuepress",
  "xmcp",
  "zola",
] as const;

export type FrameworkId = (typeof requestedIds)[number];

const darkVariantIds = new Set<FrameworkId>([
  "ash-dark",
  "astro-dark",
  "eve-dark",
  "express-dark",
  "fasthtml-dark",
  "fastify-dark",
  "mastra-dark",
  "next-dark",
  "react-router-dark",
  "sanity-dark",
  "tanstack-start-dark",
]);

const adapterIds = new Set<FrameworkId>(["express", "hono", "next"]);

const aliasesById: Partial<Record<FrameworkId, readonly string[]>> = {
  "actix-web": ["actix"],
  angular: ["angularjs"],
  express: ["expressjs"],
  hono: ["honojs"],
  nestjs: ["nest"],
  next: ["nextjs", "next.js"],
  react: ["reactjs"],
  vue: ["vuejs"],
};

const categoryById: Partial<Record<FrameworkId, FrameworkCategory>> = {
  "actix-web": "backend",
  angular: "frontend",
  astro: "frontend",
  "astro-dark": "frontend",
  axum: "backend",
  bun: "platform",
  django: "backend",
  docusaurus: "tooling",
  elysia: "backend",
  express: "backend",
  "express-dark": "backend",
  fastapi: "backend",
  fastify: "backend",
  "fastify-dark": "backend",
  flask: "backend",
  gatsby: "frontend",
  go: "language",
  hono: "backend",
  hugo: "tooling",
  koa: "backend",
  nestjs: "backend",
  next: "fullstack",
  "next-dark": "fullstack",
  node: "platform",
  nuxt: "fullstack",
  python: "language",
  react: "frontend",
  remix: "fullstack",
  ruby: "language",
  rust: "language",
  sendgrid: "service",
  services: "service",
  svelte: "frontend",
  vite: "tooling",
  vue: "frontend",
};

const displayName = (id: FrameworkId): string =>
  id
    .replace(/-dark$/, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

const baseIdFor = (id: FrameworkId): FrameworkId =>
  id.replace(/-dark$/, "") as FrameworkId;

const statusFor = (id: FrameworkId): FrameworkStatus =>
  adapterIds.has(id)
    ? "adapter"
    : darkVariantIds.has(id)
    ? "catalog"
    : "planned";

export const FRAMEWORKS: readonly Framework[] = Object.freeze(
  requestedIds.map((id) => {
    const variant = darkVariantIds.has(id) ? "dark" : undefined;
    return Object.freeze({
      id,
      name: displayName(id),
      category: categoryById[id] ?? "other",
      status: statusFor(id),
      baseId: baseIdFor(id),
      ...(variant ? { variant } : {}),
      aliases: Object.freeze([...(aliasesById[id] ?? [])]),
    });
  })
);

const frameworkById = new Map<string, Framework>();
for (const framework of FRAMEWORKS) {
  frameworkById.set(framework.id, framework);
  for (const alias of framework.aliases) frameworkById.set(alias, framework);
}

export const getFramework = (id: string): Framework | undefined =>
  frameworkById.get(id);

export const getFrameworkVariant = (
  id: string,
  variant: FrameworkVariant
): Framework | undefined => {
  const framework = getFramework(id);
  if (!framework) return undefined;
  if (framework.variant === variant) return framework;
  return getFramework(
    variant === "dark" ? `${framework.baseId}-dark` : framework.baseId
  );
};

export const getFrameworksByCategory = (
  category: FrameworkCategory
): readonly Framework[] =>
  FRAMEWORKS.filter((framework) => framework.category === category);

export const getFrameworksByStatus = (
  status: FrameworkStatus
): readonly Framework[] =>
  FRAMEWORKS.filter((framework) => framework.status === status);

export const hasFrameworkAdapter = (id: string): boolean =>
  getFramework(id)?.status === "adapter";

export const assertFrameworkCatalog = (): void => {
  const ids = new Set<string>();
  for (const framework of FRAMEWORKS) {
    if (ids.has(framework.id))
      throw new Error(`Duplicate framework id: ${framework.id}`);
    ids.add(framework.id);

    if (framework.variant && !frameworkById.has(framework.baseId)) {
      throw new Error(`Missing base framework for variant: ${framework.id}`);
    }
  }
};

assertFrameworkCatalog();

export const frameworkIds = requestedIds;
