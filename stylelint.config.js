/** @type {import("stylelint").Config} */
export default {
    extends: ["stylelint-config-standard"],
    rules: {
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["theme", "source", "utility", "variant", "custom-variant", "apply", "reference"],
            },
        ],
        "custom-property-pattern": null,
        "custom-property-empty-line-before": null,
        "declaration-property-value-no-unknown": [
            true,
            {
                ignoreProperties: {
                    "/.+/": ["/^--spacing\\(.+\\)/"],
                },
            },
        ],
        "import-notation": null,
    },
};
