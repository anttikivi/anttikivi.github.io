import locales, { getLang } from "@/locales";
import type { APIRoute } from "astro";

export const GET: APIRoute = (context) =>
    new Response(
        `Contact: mailto:antti@anttikivi.com
Expires: 2025-12-31T09:45:00.000Z
Encryption: ${context.site}pgp.asc
Preferred-Languages: ${locales.map((locale) => getLang(locale)).join(", ")}
Canonical: ${context.url}
`.trim(),
    );
