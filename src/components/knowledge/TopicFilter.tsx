'use client';

/**
 * ============================================================================
 * TOPIC FILTER COMPONENT (CLIENT)
 * ============================================================================
 *
 * Client-side filter for knowledge base articles by topic.
 * Self-contained: includes filter UI + article grid to avoid 
 * Server/Client Component function passing issues.
 *
 * @component TopicFilter
 */

import { useState, useMemo } from 'react';
import type { Article, ArticleTopic } from '@/data/knowledge-data';
import { topicLabels } from '@/data/knowledge-data';
import { ArticleCard } from './ArticleCard';

export interface TopicFilterProps {
  readonly articles: readonly Article[];
  readonly availableTopics: readonly ArticleTopic[];
}

/**
 * TopicFilter - Filter articles by topic with integrated grid
 */
export function TopicFilter({
  articles,
  availableTopics,
}: TopicFilterProps): JSX.Element {
  const [selectedTopic, setSelectedTopic] = useState<ArticleTopic | 'all'>('all');

  // Filter articles based on selected topic
  const filteredArticles = useMemo(() => {
    if (selectedTopic === 'all') {
      return articles;
    }
    return articles.filter((article) =>
      article.topics.includes(selectedTopic)
    );
  }, [articles, selectedTopic]);

  // Handle topic selection
  const handleTopicChange = (topic: ArticleTopic | 'all') => {
    setSelectedTopic(topic);
  };

  return (
    <>
      {/* Filter Chips */}
      <div className="topic-filter" role="group" aria-label="Filtruj artykuły po temacie">
        <button
          type="button"
          className={`topic-filter__chip ${selectedTopic === 'all' ? 'topic-filter__chip--active' : ''}`}
          onClick={() => handleTopicChange('all')}
          aria-pressed={selectedTopic === 'all'}
        >
          Wszystkie
        </button>

        {availableTopics.map((topic) => (
          <button
            key={topic}
            type="button"
            className={`topic-filter__chip ${selectedTopic === topic ? 'topic-filter__chip--active' : ''}`}
            onClick={() => handleTopicChange(topic)}
            aria-pressed={selectedTopic === topic}
          >
            {topicLabels[topic]}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="topic-filter__count" aria-live="polite">
        {filteredArticles.length === 1
          ? '1 artykuł'
          : `${filteredArticles.length} artykułów`}
      </p>

      {/* Articles Grid */}
      <div className="knowledge-grid">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}

        {filteredArticles.length === 0 && (
          <p className="knowledge-grid__empty">
            Brak artykułów dla wybranego tematu.
          </p>
        )}
      </div>
    </>
  );
}
