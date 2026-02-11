import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticleBySlug, getAllArticleSlugs, localizeArticle } from '@/data/articles';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Article not found - LuxArte',
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

export default async function ArticlePageEN({ params }: ArticlePageProps) {
  const { slug } = await params;
  const rawArticle = getArticleBySlug(slug);

  if (!rawArticle) {
    notFound();
  }

  const article = localizeArticle(rawArticle, 'en');

  // Get related articles (same category or different articles, max 3)
  const relatedArticles = articles
    .filter(a => a.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === rawArticle.category ? 1 : 0;
      const bMatch = b.category === rawArticle.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 3)
    .map(a => localizeArticle(a, 'en'));

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
          {(() => {
            const totalImages = article.sections.reduce((sum, s) => sum + (s.images?.length || 0), 0);
            const isOddTotal = totalImages % 2 === 1;
            let imageCounter = 0;

            return article.sections.map((section, index) => (
              <section key={index} className="article-section" data-scroll-animate>
                {section.heading && (
                  <h2 className="article-section-heading">{section.heading}</h2>
                )}
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="article-paragraph">
                    {paragraph}
                  </p>
                ))}
                {section.images && section.images.length > 0 && (
                  <div className={`article-section-gallery${section.images.length === 1 ? ' article-section-gallery--single' : ''}`}>
                    {section.images.map((img, imgIndex) => {
                      imageCounter++;
                      const isLastOdd = isOddTotal && imageCounter === totalImages && section.images!.length > 1;
                      return (
                        <div key={imgIndex} className={`article-section-gallery-item${isLastOdd ? ' article-section-gallery-item--wide' : ''}`}>
                          <Image
                            src={img}
                            alt={section.heading || article.title}
                            width={800}
                            height={600}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            ));
          })()}

          {/* Article Gallery */}
          {article.gallery && article.gallery.length > 0 && (
            <section className="article-gallery">
              <div className="article-gallery-grid">
                {article.gallery.map((img, index) => (
                  <div key={index} className="article-gallery-item">
                    <Image
                      src={img}
                      alt={`${article.title} - ${index + 1}`}
                      width={600}
                      height={450}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Button */}
          <div className="article-cta">
            <Link href="/en/contact#contact-form" className="article-cta-button">
              Contact us
            </Link>
          </div>

          {/* Related Posts */}
          {relatedArticles.length > 0 && (
            <section className="article-related">
              <h2 className="article-related-title">Related posts</h2>
              <div className="article-related-grid">
                {relatedArticles.map((related) => (
                  <Link 
                    key={related.slug} 
                    href={`/en/news/${related.slug}`} 
                    className="article-related-card"
                  >
                    <div className="article-related-image">
                      <Image
                        src={related.image}
                        alt={related.title}
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                      />
                    </div>
                    <div className="article-related-content">
                      <span className="article-related-category">{related.category}</span>
                      <h3 className="article-related-name">{related.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back Link */}
          <div className="article-back">
            <Link href="/en/news" className="article-back-link">
              ← Back to news
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
