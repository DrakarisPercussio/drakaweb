// Textos de la página «Informació legal»: aviso legal, política de privacidad
// y política de cookies, en los tres idiomas.
//
// Están redactados a partir de los datos de la asociación (src/data/site.ts) y
// de lo que la web hace de verdad. NO sustituyen el consejo de un profesional:
// conviene que alguien de la entidad los lea antes de publicar y cada vez que
// cambie algo (un formulario, otra herramienta de medición, una tienda en línea…).
//
// Las partes sobre Google Analytics solo aparecen si hay un identificador en
// `site.analyticsId`, y las líneas de NIF y correo, solo si están rellenos.

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
  id: 'avis-legal' | 'privacitat' | 'galetes';
  title: string;
  parts: { heading?: string; blocks: Block[] }[];
}

const compact = (items: (string | false)[]) => items.filter((item): item is string => Boolean(item));

const ca = (f: LegalFacts): LegalSection[] => {
  const contact = f.email ? `${f.email} o Instagram (@${f.instagram})` : `Instagram (@${f.instagram})`;
  return [
    {
      id: 'avis-legal',
      title: 'Avís legal',
      parts: [
        {
          blocks: [
            'En compliment de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic, aquestes són les dades de la titular d’aquest web:',
            compact([
              `Titular: ${f.name}`,
              f.nif && `NIF: ${f.nif}`,
              `Domicili: ${f.address}`,
              `Registre: inscrita al ${f.registry} amb el número ${f.registryNumber}, el ${f.registered}`,
              `Contacte: ${contact}`,
            ]),
          ],
        },
        {
          heading: 'Entitat sense ànim de lucre',
          blocks: [
            `${f.name} és una entitat cultural sense ànim de lucre que té per finalitat promoure, difondre i preservar la cultura popular de Catalunya i de Sant Feliu de Llobregat. Els ingressos de les actuacions i del marxandatge es destinen íntegrament a finançar els actes propis, el vestuari, el manteniment dels instruments i les activitats de la colla.`,
          ],
        },
        {
          heading: 'Marxandatge i contractació',
          blocks: [
            'Aquest web no és una botiga en línia: no s’hi fan comandes ni pagaments. Els productes i els preus que s’hi mostren són informatius. Les comandes de marxandatge i les contractacions es demanen per missatge directe, i les condicions, el pagament i el lliurament s’acorden directament amb l’associació.',
          ],
        },
        {
          heading: 'Propietat intel·lectual',
          blocks: [
            'Els textos, les fotografies, les il·lustracions i els logotips d’aquest web pertanyen a l’associació o als seus autors i no es poden reutilitzar sense permís. Els vídeos incrustats pertanyen a qui els ha publicat i s’ofereixen a través de YouTube.',
          ],
        },
        {
          heading: 'Enllaços a tercers',
          blocks: [
            'Aquest web enllaça a serveis d’altres empreses (Instagram, TikTok, YouTube i Google Maps). L’associació no és responsable dels seus continguts ni de les seves polítiques.',
          ],
        },
      ],
    },
    {
      id: 'privacitat',
      title: 'Política de privacitat',
      parts: [
        {
          heading: 'Qui és responsable de les teves dades',
          blocks: [`${f.name}, ${f.address}. Contacte: ${contact}.`],
        },
        {
          heading: 'Quines dades tractem i per què',
          blocks: [
            compact([
              'Contacte. Aquest web no té formularis ni recull dades personals directament. Si ens escrius, fem servir les teves dades només per respondre’t i gestionar el que ens demanis (una contractació, una comanda o unir-te a la colla). Base legal: la teva sol·licitud (art. 6.1.b del RGPD). A les xarxes socials s’hi apliquen, a més, les polítiques de cada plataforma.',
              f.analytics &&
                'Analítica, només si l’acceptes. Fem servir Google Analytics 4 per saber quantes visites tenim, d’on arriben i quins botons es premen (per exemple, si interessa més contractar-nos o unir-se a la colla). Recull identificadors desats en galetes, dades del dispositiu i del navegador, la ubicació aproximada i les pàgines i botons que es fan servir. No hi enviem el teu nom ni cap dada de contacte. Base legal: el teu consentiment (art. 6.1.a del RGPD), que pots retirar quan vulguis des de «Configuració de galetes», al peu de pàgina.',
              'Allotjament. El web s’allotja a GitHub Pages (GitHub, Inc.), que per raons tècniques i de seguretat registra l’adreça IP de qui el visita. L’associació no té accés a aquests registres.',
              'Vídeos. Les miniatures dels vídeos es carreguen des dels servidors de YouTube (Google). El reproductor només es carrega quan prems el botó de reproducció, en el mode de privadesa millorada de YouTube (youtube-nocookie.com).',
              'Fotografies. Al web hi apareixen membres de la colla en actes públics. Si surts en alguna imatge i vols que la retirem, escriu-nos i ho farem.',
            ]),
          ],
        },
        {
          heading: 'Amb qui es comparteixen',
          blocks: [
            f.analytics
              ? 'Amb GitHub, Inc. (allotjament) i, si acceptes l’analítica, amb Google Ireland Limited (Google Analytics). Totes dues poden tractar dades als Estats Units, amb les garanties del Marc de Privadesa de Dades UE-EUA o de clàusules contractuals tipus. No venem ni cedim dades a ningú més.'
              : 'Amb GitHub, Inc. (allotjament), que pot tractar dades als Estats Units amb les garanties del Marc de Privadesa de Dades UE-EUA o de clàusules contractuals tipus. No venem ni cedim dades a ningú més.',
          ],
        },
        {
          heading: 'Quant de temps es conserven',
          blocks: [
            f.analytics
              ? 'Les dades d’analítica, un màxim de 14 mesos. Els missatges que ens envies, el temps necessari per atendre’t.'
              : 'Els missatges que ens envies, el temps necessari per atendre’t.',
          ],
        },
        {
          heading: 'Els teus drets',
          blocks: [
            `Pots demanar l’accés a les teves dades, que es rectifiquin o se suprimeixin, oposar-te al tractament o limitar-lo, i demanar-ne la portabilitat. Escriu-nos per ${contact} o per correu postal a l’adreça de l’associació. Si creus que no hem atès bé la teva petició, pots reclamar davant l’Agència Espanyola de Protecció de Dades (www.aepd.es).`,
          ],
        },
      ],
    },
    {
      id: 'galetes',
      title: 'Política de galetes',
      parts: [
        {
          blocks: [
            'Les galetes (cookies) són petits fitxers que un web desa al teu navegador. Hi ha tecnologies semblants, com l’emmagatzematge local, que fan la mateixa funció.',
          ],
        },
        {
          heading: 'Què desa aquest web',
          blocks: [
            compact([
              f.analytics
                ? 'Necessàries, sempre. No fem servir galetes pròpies. El navegador recorda, al seu emmagatzematge local, la teva decisió sobre les galetes (dk:consent, 12 mesos) i, mentre canvies d’idioma, el punt de la pàgina on eres (dk:lang-switch, fins que tanques la pestanya).'
                : 'Necessàries. No fem servir galetes pròpies. Mentre canvies d’idioma, el navegador recorda el punt de la pàgina on eres (dk:lang-switch, fins que tanques la pestanya).',
              f.analytics &&
                'Analítiques, només si les acceptes. Les galetes _ga i _ga_<ID>, de Google Analytics, serveixen per distingir visitants i sessions i caduquen al cap de 2 anys.',
              'De tercers. Si reprodueixes un vídeo, el reproductor de YouTube pot desar les seves pròpies dades al teu navegador.',
            ]),
          ],
        },
        {
          heading: 'Com canviar la teva decisió',
          blocks: [
            f.analytics
              ? 'Pots acceptar o rebutjar les galetes d’analítica en qualsevol moment des de «Configuració de galetes», al peu de pàgina. També pots esborrar-les o bloquejar-les des de la configuració del teu navegador.'
              : 'Aquest web no fa servir galetes d’analítica ni de publicitat. Pots esborrar o bloquejar qualsevol galeta des de la configuració del teu navegador.',
          ],
        },
      ],
    },
  ];
};

