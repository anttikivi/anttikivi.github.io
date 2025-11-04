import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
    {
        ignores: [".astro/", "dist/", "node_modules/", "package-lock.json"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    tseslint.configs.recommended,
    {
        files: ["**/*.astro"],
        plugins: { astro },
        extends: ["astro/recommended", "astro/jsx-a11y-recommended"],
    },
    { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
    { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
]);
