// Interacciones de la web. Todo es mejora progresiva: sin este script la
// página se lee y se navega igual.

import './drum';
import './timeline';
import './reel';
import './video';

const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

/* -------------------------------------------------------------------------
   Cabecera: gana fondo al bajar y marca la sección que se está viendo
   ------------------------------------------------------------------------- */

const header = document.querySelector<HTMLElement>('[data-header]');

function updateHeader() {
  header?.toggleAttribute('data-scrolled', window.scrollY > 12);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];

if (navLinks.length > 0 && 'IntersectionObserver' in window) {
  const inView = new Set<string>();
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) inView.add(entry.target.id);
        else inView.delete(entry.target.id);
      }
      // Si no hay ninguna sección del menú en la franja (p. ej. en el pie), no se marca nada
      for (const link of navLinks) {
        link.toggleAttribute('aria-current', inView.has(link.hash.slice(1)));
      }
    },
    // Una franja fina en mitad de la pantalla decide qué sección está "activa"
    { rootMargin: '-45% 0px -50% 0px' },
  );
  document.querySelectorAll('main section[id]').forEach((section) => spy.observe(section));
}

/* -------------------------------------------------------------------------
   Menú móvil
   ------------------------------------------------------------------------- */

const menu = document.querySelector<HTMLElement>('[data-menu]');
const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-btn]');

function setMenu(open: boolean) {
  if (!menu || !menuButton) return;
  menu.toggleAttribute('data-open', open);
  menu.inert = !open;
  header?.toggleAttribute('data-menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', (open ? menuButton.dataset.labelClose : menuButton.dataset.labelOpen) ?? '');
  root.style.overflow = open ? 'hidden' : '';
}

if (menu && menuButton) {
  menuButton.addEventListener('click', () => setMenu(!menu.hasAttribute('data-open')));
  menu.querySelectorAll('[data-menu-link]').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.hasAttribute('data-open')) {
      setMenu(false);
      menuButton.focus();
    }
  });

  // Si la ventana crece hasta la vista de escritorio, el menú no debe quedarse abierto
  window.matchMedia('(min-width: 70.0625rem)').addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });
}

/* -------------------------------------------------------------------------
   Aparición al hacer scroll
   Solo se oculta lo que todavía está por debajo de la pantalla; lo que ya se
   ve al cargar se queda como está.
   ------------------------------------------------------------------------- */

const revealTargets = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];

if ('IntersectionObserver' in window && !root.classList.contains('is-lang-switch')) {
  const reveal = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.revealState = 'in';
        reveal.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
  );

  const fold = window.innerHeight * 0.92;
  for (const element of revealTargets) {
    if (element.getBoundingClientRect().top > fold) {
      element.dataset.revealState = 'pending';
      reveal.observe(element);
    }
  }
}

/* -------------------------------------------------------------------------
   Paralaje
   La posición sale siempre de la distancia al centro de la pantalla (no se
   acumula), y el transform se escribe directo en el elemento.
   ------------------------------------------------------------------------- */

const parallaxTargets = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
const parallaxVisible = new Set<HTMLElement>();
let parallaxFrame = 0;

function renderParallax() {
  parallaxFrame = 0;
  const viewportCenter = window.innerHeight / 2;
  for (const element of parallaxVisible) {
    const anchor = element.parentElement;
    if (!anchor) continue;
    const rect = anchor.getBoundingClientRect();
    // Fuera de pantalla no sigue desplazándose: el recorrido tiene tope
    const reach = viewportCenter + rect.height / 2;
    const distance = Math.max(-reach, Math.min(reach, rect.top + rect.height / 2 - viewportCenter));
    const speed = Number(element.dataset.parallax) || 0.1;
    element.style.transform = `translate3d(0, ${(-distance * speed).toFixed(1)}px, 0)`;
  }
}

function requestParallax() {
  if (parallaxFrame === 0 && parallaxVisible.size > 0) {
    parallaxFrame = requestAnimationFrame(renderParallax);
  }
}

if (parallaxTargets.length > 0 && 'IntersectionObserver' in window && !reducedMotion.matches) {
  // Se observa el padre, que no se mueve, para no medir un elemento desplazado
  const byAnchor = new Map<Element, HTMLElement>();
  const watcher = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const element = byAnchor.get(entry.target);
        if (!element) continue;
        if (entry.isIntersecting) parallaxVisible.add(element);
        else parallaxVisible.delete(element);
      }
      requestParallax();
    },
    { rootMargin: '20% 0px' },
  );
  for (const element of parallaxTargets) {
    if (!element.parentElement) continue;
    byAnchor.set(element.parentElement, element);
    watcher.observe(element.parentElement);
  }
  window.addEventListener('scroll', requestParallax, { passive: true });
  window.addEventListener('resize', requestParallax, { passive: true });
}

