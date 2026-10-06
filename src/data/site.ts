// Datos de la colla que no dependen del idioma (enlaces, fechas, productos).
// Los textos traducibles viven en src/i18n/ui.ts.

import type { Lang } from '../i18n/ui';
import rakata from '../assets/brand/rakata.webp';
import poster from '../assets/brand/poster.webp';
import drumClaw from '../assets/brand/drum-claw.webp';
import dragon10 from '../assets/brand/dragon-10.webp';

const instagramHandle = 'drakaris_percussio';

export const site = {
  name: 'Drakaris',
  founded: 2013,
  city: 'Sant Feliu de Llobregat',
  instagram: {
    handle: instagramHandle,
    url: `https://instagram.com/${instagramHandle}`,
    // Enlace oficial de Instagram para abrir un mensaje directo
    dm: `https://ig.me/m/${instagramHandle}`,
  },
  // Correo de contacto. Mientras esté vacío, el botón de correo no se muestra.
  email: '',
  socials: [
    { id: 'instagram', label: 'Instagram', url: `https://instagram.com/${instagramHandle}` },
    { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/@drakaris' },
    { id: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@drakaris' },
  ],
} as const;

// Ids de sección: son los mismos en los tres idiomas para que los enlaces
// y la posición de scroll se conserven al cambiar de idioma.
export const sections = {
  about: 'qui-som',
  sound: 'so',
  events: 'actes',
  agenda: 'agenda',
  join: 'uneix-te',
  gallery: 'galeria',
  shop: 'botiga',
  contact: 'contacte',
} as const;

export interface Gig {
  /** Fecha en formato AAAA-MM-DD */
  date: string;
  /** Hora en formato HH:MM */
  time: string;
  place: string;
  title: Record<Lang, string>;
}

// AGENDA — fechas de EJEMPLO: sustituir por las actuaciones reales.
// Las fechas pasadas se ocultan solas.
export const agenda: Gig[] = [
  {
    date: '2026-10-17',
    time: '18:00',
    place: 'Sant Feliu de Llobregat',
    title: { ca: 'Festa de Tardor', es: 'Festa de Tardor', en: 'Festa de Tardor' },
  },
  {
    date: '2026-11-21',
    time: '19:30',
    place: 'Sant Feliu de Llobregat',
    title: { ca: 'El Korrebars', es: 'El Korrebars', en: 'El Korrebars' },
  },
  {
    date: '2026-12-19',
    time: '17:30',
    place: 'Sant Feliu de Llobregat',
    title: { ca: 'Cercavila de Nadal', es: 'Pasacalles de Navidad', en: 'Christmas parade' },
  },
  {
    date: '2027-02-13',
    time: '17:00',
    place: 'Sant Feliu de Llobregat',
    title: { ca: 'Rua de Carnaval', es: 'Rúa de Carnaval', en: 'Carnival parade' },
  },
];

// BOTIGA — precios de EJEMPLO. `id` enlaza con el nombre en src/i18n/ui.ts.
// `tile` es el color de la camiseta sobre el que se muestra el diseño.
export const products = [
  { id: 'rakata', price: '13 €', image: rakata, tile: '#c9cbc4' },
  { id: 'dragon', price: '13 €', image: poster, tile: '#0c100c' },
  { id: 'drum', price: '13 €', image: drumClaw, tile: '#141a15' },
  { id: 'anniversary', price: '13 €', image: dragon10, tile: '#6f7578' },
] as const;
