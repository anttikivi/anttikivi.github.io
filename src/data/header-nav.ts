import type { Locale } from "@/data/locales";
import type { RouteKey } from "@/data/routes";

type NavLink = {
    disabled?: boolean;
    href: RouteKey;
    label: Record<Locale, string>;
};

export default [
    {
        disabled: true,
        href: "blog",
        label: {
            "en-GB": "writings",
            fi: "kirjoituksia",
        },
    },
    {
        disabled: false,
        href: "about",
        label: {
            "en-GB": "about",
            fi: "minusta",
        },
    },
    {
        disabled: true,
        href: "contact",
        label: {
            "en-GB": "contact",
            fi: "yhteys",
        },
    },
] as NavLink[];
