import outletData from '@/data/outlet-products.json';
import { mediaUrl } from '@/lib/buildMode';
import type { Locale } from '@/i18n/locale';

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

/** Polish-to-English category name map */
const categoryNameEn: Record<string, string> = {
  'Sofy': 'Sofas',
  'Fotele': 'Armchairs',
  'Stoliki': 'Coffee tables',
  'Dywany': 'Rugs',
  'Oświetlenie': 'Lighting',
  'Stoły i krzesła': 'Tables & chairs',
  'Regały i komody': 'Shelves & dressers',
  'Poduszki i pledy': 'Cushions & throws',
  'Akcesoria dekoracyjne': 'Decorative accessories',
};

/** Polish-to-English quantity term map */
const quantityEn: Record<string, string> = {
  'szt.': 'pcs.',
  'komplet': 'set',
  'para': 'pair',
};

/** Translate a quantity string (e.g. "1 szt." → "1 pcs.") */
function translateQuantity(q: string): string {
  let result = q;
  for (const [pl, en] of Object.entries(quantityEn)) {
    result = result.replace(pl, en);
  }
  return result;
}

/** Rewrites image paths in a product to use the external media URL */
function resolveProductImages(product: OutletProduct): OutletProduct {
  return {
    ...product,
    images: product.images.map(img => mediaUrl(img)),
  };
}

function resolveCategory(cat: OutletCategory, locale: Locale = 'pl'): OutletCategory {
  return {
    ...cat,
    name: locale === 'en' ? (categoryNameEn[cat.name] || cat.name) : cat.name,
    products: cat.products.map(p => {
      const resolved = resolveProductImages(p);
      if (locale === 'en') {
        return { ...resolved, quantity: translateQuantity(resolved.quantity) };
      }
      return resolved;
    }),
  };
}

export function getOutletCategories(locale: Locale = 'pl'): OutletCategory[] {
  return outletData.categories.map(cat => resolveCategory(cat, locale));
}

export function getOutletCategoryBySlug(slug: string, locale: Locale = 'pl'): OutletCategory | undefined {
  const cat = outletData.categories.find(c => c.slug === slug);
  return cat ? resolveCategory(cat, locale) : undefined;
}

export function getOutletProductById(id: string, locale: Locale = 'pl'): { product: OutletProduct; category: OutletCategory } | undefined {
  for (const category of outletData.categories) {
    const product = category.products.find(p => p.id === id);
    if (product) {
      return { product: resolveProductImages(product), category: resolveCategory(category, locale) };
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
