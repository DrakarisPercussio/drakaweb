// Analítica con permiso. Tres cosas:
//
//  1. El aviso de cookies: pregunta una vez y recuerda la respuesta 12 meses.
//  2. Google Analytics: solo se descarga si la respuesta es «sí». Antes de eso
//     no sale ni una petición hacia Google ni se guarda ninguna cookie.
//  3. Los clics que interesa contar: cualquier elemento con `data-track` envía
//     un evento con ese nombre (para ver cuáles hay, buscar `data-track` en src/).
//
// Si la web no tiene identificador de Analytics (`site.analyticsId` vacío), el
// aviso no existe en la página y este archivo no hace nada.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

const banner = document.querySelector<HTMLElement>('[data-consent]');
const gaId = banner?.dataset.gaId;

if (banner && gaId) {
  const STORAGE_KEY = 'dk:consent';
  const VALID_FOR = 365 * 24 * 60 * 60 * 1000; // la respuesta se vuelve a pedir al cabo de un año
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------------------------------------------------------------------
     La respuesta guardada
     --------------------------------------------------------------------- */

  const readChoice = (): boolean | undefined => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null') as { analytics?: unknown; at?: unknown } | null;
      if (!saved || typeof saved.analytics !== 'boolean' || typeof saved.at !== 'number') return undefined;
      return Date.now() - saved.at < VALID_FOR ? saved.analytics : undefined;
    } catch {
      return undefined;
    }
  };

  const saveChoice = (analytics: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics, at: Date.now() }));
    } catch {
      // Sin almacenamiento (modo privado estricto): la respuesta vale para esta visita
    }
  };

  /* ---------------------------------------------------------------------
     Google Analytics
     --------------------------------------------------------------------- */

  let loaded = false;
  let enabled = false;

  function enableAnalytics() {
    enabled = true;
    window[`ga-disable-${gaId}`] = false;
    if (loaded) return;
    loaded = true;

    window.dataLayer = window.dataLayer ?? [];
    // gtag espera recibir el objeto `arguments` tal cual, no un array
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
    window.gtag('js', new Date());
    // Solo medición: nada de publicidad ni de cruzar datos con cuentas de Google
    window.gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
    window.gtag('config', gaId, { allow_google_signals: false, allow_ad_personalization_signals: false });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.append(script);
  }

  function disableAnalytics() {
    enabled = false;
    window[`ga-disable-${gaId}`] = true;
    // Se borran las cookies que Analytics hubiera dejado (_ga, _ga_XXXX)
    const host = location.hostname.split('.');
    const domains = host.map((_, i) => host.slice(i).join('.'));
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim();
      if (!name.startsWith('_ga')) continue;
      document.cookie = `${name}=; Max-Age=0; path=/`;
      for (const domain of domains) document.cookie = `${name}=; Max-Age=0; path=/; domain=${domain}`;
    }
  }

  /** Envía un evento, si hay permiso. Sin permiso no hace nada (ni lo guarda para luego). */
  function track(name: string, detail: Record<string, string | undefined>) {
    if (!enabled) return;
    const params = Object.fromEntries(Object.entries(detail).filter(([, value]) => value));
    window.gtag?.('event', name, params);
  }

  /* ---------------------------------------------------------------------
     El aviso
     --------------------------------------------------------------------- */

  let opener: HTMLElement | null = null;

  function openBanner(from: HTMLElement | null = null) {
    opener = from;
    banner!.hidden = false;
    // Un fotograma de margen para que la transición arranque desde el estado oculto
    requestAnimationFrame(() => requestAnimationFrame(() => banner!.setAttribute('data-open', '')));
    // Abierto a mano desde el pie: el foco va al aviso. En la primera visita no se roba el foco.
    if (from) banner!.querySelector<HTMLElement>('button')?.focus({ preventScroll: true });
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

  function decide(analytics: boolean) {
    saveChoice(analytics);
    if (analytics) enableAnalytics();
    else disableAnalytics();
    closeBanner();
  }

  banner.querySelector('[data-consent-accept]')?.addEventListener('click', () => decide(true));
  banner.querySelector('[data-consent-reject]')?.addEventListener('click', () => decide(false));

  // «Configuració de galetes», en el pie: vuelve a abrir el aviso para cambiar de opinión
  for (const button of document.querySelectorAll<HTMLElement>('[data-consent-open]')) {
    button.hidden = false;
    button.addEventListener('click', () => openBanner(button));
  }

  // Si se abrió a mano, Escape lo cierra sin cambiar nada
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && opener && banner.hasAttribute('data-open')) closeBanner();
  });

  const choice = readChoice();
  if (choice === true) enableAnalytics();
  // Primera visita: el aviso entra cuando ya ha terminado la animación de portada
  else if (choice === undefined) window.setTimeout(() => openBanner(), 1200);

  /* ---------------------------------------------------------------------
     Clics que se cuentan
     --------------------------------------------------------------------- */

  document.addEventListener(
    'click',
    (event) => {
      const element = (event.target as Element | null)?.closest<HTMLElement>('[data-track]');
      if (!element?.dataset.track) return;
      track(element.dataset.track, { place: element.dataset.trackPlace, detail: element.dataset.trackDetail });
    },
    { capture: true },
  );
}

export {};
