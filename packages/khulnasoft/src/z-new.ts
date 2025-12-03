import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z, ZodTypeAny } from "./z-utils";
import { KhulnasoftContext } from "./khulnasoft";
import { SelectTree } from "./parseSelect";
import { getSelects } from "./selects";
import { getIncludes, IncludablePaths } from "./includes";
import { pickBy } from "lodash/fp";
import { mapValues } from "lodash";

export * from "./z-utils";
export { selects, selectsSymbol, getSelects } from "./selects";
export {
  includes,
  includesSymbol,
  getIncludes,
  IncludablePaths,
} from "./includes";

// Extend Zod with OpenAPI
// This must be called before any usage of z.openapi()
extendZodWithOpenApi(z);

// Re-export the enhanced z object
export { z };

// Rest of the original z.ts content...
// [Previous content of z.ts can be added here if needed]

// Export the enhanced z object as default
export default z;
