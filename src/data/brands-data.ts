/**
 * ============================================================================
 * BRANDS DATA - LUXARTE
 * ============================================================================
 *
 * Centralized brand data source for /brands index and /brands/[slug] pages.
 * All content extracted from legacy site - no invented content.
 *
 * @version 1.0.0
 */

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Brand Category Type
 */
export type BrandCategory =
  | 'meble'
  | 'oswietlenie'
  | 'kuchnie'
  | 'garderoby'
  | 'lazienki'
  | 'meble-ogrodowe'
  | 'agd';

/**
 * Product Category Reference
 */
export interface ProductCategory {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
}

/**
 * Featured Product Reference (stub for future)
 */
export interface FeaturedProduct {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly image: string;
}

/**
 * Brand Data Interface
 */
export interface Brand {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly logo?: string;
  readonly image: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly heritage: string;
  readonly materialsAndStyle: readonly string[];
  readonly categories: readonly BrandCategory[];
  readonly productCategories: readonly ProductCategory[];
  readonly featuredProducts?: readonly FeaturedProduct[];
  readonly externalUrl?: string;
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
  readonly faq: readonly {
    readonly question: string;
    readonly answer: string;
  }[];
}

/**
 * Product Categories Master List
 */
export const productCategories: Record<string, ProductCategory> = {
  sofy: { id: 'sofy', name: 'Sofy', slug: 'kategoria-produktu/sofy' },
  fotele: { id: 'fotele', name: 'Fotele', slug: 'kategoria-produktu/fotele' },
  'stoliki-kawowe': { id: 'stoliki-kawowe', name: 'Stoliki kawowe', slug: 'kategoria-produktu/stoliki-kawowe' },
  'stoliki-boczne': { id: 'stoliki-boczne', name: 'Stoliki boczne', slug: 'kategoria-produktu/stoliki-boczne' },
  komody: { id: 'komody', name: 'Komody', slug: 'kategoria-produktu/komody' },
  konsole: { id: 'konsole', name: 'Konsole', slug: 'kategoria-produktu/konsole' },
  stoly: { id: 'stoly', name: 'Stoły', slug: 'kategoria-produktu/stoly' },
  krzesla: { id: 'krzesla', name: 'Krzesła', slug: 'kategoria-produktu/krzesla' },
  hokery: { id: 'hokery', name: 'Hokery', slug: 'kategoria-produktu/hokery' },
  lozka: { id: 'lozka', name: 'Łóżka', slug: 'kategoria-produktu/lozka' },
  'szafki-nocne': { id: 'szafki-nocne', name: 'Szafki nocne', slug: 'kategoria-produktu/szafki-nocne' },
  pufy: { id: 'pufy', name: 'Pufy', slug: 'kategoria-produktu/pufy' },
  biuro: { id: 'biuro', name: 'Biuro', slug: 'kategoria-produktu/biuro' },
  regaly: { id: 'regaly', name: 'Regały', slug: 'kategoria-produktu/regaly' },
  szezlongi: { id: 'szezlongi', name: 'Szezlongi', slug: 'kategoria-produktu/szezlongi' },
  lustra: { id: 'lustra', name: 'Lustra', slug: 'kategoria-produktu/lustra' },
  dywany: { id: 'dywany', name: 'Dywany', slug: 'kategoria-produktu/dywany' },
  akcesoria: { id: 'akcesoria', name: 'Akcesoria', slug: 'kategoria-produktu/akcesoria' },
  zyrandole: { id: 'zyrandole', name: 'Żyrandole', slug: 'kategoria-produktu/zyrandole' },
  'lampy-wiszace': { id: 'lampy-wiszace', name: 'Lampy wiszące', slug: 'kategoria-produktu/lampy-wiszace' },
  'lampy-stolowe': { id: 'lampy-stolowe', name: 'Lampy stołowe', slug: 'kategoria-produktu/lampy-stolowe' },
  'lampy-podlogowe': { id: 'lampy-podlogowe', name: 'Lampy podłogowe', slug: 'kategoria-produktu/lampy-podlogowe' },
  kinkiety: { id: 'kinkiety', name: 'Kinkiety', slug: 'kategoria-produktu/kinkiety' },
  plafony: { id: 'plafony', name: 'Plafony', slug: 'kategoria-produktu/plafony' },
  kuchnie: { id: 'kuchnie', name: 'Kuchnie', slug: 'kategoria-produktu/kuchnie' },
  garderoby: { id: 'garderoby', name: 'Garderoby', slug: 'kategoria-produktu/garderoby' },
  lazienki: { id: 'lazienki', name: 'Łazienki', slug: 'kategoria-produktu/lazienki' },
  'meble-ogrodowe': { id: 'meble-ogrodowe', name: 'Meble ogrodowe', slug: 'kategoria-produktu/meble-ogrodowe' },
  donice: { id: 'donice', name: 'Donice', slug: 'kategoria-produktu/donice' },
} as const;

