const locales = ["en-GB", "fi"] as const;

export const langs = ["en", "fi"] as const;

export type Lang = (typeof langs)[number];
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en-GB";

export function getLang(locale?: Locale): Lang {
    if (!locale) {
        throw new Error('converting "undefined" locale to a lang');
    }

    return (
        {
            "en-GB": "en",
            fi: "fi",
        } as Record<Locale, Lang>
    )[locale];
}

export function getLocale(lang: Lang): Locale {
    return (
        {
            en: "en-GB",
            fi: "fi",
        } as Record<Lang, Locale>
    )[lang];
}

export default locales;