const es = (f: LegalFacts): LegalSection[] => {
  const contact = f.email ? `${f.email} o Instagram (@${f.instagram})` : `Instagram (@${f.instagram})`;
  return [
    {
      id: 'avis-legal',
      title: 'Aviso legal',
      parts: [
        {
          blocks: [
            'En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico, estos son los datos de la titular de esta web:',
            compact([
              `Titular: ${f.name}`,
              f.nif && `NIF: ${f.nif}`,
              `Domicilio: ${f.address}`,
              `Registro: inscrita en el ${f.registry} con el número ${f.registryNumber}, el ${f.registered}`,
              `Contacto: ${contact}`,
            ]),
          ],
        },
        {
          heading: 'Entidad sin ánimo de lucro',
          blocks: [
            `${f.name} es una entidad cultural sin ánimo de lucro cuya finalidad es promover, difundir y preservar la cultura popular de Cataluña y de Sant Feliu de Llobregat. Los ingresos de las actuaciones y del merchandising se destinan íntegramente a financiar los actos propios, el vestuario, el mantenimiento de los instrumentos y las actividades de la colla.`,
          ],
        },
        {
          heading: 'Merchandising y contratación',
          blocks: [
            'Esta web no es una tienda en línea: en ella no se hacen pedidos ni pagos. Los productos y los precios que se muestran son informativos. Los pedidos de merchandising y las contrataciones se solicitan por mensaje directo, y las condiciones, el pago y la entrega se acuerdan directamente con la asociación.',
          ],
        },
        {
          heading: 'Propiedad intelectual',
          blocks: [
            'Los textos, las fotografías, las ilustraciones y los logotipos de esta web pertenecen a la asociación o a sus autores y no pueden reutilizarse sin permiso. Los vídeos incrustados pertenecen a quien los ha publicado y se ofrecen a través de YouTube.',
          ],
        },
        {
          heading: 'Enlaces a terceros',
          blocks: [
            'Esta web enlaza a servicios de otras empresas (Instagram, TikTok, YouTube y Google Maps). La asociación no es responsable de sus contenidos ni de sus políticas.',
          ],
        },
      ],
    },
    {
      id: 'privacitat',
      title: 'Política de privacidad',
      parts: [
        {
          heading: 'Quién es responsable de tus datos',
          blocks: [`${f.name}, ${f.address}. Contacto: ${contact}.`],
        },
        {
          heading: 'Qué datos tratamos y para qué',
          blocks: [
            compact([
              'Contacto. Esta web no tiene formularios ni recoge datos personales directamente. Si nos escribes, usamos tus datos solo para responderte y gestionar lo que nos pidas (una contratación, un pedido o unirte a la colla). Base legal: tu solicitud (art. 6.1.b del RGPD). En las redes sociales se aplican, además, las políticas de cada plataforma.',
              f.analytics &&
                'Analítica, solo si la aceptas. Usamos Google Analytics 4 para saber cuántas visitas tenemos, de dónde llegan y qué botones se pulsan (por ejemplo, si interesa más contratarnos o unirse a la colla). Recoge identificadores guardados en cookies, datos del dispositivo y del navegador, la ubicación aproximada y las páginas y botones que se usan. No enviamos tu nombre ni ningún dato de contacto. Base legal: tu consentimiento (art. 6.1.a del RGPD), que puedes retirar cuando quieras desde «Configuración de cookies», en el pie de página.',
              'Alojamiento. La web se aloja en GitHub Pages (GitHub, Inc.), que por razones técnicas y de seguridad registra la dirección IP de quien la visita. La asociación no tiene acceso a esos registros.',
              'Vídeos. Las miniaturas de los vídeos se cargan desde los servidores de YouTube (Google). El reproductor solo se carga cuando pulsas el botón de reproducción, en el modo de privacidad mejorada de YouTube (youtube-nocookie.com).',
              'Fotografías. En la web aparecen miembros de la colla en actos públicos. Si sales en alguna imagen y quieres que la retiremos, escríbenos y lo haremos.',
            ]),
          ],
        },
        {
          heading: 'Con quién se comparten',
          blocks: [
            f.analytics
              ? 'Con GitHub, Inc. (alojamiento) y, si aceptas la analítica, con Google Ireland Limited (Google Analytics). Ambas pueden tratar datos en Estados Unidos, con las garantías del Marco de Privacidad de Datos UE-EE. UU. o de cláusulas contractuales tipo. No vendemos ni cedemos datos a nadie más.'
              : 'Con GitHub, Inc. (alojamiento), que puede tratar datos en Estados Unidos con las garantías del Marco de Privacidad de Datos UE-EE. UU. o de cláusulas contractuales tipo. No vendemos ni cedemos datos a nadie más.',
          ],
        },
        {
          heading: 'Cuánto tiempo se conservan',
          blocks: [
            f.analytics
              ? 'Los datos de analítica, un máximo de 14 meses. Los mensajes que nos envías, el tiempo necesario para atenderte.'
              : 'Los mensajes que nos envías, el tiempo necesario para atenderte.',
          ],
        },
        {
          heading: 'Tus derechos',
          blocks: [
            `Puedes pedir el acceso a tus datos, que se rectifiquen o se supriman, oponerte al tratamiento o limitarlo, y pedir su portabilidad. Escríbenos por ${contact} o por correo postal a la dirección de la asociación. Si crees que no hemos atendido bien tu petición, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`,
          ],
        },
      ],
    },
    {
      id: 'galetes',
      title: 'Política de cookies',
      parts: [
        {
          blocks: [
            'Las cookies son pequeños archivos que una web guarda en tu navegador. Hay tecnologías parecidas, como el almacenamiento local, que cumplen la misma función.',
          ],
        },
        {
          heading: 'Qué guarda esta web',
          blocks: [
            compact([
              f.analytics
                ? 'Necesarias, siempre. No usamos cookies propias. El navegador recuerda, en su almacenamiento local, tu decisión sobre las cookies (dk:consent, 12 meses) y, mientras cambias de idioma, el punto de la página en el que estabas (dk:lang-switch, hasta que cierras la pestaña).'
                : 'Necesarias. No usamos cookies propias. Mientras cambias de idioma, el navegador recuerda el punto de la página en el que estabas (dk:lang-switch, hasta que cierras la pestaña).',
              f.analytics &&
                'Analíticas, solo si las aceptas. Las cookies _ga y _ga_<ID>, de Google Analytics, sirven para distinguir visitantes y sesiones y caducan a los 2 años.',
              'De terceros. Si reproduces un vídeo, el reproductor de YouTube puede guardar sus propios datos en tu navegador.',
            ]),
          ],
        },
        {
          heading: 'Cómo cambiar tu decisión',
          blocks: [
            f.analytics
              ? 'Puedes aceptar o rechazar las cookies de analítica en cualquier momento desde «Configuración de cookies», en el pie de página. También puedes borrarlas o bloquearlas desde la configuración de tu navegador.'
              : 'Esta web no usa cookies de analítica ni de publicidad. Puedes borrar o bloquear cualquier cookie desde la configuración de tu navegador.',
          ],
        },
      ],
    },
  ];
};

