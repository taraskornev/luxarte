import descriptionsData from '@/data/product-descriptions-map.json';

interface DescriptionEntry {
  description?: string | null;
  materials?: string | null;
  dimensions?: string | null;
  slug?: string;
  source?: string;
}

const descriptions = descriptionsData as Record<string, DescriptionEntry>;

export function getProductDescription(slug: string): string | null {
  const entry = descriptions[slug];
  if (!entry?.description) return null;
  
  // Clean description: remove dimension patterns like "Wymiary: XXxYYxZZ cm" and "ZAPYTAJ O CENĘ"
  let clean = entry.description;
  // Remove "ZAPYTAJ O CENĘ" at the end (with or without preceding text)
  clean = clean.replace(/\s*ZAPYTAJ\s+O\s+CENĘ\s*$/gi, '');
  // Remove dimension lines at the end (Wymiary: ... or just dimension patterns)
  clean = clean
    .replace(/\s*Wymiary\s*:?\s*[^\n]+\s*$/gi, '')
    .replace(/\s*[\d]+\s*[×xX]\s*[\d]+\s*[×xX]?\s*[\d]*\s*[HhWwDd]?\s*(cm|mm)\s*$/gi, '')
    .replace(/\s*Ø\s*[\d]+[×xX]?\s*[\d]*\s*[HhWwDd]?\s*(cm|mm)?\s*$/gi, '')
    .replace(/\s*\d+\s*[×xX]\s*\d+\s*(×xX\s*\d+)?\s*(cm|mm|m)\.?\s*$/gi, '')
    .trim();
  
  return clean || null;
}

export function getProductMaterials(slug: string): string | null {
  const entry = descriptions[slug];
  if (!entry?.materials) return null;
  return entry.materials;
}

export function getProductDimensions(slug: string): string | null {
  const entry = descriptions[slug];
  if (!entry?.dimensions) return null;
  // Clean shortcode junk like [nectar_btn...]
  let clean = entry.dimensions;
  const shortcodeIndex = clean.indexOf(' [nectar_btn');
  if (shortcodeIndex !== -1) {
    clean = clean.substring(0, shortcodeIndex);
  }
  // Also strip HTML entities
  clean = clean.replace(/&quot;/g, '').replace(/\[.*?\]/g, '').trim();
  return clean || null;
}
