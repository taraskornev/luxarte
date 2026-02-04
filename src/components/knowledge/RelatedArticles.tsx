/**
 * ============================================================================
 * RELATED ARTICLES COMPONENT
 * ============================================================================
 *
 * Displays related articles grid at bottom of article page.
 *
 * @component RelatedArticles
 */

import type { Article } from '@/data/knowledge-data';
import { ArticleCard } from './ArticleCard';

export interface RelatedArticlesProps {
  readonly articles: readonly Article[];
}

/**
 * RelatedArticles - Grid of related article cards
 */
export function RelatedArticles({ articles }: RelatedArticlesProps): JSX.Element | null {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="related-articles" aria-labelledby="related-articles-title">
      <div className="related-articles__container">
        <h2 id="related-articles-title" className="related-articles__title">
          Powiązane artykuły
        </h2>

        <div className="related-articles__grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
