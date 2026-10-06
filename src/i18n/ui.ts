// Textos de la web en los tres idiomas.
// El català es el idioma por defecto y define la forma del diccionario:
// si falta una clave en castellano o inglés, TypeScript avisa.
//
// OJO: salvo el lema, el año de fundación y los nombres de los actos, los
// textos son una propuesta de redacción pendiente de revisar por la colla
// (descripciones de los actos, instrumentos, historia…).

export const languages = {
  ca: { code: 'CA', name: 'Català', htmlLang: 'ca', ogLocale: 'ca_ES' },
  es: { code: 'ES', name: 'Castellano', htmlLang: 'es', ogLocale: 'es_ES' },
  en: { code: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ca';

const ca = {
  meta: {
    title: 'Drakaris · Colla de percussió de Sant Feliu de Llobregat',
    description:
      "Drakaris és la colla de percussió de Sant Feliu de Llobregat. Des del 2013 portem el rakatà a cercaviles, festes majors i actes propis. Contracta'ns o vine a tocar.",
  },
  a11y: {
    skip: 'Salta al contingut',
    home: 'Drakaris, inici',
    mainNav: 'Navegació principal',
    menuOpen: 'Obre el menú',
    menuClose: 'Tanca el menú',
    language: 'Idioma',
    newTab: "s'obre en una pestanya nova",
    backTop: 'Torna a dalt',
  },
  nav: {
    about: 'Qui som',
    events: 'Actes',
    agenda: 'Agenda',
    gallery: 'Galeria',
    shop: 'Botiga',
    contact: 'Contacte',
    cta: "Contracta'ns",
  },
  hero: {
    eyebrow: 'Colla de percussió · Sant Feliu de Llobregat',
    // Tres líneas; la palabra «rakatà» se pinta en verde.
    // La «À» va en una línea sin letras justo encima para que el acento no choque.
    title: ['Tenim', 'el rakatà', 'que busques'],
    lead: 'Som Drakaris. Des del 2013 fem tremolar carrers, places i festes majors a cop de tambor.',
    primary: "Contracta'ns",
    secondary: 'Vine a tocar',
    drum: 'Pica el tambor',
    drumAlt: "Logotip de Drakaris: un tambor verd amb una urpa i una cua de drac",
  },
  marquee: ['Percussió', 'Cercaviles', 'Festes majors', 'Rakatà', 'Sant Feliu de Llobregat', 'Des del 2013'],
  about: {
    label: 'Qui som',
    title: 'Un drac que batega a ritme de tambor.',
    body: [
      'Drakaris neix el 2013 a Sant Feliu de Llobregat amb una idea ben senzilla: sortir al carrer i fer soroll plegats. De llavors ençà, el verd i el negre ens acompanyen allà on anem.',
      'Som una colla oberta: aquí no es demana currículum, es demanen ganes. El ritme ja el posem entre tots.',
    ],
    logoAlt: 'Escut de Drakaris: un drac blanc i verd que es mossega la cua',
    timelineLabel: 'Història',
    timeline: [
      {
        title: 'Neix el drac',
        text: 'La colla arrenca a Sant Feliu de Llobregat amb pocs tambors i moltes ganes de carrer.',
      },
      {
        title: 'Deu anys de rakatà',
        text: 'Bufem deu espelmes i ho celebrem com sabem: fent soroll.',
      },
      {
        title: 'I seguim picant',
        text: "Assaigs, cercaviles i actes propis durant tot l'any. El següent pot ser amb tu.",
      },
    ],
  },
  sound: {
    label: 'El so',
    title: 'Així sona el drac.',
    lead: 'Cada instrument hi diu la seva. Junts fem el rakatà.',
    alt: 'Il·lustració dels instruments de la colla',
    items: [
      { name: 'Surdo', text: 'El batec. Greu i rodó, el que et ressona al pit.' },
      { name: 'Caixa', text: 'El nervi. Manté el ritme viu de principi a fi.' },
      { name: 'Repinic', text: 'La veu que crida i marca les entrades.' },
      { name: 'Tamborim', text: 'Petit, agut i descarat.' },
      { name: 'Xocalho', text: 'La brillantor que ho lliga tot.' },
      { name: 'Xiulet', text: 'Qui mana. Un toc i tothom a lloc.' },
    ],
  },
  events: {
    label: 'Els nostres actes',
    title: 'Tres cites marcades en verd.',
    items: [
      {
        name: 'La Drakafesta',
        tag: 'Festa',
        text: 'La nostra festa gran. Colles convidades, música i percussió fins que el cos digui prou.',
      },
      {
        name: 'El Korrebars',
        tag: 'Ruta',
        text: 'Ruta de bar en bar amb els tambors al coll. Tu hi poses la set; nosaltres, el ritme.',
      },
      {
        name: 'La Festa de Tardor',
        tag: 'Tardor',
        text: 'Quan Sant Feliu celebra la tardor, nosaltres hi posem la banda sonora.',
      },
    ],
  },
  agenda: {
    label: 'Agenda',
    title: 'Pròximes actuacions.',
    follow: 'Totes les novetats, a Instagram',
    empty:
      "Ara mateix no tenim cap data anunciada. Segueix-nos a Instagram i te n'assabentaràs abans que ningú.",
  },
  join: {
    label: 'Uneix-te',
    title: 'Vols tocar amb nosaltres?',
    text: "No cal experiència ni instrument. Vine a un assaig, prova-ho i decideix: t'ensenyem des de zero.",
    cta: 'Escriu-nos per Instagram',
    alt: 'Il·lustració «Tenim el rakatà que busques» amb la silueta d\'un drac',
  },
  gallery: {
    label: 'Galeria',
    title: 'El rakatà, en imatges.',
    cta: "Veure'n més a Instagram",
    alt: 'Drakaris',
  },
  shop: {
    label: 'Botiga',
    title: 'Vesteix el drac.',
    text: 'Samarretes de la colla. Les comandes es fan per missatge directe a Instagram.',
    order: 'Demana-la per Instagram',
    orderShort: 'Demana-la',
    products: {
      rakata: 'Samarreta Rakatà',
      dragon: 'Samarreta Drac',
      drum: 'Samarreta Tambor',
      anniversary: 'Samarreta 10è aniversari',
    },
  },
  booking: {
    label: 'Contractació',
    title: 'Posa un drac a la teva festa.',
    text: "Festes majors, cercaviles, inauguracions, casaments… Explica'ns què tens al cap i et direm com ho fem sonar.",
    primary: 'Escriu-nos per Instagram',
    email: "Envia'ns un correu",
    posterAlt: 'Cartell de Drakaris: un drac enroscat entre tambors, «Since 2013, Sant Feliu de Llobregat»',
  },
  footer: {
    tagline: 'Colla de percussió de Sant Feliu de Llobregat. Des del 2013.',
    sections: 'Seccions',
    social: 'Xarxes',
    rights: 'Tots els drets reservats.',
  },
};

export type Dictionary = typeof ca;

const es: Dictionary = {
  meta: {
    title: 'Drakaris · Colla de percusión de Sant Feliu de Llobregat',
    description:
      'Drakaris es la colla de percusión de Sant Feliu de Llobregat. Desde 2013 llevamos el rakatà a pasacalles, fiestas mayores y actos propios. Contrátanos o ven a tocar.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    home: 'Drakaris, inicio',
    mainNav: 'Navegación principal',
    menuOpen: 'Abrir el menú',
    menuClose: 'Cerrar el menú',
    language: 'Idioma',
    newTab: 'se abre en una pestaña nueva',
    backTop: 'Volver arriba',
  },
  nav: {
    about: 'Quiénes somos',
    events: 'Actos',
    agenda: 'Agenda',
    gallery: 'Galería',
    shop: 'Tienda',
    contact: 'Contacto',
    cta: 'Contrátanos',
  },
  hero: {
    eyebrow: 'Colla de percusión · Sant Feliu de Llobregat',
    title: ['Tenemos', 'el rakatà', 'que buscas'],
    lead: 'Somos Drakaris. Desde 2013 hacemos temblar calles, plazas y fiestas mayores a golpe de tambor.',
    primary: 'Contrátanos',
    secondary: 'Ven a tocar',
    drum: 'Dale al tambor',
    drumAlt: 'Logotipo de Drakaris: un tambor verde con una garra y una cola de dragón',
  },
  marquee: ['Percusión', 'Pasacalles', 'Fiestas mayores', 'Rakatà', 'Sant Feliu de Llobregat', 'Desde 2013'],
  about: {
    label: 'Quiénes somos',
    title: 'Un dragón que late a ritmo de tambor.',
    body: [
      'Drakaris nace en 2013 en Sant Feliu de Llobregat con una idea muy sencilla: salir a la calle y hacer ruido juntos. Desde entonces, el verde y el negro nos acompañan allá donde vamos.',
      'Somos una colla abierta: aquí no se pide currículum, se piden ganas. El ritmo ya lo ponemos entre todos.',
    ],
    logoAlt: 'Escudo de Drakaris: un dragón blanco y verde que se muerde la cola',
    timelineLabel: 'Historia',
    timeline: [
      {
        title: 'Nace el dragón',
        text: 'La colla arranca en Sant Feliu de Llobregat con pocos tambores y muchas ganas de calle.',
      },
      {
        title: 'Diez años de rakatà',
        text: 'Soplamos diez velas y lo celebramos como sabemos: haciendo ruido.',
      },
      {
        title: 'Y seguimos dándole',
        text: 'Ensayos, pasacalles y actos propios durante todo el año. El próximo puede ser contigo.',
      },
    ],
  },
  sound: {
    label: 'El sonido',
    title: 'Así suena el dragón.',
    lead: 'Cada instrumento dice la suya. Juntos hacemos el rakatà.',
    alt: 'Ilustración de los instrumentos de la colla',
    items: [
      { name: 'Surdo', text: 'El latido. Grave y redondo, el que te resuena en el pecho.' },
      { name: 'Caja', text: 'El nervio. Mantiene el ritmo vivo de principio a fin.' },
      { name: 'Repique', text: 'La voz que grita y marca las entradas.' },
      { name: 'Tamborim', text: 'Pequeño, agudo y descarado.' },
      { name: 'Chocalho', text: 'El brillo que lo une todo.' },
      { name: 'Silbato', text: 'El que manda. Un toque y todo el mundo en su sitio.' },
    ],
  },
  events: {
    label: 'Nuestros actos',
    title: 'Tres citas marcadas en verde.',
    items: [
      {
        name: 'La Drakafesta',
        tag: 'Fiesta',
        text: 'Nuestra fiesta grande. Collas invitadas, música y percusión hasta que el cuerpo diga basta.',
      },
      {
        name: 'El Korrebars',
        tag: 'Ruta',
        text: 'Ruta de bar en bar con los tambores al cuello. Tú pones la sed; nosotros, el ritmo.',
      },
      {
        name: 'La Festa de Tardor',
        tag: 'Otoño',
        text: 'Cuando Sant Feliu celebra el otoño, nosotros ponemos la banda sonora.',
      },
    ],
  },
  agenda: {
    label: 'Agenda',
    title: 'Próximas actuaciones.',
    follow: 'Todas las novedades, en Instagram',
    empty: 'Ahora mismo no tenemos ninguna fecha anunciada. Síguenos en Instagram y te enterarás antes que nadie.',
  },
  join: {
    label: 'Únete',
    title: '¿Quieres tocar con nosotros?',
    text: 'No hace falta experiencia ni instrumento. Ven a un ensayo, pruébalo y decide: te enseñamos desde cero.',
    cta: 'Escríbenos por Instagram',
    alt: 'Ilustración «Tenim el rakatà que busques» con la silueta de un dragón',
  },
  gallery: {
    label: 'Galería',
    title: 'El rakatà, en imágenes.',
    cta: 'Ver más en Instagram',
    alt: 'Drakaris',
  },
  shop: {
    label: 'Tienda',
    title: 'Viste al dragón.',
    text: 'Camisetas de la colla. Los pedidos se hacen por mensaje directo en Instagram.',
    order: 'Pídela por Instagram',
    orderShort: 'Pídela',
    products: {
      rakata: 'Camiseta Rakatà',
      dragon: 'Camiseta Dragón',
      drum: 'Camiseta Tambor',
      anniversary: 'Camiseta 10.º aniversario',
    },
  },
  booking: {
    label: 'Contratación',
    title: 'Pon un dragón en tu fiesta.',
    text: 'Fiestas mayores, pasacalles, inauguraciones, bodas… Cuéntanos qué tienes en mente y te diremos cómo lo hacemos sonar.',
    primary: 'Escríbenos por Instagram',
    email: 'Envíanos un correo',
    posterAlt: 'Cartel de Drakaris: un dragón enroscado entre tambores, «Since 2013, Sant Feliu de Llobregat»',
  },
  footer: {
    tagline: 'Colla de percusión de Sant Feliu de Llobregat. Desde 2013.',
    sections: 'Secciones',
    social: 'Redes',
    rights: 'Todos los derechos reservados.',
  },
};

const en: Dictionary = {
  meta: {
    title: 'Drakaris · Percussion crew from Sant Feliu de Llobregat',
    description:
      'Drakaris is the percussion crew from Sant Feliu de Llobregat, Barcelona. Since 2013 we have brought the rakatà to street parades, town festivals and our own events. Book us or come and play.',
  },
  a11y: {
    skip: 'Skip to content',
    home: 'Drakaris, home',
    mainNav: 'Main navigation',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    language: 'Language',
    newTab: 'opens in a new tab',
    backTop: 'Back to top',
  },
  nav: {
    about: 'About',
    events: 'Events',
    agenda: 'Dates',
    gallery: 'Gallery',
    shop: 'Shop',
    contact: 'Contact',
    cta: 'Book us',
  },
  hero: {
    eyebrow: 'Percussion crew · Sant Feliu de Llobregat',
    title: ["We've got", 'the rakatà', "you're after"],
    lead: "We are Drakaris. Since 2013 we've been shaking streets, squares and town festivals, one drum hit at a time.",
    primary: 'Book us',
    secondary: 'Come and play',
    drum: 'Hit the drum',
    drumAlt: "Drakaris logo: a green drum with a dragon's claw and tail",
  },
  marquee: ['Percussion', 'Street parades', 'Town festivals', 'Rakatà', 'Sant Feliu de Llobregat', 'Since 2013'],
  about: {
    label: 'About us',
    title: 'A dragon with a drum for a heartbeat.',
    body: [
      'Drakaris was born in 2013 in Sant Feliu de Llobregat, just outside Barcelona, with one simple idea: take to the streets and make noise together. Green and black have followed us everywhere since.',
      "We're an open crew: nobody asks for a CV here, just the will to play. The rhythm is something we build together.",
    ],
    logoAlt: 'Drakaris crest: a white and green dragon biting its own tail',
    timelineLabel: 'History',
    timeline: [
      {
        title: 'The dragon hatches',
        text: 'The crew starts out in Sant Feliu de Llobregat with a few drums and a big appetite for the street.',
      },
      {
        title: 'Ten years of rakatà',
        text: 'We blow out ten candles and celebrate the way we know best: loudly.',
      },
      {
        title: 'Still drumming',
        text: 'Rehearsals, parades and our own events all year round. The next one could be with you.',
      },
    ],
  },
  sound: {
    label: 'The sound',
    title: 'This is how the dragon sounds.',
    lead: 'Every instrument has its say. Together they make the rakatà.',
    alt: "Illustration of the crew's instruments",
    items: [
      { name: 'Surdo', text: 'The heartbeat. Deep and round, the one you feel in your chest.' },
      { name: 'Caixa', text: 'The nerve. A snare that keeps the groove alive from start to finish.' },
      { name: 'Repinique', text: 'The voice that calls out and cues every entrance.' },
      { name: 'Tamborim', text: 'Small, sharp and cheeky.' },
      { name: 'Chocalho', text: 'The shimmer that ties it all together.' },
      { name: 'Whistle', text: 'The boss. One blow and everyone falls into place.' },
    ],
  },
  events: {
    label: 'Our events',
    title: 'Three dates circled in green.',
    items: [
      {
        name: 'La Drakafesta',
        tag: 'Party',
        text: 'Our big night. Guest crews, live music and percussion until your body says stop.',
      },
      {
        name: 'El Korrebars',
        tag: 'Bar crawl',
        text: 'A bar-to-bar parade with the drums strapped on. You bring the thirst; we bring the beat.',
      },
      {
        name: 'La Festa de Tardor',
        tag: 'Autumn',
        text: 'When Sant Feliu celebrates autumn, we provide the soundtrack.',
      },
    ],
  },
  agenda: {
    label: 'Dates',
    title: 'Upcoming gigs.',
    follow: 'All the news, on Instagram',
    empty: "No dates announced right now. Follow us on Instagram and you'll be the first to know.",
  },
  join: {
    label: 'Join us',
    title: 'Want to play with us?',
    text: "No experience or instrument needed. Come to a rehearsal, give it a go and decide: we'll teach you from scratch.",
    cta: 'Message us on Instagram',
    alt: '"Tenim el rakatà que busques" illustration with a dragon silhouette',
  },
  gallery: {
    label: 'Gallery',
    title: 'The rakatà, in pictures.',
    cta: 'See more on Instagram',
    alt: 'Drakaris',
  },
  shop: {
    label: 'Shop',
    title: 'Wear the dragon.',
    text: 'Crew T-shirts. Orders are placed by direct message on Instagram.',
    order: 'Order on Instagram',
    orderShort: 'Order',
    products: {
      rakata: 'Rakatà T-shirt',
      dragon: 'Dragon T-shirt',
      drum: 'Drum T-shirt',
      anniversary: '10th anniversary T-shirt',
    },
  },
  booking: {
    label: 'Bookings',
    title: 'Put a dragon in your party.',
    text: "Town festivals, parades, openings, weddings… Tell us what you have in mind and we'll tell you how we make it sound.",
    primary: 'Message us on Instagram',
    email: 'Send us an email',
    posterAlt: 'Drakaris poster: a dragon coiled around drums, "Since 2013, Sant Feliu de Llobregat"',
  },
  footer: {
    tagline: 'Percussion crew from Sant Feliu de Llobregat. Since 2013.',
    sections: 'Sections',
    social: 'Social',
    rights: 'All rights reserved.',
  },
};

const dictionaries: Record<Lang, Dictionary> = { ca, es, en };

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}
