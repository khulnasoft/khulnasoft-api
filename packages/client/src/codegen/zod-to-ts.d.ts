/**
 * Minimal ambient declarations for `zod-to-ts`.
 *
 * The published `zod-to-ts@1.2.0` package predates `moduleResolution: "NodeNext"`
 * (its `exports` map exposes no `types` condition), so TypeScript cannot locate
 * its bundled `dist/index.d.ts` under NodeNext resolution (TS7016).
 * These declarations describe the small subset of the API used by our codegen.
 */
declare module "zod-to-ts" {
  import type { ZodTypeAny } from "zod";
  import type * as ts from "typescript";

  export interface ZodToTsOptions {
    nativeEnums?: "union" | "enum";
  }

  export function zodToTs(
    schema: ZodTypeAny,
    name?: string | undefined,
    options?: ZodToTsOptions
  ): { node: ts.Node; store?: unknown };

  export function printNode(node: ts.Node): string;
}
