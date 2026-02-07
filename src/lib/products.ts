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
function toProduct(item: CatalogProduct): Product {
  return {
    id: item.id,
    name: item.name,
    slug: item.slug,
    brandSlug: item.brandSlug,
    brandName: brandNames[item.brandSlug] || item.brandSlug,
    categorySlug: item.categorySlug,
    categoryName: categoryNames[item.categorySlug] || item.categorySlug,
  };
}

/**
 * Get all products from catalog
 */
export function getAllProducts(): Product[] {
  return catalogProducts.map(toProduct);
}

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  const item = catalogProducts.find((p) => p.slug === slug);
  return item ? toProduct(item) : undefined;
}

/**
 * Get products by brand
 */
export function getProductsByBrand(brandSlug: string): Product[] {
  return catalogProducts
    .filter((p) => p.brandSlug === brandSlug)
    .map(toProduct);
}

/**
 * Get products by category
 */
export function getProductsByCategory(categorySlug: string): Product[] {
  return catalogProducts
    .filter((p) => p.categorySlug === categorySlug)
    .map(toProduct);
}

/**
 * Get total product count
 */
export function getProductCount(): number {
  return catalogProducts.length;
}
