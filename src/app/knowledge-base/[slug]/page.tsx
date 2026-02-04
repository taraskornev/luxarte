/**
 * ============================================================================
 * ARTICLE DETAIL ROUTE
 * ============================================================================
 *
 * /knowledge-base/[slug] route - Individual article pages.
 *
 * @route /knowledge-base/[slug]
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllArticleSlugs,
  getArticleBySlug,
} from '@/data/knowledge-data';
import { ArticlePage } from '@/components/knowledge';

/**
 * Route Parameters
 */
interface ArticleRouteParams {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Generate Static Params for all articles
 */
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate Metadata for article
 */
export async function generateMetadata({
  params,
}: ArticleRouteParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Artykuł nie znaleziony | LuxArte',
    };
  }

  return {
    title: article.seo.title,
    description: article.seo.description,
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url: `https://www.luxarte.pl/knowledge-base/${slug}`,
      siteName: 'LuxArte',
      locale: 'pl_PL',
      type: 'article',
      images: [
        {
          url: article.heroImage.src,
          alt: article.heroImage.alt,
        },
      ],
      publishedTime: article.publishDate,
    },
    alternates: {
      canonical: `https://www.luxarte.pl/knowledge-base/${slug}`,
    },
  };
}

/**
 * Article Detail Page
 */
export default async function ArticleRoute({ params }: ArticleRouteParams) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
