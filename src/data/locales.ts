const locales = ["en-GB", "fi"] as const;

export const langs = ["en", "fi"] as const;

export type Lang = (typeof langs)[number];
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en-GB";

export default locales;
