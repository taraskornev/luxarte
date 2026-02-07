/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CANONICAL LEGACY CATEGORIES — AUTHORITATIVE SOURCE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 * 
 * This file is the SINGLE SOURCE OF TRUTH for all category data.
 * Extracted from: https://www.luxarte.pl/produkty/ on 2026-02-04
 * 
 * ALL consumers MUST import from this file:
 * - Header dropdowns
 * - Gallery filters (desktop + mobile)
 * - Sidebar navigation
 * - Mobile filter drawers
 * - Category listing pages
 * 
 * DO NOT create derived lists elsewhere.
 * DO NOT filter this list based on product presence.
 * DO NOT use facet-generated category lists.
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface LegacyCategory {
  /** Display label in Polish */
  label: string;
  /** URL slug for routing */
  slug: string;
  /** Parent category slug (null for top-level) */
  parent: string | null;
  /** Navigation group for menu organization */
  navGroup: 'meble' | 'oswietlenie' | 'kuchnie' | 'garderoby' | 'lazienki' | 'ogrod';
  /** Legacy site URL */
  legacyUrl: string;
  /** Product count from legacy site (as of 2026-02-04) */
  productCount: number;
  /** Sort order within nav group */
  sortOrder: number;
}

/**
 * CANONICAL CATEGORY LIST — 30 CATEGORIES
 * Extracted from legacy luxarte.pl/produkty/ sidebar
 * Verified via full crawl: 2026-02-04 (829 products)
 * 
 * DO NOT MODIFY without re-crawling legacy site
 */
export const LEGACY_CATEGORIES: LegacyCategory[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // MEBLE GROUP (18 categories)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    label: 'Akcesoria',
    slug: 'akcesoria',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/akcesoria/',
    productCount: 8,
    sortOrder: 1,
  },
  {
    label: 'Biuro',
    slug: 'biuro',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/biuro/',
    productCount: 8,
    sortOrder: 2,
  },
  {
    label: 'Dywany',
    slug: 'dywany',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/dywany/',
    productCount: 15,
    sortOrder: 3,
  },
  {
    label: 'Fotele',
    slug: 'fotele',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/fotele/',
    productCount: 100,
    sortOrder: 4,
  },
  {
    label: 'Hokery',
    slug: 'hokery',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/hokery/',
    productCount: 1,
    sortOrder: 5,
  },
  {
    label: 'Komody',
    slug: 'komody',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/komody/',
    productCount: 45,
    sortOrder: 6,
  },
  {
    label: 'Konsole',
    slug: 'konsole',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/konsole/',
    productCount: 11,
    sortOrder: 7,
  },
  {
    label: 'Krzesła',
    slug: 'krzesla',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/krzesla/',
    productCount: 28,
    sortOrder: 8,
  },
  {
    label: 'Lustra',
    slug: 'lustra',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/lustra/',
    productCount: 6,
    sortOrder: 9,
  },
  {
    label: 'Łóżka',
    slug: 'lozka',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/lozka/',
    productCount: 25,
    sortOrder: 10,
  },
  {
    label: 'Pufy',
    slug: 'pufy',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/pufy/',
    productCount: 23,
    sortOrder: 11,
  },
  {
    label: 'Regały',
    slug: 'regaly',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/regaly/',
    productCount: 11,
    sortOrder: 12,
  },
  {
    label: 'Sofy',
    slug: 'sofy',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/sofy/',
    productCount: 95,
    sortOrder: 13,
  },
  {
    label: 'Stoliki boczne',
    slug: 'stoliki-boczne',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/stoliki-boczne/',
    productCount: 21,
    sortOrder: 14,
  },
  {
    label: 'Stoliki kawowe',
    slug: 'stoliki-kawowe',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/stoliki-kawowe/',
    productCount: 45,
    sortOrder: 15,
  },
  {
    label: 'Stoły',
    slug: 'stoly',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/stoly/',
    productCount: 23,
    sortOrder: 16,
  },
  {
    label: 'Szafki nocne',
    slug: 'szafki-nocne',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/szafki-nocne/',
    productCount: 16,
    sortOrder: 17,
  },
  {
    label: 'Szezlongi',
    slug: 'szezlongi',
    parent: null,
    navGroup: 'meble',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/szezlongi/',
    productCount: 9,
    sortOrder: 18,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OŚWIETLENIE GROUP (6 categories)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    label: 'Kinkiety',
    slug: 'kinkiety',
    parent: null,
    navGroup: 'oswietlenie',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/kinkiety/',
    productCount: 25,
    sortOrder: 1,
  },
  {
    label: 'Lampy podłogowe',
    slug: 'lampy-podlogowe',
    parent: null,
    navGroup: 'oswietlenie',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/lampy-podlogowe/',
    productCount: 20,
    sortOrder: 2,
  },
  {
    label: 'Lampy stołowe',
    slug: 'lampy-stolowe',
    parent: null,
    navGroup: 'oswietlenie',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/lampy-stolowe/',
    productCount: 26,
    sortOrder: 3,
  },
  {
    label: 'Lampy wiszące',
    slug: 'lampy-wiszace',
    parent: null,
    navGroup: 'oswietlenie',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/lampy-wiszace/',
    productCount: 31,
    sortOrder: 4,
  },
  {
    label: 'Oświetlenie',
    slug: 'oswietlenie',
    parent: null,
    navGroup: 'oswietlenie',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/oswietlenie/',
    productCount: 11,
    sortOrder: 5,
  },
  {
    label: 'Plafony',
    slug: 'plafony',
    parent: null,
    navGroup: 'oswietlenie',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/plafony/',
    productCount: 5,
    sortOrder: 6,
  },
  {
    label: 'Żyrandole',
    slug: 'zyrandole',
    parent: null,
    navGroup: 'oswietlenie',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/zyrandole/',
    productCount: 15,
    sortOrder: 7,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // KUCHNIE GROUP (1 category)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    label: 'Kuchnie',
    slug: 'kuchnie',
    parent: null,
    navGroup: 'kuchnie',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/kuchnie/',
    productCount: 19,
    sortOrder: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // GARDEROBY GROUP (1 category)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    label: 'Garderoby',
    slug: 'garderoby',
    parent: null,
    navGroup: 'garderoby',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/garderoby/',
    productCount: 10,
    sortOrder: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ŁAZIENKI GROUP (1 category)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    label: 'Łazienki',
    slug: 'lazienki',
    parent: null,
    navGroup: 'lazienki',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/lazienki/',
    productCount: 7,
    sortOrder: 1,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // OGRÓD I SPA GROUP (2 categories)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    label: 'Donice',
    slug: 'donice',
    parent: null,
    navGroup: 'ogrod',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/donice/',
    productCount: 2,
    sortOrder: 1,
  },
  {
    label: 'Meble ogrodowe',
    slug: 'meble-ogrodowe',
    parent: null,
    navGroup: 'ogrod',
    legacyUrl: 'https://www.luxarte.pl/kategoria-produktu/meble-ogrodowe/',
    productCount: 169,
    sortOrder: 2,
  },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// DERIVED CONSTANTS — DO NOT MODIFY
