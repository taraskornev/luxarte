import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipPoduszkiPledyPage() {
  const category = getOutletCategoryBySlug('poduszki-i-pledy');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Poduszki i Pledy – Outlet"
      description="Ekskluzywne poduszki i pledy w promocyjnych cenach."
      products={category.products}
    />
  );
}
