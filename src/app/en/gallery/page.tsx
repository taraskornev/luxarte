import { Suspense } from 'react';
import { getAllProducts } from '@/lib/products';
import { LEGACY_BRANDS } from '@/canonical/legacyBrands';
import { LEGACY_CATEGORIES } from '@/canonical/legacyCategories';
import { GalleryClient } from '@/components/catalog/GalleryClient';

export const metadata = {
  title: 'Product Gallery | LuxArte',
  description: 'Complete catalogue of exclusive furniture and home accessories.',
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function GalleryContent({ searchParams }: { searchParams: PageProps['searchParams'] }) {
  const products = getAllProducts('en');
  const params = await searchParams;
  
  const brands = [...LEGACY_BRANDS].sort((a, b) => a.sortOrder - b.sortOrder);
  const categories = [...LEGACY_CATEGORIES].sort((a, b) => {
    const navGroupOrder = ['meble', 'oswietlenie', 'kuchnie', 'garderoby', 'lazienki', 'ogrod'];
    const groupDiff = navGroupOrder.indexOf(a.navGroup) - navGroupOrder.indexOf(b.navGroup);
    if (groupDiff !== 0) return groupDiff;
    return a.sortOrder - b.sortOrder;
  });

  const initialBrands = parseMultiParam(params.brand);
  const initialCategories = parseMultiParam(params.category);

  return (
    <GalleryClient
      products={products}
      brands={brands}
      categories={categories}
      initialBrands={initialBrands}
      initialCategories={initialCategories}
      locale="en"
    />
  );
}

function parseMultiParam(param: string | string[] | undefined): string[] {
  if (!param) return [];
  if (Array.isArray(param)) {
    return param.flatMap(p => p.split(',').map(s => s.trim()).filter(Boolean));
  }
  return param.split(',').map(s => s.trim()).filter(Boolean);
}

export default async function GalleryPageEN({ searchParams }: PageProps) {
  return (
    <div className="gallery-page">
      <div className="gallery-container">
        <Suspense fallback={<div className="gallery-loading">Loading catalogue...</div>}>
          <GalleryContent searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
