/**
 * ============================================================================
 * PROJECTS INDEX PAGE TEMPLATE
 * ============================================================================
 *
 * Portfolio index page showing all projects with filtering.
 * /projects route.
 *
 * @component ProjectsPage
 */

import {
  projects,
  getAllProjectCategories,
  getAllProjectBrands,
  getAllStyleTags,
  projectsIndexSeo,
} from '@/data/projects-data';
import { ProjectsFilter } from './ProjectsFilter';

/**
 * Generate ItemList schema for projects
 */
function generateItemListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio Realizacji LuxArte',
    description: projectsIndexSeo.description,
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: `https://www.luxarte.pl/projects/${project.slug}`,
      image: project.heroImage.src,
    })),
  };
}

/**
 * ProjectsPage - Projects index template
 */
export function ProjectsPage(): JSX.Element {
  const itemListSchema = generateItemListSchema();
  const availableCategories = getAllProjectCategories();
  const availableBrands = getAllProjectBrands();
  const availableStyles = getAllStyleTags();

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Hero Section */}
      <section className="projects-hero" aria-labelledby="projects-title">
        <div className="projects-hero__container">
          <h1 id="projects-title" className="projects-hero__title">
            Realizacje
          </h1>
          <p className="projects-hero__description">
            Prezentujemy wybrane realizacje projektów wnętrz z wykorzystaniem
            ekskluzywnych mebli i akcesoriów od wiodących włoskich marek.
            Każdy projekt to unikalne połączenie designu, funkcjonalności
            i najwyższej jakości wykonania.
          </p>
        </div>
      </section>

      {/* Filter and Projects Grid */}
      <section className="projects-index" aria-label="Lista projektów">
        <div className="projects-index__container">
          <ProjectsFilter
            projects={projects}
            availableCategories={availableCategories}
            availableBrands={availableBrands}
            availableStyles={availableStyles}
          />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="projects-cta" aria-label="Wezwanie do działania">
        <div className="projects-cta__container">
          <div className="projects-cta__content">
            <h2 className="projects-cta__heading">
              Zaplanuj swój projekt
            </h2>
            <p className="projects-cta__text">
              Skontaktuj się z nami, aby omówić Twoje wnętrze lub odwiedź
              nasz showroom w Warszawie.
            </p>
          </div>
          <div className="projects-cta__actions">
            <a
              href="/interior-design-service"
              className="projects-cta__button projects-cta__button--primary"
            >
              Projektowanie wnętrz
            </a>
            <a
              href="/showroom"
              className="projects-cta__button projects-cta__button--secondary"
            >
              Odwiedź showroom
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
