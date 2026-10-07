// Indicaciones para buscadores: pueden leerlo todo, y aquí está el mapa del sitio.
// Nota: los buscadores solo leen robots.txt en la raíz del dominio. Mientras la
// web viva en una subcarpeta (github.io/drakaweb) no tiene efecto; lo tendrá el
// día que se publique en un dominio propio.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap.xml`, site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
