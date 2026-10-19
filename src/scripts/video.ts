// Vídeos de YouTube sin su peso: en la página solo hay una miniatura con un
// botón. El reproductor de YouTube (más de 1 MB de scripts) no se carga hasta
// que alguien pulsa play. Sin este script, el botón es un enlace normal al vídeo.
//
// Privacidad: el reproductor de YouTube guarda sus propias cookies, así que
// solo se carga aquí si el visitante ha aceptado las de vídeos en el aviso de
// cookies. Si no, el botón abre el vídeo en YouTube, en otra pestaña. Hasta
// entonces el navegador no se conecta con YouTube ni con Google.

import { getConsent, onConsent } from './consent';

const frames = [...document.querySelectorAll<HTMLElement>('[data-video-frame]')];

// Vuelve a dejar la miniatura (y, con ello, para el vídeo)
function reset(frame: HTMLElement) {
  frame.querySelector('iframe')?.remove();
  frame.removeAttribute('data-state');
}

for (const frame of frames) {
  const link = frame.querySelector<HTMLAnchorElement>('[data-video]');
  if (!link) continue;

  link.addEventListener('click', (event) => {
    // Ctrl/Cmd + clic o botón central: se respeta abrir YouTube en otra pestaña
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    // Sin permiso para las cookies de YouTube, el enlace hace lo suyo: abre YouTube
    if (!getConsent()?.videos) return;
    event.preventDefault();
    if (frame.dataset.state) return;

    // Solo suena un vídeo a la vez
    for (const other of frames) if (other !== frame) reset(other);

    frame.dataset.state = 'loading';
    const player = document.createElement('iframe');
    player.src = `https://www.youtube-nocookie.com/embed/${link.dataset.video}?autoplay=1&rel=0&playsinline=1`;
    player.title = link.dataset.title ?? '';
    player.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';
    // La miniatura sigue a la vista hasta que el reproductor está listo: sin fundido a negro
    player.addEventListener('load', () => {
      frame.dataset.state = 'playing';
      player.focus();
    });
    frame.append(player);
  });
}

// Si el visitante retira el permiso, el vídeo que estuviera sonando se quita
onConsent((consent) => {
  if (!consent.videos) for (const frame of frames) reset(frame);
});
