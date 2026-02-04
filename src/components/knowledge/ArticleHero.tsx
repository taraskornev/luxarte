/**
 * ============================================================================
 * ARTICLE HERO COMPONENT
 * ============================================================================
 *
 * Hero section for individual article pages.
 * Shows hero image, title, date, topic chips, and breadcrumb.
 *
 * @component ArticleHero
 */

import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/data/knowledge-data';
import { topicLabels } from '@/data/knowledge-data';

export interface ArticleHeroProps {
  readonly article: Article;
}

/**
 * Format date to Polish locale
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Generate BreadcrumbList schema
 */
function generateBreadcrumbSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: 'https://www.luxarte.pl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Baza Wiedzy',
        item: 'https://www.luxarte.pl/knowledge-base',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://www.luxarte.pl/knowledge-base/${article.slug}`,
      },
    ],
  };
}

/**
 * ArticleHero - Hero section for article detail page
 */
export function ArticleHero({ article }: ArticleHeroProps): JSX.Element {
  const breadcrumbSchema = generateBreadcrumbSchema(article);

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="article-hero">
        {/* Hero Image */}
        <div className="article-hero__image-wrapper">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            className="article-hero__image"
            width={1920}
            height={800}
            priority
          />
          <div className="article-hero__overlay" />
        </div>

        <div className="article-hero__container">
          {/* Breadcrumb Navigation */}
          <nav className="article-hero__breadcrumb" aria-label="Ścieżka nawigacji">
            <ol className="article-hero__breadcrumb-list">
              <li className="article-hero__breadcrumb-item">
                <Link href="/">Strona główna</Link>
              </li>
              <li className="article-hero__breadcrumb-item">
                <Link href="/knowledge-base">Baza Wiedzy</Link>
              </li>
              <li className="article-hero__breadcrumb-item article-hero__breadcrumb-item--current">
                <span>{article.title}</span>
              </li>
            </ol>
          </nav>

          {/* Topic Chips */}
          <div className="article-hero__topics">
            {article.topics.map((topic) => (
              <span key={topic} className="article-hero__topic">
                {topicLabels[topic]}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="article-hero__title">{article.title}</h1>

          {/* Meta */}
          <div className="article-hero__meta">
            {article.publishDate && (
              <time
                className="article-hero__date"
                dateTime={article.publishDate}
              >
                {formatDate(article.publishDate)}
              </time>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
