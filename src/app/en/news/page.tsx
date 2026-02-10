import Image from 'next/image';
import Link from 'next/link';
import { articles, localizeArticle } from '@/data/articles';

export const metadata = {
  title: 'News - LuxArte - Fashion for Home',
  description: 'WHAT\'S NEW - Latest news from the world of exclusive furniture and interior design.',
};

export default function NewsPageEN() {
  const enArticles = articles.map(a => localizeArticle(a, 'en'));

  return (
    <main className="content-page content-page--wide">
      <div className="content-page-container">
        <h1 className="content-page-title">NEWS</h1>

        <div className="news-grid">
          {enArticles.map((article, index) => (
            <article key={index} className="news-card">
              <Link href={`/en/news/${article.slug}`} className="news-card-link">
                <div className="news-card-image">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <div className="news-card-content">
                  <span className="news-card-category">{article.category}</span>
                  <h2 className="news-card-title">{article.title}</h2>
                  <time className="news-card-date">{article.date}</time>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
