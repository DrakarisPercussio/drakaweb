// Indicaciones para buscadores: pueden leerlo todo, y aquí está el mapa del sitio.
// (Los buscadores solo lo leen en la raíz del dominio: drakarispercussio.com/robots.txt.)
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap.xml`, site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
