// Textos de la página «Informació legal»: aviso legal, condiciones de compra,
// política de privacidad y política de cookies, en los tres idiomas.
//
// Solo lo que la ley pide, a partir de los datos de la asociación
// (src/data/site.ts) y de lo que la web hace de verdad. NO sustituyen el
// consejo de un profesional: conviene revisarlos cada vez que cambie algo (un
// formulario, otra herramienta de medición, una tienda en línea…).
// Al cambiar algo aquí, actualizar también `site.legal.updated`.
//
// La web no guarda cookies propias: la política de cookies explica las de
// YouTube (solo con permiso, desde el aviso de cookies). Las partes sobre Google Analytics solo
// aparecen si hay un identificador en `site.analyticsId`, y las líneas de NIF y
// correo, solo si están rellenos.

import type { Lang } from './ui';

export interface LegalFacts {
  name: string;
  nif: string;
  registry: string;
  registryNumber: string;
  /** Fecha de inscripción ya escrita en el idioma de la página */
  registered: string;
  address: string;
  email: string;
  instagram: string;
  /** ¿Hay Google Analytics configurado? */
  analytics: boolean;
}

/** Un párrafo, o una lista de puntos */
type Block = string | string[];

export interface LegalSection {
  /** Ancla de la sección: la misma en los tres idiomas */
  id: 'avis-legal' | 'compres' | 'privacitat' | 'galetes';
  title: string;
  parts: { heading?: string; blocks: Block[] }[];
}

const compact = (items: (string | false)[]) => items.filter((item): item is string => Boolean(item));

/** «Gmail i Analytics», con la conjunción de cada idioma */
const list = (lang: Lang, items: (string | false)[]) =>
  new Intl.ListFormat(lang, { type: 'conjunction' }).format(compact(items));

/** «Google (Gmail i YouTube)», y Analytics si la web lo tiene */
const google = (lang: Lang, f: LegalFacts) =>
  `Google (${list(lang, [f.email && 'Gmail', 'YouTube', f.analytics && 'Analytics'])})`;

/**
 * La política de cookies. La web no guarda cookies propias: las únicas son las
 * del reproductor de YouTube al ver un vídeo y, si hay Google Analytics, las suyas.
 * Las de YouTube solo se cargan si se aceptan en el aviso de cookies.
 */
function cookiePolicy(
  f: LegalFacts,
  copy: {
    title: string;
    none: string;
    heading: string;
    youtube: string;
    analytics: string;
    howHeading: string;
    how: string;
    howAnalytics: string;
  },
): LegalSection[] {
  return [
    {
      id: 'galetes',
      title: copy.title,
      parts: [
        { blocks: compact([!f.analytics && copy.none]) },
        { heading: copy.heading, blocks: [compact([f.analytics && copy.analytics, copy.youtube])] },
        { heading: copy.howHeading, blocks: [f.analytics ? copy.howAnalytics : copy.how] },
      ],
    },
  ];
}

