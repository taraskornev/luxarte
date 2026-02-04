/**
 * ============================================================================
 * OPTIMIZED IMAGE COMPONENT
 * ============================================================================
 *
 * Wrapper around next/image with:
 * - Consistent sizing and loading behavior
 * - Error fallback handling
 * - Responsive srcset generation
 * - CLS prevention via aspect-ratio
 *
 * @version 1.0.0
 */

'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

// ============================================================================
// Types
// ============================================================================

interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
  /** Fallback image URL if loading fails */
  fallbackSrc?: string;
  /** Aspect ratio for CLS prevention (e.g., "16/9", "4/3", "1/1") */
  aspectRatio?: string;
}

// ============================================================================
// Constants
// ============================================================================

const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23f5f5f5" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EBrak obrazu%3C/text%3E%3C/svg%3E';

// ============================================================================
// Component
// ============================================================================

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = FALLBACK_IMAGE,
  aspectRatio,
  className = '',
  style,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const combinedStyle: React.CSSProperties = {
    ...style,
    ...(aspectRatio ? { aspectRatio } : {}),
  };

  return (
    <Image
      src={imgSrc}
      alt={alt || ''}
      className={className}
      style={combinedStyle}
      onError={handleError}
      {...props}
    />
  );
}

// ============================================================================
// Remote Image Loader for External URLs
// ============================================================================

/**
 * Custom loader for external images (luxarte.pl CDN)
 * Next.js requires a loader for external images in production
 */
export const luxarteLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  // If it's already a full URL, return as-is (external CDN handles optimization)
  if (src.startsWith('http')) {
    return src;
  }
  // For relative paths, construct full URL
  return `https://www.luxarte.pl${src}`;
};

// ============================================================================
// Preset Sizes for Common Use Cases
// ============================================================================

export const IMAGE_SIZES = {
  /** Hero images - full width */
  hero: '100vw',
  /** Card images in grid */
  card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  /** Thumbnail images */
  thumbnail: '(max-width: 640px) 50vw, 25vw',
  /** Logo images */
  logo: '200px',
  /** Gallery images */
  gallery: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
  /** Brand logos in strip */
  brandLogo: '120px',
} as const;
