/**
 * ═══════════════════════════════════════════════════════════════════════════
 * CATALOG MAPPING — DETERMINISTIC SLUG → CANONICAL MAPPING
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Explicit mappings from product slug fragments to canonical slugs.
 * NO heuristics, NO regex guessing — explicit string matching only.
 * 
 * Source of truth:
 * - Brands: src/canonical/legacyBrands.ts (18 brands)
 * - Categories: src/canonical/legacyCategories.ts (30 categories)
 * 
 * @version 1.0.0
 */

import { LegacyBrandSlug } from '@/canonical/legacyBrands';
import { LegacyCategorySlug } from '@/canonical/legacyCategories';

// ═══════════════════════════════════════════════════════════════════════════
// EXPLICIT SLUG → BRAND MAPPINGS (when brand not in slug)
// ═══════════════════════════════════════════════════════════════════════════
// These products have no brand identifier in their slug, so we map explicitly
// based on originalUrl evidence from productImageManifest.ts

export const EXPLICIT_SLUG_BRANDS: Record<string, LegacyBrandSlug> = {
  // Trussardi Casa products (from originalUrl evidence)
  'sofa-blooms': 'trussardi-casa',
  'sofa-liam-ii': 'trussardi-casa',
  'stolik-kawowy-bowl': 'trussardi-casa',
  'lampa-stolowa-stone': 'trussardi-casa',
  
  // Bentley Home products
  'sofa-richmond': 'bentley-home',
  
  // Venicem products  
  'lampa-sufitowa-less-system-1': 'venicem',
};

// ═══════════════════════════════════════════════════════════════════════════
// BRAND DETECTION PATTERNS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Brand detection: matches brand fragment anywhere in slug
 * Order matters: more specific patterns first
 * 
 * Pattern → Canonical BrandSlug
 */
export const BRAND_PATTERNS: Array<{ pattern: string; brandSlug: LegacyBrandSlug }> = [
  // Tier 1 - Premium Fashion Houses
  { pattern: 'versace-home', brandSlug: 'versace-home' },
  { pattern: 'trussardi-casa', brandSlug: 'trussardi-casa' },
  { pattern: 'bentley-home', brandSlug: 'bentley-home' },
  { pattern: 'bugatti-home', brandSlug: 'bugatti-home' },
  { pattern: 'dolce-gabbana-casa', brandSlug: 'dolce-gabbana-casa' },
  { pattern: 'visionnaire', brandSlug: 'visionnaire' },
  { pattern: 'roberto-cavalli', brandSlug: 'roberto-cavalli-home-interiors' },
  
  // Tier 2 - Specialist Brands
  { pattern: 'misura-emme', brandSlug: 'misuraemme' },
  { pattern: 'misuraemme', brandSlug: 'misuraemme' },
  { pattern: 'scic-italia', brandSlug: 'scic-italia' },
  { pattern: 'valcucine', brandSlug: 'valcucine' },
  { pattern: 'exteta', brandSlug: 'exteta' },
  { pattern: 'gaggenau', brandSlug: 'gaggenau' },
  { pattern: 'venicem', brandSlug: 'venicem' },
  { pattern: 'vanory', brandSlug: 'vanory' },
  { pattern: 'noorth', brandSlug: 'noorth' },
  { pattern: 'vitage', brandSlug: 'vitage' },
  { pattern: 'longhi', brandSlug: 'longhi' },
  { pattern: 'dv-home', brandSlug: 'dv-home' },
];

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY DETECTION PATTERNS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Category detection: matches prefix at start of slug
 * Order matters: more specific patterns first
 * 
 * Prefix → Canonical CategorySlug
 */
