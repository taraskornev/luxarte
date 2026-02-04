/**
 * ============================================================================
 * PROJECT CARD COMPONENT
 * ============================================================================
 *
 * Card component for displaying project in grid layouts.
 * Used in projects index and related projects sections.
 *
 * @component ProjectCard
 */

import Image from 'next/image';
import type { Project } from '@/data/projects-data';
import { styleTagLabels } from '@/data/projects-data';

export interface ProjectCardProps {
  readonly project: Project;
}

/**
 * ProjectCard - Grid card for project listing
 */
export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <a href={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__image-wrapper">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          className="project-card__image"
          width={project.heroImage.width}
          height={project.heroImage.height}
        />
      </div>
      <div className="project-card__content">
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__meta">
          {project.tags.styles.slice(0, 3).map((style) => (
            <span key={style} className="project-card__tag">
              {styleTagLabels[style]}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
