/** @type {import("prettier").Config} */
const config = {
    plugins: [
        "prettier-plugin-packagejson",
        "prettier-plugin-organize-imports",
        "prettier-plugin-jinja-template",
        "prettier-plugin-tailwindcss",
    ],
    arrowParens: "always",
    bracketSpacing: true,
    printWidth: 120,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    useTabs: false,
    proseWrap: "always",
    tailwindStylesheet: "./src/main.css",
    overrides: [
        {
            files: ["*.md"],
            options: {
                printWidth: 80,
            },
        },
        {
            files: ["*.njk"],
            options: {
                parser: "jinja-template",
            },
        },
    ],
};

export default config;
