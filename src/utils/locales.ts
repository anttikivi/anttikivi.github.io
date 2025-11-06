import { type Lang, type Locale } from "@/data/locales";

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
