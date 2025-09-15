import eslintJs from "@eslint/js";
import { defineConfig } from "eslint/config";
import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  eslintJs.configs.recommended,
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      perfectionist: eslintPluginPerfectionist as any,
      "simple-import-sort": eslintPluginSimpleImportSort,
      "unused-imports": eslintPluginUnusedImports,
    },
    rules: {
      "perfectionist/sort-jsx-props": [
        "error",
        {
          order: "asc",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          order: "asc",
          type: "alphabetical",
        },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "off",
    },
  },
]);
