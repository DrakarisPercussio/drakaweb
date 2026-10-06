// Línea del tiempo de «Història»: la línea se pinta con el scroll, los puntos
// se encienden al pasar y el año gigante rueda hasta el hito que se está leyendo.

const timeline = document.querySelector<HTMLElement>('[data-timeline]');

if (timeline && 'IntersectionObserver' in window) {
  const fill = timeline.querySelector<HTMLElement>('[data-rail-fill]');
  const items = [...timeline.querySelectorAll<HTMLElement>('[data-milestone]')];
  const strips = [...document.querySelectorAll<HTMLElement>('[data-odo-strip]')];

  let shownYear = '';
  let frame = 0;
  let visible = false;

  const render = () => {
    frame = 0;
    // La "aguja" está un poco por debajo de la mitad de la pantalla
    const needle = window.innerHeight * 0.55;
    const rect = timeline.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (needle - rect.top) / rect.height));
    // Se escribe el transform directo en el elemento: no recalcula estilos de nadie más
    if (fill) fill.style.transform = `scaleY(${progress.toFixed(4)})`;

    let current = items[0];
    for (const item of items) {
      const passed = item.getBoundingClientRect().top <= needle;
      item.toggleAttribute('data-passed', passed);
      if (passed) current = item;
    }

    const year = current?.dataset.year ?? '';
    if (year !== shownYear) {
      shownYear = year;
      strips.forEach((strip, i) => {
        // La tira tiene los diez dígitos: -10 % por cada uno
        strip.style.transform = `translateY(-${Number(year[i] ?? 0) * 10}%)`;
      });
    }
  };

  const request = () => {
    if (visible && frame === 0) frame = requestAnimationFrame(render);
  };

  new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting;
      request();
    },
    { rootMargin: '20% 0px' },
  ).observe(timeline);

  window.addEventListener('scroll', request, { passive: true });
  window.addEventListener('resize', request, { passive: true });
}
