// AGENDA — las próximas actuaciones salen de una hoja de cálculo, no del código.
//
// Hay dos maneras de mantenerla; se elige con `agendaSheet` en src/data/site.ts:
//
//  1. Google Sheets (recomendada). Se sube src/data/agenda.xlsx a Google Drive,
//     se abre como Hoja de cálculo de Google, se comparte como «Cualquier persona
//     con el enlace · Lector» y se pega ese enlace en `agendaSheet`. A partir de
//     ahí basta con editar la hoja (también desde el móvil): la web la vuelve a
//     leer cada mañana, o al momento con el botón «Run workflow» de GitHub.
//
//  2. El Excel del proyecto: con `agendaSheet` vacío se lee src/data/agenda.xlsx.
//     Se edita con Excel, se guarda, y se sube el cambio a GitHub.
//
// Qué va en cada columna: ver la hoja «Instrucciones» del propio Excel.
// Las fechas que ya han pasado se ocultan solas; no hace falta borrarlas.

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { readSheet } from 'read-excel-file/node';
import type { Lang } from '../i18n/ui';
import { site } from './site';

export interface Gig {
  /** Fecha en formato AAAA-MM-DD */
  date: string;
  /** Hora en formato HH:MM (sin hora, no se muestra) */
  time?: string;
  /** Lugar tal como se lee en la web */
  place?: string;
  /** Qué buscar en el mapa al pulsar. Si no hay, se busca `place`. */
  map?: string;
  title: Record<Lang, string>;
}

const LOCAL_FILE = path.resolve('src/data/agenda.xlsx');

/** El enlace de compartir de Google, convertido en uno que descarga la hoja como Excel */
function downloadUrl(link: string): string {
  const sheet = link.match(/docs\.google\.com\/spreadsheets\/d\/(e\/)?([\w-]+)/);
  if (sheet) {
    return sheet[1]
      ? `https://docs.google.com/spreadsheets/d/e/${sheet[2]}/pub?output=xlsx` // «Publicar en la web»
      : `https://docs.google.com/spreadsheets/d/${sheet[2]}/export?format=xlsx`;
  }
  // Un .xlsx subido a Drive sin convertir
  const file = link.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/);
  if (file) return `https://drive.google.com/uc?export=download&id=${file[1]}`;
  return link;
}

async function loadWorkbook(): Promise<{ data: Buffer; from: string }> {
  const link = site.agendaSheet.trim();
  if (link) {
    try {
      const response = await fetch(downloadUrl(link), { signal: AbortSignal.timeout(20_000) });
      if (!response.ok) throw new Error(`Google responde ${response.status}`);
      if ((response.headers.get('content-type') ?? '').includes('text/html')) {
        throw new Error('Google devuelve una página en lugar de la hoja: ¿está compartida como «Cualquier persona con el enlace»?');
      }
      return { data: Buffer.from(await response.arrayBuffer()), from: 'Google Sheets' };
    } catch (error) {
      const message = `[agenda] No se ha podido leer la hoja de Google: ${(error as Error).message}`;
      // Al publicar, mejor fallar: GitHub deja en línea la última versión buena y avisa por correo.
      if (process.env.CI) throw new Error(message);
      console.warn(`${message}. Se usa src/data/agenda.xlsx.`);
    }
  }
  return { data: await readFile(LOCAL_FILE), from: 'src/data/agenda.xlsx' };
}

/* -------------------------------------------------------------------------
   Lectura de las celdas: se acepta lo que Excel o Google guarden normalmente
   ------------------------------------------------------------------------- */

const pad = (value: string | number) => String(value).padStart(2, '0');
const plain = (value: string) => value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Cada columna se reconoce por su título, en cualquiera de los tres idiomas
const COLUMNS = {
  date: /data|fecha|date/,
  time: /hora|time/,
  ca: /titol|\(ca\)|catala/,
  es: /titulo|\(es\)|castellano/,
  en: /title|\(en\)|english/,
  place: /lloc|lugar|place/,
  map: /mapa|map/,
} as const;

