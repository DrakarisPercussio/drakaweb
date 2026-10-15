// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dominio propio: la web vive en la raíz (antes, en drakarispercussio.github.io/drakaweb/).
  // De aquí salen las direcciones completas: canónicas, idiomas, sitemap e imagen para redes.
  site: 'https://drakarispercussio.com',
  // Català en la raíz (/), castellano en /es/ e inglés en /en/
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  build: {
    assets: '_astro'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
