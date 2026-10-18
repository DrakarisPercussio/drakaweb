// Fotos de la colla. Se leen solas de src/assets/Fotos/<año>/: basta con
// dejar un archivo en la carpeta de su año para que aparezca en la galería.

import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/Fotos/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

/* ==========================================================================
   CRÉDITOS — quién hizo cada foto
   ==========================================================================
   Solo hay que escribir el nombre entre las comillas de la foto:

       '2023/Concurs1.jpg': 'Nom Cognom',

   · Sin nombre ('') no sale nada.
   · Si una foto es de varias personas, separadas por comas: 'Nom A, Nom B'.
   · El mismo nombre, escrito igual, en varias fotos cuenta como una sola
     persona en la lista de la galería.
   · Una foto nueva que no esté en la lista no lleva crédito; para dárselo se
     añade una línea con su "año/archivo".

   Dónde se ve:
   · Sobre las fotos grandes (historia y actos), en una esquina: «Foto: Nom».
   · En la galería, al pasar el ratón por cada foto.
   · Bajo la galería, en una línea con todos: «Fotografies: Nom A, Nom B».
   ========================================================================== */
const credits: Record<string, string> = {
  '2013/2013a2017.jpg': '',
  '2018/PrimeraDrakafesta.jpg': '',
  '2019/Cruyff.jpg': 'FC Barcelona',
  '2019/llavatraka.jpg': '',
  '2021/PrimeraDrakacasa.jpg': '',
  '2021/TabaladaNocturna.jpg': 'Raül Clemente',
  '2022/ce8f1911-f9c3-4180-9045-fc2d4c1feb52.jpg': '',
  '2022/Amb el Drac.jpg': '',
  '2022/Cercavila.jpg': 'Paula Paniagua',
  '2022/IMG-20220327-WA0073.jpg': '',
  '2022/Tardor.jpg': '',
  '2022/TardorAnalogica.jpg': '',
  '2022/mallorca.jpg': '',
  '2023/230916_Drakafesta_323.JPG': 'Paula Paniagua',
  '2023/230916_Drakafesta_341.JPG': 'Paula Paniagua',
  '2023/230916_Drakafesta_380.JPG': 'Paula Paniagua',
  '2023/231012_Tabalada_107.JPG': 'Guillem Mendoza',
  '2023/231012_Tabalada_471.JPG': 'Guillem Mendoza',
  '2023/231015_Cercavila_83.JPG': 'Paula Paniagua',
  '2023/cercavilaColles.jpg': 'Paula Paniagua',
  '2023/Concurs1.jpg': '',
  '2023/Concurs2.jpg': '',
  '2024/241013_Cercavila_165_Original.JPG': 'Paula Paniagua',
  '2024/BeDisco.jpg': 'BeDisco',
  '2024/Cabalgata.jpg': '',
  '2024/ConcursRojos.jpg': '',
  '2024/IMG-20240104-WA0028.jpg': '',
  '2024/IMG-20240311-WA0007.jpg': '',
  '2024/IMG-20240317-WA0029.jpg': '',
  '2024/IMG-20241009-WA0043.jpg': '',
  '2024/Perculliga.jpg': '',
  '2024/Vermut Joan Maragall 2024 - @AlexMiroFoto--56.jpeg': 'Alex Miró',
  '2025/cabalgata.JPG': 'Raül Clemente',
  '2025/Calçotada.jpg': '',
  '2025/Correfoc.jpg': '',
  '2025/IMG-20250719-WA0000.jpg': '',
  '2025/IMG-20251221-WA0070.jpg': '',
  '2026/Concurs.jpg': 'Concurs Percussió BCN',
  '2026/FestaTardor.jpg': '',
  '2026/FestesPrimavera.jpg': '',
  '2026/IMG-20260725-WA0104.jpg': '',
  '2026/IMG-20261009-WA0140.jpg': '',
  '2026/IMG-20261009-WA0354.jpg': '',
  '2026/SantJordi.jpg': '',
};

// (Opcional) El Instagram o la web de cada fotógrafo: con esto su nombre pasa
// a ser un enlace. El nombre tiene que estar escrito igual que arriba.
const photographerLinks: Record<string, string> = {
  'Paula Paniagua': 'https://www.instagram.com/ppaulens/',
  'Raül Clemente': 'https://www.instagram.com/raulclementemolina/',
  'Alex Miró': 'https://www.instagram.com/alexmirofoto/',
  'Guillem Mendoza': 'https://www.instagram.com/guillemmendozaph/',
};

/* ==========================================================================
   Descripciones y galería
   ========================================================================== */

type Caption = string | Record<Lang, string>;

// Imágenes de la carpeta de fotos que no son para la galería (los logos).
const notInGallery = new Set(['2013/LogoOriginalDKS.jpeg', '2020/logo1.jpg', '2020/logo2.jpg']);