// ═══════════════════════════════════════════════════════════════════════════

/** Total number of categories from legacy site */
export const LEGACY_CATEGORY_COUNT = 30;

/** All category slugs as a readonly array */
export const ALL_CATEGORY_SLUGS = LEGACY_CATEGORIES.map(c => c.slug) as readonly string[];

/** Category slug union type */
export type LegacyCategorySlug = typeof LEGACY_CATEGORIES[number]['slug'];

/** Nav group labels for UI */
export const NAV_GROUP_LABELS: Record<LegacyCategory['navGroup'], string> = {
  meble: 'Meble',
  oswietlenie: 'Oświetlenie',
  kuchnie: 'Kuchnie',
  garderoby: 'Garderoby',
  lazienki: 'Łazienki',
  ogrod: 'Ogród i SPA',
};

/** Nav group order for menu rendering */
export const NAV_GROUP_ORDER: LegacyCategory['navGroup'][] = [
  'meble',
  'oswietlenie',
  'kuchnie',
  'garderoby',
  'lazienki',
  'ogrod',
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Get categories grouped by nav group for menu rendering
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 */
export function getCategoriesByNavGroup(): Record<LegacyCategory['navGroup'], LegacyCategory[]> {
  const groups: Record<LegacyCategory['navGroup'], LegacyCategory[]> = {
    meble: [],
    oswietlenie: [],
    kuchnie: [],
    garderoby: [],
    lazienki: [],
    ogrod: [],
  };

  for (const category of LEGACY_CATEGORIES) {
    groups[category.navGroup].push(category);
  }

  // Sort each group by sortOrder
  for (const group of Object.keys(groups) as LegacyCategory['navGroup'][]) {
    groups[group].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  return groups;
}

/**
 * Get a category by slug
 */
export function getCategoryBySlug(slug: string): LegacyCategory | undefined {
  return LEGACY_CATEGORIES.find(c => c.slug === slug);
}

/**
 * Check if a slug is a valid category
 */
export function isValidCategorySlug(slug: string): slug is LegacyCategorySlug {
  return ALL_CATEGORY_SLUGS.includes(slug);
}

/**
 * Get category label by slug
 */
export function getCategoryLabel(slug: string): string {
  const category = getCategoryBySlug(slug);
  return category?.label ?? slug;
}

/**
 * Get total product count from legacy data
 */
export function getTotalLegacyProductCount(): number {
  return LEGACY_CATEGORIES.reduce((sum, c) => sum + c.productCount, 0);
}

/**
 * Get categories for flat list display (alphabetically sorted)
 */
export function getCategoriesAlphabetically(): LegacyCategory[] {
  return [...LEGACY_CATEGORIES].sort((a, b) => 
    a.label.localeCompare(b.label, 'pl')
  );
}

/**
 * Get categories for gallery filter (with product counts)
 * Returns ALL categories — do not filter by current products
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 */
export function getCategoriesForFilter(): Array<{ slug: string; label: string; count: number }> {
  return LEGACY_CATEGORIES.map(c => ({
    slug: c.slug,
    label: c.label,
    count: c.productCount,
  })).sort((a, b) => a.label.localeCompare(b.label, 'pl'));
}
