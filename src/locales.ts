import type { Locales } from "astro";

const shortLocales = ["en", "fi"] as const;
const locales = shortLocales as unknown as Locales;

export type Locale = (typeof shortLocales)[number];

export const defaultLocale: Locale = "en";

export const languageCodes: Record<Locale, string> = {
    en: "en-GB",
    fi: "fi",
};

export const languages: { locale: Locale; menuLabel: string }[] = [
    {
        locale: "en",
        menuLabel: "In English",
    },
    {
        locale: "fi",
        menuLabel: "Suomeksi",
    },
];

export default locales;
