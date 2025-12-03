import type { api } from "./api";
import { api as routeMap } from "./api-route-map";
import { createUseReactQueryClient } from "@khulnasoft-api/react-query";

export const useClient = createUseReactQueryClient<typeof api>("/api", {
  routeMap,
});
