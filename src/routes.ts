import routes, { type RouteDefs, type RouteKey } from "@/data/routes";
import locales, { defaultLocale, getLang, getLocale, langs, type Lang, type Locale } from "@/locales";
import { getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";

/**
 * Get the translation key for the current route, given as a URL.
 */
export function getRouteKey(url: URL): RouteKey | "404" {
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
            return key as RouteKey;
        }
    }

    if (import.meta.env.DEV) {
        return "404";
    }

    throw new Error(`no route key found for path "${original}"`);
}

/**
 * Get the translated route in a page rendering contex.
 */
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
 * Reports whether the given page has a translation in the locale.
 */
export async function isTranslated(url: URL, locale: Locale): Promise<boolean> {
    const routeKey = getRouteKey(url);

    if (routeKey === "index") {
        const pages = await getCollection("home");

        for (const page of pages) {
            if (page.id.toLowerCase() === locale.toLowerCase()) {
                return true;
            }
        }

        return false;
    }

    const pages = await getCollection("pages");
    for (const page of pages) {
        const parts = page.id.split("/");

        if (parts.length < 2) {
            throw new Error(`invalid page id: ${page.id}`);
        }

        const pageLocale = parts[0] as Locale;

        if (!locales.includes(pageLocale)) {
            throw new Error(`page id does not contain a valid locale: ${page.id}`);
        }

        const entry = page.id.slice(`${pageLocale}/`.length, page.id.length - ".md".length);
        const pageKey = page.data.key ?? (entry as RouteKey);

        if (pageLocale === locale && pageKey === routeKey) {
            return true;
        }
    }

    return false;
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