const ca = (f: LegalFacts): LegalSection[] => {
  const contact = f.email ? `${f.email} o Instagram (@${f.instagram})` : `Instagram (@${f.instagram})`;
  const write = f.email ? 'per Instagram o per correu' : 'per Instagram';
  return [
    {
      id: 'avis-legal',
      title: 'Avís legal',
      parts: [
        {
          blocks: [
            'Dades de la titular d’aquest web, segons la Llei 34/2002, de serveis de la societat de la informació:',
            compact([
              `Titular: ${f.name}`,
              f.nif && `NIF: ${f.nif}`,
              `Domicili: ${f.address}`,
              `Registre: inscrita al ${f.registry} amb el número ${f.registryNumber}, el ${f.registered}`,
              `Contacte: ${contact}`,
            ]),
          ],
        },
      ],
    },
    {
      id: 'compres',
      title: 'Condicions de compra',
      parts: [
        {
          blocks: [
            `${f.name} és una entitat sense ànim de lucre. Els beneficis de la venda d’articles es destinen íntegrament al manteniment dels instruments, a finançar els nostres actes i a les activitats internes de la colla.`,
          ],
        },
        {
          heading: 'Comandes',
          blocks: [
            `Les comandes es fan ${write}. Abans de confirmar-les et direm la disponibilitat, el preu total, la forma de pagament i com i quan es lliuren.`,
          ],
        },
        {
          heading: 'Preus',
          blocks: [
            'Els preus són finals, amb tots els impostos aplicables inclosos. Les despeses d’enviament, si n’hi ha, no hi estan incloses: te les direm abans de confirmar la comanda.',
          ],
        },
        {
          heading: 'Dret de desistiment',
          blocks: [
            `Si compres com a consumidor, tens 14 dies naturals des que reps el producte per desistir de la compra sense donar explicacions. Comunica-ho ${write}; pots fer servir aquest model: «Comunico que desisteixo de la compra de [producte], rebut el [data]. [Nom i cognoms, data]». Et retornarem l’import pagat, incloses les despeses d’enviament inicials, pel mateix mitjà de pagament i en un màxim de 14 dies; podem esperar a rebre el producte. Les despeses de devolució són a càrrec teu.`,
          ],
        },
        {
          heading: 'Garantia',
          blocks: [
            'Els productes tenen la garantia legal de conformitat. Si en reps algun amb un defecte, escriu-nos i te’l canviarem o et retornarem l’import.',
          ],
        },
      ],
    },
    {
      id: 'privacitat',
      title: 'Política de privacitat',
      parts: [
        {
          heading: 'Responsable',
          blocks: [`${f.name}, ${f.address}. Contacte: ${contact}.`],
        },
        {
          heading: 'Finalitats i base legal',
          blocks: [
            compact([
              'Contacte: respondre els teus missatges i gestionar el que ens demanis (comandes, contractacions o unir-te a la colla). Base legal: la teva sol·licitud o el contracte (art. 6.1.b del RGPD).',
              f.analytics &&
                'Analítica: saber com es fa servir el web, amb Google Analytics, només si ho acceptes. Base legal: el teu consentiment (art. 6.1.a del RGPD).',
              'Vídeos: reproduir els vídeos de YouTube al web, només si ho acceptes. Base legal: el teu consentiment (art. 6.1.a del RGPD).',
              'Fotografies: donar a conèixer l’activitat de la colla. Base legal: el consentiment dels membres i, per al públic que hi surt de manera secundària en actes públics, l’interès legítim de l’associació (art. 6.1.a i 6.1.f del RGPD).',
            ]),
          ],
        },
        {
          heading: 'Destinataris',
          blocks: [
            `Els proveïdors que fem servir: ${list('ca', ['GitHub (allotjament del web)', google('ca', f), 'Meta (Instagram)'])}. Poden tractar dades als Estats Units, amb les garanties del Marc de Privadesa de Dades UE-EUA. No cedim dades a ningú més.`,
          ],
        },
        {
          heading: 'Conservació',
          blocks: [
            compact([
              'Els missatges, el temps necessari per atendre’t; les dades de comandes i contractacions, el que exigeix la llei;',
              f.analytics && 'les d’analítica, 14 mesos;',
              'les fotografies, fins que en demanis la retirada.',
            ]).join(' '),
          ],
        },
        {
          heading: 'Drets',
          blocks: [
            `Pots exercir els drets d’accés, rectificació, supressió, oposició, limitació i portabilitat, i retirar el consentiment, escrivint a ${contact}. També pots reclamar davant l’Agència Espanyola de Protecció de Dades (www.aepd.es).`,
          ],
        },
      ],
    },
    ...cookiePolicy(f, {
      title: 'Política de galetes',
      none: 'Aquest web no fa servir galetes pròpies.',
      heading: 'Galetes que s’hi poden desar',
      youtube:
        'Vídeos (YouTube), només si les acceptes: el reproductor de YouTube (Google) desa les seves pròpies galetes al navegador per funcionar i comptar reproduccions. Detall a policies.google.com/technologies/cookies.',
      analytics:
        'Analítiques (Google Analytics), només si les acceptes: _ga i _ga_<ID>, que instal·la Google Ireland Limited per encàrrec de l’associació per distingir visitants i sessions. Caduquen als 2 anys.',
      howHeading: 'Com gestionar-les',
      how: 'Les pots acceptar, rebutjar o triar quan vulguis des de «Configuració de galetes», al peu de pàgina. Si no acceptes les de YouTube, els vídeos s’obren a YouTube.',
      howAnalytics:
        'Les pots acceptar, rebutjar o triar quan vulguis des de «Configuració de galetes», al peu de pàgina. Si no acceptes les de YouTube, els vídeos s’obren a YouTube.',
    }),
  ];
};

