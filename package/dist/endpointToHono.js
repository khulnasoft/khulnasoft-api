"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpointToHono = endpointToHono;
const khulnasoft_1 = require("khulnasoft");
/**
 * Converts an endpoint from a format like 'GET /users/{id}'
 * to ['get', '/users/:id']
 */
function endpointToHono(endpoint) {
    const [method, path] = (0, khulnasoft_1.parseEndpoint)(endpoint);
    const pathParts = path
        .split("/")
        .map((el) => el.replace(/^\{([^}]+)\}$/, ":$1"));
    const unsupportedEl = pathParts.find((el) => el.includes("{"));
    if (unsupportedEl) {
        // TODO: hono routers don't support variables in the middle of a
        // path element, but they do support regexes, so we'd need to convert
        // this
        throw new Error(`path element isn't currently supported: ${unsupportedEl}`);
    }
    return [method, pathParts.join("/")];
}
//# sourceMappingURL=endpointToHono.js.map