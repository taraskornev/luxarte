import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticleBySlug, getAllArticleSlugs } from '@/data/articles';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Artykuł nie znaleziony - LuxArte',
    };
  }

  return {
    title: `${article.title} - LuxArte`,
    description: article.excerpt,
  };
}

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="article-page">
      {/* Hero Section */}
      <section className="article-hero">
        <div className="article-hero-image">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
          <div className="article-hero-overlay" />
        </div>
        <div className="article-hero-content">
          <span className="article-category">{article.category}</span>
          <h1 className="article-title">{article.title}</h1>
          <time className="article-date">{article.date}</time>
        </div>
      </section>

      {/* Article Content */}
      <article className="article-content">
        <div className="article-container">
          {article.sections.map((section, index) => (
            <section key={index} className="article-section">
              {section.heading && (
                <h2 className="article-section-heading">{section.heading}</h2>
              )}
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="article-paragraph">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="article-tags">
              {article.tags.map((tag, index) => (
                <span key={index} className="article-tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Back Link */}
          <div className="article-back">
            <Link href="/aktualnosci" className="article-back-link">
              ← Powrót do aktualności
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
