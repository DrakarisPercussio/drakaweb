// Datos de la colla que no dependen del idioma (enlaces, fechas, productos).
// Los textos traducibles viven en src/i18n/ui.ts.

import type { Lang } from '../i18n/ui';
import rakata from '../assets/brand/rakata.webp';
import poster from '../assets/brand/poster.webp';
import drumClaw from '../assets/brand/drum-claw.webp';
import korrebarsPoster from '../assets/LOGOS/Korrebars2026.png';

const instagramHandle = 'drakaris_percussio';

export const site = {
  name: 'Drakaris',
  short: 'DKS',
  founded: 2013,
  city: 'Sant Feliu de Llobregat',
  // El código postal de Sant Feliu: la "denominación de origen" de la colla
  postcode: '08980',
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
  history: 'historia',
  sound: 'so',
  events: 'actes',
  agenda: 'agenda',
  join: 'uneix-te',
  gallery: 'galeria',
  shop: 'botiga',
  contact: 'contacte',
} as const;

// HISTÒRIA — un hito por año. El título y el texto de cada uno están en
// `history.milestones` de src/i18n/ui.ts, en este mismo orden.
// `photo` es "año/archivo" dentro de src/assets/Fotos (opcional).
export const milestones: { year: number; photo?: string }[] = [
  { year: 2013 },
  { year: 2019, photo: '2019/Cruyff.jpg' },
  { year: 2022, photo: '2022/mallorca.jpg' },
  { year: 2023, photo: '2023/Concurs2.jpg' },
  { year: 2024, photo: '2024/Perculliga.jpg' },
  { year: 2026, photo: '2026/Concurs.jpg' },
];

// EL SO — vídeos de YouTube que se enseñan bajo los instrumentos.
// `id` es lo que va detrás de youtu.be/ en el enlace; `round` enlaza con
// `sound.live.rounds` de ui.ts. No se carga nada de YouTube hasta pulsar play.
export const videos = [
  { id: 'vYRT6xKvRdg', round: 'final', year: 2026 },
  { id: 'OTzoZPHMV1o', round: 'semifinal', year: 2026 },
] as const;

// Canal que grabó y publicó los vídeos
export const videoCredit = 'BATUCHARLY';

// ELS NOSTRES ACTES — imagen de cada acto, en el orden de `events.items` de ui.ts.
// `photo` es una foto de src/assets/Fotos; `poster` es un cartel que se enseña entero.
// `stamp` pega el código postal sobre la foto y `seal`, el sello DKS.
export const events = [
  { id: 'tardor', photo: '2025/Correfoc.jpg', stamp: true },
  { id: 'korrebars', poster: korrebarsPoster },
  { id: 'drakafesta', photo: '2023/230916_Drakafesta_380.JPG', seal: true },
] as const;

export interface Gig {
  /** Fecha en formato AAAA-MM-DD */
  date: string;
  /** Hora en formato HH:MM (opcional: sin hora, no se muestra) */
  time?: string;
  /** Lugar (opcional) */
  place?: string;
  title: Record<Lang, string>;
}

// AGENDA — próximas actuaciones. Las fechas pasadas se ocultan solas.
// Para añadir una: copiar un bloque y cambiar fecha y título; `time` y `place` son opcionales.
export const agenda: Gig[] = [
  {
    date: '2026-10-09',
    place: 'Carrer Joan Maragall',
    title: { ca: 'Vermut de colles', es: 'Vermut de colles', en: "Crews' vermouth" },
  },
  {
    date: '2026-10-09',
    title: { ca: 'Tabalada nocturna', es: 'Tabalada nocturna', en: 'Night tabalada (drum parade)' },
  },
  {
    date: '2026-10-10',
    title: { ca: 'Tabalada i correfoc', es: 'Tabalada y correfoc', en: 'Tabalada and fire run' },
  },
  {
    date: '2026-10-12',
    title: { ca: 'Cercavila de colles', es: 'Pasacalles de colles', en: "Crews' street parade" },
  },
  {
    date: '2026-11-29',
    title: { ca: 'Espinelves', es: 'Espinelves', en: 'Espinelves' },
  },
  {
    date: '2026-12-19',
    title: { ca: 'Mercat de Nadal', es: 'Mercado de Navidad', en: 'Christmas market' },
  },
  {
    date: '2027-01-05',
    title: { ca: 'Cavalcada de Reis', es: 'Cabalgata de Reyes', en: 'Three Kings parade' },
  },
];

// BOTIGA — `id` enlaza con el nombre en `shop.products` de ui.ts.
// `tile` es el color de fondo sobre el que se muestra el diseño.
// `price` está vacío hasta saber los precios reales: sin precio, no se muestra.
export const products = [
  { id: 'adult', price: '', image: rakata, tile: '#c9cbc4' },
  { id: 'kids', price: '', image: poster, tile: '#0c100c' },
  { id: 'cup', price: '', image: drumClaw, tile: '#141a15' },
] as const;