const es = (f: LegalFacts): LegalSection[] => {
  const contact = f.email ? `${f.email} o Instagram (@${f.instagram})` : `Instagram (@${f.instagram})`;
  const write = f.email ? 'por Instagram o por correo' : 'por Instagram';
  return [
    {
      id: 'avis-legal',
      title: 'Aviso legal',
      parts: [
        {
          blocks: [
            'Datos de la titular de esta web, según la Ley 34/2002, de servicios de la sociedad de la información:',
            compact([
              `Titular: ${f.name}`,
              f.nif && `NIF: ${f.nif}`,
              `Domicilio: ${f.address}`,
              `Registro: inscrita en el ${f.registry} con el número ${f.registryNumber}, el ${f.registered}`,
              `Contacto: ${contact}`,
            ]),
          ],
        },
      ],
    },
    {
      id: 'compres',
      title: 'Condiciones de compra',
      parts: [
        {
          blocks: [
            `${f.name} es una entidad sin ánimo de lucro. Los beneficios de la venta de artículos se destinan íntegramente al mantenimiento de los instrumentos, a financiar nuestros actos y a las actividades internas de la colla.`,
          ],
        },
        {
          heading: 'Pedidos',
          blocks: [
            `Los pedidos se hacen ${write}. Antes de confirmarlos te diremos la disponibilidad, el precio total, la forma de pago y cómo y cuándo se entregan.`,
          ],
        },
        {
          heading: 'Precios',
          blocks: [
            'Los precios son finales, con todos los impuestos aplicables incluidos. Los gastos de envío, si los hay, no están incluidos: te los diremos antes de confirmar el pedido.',
          ],
        },
        {
          heading: 'Derecho de desistimiento',
          blocks: [
            `Si compras como consumidor, tienes 14 días naturales desde que recibes el producto para desistir de la compra sin dar explicaciones. Comunícalo ${write}; puedes usar este modelo: «Comunico que desisto de la compra de [producto], recibido el [fecha]. [Nombre y apellidos, fecha]». Te devolveremos el importe pagado, incluidos los gastos de envío iniciales, por el mismo medio de pago y en un máximo de 14 días; podemos esperar a recibir el producto. Los gastos de devolución corren de tu cuenta.`,
          ],
        },
        {
          heading: 'Garantía',
          blocks: [
            'Los productos tienen la garantía legal de conformidad. Si recibes alguno con un defecto, escríbenos y te lo cambiaremos o te devolveremos el importe.',
          ],
        },
      ],
    },
    {
      id: 'privacitat',
      title: 'Política de privacidad',
      parts: [
        {
          heading: 'Responsable',
          blocks: [`${f.name}, ${f.address}. Contacto: ${contact}.`],
        },
        {
          heading: 'Finalidades y base legal',
          blocks: [
            compact([
              'Contacto: responder a tus mensajes y gestionar lo que nos pidas (pedidos, contrataciones o unirte a la colla). Base legal: tu solicitud o el contrato (art. 6.1.b del RGPD).',
              f.analytics &&
                'Analítica: saber cómo se usa la web, con Google Analytics, solo si lo aceptas. Base legal: tu consentimiento (art. 6.1.a del RGPD).',
              'Vídeos: reproducir los vídeos de YouTube en la web, solo si lo aceptas. Base legal: tu consentimiento (art. 6.1.a del RGPD).',
              'Fotografías: dar a conocer la actividad de la colla. Base legal: el consentimiento de los miembros y, para el público que sale de forma secundaria en actos públicos, el interés legítimo de la asociación (art. 6.1.a y 6.1.f del RGPD).',
            ]),
          ],
        },
        {
          heading: 'Destinatarios',
          blocks: [
            `Los proveedores que usamos: ${list('es', ['GitHub (alojamiento de la web)', google('es', f), 'Meta (Instagram)'])}. Pueden tratar datos en Estados Unidos, con las garantías del Marco de Privacidad de Datos UE-EE. UU. No cedemos datos a nadie más.`,
          ],
        },
        {
          heading: 'Conservación',
          blocks: [
            compact([
              'Los mensajes, el tiempo necesario para atenderte; los datos de pedidos y contrataciones, lo que exija la ley;',
              f.analytics && 'los de analítica, 14 meses;',
              'las fotografías, hasta que pidas su retirada.',
            ]).join(' '),
          ],
        },
        {
          heading: 'Derechos',
          blocks: [
            `Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad, y retirar el consentimiento, escribiendo a ${contact}. También puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`,
          ],
        },
      ],
    },
    ...cookiePolicy(f, {
      title: 'Política de cookies',
      none: 'Esta web no usa cookies propias.',
      heading: 'Cookies que se pueden guardar',
      youtube:
        'Vídeos (YouTube), solo si las aceptas: el reproductor de YouTube (Google) guarda sus propias cookies en el navegador para funcionar y contar reproducciones. Detalle en policies.google.com/technologies/cookies.',
      analytics:
        'Analíticas (Google Analytics), solo si las aceptas: _ga y _ga_<ID>, que instala Google Ireland Limited por encargo de la asociación para distinguir visitantes y sesiones. Caducan a los 2 años.',
      howHeading: 'Cómo gestionarlas',
      how: 'Puedes aceptarlas, rechazarlas o elegirlas cuando quieras desde «Configuración de cookies», en el pie de página. Si no aceptas las de YouTube, los vídeos se abren en YouTube.',
      howAnalytics:
        'Puedes aceptarlas, rechazarlas o elegirlas cuando quieras desde «Configuración de cookies», en el pie de página. Si no aceptas las de YouTube, los vídeos se abren en YouTube.',
    }),
  ];
};

