import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
    home: defineCollection({
        loader: glob({ pattern: "**/*.md", base: "src/content/home" }),
        schema: z.object({
            title: z.string(),
        }),
    }),
};
