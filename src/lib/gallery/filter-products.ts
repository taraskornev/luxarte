/**
 * ============================================================================
 * FILTER PRODUCTS ENGINE
 * ============================================================================
 *
 * Apply faceted filters to product list.
 *
 * Logic:
 * - AND between facet groups (brands AND categories AND types)
 * - OR within facet group (brand=versace OR brand=bentley)
 * - Empty array = no constraint
 *
 * Performance:
 * - No mutation of source arrays
 * - Single pass through products
 * - Target <5ms for 500 products
 *
 * @version 1.0.0
 */

import {
  type CatalogProduct,
  type ProductCategorySlug,
} from '@/data/generated/products-catalog-full';
import { GalleryFilterState, hasActiveFilters } from './filter-state';
import { deriveProductType } from './facet-index';

// ============================================================================
// Main Filter Function
// ============================================================================

/**
 * Filter products based on filter state
 *
 * @param products - Source product array (not mutated)
 * @param state - Current filter state
 * @returns New array of filtered products
 */
export function filterProducts(
  products: readonly CatalogProduct[],
  state: GalleryFilterState
): CatalogProduct[] {
  // Fast path - no filters active
  if (!hasActiveFilters(state)) {
    return [...products];
  }

  const hasBrandFilter = state.brands.length > 0;
  const hasCategoryFilter = state.categories.length > 0;
  const hasTypeFilter = state.types.length > 0;

  // Pre-create Sets for O(1) lookups
  const brandSet = hasBrandFilter ? new Set(state.brands) : null;
  const categorySet = hasCategoryFilter ? new Set(state.categories) : null;
  const typeSet = hasTypeFilter ? new Set(state.types) : null;

  return products.filter((product) => {
    // Brand filter (OR within group)
    if (brandSet && !brandSet.has(product.brandSlug)) {
      return false;
    }

    // Category filter (OR within group)
    if (categorySet && !categorySet.has(product.categorySlug)) {
      return false;
    }

    // Type filter (OR within group)
    if (typeSet) {
      const type = deriveProductType(product.categorySlug);
      if (!typeSet.has(type)) {
        return false;
      }
    }

    return true;
  });
}

// ============================================================================
// Filter Result Statistics
// ============================================================================

export interface FilterStats {
  totalProducts: number;
  filteredCount: number;
  brandBreakdown: Map<string, number>;
  categoryBreakdown: Map<string, number>;
  typeBreakdown: Map<string, number>;
}

/**
 * Compute statistics about filtered results
 */
export function computeFilterStats(
  filteredProducts: readonly CatalogProduct[]
): FilterStats {
  const brandBreakdown = new Map<string, number>();
  const categoryBreakdown = new Map<string, number>();
  const typeBreakdown = new Map<string, number>();

  filteredProducts.forEach((product) => {
    // Brand count
    const brandCount = brandBreakdown.get(product.brandSlug) || 0;
    brandBreakdown.set(product.brandSlug, brandCount + 1);

    // Category count
    const categoryCount = categoryBreakdown.get(product.categorySlug) || 0;
    categoryBreakdown.set(product.categorySlug, categoryCount + 1);

    // Type count
    const type = deriveProductType(product.categorySlug);
    const typeCount = typeBreakdown.get(type) || 0;
    typeBreakdown.set(type, typeCount + 1);
  });

  return {
    totalProducts: filteredProducts.length,
    filteredCount: filteredProducts.length,
    brandBreakdown,
    categoryBreakdown,
    typeBreakdown,
  };
}

export default filterProducts;
