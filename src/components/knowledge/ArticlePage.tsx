/**
 * ============================================================================
 * ARTICLE PAGE TEMPLATE
 * ============================================================================
 *
 * Individual article page template with full SEO schemas.
 * /knowledge-base/[slug] route.
 *
 * @component ArticlePage
 */

import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/data/knowledge-data';
import { getRelatedArticles } from '@/data/knowledge-data';
import { brands } from '@/data/brands-data';
import { categories } from '@/data/categories-data';
import { ArticleHero } from './ArticleHero';
import { ArticleBody } from './ArticleBody';
import { RelatedArticles } from './RelatedArticles';

export interface ArticlePageProps {
  readonly article: Article;
}

/**
 * Generate Article schema
 */
function generateArticleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.luxarte.pl/knowledge-base/${article.slug}#article`,
    headline: article.title,
    description: article.excerpt,
    image: article.heroImage.src,
    url: `https://www.luxarte.pl/knowledge-base/${article.slug}`,
    datePublished: article.publishDate || undefined,
    author: {
      '@id': 'https://www.luxarte.pl/#organization',
    },
    publisher: {
      '@id': 'https://www.luxarte.pl/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.luxarte.pl/knowledge-base/${article.slug}`,
    },
  };
}

/**
 * Get brand data by slug
 */
function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
}

/**
 * Get category data by slug
 */
function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

/**
 * ArticlePage - Individual article template
 */
export function ArticlePage({ article }: ArticlePageProps): JSX.Element {
  const articleSchema = generateArticleSchema(article);
  const relatedArticles = getRelatedArticles(article.slug, 3);

  // Get related brand and category data
  const relatedBrandData = article.relatedBrands
    .map((slug) => getBrandBySlug(slug))
    .filter((b): b is NonNullable<typeof b> => b !== undefined);

  const relatedCategoryData = article.relatedCategories
    .map((slug) => getCategoryBySlug(slug))
    .filter((c): c is NonNullable<typeof c> => c !== undefined);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article Hero */}
      <ArticleHero article={article} />

      {/* Article Content */}
      <article className="article-content">
        <div className="article-content__container">
          {/* Main Body */}
          <ArticleBody sections={article.body} />

          {/* Related Brands */}
          {relatedBrandData.length > 0 && (
            <aside className="article-related-brands">
              <h3 className="article-related-brands__title">Wspomniane marki</h3>
              <div className="article-related-brands__grid">
                {relatedBrandData.map((brand) => (
                  <Link
                    key={brand.id}
                    href={`/brands/${brand.slug}`}
                    className="article-related-brands__card"
                  >
                    <Image
                      src={brand.logo || brand.image}
                      alt={brand.name}
                      className="article-related-brands__logo"
                      width={120}
                      height={60}
                    />
                    <span className="article-related-brands__name">
                      {brand.name}
                    </span>
                  </Link>
                ))}
              </div>
            </aside>
          )}

          {/* Related Categories */}
          {relatedCategoryData.length > 0 && (
            <aside className="article-related-categories">
              <h3 className="article-related-categories__title">
                Powiązane kategorie
              </h3>
              <div className="article-related-categories__list">
                {relatedCategoryData.map((category) => (
                  <Link
                    key={category.id}
                    href={`/categories/${category.slug}`}
                    className="article-related-categories__link"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </aside>
          )}

          {/* Interior Design Service CTA */}
          {article.relatedService && (
            <aside className="article-service-cta">
              <div className="article-service-cta__content">
                <h3 className="article-service-cta__title">
                  Zainteresowany realizacją?
                </h3>
                <p className="article-service-cta__text">
                  Nasz zespół projektantów wnętrz pomoże Ci stworzyć wymarzoną
                  przestrzeń z wykorzystaniem produktów opisanych marek.
                </p>
                <Link
                  href="/interior-design-service"
                  className="article-service-cta__button"
                >
                  Poznaj usługę projektowania wnętrz
                </Link>
              </div>
            </aside>
          )}
        </div>
      </article>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      {/* Back to Knowledge Base */}
      <nav className="article-navigation">
        <div className="article-navigation__container">
          <Link href="/knowledge-base" className="article-navigation__back">
            ← Powrót do Bazy Wiedzy
          </Link>
        </div>
      </nav>
    </>
  );
}
