/**
 * ============================================================================
 * RELATED PROJECTS COMPONENT
 * ============================================================================
 *
 * Displays related projects in a card grid.
 * Links to project detail pages.
 *
 * @component RelatedProjects
 */

import Image from 'next/image';
import type { Project } from '@/data/projects-data';

export interface RelatedProjectsProps {
  readonly projects: readonly Project[];
  readonly title?: string;
}

/**
 * RelatedProjects - Grid of related project cards
 */
export function RelatedProjects({
  projects,
  title = 'Podobne realizacje',
}: RelatedProjectsProps): JSX.Element {
  if (projects.length === 0) {
    return <></>;
  }

  return (
    <section className="related-projects" aria-labelledby="related-heading">
      <div className="related-projects__container">
        <h2 id="related-heading" className="related-projects__heading">
          {title}
        </h2>

        <div className="related-projects__grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.slug}`}
              className="related-projects__card"
            >
              <div className="related-projects__image-wrapper">
                <Image
                  src={project.heroImage.src}
                  alt={project.heroImage.alt}
                  className="related-projects__image"
                  width={project.heroImage.width}
                  height={project.heroImage.height}
                />
              </div>
              <div className="related-projects__content">
                <h3 className="related-projects__title">{project.title}</h3>
                <div className="related-projects__meta">
                  {project.tags.styles.slice(0, 2).map((style, idx) => (
                    <span key={style} className="related-projects__tag">
                      {idx > 0 && ' · '}
                      {style.charAt(0).toUpperCase() + style.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProjects;
