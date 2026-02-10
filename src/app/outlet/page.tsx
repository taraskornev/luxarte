import { OutletClient } from '@/components/outlet/OutletClient';
import { getOutletCategories } from '@/lib/outlet';

export const metadata = {
  title: 'Outlet - LuxArte - Fashion for Home',
  description: 'ZOBACZ MEBLE NAJLEPSZYCH MAREK DOSTĘPNE OD RĘKI W SHOWROOM\'ACH LUXARTE! CENY OBNIŻONE NAWET DO – 60 %.',
};

interface OutletPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function OutletPage({ searchParams }: OutletPageProps) {
  const params = await searchParams;
  const categories = getOutletCategories();
  const initialCategory = params.category || undefined;

  return <OutletClient categories={categories} initialCategory={initialCategory} />;
}
