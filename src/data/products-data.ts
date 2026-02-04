/**
 * ============================================================================
 * PRODUCTS DATA - LUXARTE
 * ============================================================================
 *
 * Centralized product data source for /products/[slug] detail pages.
 * Products sourced from live site, outlet items, and brand catalogues.
 * No invented specifications or pricing - data from real sources only.
 *
 * Extended with full catalog import from legacy WooCommerce site.
 * Total Products: 816+
 *
 * @version 2.0.0
 */

import {
  catalogProducts,
  brandNames,
  categoryNames,
  type BrandSlug,
  type ProductCategorySlug,
} from '../../data/products-catalog-normalized';

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Product Gallery Image Interface
 */
export interface ProductGalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

/**
 * Product Category Mapping - Extended for full catalog
 */
export type ProductCategory =
  | 'sofy'
  | 'fotele'
  | 'komody'
  | 'oswietlenie'
  | 'lozka'
  | 'kuchnie'
  | 'lazienki'
  | 'garderoby'
  | 'stoliki-kawowe'
  | 'stoliki-boczne'
  | 'biurka'
  | 'pufy'
  | 'krzesla'
  | 'stoly'
  | 'szafki-nocne'
  | 'konsole'
  | 'regaly'
  | 'szezlongi'
  | 'dywany'
  | 'lustra'
  | 'akcesoria'
  | 'donice'
  | 'hokery'
  | 'kinkiety'
  | 'lampy-podlogowe'
  | 'lampy-stolowe'
  | 'lampy-wiszace'
  | 'zyrandole'
  | 'meble-ogrodowe';

/**
 * Product Data Interface
 */
