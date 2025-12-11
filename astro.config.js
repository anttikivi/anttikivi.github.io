// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { minify } from "html-minifier-terser";
import { browserslistToTargets } from "lightningcss";
import { readFile, writeFile } from "node:fs/promises";
import rehypeExternalLinks from "rehype-external-links";
import locales, { defaultLocale } from "./src/data/locales";

/**
 * @param {import("html-minifier-terser").Options=} options
 * @return {import("astro").AstroIntegration}
 */
function minifyHtml(options) {
    /** @type {import("astro").AstroConfig} */
    let config;

    return {
        name: "html-minifier-terser",
        hooks: {
            "astro:config:done": ({ config: cfg }) => {
                config = cfg;
            },
            "astro:build:done": async ({ pages, dir, logger }) => {
                if (!import.meta.env.PROD || import.meta.env.DEV) {
                    return;
                }

                await Promise.all(
                    pages.map(async ({ pathname }) => {
                        logger.debug(`processing ${pathname}`);

                        let url;

                        // TODO: Totally just vibing how the paths work.
                        if (pathname === "404" || pathname === "404/") {
                            url = "404.html";
                        } else if (config.build.format === "preserve") {
                            if (pathname.endsWith("/")) {
                                url = pathname + "index.html";
                            } else {
                                url = pathname + ".html";
                            }
                        } else if (config.build.format === "directory") {
                            url = pathname + "index.html";
                        } else if (config.build.format === "file") {
                            url = pathname + ".html";
                        } else {
                            logger.error(`Invalid build output type: \`${config.build.format}\``);
                            return;
                        }

                        const pageURL = new URL(url, dir);

                        logger.debug(`minifying ${pathname} at ${pageURL}`);

                        const input = await readFile(pageURL, "utf8");
                        const output = await minify(input, options);
                        await writeFile(pageURL, output);
                    }),
                );

                logger.info(`processed ${pages.length} pages`);
            },
        },
    };
}

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.PROD ? "https://www.anttikivi.com" : "http://localhost:4321",
    trailingSlash: "always",
    output: "static",
    integrations: [
        sitemap(),
        mdx(),
        minifyHtml({
            collapseWhitespace: true,
            minifyCSS: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeOptionalTags: true,
        }),
    ],
    compressHTML: import.meta.env.PROD,
    vite: {
        css: {
            transformer: "lightningcss",
            lightningcss: {
                targets: browserslistToTargets(browserslist(">= 0.01%, last 2 versions, Firefox ESR, not dead")),
            },
        },
        build: {
            cssMinify: "lightningcss",
        },
    },
    build: {
        format: "directory",
        assets: "_assets",
    },
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    rel: ["nofollow"],
                },
            ],
        ],
    },
    i18n: {
        locales: locales.map((locale) => (locale.includes("-") ? locale.substring(0, locale.indexOf("-")) : locale)),
        defaultLocale: defaultLocale.includes("-")
            ? defaultLocale.substring(0, defaultLocale.indexOf("-"))
            : defaultLocale,
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