/**
 * Brand Category Labels for filtering
 */
export const brandCategoryLabels: Record<BrandCategory, string> = {
  meble: 'Meble',
  oswietlenie: 'Oświetlenie',
  kuchnie: 'Kuchnie',
  garderoby: 'Garderoby',
  lazienki: 'Łazienki',
  'meble-ogrodowe': 'Meble ogrodowe',
  agd: 'AGD Premium',
} as const;

/**
 * All Brands Data
 */
export const brands: readonly Brand[] = [
  // ============================================================================
  // FASHION HOUSE BRANDS
  // ============================================================================
  {
    id: 'versace-home',
    name: 'Versace Home',
    slug: 'versace-home',
    image: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
    shortDescription: 'Ikoniczna włoska marka łącząca odważny design z luksusem haute couture.',
    fullDescription:
      'Versace Home przenosi charakterystyczny styl domu mody Versace do świata wnętrz. Kolekcja wyróżnia się odważnymi wzorami, złotymi akcentami i legendarnym motywem Meduzy, tworząc przestrzenie pełne glamour i wyrafinowania.',
    heritage: 'Od 1992 roku Versace Home definiuje luksus we wnętrzach, łącząc tradycję włoskiego rzemiosła z awangardowym designem.',
    materialsAndStyle: [
      'Skóra najwyższej jakości',
      'Jedwab i aksamit',
      'Złote detale i okucia',
      'Motyw Meduzy i Barocco',
      'Intensywne kolory i kontrasty',
    ],
    categories: ['meble', 'meble-ogrodowe'],
    productCategories: [
      productCategories.sofy,
      productCategories.fotele,
      productCategories['stoliki-kawowe'],
      productCategories.lozka,
      productCategories.akcesoria,
      productCategories['meble-ogrodowe'],
    ],
    externalUrl: 'https://www.versace.com/home',
    seo: {
      title: 'Versace Home - Luksusowe meble włoskie | LuxArte',
      description:
        'Oficjalny dealer Versace Home w Polsce. Odkryj kolekcję luksusowych mebli Versace - sofy, fotele, łóżka i akcesoria. Showroom Warszawa.',
    },
    faq: [
      {
        question: 'Czy LuxArte jest oficjalnym dealerem Versace Home?',
        answer:
          'Tak, LuxArte jest autoryzowanym dealerem Versace Home w Polsce. Oferujemy pełen dostęp do kolekcji marki oraz profesjonalne doradztwo.',
      },
      {
        question: 'Jaki jest czas oczekiwania na meble Versace Home?',
        answer:
          'Standardowy czas realizacji zamówienia wynosi 12-16 tygodni. Wybrane modele dostępne są w showroomie do natychmiastowego odbioru.',
      },
      {
        question: 'Czy mogę zobaczyć meble Versace Home w showroomie?',
        answer:
          'Tak, w naszym showroomie w Warszawie prezentujemy wybrane kolekcje Versace Home. Zapraszamy na umówioną wizytę.',
      },
    ],
  },

  {
    id: 'dolce-gabbana-casa',
    name: 'Dolce & Gabbana Casa',
    slug: 'dolce-gabbana-casa',
    image: `${CDN_BASE}/2025/06/dolce-gabbana-casa-sofa-anemone-luxarte-ekskluzywne-meble-wloskie.01jpg.jpg`,
    shortDescription: 'Sycylijski przepych i włoska maestria w kolekcji mebli Dolce & Gabbana.',
    fullDescription:
      'Dolce & Gabbana Casa to kwintesencja włoskiego stylu życia. Kolekcja inspirowana sycylijskim dziedzictwem łączy tradycyjne rzemiosło z współczesnym designem, tworząc wnętrza pełne kolorów, wzorów i mediteraneańskiej elegancji.',
    heritage: 'Domenico Dolce i Stefano Gabbana od dekad definiują włoski styl. Ich wizja luksusu przenosi się teraz do wnętrz domowych.',
    materialsAndStyle: [
      'Ręcznie malowane ceramiki',
      'Sycylijskie wzory i motywy',
      'Aksamity i jedwabie',
      'Złote i kolorowe akcenty',
      'Barokowe ornamenty',
    ],
    categories: ['meble'],
    productCategories: [
      productCategories.sofy,
      productCategories.fotele,
      productCategories['stoliki-kawowe'],
      productCategories.krzesla,
      productCategories.akcesoria,
    ],
    seo: {
      title: 'Dolce & Gabbana Casa - Ekskluzywne meble włoskie | LuxArte',
      description:
        'Meble Dolce & Gabbana Casa w Polsce. Sycylijska elegancja i włoski design. Sofy, fotele, krzesła. Showroom LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Co wyróżnia meble Dolce & Gabbana Casa?',
        answer:
          'Kolekcja wyróżnia się unikalnymi sycylijskimi motywami, ręcznie malowanymi detalami i połączeniem tradycyjnego rzemiosła z nowoczesnym designem.',
      },
      {
        question: 'Czy oferujecie projektowanie wnętrz z meblami D&G Casa?',
        answer:
          'Tak, nasz zespół projektowy pomoże stworzyć spójną koncepcję wnętrza z wykorzystaniem kolekcji Dolce & Gabbana Casa.',
      },
    ],
  },

  {
    id: 'roberto-cavalli-home-interiors',
    name: 'Roberto Cavalli Home Interiors',
    slug: 'roberto-cavalli-home-interiors',
    image: `${CDN_BASE}/2022/12/roberto_cavalli_home_interiors_luxarte-2022-12-13-o-17.27.11-1.png`,
    shortDescription: 'Zmysłowy luksus i dzikie wzory w kolekcji Roberto Cavalli Home.',
    fullDescription:
      'Roberto Cavalli Home Interiors przenosi charakterystyczny styl marki do wnętrz. Animalistyczne printy, egzotyczne materiały i zmysłowe formy tworzą przestrzenie pełne ekspresji i wyrafinowanego glamour.',
    heritage: 'Roberto Cavalli od lat 70. rewolucjonizuje modę swoimi odważnymi wzorami. Ta wizja znajduje kontynuację w kolekcji Home Interiors.',
    materialsAndStyle: [
      'Egzotyczne skóry i futra',
      'Animalistyczne printy',
      'Złote i brązowe akcenty',
      'Zmysłowe krzywe form',
      'Luksusowe tkaniny',
    ],
    categories: ['meble'],
    productCategories: [
      productCategories.sofy,
      productCategories.fotele,
      productCategories.lozka,
      productCategories.komody,
      productCategories.akcesoria,
    ],
    seo: {
      title: 'Roberto Cavalli Home Interiors - Luksusowe meble | LuxArte',
      description:
        'Meble Roberto Cavalli Home Interiors w Polsce. Animalistyczne wzory, egzotyczne materiały. Autoryzowany dealer LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Jakie materiały są stosowane w meblach Roberto Cavalli?',
        answer:
          'Kolekcja wykorzystuje najwyższej jakości skóry, egzotyczne materiały, aksamity i jedwabie z charakterystycznymi animalistycznymi printami.',
      },
    ],
  },

  {
    id: 'trussardi-casa',
    name: 'Trussardi Casa',
    slug: 'trussardi-casa',
    image: `${CDN_BASE}/2025/05/trussardi-casa-sofa-astract-luxarte-ekskluzywne-meble-wloskie.01webp.webp`,
    shortDescription: 'Włoska elegancja i ponadczasowy styl w kolekcji Trussardi Casa.',
    fullDescription:
      'Trussardi Casa reprezentuje włoską elegancję w najczystszej formie. Kolekcja łączy tradycję rzemiosła skórzanego z minimalistycznym designem, tworząc meble o ponadczasowej estetyce i najwyższej jakości wykonania.',
    heritage: 'Od 1911 roku rodzina Trussardi definiuje włoski styl. Charakterystyczny chart angielski to symbol elegancji i wyrafinowania.',
    materialsAndStyle: [
      'Najwyższej jakości skóra',
      'Eleganckie, stonowane kolory',
      'Minimalistyczne linie',
      'Precyzyjne detale',
      'Ponadczasowy design',
    ],
    categories: ['meble'],
    productCategories: [
      productCategories.sofy,
      productCategories.fotele,
      productCategories.lozka,
      productCategories['stoliki-kawowe'],
    ],
    seo: {
      title: 'Trussardi Casa - Eleganckie meble włoskie | LuxArte',
      description:
        'Kolekcja Trussardi Casa w Polsce. Włoska elegancja, najwyższa jakość skóry. Sofy, fotele, łóżka. Showroom LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Czym wyróżnia się skóra w meblach Trussardi?',
        answer:
          'Trussardi to marka z tradycją w obróbce skóry. Meble wykonane są z najwyższej jakości skór, garbowanych tradycyjnymi metodami we Włoszech.',
      },
    ],
  },

  // ============================================================================
  // AUTOMOTIVE BRANDS
  // ============================================================================
  {
    id: 'bentley-home',
    name: 'Bentley Home',
    slug: 'bentley-home',
    image: `${CDN_BASE}/2025/01/BENTLEY_HOME_CINEMA_LUXARTE.jpg`,
    shortDescription: 'Brytyjski luksus i rzemiosło motoryzacyjne w kolekcji mebli Bentley Home.',
    fullDescription:
      'Bentley Home przenosi legendarne brytyjskie rzemiosło do świata wnętrz. Każdy mebel odzwierciedla tę samą dbałość o detale i jakość, którą znajdziesz w samochodach Bentley - od ręcznie wykonanych szwów po szlachetne materiały.',
    heritage: 'Bentley Motors od 1919 roku tworzy najbardziej prestiżowe samochody świata. Bentley Home to naturalna ewolucja tej wizji luksusu.',
    materialsAndStyle: [
      'Skóra Bridge of Weir',
      'Forniry z drewna orzechowego',
      'Aluminiowe detale',
      'Pikowanie w romby',
      'Brytyjska precyzja wykonania',
    ],
    categories: ['meble'],
    productCategories: [
      productCategories.sofy,
      productCategories.fotele,
      productCategories['stoliki-kawowe'],
      productCategories.stoly,
      productCategories.biuro,
    ],
    seo: {
      title: 'Bentley Home - Luksusowe meble brytyjskie | LuxArte',
      description:
        'Oficjalny dealer Bentley Home w Polsce. Brytyjskie rzemiosło i luksus motoryzacyjny. Bentley Home Cinema w showroomie LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Co to jest Bentley Home Cinema w LuxArte?',
        answer:
          'Bentley Home Cinema to ekskluzywna przestrzeń kinowa w naszym showroomie, wyposażona w meble Bentley Home i profesjonalny system audio-video. Zapraszamy na prywatne pokazy.',
      },
      {
        question: 'Czy mogę zamówić meble Bentley z indywidualną konfiguracją?',
        answer:
          'Tak, Bentley Home oferuje program personalizacji pozwalający dostosować materiały, kolory i wykończenia do indywidualnych preferencji.',
      },
    ],
  },

  {
    id: 'bugatti-home',
    name: 'Bugatti Home',
    slug: 'bugatti-home',
    image: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    shortDescription: 'Ekstremalna wydajność i luksus w kolekcji mebli Bugatti Home.',
    fullDescription:
      'Bugatti Home to ekstrawagancja i perfekcja techniczna przeniesiona do wnętrz. Kolekcja inspirowana aerodynamicznymi liniami hipersamochodów Bugatti łączy futurystyczny design z najszlachetniejszymi materiałami.',
    heritage: 'Bugatti to legenda motoryzacji, synonim prędkości i luksusu. Bugatti Home kontynuuje tę tradycję w świecie designu wnętrz.',
    materialsAndStyle: [
      'Włókno węglowe',
      'Aluminium lotnicze',
      'Skóra najwyższej jakości',
      'Aerodynamiczne formy',
      'Ekstremalna precyzja',
    ],
    categories: ['meble'],
    productCategories: [
      productCategories.sofy,
      productCategories.fotele,
      productCategories.stoly,
      productCategories.biuro,
    ],
    seo: {
      title: 'Bugatti Home - Ekskluzywne meble | LuxArte',
      description:
        'Meble Bugatti Home w Polsce. Futurystyczny design, włókno węglowe, ekstremalna precyzja. Dealer LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Czy meble Bugatti Home są limitowane?',
        answer:
          'Wiele modeli z kolekcji Bugatti Home produkowanych jest w limitowanych edycjach, co czyni je unikalnymi dziełami kolekcjonerskimi.',
      },
    ],
  },

  // ============================================================================
  // ITALIAN FURNITURE HOUSES
  // ============================================================================
  {
    id: 'visionnaire',
    name: 'Visionnaire',
    slug: 'visionnaire',
    image: `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
    shortDescription: 'Włoska awangarda i artystyczny design w kolekcji Visionnaire.',
    fullDescription:
      'Visionnaire to synonim włoskiej awangardy w designie wnętrz. Marka tworzy kompletne koncepcje lifestyle, łącząc meble, oświetlenie i akcesoria w spójne, artystyczne wizje przestrzeni.',
    heritage: 'Visionnaire powstało w 1959 roku w Bolonii. Od dekad marka inspiruje projektantów na całym świecie swoim odważnym podejściem do designu.',
    materialsAndStyle: [
      'Rzeźbiarskie formy',
      'Szlachetne drewno i metal',
      'Luksusowe tkaniny',
      'Artystyczne wykończenia',
      'Współpraca z designerami',
    ],
    categories: ['meble', 'oswietlenie'],
    productCategories: [
      productCategories.sofy,
      productCategories.fotele,
      productCategories['stoliki-kawowe'],
      productCategories.stoly,
      productCategories.lozka,
      productCategories.zyrandole,
    ],
    seo: {
      title: 'Visionnaire - Włoskie meble designerskie | LuxArte',
      description:
        'Kolekcja Visionnaire w Polsce. Włoska awangarda, artystyczny design, kompletne koncepcje wnętrz. Showroom LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Czy Visionnaire oferuje kompletne projekty wnętrz?',
        answer:
          'Tak, Visionnaire tworzy kompleksowe koncepcje lifestyle obejmujące meble, oświetlenie, tekstylia i akcesoria, tworząc spójne, luksusowe wnętrza.',
      },
    ],
  },

  // ============================================================================
  // KITCHEN BRANDS
  // ============================================================================
  {
    id: 'scic',
    name: 'SCIC Italia',
    slug: 'scic',
    image: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
    shortDescription: 'Włoskie kuchnie premium łączące tradycję z innowacją.',
    fullDescription:
      'SCIC Italia to synonim włoskiej doskonałości w projektowaniu kuchni. Marka łączy wielopokoleniowe rzemiosło z najnowszymi technologiami, tworząc kuchnie szyte na miarę dla najbardziej wymagających klientów.',
    heritage: 'SCIC od 1935 roku tworzy luksusowe kuchnie w Cremonie. Każda kuchnia powstaje w tradycyjnych warsztatach pod okiem mistrzów rzemiosła.',
    materialsAndStyle: [
      'Szlachetne drewno i forniry',
      'Marmur i kamień naturalny',
      'Mosiądz i stal nierdzewna',
      'Ręcznie wykonane detale',
      'Indywidualne projekty',
    ],
    categories: ['kuchnie'],
    productCategories: [productCategories.kuchnie],
    externalUrl: 'https://www.scic.it',
    seo: {
      title: 'SCIC Italia - Luksusowe kuchnie włoskie | LuxArte',
      description:
        'Kuchnie SCIC Italia w Polsce. Włoskie rzemiosło od 1935 roku, kuchnie na wymiar, materiały premium. Showroom LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Jaki jest proces projektowania kuchni SCIC?',
        answer:
          'Proces zaczyna się od konsultacji w showroomie, następnie tworzymy projekt 3D i wizualizacje. Po akceptacji kuchnia jest produkowana we Włoszech i instalowana przez nasz zespół.',
      },
      {
        question: 'Ile trwa realizacja kuchni SCIC?',
        answer:
          'Standardowy czas realizacji to 10-14 tygodni od zatwierdzenia projektu, w zależności od złożoności i wybranych materiałów.',
      },
    ],
  },

  {
    id: 'valcucine',
    name: 'Valcucine',
    slug: 'valcucine',
    image: `${CDN_BASE}/2024/03/1356_valcucine_logica_celata_0123.webp`,
    shortDescription: 'Innowacyjne włoskie kuchnie z naciskiem na ekologię i ergonomię.',
    fullDescription:
      'Valcucine to pionier zrównoważonego designu kuchni. Marka łączy włoską estetykę z innowacyjnymi rozwiązaniami ekologicznymi, tworząc kuchnie, które są piękne, funkcjonalne i przyjazne dla środowiska.',
    heritage: 'Od 1980 roku Valcucine rewolucjonizuje świat kuchni, wprowadzając innowacje takie jak system Logica i mechanizm V-Motion.',
    materialsAndStyle: [
      'Materiały z recyklingu',
      'Aluminium i szkło',
      'System Logica Celata',
      'Ergonomiczne rozwiązania',
      'Zrównoważony design',
    ],
    categories: ['kuchnie'],
    productCategories: [productCategories.kuchnie],
    externalUrl: 'https://www.valcucine.com',
    seo: {
      title: 'Valcucine - Ekologiczne kuchnie włoskie | LuxArte',
      description:
        'Kuchnie Valcucine w Polsce. Zrównoważony design, innowacyjne rozwiązania, włoska jakość. Autoryzowany dealer LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Co to jest system Logica Celata?',
        answer:
          'Logica Celata to innowacyjny system chowania przestrzeni roboczej za eleganckimi frontami, pozwalający ukryć cały bałagan jednym ruchem.',
      },
    ],
  },

  // ============================================================================
  // WARDROBE & DRESSING ROOM
  // ============================================================================
  {
    id: 'misura-emme',
    name: 'MisuraEmme',
    slug: 'misura-emme',
    image: `${CDN_BASE}/2023/04/luxarte-luksusowa-garderoba-14-paloaltofree-walk-in-closet-design-misuraemme.jpeg`,
    shortDescription: 'Włoskie systemy garderobiane i meble modułowe najwyższej klasy.',
    fullDescription:
      'MisuraEmme to włoska doskonałość w systemach garderobianych i meblach modułowych. Marka oferuje nieograniczone możliwości personalizacji, tworząc garderoby i meble idealnie dopasowane do każdej przestrzeni.',
    heritage: 'MisuraEmme od 1969 roku projektuje i produkuje meble we Włoszech, łącząc tradycję rzemiosła z nowoczesnym designem.',
    materialsAndStyle: [
      'Systemy modułowe',
      'Szklane fronty',
      'LED i oświetlenie zintegrowane',
      'Forniry i lakiery',
      'Indywidualna konfiguracja',
    ],
    categories: ['garderoby', 'meble'],
    productCategories: [
      productCategories.garderoby,
      productCategories.szezlongi,
      productCategories.komody,
    ],
    seo: {
      title: 'MisuraEmme - Luksusowe garderoby włoskie | LuxArte',
      description:
        'Garderoby MisuraEmme w Polsce. Włoskie systemy modułowe, walk-in closets, indywidualne projekty. Showroom LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Czy MisuraEmme oferuje garderoby na wymiar?',
        answer:
          'Tak, każda garderoba MisuraEmme jest projektowana indywidualnie i produkowana na wymiar, z uwzględnieniem wszystkich potrzeb i preferencji klienta.',
      },
    ],
  },

  // ============================================================================
  // OUTDOOR FURNITURE
  // ============================================================================
  {
    id: 'exteta',
    name: 'Exteta',
    slug: 'exteta',
    image: `${CDN_BASE}/2023/06/exteta-luksusowe-meble-ogrodow-luxarte.webp`,
    shortDescription: 'Luksusowe włoskie meble ogrodowe dla najwyższej klasy przestrzeni zewnętrznych.',
    fullDescription:
      'Exteta tworzy luksusowe meble ogrodowe, które zamazują granicę między wnętrzem a zewnętrzem. Kolekcja łączy włoski design z odpornością na warunki atmosferyczne, oferując elegancję na każdą porę roku.',
    heritage: 'Exteta powstała z pasji do życia na świeżym powietrzu i chęci stworzenia mebli ogrodowych o jakości dorównującej meblom wewnętrznym.',
    materialsAndStyle: [
      'Teak i drewno egzotyczne',
      'Aluminium proszkowane',
      'Tkaniny outdoorowe',
      'Odporne na UV i wodę',
      'Eleganckie linie',
    ],
    categories: ['meble-ogrodowe'],
    productCategories: [
      productCategories['meble-ogrodowe'],
      productCategories.fotele,
      productCategories.sofy,
      productCategories.dywany,
    ],
    seo: {
      title: 'Exteta - Luksusowe meble ogrodowe | LuxArte',
      description:
        'Meble ogrodowe Exteta w Polsce. Włoski design, najwyższa jakość, odporność na warunki zewnętrzne. Dealer LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Czy meble Exteta można zostawiać na zewnątrz zimą?',
        answer:
          'Meble Exteta są zaprojektowane do użytku przez cały rok. Zalecamy jednak przechowywanie poduszek i tekstyliów w sezonie zimowym.',
      },
    ],
  },

  // ============================================================================
  // LIGHTING BRANDS
  // ============================================================================
  {
    id: 'venicem',
    name: 'Venicem',
    slug: 'venicem',
    image: `${CDN_BASE}/2023/05/Venicem_luxarte.jpg`,
    shortDescription: 'Weneckie oświetlenie artystyczne łączące tradycję z współczesnością.',
    fullDescription:
      'Venicem to wenecka pracownia tworząca wyjątkowe oprawy oświetleniowe. Każda lampa jest dziełem sztuki, łączącym wielowiekową tradycję weneckiego szkła z nowoczesnym designem.',
    heritage: 'Venicem czerpie z bogatej tradycji weneckiego szklarstwa, reinterpretując klasyczne techniki w nowoczesny sposób.',
    materialsAndStyle: [
      'Szkło weneckie dmuchane',
      'Mosiądz i złoto',
      'Artystyczne formy',
      'Ręczna praca',
      'Limitowane serie',
    ],
    categories: ['oswietlenie'],
    productCategories: [
      productCategories.zyrandole,
      productCategories['lampy-wiszace'],
      productCategories['lampy-stolowe'],
      productCategories.kinkiety,
    ],
    seo: {
      title: 'Venicem - Weneckie oświetlenie artystyczne | LuxArte',
      description:
        'Lampy Venicem w Polsce. Weneckie szkło artystyczne, żyrandole, lampy wiszące i stołowe. Showroom LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Czy lampy Venicem są ręcznie robione?',
        answer:
          'Tak, każda lampa Venicem jest ręcznie tworzona przez weneckich artystów szkła, co sprawia, że każdy egzemplarz jest unikalny.',
      },
    ],
  },

  {
    id: 'vanory',
    name: 'Vanory',
    slug: 'vanory',
    image: `${CDN_BASE}/2023/05/vanory_Estelle-Suspension_Slants.jpg`,
    shortDescription: 'Współczesne oświetlenie dekoracyjne o rzeźbiarskich formach.',
    fullDescription:
      'Vanory tworzy oświetlenie, które jest jednocześnie źródłem światła i rzeźbą. Każda lampa to odważna wypowiedź artystyczna, łącząca innowacyjne materiały z niekonwencjonalnymi formami.',
    heritage: 'Vanory to młoda marka z wizją transformacji sposobu, w jaki postrzegamy oświetlenie we wnętrzach.',
    materialsAndStyle: [
      'Szkło artystyczne',
      'Metal i mosiądz',
      'Rzeźbiarskie formy',
      'Innowacyjne kształty',
      'Ciepłe światło LED',
    ],
    categories: ['oswietlenie'],
    productCategories: [
      productCategories.zyrandole,
      productCategories['lampy-wiszace'],
      productCategories['lampy-stolowe'],
    ],
    seo: {
      title: 'Vanory - Oświetlenie dekoracyjne | LuxArte',
      description:
        'Lampy Vanory w Polsce. Rzeźbiarskie formy, szkło artystyczne, nowoczesny design. Autoryzowany dealer LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Czy Vanory oferuje personalizację oświetlenia?',
        answer:
          'Vanory oferuje możliwość dostosowania niektórych modeli pod względem rozmiaru, wykończenia i konfiguracji świateł.',
      },
    ],
  },

  {
    id: 'flos',
    name: 'Flos',
    slug: 'flos',
    image: `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
    shortDescription: 'Ikony włoskiego designu oświetleniowego od 1962 roku.',
    fullDescription:
      'Flos to legendarna włoska marka oświetleniowa, której lampy stały się ikonami designu. Od ponad 60 lat współpracuje z najwybitniejszymi projektantami, tworząc oprawy, które definiują epokę.',
    heritage: 'Założona w 1962 roku, Flos współpracowała z legendami designu jak Castiglioni, Sottsass i Starck, tworząc nieśmiertelne ikony.',
    materialsAndStyle: [
      'Minimalistyczne formy',
      'Innowacyjne technologie',
      'Współpraca z designerami',
      'Kultowe modele',
      'Włoska inżynieria',
    ],
    categories: ['oswietlenie'],
    productCategories: [
      productCategories.zyrandole,
      productCategories['lampy-wiszace'],
      productCategories['lampy-stolowe'],
      productCategories['lampy-podlogowe'],
      productCategories.kinkiety,
    ],
    externalUrl: 'https://www.flos.com',
    seo: {
      title: 'Flos - Ikony włoskiego oświetlenia | LuxArte',
      description:
        'Lampy Flos w Polsce. Legendarne włoskie wzornictwo, kultowe modele od 1962 roku. Autoryzowany dealer LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Które lampy Flos są najbardziej kultowe?',
        answer:
          'Do najbardziej rozpoznawalnych należą Arco, Parentesi, Taraxacum i IC Lights - wszystkie dostępne w naszym showroomie.',
      },
    ],
  },

  // ============================================================================
  // APPLIANCES
  // ============================================================================
  {
    id: 'gaggenau',
    name: 'Gaggenau',
    slug: 'gaggenau',
    image: `${CDN_BASE}/2023/02/22745612_gaggenau-essential-induction-7.webp`,
    shortDescription: 'Niemieckie AGD premium dla profesjonalnych kuchni domowych.',
    fullDescription:
      'Gaggenau to synonim najwyższej klasy AGD dla kuchni. Niemiecka precyzja inżynieryjna łączy się z profesjonalnymi funkcjami, oferując sprzęt, który spełnia oczekiwania najbardziej wymagających kucharzy.',
    heritage: 'Od 1683 roku Gaggenau produkuje urządzenia premium. To marka, której ufają profesjonalni szefowie kuchni na całym świecie.',
    materialsAndStyle: [
      'Stal nierdzewna',
      'Profesjonalne funkcje',
      'Minimalistyczny design',
      'Niemiecka precyzja',
      'Integracja z kuchnią',
    ],
    categories: ['agd', 'kuchnie'],
    productCategories: [productCategories.kuchnie],
    externalUrl: 'https://www.gaggenau.com',
    seo: {
      title: 'Gaggenau - Premium AGD kuchenne | LuxArte',
      description:
        'Sprzęt AGD Gaggenau w Polsce. Niemiecka precyzja, profesjonalne funkcje, integracja z luksusowymi kuchniami. Showroom LuxArte Warszawa.',
    },
    faq: [
      {
        question: 'Czy Gaggenau integruje się z kuchniami SCIC i Valcucine?',
        answer:
          'Tak, oferujemy kompleksowe projekty łączące kuchnie SCIC lub Valcucine z AGD Gaggenau, tworząc spójne, luksusowe rozwiązania.',
      },
    ],
  },
] as const;

/**
 * Get brand by slug
 */
export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}

/**
 * Get brands by category
 */
export function getBrandsByCategory(category: BrandCategory): readonly Brand[] {
  return brands.filter((brand) => brand.categories.includes(category));
}

/**
 * Get all unique first letters for alphabetical filter
 */
export function getBrandFirstLetters(): string[] {
  const letters = new Set(brands.map((brand) => brand.name.charAt(0).toUpperCase()));
  return Array.from(letters).sort();
}

/**
 * Filter brands by letter
 */
export function getBrandsByLetter(letter: string): readonly Brand[] {
  return brands.filter((brand) => brand.name.charAt(0).toUpperCase() === letter.toUpperCase());
}

/**
 * Search brands by query
 */
export function searchBrands(query: string): readonly Brand[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) return brands;

  return brands.filter(
    (brand) =>
      brand.name.toLowerCase().includes(normalizedQuery) ||
      brand.shortDescription.toLowerCase().includes(normalizedQuery)
  );
}
