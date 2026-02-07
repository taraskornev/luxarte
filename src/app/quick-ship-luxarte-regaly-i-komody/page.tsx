import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipRegalyKomodyPage() {
  const category = getOutletCategoryBySlug('regaly-i-komody');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Regały i Komody – Outlet"
      description="Ekskluzywne regały i komody w promocyjnych cenach."
      products={category.products}
    />
  );
}
