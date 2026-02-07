import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipStolikiPage() {
  const category = getOutletCategoryBySlug('stoliki');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Stoliki – Outlet"
      description="Ekskluzywne stoliki kawowe i boczne w promocyjnych cenach."
      products={category.products}
    />
  );
}
