"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
  test: {
    typecheck: { enabled: true },
    setupFiles: ["/src/test-util/setup.ts"],
    // Compiled output from tsc -b lives in dist/ (tests included);
    // only run tests from src/.
    exclude: ["**/node_modules/**", "**/dist/**"],
  },
});
