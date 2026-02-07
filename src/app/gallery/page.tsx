import { Suspense } from 'react';
import { getAllProducts } from '@/lib/products';
import { LEGACY_BRANDS } from '@/canonical/legacyBrands';
import { LEGACY_CATEGORIES } from '@/canonical/legacyCategories';
import { GalleryClient } from '@/components/catalog/GalleryClient';

export const metadata = {
  title: 'Galeria produktów | LuxArte',
  description: 'Pełny katalog ekskluzywnych mebli i akcesoriów domowych.',
};

/**
 * Gallery Page with Server-Side SearchParams
 * 
 * URL Contract:
 * /gallery                     → ALL products
 * /gallery?brand=slug          → single brand
 * /gallery?brand=slug1,slug2   → multi brand (OR logic)
 * /gallery?category=slug       → single category
 * /gallery?category=slug1,slug2 → multi category (OR logic)
 * /gallery?brand=X&category=Y  → combined (AND between groups)
 */
interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function GalleryContent({ searchParams }: { searchParams: PageProps['searchParams'] }) {
  const products = getAllProducts();
  const params = await searchParams;
  
  // Use canonical sources - full lists, no truncation
  const brands = [...LEGACY_BRANDS].sort((a, b) => a.sortOrder - b.sortOrder);
  const categories = [...LEGACY_CATEGORIES].sort((a, b) => {
    const navGroupOrder = ['meble', 'oswietlenie', 'kuchnie', 'garderoby', 'lazienki', 'ogrod'];
    const groupDiff = navGroupOrder.indexOf(a.navGroup) - navGroupOrder.indexOf(b.navGroup);
    if (groupDiff !== 0) return groupDiff;
    return a.sortOrder - b.sortOrder;
  });

  // Parse initial filter state from URL (server-side)
  const initialBrands = parseMultiParam(params.brand);
  const initialCategories = parseMultiParam(params.category);

  return (
    <GalleryClient
      products={products}
      brands={brands}
      categories={categories}
      initialBrands={initialBrands}
      initialCategories={initialCategories}
    />
  );
}

/**
 * Parse URL param that can be comma-separated string or array
 */
function parseMultiParam(param: string | string[] | undefined): string[] {
  if (!param) return [];
  if (Array.isArray(param)) {
    return param.flatMap(p => p.split(',').map(s => s.trim()).filter(Boolean));
  }
  return param.split(',').map(s => s.trim()).filter(Boolean);
}

export default async function GalleryPage({ searchParams }: PageProps) {
  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <Suspense fallback={<div className="gallery-loading">Ładowanie katalogu...</div>}>
          <GalleryContent searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
