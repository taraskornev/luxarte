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
 * Polish singular product-name prefixes → English translations.
 * Product names are formatted: "CategoryWord BrandName ProductModel"
 * e.g. "Fotel Fendi Casa Venus" → "Armchair Fendi Casa Venus"
 */
const productNamePrefixEn: Record<string, string> = {
  'Barek': 'Bar Cabinet',
  'Biurko': 'Desk',
  'Donica': 'Planter',
  'Dywan': 'Rug',
  'Ekskluzywna': 'Exclusive',
  'Eksluzywna': 'Exclusive',
  'Elegancka': 'Elegant',
  'Fotel': 'Armchair',
  'Garderoba': 'Wardrobe',
  'Hoker': 'Bar Stool',
  'Kinkiet': 'Wall Sconce',
  'Komoda': 'Dresser',
  'Komodsa': 'Dresser',
  'Konsola': 'Console',
  'Koszyk': 'Basket',
  'Krzeslo': 'Chair',
  'Kuchnia': 'Kitchen',
  'Lampa': 'Lamp',
  'Lampka': 'Table Lamp',
  'Lawka': 'Bench',
  'Lazienka': 'Bathroom',
  'Legowisko': 'Pet Bed',
  'Lezak': 'Lounger',
  'Lezanka': 'Daybed',
  'Lozko': 'Bed',
  'Luksusowa': 'Luxury',
  'Lustro': 'Mirror',
  'Parawan': 'Screen',
  'Polka': 'Shelf',
  'Puf': 'Pouf',
  'Reflektor': 'Spotlight',
  'Regal': 'Bookcase',
  'Sofa': 'Sofa',
  'Stol': 'Table',
  'Stolek': 'Stool',
  'Stolik': 'Side Table',
  'Szafka': 'Nightstand',
  'Szezlong': 'Chaise Longue',
  'Waza': 'Vase',
  'Zyrandol': 'Chandelier',
};

/**
 * Translate the first word of a product name to English.
 */
function translateProductName(name: string): string {
  const spaceIdx = name.indexOf(' ');
  if (spaceIdx === -1) return name;
  const firstWord = name.slice(0, spaceIdx);
  const rest = name.slice(spaceIdx);
  const en = productNamePrefixEn[firstWord];
  return en ? en + rest : name;
}

/**
 * Convert CatalogProduct to Product with resolved names
 */
function toProduct(item: CatalogProduct, locale: string = 'pl'): Product {
  const names = locale === 'en' ? categoryNamesEn : categoryNames;
  return {
    id: item.id,
    name: locale === 'en' ? translateProductName(item.name) : item.name,
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
