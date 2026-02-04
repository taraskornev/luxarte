/**
 * ============================================================================
 * PROJECT META CHIPS COMPONENT
 * ============================================================================
 *
 * Displays project metadata as interactive chips.
 * Links to categories, brands, and shows style tags.
 *
 * @component ProjectMetaChips
 */

import { styleTagLabels, type StyleTag } from '@/data/projects-data';
import { categories } from '@/data/categories-data';
import { brands } from '@/data/brands-data';

export interface ProjectMetaChipsProps {
  readonly categoryTags: readonly string[];
  readonly brandTags: readonly string[];
  readonly styleTags: readonly StyleTag[];
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
 * ProjectMetaChips - Category, brand, and style tags
 */
export function ProjectMetaChips({
  categoryTags,
  brandTags,
  styleTags,
}: ProjectMetaChipsProps): JSX.Element {
  return (
    <div className="project-meta-chips">
      {/* Categories */}
      {categoryTags.length > 0 && (
        <div className="project-meta-chips__group">
          <span className="project-meta-chips__label">Kategorie:</span>
          <div className="project-meta-chips__list">
            {categoryTags.map((slug) => (
              <a
                key={slug}
                href={`/categories/${slug}`}
                className="project-meta-chips__chip project-meta-chips__chip--category"
              >
                {getCategoryName(slug)}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Brands */}
      {brandTags.length > 0 && (
        <div className="project-meta-chips__group">
          <span className="project-meta-chips__label">Marki:</span>
          <div className="project-meta-chips__list">
            {brandTags.map((slug) => (
              <a
                key={slug}
                href={`/brands/${slug}`}
                className="project-meta-chips__chip project-meta-chips__chip--brand"
              >
                {getBrandName(slug)}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Style Tags */}
      {styleTags.length > 0 && (
        <div className="project-meta-chips__group">
          <span className="project-meta-chips__label">Styl:</span>
          <div className="project-meta-chips__list">
            {styleTags.map((style) => (
              <span
                key={style}
                className="project-meta-chips__chip project-meta-chips__chip--style"
              >
                {styleTagLabels[style]}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectMetaChips;
