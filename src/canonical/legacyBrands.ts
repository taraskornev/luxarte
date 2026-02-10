/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CANONICAL LEGACY BRANDS — AUTHORITATIVE SOURCE
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 * 
 * This file is the SINGLE SOURCE OF TRUTH for all brand data.
 * Extracted from: https://www.luxarte.pl/marki/ on 2026-02-04
 * Updated: 2026-02-06 — removed noorth, vitage, longhi, dv-home; added Flos
 * 
 * ALL consumers MUST import from this file:
 * - Header dropdowns
 * - Gallery filters (desktop + mobile)
 * - Sidebar navigation
 * - Mobile filter drawers
 * - Brand listing pages
 * 
 * DO NOT create derived lists elsewhere.
 * DO NOT filter this list based on product presence.
 * DO NOT use facet-generated brand lists.
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

export interface LegacyBrand {
  /** Display label */
  label: string;
  /** URL slug for routing */
  slug: string;
  /** Legacy site URL */
  legacyUrl: string;
  /** Brand tier for sorting (1 = premium, 2 = standard) */
  tier: 1 | 2;
  /** Sort order for display */
  sortOrder: number;
  /** Whether brand appears in footer "Nasze Marki" */
  showInFooter: boolean;
  /** Product count from harvest (as of 2026-02-04) */
  productCount: number;
}

/**
 * CANONICAL BRAND LIST — 15 BRANDS
 * Extracted from legacy luxarte.pl/marki/ page
 * Verified via full harvest: 2026-02-04 (829 products)
 * 
 * DO NOT MODIFY without re-crawling legacy site
 */
export const LEGACY_BRANDS: LegacyBrand[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // TIER 1 — PREMIUM FASHION HOUSES (sorted by legacy page order)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    label: 'Versace Home',
    slug: 'versace-home',
    legacyUrl: 'https://www.luxarte.pl/versace-home/',
    tier: 1,
    sortOrder: 1,
    showInFooter: true,
    productCount: 94,
  },
  {
    label: 'Trussardi Casa',
    slug: 'trussardi-casa',
    legacyUrl: 'https://www.luxarte.pl/trussardi-casa/',
    tier: 1,
    sortOrder: 2,
    showInFooter: true,
    productCount: 107,
  },
  {
    label: 'Bentley Home',
    slug: 'bentley-home',
    legacyUrl: 'https://www.luxarte.pl/bentley-home/',
    tier: 1,
    sortOrder: 3,
    showInFooter: true,
    productCount: 136,
  },
  {
    label: 'Bugatti Home',
    slug: 'bugatti-home',
    legacyUrl: 'https://www.luxarte.pl/bugatti_home/',
    tier: 1,
    sortOrder: 4,
    showInFooter: true,
    productCount: 0,
  },
  {
    label: 'Dolce & Gabbana Casa',
    slug: 'dolce-gabbana-casa',
    legacyUrl: 'https://www.luxarte.pl/meble-dolcegabbana-casa/',
    tier: 1,
    sortOrder: 5,
    showInFooter: true,
    productCount: 113,
  },
  {
    label: 'Visionnaire',
    slug: 'visionnaire',
    legacyUrl: 'https://www.luxarte.pl/visionnaire/',
    tier: 1,
    sortOrder: 6,
    showInFooter: true,
    productCount: 78,
  },
  {
    label: 'Roberto Cavalli Home Interiors',
    slug: 'roberto-cavalli-home-interiors',
    legacyUrl: 'https://www.luxarte.pl/roberto-cavalli-home-interiors/',
    tier: 1,
    sortOrder: 7,
    showInFooter: true,
    productCount: 0,
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TIER 2 — SPECIALIST BRANDS (kitchens, lighting, outdoor)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    label: 'MisuraEmme',
    slug: 'misuraemme',
    legacyUrl: 'https://www.luxarte.pl/misura-emme/',
    tier: 2,
    sortOrder: 8,
    showInFooter: false,
    productCount: 3,
  },
  {
    label: 'SCIC Italia',
    slug: 'scic-italia',
    legacyUrl: 'https://www.luxarte.pl/scic/',
    tier: 2,
    sortOrder: 9,
    showInFooter: true,
    productCount: 18,
  },
  {
    label: 'Valcucine',
    slug: 'valcucine',
    legacyUrl: 'https://www.luxarte.pl/valcucine-luksusowe-kuchnie/',
    tier: 2,
    sortOrder: 10,
    showInFooter: true,
    productCount: 8,
  },
  {
    label: 'Exteta',
    slug: 'exteta',
    legacyUrl: 'https://www.luxarte.pl/exteta/',
    tier: 2,
    sortOrder: 11,
    showInFooter: true,
    productCount: 148,
  },
  {
    label: 'Gaggenau',
    slug: 'gaggenau',
    legacyUrl: 'https://www.luxarte.pl/gaggenau/',
    tier: 2,
    sortOrder: 12,
    showInFooter: true,
    productCount: 0,
  },
  {
    label: 'Venicem',
    slug: 'venicem',
    legacyUrl: 'https://www.luxarte.pl/venicem/',
    tier: 2,
    sortOrder: 13,
    showInFooter: true,
    productCount: 100,
  },
  {
    label: 'Vanory',
    slug: 'vanory',
    legacyUrl: 'https://www.luxarte.pl/vanory/',
    tier: 2,
    sortOrder: 14,
    showInFooter: false,
    productCount: 0,
  },
  {
    label: 'Flos',
    slug: 'flos',
    legacyUrl: 'https://www.luxarte.pl/flos/',
    tier: 2,
    sortOrder: 15,
    showInFooter: true,
    productCount: 0,
  },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// DERIVED CONSTANTS — DO NOT MODIFY
