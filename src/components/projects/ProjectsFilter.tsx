'use client';

/**
 * ============================================================================
 * PROJECTS FILTER COMPONENT
 * ============================================================================
 *
 * Client-side filter UI for projects index page.
 * Filters by category, brand, and style.
 * Self-contained component that includes the projects grid.
 *
 * @component ProjectsFilter
 */

import { useState, useMemo } from 'react';
import type { Project, StyleTag } from '@/data/projects-data';
import { styleTagLabels } from '@/data/projects-data';
import { categories } from '@/data/categories-data';
import { brands } from '@/data/brands-data';
import { ProjectCard } from './ProjectCard';

export interface ProjectsFilterProps {
  readonly projects: readonly Project[];
  readonly availableCategories: readonly string[];
  readonly availableBrands: readonly string[];
  readonly availableStyles: readonly StyleTag[];
}

/**
 * Get category name by slug
 */
function getCategoryName(slug: string): string {
  const category = categories.find((c) => c.slug === slug);
  return category?.name ?? slug;
}

/**
 * Get brand name by slug
 */
function getBrandName(slug: string): string {
  const brand = brands.find((b) => b.slug === slug);
  return brand?.name ?? slug;
}

/**
 * ProjectsFilter - Client-side filtering for projects
 * Self-contained: includes both filter UI and project grid
 */
export function ProjectsFilter({
  projects,
  availableCategories,
  availableBrands,
  availableStyles,
}: ProjectsFilterProps): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [activeStyle, setActiveStyle] = useState<StyleTag | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (activeCategory && !project.tags.categories.includes(activeCategory)) {
        return false;
      }
      if (activeBrand && !project.tags.brands.includes(activeBrand)) {
        return false;
      }
      if (activeStyle && !project.tags.styles.includes(activeStyle)) {
        return false;
      }
      return true;
    });
  }, [projects, activeCategory, activeBrand, activeStyle]);

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveBrand(null);
    setActiveStyle(null);
  };

  const hasActiveFilters = activeCategory || activeBrand || activeStyle;

  return (
    <div className="projects-filter">
      {/* Filter Controls */}
      <div className="projects-filter__controls">
        {/* Category Filter */}
        <div className="projects-filter__group">
          <label
            htmlFor="category-filter"
            className="projects-filter__label"
          >
            Kategoria
          </label>
          <select
            id="category-filter"
            className="projects-filter__select"
            value={activeCategory ?? ''}
            onChange={(e) =>
              setActiveCategory(e.target.value || null)
            }
          >
            <option value="">Wszystkie</option>
            {availableCategories.map((slug) => (
              <option key={slug} value={slug}>
                {getCategoryName(slug)}
              </option>
            ))}
          </select>
        </div>

        {/* Brand Filter */}
        <div className="projects-filter__group">
          <label htmlFor="brand-filter" className="projects-filter__label">
            Marka
          </label>
          <select
            id="brand-filter"
            className="projects-filter__select"
            value={activeBrand ?? ''}
            onChange={(e) => setActiveBrand(e.target.value || null)}
          >
            <option value="">Wszystkie</option>
            {availableBrands.map((slug) => (
              <option key={slug} value={slug}>
                {getBrandName(slug)}
              </option>
            ))}
          </select>
        </div>

        {/* Style Filter */}
        <div className="projects-filter__group">
          <label htmlFor="style-filter" className="projects-filter__label">
            Styl
          </label>
          <select
            id="style-filter"
            className="projects-filter__select"
            value={activeStyle ?? ''}
            onChange={(e) =>
              setActiveStyle((e.target.value as StyleTag) || null)
            }
          >
            <option value="">Wszystkie</option>
            {availableStyles.map((style) => (
              <option key={style} value={style}>
                {styleTagLabels[style]}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            type="button"
            className="projects-filter__clear"
            onClick={clearFilters}
          >
            Wyczyść filtry
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="projects-filter__results">
        <p className="projects-filter__count">
          {filteredProjects.length}{' '}
          {filteredProjects.length === 1
            ? 'realizacja'
            : filteredProjects.length < 5
            ? 'realizacje'
            : 'realizacji'}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="projects-index__grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="projects-index__empty">
            <p>Brak projektów spełniających wybrane kryteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsFilter;
