// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import locales, { defaultLocale } from "./src/locales";

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.PROD ? "https://www.anttikivi.com" : "http://localhost:4321",
    trailingSlash: "always",
    output: "static",
    integrations: [sitemap()],
    compressHTML: import.meta.env.PROD,
    vite: {
        plugins: [tailwindcss()],
        css: {
            transformer: "lightningcss",
            lightningcss: {
                // include: Features.Colors | Features.Nesting,
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
    i18n: {
        locales: locales,
        defaultLocale: defaultLocale as never,
        routing: {
            prefixDefaultLocale: false,
        },
    },
});
