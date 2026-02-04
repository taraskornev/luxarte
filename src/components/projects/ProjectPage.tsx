/**
 * ============================================================================
 * PROJECT DETAIL PAGE TEMPLATE
 * ============================================================================
 *
 * Single project detail page.
 * /projects/[slug] route.
 *
 * @component ProjectPage
 */

import type { Project } from '@/data/projects-data';
import Image from 'next/image';
import { getRelatedProjects } from '@/data/projects-data';
import { brands } from '@/data/brands-data';
import { categories } from '@/data/categories-data';
import { ProjectHero } from './ProjectHero';
import { ProjectGalleryGrid } from './ProjectGalleryGrid';
import { ProjectMetaChips } from './ProjectMetaChips';
import { RelatedProjects } from './RelatedProjects';

export interface ProjectPageProps {
  readonly project: Project;
}

/**
 * Generate WebPage schema
 */
function generateWebPageSchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `https://www.luxarte.pl/projects/${project.slug}/#webpage`,
    url: `https://www.luxarte.pl/projects/${project.slug}`,
    name: project.seo.title,
    description: project.seo.description,
    isPartOf: {
      '@id': 'https://www.luxarte.pl/#website',
    },
  };
}

/**
 * Generate BreadcrumbList schema
 */
function generateBreadcrumbSchema(project: Project) {
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
        name: 'Realizacje',
        item: 'https://www.luxarte.pl/projects',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `https://www.luxarte.pl/projects/${project.slug}`,
      },
    ],
  };
}

/**
 * Generate ImageGallery schema
 */
function generateImageGallerySchema(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `Galeria: ${project.title}`,
    description: project.shortSummary,
    image: project.galleryImages.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: img.src,
      name: img.alt,
      width: img.width,
      height: img.height,
    })),
  };
}

/**
 * ProjectPage - Single project detail template
 */
export function ProjectPage({ project }: ProjectPageProps): JSX.Element {
  const webPageSchema = generateWebPageSchema(project);
  const breadcrumbSchema = generateBreadcrumbSchema(project);
  const imageGallerySchema = generateImageGallerySchema(project);

  const relatedProjects = getRelatedProjects(project.slug, 3);

  // Get related brands (those in project tags that exist in brands data)
  const relatedBrands = brands.filter((brand) =>
    project.tags.brands.includes(brand.slug)
  );

  // Get related categories
  const relatedCategories = categories.filter((cat) =>
    project.tags.categories.includes(cat.slug)
  );

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      {/* Hero */}
      <ProjectHero title={project.title} heroImage={project.heroImage} />

      {/* Summary Block */}
      <section className="project-summary" aria-label="O projekcie">
        <div className="project-summary__container">
          <p className="project-summary__text">{project.shortSummary}</p>
        </div>
      </section>

      {/* Meta Chips */}
      <section className="project-tags" aria-label="Tagi projektu">
        <div className="project-tags__container">
          <ProjectMetaChips
            categoryTags={project.tags.categories}
            brandTags={project.tags.brands}
            styleTags={project.tags.styles}
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <ProjectGalleryGrid
        images={project.galleryImages}
        projectTitle={project.title}
      />

      {/* Related Brands */}
      {relatedBrands.length > 0 && (
        <section className="project-brands" aria-labelledby="brands-heading">
          <div className="project-brands__container">
            <h2 id="brands-heading" className="project-brands__heading">
              Marki użyte w projekcie
            </h2>
            <div className="project-brands__grid">
              {relatedBrands.map((brand) => (
                <a
                  key={brand.id}
                  href={`/brands/${brand.slug}`}
                  className="project-brands__card"
                >
                  <div className="project-brands__image-wrapper">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      className="project-brands__image"
                      width={400}
                      height={300}
                    />
                  </div>
                  <span className="project-brands__name">{brand.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Categories */}
      {relatedCategories.length > 0 && (
        <section
          className="project-categories"
          aria-labelledby="categories-heading"
        >
          <div className="project-categories__container">
            <h2 id="categories-heading" className="project-categories__heading">
              Powiązane kategorie
            </h2>
            <div className="project-categories__chips">
              {relatedCategories.map((category) => (
                <a
                  key={category.id}
                  href={`/categories/${category.slug}`}
                  className="project-categories__chip"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      <RelatedProjects projects={relatedProjects} />

      {/* CTA Block */}
      <section className="project-cta" aria-label="Wezwanie do działania">
        <div className="project-cta__container">
          <h2 className="project-cta__heading">
            Zainspirowany tym projektem?
          </h2>
          <p className="project-cta__text">
            Odwiedź nasz showroom lub skontaktuj się z nami, aby omówić
            Twoje wnętrze.
          </p>
          <a
            href={`/showroom?project=${project.slug}`}
            className="project-cta__button"
          >
            Umów wizytę w showroomie
          </a>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
