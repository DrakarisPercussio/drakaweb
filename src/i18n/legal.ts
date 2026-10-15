// Textos de la página «Informació legal»: aviso legal, condiciones de compra,
// política de privacidad y política de cookies, en los tres idiomas.
//
// Están redactados a partir de los datos de la asociación (src/data/site.ts) y
// de lo que la web hace de verdad. NO sustituyen el consejo de un profesional:
// conviene que alguien de la entidad los lea antes de publicar y cada vez que
// cambie algo (un formulario, otra herramienta de medición, una tienda en línea…).
// Al cambiar algo aquí, actualizar también `site.legal.updated`.
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
  id: 'avis-legal' | 'compres' | 'privacitat' | 'galetes';
  title: string;
  parts: { heading?: string; blocks: Block[] }[];
}

const compact = (items: (string | false)[]) => items.filter((item): item is string => Boolean(item));

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
          heading: 'Comandes i contractació',
          blocks: [
            'Aquest web no és una botiga en línia: no s’hi fan comandes ni pagaments. Les comandes de marxandatge es fan per missatge i es regeixen per les condicions de compra que trobaràs més avall. Les actuacions es contracten per missatge, i les condicions de cadascuna s’acorden per escrit amb l’associació abans de l’actuació.',
          ],
        },
        {
          heading: 'Propietat intel·lectual',
          blocks: [
            'Els textos, les fotografies, les il·lustracions i els logotips d’aquest web pertanyen a l’associació o als seus autors i no es poden reutilitzar sense permís. Els vídeos incrustats pertanyen a qui els ha publicat i s’ofereixen a través de YouTube. Si ets l’autor o l’autora d’algun contingut i creus que no s’hi hauria de publicar, escriu-nos i el retirarem.',
          ],
        },
        {
          heading: 'Enllaços a tercers',
          blocks: [
            'Aquest web enllaça a serveis d’altres empreses (Instagram, TikTok, YouTube, Gmail i Google Maps). L’associació no és responsable dels seus continguts ni de les seves polítiques.',
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
            'Aquestes condicions s’apliquen al marxandatge de la colla que es mostra en aquest web (samarretes, mocadors, gots i bosses), que ven l’associació.',
          ],
        },
        {
          heading: 'Com es fa una comanda',
          blocks: [
            `Escriu-nos ${write} amb el producte, la talla i la quantitat que vols. Abans de tancar la comanda et confirmarem la disponibilitat, el preu total i com es fan el pagament i el lliurament. La comanda queda feta quan tots dos ho confirmem per escrit.`,
          ],
        },
        {
          heading: 'Preus',
          blocks: [
            'Els preus són en euros i són finals: inclouen tots els impostos aplicables. Les despeses d’enviament, si cal enviar la comanda, no hi estan incloses: te les direm abans de confirmar-la.',
          ],
        },
        {
          heading: 'Dret de desistiment',
          blocks: [
            `Si compres com a consumidor, tens 14 dies naturals des que reps el producte per desistir de la compra sense haver de donar cap explicació. N’hi ha prou amb dir-nos-ho dins d’aquest termini ${write}. Si vols, pots fer servir aquest model: «Comunico que desisteixo de la compra de [producte], rebut el [data]. [Nom i cognoms, data]».`,
            'Et retornarem tot el que hagis pagat, incloses les despeses d’enviament inicials si n’hi va haver, pel mateix mitjà de pagament i en un màxim de 14 dies, tot i que podem esperar a rebre el producte. Les despeses de tornar-lo són a càrrec teu, i només respons de la pèrdua de valor si el producte s’ha fet servir més enllà del que cal per provar-lo.',
          ],
        },
        {
          heading: 'Garantia',
          blocks: [
            'Tots els productes tenen la garantia legal de conformitat de 3 anys. Si algun té un defecte, escriu-nos: el repararem, te’l canviarem o, si no és possible, et retornarem l’import.',
          ],
        },
        {
          heading: 'Queixes',
          blocks: [
            'Si tens qualsevol queixa, escriu-nos i mirarem de resoldre-la. També pots adreçar-te a l’oficina d’informació al consumidor del teu municipi (OMIC) o a l’Agència Catalana del Consum (consum.gencat.cat).',
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
              `Contacte. Aquest web no té formularis ni recull dades personals directament. Si ens escrius ${write}, fem servir les teves dades (el nom, el contacte i el que ens expliquis) només per respondre’t i gestionar el que ens demanis: una contractació, una comanda o unir-te a la colla. Base legal: la teva sol·licitud i, si n’hi ha, el contracte (art. 6.1.b del RGPD). Si tens menys de 14 anys, cal que ens escrigui el teu pare, mare o tutor.`,
              f.analytics &&
                'Analítica, només si l’acceptes. Fem servir Google Analytics 4 per saber quantes visites tenim, d’on arriben i quins botons es premen (per exemple, si interessa més contractar-nos o unir-se a la colla). Recull identificadors desats en galetes, dades del dispositiu i del navegador, la ubicació aproximada i les pàgines i botons que es fan servir. No hi enviem el teu nom ni cap dada de contacte. Base legal: el teu consentiment (art. 6.1.a del RGPD), que pots retirar quan vulguis des de «Configuració de galetes», al peu de pàgina.',
              'Allotjament. El web s’allotja a GitHub Pages (GitHub, Inc.), que per raons tècniques i de seguretat registra l’adreça IP de qui el visita. L’associació no té accés a aquests registres.',
              'Vídeos. Les miniatures dels vídeos se serveixen des d’aquest mateix web, sense connectar amb YouTube. El reproductor només es carrega si prems el botó de reproducció: aleshores el navegador es connecta amb YouTube (Google Ireland Limited) en el seu mode de privadesa millorada (youtube-nocookie.com), i YouTube rep la teva adreça IP i pot desar dades al navegador. Base legal: el teu consentiment, que dones en prémer el botó (art. 6.1.a del RGPD).',
              'Fotografies. Publiquem fotos de les nostres actuacions per donar a conèixer l’activitat de la colla. Base legal: el consentiment dels membres que hi surten i, per al públic que hi pugui aparèixer de manera secundària en actes públics, l’interès legítim de l’associació a difondre la seva activitat (art. 6.1.a i 6.1.f del RGPD). Si surts en alguna imatge i vols que la retirem, escriu-nos i ho farem.',
            ]),
          ],
        },
        {
          heading: 'Amb qui es comparteixen',
          blocks: [
            `Només amb els serveis que fem servir per funcionar: GitHub, Inc. (allotjament del web)${f.email ? ', Google (Gmail, on rebem el correu)' : ''}${f.analytics ? ', Google Ireland Limited (Google Analytics, si acceptes l’analítica)' : ''} i, si ens escrius per Instagram, Meta, que hi aplica la seva pròpia política. Alguns d’aquests serveis poden tractar dades als Estats Units, amb les garanties del Marc de Privadesa de Dades UE-EUA o de clàusules contractuals tipus. No venem ni cedim dades a ningú més.`,
          ],
        },
        {
          heading: 'Quant de temps es conserven',
          blocks: [
            compact([
              'Els missatges, el temps necessari per atendre’t. Si hi ha una comanda o una contractació, les dades necessàries es guarden durant els terminis que exigeix la llei (per exemple, la fiscal i la comptable).',
              f.analytics && 'Les dades d’analítica, un màxim de 14 mesos.',
              'Les fotografies, mentre siguin al web o fins que ens demanis que les retirem.',
            ]).join(' '),
          ],
        },
        {
          heading: 'Els teus drets',
          blocks: [
            `Pots demanar l’accés a les teves dades, que es rectifiquin o se suprimeixin, oposar-te al tractament o limitar-lo, demanar-ne la portabilitat i retirar el consentiment que hagis donat. Escriu-nos per ${contact} o per correu postal a l’adreça de l’associació. Si creus que no hem atès bé la teva petició, pots reclamar davant l’Agència Espanyola de Protecció de Dades (www.aepd.es).`,
            'No prenem decisions automatitzades ni fem perfils amb les teves dades.',
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
              'De tercers, només si prems play. Si reprodueixes un vídeo, el reproductor de YouTube (Google) desa les seves pròpies dades al navegador (galetes i emmagatzematge local) per funcionar, recordar les preferències del reproductor i comptar reproduccions. Les detalla la política de privadesa de Google (policies.google.com/privacy).',
            ]),
          ],
        },
        {
          heading: 'Com canviar la teva decisió',
          blocks: [
            f.analytics
              ? 'Pots acceptar o rebutjar les galetes d’analítica en qualsevol moment des de «Configuració de galetes», al peu de pàgina. Aquestes galetes i les de YouTube també les pots esborrar o bloquejar des de la configuració del teu navegador.'
              : 'Aquest web no fa servir galetes d’analítica ni de publicitat, i el reproductor de YouTube només desa dades si el fas servir. Pots esborrar o bloquejar qualsevol galeta des de la configuració del teu navegador.',
          ],
        },
      ],
    },
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
          heading: 'Pedidos y contratación',
          blocks: [
            'Esta web no es una tienda en línea: en ella no se hacen pedidos ni pagos. Los pedidos de merchandising se hacen por mensaje y se rigen por las condiciones de compra que encontrarás más abajo. Las actuaciones se contratan por mensaje, y las condiciones de cada una se acuerdan por escrito con la asociación antes de la actuación.',
          ],
        },
        {
          heading: 'Propiedad intelectual',
          blocks: [
            'Los textos, las fotografías, las ilustraciones y los logotipos de esta web pertenecen a la asociación o a sus autores y no pueden reutilizarse sin permiso. Los vídeos incrustados pertenecen a quien los ha publicado y se ofrecen a través de YouTube. Si eres autor o autora de algún contenido y crees que no debería publicarse aquí, escríbenos y lo retiraremos.',
          ],
        },
        {
          heading: 'Enlaces a terceros',
          blocks: [
            'Esta web enlaza a servicios de otras empresas (Instagram, TikTok, YouTube, Gmail y Google Maps). La asociación no es responsable de sus contenidos ni de sus políticas.',
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
            'Estas condiciones se aplican al merchandising de la colla que se muestra en esta web (camisetas, pañuelos, vasos y bolsas), que vende la asociación.',
          ],
        },
        {
          heading: 'Cómo se hace un pedido',
          blocks: [
            `Escríbenos ${write} con el producto, la talla y la cantidad que quieres. Antes de cerrar el pedido te confirmaremos la disponibilidad, el precio total y cómo se hacen el pago y la entrega. El pedido queda hecho cuando ambas partes lo confirmamos por escrito.`,
          ],
        },
        {
          heading: 'Precios',
          blocks: [
            'Los precios están en euros y son finales: incluyen todos los impuestos aplicables. Los gastos de envío, si hay que enviar el pedido, no están incluidos: te los diremos antes de confirmarlo.',
          ],
        },
        {
          heading: 'Derecho de desistimiento',
          blocks: [
            `Si compras como consumidor, tienes 14 días naturales desde que recibes el producto para desistir de la compra sin tener que dar ninguna explicación. Basta con decírnoslo dentro de ese plazo ${write}. Si quieres, puedes usar este modelo: «Comunico que desisto de la compra de [producto], recibido el [fecha]. [Nombre y apellidos, fecha]».`,
            'Te devolveremos todo lo que hayas pagado, incluidos los gastos de envío iniciales si los hubo, por el mismo medio de pago y en un máximo de 14 días, aunque podemos esperar a recibir el producto. Los gastos de devolución corren de tu cuenta, y solo respondes de la pérdida de valor si el producto se ha usado más de lo necesario para probarlo.',
          ],
        },
        {
          heading: 'Garantía',
          blocks: [
            'Todos los productos tienen la garantía legal de conformidad de 3 años. Si alguno tiene un defecto, escríbenos: lo repararemos, te lo cambiaremos o, si no es posible, te devolveremos el importe.',
          ],
        },
        {
          heading: 'Quejas',
          blocks: [
            'Si tienes cualquier queja, escríbenos e intentaremos resolverla. También puedes dirigirte a la oficina de información al consumidor de tu municipio (OMIC) o a la Agència Catalana del Consum (consum.gencat.cat).',
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
              `Contacto. Esta web no tiene formularios ni recoge datos personales directamente. Si nos escribes ${write}, usamos tus datos (el nombre, el contacto y lo que nos cuentes) solo para responderte y gestionar lo que nos pidas: una contratación, un pedido o unirte a la colla. Base legal: tu solicitud y, si lo hay, el contrato (art. 6.1.b del RGPD). Si tienes menos de 14 años, es necesario que nos escriba tu padre, madre o tutor.`,
              f.analytics &&
                'Analítica, solo si la aceptas. Usamos Google Analytics 4 para saber cuántas visitas tenemos, de dónde llegan y qué botones se pulsan (por ejemplo, si interesa más contratarnos o unirse a la colla). Recoge identificadores guardados en cookies, datos del dispositivo y del navegador, la ubicación aproximada y las páginas y botones que se usan. No enviamos tu nombre ni ningún dato de contacto. Base legal: tu consentimiento (art. 6.1.a del RGPD), que puedes retirar cuando quieras desde «Configuración de cookies», en el pie de página.',
              'Alojamiento. La web se aloja en GitHub Pages (GitHub, Inc.), que por razones técnicas y de seguridad registra la dirección IP de quien la visita. La asociación no tiene acceso a esos registros.',
              'Vídeos. Las miniaturas de los vídeos se sirven desde esta misma web, sin conectar con YouTube. El reproductor solo se carga si pulsas el botón de reproducción: entonces el navegador se conecta con YouTube (Google Ireland Limited) en su modo de privacidad mejorada (youtube-nocookie.com), y YouTube recibe tu dirección IP y puede guardar datos en el navegador. Base legal: tu consentimiento, que das al pulsar el botón (art. 6.1.a del RGPD).',
              'Fotografías. Publicamos fotos de nuestras actuaciones para dar a conocer la actividad de la colla. Base legal: el consentimiento de los miembros que salen en ellas y, para el público que pueda aparecer de forma secundaria en actos públicos, el interés legítimo de la asociación en difundir su actividad (art. 6.1.a y 6.1.f del RGPD). Si sales en alguna imagen y quieres que la retiremos, escríbenos y lo haremos.',
            ]),
          ],
        },
        {
          heading: 'Con quién se comparten',
          blocks: [
            `Solo con los servicios que usamos para funcionar: GitHub, Inc. (alojamiento de la web)${f.email ? ', Google (Gmail, donde recibimos el correo)' : ''}${f.analytics ? ', Google Ireland Limited (Google Analytics, si aceptas la analítica)' : ''} y, si nos escribes por Instagram, Meta, que aplica allí su propia política. Algunos de estos servicios pueden tratar datos en Estados Unidos, con las garantías del Marco de Privacidad de Datos UE-EE. UU. o de cláusulas contractuales tipo. No vendemos ni cedemos datos a nadie más.`,
          ],
        },
        {
          heading: 'Cuánto tiempo se conservan',
          blocks: [
            compact([
              'Los mensajes, el tiempo necesario para atenderte. Si hay un pedido o una contratación, los datos necesarios se guardan durante los plazos que exige la ley (por ejemplo, la fiscal y la contable).',
              f.analytics && 'Los datos de analítica, un máximo de 14 meses.',
              'Las fotografías, mientras estén en la web o hasta que nos pidas que las retiremos.',
            ]).join(' '),
          ],
        },
        {
          heading: 'Tus derechos',
          blocks: [
            `Puedes pedir el acceso a tus datos, que se rectifiquen o se supriman, oponerte al tratamiento o limitarlo, pedir su portabilidad y retirar el consentimiento que hayas dado. Escríbenos por ${contact} o por correo postal a la dirección de la asociación. Si crees que no hemos atendido bien tu petición, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).`,
            'No tomamos decisiones automatizadas ni hacemos perfiles con tus datos.',
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
              'De terceros, solo si pulsas play. Si reproduces un vídeo, el reproductor de YouTube (Google) guarda sus propios datos en el navegador (cookies y almacenamiento local) para funcionar, recordar las preferencias del reproductor y contar reproducciones. Los detalla la política de privacidad de Google (policies.google.com/privacy).',
            ]),
          ],
        },
        {
          heading: 'Cómo cambiar tu decisión',
          blocks: [
            f.analytics
              ? 'Puedes aceptar o rechazar las cookies de analítica en cualquier momento desde «Configuración de cookies», en el pie de página. Estas cookies y las de YouTube también puedes borrarlas o bloquearlas desde la configuración de tu navegador.'
              : 'Esta web no usa cookies de analítica ni de publicidad, y el reproductor de YouTube solo guarda datos si lo usas. Puedes borrar o bloquear cualquier cookie desde la configuración de tu navegador.',
          ],
        },
      ],
    },
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
          heading: 'Orders and bookings',
          blocks: [
            'This website is not an online shop: no orders or payments are made on it. Merchandise orders are placed by message and are governed by the purchase terms below. Performances are booked by message, and the terms of each one are agreed in writing with the association beforehand.',
          ],
        },
        {
          heading: 'Intellectual property',
          blocks: [
            'The texts, photographs, illustrations and logos on this website belong to the association or to their authors and may not be reused without permission. Embedded videos belong to whoever published them and are provided through YouTube. If you are the author of any content and believe it should not be published here, write to us and we will take it down.',
          ],
        },
        {
          heading: 'Third-party links',
          blocks: [
            'This website links to services run by other companies (Instagram, TikTok, YouTube, Gmail and Google Maps). The association is not responsible for their content or their policies.',
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
            'These terms apply to the crew merchandise shown on this website (T-shirts, neckerchiefs, cups and bags), which is sold by the association.',
          ],
        },
        {
          heading: 'How to order',
          blocks: [
            `Write to us ${write} with the product, size and quantity you want. Before closing the order we will confirm availability, the total price and how payment and delivery work. The order is placed once we have both confirmed it in writing.`,
          ],
        },
        {
          heading: 'Prices',
          blocks: [
            'Prices are in euros and are final: they include all applicable taxes. Shipping costs, if your order needs to be sent, are not included: we will tell you what they are before confirming it.',
          ],
        },
        {
          heading: 'Right of withdrawal',
          blocks: [
            `If you buy as a consumer, you have 14 calendar days from receiving the product to withdraw from the purchase without giving any reason. Just tell us ${write} within that period. If you like, you can use this template: “I hereby withdraw from the purchase of [product], received on [date]. [Full name, date]”.`,
            'We will refund everything you paid, including the original shipping costs if there were any, using the same payment method and within 14 days at most, although we may wait until we receive the product back. Return costs are on you, and you are only liable for any loss in value if the product has been used beyond what is needed to try it.',
          ],
        },
        {
          heading: 'Guarantee',
          blocks: [
            'All products come with the 3-year legal guarantee of conformity. If anything is faulty, write to us: we will repair it, replace it or, if that is not possible, refund you.',
          ],
        },
        {
          heading: 'Complaints',
          blocks: [
            'If you have any complaint, write to us and we will try to sort it out. You can also contact your local consumer information office (OMIC) or the Catalan Consumer Agency (Agència Catalana del Consum, consum.gencat.cat).',
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
              `Contact. This website has no forms and does not collect personal data directly. If you write to us ${write}, we use your details (your name, contact details and whatever you tell us) only to reply and to handle what you ask for: a booking, an order or joining the group. Legal basis: your request and, where there is one, the contract (Art. 6(1)(b) GDPR). If you are under 14, your parent or guardian needs to write to us.`,
              f.analytics &&
                'Analytics, only if you accept. We use Google Analytics 4 to learn how many visits we get, where they come from and which buttons are pressed (for example, whether people are more interested in booking us or in joining). It collects identifiers stored in cookies, device and browser data, approximate location, and the pages and buttons used. We never send your name or any contact details. Legal basis: your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time from “Cookie settings” in the footer.',
              'Hosting. The website is hosted on GitHub Pages (GitHub, Inc.), which logs visitors’ IP addresses for technical and security reasons. The association has no access to those logs.',
              'Videos. Video thumbnails are served from this website itself, without connecting to YouTube. The player only loads if you press play: your browser then connects to YouTube (Google Ireland Limited) in its privacy-enhanced mode (youtube-nocookie.com), and YouTube receives your IP address and may store data in your browser. Legal basis: your consent, given by pressing the button (Art. 6(1)(a) GDPR).',
              'Photographs. We publish photos of our performances to show what the group does. Legal basis: the consent of the members who appear in them and, for members of the public who may appear incidentally at public events, the association’s legitimate interest in sharing its activities (Art. 6(1)(a) and 6(1)(f) GDPR). If you are in a picture and would like it removed, write to us and we will take it down.',
            ]),
          ],
        },
        {
          heading: 'Who it is shared with',
          blocks: [
            `Only with the services we use to operate: GitHub, Inc. (website hosting)${f.email ? ', Google (Gmail, where we receive email)' : ''}${f.analytics ? ', Google Ireland Limited (Google Analytics, if you accept analytics)' : ''} and, if you write to us on Instagram, Meta, which applies its own policy there. Some of these services may process data in the United States, under the EU-U.S. Data Privacy Framework or standard contractual clauses. We do not sell or pass data to anyone else.`,
          ],
        },
        {
          heading: 'How long it is kept',
          blocks: [
            compact([
              'Messages, for as long as needed to deal with your request. If there is an order or a booking, the necessary data is kept for the periods required by law (for example, tax and accounting rules).',
              f.analytics && 'Analytics data, for a maximum of 14 months.',
              'Photographs, while they are on the website or until you ask us to remove them.',
            ]).join(' '),
          ],
        },
        {
          heading: 'Your rights',
          blocks: [
            `You can ask to access your data, have it corrected or deleted, object to or restrict its processing, request its portability and withdraw any consent you have given. Write to us via ${contact} or by post to the association’s address. If you feel your request has not been handled properly, you can lodge a complaint with the Spanish Data Protection Agency (www.aepd.es).`,
            'We do not make automated decisions or build profiles with your data.',
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
              'Third party, only if you press play. If you play a video, the YouTube (Google) player stores its own data in your browser (cookies and local storage) to work, remember player preferences and count views. Google’s privacy policy describes them (policies.google.com/privacy).',
            ]),
          ],
        },
        {
          heading: 'How to change your choice',
          blocks: [
            f.analytics
              ? 'You can accept or reject analytics cookies at any time from “Cookie settings” in the footer. You can also delete or block these and YouTube’s cookies in your browser settings.'
              : 'This website uses no analytics or advertising cookies, and the YouTube player only stores data if you use it. You can delete or block any cookie in your browser settings.',
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
