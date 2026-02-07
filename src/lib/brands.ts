/**
 * Brands Data Layer
 * 
 * Reads from: data/marki-content.json
 * This is the single source of truth for brand data.
 */

import markiContent from '@/data/marki-content.json';

export interface Brand {
  slug: string;
  name: string;
  intro: string[];
  localImages: string[];
}

/**
 * Get all brands
 */
export function getAllBrands(): Brand[] {
  return markiContent.map((item) => ({
    slug: item.slug,
    name: item.name,
    intro: item.intro || [],
    localImages: item.localImages || [],
  }));
}

/**
 * Get brand by slug
 */
export function getBrandBySlug(slug: string): Brand | undefined {
  const item = markiContent.find((b) => b.slug === slug);
  if (!item) return undefined;
  
  return {
    slug: item.slug,
    name: item.name,
    intro: item.intro || [],
    localImages: item.localImages || [],
  };
}

/**
 * Get brand count
 */
export function getBrandCount(): number {
  return markiContent.length;
}

/**
 * Get all brand slugs (for static generation)
 */
export function getAllBrandSlugs(): string[] {
  return markiContent.map((b) => b.slug);
}
