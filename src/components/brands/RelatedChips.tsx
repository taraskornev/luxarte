/**
 * ============================================================================
 * RELATED CHIPS COMPONENT - LUXARTE
 * ============================================================================
 *
 * Horizontal scrollable chips for related categories and internal links.
 * Provides strong internal linking for SEO.
 *
 * @version 1.0.0
 */

import type { ProductCategory } from '../../data/brands-data';

export interface ChipItem {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly count?: number;
}

export interface RelatedChipsProps {
  readonly items: readonly ChipItem[];
  readonly label: string;
  readonly baseUrl?: string;
  readonly variant?: 'default' | 'compact' | 'prominent';
}

/**
 * RelatedChips Component
 *
 * Renders a horizontal scrollable list of category/link chips.
 * Supports optional count badges and multiple visual variants.
 */
export function RelatedChips({
  items,
  label,
  baseUrl = '/',
  variant = 'default',
}: RelatedChipsProps): string {
  if (items.length === 0) {
    return '';
  }

  const variantClass = variant !== 'default' ? `related-chips--${variant}` : '';

  const chips = items
    .map(
      (item) => `
      <li class="related-chips__item">
        <a
          href="${baseUrl}${item.slug}"
          class="related-chips__chip"
          data-chip-id="${item.id}"
        >
          <span class="related-chips__text">${item.name}</span>
          ${
            item.count !== undefined
              ? `<span class="related-chips__count" aria-label="${item.count} produktów">${item.count}</span>`
              : ''
          }
        </a>
      </li>
    `
    )
    .join('');

  return `
    <nav class="related-chips ${variantClass}" aria-label="${label}">
      <h3 class="related-chips__label">${label}</h3>
      <div class="related-chips__scroll-container">
        <ul class="related-chips__list" role="list">
          ${chips}
        </ul>
      </div>
    </nav>
  `.trim();
}

/**
 * Generate chips from product categories
 */
export function CategoryChips(
  categories: readonly ProductCategory[],
  options?: Partial<RelatedChipsProps>
): string {
  const items: ChipItem[] = categories.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
  }));

  return RelatedChips({
    items,
    label: options?.label || 'Powiązane kategorie',
    baseUrl: options?.baseUrl || '/',
    variant: options?.variant || 'default',
  });
}

/**
 * Style & Materials Chips (inline, no links)
 */
export function MaterialsChips(materials: readonly string[]): string {
  if (materials.length === 0) {
    return '';
  }

  const chips = materials
    .map(
      (material, index) => `
      <li class="materials-chips__item">
        <span class="materials-chips__chip" data-index="${index}">
          ${material}
        </span>
      </li>
    `
    )
    .join('');

  return `
    <div class="materials-chips" aria-label="Styl i materiały">
      <h3 class="materials-chips__label">Styl & Materiały</h3>
      <ul class="materials-chips__list" role="list">
        ${chips}
      </ul>
    </div>
  `.trim();
}

export default RelatedChips;
