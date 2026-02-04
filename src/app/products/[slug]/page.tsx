/**
 * ============================================================================
 * PRODUCT DETAIL PAGE
 * ============================================================================
 *
 * Route: /products/[slug]
 * Purpose: Individual product detail page
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductPage from '@/components/products/ProductPage';
import { getProductBySlug, getAllProductSlugs } from '@/data/products-data';
import '@/styles/products.css';

interface ProductRouteProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Produkt nie znaleziony | LuxArte',
      description: 'Żądany produkt nie został znaleziony.',
    };
  }

  return {
    title: product.seo.title,
    description: product.seo.description,
    openGraph: {
      title: product.seo.title,
      description: product.seo.description,
      type: 'website',
      locale: 'pl_PL',
      siteName: 'LuxArte',
      url: `/products/${product.slug}`,
      images: [
        {
          url: product.heroImage.src,
          alt: product.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seo.title,
      description: product.seo.description,
      images: [product.heroImage.src],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductRoute({
  params,
}: ProductRouteProps): Promise<JSX.Element> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductPage product={product} />;
}
