import outletData from '@/data/outlet-products.json';

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

export function getOutletCategories(): OutletCategory[] {
  return outletData.categories;
}

export function getOutletCategoryBySlug(slug: string): OutletCategory | undefined {
  return outletData.categories.find(cat => cat.slug === slug);
}

export function getOutletProductById(id: string): { product: OutletProduct; category: OutletCategory } | undefined {
  for (const category of outletData.categories) {
    const product = category.products.find(p => p.id === id);
    if (product) {
      return { product, category };
    }
  }
  return undefined;
}

export function getAllOutletProducts(): { product: OutletProduct; categorySlug: string }[] {
  const products: { product: OutletProduct; categorySlug: string }[] = [];
  for (const category of outletData.categories) {
    for (const product of category.products) {
      products.push({ product, categorySlug: category.slug });
    }
  }
  return products;
}
