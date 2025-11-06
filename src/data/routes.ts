import locales, { type Locale } from "@/locales";

const enGB = {
    contact: "contact",
    index: "/",
    writings: "writings",
};

const fi = {
    contact: "yhteys",
    index: "/",
    writings: "kirjoituksia",
} satisfies typeof enGB;

export type RouteDefs = typeof enGB;
export type RouteKey = keyof typeof enGB;

/**
 * The route keys of the pages that use their own template instead of
 * the general page template.
 */
export const customPageKeys = ["writings"];

/**
 * The page IDs of the pages that use their own template instead of the general
 * page template.
 */
export const customPageIDs = locales.flatMap((locale) => customPageKeys.map((key) => `${locale.toLowerCase()}/${key}`));

export default { "en-GB": enGB, fi } as Record<Locale, typeof enGB>;
