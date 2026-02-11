/**
 * Products Data Layer
 * 
 * Reads from: data/generated/products-catalog-full.ts
 * This is the single source of truth for product data.
 */

import {
  catalogProducts,
  brandNames,
  categoryNames,
  categoryNamesEn,
  type CatalogProduct,
  type BrandSlug,
  type ProductCategorySlug,
} from '@/data/generated/products-catalog-full';

export interface Product {
  id: string;
  name: string;
  slug: string;
  brandSlug: BrandSlug;
  brandName: string;
  categorySlug: ProductCategorySlug;
  categoryName: string;
}

/**
 * Convert CatalogProduct to Product with resolved names
 */
function toProduct(item: CatalogProduct, locale: string = 'pl'): Product {
  const names = locale === 'en' ? categoryNamesEn : categoryNames;
  return {
    id: item.id,
    name: item.name,
    slug: item.slug,
    brandSlug: item.brandSlug,
    brandName: brandNames[item.brandSlug] || item.brandSlug,
    categorySlug: item.categorySlug,
    categoryName: names[item.categorySlug] || item.categorySlug,
  };
}

/**
 * Get all products from catalog
 */
export function getAllProducts(locale: string = 'pl'): Product[] {
  return catalogProducts.map(p => toProduct(p, locale));
}

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string, locale: string = 'pl'): Product | undefined {
  const item = catalogProducts.find((p) => p.slug === slug);
  return item ? toProduct(item, locale) : undefined;
}

/**
 * Get products by brand
 */
export function getProductsByBrand(brandSlug: string, locale: string = 'pl'): Product[] {
  return catalogProducts
    .filter((p) => p.brandSlug === brandSlug)
    .map(p => toProduct(p, locale));
}

/**
 * Get products by category
 */
export function getProductsByCategory(categorySlug: string, locale: string = 'pl'): Product[] {
  return catalogProducts
    .filter((p) => p.categorySlug === categorySlug)
    .map(p => toProduct(p, locale));
}

/**
 * Get total product count
 */
export function getProductCount(): number {
  return catalogProducts.length;
}
