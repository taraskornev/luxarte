/**
 * ============================================================================
 * CATEGORIES DATA - LUXARTE
 * ============================================================================
 *
 * Centralized category data source for /categories index and /categories/[slug] pages.
 * All content and images from existing assets.
 *
 * @version 1.0.0
 */

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Featured Image for category gallery
 */
export interface FeaturedImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

/**
 * FAQ Item
 */
export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

/**
 * Category Data Interface
 */
export interface Category {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly heroImage: {
    readonly src: string;
    readonly alt: string;
  };
  readonly shortIntro: string;
  readonly fullDescription: string;
  readonly relatedBrands: readonly string[];
  readonly featuredImageGrid: readonly FeaturedImage[];
  readonly subcategories?: readonly string[];
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly faq: readonly FAQItem[];
}

/**
 * All Categories Data
 */
export const categories: readonly Category[] = [
  // ============================================================================
  // SOFY (SOFAS)
  // ============================================================================
  {
    id: 'sofy',
    name: 'Sofy',
    slug: 'sofy',
    heroImage: {
      src: `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
      alt: 'Luksusowe sofy w showroomie LuxArte',
    },
    shortIntro: 'Ekskluzywne sofy włoskich domów mody i renomowanych producentów mebli. Najwyższa jakość materiałów i wykończenia.',
    fullDescription: 'Kolekcja luksusowych sof w LuxArte obejmuje modele od najbardziej prestiżowych włoskich marek. Każda sofa to połączenie doskonałego rzemiosła, najwyższej jakości materiałów i ponadczasowego designu.',
    relatedBrands: ['versace-home', 'dolce-gabbana-casa', 'bentley-home', 'visionnaire', 'roberto-cavalli-home-interiors'],
    featuredImageGrid: [
      {
        id: 'sofa-1',
        src: `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
        alt: 'Sofa Visionnaire Loving Frank',
        width: 1200,
        height: 800,
      },
      {
        id: 'sofa-2',
        src: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
        alt: 'Sofa Versace Home Zensational',
        width: 1024,
        height: 718,
      },
      {
        id: 'sofa-3',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
        alt: 'Salon z luksusową sofą',
        width: 1900,
        height: 1060,
      },
    ],
    subcategories: ['sofy-narozne', 'sofy-modułowe', 'sofy-2-osobowe', 'sofy-3-osobowe'],
    seo: {
      title: 'Luksusowe Sofy | Versace, Bentley, Visionnaire',
      description: 'Ekskluzywne sofy włoskich marek. Versace Home, Bentley Home, Visionnaire i więcej. Autoryzowany dealer w Polsce.',
    },
    faq: [
      {
        question: 'Jakie marki sof oferuje LuxArte?',
        answer: 'LuxArte jest autoryzowanym dealerem marek takich jak Versace Home, Bentley Home, Visionnaire, Roberto Cavalli Home Interiors, Dolce & Gabbana Casa i wielu innych.',
      },
      {
        question: 'Czy mogę zobaczyć sofy w showroomie?',
        answer: 'Tak, zapraszamy do naszego showroomu w Warszawie przy Placu Piłsudskiego 9, gdzie prezentujemy wybrane modele z naszej kolekcji.',
      },
      {
        question: 'Jaki jest czas realizacji zamówienia?',
        answer: 'Czas realizacji zależy od wybranego modelu i producenta. Standardowo wynosi od 8 do 16 tygodni od złożenia zamówienia.',
      },
    ],
  },

  // ============================================================================
  // KUCHNIE (KITCHENS)
  // ============================================================================
  {
    id: 'kuchnie',
    name: 'Kuchnie',
    slug: 'kuchnie',
    heroImage: {
      src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
      alt: 'Luksusowa kuchnia SCIC w showroomie LuxArte',
    },
    shortIntro: 'Luksusowe kuchnie włoskich producentów. Projektowanie na wymiar z najwyższej jakości materiałów.',
    fullDescription: 'Kuchnie w ofercie LuxArte to synonim włoskiego designu i precyzyjnego rzemiosła. Współpracujemy z wiodącymi producentami, oferując kuchnie projektowane na wymiar z wykorzystaniem najszlachetniejszych materiałów.',
    relatedBrands: ['scic', 'valcucine'],
    featuredImageGrid: [
      {
        id: 'kuchnia-1',
        src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
        alt: 'Kuchnia SCIC',
        width: 1920,
        height: 1280,
      },
      {
        id: 'kuchnia-2',
        src: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
        alt: 'Detale kuchni premium',
        width: 1200,
        height: 800,
      },
    ],
    seo: {
      title: 'Luksusowe Kuchnie | SCIC, Valcucine',
      description: 'Włoskie kuchnie premium na wymiar. SCIC, Valcucine. Projektowanie i realizacja kompleksowa.',
    },
    faq: [
      {
        question: 'Czy LuxArte projektuje kuchnie na wymiar?',
        answer: 'Tak, oferujemy kompleksowe projektowanie kuchni na wymiar. Nasi projektanci tworzą rozwiązania dopasowane do indywidualnych potrzeb i przestrzeni klienta.',
      },
      {
        question: 'Jakie marki kuchni są dostępne?',
        answer: 'Współpracujemy z renomowanymi włoskimi producentami kuchni, w tym SCIC Italia i Valcucine.',
      },
    ],
  },

  // ============================================================================
  // GARDEROBY (WARDROBES)
  // ============================================================================
  {
    id: 'garderoby',
    name: 'Garderoby',
    slug: 'garderoby',
    heroImage: {
      src: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
      alt: 'Luksusowa garderoba na wymiar',
    },
    shortIntro: 'Garderoby szyte na miarę z włoską precyzją. Systemy przechowywania dopasowane do każdej przestrzeni.',
    fullDescription: 'Garderoby w ofercie LuxArte to perfekcyjne połączenie funkcjonalności i estetyki. Projektujemy systemy przechowywania, które maksymalizują przestrzeń i zapewniają doskonałą organizację.',
    relatedBrands: ['misuraemme'],
    featuredImageGrid: [
      {
        id: 'garderoba-1',
        src: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
        alt: 'Garderoba MisuraEmme',
        width: 1200,
        height: 800,
      },
      {
        id: 'garderoba-2',
        src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
        alt: 'Wnętrze garderoby',
        width: 1266,
        height: 1328,
      },
    ],
    seo: {
      title: 'Luksusowe Garderoby na Wymiar',
      description: 'Garderoby włoskich producentów szyte na miarę. MisuraEmme. Projektowanie i realizacja.',
    },
    faq: [
      {
        question: 'Czy garderoby są projektowane indywidualnie?',
        answer: 'Tak, każda garderoba jest projektowana indywidualnie z uwzględnieniem wymiarów pomieszczenia i potrzeb klienta.',
      },
    ],
  },

  // ============================================================================
  // OŚWIETLENIE (LIGHTING)
  // ============================================================================
  {
    id: 'oswietlenie',
    name: 'Oświetlenie',
    slug: 'oswietlenie',
    heroImage: {
      src: `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
      alt: 'Lampa Flos Wireline w showroomie LuxArte',
    },
    shortIntro: 'Ekskluzywne oświetlenie włoskich projektantów. Żyrandole, lampy wiszące, stołowe i podłogowe.',
    fullDescription: 'Kolekcja oświetlenia LuxArte obejmuje ikony designu od renomowanych włoskich producentów. Od klasycznych żyrandoli po współczesne lampy designerskie.',
    relatedBrands: ['flos', 'venicem', 'vanory', 'visionnaire'],
    featuredImageGrid: [
      {
        id: 'lampa-1',
        src: `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
        alt: 'Lampa Flos Wireline',
        width: 1200,
        height: 800,
      },
    ],
    subcategories: ['zyrandole', 'lampy-wiszace', 'lampy-stolowe', 'lampy-podlogowe', 'kinkiety'],
    seo: {
      title: 'Luksusowe Oświetlenie | Flos, Venicem',
      description: 'Ekskluzywne lampy i żyrandole włoskich marek. Flos, Venicem, Visionnaire. Autoryzowany dealer.',
    },
    faq: [
      {
        question: 'Jakie rodzaje oświetlenia oferuje LuxArte?',
        answer: 'Oferujemy pełną gamę oświetlenia: żyrandole, lampy wiszące, lampy stołowe, lampy podłogowe, kinkiety i plafony.',
      },
    ],
  },

  // ============================================================================
  // MEBLE OGRODOWE (OUTDOOR FURNITURE)
  // ============================================================================
  {
    id: 'meble-ogrodowe',
    name: 'Meble Ogrodowe',
    slug: 'meble-ogrodowe',
    heroImage: {
      src: `${CDN_BASE}/2023/06/exteta-luksusowe-meble-ogrodow-luxarte.webp`,
      alt: 'Luksusowe meble ogrodowe Exteta',
    },
    shortIntro: 'Luksusowe meble ogrodowe włoskich marek. Projektowane z myślą o wyjątkowych przestrzeniach zewnętrznych.',
    fullDescription: 'Meble ogrodowe w LuxArte to połączenie najwyższej jakości materiałów odpornych na warunki atmosferyczne z ponadczasowym włoskim designem.',
    relatedBrands: ['exteta', 'versace-home'],
    featuredImageGrid: [
      {
        id: 'ogrod-1',
        src: `${CDN_BASE}/2023/06/exteta-luksusowe-meble-ogrodow-luxarte.webp`,
        alt: 'Meble ogrodowe Exteta',
        width: 1200,
        height: 800,
      },
    ],
    seo: {
      title: 'Luksusowe Meble Ogrodowe | Exteta',
      description: 'Włoskie meble ogrodowe premium. Exteta, Versace Home Outdoor. Autoryzowany dealer w Polsce.',
    },
    faq: [
      {
        question: 'Czy meble ogrodowe są odporne na warunki atmosferyczne?',
        answer: 'Tak, wszystkie meble ogrodowe w naszej ofercie są wykonane z materiałów odpornych na działanie słońca, deszczu i innych warunków atmosferycznych.',
      },
    ],
  },

  // ============================================================================
  // ŁAZIENKI (BATHROOMS)
  // ============================================================================
  {
    id: 'lazienki',
    name: 'Łazienki',
    slug: 'lazienki',
    heroImage: {
      src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
      alt: 'Luksusowa łazienka zaprojektowana przez LuxArte',
    },
    shortIntro: 'Kompleksowe wyposażenie łazienek premium. Meble, armatura i akcesoria najwyższej jakości.',
    fullDescription: 'Łazienki w ofercie LuxArte to przestrzenie łączące funkcjonalność z luksusem. Oferujemy kompleksowe rozwiązania od mebli łazienkowych po armaturę i akcesoria.',
    relatedBrands: [],
    featuredImageGrid: [
      {
        id: 'lazienka-1',
        src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
        alt: 'Łazienka premium',
        width: 1266,
        height: 1328,
      },
    ],
    seo: {
      title: 'Luksusowe Łazienki | Wyposażenie Premium',
      description: 'Kompleksowe wyposażenie łazienek premium. Meble, armatura, akcesoria. Projektowanie i realizacja.',
    },
    faq: [],
  },

  // ============================================================================
  // FOTELE (ARMCHAIRS)
  // ============================================================================
  {
    id: 'fotele',
    name: 'Fotele',
    slug: 'fotele',
    heroImage: {
      src: `${CDN_BASE}/2025/01/BENTLEY_HOME_CINEMA_LUXARTE.jpg`,
      alt: 'Luksusowe fotele Bentley Home',
    },
    shortIntro: 'Ekskluzywne fotele włoskich domów mody. Komfort i elegancja w każdym detalu.',
    fullDescription: 'Fotele w kolekcji LuxArte reprezentują najwyższy poziom rzemiosła i komfortu. Od klasycznych modeli po współczesne ikony designu.',
    relatedBrands: ['bentley-home', 'versace-home', 'visionnaire', 'roberto-cavalli-home-interiors'],
    featuredImageGrid: [
      {
        id: 'fotel-1',
        src: `${CDN_BASE}/2025/01/BENTLEY_HOME_CINEMA_LUXARTE.jpg`,
        alt: 'Fotele Bentley Home',
        width: 1200,
        height: 800,
      },
    ],
    seo: {
      title: 'Luksusowe Fotele | Bentley, Versace',
      description: 'Ekskluzywne fotele włoskich marek. Bentley Home, Versace Home, Visionnaire. Autoryzowany dealer.',
    },
    faq: [],
  },

  // ============================================================================
  // STOŁY (TABLES)
  // ============================================================================
  {
    id: 'stoly',
    name: 'Stoły',
    slug: 'stoly',
    heroImage: {
      src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
      alt: 'Luksusowy stół w jadalni',
    },
    shortIntro: 'Ekskluzywne stoły jadalniane i biurka. Włoski design i najwyższa jakość wykonania.',
    fullDescription: 'Stoły w ofercie LuxArte to elementy centralnej kompozycji wnętrza. Oferujemy stoły jadalniane, konferencyjne i biurka od najbardziej prestiżowych producentów.',
    relatedBrands: ['versace-home', 'bentley-home', 'visionnaire'],
    featuredImageGrid: [
      {
        id: 'stol-1',
        src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
        alt: 'Stół jadalniany',
        width: 1900,
        height: 1060,
      },
    ],
    seo: {
      title: 'Luksusowe Stoły | Włoski Design',
      description: 'Ekskluzywne stoły jadalniane i biurka. Versace Home, Bentley Home. Autoryzowany dealer.',
    },
    faq: [],
  },
];

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

/**
 * Get all category slugs (for static generation)
 */
export function getAllCategorySlugs(): string[] {
  return categories.map((cat) => cat.slug);
}

/**
 * Get categories count
 */
export function getCategoriesCount(): number {
  return categories.length;
}

export default categories;
