/**
 * ============================================================================
 * CATEGORY HERO COMPONENT
 * ============================================================================
 *
 * Hero section for category detail pages.
 * Features: H1 title, hero image, breadcrumb navigation.
 *
 * @component CategoryHero
 */

import Image from 'next/image';
import type { Category } from '@/data/categories-data';

export interface CategoryHeroProps {
  readonly category: Category;
  readonly showBreadcrumb?: boolean;
}

/**
 * CategoryHero - Editorial hero for category pages
 */
export function CategoryHero({
  category,
  showBreadcrumb = true,
}: CategoryHeroProps): JSX.Element {
  return (
    <section className="category-hero" aria-labelledby="category-title">
      {/* Breadcrumb Navigation */}
      {showBreadcrumb && (
        <nav className="category-hero__breadcrumb" aria-label="Nawigacja okruszkowa">
          <ol
            className="category-hero__breadcrumb-list"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              className="category-hero__breadcrumb-item"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a href="/" itemProp="item">
                <span itemProp="name">LuxArte</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>
            <li
              className="category-hero__breadcrumb-item"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <a href="/categories" itemProp="item">
                <span itemProp="name">Kategorie</span>
              </a>
              <meta itemProp="position" content="2" />
            </li>
            <li
              className="category-hero__breadcrumb-item category-hero__breadcrumb-item--current"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              aria-current="page"
            >
              <span itemProp="name">{category.name}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
      )}

      {/* Hero Content */}
      <div className="category-hero__container">
        <div className="category-hero__content">
          <h1 id="category-title" className="category-hero__title">
            {category.name}
          </h1>
          <p className="category-hero__intro">{category.shortIntro}</p>
        </div>

        <div className="category-hero__image-wrapper">
          <Image
            src={category.heroImage.src}
            alt={category.heroImage.alt}
            className="category-hero__image"
            width={1920}
            height={1080}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;
