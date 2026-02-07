import { getOutletCategoryBySlug } from '@/lib/outlet';
import { OutletCategoryPage } from '@/components/outlet/OutletCategoryPage';

export default function QuickShipDywanyPage() {
  const category = getOutletCategoryBySlug('dywany');
  
  if (!category) {
    return null;
  }

  return (
    <OutletCategoryPage
      title="Dywany – Outlet"
      description="Luksusowe dywany w promocyjnych cenach. Zapytaj o cenę wybranych modeli."
      products={category.products}
    />
  );
}
