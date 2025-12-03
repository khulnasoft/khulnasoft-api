"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includeSubPaths = includeSubPaths;
function includeSubPaths(include, path) {
    const prefix = `${path}.`;
    return include.flatMap((path) => path.startsWith(prefix) ? [path.substring(prefix.length)] : []);
}
//# sourceMappingURL=includeUtils.js.map