import locales, { type Locale } from "@/data/locales";

const enGB = {
    about: "about",
    contact: "contact",
    index: "/",
    blog: "writings",
};

const fi = {
    about: "minusta",
    contact: "yhteys",
    index: "/",
    blog: "kirjoituksia",
} satisfies typeof enGB;

export type RouteDefs = typeof enGB;
export type RouteKey = keyof typeof enGB;

/**
 * The route keys of the pages that use their own template instead of
 * the general page template.
 */
export const customPageKeys = ["blog"];

/**
 * The page IDs of the pages that use their own template instead of the general
 * page template.
 */
export const customPageIDs = locales.flatMap((locale) => customPageKeys.map((key) => `${locale.toLowerCase()}/${key}`));

export default { "en-GB": enGB, fi } as Record<Locale, typeof enGB>;
