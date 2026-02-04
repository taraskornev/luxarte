/**
 * ============================================================================
 * ARTICLE CARD COMPONENT
 * ============================================================================
 *
 * Card for displaying articles in grid on knowledge base index.
 * Shows image, title, excerpt, topic chips, and date.
 *
 * @component ArticleCard
 */

import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/data/knowledge-data';
import { topicLabels } from '@/data/knowledge-data';

export interface ArticleCardProps {
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
 * ArticleCard - Grid card for article listing
 */
export function ArticleCard({ article }: ArticleCardProps): JSX.Element {
  return (
    <article className="article-card">
      <Link href={`/knowledge-base/${article.slug}`} className="article-card__link">
        <div className="article-card__image-wrapper">
          <Image
            src={article.heroImage.src}
            alt={article.heroImage.alt}
            className="article-card__image"
            width={600}
            height={400}
          />
        </div>

        <div className="article-card__content">
          {/* Topic Chips */}
          <div className="article-card__topics">
            {article.topics.slice(0, 2).map((topic) => (
              <span key={topic} className="article-card__topic">
                {topicLabels[topic]}
              </span>
            ))}
          </div>

          <h3 className="article-card__title">{article.title}</h3>

          <p className="article-card__excerpt">{article.excerpt}</p>

          <div className="article-card__meta">
            {article.publishDate && (
              <time
                className="article-card__date"
                dateTime={article.publishDate}
              >
                {formatDate(article.publishDate)}
              </time>
            )}
            <span className="article-card__read-more">Czytaj więcej →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
