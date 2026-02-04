/**
 * ============================================================================
 * OUTLET ITEM DETAIL PAGE
 * ============================================================================
 *
 * Route: /outlet/[slug]
 * Purpose: Individual outlet item page
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OutletItemPage } from '@/components/outlet';
import { getOutletItemBySlug, getAllOutletItemSlugs } from '@/data/outlet-data';
import '@/styles/outlet.css';

interface OutletItemRouteProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllOutletItemSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: OutletItemRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getOutletItemBySlug(slug);

  if (!item) {
    return {
      title: 'Produkt nie znaleziony | LuxArte',
      description: 'Żądany produkt nie został znaleziony.',
    };
  }

  return {
    title: item.seo.title,
    description: item.seo.description,
    openGraph: {
      title: item.seo.title,
      description: item.seo.description,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'LuxArte',
      url: `/outlet/${item.slug}`,
      images: [
        {
          url: item.primaryImage.src,
          alt: item.primaryImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: item.seo.title,
      description: item.seo.description,
      images: [item.primaryImage.src],
    },
    alternates: {
      canonical: `/outlet/${item.slug}`,
    },
  };
}

export default async function OutletItemRoute({
  params,
}: OutletItemRouteProps): Promise<JSX.Element> {
  const { slug } = await params;
  const item = getOutletItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return <OutletItemPage item={item} />;
}