export interface Product {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly brandSlug: string;
  readonly categorySlug: ProductCategory;
  readonly heroImage: ProductGalleryImage;
  readonly galleryImages: readonly ProductGalleryImage[];
  readonly shortDescription: string;
  readonly features?: readonly string[];
  readonly materials?: readonly string[];
  readonly dimensions?: string;
  readonly tags: readonly string[];
  readonly relatedProjectSlugs?: readonly string[];
  readonly relatedOutletSlugs?: readonly string[];
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

/**
 * Curated Products Data (Full Details)
 * Sourced from luxarte.pl live site and outlet inventory
 * These products have complete descriptions, materials, features, etc.
 */
const curatedProducts: readonly Product[] = [
  // ============================================================================
  // BENTLEY HOME PRODUCTS
  // ============================================================================
  {
    id: 'bentley-president-desk',
    name: 'Biurko President',
    slug: 'biurko-bentley-president',
    brandSlug: 'bentley-home',
    categorySlug: 'biurka',
    heroImage: {
      id: 'president-hero',
      src: `${CDN_BASE}/2025/04/bentley-home-president-writing-desk-white.webp`,
      alt: 'Biurko President Bentley Home - widok frontalny',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'president-1',
        src: `${CDN_BASE}/2025/04/bentley-home-president-writing-desk-white.webp`,
        alt: 'Biurko President - wykończenie białe',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Kształt biurka nawiązuje do designu samochodów, aerodynamicznych i opływowych form. Wykonane z giętego drewna, wykończonego fornirem lub skórą. Opcjonalnie dostępna komoda z tapicerowanymi frontami w pikowanej skórze.',
    materials: ['gięte drewno', 'fornir', 'skóra'],
    dimensions: '240x108x73H cm / 300x108x73H cm',
    tags: ['biuro', 'gabinet', 'drewno', 'skóra', 'premium'],
    relatedProjectSlugs: ['willa-bentley'],
    seo: {
      title: 'Biurko President Bentley Home | LuxArte',
      description:
        'Ekskluzywne biurko President marki Bentley Home. Aerodynamiczny design inspirowany motoryzacją, wykonane z giętego drewna i skóry.',
    },
  },
  {
    id: 'bentley-galloway-bench',
    name: 'Bench Galloway',
    slug: 'lawka-bentley-galloway',
    brandSlug: 'bentley-home',
    categorySlug: 'pufy',
    heroImage: {
      id: 'galloway-hero',
      src: `${CDN_BASE}/2025/04/bentley-home-galloway-bench-front-luksusowe-meble-do-salonu-luxarte.webp`,
      alt: 'Ławka Galloway Bentley Home - widok frontalny',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'galloway-1',
        src: `${CDN_BASE}/2025/04/bentley-home-galloway-bench-front-luksusowe-meble-do-salonu-luxarte.webp`,
        alt: 'Ławka Galloway - widok główny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Ławka Galloway urzeka urokiem giętego drewna. Rama składa się z trzech warstw: zewnętrzna z fornirowanego drewna, wewnętrzna warstwa lakierowana na połysk, metalowy profil w kolorze brązu. Trzecia warstwa pokryta skórą.',
    materials: ['fornirowane drewno', 'lakier połysk', 'metal brąz', 'skóra'],
    dimensions: '171x51x56H cm',
    features: [
      'Rama z trzech warstw materiałów',
      'Fornir Warm Grey Fiddleback Sycamore, Smoked Liquidambar lub Burr Walnut',
      'Elegancka wewnętrzna warstwa lakierowana na czarno',
    ],
    tags: ['ławka', 'pufa', 'gięte drewno', 'skóra', 'salon'],
    relatedProjectSlugs: ['willa-bentley'],
    seo: {
      title: 'Bench Galloway Bentley Home | LuxArte',
      description:
        'Ekskluzywna ławka Galloway marki Bentley Home. Unikalna konstrukcja z trzech warstw giętego drewna, metalu i skóry.',
    },
  },
  {
    id: 'bentley-villa-sofa',
    name: 'Sofa Villa',
    slug: 'sofa-bentley-villa',
    brandSlug: 'bentley-home',
    categorySlug: 'sofy',
    heroImage: {
      id: 'bentley-villa-hero',
      src: `${CDN_BASE}/2025/06/outlet-bentley-villa-sofa-1.webp`,
      alt: 'Sofa Villa Bentley Home - widok frontalny',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'bentley-villa-1',
        src: `${CDN_BASE}/2025/06/outlet-bentley-villa-sofa-1.webp`,
        alt: 'Sofa Villa - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'bentley-villa-2',
        src: `${CDN_BASE}/2025/06/outlet-bentley-villa-sofa-2.webp`,
        alt: 'Sofa Villa - detal tapicerki',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Modularna sofa Villa z kolekcji Bentley Home. Eleganckie linie inspirowane brytyjską tradycją motoryzacyjną, wykonana z najwyższej jakości materiałów.',
    materials: ['skóra naturalna', 'drewno'],
    tags: ['sofa', 'modułowa', 'skóra', 'salon', 'luksus'],
    relatedProjectSlugs: ['willa-bentley'],
    relatedOutletSlugs: ['bentley-home-villa-sofa'],
    seo: {
      title: 'Sofa Villa Bentley Home | LuxArte',
      description:
        'Modularna sofa Villa marki Bentley Home. Brytyjska elegancja i najwyższa jakość wykonania dla ekskluzywnych wnętrz.',
    },
  },
  {
    id: 'bentley-cinema-seat',
    name: 'Fotel Kinowy Bentley',
    slug: 'fotel-kinowy-bentley',
    brandSlug: 'bentley-home',
    categorySlug: 'fotele',
    heroImage: {
      id: 'cinema-hero',
      src: `${CDN_BASE}/2025/06/outlet-bentley-cinema-1.webp`,
      alt: 'Fotel kinowy Bentley Home',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'cinema-1',
        src: `${CDN_BASE}/2025/06/outlet-bentley-cinema-1.webp`,
        alt: 'Fotel kinowy - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'cinema-2',
        src: `${CDN_BASE}/2025/06/outlet-bentley-cinema-2.webp`,
        alt: 'Fotel kinowy - perspektywa',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Ekskluzywny fotel kinowy z kolekcji Bentley Home. Zaprojektowany dla prywatnych sal kinowych, łączy najwyższy komfort z brytyjską elegancją.',
    features: [
      'Regulowana pozycja oparcia',
      'Zintegrowany stolik boczny',
      'Tapicerka skórzana premium',
    ],
    materials: ['skóra naturalna', 'metal szczotkowany', 'drewno'],
    tags: ['fotel', 'kino domowe', 'skóra', 'luksus', 'relaks'],
    relatedProjectSlugs: ['willa-bentley'],
    relatedOutletSlugs: ['bentley-home-cinema'],
    seo: {
      title: 'Fotel Kinowy Bentley Home | LuxArte',
      description:
        'Ekskluzywny fotel kinowy Bentley Home do prywatnych sal kinowych. Najwyższy komfort i brytyjska elegancja.',
    },
  },

  // ============================================================================
  // VERSACE HOME PRODUCTS
  // ============================================================================
  {
    id: 'versace-stiletto-bar',
    name: 'Barek Stiletto',
    slug: 'barek-versace-stiletto',
    brandSlug: 'versace-home',
    categorySlug: 'komody',
    heroImage: {
      id: 'stiletto-hero',
      src: `${CDN_BASE}/2025/05/VE-Stiletto-bar-cabinet_front-meble-versace-luxarte.webp`,
      alt: 'Barek Stiletto Versace Home',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'stiletto-1',
        src: `${CDN_BASE}/2025/05/VE-Stiletto-bar-cabinet_front-meble-versace-luxarte.webp`,
        alt: 'Barek Stiletto - widok frontalny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'W Stiletto Bar kobiecość Versace jest celebrowana w każdym szczególe. Lakierowana rama i drzwi z drewna dostępne w kolorze Chianti, czarnym, kości słoniowej lub czerwonym. Stalowe uchwyty ozdobione logo 3D Medusa.',
    materials: ['drewno lakierowane', 'stal', 'detale Medusa'],
    dimensions: '120x51x141H cm',
    features: [
      'Wykończenie błyszczące szczotkowane lub matowe Satin Grey',
      'Logo 3D Medusa na uchwytach',
      'Dostępne kolory: Chianti, czarny, kość słoniowa, czerwony',
    ],
    tags: ['barek', 'komoda', 'Medusa', 'salon', 'jadalnia'],
    relatedProjectSlugs: ['apartament-versace'],
    seo: {
      title: 'Barek Stiletto Versace Home | LuxArte',
      description:
        'Ekskluzywny barek Stiletto marki Versace Home. Ikona włoskiego designu z charakterystycznym motywem Medusa.',
    },
  },
  {
    id: 'versace-zensational-sofa',
    name: 'Sofa Zensational',
    slug: 'sofa-versace-zensational',
    brandSlug: 'versace-home',
    categorySlug: 'sofy',
    heroImage: {
      id: 'zensational-hero',
      src: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
      alt: 'Sofa Zensational Versace Home',
      width: 1024,
      height: 718,
    },
    galleryImages: [
      {
        id: 'zensational-1',
        src: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
        alt: 'Sofa Zensational - widok frontalny',
        width: 1024,
        height: 718,
      },
      {
        id: 'zensational-2',
        src: `${CDN_BASE}/2025/06/outlet-versace-zensational-1.webp`,
        alt: 'Sofa Zensational - detal',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Ikona kolekcji Versace Home. Sofa Zensational łączy organiczne formy z charakterystycznym dla marki przepychem. Miękkie, zaokrąglone linie tworzą niepowtarzalną sylwetkę.',
    materials: ['tkanina Versace', 'pianka wysokoelastyczna', 'drewno'],
    tags: ['sofa', 'ikona', 'tkanina', 'salon', 'glamour'],
    relatedProjectSlugs: ['apartament-versace'],
    relatedOutletSlugs: ['versace-zensational'],
    seo: {
      title: 'Sofa Zensational Versace Home | LuxArte',
      description:
        'Kultowa sofa Zensational marki Versace Home. Organiczne formy i luksusowa tkanina dla wyjątkowych wnętrz.',
    },
  },

  // ============================================================================
  // DOLCE & GABBANA CASA PRODUCTS
  // ============================================================================
  {
    id: 'dg-cupido-bar',
    name: 'Barek Cupido',
    slug: 'barek-dolce-gabbana-cupido',
    brandSlug: 'dolce-gabbana-casa',
    categorySlug: 'komody',
    heroImage: {
      id: 'cupido-hero',
      src: `${CDN_BASE}/2025/05/dg-barek-cupido-front.webp`,
      alt: 'Barek Cupido Dolce & Gabbana Casa',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'cupido-1',
        src: `${CDN_BASE}/2025/05/dg-barek-cupido-front.webp`,
        alt: 'Barek Cupido - widok frontalny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Barek Cupido z kolekcji Dolce & Gabbana Casa. Inspirowany sycylijską tradycją rzemieślniczą, zdobiony ręcznie malowanymi motywami.',
    materials: ['drewno', 'ręczne zdobienia', 'mosiądz'],
    tags: ['barek', 'Sycylia', 'ręczne zdobienia', 'jadalnia'],
    relatedProjectSlugs: ['apartament-dolce-gabbana'],
    seo: {
      title: 'Barek Cupido Dolce & Gabbana Casa | LuxArte',
      description:
        'Ekskluzywny barek Cupido z kolekcji Dolce & Gabbana Casa. Sycylijska tradycja rzemieślnicza w nowoczesnym wydaniu.',
    },
  },
  {
    id: 'dg-anemone-sofa',
    name: 'Sofa Anemone',
    slug: 'sofa-dolce-gabbana-anemone',
    brandSlug: 'dolce-gabbana-casa',
    categorySlug: 'sofy',
    heroImage: {
      id: 'anemone-hero',
      src: `${CDN_BASE}/2025/06/outlet-dg-anemone-1.webp`,
      alt: 'Sofa Anemone Dolce & Gabbana Casa',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'anemone-1',
        src: `${CDN_BASE}/2025/06/outlet-dg-anemone-1.webp`,
        alt: 'Sofa Anemone - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'anemone-2',
        src: `${CDN_BASE}/2025/06/outlet-dg-anemone-2.webp`,
        alt: 'Sofa Anemone - detal tkaniny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Sofa Anemone z kolekcji Dolce & Gabbana Casa. Inspirowana śródziemnomorską florą, z charakterystycznym kwiatowym wzorem i bogatą kolorystyką.',
    materials: ['tkanina żakardowa', 'drewno bukowe', 'pianka HR'],
    tags: ['sofa', 'kwiaty', 'Sycylia', 'salon', 'kolor'],
    relatedProjectSlugs: ['apartament-dolce-gabbana'],
    relatedOutletSlugs: ['dg-anemone'],
    seo: {
      title: 'Sofa Anemone Dolce & Gabbana Casa | LuxArte',
      description:
        'Sofa Anemone z kolekcji Dolce & Gabbana Casa. Śródziemnomorska inspiracja i sycylijskie rzemiosło.',
    },
  },

  // ============================================================================
  // VISIONNAIRE PRODUCTS
  // ============================================================================
  {
    id: 'visionnaire-loving-frank',
    name: 'Sofa Loving Frank',
    slug: 'sofa-visionnaire-loving-frank',
    brandSlug: 'visionnaire',
    categorySlug: 'sofy',
    heroImage: {
      id: 'loving-frank-hero',
      src: `${CDN_BASE}/2025/06/outlet-visionnaire-loving-frank-1.webp`,
      alt: 'Sofa Loving Frank Visionnaire',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'loving-frank-1',
        src: `${CDN_BASE}/2025/06/outlet-visionnaire-loving-frank-1.webp`,
        alt: 'Sofa Loving Frank - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'loving-frank-2',
        src: `${CDN_BASE}/2025/06/outlet-visionnaire-loving-frank-2.webp`,
        alt: 'Sofa Loving Frank - perspektywa',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Monumentalna sofa Loving Frank z kolekcji Visionnaire. Projekt łączy architektoniczne proporcje z najwyższym komfortem. Idealna do przestronnych salonów i reprezentacyjnych wnętrz.',
    materials: ['skóra naturalna', 'drewno dębowe', 'metal szczotkowany'],
    tags: ['sofa', 'architektura', 'skóra', 'salon', 'przestrzeń'],
    relatedOutletSlugs: ['visionnaire-loving-frank'],
    seo: {
      title: 'Sofa Loving Frank Visionnaire | LuxArte',
      description:
        'Monumentalna sofa Loving Frank marki Visionnaire. Architektoniczne proporcje i luksusowe materiały.',
    },
  },
  {
    id: 'visionnaire-coffee-table',
    name: 'Stolik Kawowy Visionnaire',
    slug: 'stolik-kawowy-visionnaire',
    brandSlug: 'visionnaire',
    categorySlug: 'stoliki-kawowe',
    heroImage: {
      id: 'visionnaire-coffee-hero',
      src: `${CDN_BASE}/2025/06/outlet-visionnaire-coffee-table-1.webp`,
      alt: 'Stolik kawowy Visionnaire',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'visionnaire-coffee-1',
        src: `${CDN_BASE}/2025/06/outlet-visionnaire-coffee-table-1.webp`,
        alt: 'Stolik kawowy - widok główny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Elegancki stolik kawowy z kolekcji Visionnaire. Rzeźbiarska forma łączy marmur z metalem w harmonijną całość.',
    materials: ['marmur Calacatta', 'metal mosiężny'],
    tags: ['stolik', 'marmur', 'metal', 'salon'],
    relatedOutletSlugs: ['visionnaire-coffee-table'],
    seo: {
      title: 'Stolik Kawowy Visionnaire | LuxArte',
      description:
        'Elegancki stolik kawowy Visionnaire. Połączenie marmuru Calacatta z mosiądzem.',
    },
  },

  // ============================================================================
  // TRUSSARDI CASA PRODUCTS
  // ============================================================================
  {
    id: 'trussardi-astract-sofa',
    name: 'Sofa Astract',
    slug: 'sofa-trussardi-astract',
    brandSlug: 'trussardi-casa',
    categorySlug: 'sofy',
    heroImage: {
      id: 'astract-hero',
      src: `${CDN_BASE}/2025/06/outlet-trussardi-astract-1.webp`,
      alt: 'Sofa Astract Trussardi Casa',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'astract-1',
        src: `${CDN_BASE}/2025/06/outlet-trussardi-astract-1.webp`,
        alt: 'Sofa Astract - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'astract-2',
        src: `${CDN_BASE}/2025/06/outlet-trussardi-astract-2.webp`,
        alt: 'Sofa Astract - detal',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Sofa Astract z kolekcji Trussardi Casa. Minimalistyczna forma z charakterystycznym pikowaniem i detalami ze skóry naturalnej.',
    materials: ['skóra naturalna', 'tkanina', 'drewno'],
    tags: ['sofa', 'minimalizm', 'pikowanie', 'skóra', 'salon'],
    relatedOutletSlugs: ['trussardi-astract'],
    seo: {
      title: 'Sofa Astract Trussardi Casa | LuxArte',
      description:
        'Minimalistyczna sofa Astract marki Trussardi Casa. Włoska elegancja i najwyższa jakość materiałów.',
    },
  },
  {
    id: 'trussardi-papel-desk',
    name: 'Biurko Papel',
    slug: 'biurko-trussardi-papel',
    brandSlug: 'trussardi-casa',
    categorySlug: 'biurka',
    heroImage: {
      id: 'papel-hero',
      src: `${CDN_BASE}/2025/04/trussardi-papel-desk-luxarte.webp`,
      alt: 'Biurko Papel Trussardi Casa',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'papel-1',
        src: `${CDN_BASE}/2025/04/trussardi-papel-desk-luxarte.webp`,
        alt: 'Biurko Papel - widok główny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Eleganckie biurko Papel z kolekcji Trussardi Casa. Lekka, geometryczna konstrukcja z blatem pokrytym skórą i metalowymi nogami.',
    materials: ['skóra naturalna', 'metal lakierowany', 'drewno'],
    tags: ['biurko', 'gabinet', 'skóra', 'metal', 'geometria'],
    seo: {
      title: 'Biurko Papel Trussardi Casa | LuxArte',
      description:
        'Eleganckie biurko Papel marki Trussardi Casa. Geometryczna forma i luksusowe materiały.',
    },
  },

  // ============================================================================
  // ROBERTO CAVALLI HOME PRODUCTS
  // ============================================================================
  {
    id: 'cavalli-armchair',
    name: 'Fotel Roberto Cavalli',
    slug: 'fotel-roberto-cavalli',
    brandSlug: 'roberto-cavalli-home',
    categorySlug: 'fotele',
    heroImage: {
      id: 'cavalli-armchair-hero',
      src: `${CDN_BASE}/2025/06/outlet-cavalli-armchair-1.webp`,
      alt: 'Fotel Roberto Cavalli Home Interiors',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'cavalli-armchair-1',
        src: `${CDN_BASE}/2025/06/outlet-cavalli-armchair-1.webp`,
        alt: 'Fotel Cavalli - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'cavalli-armchair-2',
        src: `${CDN_BASE}/2025/06/outlet-cavalli-armchair-2.webp`,
        alt: 'Fotel Cavalli - detal tkaniny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Elegancki fotel z kolekcji Roberto Cavalli Home Interiors. Charakterystyczny dla marki animalistyczny print w połączeniu z luksusowymi materiałami.',
    materials: ['tkanina z nadrukiem', 'drewno lakierowane', 'metal złoty'],
    tags: ['fotel', 'animal print', 'glamour', 'salon'],
    relatedOutletSlugs: ['roberto-cavalli-armchair'],
    seo: {
      title: 'Fotel Roberto Cavalli Home | LuxArte',
      description:
        'Elegancki fotel z kolekcji Roberto Cavalli Home. Charakterystyczny animalistyczny styl i luksusowe wykonanie.',
    },
  },

  // ============================================================================
  // BUGATTI HOME PRODUCTS
  // ============================================================================
  {
    id: 'bugatti-armchair',
    name: 'Fotel Bugatti',
    slug: 'fotel-bugatti',
    brandSlug: 'bugatti-home',
    categorySlug: 'fotele',
    heroImage: {
      id: 'bugatti-armchair-hero',
      src: `${CDN_BASE}/2025/06/outlet-bugatti-armchair-1.webp`,
      alt: 'Fotel Bugatti Home',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'bugatti-armchair-1',
        src: `${CDN_BASE}/2025/06/outlet-bugatti-armchair-1.webp`,
        alt: 'Fotel Bugatti - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'bugatti-armchair-2',
        src: `${CDN_BASE}/2025/06/outlet-bugatti-armchair-2.webp`,
        alt: 'Fotel Bugatti - detal skóry',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Fotel z kolekcji Bugatti Home. Aerodynamiczne linie inspirowane legendarnymi samochodami, wykonany z najwyższej jakości skóry i włókna węglowego.',
    materials: ['skóra naturalna', 'włókno węglowe', 'aluminium'],
    features: [
      'Design inspirowany Bugatti Chiron',
      'Detale z włókna węglowego',
      'Pikowana skóra premium',
    ],
    tags: ['fotel', 'motoryzacja', 'carbon', 'skóra', 'sport'],
    relatedOutletSlugs: ['bugatti-armchair'],
    seo: {
      title: 'Fotel Bugatti Home | LuxArte',
      description:
        'Ekskluzywny fotel Bugatti Home. Aerodynamiczny design inspirowany legendarnymi samochodami.',
    },
  },

  // ============================================================================
  // FLOS LIGHTING
  // ============================================================================
  {
    id: 'flos-wireline',
    name: 'Lampa Wireline',
    slug: 'lampa-flos-wireline',
    brandSlug: 'flos',
    categorySlug: 'oswietlenie',
    heroImage: {
      id: 'wireline-hero',
      src: `${CDN_BASE}/2025/06/outlet-flos-wireline-1.webp`,
      alt: 'Lampa Wireline Flos',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'wireline-1',
        src: `${CDN_BASE}/2025/06/outlet-flos-wireline-1.webp`,
        alt: 'Lampa Wireline - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'wireline-2',
        src: `${CDN_BASE}/2025/06/outlet-flos-wireline-2.webp`,
        alt: 'Lampa Wireline - detal',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Kultowa lampa Wireline marki Flos, projekt Formafantasma. Innowacyjne połączenie przemysłowego kabla z szklanym kloszem w kształcie rurki.',
    features: [
      'Projekt: Formafantasma',
      'Technologia LED',
      'Regulowana wysokość',
    ],
    materials: ['szkło dmuchane', 'guma silikonowa', 'aluminium'],
    tags: ['lampa', 'LED', 'design', 'jadalnia', 'salon'],
    relatedOutletSlugs: ['flos-wireline'],
    seo: {
      title: 'Lampa Wireline Flos | LuxArte',
      description:
        'Kultowa lampa Wireline marki Flos. Innowacyjny design Formafantasma z technologią LED.',
    },
  },

  // ============================================================================
  // SCIC KITCHEN
  // ============================================================================
  {
    id: 'scic-kitchen',
    name: 'Kuchnia SCIC',
    slug: 'kuchnia-scic',
    brandSlug: 'scic',
    categorySlug: 'kuchnie',
    heroImage: {
      id: 'scic-hero',
      src: `${CDN_BASE}/2025/06/outlet-scic-kitchen-1.webp`,
      alt: 'Kuchnia SCIC Italia',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'scic-1',
        src: `${CDN_BASE}/2025/06/outlet-scic-kitchen-1.webp`,
        alt: 'Kuchnia SCIC - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'scic-2',
        src: `${CDN_BASE}/2025/06/outlet-scic-kitchen-2.webp`,
        alt: 'Kuchnia SCIC - strefa robocza',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Ekskluzywna kuchnia włoskiej marki SCIC. Połączenie tradycyjnego rzemiosła z nowoczesnym designem. Wyspa kuchenna z blatem z naturalnego kamienia.',
    features: [
      'Ręcznie wykonane fronty',
      'Blat z naturalnego kamienia',
      'System soft-close',
    ],
    materials: ['drewno lakierowane', 'marmur', 'stal nierdzewna'],
    tags: ['kuchnia', 'wyspa', 'marmur', 'włoskie rzemiosło'],
    relatedOutletSlugs: ['scic-kitchen'],
    seo: {
      title: 'Kuchnia SCIC Italia | LuxArte',
      description:
        'Ekskluzywna kuchnia SCIC Italia. Włoskie rzemiosło i nowoczesny design w jednym.',
    },
  },

  // ============================================================================
  // MISURAEMME WARDROBE
  // ============================================================================
  {
    id: 'misuraemme-wardrobe',
    name: 'Garderoba MisuraEmme',
    slug: 'garderoba-misuraemme',
    brandSlug: 'misuraemme',
    categorySlug: 'garderoby',
    heroImage: {
      id: 'misuraemme-hero',
      src: `${CDN_BASE}/2025/06/outlet-misuraemme-wardrobe-1.webp`,
      alt: 'Garderoba MisuraEmme',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'misuraemme-1',
        src: `${CDN_BASE}/2025/06/outlet-misuraemme-wardrobe-1.webp`,
        alt: 'Garderoba MisuraEmme - widok główny',
        width: 1200,
        height: 800,
      },
      {
        id: 'misuraemme-2',
        src: `${CDN_BASE}/2025/06/outlet-misuraemme-wardrobe-2.webp`,
        alt: 'Garderoba MisuraEmme - wnętrze',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'System garderobowy MisuraEmme. Modułowa konstrukcja pozwala na pełną personalizację przestrzeni. Eleganckie wykończenie z oświetleniem LED.',
    features: [
      'System modułowy',
      'Oświetlenie LED',
      'Wysuwane szuflady z organizerem',
    ],
    materials: ['MDF lakierowany', 'aluminium', 'szkło'],
    tags: ['garderoba', 'modułowa', 'LED', 'organizacja'],
    relatedOutletSlugs: ['misuraemme-wardrobe'],
    seo: {
      title: 'Garderoba MisuraEmme | LuxArte',
      description:
        'System garderobowy MisuraEmme. Modułowa konstrukcja i eleganckie wykończenie z oświetleniem LED.',
    },
  },

  // ============================================================================
  // ADDITIONAL BENTLEY PRODUCTS
  // ============================================================================
  {
    id: 'bentley-styal-desk',
    name: 'Biurko Styal',
    slug: 'biurko-bentley-styal',
    brandSlug: 'bentley-home',
    categorySlug: 'biurka',
    heroImage: {
      id: 'styal-hero',
      src: `${CDN_BASE}/2025/04/bentley-home-styal-desk-luxarte.webp`,
      alt: 'Biurko Styal Bentley Home',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'styal-1',
        src: `${CDN_BASE}/2025/04/bentley-home-styal-desk-luxarte.webp`,
        alt: 'Biurko Styal - widok główny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Kompaktowe biurko Styal z kolekcji Bentley Home. Elegancka forma dla nowoczesnego gabinetu, z blatem wykończonym skórą.',
    materials: ['skóra naturalna', 'drewno dębowe', 'metal'],
    tags: ['biurko', 'gabinet', 'skóra', 'kompaktowe'],
    relatedProjectSlugs: ['willa-bentley'],
    seo: {
      title: 'Biurko Styal Bentley Home | LuxArte',
      description:
        'Kompaktowe biurko Styal marki Bentley Home. Elegancja i funkcjonalność dla nowoczesnego gabinetu.',
    },
  },
  {
    id: 'bentley-wilton-desk',
    name: 'Biurko Wilton',
    slug: 'biurko-bentley-wilton',
    brandSlug: 'bentley-home',
    categorySlug: 'biurka',
    heroImage: {
      id: 'wilton-hero',
      src: `${CDN_BASE}/2025/04/bentley-home-wilton-desk-luxarte.webp`,
      alt: 'Biurko Wilton Bentley Home',
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: 'wilton-1',
        src: `${CDN_BASE}/2025/04/bentley-home-wilton-desk-luxarte.webp`,
        alt: 'Biurko Wilton - widok główny',
        width: 1200,
        height: 800,
      },
    ],
    shortDescription:
      'Reprezentacyjne biurko Wilton z kolekcji Bentley Home. Masywna forma z charakterystycznym pikowaniem na froncie szuflad.',
    materials: ['skóra pikowana', 'drewno orzechowe', 'metal szczotkowany'],
    features: ['Pikowane fronty szuflad', 'System zarządzania kablami', 'Skrytka na dokumenty'],
    tags: ['biurko', 'gabinet', 'pikowanie', 'reprezentacyjne'],
    relatedProjectSlugs: ['willa-bentley'],
    seo: {
      title: 'Biurko Wilton Bentley Home | LuxArte',
      description:
        'Reprezentacyjne biurko Wilton marki Bentley Home. Masywna forma i charakterystyczne pikowanie.',
    },
  },
];

// ============================================================================
// CATALOG PRODUCTS - AUTO-GENERATED FROM LEGACY SITE
// ============================================================================

/**
 * Generate placeholder product from catalog entry
 * Products without full data get placeholder images and descriptions
 */
function generateCatalogProduct(
  catalogEntry: (typeof catalogProducts)[number]
): Product {
  const brandName = brandNames[catalogEntry.brandSlug as BrandSlug] || 'LuxArte';
  const categoryName = categoryNames[catalogEntry.categorySlug as ProductCategorySlug] || 'Produkty';

  // Generate placeholder image URL based on slug pattern
  // Legacy site uses year-based upload paths
  const imagePath = `${CDN_BASE}/2024/01/placeholder-product.webp`;

  return {
    id: catalogEntry.id,
    name: catalogEntry.name,
    slug: catalogEntry.slug,
    brandSlug: catalogEntry.brandSlug,
    categorySlug: catalogEntry.categorySlug as ProductCategory,
    heroImage: {
      id: `${catalogEntry.id}-hero`,
      src: imagePath,
      alt: `${catalogEntry.name} - ${brandName}`,
      width: 1200,
      height: 800,
    },
    galleryImages: [
      {
        id: `${catalogEntry.id}-1`,
        src: imagePath,
        alt: `${catalogEntry.name} - widok główny`,
        width: 1200,
        height: 800,
      },
    ],
    shortDescription: `${catalogEntry.name} z kolekcji ${brandName}. Luksusowy produkt z kategorii ${categoryName.toLowerCase()}.`,
    tags: [categoryName.toLowerCase(), brandName.toLowerCase()].filter(Boolean),
    seo: {
      title: `${catalogEntry.name} ${brandName} | LuxArte`,
      description: `${catalogEntry.name} marki ${brandName}. Ekskluzywny produkt z kategorii ${categoryName.toLowerCase()} w ofercie LuxArte.`,
    },
  };
}

/**
 * Merge curated products with catalog products
 * Curated products take precedence (have full data)
 */
const curatedProductSlugs = new Set(curatedProducts.map((p) => p.slug));

const catalogOnlyProducts: readonly Product[] = catalogProducts
  .filter((cp) => !curatedProductSlugs.has(cp.slug))
  .map((cp) => generateCatalogProduct(cp));

/**
 * All Products - Combined curated + catalog
 */
export const products: readonly Product[] = [...curatedProducts, ...catalogOnlyProducts];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Get all product slugs for static generation
 */
export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

/**
 * Get products by brand
 */
export function getProductsByBrand(brandSlug: string): readonly Product[] {
  return products.filter((product) => product.brandSlug === brandSlug);
}

/**
 * Get products by category
 */
export function getProductsByCategory(categorySlug: ProductCategory): readonly Product[] {
  return products.filter((product) => product.categorySlug === categorySlug);
}

/**
 * Get related products (same brand or category, excluding current)
 */
export function getRelatedProducts(
  currentSlug: string,
  limit: number = 4
): readonly Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return [];

  const related = products.filter(
    (product) =>
      product.slug !== currentSlug &&
      (product.brandSlug === current.brandSlug ||
        product.categorySlug === current.categorySlug)
  );

  return related.slice(0, limit);
}
