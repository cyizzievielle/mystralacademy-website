import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "dist/**",
    "node_modules/**",
    ".next/**",
    "app/**",
    "next-env.d.ts",
  ]),
]);
