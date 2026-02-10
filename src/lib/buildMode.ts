/**
 * Build Mode Configuration
 * 
 * NEXT_PUBLIC_PREVIEW_BUILD=true:
 * - Uses lightweight media from /public_preview
 * - Limits product galleries to 1 image
 * - Disables brand gallery pages
 * - Reduces build size for deployment
 *
 * NEXT_PUBLIC_MEDIA_BASE_URL:
 * - When set, all media paths are prefixed with this URL
 * - Used to serve media from external server (e.g., Hetzner)
 * - When empty/unset, media is served from local /public/
 */

export const IS_PREVIEW_BUILD = 
  process.env.NEXT_PUBLIC_PREVIEW_BUILD === 'true';

export const PREVIEW_IMAGE_BASE = IS_PREVIEW_BUILD ? '/preview' : '';

/**
 * External media base URL (Hetzner CDN)
 * Empty string means local /public/ paths (development/fallback)
 */
export const MEDIA_BASE_URL = process.env.NEXT_PUBLIC_MEDIA_BASE_URL || '';

/**
 * Get the appropriate public folder path based on build mode
 */
export function getPublicBasePath(): string {
  return IS_PREVIEW_BUILD ? '/preview' : '';
}

/**
 * Prefix a media path with the external base URL.
 * Handles:
 * - External URLs (http/https) → returned as-is
 * - Data URIs → returned as-is
 * - Local paths → prefixed with MEDIA_BASE_URL if configured
 * - Preview mode → applies preview prefix before base URL
 */
export function mediaUrl(localPath: string): string {
  // Skip external URLs and data URIs
  if (localPath.startsWith('http://') || localPath.startsWith('https://') || localPath.startsWith('data:')) {
    return localPath;
  }
  
  // Ensure path starts with /
  const normalizedPath = localPath.startsWith('/') ? localPath : `/${localPath}`;
  
  // Prepend external media base URL if configured
  return `${MEDIA_BASE_URL}${normalizedPath}`;
}

/**
 * Limit array to preview count when in preview mode
 */
export function previewLimit<T>(items: T[], previewCount: number = 1): T[] {
  if (!IS_PREVIEW_BUILD) return items;
  return items.slice(0, previewCount);
}
