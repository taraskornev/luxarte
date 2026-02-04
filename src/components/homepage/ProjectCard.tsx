/**
 * ============================================================================
 * PROJECT CARD COMPONENT
 * ============================================================================
 * 
 * Reusable card component for featured project/realization showcase.
 * 
 * @version 1.0.0
 */

import React from 'react';
import Image from 'next/image';

export interface ProjectCardProps {
  /** Project ID */
  id: string;
  /** Project title */
  title: string;
  /** Project category/type */
  category: string;
  /** Project image */
  image: string;
  /** URL slug */
  slug: string;
}

/**
 * ProjectCard Component
 * 
 * Individual project card with image, title, and category.
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  category,
  image,
  slug,
}) => {
  return (
    <a
      href={`/${slug}`}
      className="project-card"
      aria-label={`Zobacz realizację: ${title}`}
    >
      <div className="project-card__media" style={{ position: 'relative' }}>
        <Image
          src={image}
          alt={title}
          className="project-card__image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="project-card__overlay" aria-hidden="true" />
      </div>
      <div className="project-card__content">
        <span className="project-card__category">{category}</span>
        <h3 className="project-card__title">{title}</h3>
        <span className="project-card__cta" aria-hidden="true">
          Zobacz projekt →
        </span>
      </div>
    </a>
  );
};

export default ProjectCard;
