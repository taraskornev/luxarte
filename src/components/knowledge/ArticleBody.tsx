/**
 * ============================================================================
 * ARTICLE BODY COMPONENT
 * ============================================================================
 *
 * Renders article body with semantic HTML.
 * Supports paragraphs, headings, and blockquotes.
 *
 * @component ArticleBody
 */

import type { ArticleSection } from '@/data/knowledge-data';

export interface ArticleBodyProps {
  readonly sections: readonly ArticleSection[];
}

/**
 * Render a single section
 */
function renderSection(section: ArticleSection, index: number): JSX.Element {
  switch (section.type) {
    case 'heading':
      if (section.level === 3) {
        return (
          <h3 key={index} className="article-body__heading article-body__heading--h3">
            {section.content}
          </h3>
        );
      }
      return (
        <h2 key={index} className="article-body__heading article-body__heading--h2">
          {section.content}
        </h2>
      );

    case 'quote':
      return (
        <blockquote key={index} className="article-body__quote">
          <p className="article-body__quote-text">{section.content}</p>
          {section.author && (
            <cite className="article-body__quote-author">— {section.author}</cite>
          )}
        </blockquote>
      );

    case 'paragraph':
    default:
      return (
        <p key={index} className="article-body__paragraph">
          {section.content}
        </p>
      );
  }
}

/**
 * ArticleBody - Semantic article body renderer
 */
export function ArticleBody({ sections }: ArticleBodyProps): JSX.Element {
  return (
    <div className="article-body">
      {sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}
