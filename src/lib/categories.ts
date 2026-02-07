/**
 * Categories Data Layer
 * 
 * Reads from: data/legacy-categories.json
 * This is the single source of truth for category data.
 */

import legacyCategories from '@/data/legacy-categories.json';

export interface Category {
  slug: string;
  name: string;
  productCount: number;
}

/**
 * Get all categories
 */
export function getAllCategories(): Category[] {
  return legacyCategories.map((item) => ({
    slug: item.slug,
    name: item.name,
    productCount: item.productCount || 0,
  }));
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  const item = legacyCategories.find((c) => c.slug === slug);
  if (!item) return undefined;
  
  return {
    slug: item.slug,
    name: item.name,
    productCount: item.productCount || 0,
  };
}

/**
 * Get category count
 */
export function getCategoryCount(): number {
  return legacyCategories.length;
}

/**
 * Get all category slugs (for static generation)
 */
export function getAllCategorySlugs(): string[] {
  return legacyCategories.map((c) => c.slug);
}
