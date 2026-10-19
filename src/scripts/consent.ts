// Aviso de cookies y lo que ha elegido cada visitante.
//
//  · Dos permisos: «analytics» (Google Analytics, si la web lo tiene) y
//    «videos» (el reproductor de YouTube, que guarda sus propias cookies).
//  · Primera capa: Rebutja · Configura · Accepta, con el mismo peso.
//    «Configura» despliega un interruptor por tipo de cookie.
//  · La respuesta se guarda un año y se puede cambiar desde el pie
//    («Configuració de galetes»).
//
// analytics.ts y video.ts leen el permiso con `getConsent()` y se enteran de
// los cambios con `onConsent()`.

export interface Consent {
  analytics: boolean;
  videos: boolean;
}

const STORAGE_KEY = 'dk:consent';
const VALID_FOR = 365 * 24 * 60 * 60 * 1000; // al cabo de un año se vuelve a preguntar
const CHANGE_EVENT = 'dk:consent-change';

function readSaved(): Consent | undefined {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null') as Partial<Consent> & { at?: unknown };
    if (!saved || typeof saved.analytics !== 'boolean' || typeof saved.videos !== 'boolean' || typeof saved.at !== 'number') {
      return undefined;
    }
    return Date.now() - saved.at < VALID_FOR ? { analytics: saved.analytics, videos: saved.videos } : undefined;
  } catch {
    return undefined;
  }
}

let current = readSaved();

/** Lo que ha elegido el visitante, o `undefined` si aún no ha contestado */
export const getConsent = (): Consent | undefined => current;

/** Avisa cada vez que el visitante cambia su elección */
export function onConsent(listener: (consent: Consent) => void) {
  window.addEventListener(CHANGE_EVENT, (event) => listener((event as CustomEvent<Consent>).detail));
}

function saveConsent(consent: Consent) {
  current = consent;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, at: Date.now() }));
  } catch {
    // Sin almacenamiento (modo privado estricto): la respuesta vale para esta visita
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: consent }));
}

/* -------------------------------------------------------------------------
   El aviso
   ------------------------------------------------------------------------- */

const banner = document.querySelector<HTMLElement>('[data-consent]');

if (banner) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const options = banner.querySelector<HTMLElement>('[data-consent-options]')!;
  const customize = banner.querySelector<HTMLButtonElement>('[data-consent-customize]')!;
  const save = banner.querySelector<HTMLButtonElement>('[data-consent-save]')!;
  const toggles = [...banner.querySelectorAll<HTMLInputElement>('[data-consent-toggle]')];
  // Sin Google Analytics configurado no hay interruptor de analítica: siempre «no»
  const hasAnalytics = toggles.some((toggle) => toggle.dataset.consentToggle === 'analytics');

  let opener: HTMLElement | null = null;

  /** Abre o cierra la lista de opciones; al abrirla, los interruptores muestran lo elegido */
  function showOptions(open: boolean) {
    options.hidden = !open;
    customize.hidden = open;
    save.hidden = !open;
    customize.setAttribute('aria-expanded', String(open));
    if (open) {
      for (const toggle of toggles) {
        toggle.checked = current?.[toggle.dataset.consentToggle as keyof Consent] ?? false;
      }
    }
  }

  function openBanner(from: HTMLElement | null = null, withOptions = false) {
    opener = from;
    showOptions(withOptions);
    banner!.hidden = false;
    // Un fotograma de margen para que la transición arranque desde el estado oculto
    requestAnimationFrame(() => requestAnimationFrame(() => banner!.setAttribute('data-open', '')));
    // Abierto a mano desde el pie: el foco va al aviso. En la primera visita no se roba el foco.
    if (from) (withOptions ? toggles[0] : banner!.querySelector<HTMLElement>('button'))?.focus({ preventScroll: true });
  }

  function closeBanner() {
    banner!.removeAttribute('data-open');
    const hide = () => {
      if (!banner!.hasAttribute('data-open')) banner!.hidden = true;
    };
    if (reducedMotion.matches) hide();
    else window.setTimeout(hide, 220);
    opener?.focus({ preventScroll: true });
    opener = null;
  }

  function decide(consent: Consent) {
    saveConsent({ analytics: hasAnalytics && consent.analytics, videos: consent.videos });
    closeBanner();
  }

  banner.querySelector('[data-consent-accept]')?.addEventListener('click', () => decide({ analytics: true, videos: true }));
  banner.querySelector('[data-consent-reject]')?.addEventListener('click', () => decide({ analytics: false, videos: false }));
  // «Desa» aparece justo donde estaba «Configura»: un doble clic (o dos toques
  // seguidos en el móvil) lo pulsaría sin querer y guardaría todo rechazado sin
  // haber visto las opciones. Durante medio segundo después de abrirlas, no responde.
  let optionsOpenedAt = 0;
  customize.addEventListener('click', () => {
    optionsOpenedAt = performance.now();
    showOptions(true);
    toggles[0]?.focus({ preventScroll: true });
  });
  save.addEventListener('click', () => {
    if (performance.now() - optionsOpenedAt < 500) return;
    const chosen = (name: keyof Consent) => toggles.some((toggle) => toggle.dataset.consentToggle === name && toggle.checked);
    decide({ analytics: chosen('analytics'), videos: chosen('videos') });
  });

  // «Configuració de galetes», en el pie: vuelve a abrir el aviso, ya con las opciones
  for (const button of document.querySelectorAll<HTMLElement>('[data-consent-open]')) {
    button.hidden = false;
    button.addEventListener('click', () => openBanner(button, true));
  }

  // Si se abrió a mano, Escape lo cierra sin cambiar nada
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && opener && banner.hasAttribute('data-open')) closeBanner();
  });

  // Primera visita (o respuesta caducada): el aviso entra cuando ya ha terminado la animación de portada
  if (!current) window.setTimeout(() => openBanner(), 1200);
}
