import { defaultLocale } from "@/data/locales";
import routes from "@/data/routes";
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

function typedObjectKeys<T extends object>(object: T) {
    return Object.keys(object) as (keyof typeof object)[];
}

const [firstRouteKey, ...restRouteKeys] = typedObjectKeys(routes[defaultLocale]);

const errors = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/errors" }),
    schema: z.object({}),
});
const home = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/home" }),
    schema: z.object({
        title: z.string(),
    }),
});

const pages = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "src/content/pages" }),
    schema: z.object({
        key: z.enum([firstRouteKey!, ...restRouteKeys]).optional(),
        title: z.string(),
    }),
});

export const collections = {
    errors,
    home,
    pages,
};
