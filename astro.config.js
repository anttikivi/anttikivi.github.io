// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import rehypeExternalLinks from "rehype-external-links";
import locales, { defaultLocale } from "./src/data/locales";

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.PROD ? "https://www.anttikivi.com" : "http://localhost:4321",
    trailingSlash: "always",
    output: "static",
    integrations: [sitemap()],
    compressHTML: import.meta.env.PROD,
    vite: {
        // @ts-expect-error 2322
        plugins: [tailwindcss()],
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
