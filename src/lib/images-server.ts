/**
 * Server-side Image Utilities
 * 
 * These functions use Node.js fs module and can ONLY be used
 * in Server Components or API routes.
 */

import fs from 'fs';
import path from 'path';

const CATALOG_PATH = '/catalog/products';
const BRAND_MARKI_PATH = '/media/marki';

/**
 * Get gallery images for product detail (server-side only)
 * Scans the actual directory for *-gallery.webp files
 * Ordered by filename index (01, 02, 03...)
 */
export function getProductGalleryImages(slug: string): string[] {
  const productDir = path.join(process.cwd(), 'public', 'catalog', 'products', slug);
  
  try {
    const files = fs.readdirSync(productDir);
    
    // Filter for gallery images only, sort by index
    const galleryImages = files
      .filter((f) => f.endsWith('-gallery.webp'))
      .sort((a, b) => {
        const numA = parseInt(a.split('-')[0], 10);
        const numB = parseInt(b.split('-')[0], 10);
        return numA - numB;
      })
      .map((f) => `${CATALOG_PATH}/${slug}/${f}`);

    return galleryImages.length > 0 ? galleryImages : [`${CATALOG_PATH}/${slug}/01-gallery.webp`];
  } catch {
    // Fallback if directory doesn't exist
    return [`${CATALOG_PATH}/${slug}/01-gallery.webp`];
  }
}

/**
 * Get lightbox images for product detail (server-side only)
 * Scans for *-lightbox.webp files
 */
export function getProductLightboxImages(slug: string): string[] {
  const productDir = path.join(process.cwd(), 'public', 'catalog', 'products', slug);
  
  try {
    const files = fs.readdirSync(productDir);
    
    const lightboxImages = files
      .filter((f) => f.endsWith('-lightbox.webp'))
      .sort((a, b) => {
        const numA = parseInt(a.split('-')[0], 10);
        const numB = parseInt(b.split('-')[0], 10);
        return numA - numB;
      })
      .map((f) => `${CATALOG_PATH}/${slug}/${f}`);

    // Fallback to gallery images if no lightbox images
    return lightboxImages.length > 0 ? lightboxImages : getProductGalleryImages(slug);
  } catch {
    return getProductGalleryImages(slug);
  }
}

/**
 * Get brand gallery images (server-side only)
 * Scans /public/media/marki/{brand-slug}/ for gallery-*-gallery.webp files
 * Ignores LuxArte logo files
 */
export function getBrandGalleryImages(brandSlug: string): string[] {
  const brandDir = path.join(process.cwd(), 'public', 'media', 'marki', brandSlug);
  
  try {
    const files = fs.readdirSync(brandDir);
    
    // Filter for gallery images, exclude logos
    const galleryImages = files
      .filter((f) => {
        const lower = f.toLowerCase();
        // Must be gallery webp, exclude logos
        return f.endsWith('-gallery.webp') && 
               !lower.includes('luxarte') && 
               !lower.includes('logo');
      })
      .sort((a, b) => {
        // Extract number: gallery-01-gallery.webp → 01
        const numA = parseInt(a.replace('gallery-', '').split('-')[0], 10);
        const numB = parseInt(b.replace('gallery-', '').split('-')[0], 10);
        return numA - numB;
      })
      .map((f) => `${BRAND_MARKI_PATH}/${brandSlug}/${f}`);

    return galleryImages;
  } catch {
    return [];
  }
}

/**
 * Get brand lightbox images (server-side only)
 * Scans for gallery-*-lightbox.webp files
 */
export function getBrandLightboxImages(brandSlug: string): string[] {
  const brandDir = path.join(process.cwd(), 'public', 'media', 'marki', brandSlug);
  
  try {
    const files = fs.readdirSync(brandDir);
    
    const lightboxImages = files
      .filter((f) => {
        const lower = f.toLowerCase();
        return f.endsWith('-lightbox.webp') && 
               !lower.includes('luxarte') && 
               !lower.includes('logo');
      })
      .sort((a, b) => {
        const numA = parseInt(a.replace('gallery-', '').split('-')[0], 10);
        const numB = parseInt(b.replace('gallery-', '').split('-')[0], 10);
        return numA - numB;
      })
      .map((f) => `${BRAND_MARKI_PATH}/${brandSlug}/${f}`);

    // Fallback to gallery images if no lightbox images
    return lightboxImages.length > 0 ? lightboxImages : getBrandGalleryImages(brandSlug);
  } catch {
    return getBrandGalleryImages(brandSlug);
  }
}