const en = (f: LegalFacts): LegalSection[] => {
  const contact = f.email ? `${f.email} or Instagram (@${f.instagram})` : `Instagram (@${f.instagram})`;
  const write = f.email ? 'on Instagram or by email' : 'on Instagram';
  return [
    {
      id: 'avis-legal',
      title: 'Legal notice',
      parts: [
        {
          blocks: [
            'Details of the owner of this website, under Spanish Law 34/2002 on information society services:',
            compact([
              `Owner: ${f.name}`,
              f.nif && `Tax ID (NIF): ${f.nif}`,
              `Registered address: ${f.address}`,
              `Registry: entered in the ${f.registry} under number ${f.registryNumber}, on ${f.registered}`,
              `Contact: ${contact}`,
            ]),
          ],
        },
      ],
    },
    {
      id: 'compres',
      title: 'Purchase terms',
      parts: [
        {
          blocks: [
            `${f.name} is a non-profit association. All profits from merchandise sales go towards maintaining our instruments, funding our events and the group’s internal activities.`,
          ],
        },
        {
          heading: 'Orders',
          blocks: [
            `Orders are placed ${write}. Before confirming, we will tell you about availability, the total price, how to pay and how and when it will be delivered.`,
          ],
        },
        {
          heading: 'Prices',
          blocks: [
            'Prices are final and include all applicable taxes. Shipping costs, if any, are not included: we will tell you what they are before confirming the order.',
          ],
        },
        {
          heading: 'Right of withdrawal',
          blocks: [
            `If you buy as a consumer, you have 14 calendar days from receiving the product to withdraw from the purchase without giving any reason. Tell us ${write}; you can use this template: “I hereby withdraw from the purchase of [product], received on [date]. [Full name, date]”. We will refund the amount paid, including the original shipping costs, using the same payment method within 14 days at most; we may wait until we receive the product. Return costs are on you.`,
          ],
        },
        {
          heading: 'Guarantee',
          blocks: [
            'Products come with the legal guarantee of conformity. If you receive one with a defect, write to us and we will replace it or refund you.',
          ],
        },
      ],
    },
    {
      id: 'privacitat',
      title: 'Privacy policy',
      parts: [
        {
          heading: 'Controller',
          blocks: [`${f.name}, ${f.address}. Contact: ${contact}.`],
        },
        {
          heading: 'Purposes and legal basis',
          blocks: [
            compact([
              'Contact: replying to your messages and handling what you ask for (orders, bookings or joining the group). Legal basis: your request or the contract (Art. 6(1)(b) GDPR).',
              f.analytics &&
                'Analytics: learning how the website is used, with Google Analytics, only if you accept. Legal basis: your consent (Art. 6(1)(a) GDPR).',
              'Videos: playing YouTube videos on the website, only if you accept. Legal basis: your consent (Art. 6(1)(a) GDPR).',
              'Photographs: showing what the group does. Legal basis: the consent of members and, for members of the public who appear incidentally at public events, the association’s legitimate interest (Art. 6(1)(a) and 6(1)(f) GDPR).',
            ]),
          ],
        },
        {
          heading: 'Recipients',
          blocks: [
            `The providers we use: ${list('en', ['GitHub (website hosting)', google('en', f), 'Meta (Instagram)'])}. They may process data in the United States, under the EU-U.S. Data Privacy Framework. We do not pass data to anyone else.`,
          ],
        },
        {
          heading: 'Retention',
          blocks: [
            compact([
              'Messages, for as long as needed to deal with your request; order and booking data, for as long as the law requires;',
              f.analytics && 'analytics data, 14 months;',
              'photographs, until you ask for them to be removed.',
            ]).join(' '),
          ],
        },
        {
          heading: 'Your rights',
          blocks: [
            `You can exercise your rights of access, rectification, erasure, objection, restriction and portability, and withdraw your consent, by writing to ${contact}. You can also lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).`,
          ],
        },
      ],
    },
    ...cookiePolicy(f, {
      title: 'Cookie policy',
      none: 'This website does not use its own cookies.',
      heading: 'Cookies that may be stored',
      youtube:
        'Videos (YouTube), only if you accept: the YouTube (Google) player stores its own cookies in your browser to work and count views. Details at policies.google.com/technologies/cookies.',
      analytics:
        'Analytics (Google Analytics), only if you accept: _ga and _ga_<ID>, set by Google Ireland Limited on behalf of the association to tell visitors and sessions apart. They expire after 2 years.',
      howHeading: 'How to manage them',
      how: 'You can accept, reject or choose them at any time from “Cookie settings” in the footer. If you decline YouTube cookies, videos open on YouTube.',
      howAnalytics:
        'You can accept, reject or choose them at any time from “Cookie settings” in the footer. If you decline YouTube cookies, videos open on YouTube.',
    }),
  ];
};

const builders: Record<Lang, (facts: LegalFacts) => LegalSection[]> = { ca, es, en };

export function legalSections(lang: Lang, facts: LegalFacts): LegalSection[] {
  return builders[lang](facts);
}
