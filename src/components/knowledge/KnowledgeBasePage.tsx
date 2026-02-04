/**
 * ============================================================================
 * KNOWLEDGE BASE INDEX PAGE TEMPLATE
 * ============================================================================
 *
 * Knowledge base index page showing all articles with topic filtering.
 * /knowledge-base route.
 *
 * @component KnowledgeBasePage
 */

import {
  articles,
  getAllTopics,
  knowledgeBaseIndexSeo,
} from '@/data/knowledge-data';
import { TopicFilter } from './TopicFilter';

/**
 * Generate ItemList schema for knowledge base
 */
function generateItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Baza Wiedzy LuxArte',
    description: knowledgeBaseIndexSeo.description,
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: article.title,
      url: `https://www.luxarte.pl/knowledge-base/${article.slug}`,
      image: article.heroImage.src,
    })),
  };
}

/**
 * KnowledgeBasePage - Knowledge base index template
 */
export function KnowledgeBasePage(): JSX.Element {
  const itemListSchema = generateItemListSchema();
  const availableTopics = getAllTopics();

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Section */}
      <section className="knowledge-hero" aria-labelledby="knowledge-title">
        <div className="knowledge-hero__container">
          <h1 id="knowledge-title" className="knowledge-hero__title">
            Baza Wiedzy
          </h1>
          <p className="knowledge-hero__description">
            Odkryj świat luksusowego designu wnętrz. Artykuły o markach,
            materiałach, trendach i kolekcjach mebli premium. Wiedza ekspercka
            od zespołu LuxArte.
          </p>
        </div>
      </section>

      {/* Filter and Articles Grid */}
      <section className="knowledge-index" aria-label="Lista artykułów">
        <div className="knowledge-index__container">
          <TopicFilter
            articles={articles}
            availableTopics={availableTopics}
          />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="knowledge-cta" aria-label="Wezwanie do działania">
        <div className="knowledge-cta__container">
          <div className="knowledge-cta__content">
            <h2 className="knowledge-cta__heading">
              Potrzebujesz eksperckiej porady?
            </h2>
            <p className="knowledge-cta__text">
              Nasz zespół projektantów wnętrz pomoże Ci stworzyć wymarzoną
              przestrzeń. Oferujemy kompleksową usługę aranżacji wnętrz z
              wykorzystaniem najlepszych włoskich marek.
            </p>
          </div>
          <div className="knowledge-cta__actions">
            <a
              href="/interior-design-service"
              className="knowledge-cta__button knowledge-cta__button--primary"
            >
              Poznaj usługę projektowania
            </a>
            <a
              href="/showroom"
              className="knowledge-cta__button knowledge-cta__button--secondary"
            >
              Skontaktuj się z nami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
