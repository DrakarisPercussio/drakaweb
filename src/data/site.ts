// Datos de la colla que no dependen del idioma (enlaces, fechas, productos).
// Los textos traducibles viven en src/i18n/ui.ts.

import drumClaw from '../assets/brand/drakarisFront.webp';
import dragonRing from '../assets/brand/LOGODKS.webp';
import dksClaw from '../assets/brand/logo1.webp';
import scarfLogo from '../assets/LOGOS/logoblancinegredrakaris.webp';
import adultTee from '../assets/shop/CamisetaAdultoArticulo.jpeg';
import kidsTee from '../assets/shop/infantil.webp';
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
  email: 'drakaris46@gmail.com',
  // Redes de la colla. Para añadir otra (p. ej. YouTube): una línea más con
  // su `id` (instagram, tiktok o youtube), nombre y dirección.
  socials: [
    { id: 'instagram', label: 'Instagram', url: `https://instagram.com/${instagramHandle}` },
    { id: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@drakaris_percussio' },
  ],

  // DATOS LEGALES de la entidad: salen en la página «Informació legal»
  // (aviso legal, privacidad y cookies). Lo que esté vacío no se muestra.
  legal: {
    name: 'Associació Drakaris Percussió',
    nif: 'G13654637',
    registry: "Registre d'Associacions de la Generalitat de Catalunya",
    registryNumber: '72801',
    /** Fecha de inscripción, AAAA-MM-DD */
    registered: '2023-03-22',
    address: "Carrer de l'Ateneu, 23-25, 08980 Sant Feliu de Llobregat (Barcelona)",
    /** Fecha de la última revisión de los textos legales, AAAA-MM-DD */
    updated: '2026-10-16',
  },

  // GOOGLE ANALYTICS: el identificador de la propiedad, entero («G-» seguido
  // de unas diez letras y números, p. ej. G-AB12CD34EF). Mientras esté vacío o
  // a medias no hay analítica ni aviso de cookies. Al ponerlo, aparecen el
  // aviso y la configuración de cookies, y solo se mide si se acepta.
  analyticsId: 'G-',

  // AGENDA: el enlace de la hoja de Google con las próximas actuaciones.
  // Vacío = se lee el Excel del proyecto, src/data/agenda.xlsx. Ver src/data/agenda.ts.
  agendaSheet: 'https://docs.google.com/spreadsheets/d/1o3i4ad1CFv52tGno1WkOnNo5zYVzZoNN/edit?usp=sharing&ouid=113089197995921671197&rtpof=true&sd=true',

  // GOOGLE SEARCH CONSOLE: el código de la etiqueta de verificación (lo que va
  // dentro de content="…" en la etiqueta <meta name="google-site-verification">).
  searchConsoleVerification: '',

  // DISEÑO: quien ha dibujado los logos y los diseños de los productos. Sale en
  // el pie de página («Logos i il·lustracions: Nom A i Nom B»). Vacío = no sale.
  // `url` (opcional): su Instagram o web, para que el nombre sea un enlace.
  designers: [
    { name: 'Mariona Sans', url: 'https://www.instagram.com/m.art.i.ona/' },
    { name: 'Fruit del Caos', url: 'https://www.instagram.com/fruitdelcaos/' },
  ] as { name: string; url?: string }[],
} as const;

/** ¿Hay un identificador de Analytics completo? (un «G-» a medias no cuenta) */
export const analyticsEnabled = /^G-[A-Z0-9]{6,}$/.test(site.analyticsId);

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
// `label` sustituye al año cuando el hito abarca varios (p. ej. «2013–2017");
// el año gigante que rueda en pantalla usa `year`.
// `firstLogo` enseña el logo de los inicios y `rebrand`, los dos logos de 2020.
export const milestones: { year: number; label?: string; photo?: string; firstLogo?: boolean; rebrand?: boolean }[] = [
  { year: 2013, firstLogo: true },
  { year: 2017, label: '2013-2017', photo: '2013/2013a2017.jpg' },
  { year: 2018, photo: '2018/PrimeraDrakafesta.jpg' },
  { year: 2019, photo: '2019/Cruyff.jpg' },
  { year: 2020, rebrand: true },
  { year: 2022, photo: '2022/mallorca.jpg' },
  { year: 2023, photo: '2023/Concurs2.jpg' },
  { year: 2024, photo: '2024/Perculliga.jpg' },
  { year: 2025, photo: '2025/cabalgata.JPG' },
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
  { id: 'tardor', photo: '2026/FestaTardor.jpg', stamp: true },
  { id: 'korrebars', poster: korrebarsPoster },
  { id: 'drakafesta', photo: '2023/230916_Drakafesta_380.JPG', seal: true },
] as const;

// BOTIGA — `id` enlaza con el nombre en `shop.products` de ui.ts.
// `price` va en euros (1.5 = 1,50 €); `tile` es el color de fondo del cuadro.
// `photo: true` = la imagen es una foto del producto y llena todo el cuadro;
// sin él, es una ilustración que se enseña entera, con margen.
// Las fotos de producto están en src/assets/shop (allí hay también una de la
// samarreta d'adult amb models, CamisetaAdultoModelos.jpeg, por si se prefiere).
export const products = [
  { id: 'adult', price: 12, image: adultTee, tile: '#c9cbc4', photo: true },
  { id: 'kids', price: 10, image: kidsTee, tile: '#ffffff' },
  { id: 'cup', price: 1.5, image: drumClaw, tile: '#141a15' },
  { id: 'tote', price: 7, image: dragonRing, tile: '#141a15' },
  { id: 'bag', price: 10, image: dksClaw, tile: '#000000' },
  // El logo del mocador va tal cual lo entregó la diseñadora (un A4 con mucho margen):
  // `zoom` lo amplía dentro del cuadro sin tocar el archivo
  { id: 'scarf', price: 6, image: scarfLogo, tile: '#ffffff', zoom: 1.75 },
] as const;
