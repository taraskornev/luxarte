/**
 * ============================================================================
 * BRAND DETAIL PAGE - LUXARTE
 * ============================================================================
 *
 * Next.js App Router dynamic brand detail route (/brands/[slug]).
 *
 * @version 1.0.0
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AppShell } from '@/components/layout';
import { BrandPageContent } from './BrandPageContent';
import { brands, getBrandBySlug } from '@/data/brands-data';

// ============================================================================
// Static Params (for static generation)
// ============================================================================

export function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.slug,
  }));
}

// ============================================================================
// Metadata
// ============================================================================

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    return {
      title: 'Marka nie znaleziona',
    };
  }

  return {
    title: `${brand.name} – Kolekcja Mebli`,
    description: brand.seo.description,
    alternates: {
      canonical: `https://www.luxarte.pl/brands/${brand.slug}`,
    },
    openGraph: {
      type: 'website',
      title: `${brand.name} – Kolekcja Mebli | LuxArte`,
      description: brand.shortDescription,
      url: `https://www.luxarte.pl/brands/${brand.slug}`,
      images: [
        {
          url: brand.image,
          alt: `${brand.name} - LuxArte`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${brand.name} | LuxArte`,
      description: brand.shortDescription,
      images: [brand.image],
    },
  };
}

// ============================================================================
// Page Component
// ============================================================================

export default async function BrandDetailPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <AppShell>
      <BrandPageContent brand={brand} />
    </AppShell>
  );
}
