/**
 * ============================================================================
 * FACET INDEX - Product Facet Computation
 * ============================================================================
 *
 * Build facet indices from product dataset for filtering.
 * Computes dynamic counts under current filter state.
 *
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 * Category and brand lists come from canonical sources.
 * Show full lists even if some have zero products.
 *
 * Performance:
 * - Precompute base indices once on module load
 * - Dynamic counts computed with memoization
 * - Target <5ms for 500 products
 *
 * @version 2.0.0
 */

import {
  catalogProducts,
  type CatalogProduct,
  type BrandSlug,
  type ProductCategorySlug,
} from '@/data/generated/products-catalog-full';
import { GalleryFilterState } from './filter-state';

// DO NOT DERIVE — CANONICAL SOURCE ONLY
import { LEGACY_CATEGORIES } from '@/canonical/legacyCategories';
import { LEGACY_BRANDS } from '@/canonical/legacyBrands';

// ============================================================================
// Types
// ============================================================================

/**
 * A facet option with count
 */
export interface FacetOption {
  readonly slug: string;
  readonly name: string;
  readonly count: number;
}

/**
 * Complete facet data for all filter dimensions
 */
export interface FacetData {
  readonly brands: readonly FacetOption[];
  readonly categories: readonly FacetOption[];
  readonly types: readonly FacetOption[];
  readonly totalProducts: number;
}

/**
 * Raw product index by facet dimension
 */
interface ProductIndex {
  byBrand: Map<string, CatalogProduct[]>;
  byCategory: Map<string, CatalogProduct[]>;
  byType: Map<string, CatalogProduct[]>;
}

// ============================================================================
// Product Type Derivation
// ============================================================================

/**
 * Derive product type from category slug
 * Maps specific categories to broader types
 */
function deriveProductType(categorySlug: ProductCategorySlug): string {
  const typeMap: Record<string, string> = {
    // Seating
    'sofy': 'seating',
    'fotele': 'seating',
    'pufy': 'seating',
    'krzesla': 'seating',
    'hokery': 'seating',
    'szezlongi': 'seating',
    // Tables
    'stoly': 'tables',
    'stoliki-kawowe': 'tables',
    'stoliki-boczne': 'tables',
    'biurka': 'tables',
    'konsole': 'tables',
    // Storage
    'komody': 'storage',
    'regaly': 'storage',
    'garderoby': 'storage',
    'szafki-nocne': 'storage',
    // Beds
    'lozka': 'beds',
    // Kitchen & Bath
    'kuchnie': 'kitchen',
    'lazienki': 'bathroom',
    // Lighting
    'oswietlenie': 'lighting',
    'zyrandole': 'lighting',
    'lampy-wiszace': 'lighting',
    'lampy-stolowe': 'lighting',
    'lampy-podlogowe': 'lighting',
    'kinkiety': 'lighting',
    // Decor
    'dywany': 'decor',
    'lustra': 'decor',
    'akcesoria': 'decor',
    'donice': 'decor',
    // Outdoor
    'meble-ogrodowe': 'outdoor',
  };

  return typeMap[categorySlug] || 'other';
}

/**
 * Human-readable type names
 */
export const typeNames: Record<string, string> = {
  'seating': 'Siedziska',
  'tables': 'Stoły i stoliki',
  'storage': 'Przechowywanie',
  'beds': 'Łóżka',
  'kitchen': 'Kuchnie',
  'bathroom': 'Łazienki',
  'lighting': 'Oświetlenie',
  'decor': 'Dekoracje',
  'outdoor': 'Meble ogrodowe',
  'other': 'Inne',
};

// ============================================================================
// Base Index Builder (run once)
// ============================================================================

/**
 * Build base product indices - runs once on module load
 */
function buildBaseIndex(products: readonly CatalogProduct[]): ProductIndex {
  const byBrand = new Map<string, CatalogProduct[]>();
  const byCategory = new Map<string, CatalogProduct[]>();
  const byType = new Map<string, CatalogProduct[]>();

  products.forEach((product) => {
    // By brand
    const brandProducts = byBrand.get(product.brandSlug) || [];
    brandProducts.push(product);
    byBrand.set(product.brandSlug, brandProducts);

    // By category
    const categoryProducts = byCategory.get(product.categorySlug) || [];
    categoryProducts.push(product);
    byCategory.set(product.categorySlug, categoryProducts);

    // By type
    const type = deriveProductType(product.categorySlug);
    const typeProducts = byType.get(type) || [];
    typeProducts.push(product);
    byType.set(type, typeProducts);
  });

  return { byBrand, byCategory, byType };
}

