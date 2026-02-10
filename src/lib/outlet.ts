import outletData from '@/data/outlet-products.json';
import { mediaUrl } from '@/lib/buildMode';

export interface OutletProduct {
  id: string;
  name: string;
  brand: string;
  quantity: string;
  description: string;
  images: string[];
}

export interface OutletCategory {
  slug: string;
  name: string;
  products: OutletProduct[];
}

/** Rewrites image paths in a product to use the external media URL */
function resolveProductImages(product: OutletProduct): OutletProduct {
  return {
    ...product,
    images: product.images.map(img => mediaUrl(img)),
  };
}

function resolveCategory(cat: OutletCategory): OutletCategory {
  return {
    ...cat,
    products: cat.products.map(resolveProductImages),
  };
}

export function getOutletCategories(): OutletCategory[] {
  return outletData.categories.map(resolveCategory);
}

export function getOutletCategoryBySlug(slug: string): OutletCategory | undefined {
  const cat = outletData.categories.find(c => c.slug === slug);
  return cat ? resolveCategory(cat) : undefined;
}

export function getOutletProductById(id: string): { product: OutletProduct; category: OutletCategory } | undefined {
  for (const category of outletData.categories) {
    const product = category.products.find(p => p.id === id);
    if (product) {
      return { product: resolveProductImages(product), category: resolveCategory(category) };
    }
  }
  return undefined;
}

export function getAllOutletProducts(): { product: OutletProduct; categorySlug: string }[] {
  const products: { product: OutletProduct; categorySlug: string }[] = [];
  for (const category of outletData.categories) {
    for (const product of category.products) {
      products.push({ product: resolveProductImages(product), categorySlug: category.slug });
    }
  }
  return products;
}
