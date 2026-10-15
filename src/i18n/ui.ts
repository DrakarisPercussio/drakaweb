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
    // Lo que enseña Google bajo el título. Lleva las palabras por las que se
    // busca una colla así: percussió, batucada, tambors, el nombre del pueblo.
    description:
      "Drakaris (DKS): colla de percussió i batucada de Sant Feliu de Llobregat. Des del 2013 portem tambors i rakatà a cercaviles, correfocs i festes majors. Contracta'ns o vine a tocar.",
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
    // {years} se sustituye por los años que lleva la colla (se actualiza solo cada año)
    title: '{years} anys fent tremolar els carrers.',
    lead: 'De seguir el Drac de Sant Feliu pels carrers a pujar al podi.',
    // Los dos logos que se enseñan en el hito del cambio de imagen
    rebrand: {
      logo: 'El logo nou',
      chest: 'Al pit, DKS',
      logoAlt: 'Logo de Drakaris: un drac blanc i verd en cercle',
      chestAlt: 'Logo DKS: una urpa verda amb les lletres DKS',
      // El logo de los inicios, en el hito de 2013
      first: 'El primer logo',
      firstAlt: 'El primer logo de Drakaris: una K negra feta amb una baqueta i un tambor, sobre fons verd',
    },
    // Un texto por hito, en el mismo orden que `milestones` en src/data/site.ts
    milestones: [
      {
        title: 'Neix la colla',
        text: 'Drakaris arrenca per acompanyar la bèstia de foc de la ciutat: el Drac de Sant Feliu. A poc a poc anem sent més.',
        badges: [] as string[],
        photoAlt: '',
      },
      {
        title: 'Els primers ritmes',
        text: "A base de molt d'esforç i moltes ganes, anem creant els primers ritmes. Arriben noves incorporacions i les primeres actuacions.",
        badges: [],
        photoAlt: 'La colla, amb samarretes verdes i mocadors de la Festa de Tardor, tocant en una cercavila amb el Drac de Sant Feliu al fons',
      },
      {
        title: 'La primera Drakafesta',
        text: 'Celebrem el cinquè aniversari amb la primera Drakafesta: una jornada plena de percussió i festa.',
        badges: [],
        photoAlt: 'La colla, amb samarretes blaves, al costat del Drac de Sant Feliu a la primera Drakafesta',
      },
      {
        title: 'Un estadi i un primer títol',
        text: "Toquem a la inauguració de l'Estadi Johan Cruyff del FC Barcelona i quedem tercers a la Kabronada: el primer títol de Drakaris. I muntem la segona Drakafesta.",
        badges: ['3r · Kabronada'],
        photoAlt: "Drakaris tocant sota una pluja de confeti a la inauguració de l'Estadi Johan Cruyff",
      },
      {
        title: 'Drakaris muda de pell',
        text: "Canviem d'imatge: estrenem vestuari i logo nou. Al pit de la samarreta, l'urpa amb les lletres DKS.",
        badges: [],
        photoAlt: '',
      },
      {
        title: 'Rumb a Mallorca',
        text: 'Fem les maletes i toquem al Festival +KSamba de Mallorca: la primera i, fins ara, única vegada fora de Catalunya.',
        badges: [],
        photoAlt: 'La colla celebrant al carrer, a Mallorca, amb les baquetes enlaire',
      },
      {
        title: 'Deu anys i un concurs',
        text: "L'any del desè aniversari ens constituïm com a entitat pròpia i ho celebrem amb un torneig de pitxi intercolles, el primer Korrebars, un bingo de Drakaris i la tercera Drakafesta. I, per rematar-ho, guanyem el Concurs de Percussió de Barcelona.",
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
        title: 'Una nit màgica',
        text: 'Toquem a la Cavalcada de Reis de Sant Feliu: una nit màgica que ens feia molta il·lusió.',
        badges: [],
        photoAlt: 'Drakaris tocant de nit a la Cavalcada de Reis de Sant Feliu, entre llums i confeti',
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
    title: 'Així sona el nostre esperit.',
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
      // Aviso junto a los vídeos: al pulsar play, YouTube puede guardar cookies
      privacy: 'En prémer play, el vídeo es carrega des de YouTube, que pot desar galetes al teu navegador.',
    },
    // Los seis instrumentos que toca la colla
    items: [
      { name: 'Surdo', text: 'El batec de la colla, en tres mides: 18, 20 i 22 polzades.' },
      { name: 'Caixa', text: 'El nervi. Manté el ritme viu de principi a fi.' },
      { name: 'Repenic', text: 'La veu que crida i marca les entrades.' },
      { name: 'Tamborí', text: 'Petit, agut i descarat.' },
      { name: 'Agogó', text: "Dues campanes i una melodia que s'enganxa." },
      { name: 'Xequeré', text: 'La brillantor que ho lliga tot.' },
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
    map: 'Mapa',
    mapLabel: 'Com arribar-hi',
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
    // Crédito de fotógrafo: sobre una foto («Foto: Nom») y bajo la galería («Fotografies: …»)
    credit: 'Foto',
    credits: 'Fotografies',
    alt: 'Drakaris',
  },
  shop: {
    label: 'Botiga',
    title: 'Vesteix de Drakaris.',
    text: 'Samarretes, mocadors, gots i bosses de la colla. Les comandes es fan per missatge directe a Instagram.',
    order: 'Fes la comanda per Instagram',
    orderShort: 'Fes la comanda',
    // Bajo los productos: la ley pide decir si el precio lleva impuestos y envío
    note: "Preus finals, amb impostos inclosos. Si cal enviament, te'n direm el cost abans de confirmar la comanda.",
    terms: 'Condicions de compra',
    products: {
      adult: "Samarreta d'adult",
      kids: 'Samarreta infantil',
      cup: 'Got de Drakaris',
      tote: 'Tote bag de Drakaris',
      bag: 'Motxilla de cordes de Drakaris',
      scarf: 'Mocador de Drakaris',
    },
  },
  booking: {
    label: 'Contractació',
    title: 'Posa ritme a la teva festa.',
    text: "Batucada per a festes majors, cercaviles, inauguracions, casaments… Explica'ns què tens al cap i et direm com ho fem sonar.",
    primary: 'Escriu-nos per Instagram',
    email: "Envia'ns un correu",
    // Asunto con el que se abre el correo: ayuda a distinguir las contrataciones
    emailSubject: 'Contractació de Drakaris',
    posterAlt: 'Cartell de Drakaris: un drac enroscat entre tambors, «Since 2013, Sant Feliu de Llobregat»',
  },
  footer: {
    tagline: 'Colla de percussió i batucada de Sant Feliu de Llobregat. Des del 2013.',
    sections: 'Seccions',
    social: 'Xarxes',
    rights: 'Tots els drets reservats.',
  },
  // Página «Informació legal» (los textos largos están en src/i18n/legal.ts)
  legal: {
    title: 'Informació legal',
    lead: "Qui hi ha darrere d'aquest web, com funcionen les comandes, què fem amb les dades i quines galetes fem servir.",
    updated: 'Darrera actualització',
    back: "Torna a l'inici",
    // Enlaces del pie de página
    notice: 'Avís legal',
    purchases: 'Condicions de compra',
    privacy: 'Privacitat',
    cookies: 'Galetes',
    cookieSettings: 'Configuració de galetes',
  },
  // Aviso de cookies: solo sale si hay Google Analytics configurado
  consent: {
    label: 'Galetes',
    text: "Fem servir galetes d'analítica (Google Analytics) per saber com es fa servir el web i millorar-lo. Només s'activen si les acceptes.",
    more: 'Més informació',
    accept: 'Accepta',
    reject: 'Rebutja',
  },
  // Página de error (dirección que no existe)
  notFound: {
    title: 'Aquí no hi sona res.',
    text: 'Aquesta pàgina no existeix o ha canviat de lloc.',
    cta: "Torna a l'inici",
  },
};