// ═══════════════════════════════════════════════════════════════════════════

/** Total number of brands from legacy site (15 total) */
export const LEGACY_BRAND_COUNT = 15;

/** All brand slugs as a readonly array */
export const ALL_BRAND_SLUGS = LEGACY_BRANDS.map(b => b.slug) as readonly string[];

/** Brand slug union type */
export type LegacyBrandSlug = typeof LEGACY_BRANDS[number]['slug'];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Get all brands sorted by tier then sortOrder
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 */
export function getBrandsSorted(): LegacyBrand[] {
  return [...LEGACY_BRANDS].sort((a, b) => {
    if (a.tier !== b.tier) return a.tier - b.tier;
    return a.sortOrder - b.sortOrder;
  });
}

/**
 * Get tier 1 (premium) brands only
 */
export function getPremiumBrands(): LegacyBrand[] {
  return LEGACY_BRANDS.filter(b => b.tier === 1);
}

/**
 * Get tier 2 (specialist) brands only
 */
export function getSpecialistBrands(): LegacyBrand[] {
  return LEGACY_BRANDS.filter(b => b.tier === 2);
}

/**
 * Get brands for footer display
 */
export function getFooterBrands(): LegacyBrand[] {
  return LEGACY_BRANDS.filter(b => b.showInFooter);
}

/**
 * Get a brand by slug
 */
export function getBrandBySlug(slug: string): LegacyBrand | undefined {
  return LEGACY_BRANDS.find(b => b.slug === slug);
}

/**
 * Check if a slug is a valid brand
 */
export function isValidBrandSlug(slug: string): slug is LegacyBrandSlug {
  return ALL_BRAND_SLUGS.includes(slug);
}

/**
 * Get brand label by slug
 */
export function getBrandLabel(slug: string): string {
  const brand = getBrandBySlug(slug);
  return brand?.label ?? slug;
}

/**
 * Get brands for gallery filter (alphabetically sorted)
 * Returns ALL brands — do not filter by current products
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 */
export function getBrandsForFilter(): Array<{ slug: string; label: string }> {
  return [...LEGACY_BRANDS]
    .sort((a, b) => a.label.localeCompare(b.label, 'pl'))
    .map(b => ({
      slug: b.slug,
      label: b.label,
    }));
}

/**
 * Get brands grouped by tier for display
 */
export function getBrandsByTier(): { premium: LegacyBrand[]; specialist: LegacyBrand[] } {
  return {
    premium: getPremiumBrands(),
    specialist: getSpecialistBrands(),
  };
}
