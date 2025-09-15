import { fileURLToPath } from "node:url";

import { includeIgnoreFile } from "@eslint/compat";

import { javascript, node, prettier, react, typescript } from "./src";

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url));

export default [
  includeIgnoreFile(gitignorePath),
  ...javascript,
  ...typescript,
  ...react,
  ...node,
  ...prettier,
];
