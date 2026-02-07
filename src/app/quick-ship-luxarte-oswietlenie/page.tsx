import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipOswietleniePage() {
  const category = getOutletCategoryBySlug('oswietlenie');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Oświetlenie – Outlet"
      description="Ekskluzywne lampy i oświetlenie w promocyjnych cenach."
      products={category.products}
    />
  );
}
