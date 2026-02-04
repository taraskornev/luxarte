/**
 * ============================================================================
 * CATEGORY DETAIL PAGE - /categories/[slug]
 * ============================================================================
 *
 * Route: /categories/[slug]
 * Dynamic route for individual category pages.
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CategoryPage } from '@/components/categories';
import {
  getCategoryBySlug,
  getAllCategorySlugs,
  type Category,
} from '@/data/categories-data';
import '@/styles/categories.css';

/**
 * Route Params
 */
interface CategoryRouteParams {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate Static Params for all categories
 */
export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate Metadata for each category
 */
export async function generateMetadata({
  params,
}: CategoryRouteParams): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Kategoria nie znaleziona | LuxArte',
    };
  }

  return {
    title: `${category.name} – Luksusowe Meble`,
    description: category.seo.description,
    openGraph: {
      title: `${category.name} – Luksusowe Meble | LuxArte`,
      description: category.seo.description,
      url: `https://www.luxarte.pl/categories/${category.slug}`,
      siteName: 'LuxArte',
      type: 'website',
      images: [
        {
          url: category.heroImage.src,
          alt: category.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | LuxArte`,
      description: category.seo.description,
      images: [category.heroImage.src],
    },
    alternates: {
      canonical: `https://www.luxarte.pl/categories/${category.slug}`,
    },
  };
}

/**
 * Category Detail Route
 */
export default async function CategoryRoute({ params }: CategoryRouteParams) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return <CategoryPage category={category} />;
}