type Column = keyof typeof COLUMNS;

function isoDate(year: number, month: number, day: number): string | undefined {
  const date = new Date(Date.UTC(year, month - 1, day));
  // 31/02 y similares no existen
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) return undefined;
  return `${year}-${pad(month)}-${pad(day)}`;
}

function readDate(value: unknown): string | undefined {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  if (typeof value !== 'string') return undefined;
  const text = value.trim();
  let match = text.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (match) return isoDate(Number(match[1]), Number(match[2]), Number(match[3]));
  // Día/mes/año, como se escribe aquí
  match = text.match(/^(\d{1,2})[/.-](\d{1,2})[/.-](\d{2}|\d{4})$/);
  if (match) return isoDate(Number(match[3].length === 2 ? `20${match[3]}` : match[3]), Number(match[2]), Number(match[1]));
  return undefined;
}

function readTime(value: unknown): string | undefined {
  // Una celda con formato de hora llega como fecha (del año 1899) o como fracción del día
  if (value instanceof Date && !Number.isNaN(value.getTime())) return `${pad(value.getUTCHours())}:${pad(value.getUTCMinutes())}`;
  if (typeof value === 'number' && value >= 0 && value < 1) {
    const minutes = Math.round(value * 24 * 60);
    return `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;
  }
  if (typeof value !== 'string') return undefined;
  const match = value.trim().match(/^(\d{1,2})(?:[:.h](\d{2}))?\s*h?$/i);
  return match ? `${pad(match[1])}:${match[2] ?? '00'}` : undefined;
}

const readText = (value: unknown) => (value === null || value === undefined ? '' : String(value).trim());

async function loadAgenda(): Promise<Gig[]> {
  const { data, from } = await loadWorkbook();
  const rows = await readSheet(data);

  // La fila de títulos es la primera que tiene una columna de fecha
  const headerIndex = rows.findIndex((row) => row.some((cell) => typeof cell === 'string' && COLUMNS.date.test(plain(cell))));
  if (headerIndex === -1) throw new Error(`[agenda] En ${from} no se encuentra la fila de títulos (falta la columna «Data / Fecha»).`);

  const index = {} as Partial<Record<Column, number>>;
  rows[headerIndex].forEach((cell, i) => {
    if (typeof cell !== 'string') return;
    const name = plain(cell);
    const column = (Object.keys(COLUMNS) as Column[]).find((key) => index[key] === undefined && COLUMNS[key].test(name));
    if (column) index[column] = i;
  });
  if (index.ca === undefined) throw new Error(`[agenda] En ${from} falta la columna «Títol (CA)».`);

  const cell = (row: unknown[], column: Column) => (index[column] === undefined ? undefined : row[index[column]!]);
  const gigs: Gig[] = [];

  rows.slice(headerIndex + 1).forEach((row, i) => {
    if (row.every((value) => readText(value) === '')) return;
    const line = headerIndex + i + 2; // número de fila tal como se ve en Excel
    const date = readDate(cell(row, 'date'));
    const ca = readText(cell(row, 'ca'));
    if (!date || !ca) {
      console.warn(`[agenda] Fila ${line} ignorada: ${!date ? 'la fecha no se entiende' : 'falta el título en catalán'}.`);
      return;
    }
    const time = readTime(cell(row, 'time'));
    if (readText(cell(row, 'time')) && !time) console.warn(`[agenda] Fila ${line}: la hora no se entiende y no se mostrará.`);
    gigs.push({
      date,
      time,
      place: readText(cell(row, 'place')) || undefined,
      map: readText(cell(row, 'map')) || undefined,
      title: { ca, es: readText(cell(row, 'es')) || ca, en: readText(cell(row, 'en')) || ca },
    });
  });

  gigs.sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? '').localeCompare(b.time ?? ''));
  console.info(`[agenda] ${gigs.length} actuaciones leídas de ${from}.`);
  return gigs;
}

export const agenda: Gig[] = await loadAgenda();
