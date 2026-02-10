/**
 * Categories Data Layer
 * 
 * Reads from: canonical/legacyCategories.ts
 * This is the single source of truth for category data.
 */

import { LEGACY_CATEGORIES, type LegacyCategory } from '@/canonical/legacyCategories';

export interface Category {
  slug: string;
  name: string;
  productCount: number;
}

/**
 * Convert LegacyCategory to Category interface
 */
function toCategory(item: LegacyCategory): Category {
  return {
    slug: item.slug,
    name: item.label,
    productCount: item.productCount || 0,
  };
}

/**
 * Get all categories
 */
export function getAllCategories(): Category[] {
  return LEGACY_CATEGORIES.map(toCategory);
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  const item = LEGACY_CATEGORIES.find((c) => c.slug === slug);
  if (!item) return undefined;
  
  return toCategory(item);
}

/**
 * Get category count
 */
export function getCategoryCount(): number {
  return LEGACY_CATEGORIES.length;
}

/**
 * Get all category slugs (for static generation)
 */
export function getAllCategorySlugs(): string[] {
  return LEGACY_CATEGORIES.map((c) => c.slug);
}