/* -------------------------------------------------------------------------
   El sello DKS gira solo; al hacer scroll gira más deprisa y luego se calma
   ------------------------------------------------------------------------- */

const sealRings = [...document.querySelectorAll<SVGElement>('[data-seal-ring]')];

if (sealRings.length > 0 && !reducedMotion.matches) {
  let lastY = window.scrollY;
  let lastTime = performance.now();
  let rate = 1;
  let sealFrame = 0;

  const settle = () => {
    rate += (1 - rate) * 0.05;
    const done = rate - 1 < 0.02;
    if (done) rate = 1;
    // Se ajusta la velocidad de la animación CSS en marcha, sin reiniciarla
    for (const ring of sealRings) for (const spin of ring.getAnimations()) spin.playbackRate = rate;
    sealFrame = done ? 0 : requestAnimationFrame(settle);
  };

  window.addEventListener(
    'scroll',
    () => {
      const now = performance.now();
      const speed = Math.abs(window.scrollY - lastY) / Math.max(now - lastTime, 1); // px por ms
      lastY = window.scrollY;
      lastTime = now;
      rate = Math.min(10, Math.max(rate, 1 + speed * 4));
      if (sealFrame === 0) sealFrame = requestAnimationFrame(settle);
    },
    { passive: true },
  );
}

/* -------------------------------------------------------------------------
   Cambio de idioma: la píldora responde al instante y se recuerda por dónde
   ibas para que la página nueva aparezca en el mismo punto.
   ------------------------------------------------------------------------- */

for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-lang-link]')) {
  link.addEventListener('click', (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (link.hasAttribute('aria-current')) {
      event.preventDefault();
      return;
    }

    const switcher = link.closest<HTMLElement>('[data-lang-switch]');
    switcher?.querySelector('[aria-current]')?.removeAttribute('aria-current');
    link.setAttribute('aria-current', 'true');
    switcher?.querySelector<HTMLElement>('.lang-pill')?.style.setProperty('--active', link.dataset.index ?? '0');

    let current: HTMLElement | undefined;
    for (const section of document.querySelectorAll<HTMLElement>('main section[id]')) {
      if (section.getBoundingClientRect().top <= 1) current = section;
    }
    const memory = current
      ? { id: current.id, ratio: -current.getBoundingClientRect().top / current.offsetHeight }
      : {};
    try {
      sessionStorage.setItem('dk:lang-switch', JSON.stringify(memory));
    } catch {
      // Sin almacenamiento disponible: el cambio de idioma funciona igual, desde arriba
    }
  });
}

/* -------------------------------------------------------------------------
   Años que se ponen al día solos: el del copyright y los que lleva la colla
   («13 anys fent tremolar els carrers» pasa a 14 en 2027). El HTML lleva los
   del día en que se publicó; aquí solo se corrigen hacia delante.
   ------------------------------------------------------------------------- */

const thisYear = new Date().getFullYear();

for (const element of document.querySelectorAll<HTMLElement>('[data-current-year]')) {
  if (thisYear > Number(element.textContent)) element.textContent = String(thisYear);
}

for (const element of document.querySelectorAll<HTMLElement>('[data-years-since]')) {
  const years = thisYear - Number(element.dataset.yearsSince);
  if (years > Number(element.textContent)) element.textContent = String(years);
}

/* -------------------------------------------------------------------------
   Agenda: las fechas pasadas desaparecen aunque no se haya vuelto a publicar
   ------------------------------------------------------------------------- */

const agendaPanel = document.querySelector<HTMLElement>('[data-agenda]');

if (agendaPanel) {
  const now = new Date();
  const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const gigs = [...agendaPanel.querySelectorAll<HTMLElement>('[data-date]')];
  let upcoming = 0;
  for (const gig of gigs) {
    const past = (gig.dataset.date ?? '') < today;
    gig.hidden = past;
    if (!past) upcoming++;
  }
  const empty = agendaPanel.querySelector<HTMLElement>('[data-agenda-empty]');
  if (empty) empty.hidden = upcoming > 0;
}
