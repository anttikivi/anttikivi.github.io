import { defaultLocale, getLang, getLocale, langs, type Lang, type Locale } from "@/locales";
import { getRelativeLocaleUrl } from "astro:i18n";

type RouteDefs = typeof enGB;

const enGB = {
    index: "/",
};

const fi: RouteDefs = {
    index: "/",
} satisfies typeof enGB;

const routes: Record<Locale, RouteDefs> = { "en-GB": enGB, fi };

export function getRouteKey(url: URL) {
    if (url.pathname === "/404/") {
        return "404";
    }

    let path = url.pathname;
    const original = path;

    if (path === "/") {
        return "index";
    }

    if (!path.startsWith("/")) {
        throw new Error(`path "${original}" does not start with a slash`);
    }

    // For parsing, normalize the path to not have the trailing slash.
    if (path.endsWith("/")) {
        path = path.slice(0, -1);
    }

    const parts = path.split("/");

    if (parts.length <= 1) {
        throw new Error(`parts of path "${original}" are too short for parsing`);
    }

    if (parts.length === 2 && langs.includes(parts[1] as Lang)) {
        return "index";
    }

    const pathLang = langs.includes(parts[1] as Lang) ? (parts[1] as Lang) : getLang(defaultLocale);
    let route = path.startsWith(`/${pathLang}/`) ? path.slice(`/${pathLang}/`.length) : path;
    route = route.startsWith("/") ? route.slice(1) : route;

    for (const [key, value] of Object.entries(routes[getLocale(pathLang)])) {
        if (value === route) {
            return key;
        }
    }

    if (import.meta.env.DEV) {
        return "404";
    }

    throw new Error(`no route key found for path "${original}"`);
}

export function getRoute(locale: Locale, key: string) {
    const lang = getLang(locale);
    const original = key;

    if (key === "/" || key === "") {
        return getRelativeLocaleUrl(lang, "/");
    }

    if (key.startsWith("/")) {
        key = key.slice(1);
    }

    if (Object.hasOwn(routes[locale], key)) {
        return getRelativeLocaleUrl(lang, routes[locale][key as keyof RouteDefs]);
    }

    throw new Error(`no route found for key ${original}`);
}

/**
 * Check if the page being rendered is an error page (e.g. 404). The route
 * pattern that is passed into the function should be the one obtained by
 * `Astro.routePattern`.
 */
export function isErrorPage(routePattern: string): boolean {
    return routePattern === "/404";
}

/**
 * Get the locale for the currently rendered route. The route pattern should be
 * the one obtained by `Astro.routePattern` and current locale
 * `Astro.currentLocale`.
 */
export function routeLocale(routePattern: string, currentLocale?: string): Locale {
    if (currentLocale && !langs.includes(currentLocale as Lang)) {
        throw new Error(`given locale "${currentLocale}" is not a valid language key`);
    }

    return isErrorPage(routePattern) || !currentLocale ? defaultLocale : getLocale(currentLocale as Lang);
}

export default routes;