export const CATEGORY_PREFIXES: Array<{ prefix: string; categorySlug: LegacyCategorySlug }> = [
  // MEBLE GROUP (18 categories)
  { prefix: 'barek-', categorySlug: 'akcesoria' },
  { prefix: 'koszyk-', categorySlug: 'akcesoria' },
  { prefix: 'waza-', categorySlug: 'akcesoria' },
  { prefix: 'parawan-', categorySlug: 'akcesoria' },
  { prefix: 'legowisko-', categorySlug: 'akcesoria' },
  
  { prefix: 'biurko-', categorySlug: 'biuro' },
  { prefix: 'fotel-biurowy-', categorySlug: 'biuro' },
  
  { prefix: 'dywan-', categorySlug: 'dywany' },
  
  { prefix: 'fotel-', categorySlug: 'fotele' },
  
  { prefix: 'hoker-', categorySlug: 'hokery' },
  
  { prefix: 'komoda-', categorySlug: 'komody' },
  { prefix: 'komodsa-', categorySlug: 'komody' }, // typo in source
  
  { prefix: 'konsola-', categorySlug: 'konsole' },
  
  { prefix: 'krzeslo-', categorySlug: 'krzesla' },
  
  { prefix: 'lustro-', categorySlug: 'lustra' },
  
  { prefix: 'lozko-', categorySlug: 'lozka' },
  
  { prefix: 'puf-', categorySlug: 'pufy' },
  
  { prefix: 'regal-', categorySlug: 'regaly' },
  { prefix: 'polka-', categorySlug: 'regaly' },
  
  { prefix: 'sofa-', categorySlug: 'sofy' },
  
  { prefix: 'stolik-boczny-', categorySlug: 'stoliki-boczne' }, // must be before stolik-
  { prefix: 'stolik-kawowy-', categorySlug: 'stoliki-kawowe' }, // must be before stolik-
  { prefix: 'stolik-', categorySlug: 'stoliki-kawowe' }, // default for generic stolik
  { prefix: 'stolek-', categorySlug: 'stoliki-kawowe' }, // typo variant
  
  { prefix: 'stol-', categorySlug: 'stoly' },
  { prefix: 'lawka-', categorySlug: 'stoly' },
  
  { prefix: 'szafka-', categorySlug: 'szafki-nocne' },
  
  { prefix: 'szezlong-', categorySlug: 'szezlongi' },
  { prefix: 'lezak-', categorySlug: 'szezlongi' },
  { prefix: 'lezanka-', categorySlug: 'szezlongi' },

  // OŚWIETLENIE GROUP (7 categories)
  { prefix: 'kinkiet-', categorySlug: 'kinkiety' },
  
  { prefix: 'lampa-podlogowa-', categorySlug: 'lampy-podlogowe' },
  { prefix: 'lampa-stolowa-', categorySlug: 'lampy-stolowe' },
  { prefix: 'lampa-wiszaca-', categorySlug: 'lampy-wiszace' },
  { prefix: 'lampa-', categorySlug: 'oswietlenie' }, // generic lamp
  { prefix: 'lampka-', categorySlug: 'lampy-stolowe' }, // small lamp → table lamp
  { prefix: 'reflektor-', categorySlug: 'oswietlenie' },
  
  { prefix: 'zyrandol-', categorySlug: 'zyrandole' },

  // KUCHNIE GROUP
  { prefix: 'kuchnia-', categorySlug: 'kuchnie' },
  { prefix: 'ekskluzywna-kuchnia-', categorySlug: 'kuchnie' },
  { prefix: 'eksluzywna-kuchnia-', categorySlug: 'kuchnie' }, // typo
  { prefix: 'luksusowa-kuchnia-', categorySlug: 'kuchnie' },

  // GARDEROBY GROUP
  { prefix: 'garderoba-', categorySlug: 'garderoby' },
  { prefix: 'ekskluzywna-garderoba-', categorySlug: 'garderoby' },
  { prefix: 'elegancka-garderoba-', categorySlug: 'garderoby' },

  // ŁAZIENKI GROUP
  { prefix: 'lazienka-', categorySlug: 'lazienki' },
  { prefix: 'luksusowa-lazienka-', categorySlug: 'lazienki' },

  // OGRÓD GROUP
  { prefix: 'donica-', categorySlug: 'donice' },
  
  // Note: outdoor furniture from exteta should be meble-ogrodowe
  // but we detect by brand context in the generator
];

// ═══════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Detect brand from product slug
 * Returns canonical brand slug or 'unknown'
 * 
 * Priority:
 * 1. Explicit slug mapping (for products with no brand in slug)
 * 2. Pattern matching (brand fragment anywhere in slug)
 */
export function detectBrand(slug: string): LegacyBrandSlug | 'unknown' {
  // 1. Check explicit mappings first
  if (slug in EXPLICIT_SLUG_BRANDS) {
    return EXPLICIT_SLUG_BRANDS[slug];
  }
  
  // 2. Pattern matching
  for (const { pattern, brandSlug } of BRAND_PATTERNS) {
    if (slug.includes(pattern)) {
      return brandSlug;
    }
  }
  return 'unknown';
}

/**
 * Detect category from product slug and brand context
 * Returns canonical category slug or 'unknown'
 * 
 * Special rule: Exteta products that are furniture → meble-ogrodowe
 */
export function detectCategory(slug: string, brandSlug: LegacyBrandSlug | 'unknown'): LegacyCategorySlug | 'unknown' {
  // First try explicit prefix matching
  for (const { prefix, categorySlug } of CATEGORY_PREFIXES) {
    if (slug.startsWith(prefix)) {
      // Special case: Exteta outdoor furniture
      if (brandSlug === 'exteta' && isFurnitureCategory(categorySlug)) {
        return 'meble-ogrodowe';
      }
      return categorySlug;
    }
  }
  return 'unknown';
}

/**
 * Check if category is furniture (for exteta outdoor detection)
 */
function isFurnitureCategory(categorySlug: LegacyCategorySlug): boolean {
  const furnitureCategories: LegacyCategorySlug[] = [
    'sofy', 'fotele', 'krzesla', 'stoly', 'stoliki-kawowe', 'stoliki-boczne',
    'szezlongi', 'pufy', 'lozka'
  ];
  return furnitureCategories.includes(categorySlug);
}

/**
 * Get all canonical brand slugs
 */
export function getCanonicalBrandSlugs(): string[] {
  return Array.from(new Set(BRAND_PATTERNS.map(p => p.brandSlug)));
}

/**
 * Get all canonical category slugs
 */
export function getCanonicalCategorySlugs(): string[] {
  return Array.from(new Set(CATEGORY_PREFIXES.map(p => p.categorySlug)));
}