// Pre-compute base index on module load
const BASE_INDEX = buildBaseIndex(catalogProducts);

// ============================================================================
// Dynamic Count Computation
// ============================================================================

/**
 * Filter products by state (ignoring one facet dimension)
 */
function filterProductsExcluding(
  products: readonly CatalogProduct[],
  state: GalleryFilterState,
  excludeDimension: 'brands' | 'categories' | 'types'
): CatalogProduct[] {
  return products.filter((product) => {
    // Check brands (unless excluded)
    if (excludeDimension !== 'brands' && state.brands.length > 0) {
      if (!state.brands.includes(product.brandSlug)) return false;
    }

    // Check categories (unless excluded)
    if (excludeDimension !== 'categories' && state.categories.length > 0) {
      if (!state.categories.includes(product.categorySlug)) return false;
    }

    // Check types (unless excluded)
    if (excludeDimension !== 'types' && state.types.length > 0) {
      const type = deriveProductType(product.categorySlug);
      if (!state.types.includes(type)) return false;
    }

    return true;
  });
}

/**
 * Compute facet counts for brands given current filter state
 * Counts reflect OTHER active filters (not brands)
 */
function computeBrandCounts(
  state: GalleryFilterState
): Map<string, number> {
  const counts = new Map<string, number>();
  const relevantProducts = filterProductsExcluding(catalogProducts, state, 'brands');

  relevantProducts.forEach((product) => {
    const current = counts.get(product.brandSlug) || 0;
    counts.set(product.brandSlug, current + 1);
  });

  return counts;
}

/**
 * Compute facet counts for categories given current filter state
 * Counts reflect OTHER active filters (not categories)
 */
function computeCategoryCounts(
  state: GalleryFilterState
): Map<string, number> {
  const counts = new Map<string, number>();
  const relevantProducts = filterProductsExcluding(catalogProducts, state, 'categories');

  relevantProducts.forEach((product) => {
    const current = counts.get(product.categorySlug) || 0;
    counts.set(product.categorySlug, current + 1);
  });

  return counts;
}

/**
 * Compute facet counts for types given current filter state
 * Counts reflect OTHER active filters (not types)
 */
function computeTypeCounts(
  state: GalleryFilterState
): Map<string, number> {
  const counts = new Map<string, number>();
  const relevantProducts = filterProductsExcluding(catalogProducts, state, 'types');

  relevantProducts.forEach((product) => {
    const type = deriveProductType(product.categorySlug);
    const current = counts.get(type) || 0;
    counts.set(type, current + 1);
  });

  return counts;
}

// ============================================================================
// Facet Data Builder
// ============================================================================

/**
 * Build complete facet data with dynamic counts
 * DO NOT DERIVE — CANONICAL SOURCE ONLY
 * Uses full category/brand lists from canonical, not just those with products
 */
export function buildFacetData(state: GalleryFilterState): FacetData {
  // Compute counts for each dimension
  const brandCounts = computeBrandCounts(state);
  const categoryCounts = computeCategoryCounts(state);
  const typeCounts = computeTypeCounts(state);

  // DO NOT DERIVE — Build brand options from CANONICAL source
  const brands: FacetOption[] = LEGACY_BRANDS.map((brand) => ({
    slug: brand.slug,
    name: brand.label,
    count: brandCounts.get(brand.slug) || 0,
  }));
  brands.sort((a, b) => a.name.localeCompare(b.name, 'pl'));

  // DO NOT DERIVE — Build category options from CANONICAL source
  const categories: FacetOption[] = LEGACY_CATEGORIES.map((cat) => ({
    slug: cat.slug,
    name: cat.label,
    count: categoryCounts.get(cat.slug) || 0,
  }));
  categories.sort((a, b) => a.name.localeCompare(b.name, 'pl'));

  // Build type options (derived from product presence is OK for types)
  const types: FacetOption[] = [];
  BASE_INDEX.byType.forEach((products, slug) => {
    const count = typeCounts.get(slug) || 0;
    const name = typeNames[slug] || slug;
    types.push({ slug, name, count });
  });
  types.sort((a, b) => a.name.localeCompare(b.name, 'pl'));

  return {
    brands,
    categories,
    types,
    totalProducts: catalogProducts.length,
  };
}

// ============================================================================
// Exports
// ============================================================================

export { deriveProductType };
export { BASE_INDEX };
