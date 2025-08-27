import { I18nPlugin } from "@11ty/eleventy";
import path from "node:path";
import { processCss } from "./util/css.js";
import { createFileHash } from "./util/hash.js";

/** @import {UserConfig} from "@11ty/eleventy/src/UserConfig" */

const locales = {
    en: "en-GB",
    fi: "fi",
};

const paths = {
    en: {
        "/": "/",
        about: "/about/",
    },
    fi: {
        "/": "/",
        about: "/minusta/",
    },
};

/**
 * @param {UserConfig} eleventyConfig
 */
export default function (eleventyConfig) {
    /*
     * Filters
     */
    eleventyConfig.addFilter("hash", async function (filename) {
        if (process.env.NODE_ENV === "development") {
            return filename;
        }

        const inputFile = path.join("src", filename);
        const hash = await createFileHash(inputFile);
        if (filename.endsWith(".css")) {
            if (process.env.NODE_ENV === "production") {
                return `/${hash}.css`;
            }

            return `${filename.substring(0, filename.lastIndexOf("."))}.${hash}.css`;
        } else {
            return filename;
        }
    });

    eleventyConfig.addFilter("lang", function (lang) {
        return locales[lang];
    });

    eleventyConfig.addFilter("makePath", function (value, lang) {
        const basename = `${paths[lang][value]}index.html`;

        if (lang === "en") {
            return basename;
        }

        return `/${lang}${basename}`;
    });

    /*
     * Plugins
     */
    eleventyConfig.addPlugin(I18nPlugin, { defaultLanguage: "en" });

    /*
     * Template Formats
     */
    eleventyConfig.addTemplateFormats("css");
    eleventyConfig.addExtension("css", {
        outputFileExtension: "css",
        compile: function (contents, inputPath) {
            return async function () {
                return (await processCss(contents, inputPath)).code;
            };
        },
        compileOptions: {
            permalink: async function (_, inputPath) {
                const filename = inputPath.substring(
                    inputPath.lastIndexOf("/") + 1,
                    inputPath.lastIndexOf("."),
                );
                if (process.env.NODE_ENV === "development") {
                    return `${filename}.css`;
                }

                const hash = await createFileHash(inputPath);
                if (process.env.NODE_ENV === "production") {
                    return `${hash}.css`;
                }

                return `${filename}.${hash}.css`;
            },
        },
    });

    /**
     * Server options
     */
    eleventyConfig.setServerOptions({
        watch: ["_site/**/*.css"],
        showVersion: true,
    });
}

export const config = {
    dir: {
        input: "src",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
};
