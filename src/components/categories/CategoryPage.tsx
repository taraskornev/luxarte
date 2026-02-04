/**
 * ============================================================================
 * CATEGORY PAGE TEMPLATE
 * ============================================================================
 *
 * Category detail page for individual product categories.
 * Features: Hero, image grid, related brands, FAQ, CTA.
 * Schemas: CollectionPage, BreadcrumbList.
 *
 * @component CategoryPage
 */

import type { Category } from '@/data/categories-data';
import { CategoryHero } from './CategoryHero';
import { CategoryImageGrid } from './CategoryImageGrid';
import { CategoryBrandsBlock } from './CategoryBrandsBlock';
import { CategoryCTA } from './CategoryCTA';
import { FAQAccordion } from '@/components/brands/FAQAccordion';

export interface CategoryPageProps {
  readonly category: Category;
}

/**
 * Generate CollectionPage Schema
 */
function generateCollectionPageSchema(category: Category) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `https://www.luxarte.pl/categories/${category.slug}/#webpage`,
    name: category.seo.title,
    description: category.seo.description,
    url: `https://www.luxarte.pl/categories/${category.slug}`,
    isPartOf: {
      '@id': 'https://www.luxarte.pl/#website',
    },
    about: {
      '@type': 'Thing',
      name: category.name,
    },
  };
}

/**
 * Generate BreadcrumbList Schema
 */
function generateBreadcrumbSchema(category: Category) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'LuxArte',
        item: 'https://www.luxarte.pl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Kategorie',
        item: 'https://www.luxarte.pl/categories',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: category.name,
        item: `https://www.luxarte.pl/categories/${category.slug}`,
      },
    ],
  };
}

/**
 * Generate FAQ Schema
 */
function generateFAQSchema(category: Category) {
  if (!category.faq || category.faq.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * CategoryPage - Category detail page template
 */
export function CategoryPage({ category }: CategoryPageProps): JSX.Element {
  const collectionSchema = generateCollectionPageSchema(category);
  const breadcrumbSchema = generateBreadcrumbSchema(category);
  const faqSchema = generateFAQSchema(category);

  // Combine all schemas
  const schemas: Record<string, unknown>[] = [collectionSchema, breadcrumbSchema];
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  // Convert FAQ data for FAQAccordion component
  const faqItems = category.faq.map((item, index) => ({
    id: `faq-${index}`,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      {/* JSON-LD Schemas */}
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <CategoryHero category={category} showBreadcrumb />

      {/* Full Description */}
      <section className="category-description">
        <div className="category-description__container">
          <p className="category-description__text">{category.fullDescription}</p>
        </div>
      </section>

      {/* Featured Image Grid */}
      <CategoryImageGrid
        images={category.featuredImageGrid}
        categoryName={category.name}
      />

      {/* Related Brands */}
      <CategoryBrandsBlock
        brandSlugs={category.relatedBrands}
        categoryName={category.name}
      />

      {/* Product Grid Placeholder */}
      <section
        className="category-products-placeholder"
        aria-labelledby="products-heading"
      >
        <div className="category-products-placeholder__container">
          <h2 id="products-heading" className="category-products-placeholder__heading">
            Produkty w kategorii {category.name}
          </h2>
          <p className="category-products-placeholder__text">
            Pełna lista produktów będzie dostępna wkrótce. Zapraszamy do kontaktu
            lub wizyty w showroomie.
          </p>
          <a
            href={`/showroom?category=${category.slug}`}
            className="category-products-placeholder__button"
          >
            Zapytaj o produkty
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      {faqItems.length > 0 && (
        <section className="category-faq" aria-labelledby="faq-heading">
          <div className="category-faq__container">
            <h2 id="faq-heading" className="category-faq__heading">
              Często zadawane pytania
            </h2>
            <FAQAccordion items={faqItems} />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CategoryCTA categoryName={category.name} />
    </>
  );
}

export default CategoryPage;
