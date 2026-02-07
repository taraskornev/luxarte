import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipSofyPage() {
  const category = getOutletCategoryBySlug('sofy');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Sofy – Outlet"
      description="Ekskluzywne sofy w promocyjnych cenach. Zapytaj o cenę wybranych modeli."
      products={category.products}
    />
  );
}
