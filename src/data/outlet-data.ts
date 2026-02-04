/**
 * ============================================================================
 * OUTLET DATA - LUXARTE
 * ============================================================================
 *
 * Centralized outlet data source for /outlet index and /outlet/[item-slug] pages.
 * Items use existing images from the site - no fabricated pricing data.
 * Prices only shown if genuinely available; otherwise "Zapytaj o cenę".
 *
 * @version 1.0.0
 */

// Base URL for legacy images
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';

/**
 * Availability Type
 */
export type Availability = 'available-now' | 'on-request';

/**
 * Condition Type
 */
export type Condition = 'showroom' | 'new' | 'outlet';

/**
 * Gallery Image Interface
 */
export interface OutletGalleryImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

/**
 * Outlet Item Data Interface
 */
export interface OutletItem {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly primaryImage: OutletGalleryImage;
  readonly galleryImages?: readonly OutletGalleryImage[];
  readonly category: string; // category slug
  readonly brand?: string; // brand slug
  readonly availability: Availability;
  readonly condition: Condition;
  readonly price?: {
    readonly original?: number;
    readonly current?: number;
    readonly currency: 'PLN' | 'EUR';
  };
  readonly discountPercent?: number;
  readonly shortDescription: string;
  readonly seo: {
    readonly title: string;
    readonly description: string;
  };
}

/**
 * Availability Labels
 */
export const availabilityLabels: Record<Availability, string> = {
  'available-now': 'Dostępny od ręki',
  'on-request': 'Na zamówienie',
} as const;

/**
 * Condition Labels
 */
export const conditionLabels: Record<Condition, string> = {
  showroom: 'Ekspozycja showroomowa',
  new: 'Nowy',
  outlet: 'Outlet',
} as const;

/**
 * All Outlet Items Data
 */
