/**
 * ============================================================================
 * CASE PREVIEW COMPONENT
 * ============================================================================
 *
 * Displays featured projects/realizations.
 * Reuses ProjectCard component pattern.
 *
 * @component CasePreview
 */

import Image from 'next/image';
import { featuredProjects } from '@/data/service-data';

/**
 * CasePreview - Featured projects showcase
 */
export function CasePreview(): JSX.Element {
  return (
    <section className="case-preview" aria-labelledby="cases-heading">
      <div className="case-preview__container">
        <h2 id="cases-heading" className="case-preview__heading">
          Nasze realizacje
        </h2>
        <p className="case-preview__intro">
          Wybrane projekty z naszego portfolio.
        </p>

        <div
          className="case-preview__grid"
          role="list"
          aria-label="Realizacje projektów"
        >
          {featuredProjects.map((project) => (
            <a
              key={project.id}
              href={`/${project.slug}`}
              className="case-preview__card"
              role="listitem"
              aria-label={`Zobacz realizację: ${project.title}`}
            >
              <div className="case-preview__card-media" style={{ position: 'relative' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="case-preview__card-image"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="case-preview__card-overlay" aria-hidden="true" />
              </div>
              <div className="case-preview__card-content">
                <span className="case-preview__card-category">
                  {project.category}
                </span>
                <h3 className="case-preview__card-title">{project.title}</h3>
                <span className="case-preview__card-cta" aria-hidden="true">
                  Zobacz projekt →
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="case-preview__footer">
          <a href="/projects" className="case-preview__link">
            Zobacz wszystkie realizacje
            <span className="case-preview__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CasePreview;
