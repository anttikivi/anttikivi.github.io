import routes from "@/data/routes";
import { defaultLocale } from "@/locales";
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

function typedObjectKeys<T extends object>(object: T) {
    return Object.keys(object) as (keyof typeof object)[];
}

const [firstRouteKey, ...restRouteKeys] = typedObjectKeys(routes[defaultLocale]);

export const collections = {
    errors: defineCollection({}),
    home: defineCollection({
        loader: glob({ pattern: "**/*.md", base: "src/content/home" }),
        schema: z.object({
            title: z.string(),
        }),
    }),
    pages: defineCollection({
        schema: z.object({
            key: z.enum([firstRouteKey!, ...restRouteKeys]).optional(),
            title: z.string(),
        }),
    }),
};
