import { I18nPlugin } from "@11ty/eleventy";
import Image, { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import path from "node:path";
import { processCss } from "./util/css.js";
import { createFileHash } from "./util/hash.js";

/** @import {UserConfig} from "@11ty/eleventy/src/UserConfig" */

const languages = {
    en: "en-GB",
    fi: "fi",
};

const locales = {
    en: "en_GB",
    fi: "fi_FI",
};

const paths = {
    en: {
        "/": "/",
        about: "/about/",
        blog: "/writings/",
    },
    fi: {
        "/": "/",
        about: "/minusta/",
        blog: "/kirjoituksia/",
    },
};

const nav = {
    langs: {
        en: "in English",
        fi: "suomeksi",
    },
    primary: [
        {
            link: "about",
            label: {
                en: "About",
                fi: "Minusta",
            },
        },
        {
            link: "blog",
            label: {
                en: "Writings",
                fi: "Kirjoituksia",
            },
        },
    ],
};

const siteData = {
    defaultLanguage: "en",
    disabledLanguages: [],
    isProduction: process.env.NODE_ENV === "production",
    languages: Object.keys(languages),
    locales,
    title: "Antti Kivi",
    url: process.env.NODE_ENV === "production" ? "https://www.anttikivi.com" : "http://localhost:8080",
};

/**
 * @param {UserConfig} eleventyConfig
 */
export default async function (eleventyConfig) {
    /*
     * Global data
     */
    eleventyConfig.addGlobalData("site", siteData);
    eleventyConfig.addGlobalData("nav", nav);

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
        return languages[lang];
    });

    eleventyConfig.addFilter("makePath", function (value, lang) {
        const basename = `${paths[lang][value]}index.html`;

        if (lang === "en") {
            return basename;
        }

        return `/${lang}${basename}`;
    });

    eleventyConfig.addFilter("geturl", function (value, lang) {
        const language = lang ? lang : this.page.lang;
        if (value in paths[language]) {
            if (language === siteData.defaultLanguage) {
                return `${paths[language][value]}`;
            }

            return `/${language}${paths[language][value]}`;
        }

        throw new ReferenceError(
            `Trying to get translated path "${value}" to ${language} but no valid translation was found.`,
        );
    });

    /*
     * Shortcodes
     */
    eleventyConfig.addShortcode("favicons", async function () {
        const options = {
            urlPath: "/",
            outputDir: "./_site",
        };
        const svgIcons = await Image("./src/assets/favicon.svg", {
            widths: ["auto"],
            formats: ["svg"],
            ...options,
        });
        // const pngIcons = await Image("./src/assets/favicon.png", {
        //     widths: [16, 32, 180],
        //     formats: ["png"],
        //     ...options,
        // });

        const appleTouchIconHash = await createFileHash("./src/assets/apple-touch-icon.png");
        const icoHash = await createFileHash("./src/assets/favicon.ico");
        const favicon16Hash = await createFileHash("./src/assets/favicon-16.png");
        const favicon32Hash = await createFileHash("./src/assets/favicon-32.png");
        const favicon192Hash = await createFileHash("./src/assets/favicon-192.png");
        const favicon512Hash = await createFileHash("./src/assets/favicon-512.png");

        return `<link href="${svgIcons.svg[0].url}" rel="icon" type="image/svg+xml" />
<link href="/${process.env.NODE_ENV === "production" ? favicon32Hash : "favicon-32"}.png" rel="icon" sizes="32x32" type="image/png" />
<link href="/${process.env.NODE_ENV === "production" ? favicon16Hash : "favicon-16"}.png" rel="icon" sizes="16x16" type="image/png" />
<link href="/${process.env.NODE_ENV === "production" ? appleTouchIconHash : "apple-touch-icon"}.png" rel="apple-touch-icon" sizes="180x180" />
<link href="/${process.env.NODE_ENV === "production" ? favicon192Hash : "favicon-192"}.png" rel="icon" sizes="192x192" type="image/png" />
<link href="/${process.env.NODE_ENV === "production" ? favicon512Hash : "favicon-512"}.png" rel="icon" sizes="512x512" type="image/png" />
<link href="/${process.env.NODE_ENV === "production" ? icoHash : "favicon"}.ico" rel="shortcut icon" />`;
    });

    eleventyConfig.addShortcode("openGraphImage", async function (src, lang) {
        if (!src.endsWith(".png")) {
            throw new TypeError(`The value for the OpenGraph image is not an PNG image: ${src}`);
        }
        const images = await Image(
            lang ? `./src/assets/${src.split(".").slice(0, -1).join(".")}-${lang}.png` : `./src/assets/${src}`,
            {
                widths: [1200],
                formats: ["png"],
                urlPath: "/",
                outputDir: "./_site",
            },
        );
        const img = images.png[0];

        return `<meta property="og:image" content="${siteData.url}${img.url}" />
<meta property="og:image:secure_url" content="${siteData.url}${img.url}" />
<meta property="og:image:type" content="${img.sourceType}" />
<meta property="og:image:width" content="${img.width}" />
<meta property="og:image:height" content="${img.height}" />`;
    });

    /*
     * Plugins
     */
    eleventyConfig.addPlugin(I18nPlugin, { defaultLanguage: "en" });
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        extensions: "html",
        formats: ["webp", "jpeg"],
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
        },
    });

    /**
     * Pass-through copies
     */
    // To be safe, add a pass-through copy of the plain "favicon.ico" in case
    // the browser looks for it.
    eleventyConfig.addPassthroughCopy({
        "src/assets/favicon.ico": "/favicon.ico",
    });
    if (process.env.NODE_ENV === "production") {
        eleventyConfig.addPassthroughCopy({
            "src/assets/apple-touch-icon.png": `/${await createFileHash("./src/assets/apple-touch-icon.png")}.png`,
            "src/assets/favicon-16.png": `/${await createFileHash("./src/assets/favicon-16.png")}.png`,
            "src/assets/favicon-32.png": `/${await createFileHash("./src/assets/favicon-32.png")}.png`,
            "src/assets/favicon-192.png": `/${await createFileHash("./src/assets/favicon-192.png")}.png`,
            "src/assets/favicon-512.png": `/${await createFileHash("./src/assets/favicon-512.png")}.png`,
            "src/assets/favicon.ico": `/${await createFileHash("./src/assets/favicon.ico")}.ico`,
        });
    } else {
        eleventyConfig.addPassthroughCopy({
            "src/assets/apple-touch-icon.png": "/apple-touch-icon.png",
            "src/assets/favicon-16.png": "/favicon-16.png",
            "src/assets/favicon-32.png": "/favicon-32.png",
            "src/assets/favicon-192.png": "/favicon-192.png",
            "src/assets/favicon-512.png": "/favicon-512.png",
        });
    }

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
                const filename = inputPath.substring(inputPath.lastIndexOf("/") + 1, inputPath.lastIndexOf("."));
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
