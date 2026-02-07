import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipAkcesoriaDekoracyjnePage() {
  const category = getOutletCategoryBySlug('akcesoria-dekoracyjne');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Akcesoria Dekoracyjne – Outlet"
      description="Ekskluzywne akcesoria dekoracyjne w promocyjnych cenach."
      products={category.products}
    />
  );
}
