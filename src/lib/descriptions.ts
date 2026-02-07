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
  return entry.description;
}

export function getProductMaterials(slug: string): string | null {
  const entry = descriptions[slug];
  if (!entry?.materials) return null;
  return entry.materials;
}

export function getProductDimensions(slug: string): string | null {
  const entry = descriptions[slug];
  if (!entry?.dimensions) return null;
  return entry.dimensions;
}
