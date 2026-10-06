// Textos de la web en los tres idiomas.
// El català es el idioma por defecto y define la forma del diccionario:
// si falta una clave en castellano o inglés, TypeScript avisa.
//
// La historia, los instrumentos y los actos salen de lo que ha contado la
// colla. El resto del tono (hero, «Qui som», «Uneix-te», frases de cada
// instrumento) es redacción propuesta y se puede retocar aquí mismo.

export const languages = {
  ca: { code: 'CA', name: 'Català', htmlLang: 'ca', ogLocale: 'ca_ES' },
  es: { code: 'ES', name: 'Castellano', htmlLang: 'es', ogLocale: 'es_ES' },
  en: { code: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_GB' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ca';

const ca = {
  meta: {
    title: 'Drakaris Percussió',
    description:
      "Drakaris (DKS) és la colla de percussió de Sant Feliu de Llobregat. Des del 2013 portem el rakatà a cercaviles, correfocs, festes majors i actes propis. Contracta'ns o vine a tocar.",
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
    history: 'Història',
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
    drumAlt: 'Logotip de Drakaris: un tambor verd amb una urpa i una cua de drac',
  },
  marquee: ['Percussió', '08980', 'Cercaviles', 'DKS', 'Correfocs', 'Rakatà', 'Sant Feliu de Llobregat', 'Des del 2013'],
  about: {
    label: 'Qui som',
    title: 'Un drac que batega a ritme de tambor.',
    body: [
      'Drakaris neix el 2013 a Sant Feliu de Llobregat per acompanyar la bèstia de foc de la ciutat: el Drac de Sant Feliu. Des de llavors hem anat sumant gent, experiència i ritmes cada cop més potents i enèrgics.',
      'Per als amics, DKS. Som una colla oberta: aquí no es demana currículum, es demanen ganes.',
    ],
    logoAlt: 'Escut de Drakaris: un drac blanc i verd que es mossega la cua',
  },
  history: {
    label: 'Història',
    // {years} se sustituye por los años que lleva la colla
    title: '{years} anys fent soroll.',
    lead: 'De seguir el Drac de Sant Feliu pels carrers a pujar al podi.',
    // Un texto por hito, en el mismo orden que `milestones` en src/data/site.ts
    milestones: [
      {
        title: 'Neix la colla',
        text: 'Drakaris arrenca per acompanyar la bèstia de foc de la ciutat: el Drac de Sant Feliu. A poc a poc anem sent més.',
        badges: [] as string[],
        photoAlt: '',
      },
      {
        title: 'Un estadi i un primer títol',
        text: "Toquem a la inauguració de l'Estadi Johan Cruyff del FC Barcelona i quedem tercers a la Kabronada: el primer títol de Drakaris.",
        badges: ['3r · Kabronada'],
        photoAlt: "Drakaris tocant sota una pluja de confeti a la inauguració de l'Estadi Johan Cruyff",
      },
      {
        title: 'Rumb a Mallorca',
        text: 'Fem les maletes i toquem al Festival +KSamba de Mallorca: la primera i, fins ara, única vegada fora de Catalunya.',
        badges: [],
        photoAlt: 'La colla celebrant al carrer, a Mallorca, amb les baquetes enlaire',
      },
      {
        title: 'Deu anys i un concurs',
        text: "L'any del desè aniversari: torneig de pitxi intercolles, primer Korrebars, bingo de Drakaris i tercera Drakafesta. I, per rematar-ho, guanyem el Concurs de Percussió de Barcelona.",
        badges: ['1r · Concurs de Percussió de Barcelona'],
        photoAlt: "La colla a l'escenari del Concurs de Percussió de Barcelona del 2023",
      },
      {
        title: 'Doblet',
        text: 'Guanyem la Perculliga, la lliga de batucades de Catalunya, i el concurs de Diables Rojos.',
        badges: ['1r · Perculliga', '1r · Concurs Diables Rojos'],
        photoAlt: 'La colla celebra la victòria a la Perculliga 2024 amb la copa',
      },
      {
        title: 'I amb ganes de més',
        text: 'Tercers al Concurs de Percussió de Barcelona. I seguim amb ganes de més.',
        badges: ['3r · Concurs de Percussió de Barcelona'],
        photoAlt: 'La colla amb el trofeu de tercers classificats al Concurs de Percussió de Barcelona del 2026',
      },
    ],
  },
  sound: {
    label: 'El so',
    title: 'Així sona el drac.',
    lead: 'Cada instrument hi diu la seva. Junts fem el rakatà.',
    alt: 'Il·lustració dels instruments de la colla',
    // Los dos vídeos del concurso, bajo la lista de instrumentos
    live: {
      label: 'En directe',
      title: 'I tots junts sonen així.',
      event: 'Concurs de Percussió de Barcelona',
      rounds: { final: 'Final', semifinal: 'Semifinal' },
      play: 'Reprodueix el vídeo',
      credit: 'Vídeos de {author} a YouTube',
    },
    // Los seis instrumentos que toca la colla
    items: [
      { name: 'Surdo', text: 'El batec de la colla, en tres mides: 18, 20 i 22 polzades.' },
      { name: 'Caixa', text: 'El nervi. Manté el ritme viu de principi a fi.' },
      { name: 'Repenic', text: 'La veu que crida i marca les entrades.' },
      { name: 'Tamborí', text: 'Petit, agut i descarat.' },
      { name: 'Agogó', text: "Dues campanes i una melodia que s'enganxa." },
      { name: 'Xequeré o xocalho', text: 'La brillantor que ho lliga tot.' },
    ],
  },
  events: {
    label: 'Els nostres actes',
    title: 'Tres cites marcades en verd.',
    // Mismo orden que `events` en src/data/site.ts
    items: [
      {
        name: 'La Festa de Tardor',
        tags: ['Tardor', 'Sant Feliu de Llobregat'],
        text: 'Les festes del nostre poble, i les vivim des de dins, colze a colze amb la resta de colles de la ciutat. Seguici, correfocs, tabalades, cercaviles… Vaja, que no ens avorrim.',
        note: '08980: el codi postal que qualsevol santfeliuenc reconeix a la primera.',
        imageAlt: 'La colla amb mocadors vermells al coll el dia del correfoc',
      },
      {
        name: 'El Korrebars',
        tags: ['Revetlla de Sant Joan', '23 de juny'],
        text: "La tarda de la revetlla de Sant Joan, ruta de bar en bar per la ciutat per escalfar motors. Cervesa, música, pistoles d'aigua i pólvora per esprémer el dia més llarg de l'any. I acabem com toca: tocant.",
        note: '',
        imageAlt: 'Cartell del Korrebars 2026: 23 de juny, revetlla de Sant Joan, a Sant Feliu de Llobregat',
      },
      {
        name: 'La Drakafesta',
        tags: ['Cada 5 anys', '3a edició: 2023'],
        text: 'La festa pròpia de Drakaris. Cada cinc anys muntem una jornada envoltada de percussió i festa, hi convidem les colles amigues i ho rematem amb una festa nocturna.',
        note: '',
        imageAlt: 'Drakaris tocant de nit a la Drakafesta, sota llums verds',
      },
    ],
    // Acompaña al código postal en el estampado y gira alrededor del sello DKS
    stampLabel: "Denominació d'origen",
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
    alt: "Il·lustració «Tenim el rakatà que busques» amb la silueta d'un drac",
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
    text: 'Samarretes i gots de la colla. Les comandes es fan per missatge directe a Instagram.',
    order: 'Fes la comanda per Instagram',
    orderShort: 'Fes la comanda',
    products: {
      adult: "Samarreta d'adult",
      kids: 'Samarreta infantil',
      cup: 'Got de Drakaris',
    },
  },
  booking: {
    label: 'Contractació',
    title: 'Posa ritme a la teva festa.',
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
    title: 'Drakaris Percussió',
    description:
      'Drakaris (DKS) es la colla de percusión de Sant Feliu de Llobregat. Desde 2013 llevamos el rakatà a pasacalles, correfocs, fiestas mayores y actos propios. Contrátanos o ven a tocar.',
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
    history: 'Historia',
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
  marquee: ['Percusión', '08980', 'Pasacalles', 'DKS', 'Correfocs', 'Rakatà', 'Sant Feliu de Llobregat', 'Desde 2013'],
  about: {
    label: 'Quiénes somos',
    title: 'Un dragón que late a ritmo de tambor.',
    body: [
      'Drakaris nace en 2013 en Sant Feliu de Llobregat para acompañar a la bestia de fuego de la ciudad: el Drac de Sant Feliu. Desde entonces hemos ido sumando gente, experiencia y ritmos cada vez más potentes y enérgicos.',
      'Para los amigos, DKS. Somos una colla abierta: aquí no se pide currículum, se piden ganas.',
    ],
    logoAlt: 'Escudo de Drakaris: un dragón blanco y verde que se muerde la cola',
  },
  history: {
    label: 'Historia',
    title: '{years} años haciendo ruido.',
    lead: 'De seguir al Drac de Sant Feliu por las calles a subirnos al podio.',
    milestones: [
      {
        title: 'Nace la colla',
        text: 'Drakaris arranca para acompañar a la bestia de fuego de la ciudad: el Drac de Sant Feliu. Poco a poco vamos siendo más.',
        badges: [],
        photoAlt: '',
      },
      {
        title: 'Un estadio y un primer título',
        text: 'Tocamos en la inauguración del Estadi Johan Cruyff del FC Barcelona y quedamos terceros en la Kabronada: el primer título de Drakaris.',
        badges: ['3.º · Kabronada'],
        photoAlt: 'Drakaris tocando bajo una lluvia de confeti en la inauguración del Estadi Johan Cruyff',
      },
      {
        title: 'Rumbo a Mallorca',
        text: 'Hacemos las maletas y tocamos en el Festival +KSamba de Mallorca: la primera y, hasta ahora, única vez fuera de Catalunya.',
        badges: [],
        photoAlt: 'La colla celebrando en la calle, en Mallorca, con las baquetas en alto',
      },
      {
        title: 'Diez años y un concurso',
        text: 'El año del décimo aniversario: torneo de pitxi intercolles, primer Korrebars, bingo de Drakaris y tercera Drakafesta. Y, para rematar, ganamos el Concurs de Percussió de Barcelona.',
        badges: ['1.º · Concurs de Percussió de Barcelona'],
        photoAlt: 'La colla en el escenario del Concurs de Percussió de Barcelona de 2023',
      },
      {
        title: 'Doblete',
        text: 'Ganamos la Perculliga, la liga de batucadas de Catalunya, y el concurso de Diables Rojos.',
        badges: ['1.º · Perculliga', '1.º · Concurso Diables Rojos'],
        photoAlt: 'La colla celebra la victoria en la Perculliga 2024 con la copa',
      },
      {
        title: 'Y con ganas de más',
        text: 'Terceros en el Concurs de Percussió de Barcelona. Y seguimos con ganas de más.',
        badges: ['3.º · Concurs de Percussió de Barcelona'],
        photoAlt: 'La colla con el trofeo de terceros clasificados en el Concurs de Percussió de Barcelona de 2026',
      },
    ],
  },
  sound: {
    label: 'El sonido',
    title: 'Así suena el dragón.',
    lead: 'Cada instrumento dice la suya. Juntos hacemos el rakatà.',
    alt: 'Ilustración de los instrumentos de la colla',
    live: {
      label: 'En directo',
      title: 'Y todos juntos suenan así.',
      event: 'Concurs de Percussió de Barcelona',
      rounds: { final: 'Final', semifinal: 'Semifinal' },
      play: 'Reproducir el vídeo',
      credit: 'Vídeos de {author} en YouTube',
    },
    items: [
      { name: 'Surdo', text: 'El latido de la colla, en tres medidas: 18, 20 y 22 pulgadas.' },
      { name: 'Caja', text: 'El nervio. Mantiene el ritmo vivo de principio a fin.' },
      { name: 'Repenique', text: 'La voz que grita y marca las entradas.' },
      { name: 'Tamborín', text: 'Pequeño, agudo y descarado.' },
      { name: 'Agogó', text: 'Dos campanas y una melodía que se pega.' },
      { name: 'Chequeré o xocalho', text: 'El brillo que lo une todo.' },
    ],
  },
  events: {
    label: 'Nuestros actos',
    title: 'Tres citas marcadas en verde.',
    items: [
      {
        name: 'La Festa de Tardor',
        tags: ['Otoño', 'Sant Feliu de Llobregat'],
        text: 'Las fiestas de nuestro pueblo, y las vivimos desde dentro, codo con codo con el resto de collas de la ciudad. Seguici, correfocs, tabalades, pasacalles… Vamos, que no nos aburrimos.',
        note: '08980: el código postal que cualquier santfeliuense reconoce a la primera.',
        imageAlt: 'La colla con pañuelos rojos al cuello el día del correfoc',
      },
      {
        name: 'El Korrebars',
        tags: ['Verbena de San Juan', '23 de junio'],
        text: 'La tarde de la verbena de San Juan, ruta de bar en bar por la ciudad para calentar motores. Cerveza, música, pistolas de agua y pólvora para exprimir el día más largo del año. Y acabamos como toca: tocando.',
        note: '',
        imageAlt: 'Cartel del Korrebars 2026: 23 de junio, verbena de San Juan, en Sant Feliu de Llobregat',
      },
      {
        name: 'La Drakafesta',
        tags: ['Cada 5 años', '3.ª edición: 2023'],
        text: 'La fiesta propia de Drakaris. Cada cinco años montamos una jornada rodeada de percusión y fiesta, invitamos a las collas compañeras y la rematamos con una fiesta nocturna.',
        note: '',
        imageAlt: 'Drakaris tocando de noche en la Drakafesta, bajo luces verdes',
      },
    ],
    stampLabel: 'Denominación de origen',
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
    text: 'Camisetas y vasos de la colla. Los pedidos se hacen por mensaje directo en Instagram.',
    order: 'Haz tu pedido por Instagram',
    orderShort: 'Haz tu pedido',
    products: {
      adult: 'Camiseta de adulto',
      kids: 'Camiseta infantil',
      cup: 'Vaso de Drakaris',
    },
  },
  booking: {
    label: 'Contratación',
    title: 'Pon ritmo a tu fiesta.',
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
    title: 'Drakaris Percussió',
    description:
      'Drakaris (DKS) is the percussion crew from Sant Feliu de Llobregat, Barcelona. Since 2013 we have brought the rakatà to street parades, fire runs, town festivals and our own events. Book us or come and play.',
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
    history: 'History',
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
  marquee: ['Percussion', '08980', 'Street parades', 'DKS', 'Fire runs', 'Rakatà', 'Sant Feliu de Llobregat', 'Since 2013'],
  about: {
    label: 'About us',
    title: 'A dragon with a drum for a heartbeat.',
    body: [
      "Drakaris was born in 2013 in Sant Feliu de Llobregat, just outside Barcelona, to accompany the city's fire beast: the Drac de Sant Feliu, our dragon. Since then we have kept adding people, experience and ever more powerful, energetic rhythms.",
      "Friends call us DKS. We're an open crew: nobody asks for a CV here, just the will to play.",
    ],
    logoAlt: 'Drakaris crest: a white and green dragon biting its own tail',
  },
  history: {
    label: 'History',
    title: '{years} years of making noise.',
    lead: "From following Sant Feliu's dragon through the streets to climbing onto the podium.",
    milestones: [
      {
        title: 'The crew is born',
        text: "Drakaris starts out to accompany the city's fire beast: the Drac de Sant Feliu. Little by little, more of us join.",
        badges: [],
        photoAlt: '',
      },
      {
        title: 'A stadium and a first title',
        text: "We play at the opening of FC Barcelona's Estadi Johan Cruyff and finish third at the Kabronada: the first title for Drakaris.",
        badges: ['3rd · Kabronada'],
        photoAlt: 'Drakaris playing under a shower of confetti at the opening of the Estadi Johan Cruyff',
      },
      {
        title: 'Off to Mallorca',
        text: 'We pack our drums and play at the Festival +KSamba in Mallorca: the first and, so far, only time outside Catalonia.',
        badges: [],
        photoAlt: 'The crew celebrating in the street in Mallorca, drumsticks in the air',
      },
      {
        title: 'Ten years and a contest',
        text: 'Our tenth anniversary year: an inter-crew pitxi tournament, the first Korrebars, the Drakaris bingo and the third Drakafesta. And to top it off, we win the Concurs de Percussió de Barcelona.',
        badges: ['1st · Concurs de Percussió de Barcelona'],
        photoAlt: 'The crew on stage at the 2023 Concurs de Percussió de Barcelona',
      },
      {
        title: 'The double',
        text: "We win the Perculliga, Catalonia's batucada league, and the Diables Rojos contest.",
        badges: ['1st · Perculliga', '1st · Diables Rojos contest'],
        photoAlt: 'The crew celebrating their 2024 Perculliga win with the cup',
      },
      {
        title: 'Still hungry',
        text: 'Third place at the Concurs de Percussió de Barcelona. And still hungry for more.',
        badges: ['3rd · Concurs de Percussió de Barcelona'],
        photoAlt: 'The crew with the third-place trophy at the 2026 Concurs de Percussió de Barcelona',
      },
    ],
  },
  sound: {
    label: 'The sound',
    title: 'This is how the dragon sounds.',
    lead: 'Every instrument has its say. Together they make the rakatà.',
    alt: "Illustration of the crew's instruments",
    live: {
      label: 'Live',
      title: 'And all together, they sound like this.',
      event: 'Concurs de Percussió de Barcelona',
      rounds: { final: 'Final', semifinal: 'Semi-final' },
      play: 'Play video',
      credit: 'Videos by {author} on YouTube',
    },
    items: [
      { name: 'Surdo', text: "The crew's heartbeat, in three sizes: 18, 20 and 22 inches." },
      { name: 'Caixa', text: 'The nerve. A snare that keeps the groove alive from start to finish.' },
      { name: 'Repinique', text: 'The voice that calls out and cues every entrance.' },
      { name: 'Tamborim', text: 'Small, sharp and cheeky.' },
      { name: 'Agogô', text: 'Two bells and a melody that sticks.' },
      { name: 'Shekere or chocalho', text: 'The shimmer that ties it all together.' },
    ],
  },
  events: {
    label: 'Our events',
    title: 'Three dates circled in green.',
    items: [
      {
        name: 'La Festa de Tardor',
        tags: ['Autumn', 'Sant Feliu de Llobregat'],
        text: "Our home town's festival, and we live it from the inside, shoulder to shoulder with the city's other crews. Processions, fire runs, drum parades, street parades… In short, we never get bored.",
        note: '08980: the postcode every local recognises at first sight.',
        imageAlt: 'The crew wearing red neckerchiefs on the day of the fire run',
      },
      {
        name: 'El Korrebars',
        tags: ["Saint John's Eve", '23 June'],
        text: "On the afternoon of Saint John's Eve we go from bar to bar across town to warm up. Beer, music, water pistols and gunpowder to squeeze the most out of the longest day of the year. And we end it the proper way: playing.",
        note: '',
        imageAlt: "Korrebars 2026 poster: 23 June, Saint John's Eve, in Sant Feliu de Llobregat",
      },
      {
        name: 'La Drakafesta',
        tags: ['Every 5 years', '3rd edition: 2023'],
        text: "Drakaris's very own party. Every five years we put on a day full of percussion and celebration, invite fellow crews and round it off with a night party.",
        note: '',
        imageAlt: 'Drakaris playing at night at the Drakafesta, under green lights',
      },
    ],
    stampLabel: 'Designation of origin',
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
    text: 'Crew T-shirts and cups. Orders are placed by direct message on Instagram.',
    order: 'Order on Instagram',
    orderShort: 'Order',
    products: {
      adult: 'Adult T-shirt',
      kids: 'Kids T-shirt',
      cup: 'Drakaris cup',
    },
  },
  booking: {
    label: 'Bookings',
    title: 'Bring the rhythm to your party.',
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
