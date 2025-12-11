import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) =>
    new Response(
        `User-agent: *
Disallow:${import.meta.env.PROD ? "" : " /"}

Sitemap: ${new URL("sitemap-index.xml", site).href}
`.trim(),
    );