const en = (f: LegalFacts): LegalSection[] => {
  const contact = f.email ? `${f.email} or Instagram (@${f.instagram})` : `Instagram (@${f.instagram})`;
  return [
    {
      id: 'avis-legal',
      title: 'Legal notice',
      parts: [
        {
          blocks: [
            'In compliance with Spanish Law 34/2002 on information society services and electronic commerce, these are the details of the owner of this website:',
            compact([
              `Owner: ${f.name}`,
              f.nif && `Tax ID (NIF): ${f.nif}`,
              `Registered address: ${f.address}`,
              `Registry: entered in the ${f.registry} under number ${f.registryNumber}, on ${f.registered}`,
              `Contact: ${contact}`,
            ]),
          ],
        },
        {
          heading: 'Non-profit organisation',
          blocks: [
            `${f.name} is a non-profit cultural association whose purpose is to promote, share and preserve the popular culture of Catalonia and of Sant Feliu de Llobregat. All income from performances and merchandise goes to funding our own events, outfits, instrument maintenance and the group’s activities.`,
          ],
        },
        {
          heading: 'Merchandise and bookings',
          blocks: [
            'This website is not an online shop: no orders or payments are made on it. The products and prices shown are for information only. Merchandise orders and bookings are requested by direct message, and the terms, payment and delivery are agreed directly with the association.',
          ],
        },
        {
          heading: 'Intellectual property',
          blocks: [
            'The texts, photographs, illustrations and logos on this website belong to the association or to their authors and may not be reused without permission. Embedded videos belong to whoever published them and are provided through YouTube.',
          ],
        },
        {
          heading: 'Third-party links',
          blocks: [
            'This website links to services run by other companies (Instagram, TikTok, YouTube and Google Maps). The association is not responsible for their content or their policies.',
          ],
        },
      ],
    },
    {
      id: 'privacitat',
      title: 'Privacy policy',
      parts: [
        {
          heading: 'Who is responsible for your data',
          blocks: [`${f.name}, ${f.address}. Contact: ${contact}.`],
        },
        {
          heading: 'What data we process and why',
          blocks: [
            compact([
              'Contact. This website has no forms and does not collect personal data directly. If you write to us, we use your details only to reply and to handle what you ask for (a booking, an order or joining the group). Legal basis: your request (Art. 6(1)(b) GDPR). On social networks, each platform’s own policies also apply.',
              f.analytics &&
                'Analytics, only if you accept. We use Google Analytics 4 to learn how many visits we get, where they come from and which buttons are pressed (for example, whether people are more interested in booking us or in joining). It collects identifiers stored in cookies, device and browser data, approximate location, and the pages and buttons used. We never send your name or any contact details. Legal basis: your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time from “Cookie settings” in the footer.',
              'Hosting. The website is hosted on GitHub Pages (GitHub, Inc.), which logs visitors’ IP addresses for technical and security reasons. The association has no access to those logs.',
              'Videos. Video thumbnails are loaded from YouTube (Google) servers. The player only loads when you press play, in YouTube’s privacy-enhanced mode (youtube-nocookie.com).',
              'Photographs. Members of the group appear on this website at public events. If you are in a picture and would like it removed, write to us and we will take it down.',
            ]),
          ],
        },
        {
          heading: 'Who it is shared with',
          blocks: [
            f.analytics
              ? 'With GitHub, Inc. (hosting) and, if you accept analytics, with Google Ireland Limited (Google Analytics). Both may process data in the United States, under the EU-U.S. Data Privacy Framework or standard contractual clauses. We do not sell or pass data to anyone else.'
              : 'With GitHub, Inc. (hosting), which may process data in the United States under the EU-U.S. Data Privacy Framework or standard contractual clauses. We do not sell or pass data to anyone else.',
          ],
        },
        {
          heading: 'How long it is kept',
          blocks: [
            f.analytics
              ? 'Analytics data, for a maximum of 14 months. The messages you send us, for as long as needed to deal with your request.'
              : 'The messages you send us, for as long as needed to deal with your request.',
          ],
        },
        {
          heading: 'Your rights',
          blocks: [
            `You can ask to access your data, have it corrected or deleted, object to or restrict its processing, and request its portability. Write to us via ${contact} or by post to the association’s address. If you feel your request has not been handled properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).`,
          ],
        },
      ],
    },
    {
      id: 'galetes',
      title: 'Cookie policy',
      parts: [
        {
          blocks: [
            'Cookies are small files a website stores in your browser. Similar technologies, such as local storage, do the same job.',
          ],
        },
        {
          heading: 'What this website stores',
          blocks: [
            compact([
              f.analytics
                ? 'Necessary, always. We set no cookies of our own. Your browser remembers, in its local storage, your cookie choice (dk:consent, 12 months) and, while you switch language, where you were on the page (dk:lang-switch, until you close the tab).'
                : 'Necessary. We set no cookies of our own. While you switch language, your browser remembers where you were on the page (dk:lang-switch, until you close the tab).',
              f.analytics &&
                'Analytics, only if you accept. The _ga and _ga_<ID> cookies, from Google Analytics, are used to tell visitors and sessions apart and expire after 2 years.',
              'Third party. If you play a video, the YouTube player may store its own data in your browser.',
            ]),
          ],
        },
        {
          heading: 'How to change your choice',
          blocks: [
            f.analytics
              ? 'You can accept or reject analytics cookies at any time from “Cookie settings” in the footer. You can also delete or block them in your browser settings.'
              : 'This website uses no analytics or advertising cookies. You can delete or block any cookie in your browser settings.',
          ],
        },
      ],
    },
  ];
};

const builders: Record<Lang, (facts: LegalFacts) => LegalSection[]> = { ca, es, en };

export function legalSections(lang: Lang, facts: LegalFacts): LegalSection[] {
  return builders[lang](facts);
}
