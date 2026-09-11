import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    typecheck: { enabled: true },
    setupFiles: ["/src/test-util/setup.ts"],
    // Compiled output from tsc -b lives in dist/ (tests included);
    // only run tests from src/.
    exclude: ["**/node_modules/**", "**/dist/**"],
  },
});
