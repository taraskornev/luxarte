import { OutletClient } from '@/components/outlet/OutletClient';
import { getOutletCategories } from '@/lib/outlet';

export const metadata = {
  title: 'Outlet - LuxArte - Fashion for Home',
  description: 'Discover premium furniture from top brands available immediately at LuxArte showrooms! Prices reduced by up to 60%.',
};

interface OutletPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function OutletPageEN({ searchParams }: OutletPageProps) {
  const params = await searchParams;
  const categories = getOutletCategories();
  const initialCategory = params.category || undefined;

  return <OutletClient categories={categories} initialCategory={initialCategory} locale="en" />;
}
