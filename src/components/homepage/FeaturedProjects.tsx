/**
 * ============================================================================
 * FEATURED PROJECTS COMPONENT
 * ============================================================================
 * 
 * Showcase section for 3 featured project/realization cards.
 * 
 * @version 1.0.0
 */

import React from 'react';
import { ProjectCard, ProjectCardProps } from './ProjectCard';

export interface FeaturedProjectsProps {
  /** Section title */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Array of project items (max 3) */
  projects: readonly ProjectCardProps[];
  /** Optional CTA */
  cta?: {
    label: string;
    href: string;
  };
}

/**
 * FeaturedProjects Component
 * 
 * Grid of featured project cards with optional section header and CTA.
 */
export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  title = 'Nasze Realizacje',
  subtitle,
  projects,
  cta,
}) => {
  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-projects-title"
    >
      <div className="featured-projects__container">
        <header className="featured-projects__header">
          <h2 id="featured-projects-title" className="featured-projects__title">
            {title}
          </h2>
          {subtitle && (
            <p className="featured-projects__subtitle">{subtitle}</p>
          )}
        </header>

        <div className="featured-projects__grid">
          {projects.slice(0, 3).map((project) => (
            <div key={project.id} className="featured-projects__item">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {cta && (
          <div className="featured-projects__footer">
            <a href={cta.href} className="featured-projects__link">
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
