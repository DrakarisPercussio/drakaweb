// Mapa del sitio para buscadores: las tres versiones de la página y cómo se
// corresponden entre idiomas. Se genera solo al publicar.
import type { APIRoute } from 'astro';
import { getAbsoluteLocaleUrl } from 'astro:i18n';
import { defaultLang, languages, type Lang } from '../i18n/ui';

export const GET: APIRoute = () => {
  const codes = Object.keys(languages) as Lang[];

  const alternates = [
    ...codes.map((code) => `<xhtml:link rel="alternate" hreflang="${languages[code].htmlLang}" href="${getAbsoluteLocaleUrl(code)}"/>`),
    `<xhtml:link rel="alternate" hreflang="x-default" href="${getAbsoluteLocaleUrl(defaultLang)}"/>`,
  ].join('\n    ');

  const urls = codes
    .map((code) => `  <url>\n    <loc>${getAbsoluteLocaleUrl(code)}</loc>\n    ${alternates}\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
