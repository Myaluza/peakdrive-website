// Flat ESLint config. Deliberately close to the app's
// (PeakDrive/eslint.config.js): type-aware TypeScript rules, React Hooks rules,
// and eslint-config-prettier last so formatting stays Prettier's job alone.
//
// This repo had no linting at all until now — it was the only one of the three
// without it, which is how a hand-rolled duplicate of DownloadBadge and an
// untracked footer CTA survived unnoticed.
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  {
    // Build output and generated assets — never linted.
    ignores: ["dist/**", "node_modules/**", ".vite-react-ssg-temp/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    // Config files run in Node, not the browser.
    files: ["*.config.{js,ts}"],
    languageOptions: { globals: globals.node },
  },
  prettier,
);
