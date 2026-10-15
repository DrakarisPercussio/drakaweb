// Google Analytics, con permiso. Dos cosas:
//
//  1. Analytics solo se descarga si el visitante acepta la analítica en el
//     aviso de cookies (src/scripts/consent.ts). Antes de eso no sale ni una
//     petición hacia Google ni se guarda ninguna cookie; si después la
//     rechaza, se apaga y se borran sus cookies.
//  2. Los clics que interesa contar: cualquier elemento con `data-track` envía
//     un evento con ese nombre (para ver cuáles hay, buscar `data-track` en src/).
//
// Si la web no tiene identificador de Analytics (`site.analyticsId` vacío o a
// medias), este archivo no hace nada.

import { getConsent, onConsent } from './consent';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

const gaId = document.querySelector<HTMLElement>('[data-ga-id]')?.dataset.gaId;

if (gaId) {
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

  if (getConsent()?.analytics) enableAnalytics();
  onConsent((consent) => (consent.analytics ? enableAnalytics() : disableAnalytics()));

  /** Envía un evento, si hay permiso. Sin permiso no hace nada (ni lo guarda para luego). */
  function track(name: string, detail: Record<string, string | undefined>) {
    if (!enabled) return;
    const params = Object.fromEntries(Object.entries(detail).filter(([, value]) => value));
    window.gtag?.('event', name, params);
  }

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
