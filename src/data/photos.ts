// Fotos de la colla. Se leen solas de src/assets/Fotos/<año>/: basta con
// dejar un archivo en la carpeta de su año para que aparezca en la galería.

import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/Fotos/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

type Caption = string | Record<Lang, string>;

// Imágenes de la carpeta de fotos que no son para la galería (los logos de 2020).
const notInGallery = new Set(['2020/logo1.jpg', '2020/logo2.jpg']);

// Descripción de cada foto ("año/archivo"). En la galería no se ve: es el texto
// que leen los lectores de pantalla. Una foto sin descripción usa «Drakaris · año».
const captions: Record<string, Caption> = {
  '2019/Cruyff.jpg': 'Estadi Johan Cruyff',
  '2019/llavatraka.jpg': 'Llavatraka',
  '2020/CovidVideollamada.jpg': {
    ca: 'Videotrucada durant el confinament',
    es: 'Videollamada durante el confinamiento',
    en: 'Video call during lockdown',
  },
  '2021/PrimeraDrakacasa.jpg': { ca: 'Primera Drakacasa', es: 'Primera Drakacasa', en: 'First Drakacasa' },
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
  '2023/Concurs1.jpg': 'Concurs de Percussió de Barcelona',
  '2023/Concurs2.jpg': 'Concurs de Percussió de Barcelona',
  '2024/BeDisco.jpg': 'Be Disco',
  '2024/ConcursRojos.jpg': 'Concurs de Diables Rojos',
  '2024/IMG-20241009-WA0043.jpg': 'Festa de Tardor',
  '2024/Perculliga.jpg': 'Perculliga',
  '2025/Calçotada.jpg': 'Calçotada',
  '2025/Correfoc.jpg': 'Correfoc',
  '2025/IMG-20250719-WA0000.jpg': { ca: "Sopar d'estiu", es: 'Cena de verano', en: 'Summer dinner' },
  '2025/IMG-20251221-WA0070.jpg': { ca: 'Sopar de Nadal', es: 'Cena de Navidad', en: 'Christmas dinner' },
  '2026/Concurs.jpg': 'Concurs de Percussió de Barcelona',
  '2026/FestesPrimavera.jpg': 'Festes de Primavera',
  '2026/SantJordi.jpg': 'Sant Jordi',
};

export interface Photo {
  /** "año/archivo", p. ej. "2024/Perculliga.jpg" */
  key: string;
  /** Nombre de la carpeta: el año */
  year: string;
  image: ImageMetadata;
}

// Lo más reciente primero; dentro de cada año, por nombre de archivo.
export const photos: Photo[] = Object.entries(files)
  .map(([path, file]) => {
    const [year, name] = path.split('/').slice(-2);
    return { key: `${year}/${name}`, year, image: file.default };
  })
  .sort((a, b) => b.year.localeCompare(a.year) || a.key.localeCompare(b.key, undefined, { numeric: true }));

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

/** Una foto concreta por su clave, o `undefined` si se ha borrado o renombrado. */
export function photo(key: string): ImageMetadata | undefined {
  return photos.find((item) => item.key === key)?.image;
}

export function captionFor(item: Photo, lang: Lang): string {
  const caption = captions[item.key];
  const text = typeof caption === 'string' ? caption : caption?.[lang];
  return text ? `${text} · ${item.year}` : `Drakaris · ${item.year}`;
}