// Descripción de cada foto ("año/archivo"). En la galería no se ve: es el texto
// que leen los lectores de pantalla. Una foto sin descripción usa «Drakaris · año».
const captions: Record<string, Caption> = {
  '2013/2013a2017.jpg': 'Festa de Tardor',
  '2018/PrimeraDrakafesta.jpg': 'Primera Drakafesta',
  '2019/Cruyff.jpg': 'Estadi Johan Cruyff',
  '2019/llavatraka.jpg': 'Llavatraka',
  '2021/PrimeraDrakacasa.jpg': { ca: 'Primera Drakacasa', es: 'Primera Drakacasa', en: 'First Drakacasa' },
  '2021/TabaladaNocturna.jpg': 'Tabalada nocturna',
  '2022/Amb el Drac.jpg': { ca: 'Amb el Drac de Sant Feliu', es: 'Con el Drac de Sant Feliu', en: 'With the Drac de Sant Feliu' },
  '2022/Cercavila.jpg': 'Cercavila',
  '2022/Tardor.jpg': 'Festa de Tardor',
  '2022/TardorAnalogica.jpg': 'Festa de Tardor',
  '2022/mallorca.jpg': 'Festival +KSamba, Mallorca',
  '2023/230916_Drakafesta_323.JPG': 'Drakafesta',
  '2023/230916_Drakafesta_341.JPG': 'Drakafesta',
  '2023/230916_Drakafesta_380.JPG': 'Drakafesta',
  '2023/231012_Tabalada_107.JPG': 'Tabalada',
  '2023/231012_Tabalada_471.JPG': 'Tabalada',
  '2023/231015_Cercavila_83.JPG': 'Cercavila',
  '2023/cercavilaColles.jpg': 'Cercavila de colles',
  '2023/Concurs1.jpg': 'Concurs de Percussió de Barcelona',
  '2023/Concurs2.jpg': 'Concurs de Percussió de Barcelona',
  '2024/241013_Cercavila_165_Original.JPG': 'Cercavila',
  '2024/BeDisco.jpg': 'Be Disco',
  '2024/Cabalgata.jpg': { ca: 'Cavalcada de Reis', es: 'Cabalgata de Reyes', en: 'Three Kings parade' },
  '2024/ConcursRojos.jpg': 'Concurs de Diables Rojos',
  '2024/IMG-20241009-WA0043.jpg': 'Festa de Tardor',
  '2024/Perculliga.jpg': 'Perculliga',
  '2024/Vermut Joan Maragall 2024 - @AlexMiroFoto--56.jpeg': 'Vermut de colles',
  '2025/cabalgata.JPG': { ca: 'Cavalcada de Reis', es: 'Cabalgata de Reyes', en: 'Three Kings parade' },
  '2025/Calçotada.jpg': 'Calçotada',
  '2025/Correfoc.jpg': 'Correfoc',
  '2025/IMG-20250719-WA0000.jpg': { ca: "Sopar d'estiu", es: 'Cena de verano', en: 'Summer dinner' },
  '2025/IMG-20251221-WA0070.jpg': { ca: 'Sopar de Nadal', es: 'Cena de Navidad', en: 'Christmas dinner' },
  '2026/Concurs.jpg': 'Concurs de Percussió de Barcelona',
  '2026/FestaTardor.jpg': 'Festa de Tardor',
  '2026/FestesPrimavera.jpg': 'Festes de Primavera',
  '2026/IMG-20261009-WA0140.jpg': 'Festa de Tardor',
  '2026/IMG-20261009-WA0354.jpg': 'Festa de Tardor',
  '2026/SantJordi.jpg': 'Sant Jordi',
};

export interface Credit {
  name: string;
  /** Instagram o web del fotógrafo, si se ha indicado */
  url?: string;
}

/** Los fotógrafos de una foto ("año/archivo"). Lista vacía si no tiene crédito. */
export function creditsFor(key: string): Credit[] {
  return (credits[key] ?? '')
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => ({ name, url: photographerLinks[name] }));
}

export interface Photo {
  /** "año/archivo", p. ej. "2024/Perculliga.jpg" */
  key: string;
  /** Nombre de la carpeta: el año */
  year: string;
  image: ImageMetadata;
  credits: Credit[];
}

// Lo más reciente primero; dentro de cada año, por nombre de archivo.
export const photos: Photo[] = Object.entries(files)
  .map(([path, file]) => {
    const [year, name] = path.split('/').slice(-2);
    const key = `${year}/${name}`;
    return { key, year, image: file.default, credits: creditsFor(key) };
  })
  .sort((a, b) => b.year.localeCompare(a.year) || a.key.localeCompare(b.key, undefined, { numeric: true }));

// Aviso al publicar: un crédito o una descripción cuya foto ya no existe (se ha
// borrado o cambiado de nombre) no hace daño, pero conviene quitar la línea.
const existing = new Set(photos.map((item) => item.key));
for (const key of new Set([...Object.keys(credits), ...Object.keys(captions)])) {
  if (!existing.has(key)) console.warn(`[fotos] «${key}» está en src/data/photos.ts pero no en src/assets/Fotos`);
}

// La galería no va por fechas: las fotos se mezclan. El orden sale del nombre
// de cada archivo, así que es siempre el mismo hasta que se añadan fotos nuevas.
function mixKey(key: string): number {
  let hash = 2166136261;
  for (let i = 0; i < key.length; i++) hash = Math.imul(hash ^ key.charCodeAt(i), 16777619);
  return hash >>> 0;
}

export const mixedPhotos: Photo[] = photos
  .filter((item) => !notInGallery.has(item.key))
  .sort((a, b) => mixKey(a.key) - mixKey(b.key));

/** Todos los fotógrafos de la galería, sin repetir y por orden alfabético */
export const galleryCredits: Credit[] = [
  ...new Map(mixedPhotos.flatMap((item) => item.credits).map((credit) => [credit.name, credit])).values(),
].sort((a, b) => a.name.localeCompare(b.name, 'ca'));

/** Una foto concreta por su clave, o `undefined` si se ha borrado o renombrado. */
export function photo(key: string): ImageMetadata | undefined {
  return photos.find((item) => item.key === key)?.image;
}

export function captionFor(item: Photo, lang: Lang): string {
  const caption = captions[item.key];
  const text = typeof caption === 'string' ? caption : caption?.[lang];
  return text ? `${text} · ${item.year}` : `Drakaris · ${item.year}`;
}
