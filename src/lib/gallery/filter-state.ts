/**
 * ============================================================================
 * GALLERY FILTER STATE MODEL
 * ============================================================================
 *
 * Type definitions and utilities for faceted filter state.
 *
 * Filter Logic:
 * - AND between facet groups (brands AND categories AND types)
 * - OR within facet group (brand=versace OR brand=bentley)
 * - Empty array = no constraint for that facet
 *
 * Sidebar Mode:
 * - 'brands' = sidebar shows brand list as primary
 * - 'categories' = sidebar shows category tree as primary
 *
 * @version 2.0.0
 */

// ============================================================================
// Types
// ============================================================================

/**
 * Sidebar display mode
 */
export type GallerySidebarMode = 'brands' | 'categories';

/**
 * Complete filter state for gallery faceted filtering
 */
export interface GalleryFilterState {
  /** Sidebar display mode */
  readonly mode: GallerySidebarMode;
  /** Selected brand slugs (OR logic within group) */
  readonly brands: readonly string[];
  /** Selected category slugs (OR logic within group) */
  readonly categories: readonly string[];
  /** Selected product types/subtypes (OR logic within group) */
  readonly types: readonly string[];
}

/**
 * Mutable version for building state
 */
export interface MutableFilterState {
  mode: GallerySidebarMode;
  brands: string[];
  categories: string[];
  types: string[];
}

/**
 * Filter action types for state updates
 */
export type FilterAction =
  | { type: 'SET_MODE'; mode: GallerySidebarMode }
  | { type: 'TOGGLE_BRAND'; slug: string }
  | { type: 'TOGGLE_CATEGORY'; slug: string }
  | { type: 'TOGGLE_TYPE'; slug: string }
  | { type: 'SET_BRANDS'; slugs: string[] }
  | { type: 'SET_CATEGORIES'; slugs: string[] }
  | { type: 'SET_TYPES'; slugs: string[] }
  | { type: 'CLEAR_BRANDS' }
  | { type: 'CLEAR_CATEGORIES' }
  | { type: 'CLEAR_TYPES' }
  | { type: 'CLEAR_ALL' }
  | { type: 'SET_STATE'; state: GalleryFilterState };

// ============================================================================
// Constants
// ============================================================================

/**
 * Empty filter state - no constraints
 */
export const EMPTY_FILTER_STATE: GalleryFilterState = {
  mode: 'categories',
  brands: [],
  categories: [],
  types: [],
} as const;

/**
 * URL query parameter names
 */
export const FILTER_PARAM_NAMES = {
  mode: 'mode',
  brand: 'brand',
  category: 'category',
  type: 'type',
} as const;

// ============================================================================
// State Utilities
// ============================================================================

/**
 * Check if filter state has any active filters
 * Note: types are not exposed in UI, so excluded from check
 */
export function hasActiveFilters(state: GalleryFilterState): boolean {
  return (
    state.brands.length > 0 ||
    state.categories.length > 0
  );
}

/**
 * Count total number of active filter selections
 * Note: types are not exposed in UI, so excluded from count
 */
export function countActiveFilters(state: GalleryFilterState): number {
  return state.brands.length + state.categories.length;
}

/**
 * Check if a specific brand is selected
 */
export function isBrandSelected(state: GalleryFilterState, slug: string): boolean {
  return state.brands.includes(slug);
}

/**
 * Check if a specific category is selected
 */
export function isCategorySelected(state: GalleryFilterState, slug: string): boolean {
  return state.categories.includes(slug);
}

/**
 * Check if a specific type is selected
 */
export function isTypeSelected(state: GalleryFilterState, slug: string): boolean {
  return state.types.includes(slug);
}

// ============================================================================
// State Reducer
// ============================================================================

/**
 * Toggle item in array - add if not present, remove if present
 */
function toggleInArray(arr: readonly string[], item: string): string[] {
  const index = arr.indexOf(item);
  if (index === -1) {
    return [...arr, item];
  }
  return arr.filter((_, i) => i !== index);
}

/**
 * Reducer for filter state updates
 */
export function filterReducer(
  state: GalleryFilterState,
  action: FilterAction
): GalleryFilterState {
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        mode: action.mode,
      };

    case 'TOGGLE_BRAND':
      return {
        ...state,
        brands: toggleInArray(state.brands, action.slug),
      };

    case 'TOGGLE_CATEGORY':
      return {
        ...state,
        categories: toggleInArray(state.categories, action.slug),
      };

    case 'TOGGLE_TYPE':
      return {
        ...state,
        types: toggleInArray(state.types, action.slug),
      };

    case 'SET_BRANDS':
      return {
        ...state,
        brands: [...action.slugs],
      };

    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: [...action.slugs],
      };

    case 'SET_TYPES':
      return {
        ...state,
        types: [...action.slugs],
      };

    case 'CLEAR_BRANDS':
      return {
        ...state,
        brands: [],
      };

    case 'CLEAR_CATEGORIES':
      return {
        ...state,
        categories: [],
      };

    case 'CLEAR_TYPES':
      return {
        ...state,
        types: [],
      };

    case 'CLEAR_ALL':
      return { ...EMPTY_FILTER_STATE, mode: state.mode };

    case 'SET_STATE':
      return {
        mode: action.state.mode,
        brands: [...action.state.brands],
        categories: [...action.state.categories],
        types: [...action.state.types],
      };

    default:
      return state;
  }
}

// ============================================================================
// State Comparison
// ============================================================================

/**
 * Check if two filter states are equal
 */
export function areFiltersEqual(
  a: GalleryFilterState,
  b: GalleryFilterState
): boolean {
  if (a.mode !== b.mode) return false;
  if (a.brands.length !== b.brands.length) return false;
  if (a.categories.length !== b.categories.length) return false;
  if (a.types.length !== b.types.length) return false;

  const sortedABrands = [...a.brands].sort();
  const sortedBBrands = [...b.brands].sort();
  if (!sortedABrands.every((v, i) => v === sortedBBrands[i])) return false;

  const sortedACats = [...a.categories].sort();
  const sortedBCats = [...b.categories].sort();
  if (!sortedACats.every((v, i) => v === sortedBCats[i])) return false;

  const sortedATypes = [...a.types].sort();
  const sortedBTypes = [...b.types].sort();
  if (!sortedATypes.every((v, i) => v === sortedBTypes[i])) return false;

  return true;
}

/**
 * Create a mutable copy of filter state
 */
export function cloneFilterState(state: GalleryFilterState): MutableFilterState {
  return {
    mode: state.mode,
    brands: [...state.brands],
    categories: [...state.categories],
    types: [...state.types],
  };
}
