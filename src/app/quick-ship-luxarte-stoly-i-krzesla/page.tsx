import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipStolyKrzeslaPage() {
  const category = getOutletCategoryBySlug('stoly-i-krzesla');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Stoły i Krzesła – Outlet"
      description="Ekskluzywne stoły i krzesła w promocyjnych cenach."
      products={category.products}
    />
  );
}