export type Dictionary = typeof ca;

const es: Dictionary = {
  meta: {
    title: 'Drakaris Percussió',
    description:
      'Drakaris (DKS): colla de percusión y batucada de Sant Feliu de Llobregat (Barcelona). Desde 2013 llevamos tambores y rakatà a pasacalles, correfocs y fiestas mayores. Contrátanos o ven a tocar.',
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
    title: '{years} años haciendo temblar las calles.',
    lead: 'De seguir al Drac de Sant Feliu por las calles a subirnos al podio.',
    rebrand: {
      logo: 'El logo nuevo',
      chest: 'En el pecho, DKS',
      logoAlt: 'Logo de Drakaris: un dragón blanco y verde en círculo',
      chestAlt: 'Logo DKS: una garra verde con las letras DKS',
      first: 'El primer logo',
      firstAlt: 'El primer logo de Drakaris: una K negra hecha con una baqueta y un tambor, sobre fondo verde',
    },
    milestones: [
      {
        title: 'Nace la colla',
        text: 'Drakaris arranca para acompañar a la bestia de fuego de la ciudad: el Drac de Sant Feliu. Poco a poco vamos siendo más.',
        badges: [],
        photoAlt: '',
      },
      {
        title: 'Los primeros ritmos',
        text: 'A base de mucho esfuerzo y muchas ganas, vamos creando los primeros ritmos. Llegan nuevas incorporaciones y las primeras actuaciones.',
        badges: [],
        photoAlt: 'La colla, con camisetas verdes y pañuelos de la Festa de Tardor, tocando en un pasacalles con el Drac de Sant Feliu al fondo',
      },
      {
        title: 'La primera Drakafesta',
        text: 'Celebramos el quinto aniversario con la primera Drakafesta: una jornada llena de percusión y fiesta.',
        badges: [],
        photoAlt: 'La colla, con camisetas azules, junto al Drac de Sant Feliu en la primera Drakafesta',
      },
      {
        title: 'Un estadio y un primer título',
        text: 'Tocamos en la inauguración del Estadi Johan Cruyff del FC Barcelona y quedamos terceros en la Kabronada: el primer título de Drakaris. Y montamos la segunda Drakafesta.',
        badges: ['3.º · Kabronada'],
        photoAlt: 'Drakaris tocando bajo una lluvia de confeti en la inauguración del Estadi Johan Cruyff',
      },
      {
        title: 'Drakaris muda de piel',
        text: 'Cambiamos de imagen: estrenamos vestuario y logo nuevo. En el pecho de la camiseta, la garra con las letras DKS.',
        badges: [],
        photoAlt: '',
      },
      {
        title: 'Rumbo a Mallorca',
        text: 'Hacemos las maletas y tocamos en el Festival +KSamba de Mallorca: la primera y, hasta ahora, única vez fuera de Catalunya.',
        badges: [],
        photoAlt: 'La colla celebrando en la calle, en Mallorca, con las baquetas en alto',
      },
      {
        title: 'Diez años y un concurso',
        text: 'El año del décimo aniversario nos constituimos como entidad propia y lo celebramos con un torneo de pitxi intercolles, el primer Korrebars, un bingo de Drakaris y la tercera Drakafesta. Y, para rematar, ganamos el Concurs de Percussió de Barcelona.',
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
        title: 'Una noche mágica',
        text: 'Tocamos en la Cabalgata de Reyes de Sant Feliu: una noche mágica que nos hacía mucha ilusión.',
        badges: [],
        photoAlt: 'Drakaris tocando de noche en la Cabalgata de Reyes de Sant Feliu, entre luces y confeti',
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
    title: 'Así suena nuestro espíritu.',
    lead: 'Cada instrumento dice la suya. Juntos hacemos el rakatà.',
    alt: 'Ilustración de los instrumentos de la colla',
    live: {
      label: 'En directo',
      title: 'Y todos juntos suenan así.',
      event: 'Concurs de Percussió de Barcelona',
      rounds: { final: 'Final', semifinal: 'Semifinal' },
      play: 'Reproducir el vídeo',
      credit: 'Vídeos de {author} en YouTube',
      privacy: 'Al pulsar play, el vídeo se carga desde YouTube, que puede guardar cookies en tu navegador.',
    },
    items: [
      { name: 'Surdo', text: 'El latido de la colla, en tres medidas: 18, 20 y 22 pulgadas.' },
      { name: 'Caja', text: 'El nervio. Mantiene el ritmo vivo de principio a fin.' },
      { name: 'Repenique', text: 'La voz que grita y marca las entradas.' },
      { name: 'Tamborín', text: 'Pequeño, agudo y descarado.' },
      { name: 'Agogó', text: 'Dos campanas y una melodía que se pega.' },
      { name: 'Chequeré', text: 'El brillo que lo une todo.' },
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
    map: 'Mapa',
    mapLabel: 'Cómo llegar',
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
    credit: 'Foto',
    credits: 'Fotografías',
    alt: 'Drakaris',
  },
  shop: {
    label: 'Tienda',
    title: 'Viste de Drakaris.',
    text: 'Camisetas, pañuelos, vasos y bolsas de la colla. Los pedidos se hacen por mensaje directo en Instagram.',
    order: 'Haz tu pedido por Instagram',
    orderShort: 'Haz tu pedido',
    note: 'Precios finales, con impuestos incluidos. Si hace falta envío, te diremos su coste antes de confirmar el pedido.',
    terms: 'Condiciones de compra',
    products: {
      adult: 'Camiseta de adulto',
      kids: 'Camiseta infantil',
      cup: 'Vaso de Drakaris',
      tote: 'Tote bag de Drakaris',
      bag: 'Mochila de cuerdas de Drakaris',
      scarf: 'Pañuelo de Drakaris',
    },
  },
  booking: {
    label: 'Contratación',
    title: 'Pon ritmo a tu fiesta.',
    text: 'Batucada para fiestas mayores, pasacalles, inauguraciones, bodas… Cuéntanos qué tienes en mente y te diremos cómo lo hacemos sonar.',
    primary: 'Escríbenos por Instagram',
    email: 'Envíanos un correo',
    emailSubject: 'Contratación de Drakaris',
    posterAlt: 'Cartel de Drakaris: un dragón enroscado entre tambores, «Since 2013, Sant Feliu de Llobregat»',
  },
  footer: {
    tagline: 'Colla de percusión y batucada de Sant Feliu de Llobregat. Desde 2013.',
    sections: 'Secciones',
    social: 'Redes',
    rights: 'Todos los derechos reservados.',
  },
  legal: {
    title: 'Información legal',
    lead: 'Quién hay detrás de esta web, cómo funcionan los pedidos, qué hacemos con los datos y qué cookies usamos.',
    updated: 'Última actualización',
    back: 'Volver al inicio',
    notice: 'Aviso legal',
    purchases: 'Condiciones de compra',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    cookieSettings: 'Configuración de cookies',
  },
  consent: {
    label: 'Cookies',
    text: 'Usamos cookies de analítica (Google Analytics) para saber cómo se usa la web y mejorarla. Solo se activan si las aceptas.',
    more: 'Más información',
    accept: 'Aceptar',
    reject: 'Rechazar',
  },
  notFound: {
    title: 'Aquí no suena nada.',
    text: 'Esta página no existe o ha cambiado de sitio.',
    cta: 'Volver al inicio',
  },
};

const en: Dictionary = {
  meta: {
    title: 'Drakaris Percussió',
    description:
      'Drakaris (DKS): percussion and batucada drum group from Sant Feliu de Llobregat, Barcelona. Since 2013 we bring drums and rakatà to street parades, fire runs and festivals. Book us or come and play.',
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
    title: '{years} years of shaking the streets.',
    lead: "From following Sant Feliu's dragon through the streets to climbing onto the podium.",
    rebrand: {
      logo: 'The new logo',
      chest: 'On the chest, DKS',
      logoAlt: 'Drakaris logo: a white and green dragon in a circle',
      chestAlt: 'DKS logo: a green claw with the letters DKS',
      first: 'Our first logo',
      firstAlt: 'The first Drakaris logo: a black K made from a drumstick and a drum, on a green background',
    },
    milestones: [
      {
        title: 'The crew is born',
        text: "Drakaris starts out to accompany the city's fire beast: the Drac de Sant Feliu. Little by little, more of us join.",
        badges: [],
        photoAlt: '',
      },
      {
        title: 'The first rhythms',
        text: 'With a lot of effort and plenty of drive, we create our first rhythms. New members join and our first gigs arrive.',
        badges: [],
        photoAlt: 'The crew, in green T-shirts and Festa de Tardor neckerchiefs, playing in a parade with the Drac de Sant Feliu behind them',
      },
      {
        title: 'The first Drakafesta',
        text: 'We celebrate our fifth anniversary with the first Drakafesta: a day packed with percussion and partying.',
        badges: [],
        photoAlt: 'The crew, in blue T-shirts, next to the Drac de Sant Feliu at the first Drakafesta',
      },
      {
        title: 'A stadium and a first title',
        text: "We play at the opening of FC Barcelona's Estadi Johan Cruyff and finish third at the Kabronada: the first title for Drakaris. And we throw the second Drakafesta.",
        badges: ['3rd · Kabronada'],
        photoAlt: 'Drakaris playing under a shower of confetti at the opening of the Estadi Johan Cruyff',
      },
      {
        title: 'Drakaris sheds its skin',
        text: 'A new look: new outfits and a new logo. On the chest of the T-shirt, the claw with the letters DKS.',
        badges: [],
        photoAlt: '',
      },
      {
        title: 'Off to Mallorca',
        text: 'We pack our drums and play at the Festival +KSamba in Mallorca: the first and, so far, only time outside Catalonia.',
        badges: [],
        photoAlt: 'The crew celebrating in the street in Mallorca, drumsticks in the air',
      },
      {
        title: 'Ten years and a contest',
        text: 'In our tenth anniversary year we become a registered association of our own, and we celebrate with an inter-crew pitxi tournament, the first Korrebars, a Drakaris bingo and the third Drakafesta. And to top it off, we win the Concurs de Percussió de Barcelona.',
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
        title: 'A magical night',
        text: 'We play at the Three Kings parade in Sant Feliu: a magical night we had been looking forward to.',
        badges: [],
        photoAlt: 'Drakaris playing at night in the Three Kings parade in Sant Feliu, among lights and confetti',
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
    title: 'This is how our spirit sounds.',
    lead: 'Every instrument has its say. Together they make the rakatà.',
    alt: "Illustration of the crew's instruments",
    live: {
      label: 'Live',
      title: 'And all together, they sound like this.',
      event: 'Concurs de Percussió de Barcelona',
      rounds: { final: 'Final', semifinal: 'Semi-final' },
      play: 'Play video',
      credit: 'Videos by {author} on YouTube',
      privacy: 'When you press play, the video loads from YouTube, which may store cookies in your browser.',
    },
    items: [
      { name: 'Surdo', text: "The crew's heartbeat, in three sizes: 18, 20 and 22 inches." },
      { name: 'Caixa', text: 'The nerve. A snare that keeps the groove alive from start to finish.' },
      { name: 'Repinique', text: 'The voice that calls out and cues every entrance.' },
      { name: 'Tamborim', text: 'Small, sharp and cheeky.' },
      { name: 'Agogô', text: 'Two bells and a melody that sticks.' },
      { name: 'Shekere', text: 'The shimmer that ties it all together.' },
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
    map: 'Map',
    mapLabel: 'Directions',
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
    credit: 'Photo',
    credits: 'Photography',
    alt: 'Drakaris',
  },
  shop: {
    label: 'Shop',
    title: 'Wear Drakaris.',
    text: 'Crew T-shirts, neckerchiefs, cups and bags. Orders are placed by direct message on Instagram.',
    order: 'Order on Instagram',
    orderShort: 'Order',
    note: "Final prices, taxes included. If your order needs shipping, we'll tell you the cost before confirming it.",
    terms: 'Purchase terms',
    products: {
      adult: 'Adult T-shirt',
      kids: 'Kids T-shirt',
      cup: 'Drakaris cup',
      tote: 'Drakaris tote bag',
      bag: 'Drakaris drawstring backpack',
      scarf: 'Drakaris neckerchief',
    },
  },
  booking: {
    label: 'Bookings',
    title: 'Bring the rhythm to your party.',
    text: "Batucada for town festivals, parades, openings, weddings… Tell us what you have in mind and we'll tell you how we make it sound.",
    primary: 'Message us on Instagram',
    email: 'Send us an email',
    emailSubject: 'Booking Drakaris',
    posterAlt: 'Drakaris poster: a dragon coiled around drums, "Since 2013, Sant Feliu de Llobregat"',
  },
  footer: {
    tagline: 'Percussion and batucada crew from Sant Feliu de Llobregat. Since 2013.',
    sections: 'Sections',
    social: 'Social',
    rights: 'All rights reserved.',
  },
  legal: {
    title: 'Legal information',
    lead: 'Who is behind this website, how orders work, what we do with data and which cookies we use.',
    updated: 'Last updated',
    back: 'Back to the home page',
    notice: 'Legal notice',
    purchases: 'Purchase terms',
    privacy: 'Privacy',
    cookies: 'Cookies',
    cookieSettings: 'Cookie settings',
  },
  consent: {
    label: 'Cookies',
    text: 'We use analytics cookies (Google Analytics) to learn how the site is used and improve it. They are only activated if you accept.',
    more: 'More information',
    accept: 'Accept',
    reject: 'Reject',
  },
  notFound: {
    title: 'Nothing playing here.',
    text: "This page doesn't exist or has moved.",
    cta: 'Back to the home page',
  },
};

const dictionaries: Record<Lang, Dictionary> = { ca, es, en };

export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}
