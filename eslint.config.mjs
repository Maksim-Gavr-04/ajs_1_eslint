import ESLint from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["!dist/"],
  },
  ESLint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {},
    rules: {},
  },
  // ...other config
];

