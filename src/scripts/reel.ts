// Las cintas de fotos de la galería se mueven solas (CSS). Aquí solo se
// frenan con suavidad cuando el ratón se posa encima, para poder mirar una
// foto, y recuperan su velocidad al salir.

const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (canHover.matches && !reducedMotion.matches) {
  for (const row of document.querySelectorAll<HTMLElement>('[data-reel]')) {
    const track = row.querySelector<HTMLElement>('.reel-track');
    if (!track) continue;

    let rate = 1;
    let target = 1;
    let frame = 0;

    const step = () => {
      rate += (target - rate) * 0.08;
      if (Math.abs(target - rate) < 0.01) rate = target;
      // Se ajusta la velocidad de la animación en marcha: no hay salto ni reinicio
      for (const drift of track.getAnimations()) drift.playbackRate = rate;
      frame = rate === target ? 0 : requestAnimationFrame(step);
    };

    const ease = (value: number) => {
      target = value;
      if (frame === 0) frame = requestAnimationFrame(step);
    };

    row.addEventListener('pointerenter', () => ease(0.12));
    row.addEventListener('pointerleave', () => ease(1));
  }
}