export const outletItems: readonly OutletItem[] = [
  // ============================================================================
  // ITEM 1: Sofa Versace Zensational
  // ============================================================================
  {
    id: 'outlet-versace-zensational',
    title: 'Sofa Versace Home Zensational',
    slug: 'sofa-versace-zensational',
    primaryImage: {
      id: 'versace-zensational-1',
      src: `${CDN_BASE}/2025/05/meble-versace-home_zensational-sofa-luxarte-luksusowe-meble-do-salonu-1024x718.webp`,
      alt: 'Sofa Versace Home Zensational',
      width: 1024,
      height: 718,
    },
    category: 'sofy',
    brand: 'versace-home',
    availability: 'available-now',
    condition: 'showroom',
    shortDescription:
      'Elegancka sofa z kolekcji Versace Home. Model ekspozycyjny dostępny w showroomie.',
    seo: {
      title: 'Sofa Versace Zensational - Outlet | LuxArte',
      description:
        'Sofa Versace Home Zensational dostępna od ręki. Model ekspozycyjny z showroomu LuxArte.',
    },
  },

  // ============================================================================
  // ITEM 2: Sofa Visionnaire Loving Frank
  // ============================================================================
  {
    id: 'outlet-visionnaire-loving-frank',
    title: 'Sofa Visionnaire Loving Frank',
    slug: 'sofa-visionnaire-loving-frank',
    primaryImage: {
      id: 'visionnaire-loving-frank-1',
      src: `${CDN_BASE}/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp`,
      alt: 'Sofa Visionnaire Loving Frank',
      width: 1200,
      height: 800,
    },
    category: 'sofy',
    brand: 'visionnaire',
    availability: 'available-now',
    condition: 'showroom',
    shortDescription:
      'Ikoniczna sofa Visionnaire z charakterystycznym designem. Ekspozycja showroomowa.',
    seo: {
      title: 'Sofa Visionnaire Loving Frank - Outlet | LuxArte',
      description:
        'Sofa Visionnaire Loving Frank dostępna od ręki w showroomie LuxArte Warszawa.',
    },
  },

  // ============================================================================
  // ITEM 3: Sofa Dolce & Gabbana Anemone
  // ============================================================================
  {
    id: 'outlet-dg-anemone',
    title: 'Sofa Dolce & Gabbana Anemone',
    slug: 'sofa-dolce-gabbana-anemone',
    primaryImage: {
      id: 'dg-anemone-1',
      src: `${CDN_BASE}/2025/06/dolce-gabbana-casa-sofa-anemone-luxarte-ekskluzywne-meble-wloskie.01jpg.jpg`,
      alt: 'Sofa Dolce & Gabbana Casa Anemone',
      width: 1200,
      height: 800,
    },
    category: 'sofy',
    brand: 'dolce-gabbana-casa',
    availability: 'on-request',
    condition: 'new',
    shortDescription:
      'Sofa z kolekcji Dolce & Gabbana Casa z sycylijskimi motywami.',
    seo: {
      title: 'Sofa Dolce & Gabbana Anemone | LuxArte',
      description:
        'Sofa Dolce & Gabbana Casa Anemone. Sycylijska elegancja. Dostępna na zamówienie.',
    },
  },

  // ============================================================================
  // ITEM 4: Sofa Trussardi Astract
  // ============================================================================
  {
    id: 'outlet-trussardi-astract',
    title: 'Sofa Trussardi Casa Astract',
    slug: 'sofa-trussardi-astract',
    primaryImage: {
      id: 'trussardi-astract-1',
      src: `${CDN_BASE}/2025/05/trussardi-casa-sofa-astract-luxarte-ekskluzywne-meble-wloskie.01webp.webp`,
      alt: 'Sofa Trussardi Casa Astract',
      width: 1200,
      height: 800,
    },
    category: 'sofy',
    brand: 'trussardi-casa',
    availability: 'available-now',
    condition: 'showroom',
    shortDescription:
      'Elegancka sofa skórzana Trussardi Casa. Model ekspozycyjny.',
    seo: {
      title: 'Sofa Trussardi Astract - Outlet | LuxArte',
      description:
        'Sofa Trussardi Casa Astract. Włoska skóra najwyższej jakości. Ekspozycja showroomowa.',
    },
  },

  // ============================================================================
  // ITEM 5: Kino domowe Bentley Home
  // ============================================================================
  {
    id: 'outlet-bentley-cinema',
    title: 'Fotel kinowy Bentley Home',
    slug: 'fotel-kinowy-bentley-home',
    primaryImage: {
      id: 'bentley-cinema-1',
      src: `${CDN_BASE}/2025/01/BENTLEY_HOME_CINEMA_LUXARTE.jpg`,
      alt: 'Fotel kinowy Bentley Home Cinema',
      width: 1920,
      height: 1080,
    },
    category: 'sofy',
    brand: 'bentley-home',
    availability: 'on-request',
    condition: 'new',
    shortDescription:
      'Luksusowy fotel kinowy z kolekcji Bentley Home Cinema.',
    seo: {
      title: 'Fotel Kinowy Bentley Home | LuxArte',
      description:
        'Fotel kinowy Bentley Home Cinema. Brytyjskie rzemiosło i luksus.',
    },
  },

  // ============================================================================
  // ITEM 6: Kuchnia SCIC
  // ============================================================================
  {
    id: 'outlet-scic-kuchnia',
    title: 'Kuchnia SCIC Italia',
    slug: 'kuchnia-scic-italia',
    primaryImage: {
      id: 'scic-kuchnia-1',
      src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
      alt: 'Kuchnia SCIC Italia',
      width: 1920,
      height: 1280,
    },
    category: 'kuchnie',
    brand: 'scic',
    availability: 'on-request',
    condition: 'new',
    shortDescription:
      'Kuchnia włoska SCIC Italia projektowana na wymiar.',
    seo: {
      title: 'Kuchnia SCIC Italia | LuxArte',
      description:
        'Włoska kuchnia SCIC Italia. Projektowanie na wymiar. Showroom LuxArte Warszawa.',
    },
  },

  // ============================================================================
  // ITEM 7: Lampa Flos Wireline
  // ============================================================================
  {
    id: 'outlet-flos-wireline',
    title: 'Lampa Flos Wireline',
    slug: 'lampa-flos-wireline',
    primaryImage: {
      id: 'flos-wireline-1',
      src: `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
      alt: 'Lampa wisząca Flos Wireline',
      width: 1200,
      height: 800,
    },
    category: 'oswietlenie',
    brand: 'flos',
    availability: 'available-now',
    condition: 'showroom',
    shortDescription:
      'Ikoniczna lampa wisząca Flos Wireline. Model ekspozycyjny.',
    seo: {
      title: 'Lampa Flos Wireline - Outlet | LuxArte',
      description:
        'Lampa wisząca Flos Wireline dostępna od ręki. Ekspozycja showroomowa.',
    },
  },

  // ============================================================================
  // ITEM 8: Garderoba MisuraEmme
  // ============================================================================
  {
    id: 'outlet-misuraemme-garderoba',
    title: 'System garderoby MisuraEmme',
    slug: 'garderoba-misuraemme',
    primaryImage: {
      id: 'misuraemme-garderoba-1',
      src: `${CDN_BASE}/2025/06/30845ad849354d58e5f51ffa1ecb2faa.jpeg`,
      alt: 'Garderoba MisuraEmme',
      width: 1200,
      height: 800,
    },
    category: 'garderoby',
    brand: 'misuraemme',
    availability: 'on-request',
    condition: 'new',
    shortDescription:
      'Włoski system garderoby MisuraEmme projektowany na wymiar.',
    seo: {
      title: 'Garderoba MisuraEmme | LuxArte',
      description:
        'System garderoby MisuraEmme. Włoska precyzja na wymiar.',
    },
  },

  // ============================================================================
  // ITEM 9: Roberto Cavalli Fotel
  // ============================================================================
  {
    id: 'outlet-cavalli-fotel',
    title: 'Fotel Roberto Cavalli Home',
    slug: 'fotel-roberto-cavalli',
    primaryImage: {
      id: 'cavalli-fotel-1',
      src: `${CDN_BASE}/2022/12/roberto_cavalli_home_interiors_luxarte-2022-12-13-o-17.27.11-1.png`,
      alt: 'Fotel Roberto Cavalli Home Interiors',
      width: 1200,
      height: 800,
    },
    category: 'sofy',
    brand: 'roberto-cavalli-home-interiors',
    availability: 'available-now',
    condition: 'outlet',
    shortDescription:
      'Fotel z kolekcji Roberto Cavalli Home Interiors z animalistycznym wzorem.',
    seo: {
      title: 'Fotel Roberto Cavalli - Outlet | LuxArte',
      description:
        'Fotel Roberto Cavalli Home Interiors. Outlet LuxArte.',
    },
  },

  // ============================================================================
  // ITEM 10: Meble Bentley Villa
  // ============================================================================
  {
    id: 'outlet-bentley-villa-sofa',
    title: 'Sofa Bentley Home Villa',
    slug: 'sofa-bentley-home-villa',
    primaryImage: {
      id: 'bentley-villa-1',
      src: `${CDN_BASE}/2025/06/BE-villa-01-scaled.jpg`,
      alt: 'Sofa Bentley Home z kolekcji Villa',
      width: 2560,
      height: 1920,
    },
    galleryImages: [
      {
        id: 'bentley-villa-2',
        src: `${CDN_BASE}/2025/06/BE-villa-02-scaled.jpg`,
        alt: 'Bentley Home Villa - widok boczny',
        width: 2560,
        height: 1920,
      },
    ],
    category: 'sofy',
    brand: 'bentley-home',
    availability: 'on-request',
    condition: 'new',
    shortDescription:
      'Ekskluzywna sofa z kolekcji Bentley Home Villa. Brytyjskie rzemiosło.',
    seo: {
      title: 'Sofa Bentley Home Villa | LuxArte',
      description:
        'Sofa Bentley Home z kolekcji Villa. Brytyjski luksus i precyzja.',
    },
  },

  // ============================================================================
  // ITEM 11: Bugatti Fotel
  // ============================================================================
  {
    id: 'outlet-bugatti-fotel',
    title: 'Fotel Bugatti Home',
    slug: 'fotel-bugatti-home',
    primaryImage: {
      id: 'bugatti-fotel-1',
      src: `${CDN_BASE}/2025/06/NicoAbbruzzese_210417_SCiC3495.jpeg`,
      alt: 'Fotel Bugatti Home',
      width: 1920,
      height: 1280,
    },
    category: 'sofy',
    brand: 'bugatti-home',
    availability: 'on-request',
    condition: 'new',
    shortDescription:
      'Fotel z kolekcji Bugatti Home. Włókno węglowe i włoska precyzja.',
    seo: {
      title: 'Fotel Bugatti Home | LuxArte',
      description:
        'Fotel Bugatti Home. Futurystyczny design, włókno węglowe.',
    },
  },

  // ============================================================================
  // ITEM 12: Stolik kawowy
  // ============================================================================
  {
    id: 'outlet-stolik-kawowy',
    title: 'Stolik kawowy Visionnaire',
    slug: 'stolik-kawowy-visionnaire',
    primaryImage: {
      id: 'stolik-visionnaire-1',
      src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
      alt: 'Stolik kawowy Visionnaire',
      width: 1900,
      height: 1060,
    },
    category: 'sofy',
    brand: 'visionnaire',
    availability: 'available-now',
    condition: 'showroom',
    shortDescription:
      'Stolik kawowy Visionnaire. Model ekspozycyjny ze showroomu.',
    seo: {
      title: 'Stolik Kawowy Visionnaire - Outlet | LuxArte',
      description:
        'Stolik kawowy Visionnaire. Ekspozycja showroomowa dostępna od ręki.',
    },
  },

  // ============================================================================
  // ITEM 13: Moodboard projekt klasyczny
  // ============================================================================
  {
    id: 'outlet-konsultacja-projekt',
    title: 'Konsultacja projektowa wnętrza',
    slug: 'konsultacja-projektowa',
    primaryImage: {
      id: 'moodboard-klasyczny-1',
      src: `${CDN_BASE}/2025/06/Luxarte-moodboard-2025-06-12-o-15.26.25.webp`,
      alt: 'Moodboard projektowy LuxArte',
      width: 1266,
      height: 1328,
    },
    category: 'garderoby',
    availability: 'available-now',
    condition: 'new',
    shortDescription:
      'Usługa konsultacji projektowej wnętrz. Profesjonalne doradztwo.',
    seo: {
      title: 'Konsultacja Projektowa Wnętrza | LuxArte',
      description:
        'Konsultacja projektowa wnętrz LuxArte. Profesjonalne doradztwo i koncepcje.',
    },
  },

  // ============================================================================
  // ITEM 14: Oświetlenie premium
  // ============================================================================
  {
    id: 'outlet-lampa-wiszaca',
    title: 'Lampa wisząca designerska',
    slug: 'lampa-wiszaca-design',
    primaryImage: {
      id: 'lampa-design-1',
      src: `${CDN_BASE}/2023/03/Wireline-flos-luxarte.jpg`,
      alt: 'Designerska lampa wisząca',
      width: 1200,
      height: 800,
    },
    category: 'oswietlenie',
    availability: 'on-request',
    condition: 'new',
    shortDescription:
      'Designerska lampa wisząca od renomowanego producenta.',
    seo: {
      title: 'Lampa Wisząca Designerska | LuxArte',
      description:
        'Designerska lampa wisząca. Włoskie oświetlenie premium.',
    },
  },

  // ============================================================================
  // ITEM 15: Sofa ekspozycyjna
  // ============================================================================
  {
    id: 'outlet-sofa-ekspozycyjna',
    title: 'Sofa modułowa ekspozycyjna',
    slug: 'sofa-modulowa-ekspozycyjna',
    primaryImage: {
      id: 'sofa-modulowa-1',
      src: `${CDN_BASE}/2025/06/projektowanie-wnetrz-luxarte-3.webp`,
      alt: 'Sofa modułowa ekspozycyjna',
      width: 1900,
      height: 1060,
    },
    category: 'sofy',
    availability: 'available-now',
    condition: 'outlet',
    shortDescription:
      'Sofa modułowa z ekspozycji showroomowej. Atrakcyjna cena.',
    seo: {
      title: 'Sofa Modułowa - Outlet | LuxArte',
      description:
        'Sofa modułowa z ekspozycji. Outlet LuxArte - atrakcyjna cena.',
    },
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get outlet item by slug
 */
export function getOutletItemBySlug(slug: string): OutletItem | undefined {
  return outletItems.find((item) => item.slug === slug);
}

/**
 * Get all outlet item slugs for static generation
 */
export function getAllOutletItemSlugs(): string[] {
  return outletItems.map((item) => item.slug);
}

/**
 * Get outlet items by category
 */
export function getOutletItemsByCategory(categorySlug: string): OutletItem[] {
  return outletItems.filter((item) => item.category === categorySlug);
}

/**
 * Get outlet items by brand
 */
export function getOutletItemsByBrand(brandSlug: string): OutletItem[] {
  return outletItems.filter((item) => item.brand === brandSlug);
}

/**
 * Get outlet items by availability
 */
export function getOutletItemsByAvailability(
  availability: Availability
): OutletItem[] {
  return outletItems.filter((item) => item.availability === availability);
}

/**
 * Get outlet items by condition
 */
export function getOutletItemsByCondition(condition: Condition): OutletItem[] {
  return outletItems.filter((item) => item.condition === condition);
}

/**
 * Get all unique categories from outlet items
 */
export function getAllOutletCategories(): string[] {
  const categories = new Set<string>();
  outletItems.forEach((item) => categories.add(item.category));
  return Array.from(categories);
}

/**
 * Get all unique brands from outlet items
 */
export function getAllOutletBrands(): string[] {
  const brands = new Set<string>();
  outletItems.forEach((item) => {
    if (item.brand) {
      brands.add(item.brand);
    }
  });
  return Array.from(brands);
}

/**
 * Get related outlet items (same category or brand)
 */
export function getRelatedOutletItems(
  currentItem: OutletItem,
  limit: number = 3
): OutletItem[] {
  return outletItems
    .filter((item) => {
      if (item.id === currentItem.id) return false;
      return (
        item.category === currentItem.category ||
        (currentItem.brand && item.brand === currentItem.brand)
      );
    })
    .slice(0, limit);
}

/**
 * Format price for display
 */
export function formatPrice(
  price: number,
  currency: 'PLN' | 'EUR' = 'PLN'
): string {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Outlet Index SEO
 */
export const outletIndexSeo = {
  title: 'Outlet - Ekskluzywne Meble Dostępne Od Ręki | LuxArte',
  description:
    'Outlet LuxArte - ekskluzywne meble włoskich marek dostępne od ręki. Ekspozycje showroomowe, modele outlet. Versace Home, Bentley Home, Visionnaire.',
};
