// Reduce las fotos de src/assets/Fotos que pesan demasiado para un repositorio.
//
//   npm run photos
//
// Una foto de cámara ocupa 15-30 MB y la web nunca enseña más de 1200 px de
// ancho, así que las grandes se dejan en 2000 px de lado mayor (JPEG, calidad
// 80) y sin metadatos (el EXIF puede llevar la ubicación y el modelo de cámara).
// Las que ya son razonables (p. ej. las de WhatsApp, 2048 px) no se tocan:
// recomprimirlas solo les quitaría calidad.
// El original no se pierde: se guarda en .originals/, una carpeta que git ignora.
// Se puede ejecutar las veces que haga falta: lo que ya está reducido se salta.

import { mkdir, readdir, rename, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE = 'src/assets/Fotos';
const BACKUP = '.originals/Fotos';
// Se reduce lo que pase de este lado mayor o de este peso…
const LIMIT_SIDE = 2400;
const LIMIT_BYTES = 1_500_000;
// …y se deja así
const TARGET_SIDE = 2000;
const QUALITY = 80;

const megabytes = (bytes) => `${(bytes / 1_000_000).toFixed(1)} MB`;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (/\.jpe?g$/i.test(entry.name)) yield full;
  }
}

let before = 0;
let after = 0;
let changed = 0;

for await (const file of walk(SOURCE)) {
  const { size } = await stat(file);
  const { width = 0, height = 0 } = await sharp(file).metadata();
  before += size;

  if (Math.max(width, height) <= LIMIT_SIDE && size <= LIMIT_BYTES) {
    after += size;
    continue;
  }

  // .rotate() sin argumentos aplica la orientación del EXIF antes de quitarlo
  const output = await sharp(file)
    .rotate()
    .resize({ width: TARGET_SIDE, height: TARGET_SIDE, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  if (output.length >= size) {
    after += size;
    continue;
  }

  const backup = path.join(BACKUP, path.relative(SOURCE, file));
  await mkdir(path.dirname(backup), { recursive: true });
  // Si ya hay una copia del original, no se pisa
  if (!existsSync(backup)) await rename(file, backup);
  await writeFile(file, output);

  after += output.length;
  changed++;
  console.log(`${path.relative(SOURCE, file).padEnd(40)} ${megabytes(size).padStart(8)} → ${megabytes(output.length)}`);
}

console.log(
  changed
    ? `\n${changed} fotos reducidas: ${megabytes(before)} → ${megabytes(after)}. Originales en ${BACKUP}/`
    : `Nada que reducir (${megabytes(before)} en total).`,
);
