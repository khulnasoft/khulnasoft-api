import { APIRouteMap } from "khulnasoft";

export const api: APIRouteMap = {
  "actions": {
    "getOpenapi": {
      "endpoint": "GET /api/openapi"
    }
  },
  "namespacedResources": {
    "test": {
      "actions": {
        "foo": {
          "endpoint": "PUT /api/foo/{value}"
        }
      }
    }
  }
};