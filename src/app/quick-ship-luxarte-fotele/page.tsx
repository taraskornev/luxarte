import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipFotelePage() {
  const category = getOutletCategoryBySlug('fotele');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Fotele – Outlet"
      description="Ekskluzywne fotele w promocyjnych cenach. Zapytaj o cenę wybranych modeli."
      products={category.products}
    />
  );
}
