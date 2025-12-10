/** @type {import("prettier").Config} */
const config = {
    plugins: [
        "@prettier/plugin-xml",
        "prettier-plugin-astro",
        "prettier-plugin-packagejson",
        "prettier-plugin-organize-imports",
        "prettier-plugin-astro-organize-imports",
    ],
    arrowParens: "always",
    bracketSpacing: true,
    printWidth: 120,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    useTabs: false,
    overrides: [
        {
            files: ["*.astro"],
            options: {
                parser: "astro",
            },
        },
        {
            files: ["*.md", "*.mdx"],
            options: {
                proseWrap: "always",
                printWidth: 80,
            },
        },
        {
            files: ["*.svg"],
            options: {
                xmlSortAttributesByKey: true,
                xmlWhitespaceSensitivity: "ignore",
            },
        },
    ],
};

export default config;
