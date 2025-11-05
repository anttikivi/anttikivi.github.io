import type { Locale } from "@/locales";
import type { RouteKey } from "@/routes";

type NavLink = {
    disabled?: boolean;
    href: RouteKey;
    label: Record<Locale, string>;
};

export default [
    {
        disabled: false,
        href: "contact",
        label: {
            "en-GB": "contact",
            fi: "yhteys",
        },
    },
] as NavLink[];
