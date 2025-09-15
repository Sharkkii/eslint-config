import { defineConfig } from "eslint/config";
import typescriptEslint from "typescript-eslint";

export default defineConfig(typescriptEslint.configs.recommended);
