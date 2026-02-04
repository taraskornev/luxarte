/**
 * ============================================================================
 * LEGACY CATALOG SCRAPER - LUXARTE
 * ============================================================================
 *
 * Scrapes the complete product catalog from www.luxarte.pl legacy WooCommerce site.
 * Extracts product data, images, and generates normalized output for the new site.
 *
 * Run with: npx tsx scripts/catalog-scraper.ts
 *
 * @version 1.0.0
 */

import * as fs from 'fs';
import * as path from 'path';

// =============================================================================
// CONFIGURATION
// =============================================================================

const BASE_URL = 'https://www.luxarte.pl';
const CDN_BASE = 'https://www.luxarte.pl/wp-content/uploads';
const OUTPUT_DIR = path.join(process.cwd(), 'data');
const DELAY_MS = 500; // Delay between requests to be respectful

// Product category mapping from legacy site
const LEGACY_CATEGORIES = [
  { slug: 'akcesoria', name: 'Akcesoria', count: 8 },
  { slug: 'biuro', name: 'Biuro', count: 8 },
  { slug: 'donice', name: 'Donice', count: 2 },
  { slug: 'dywany', name: 'Dywany', count: 15 },
  { slug: 'fotele', name: 'Fotele', count: 100 },
  { slug: 'garderoby', name: 'Garderoby', count: 10 },
  { slug: 'hokery', name: 'Hokery', count: 1 },
  { slug: 'kinkiety', name: 'Kinkiety', count: 25 },
  { slug: 'komody', name: 'Komody', count: 45 },
  { slug: 'konsole', name: 'Konsole', count: 11 },
  { slug: 'krzesla', name: 'Krzesła', count: 28 },
  { slug: 'kuchnie', name: 'Kuchnie', count: 19 },
  { slug: 'lampy-podlogowe', name: 'Lampy podłogowe', count: 20 },
  { slug: 'lampy-stolowe', name: 'Lampy stołowe', count: 26 },
  { slug: 'lampy-wiszace', name: 'Lampy wiszące', count: 31 },
  { slug: 'lazienki', name: 'Łazienki', count: 7 },
  { slug: 'lozka', name: 'Łóżka', count: 25 },
  { slug: 'lustra', name: 'Lustra', count: 6 },
  { slug: 'meble-ogrodowe', name: 'Meble ogrodowe', count: 169 },
  { slug: 'oswietlenie', name: 'Oświetlenie', count: 11 },
  { slug: 'pufy', name: 'Pufy', count: 23 },
  { slug: 'regaly', name: 'Regały', count: 11 },
  { slug: 'sofy', name: 'Sofy', count: 95 },
  { slug: 'stoliki-boczne', name: 'Stoliki boczne', count: 21 },
  { slug: 'stoliki-kawowe', name: 'Stoliki kawowe', count: 45 },
  { slug: 'stoly', name: 'Stoły', count: 23 },
  { slug: 'szafki-nocne', name: 'Szafki nocne', count: 16 },
  { slug: 'szezlongi', name: 'Szezlongi', count: 9 },
  { slug: 'zyrandole', name: 'Żyrandole', count: 15 },
];

// Brand slug mapping from URL patterns
const BRAND_MAPPING: Record<string, string> = {
  'visionnaire': 'visionnaire',
  'bentley-home': 'bentley-home',
  'dolce-gabbana-casa': 'dolce-gabbana-casa',
  'dolce-gabbana': 'dolce-gabbana-casa',
  'versace-home': 'versace-home',
  'trussardi-casa': 'trussardi-casa',
  'roberto-cavalli-home-interiors': 'roberto-cavalli-home-interiors',
  'roberto-cavalli': 'roberto-cavalli-home-interiors',
  'bugatti-home': 'bugatti-home',
  'bugatti': 'bugatti-home',
  'valcucine': 'valcucine',
  'gaggenau': 'gaggenau',
  'scic': 'scic-italia',
  'scic-italia': 'scic-italia',
  'vanory': 'vanory',
  'exteta': 'exteta',
  'venicem': 'venicem',
  'longhi': 'longhi',
  'dv-home': 'dv-home',
};

// Category slug normalization
const CATEGORY_MAPPING: Record<string, string> = {
  'akcesoria': 'akcesoria',
  'biuro': 'biurka',
  'donice': 'donice',
  'dywany': 'dywany',
  'fotele': 'fotele',
  'garderoby': 'garderoby',
  'hokery': 'hokery',
  'kinkiety': 'kinkiety',
  'komody': 'komody',
  'konsole': 'konsole',
  'krzesla': 'krzesla',
  'kuchnie': 'kuchnie',
  'lampy-podlogowe': 'lampy-podlogowe',
  'lampy-stolowe': 'lampy-stolowe',
  'lampy-wiszace': 'lampy-wiszace',
  'lazienki': 'lazienki',
  'lozka': 'lozka',
  'lustra': 'lustra',
  'meble-ogrodowe': 'meble-ogrodowe',
  'oswietlenie': 'oswietlenie',
  'pufy': 'pufy',
  'regaly': 'regaly',
  'sofy': 'sofy',
  'stoliki-boczne': 'stoliki-boczne',
  'stoliki-kawowe': 'stoliki-kawowe',
  'stoly': 'stoly',
  'szafki-nocne': 'szafki-nocne',
  'szezlongi': 'szezlongi',
  'zyrandole': 'zyrandole',
};

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

interface RawProduct {
  url: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  brandName?: string;
  brandSlug?: string;
  description?: string;
  dimensions?: string;
  images: string[];
  scrapedAt: string;
}

interface NormalizedProduct {
  id: string;
  name: string;
  slug: string;
  brandSlug: string;
  categorySlug: string;
  heroImage: {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  galleryImages: {
    id: string;
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  shortDescription: string;
  dimensions?: string;
  tags: string[];
  seo: {
    title: string;
    description: string;
  };
}

interface ScrapeResult {
  totalProducts: number;
  categories: Record<string, number>;
  brands: Record<string, number>;
  unmappedBrands: string[];
  errors: string[];
  products: RawProduct[];
}

// =============================================================================
// HTML PARSING UTILITIES
// =============================================================================

/**
 * Extract text content between tags
 */
function extractText(html: string, pattern: RegExp): string | null {
  const match = html.match(pattern);
  return match ? match[1].trim() : null;
}

/**
 * Extract all image URLs from HTML
 */
function extractImages(html: string): string[] {
  const images: string[] = [];
  const imgPattern = /src="(https:\/\/www\.luxarte\.pl\/wp-content\/uploads\/[^"]+)"/g;
  let match;
  while ((match = imgPattern.exec(html)) !== null) {
    if (!images.includes(match[1])) {
      images.push(match[1]);
    }
  }
  return images;
}

/**
 * Extract product URLs from category page
 */
function extractProductUrls(html: string): string[] {
  const urls: string[] = [];
  const pattern = /href="(https:\/\/www\.luxarte\.pl\/produkty\/[^"]+)"/g;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    if (!urls.includes(match[1])) {
      urls.push(match[1]);
    }
  }
  return urls;
}

/**
 * Extract brand from product page HTML
 */
function extractBrandInfo(html: string): { name: string; slug: string } | null {
  // Look for "Marka: <a href="...">{brand}</a>" pattern
  const markaMatch = html.match(/Marka:\s*<a[^>]*href="https:\/\/www\.luxarte\.pl\/([^"]+)\/"[^>]*>([^<]+)<\/a>/i);
  if (markaMatch) {
    const urlPath = markaMatch[1];
    const name = markaMatch[2].trim();
    
    // Extract brand slug from URL path
    const pathParts = urlPath.split('/');
    const rawSlug = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
    
    return { name, slug: rawSlug };
  }
  return null;
}

/**
 * Extract product description
 */
function extractDescription(html: string): string | null {
  const match = html.match(/Opis:\s*([^<]+(?:<[^>]+>[^<]*)*?)(?:<br|<\/p|Wymiary:)/i);
  if (match) {
    return match[1].replace(/<[^>]+>/g, '').trim();
  }
  return null;
}

/**
 * Extract dimensions
 */
function extractDimensions(html: string): string | null {
  const match = html.match(/Wymiary:\s*([^<]+)/i);
  return match ? match[1].trim() : null;
}

/**
 * Extract product name from H1
 */
function extractProductName(html: string): string | null {
  const match = html.match(/<h1[^>]*class="[^"]*product[^"]*"[^>]*>([^<]+)<\/h1>/i)
    || html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
  return match ? match[1].trim() : null;
}

// =============================================================================
// FETCH UTILITIES
// =============================================================================

async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchPage(url: string): Promise<string | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'LuxArte Catalog Scraper/1.0 (migration tool)',
        'Accept': 'text/html',
      },
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`);
      return null;
    }
    
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

// =============================================================================
// MAIN SCRAPER LOGIC
// =============================================================================

async function scrapeCategory(category: typeof LEGACY_CATEGORIES[0]): Promise<RawProduct[]> {
  const products: RawProduct[] = [];
  const productsPerPage = 12;
  const totalPages = Math.ceil(category.count / productsPerPage);
  
  console.log(`\n📁 Scraping category: ${category.name} (${category.count} products, ${totalPages} pages)`);
  
  // Collect all product URLs first
  const allProductUrls: string[] = [];
  
  for (let page = 1; page <= totalPages; page++) {
    const pageUrl = page === 1
      ? `${BASE_URL}/kategoria-produktu/${category.slug}/`
      : `${BASE_URL}/kategoria-produktu/${category.slug}/page/${page}/`;
    
    console.log(`  📄 Fetching page ${page}/${totalPages}...`);
    
    const html = await fetchPage(pageUrl);
    if (!html) continue;
    
    const urls = extractProductUrls(html);
    allProductUrls.push(...urls.filter(u => !allProductUrls.includes(u)));
    
    await delay(DELAY_MS);
  }
  
  console.log(`  🔗 Found ${allProductUrls.length} unique product URLs`);
  
  // Now scrape each product
  for (let i = 0; i < allProductUrls.length; i++) {
    const url = allProductUrls[i];
    console.log(`  📦 Scraping product ${i + 1}/${allProductUrls.length}...`);
    
    const html = await fetchPage(url);
    if (!html) continue;
    
    const name = extractProductName(html);
    if (!name) {
      console.warn(`    ⚠️ Could not extract product name from ${url}`);
      continue;
    }
    
    const brandInfo = extractBrandInfo(html);
    const description = extractDescription(html);
    const dimensions = extractDimensions(html);
    const images = extractImages(html);
    
    products.push({
      url,
      name,
      categorySlug: category.slug,
      categoryName: category.name,
      brandName: brandInfo?.name,
      brandSlug: brandInfo?.slug,
      description: description || undefined,
      dimensions: dimensions || undefined,
      images,
      scrapedAt: new Date().toISOString(),
    });
    
    await delay(DELAY_MS);
  }
  
  return products;
}

async function runFullScrape(): Promise<ScrapeResult> {
  const result: ScrapeResult = {
    totalProducts: 0,
    categories: {},
    brands: {},
    unmappedBrands: [],
    errors: [],
    products: [],
  };
  
  console.log('🚀 Starting full catalog scrape...\n');
  console.log(`📊 Categories to scrape: ${LEGACY_CATEGORIES.length}`);
  console.log(`📊 Estimated products: ${LEGACY_CATEGORIES.reduce((sum, c) => sum + c.count, 0)}`);
  
  for (const category of LEGACY_CATEGORIES) {
    try {
      const products = await scrapeCategory(category);
      result.products.push(...products);
      result.categories[category.slug] = products.length;
      
      // Track brands
      for (const product of products) {
        if (product.brandSlug) {
          result.brands[product.brandSlug] = (result.brands[product.brandSlug] || 0) + 1;
          
          // Check if brand is mapped
          if (!BRAND_MAPPING[product.brandSlug] && !result.unmappedBrands.includes(product.brandSlug)) {
            result.unmappedBrands.push(product.brandSlug);
          }
        }
      }
    } catch (error) {
      result.errors.push(`Category ${category.slug}: ${error}`);
    }
  }
  
  result.totalProducts = result.products.length;
  
  return result;
}

// =============================================================================
// NORMALIZATION
// =============================================================================

function normalizeProducts(rawProducts: RawProduct[]): NormalizedProduct[] {
  const normalized: NormalizedProduct[] = [];
  const seenSlugs = new Set<string>();
  
  for (const raw of rawProducts) {
    // Generate slug from URL
    const urlParts = raw.url.replace(/\/$/, '').split('/');
    let slug = urlParts[urlParts.length - 1];
    
    // Handle duplicates
    if (seenSlugs.has(slug)) {
      slug = `${slug}-${raw.categorySlug}`;
    }
    seenSlugs.add(slug);
    
    // Map brand slug
    const brandSlug = raw.brandSlug
      ? BRAND_MAPPING[raw.brandSlug] || raw.brandSlug
      : 'unknown';
    
    // Map category slug
    const categorySlug = CATEGORY_MAPPING[raw.categorySlug] || raw.categorySlug;
    
    // Generate ID
    const id = slug;
    
    // Create hero image
    const heroImageSrc = raw.images[0] || `${CDN_BASE}/placeholder.webp`;
    
    // Generate gallery images
    const galleryImages = raw.images.map((src, idx) => ({
      id: `${id}-img-${idx + 1}`,
      src,
      alt: `${raw.name} - zdjęcie ${idx + 1}`,
      width: 1200,
      height: 800,
    }));
    
    normalized.push({
      id,
      name: raw.name,
      slug,
      brandSlug,
      categorySlug,
      heroImage: {
        id: `${id}-hero`,
        src: heroImageSrc,
        alt: `${raw.name} - widok główny`,
        width: 1200,
        height: 800,
      },
      galleryImages,
      shortDescription: raw.description || `${raw.name} z kolekcji ${raw.brandName || 'LuxArte'}.`,
      dimensions: raw.dimensions,
      tags: [categorySlug, brandSlug].filter(Boolean),
      seo: {
        title: `${raw.name} | ${raw.brandName || 'LuxArte'} | Ekskluzywne Meble`,
        description: raw.description
          ? raw.description.substring(0, 155) + '...'
          : `${raw.name} - luksusowy mebel z kolekcji ${raw.brandName || 'LuxArte'}. Odkryj wyjątkowy design w showroomie w Warszawie.`,
      },
    });
  }
  
  return normalized;
}

// =============================================================================
// OUTPUT GENERATION
// =============================================================================

function ensureOutputDir(): void {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

function writeRawCatalog(products: RawProduct[]): void {
  const outputPath = path.join(OUTPUT_DIR, 'products-catalog-raw.json');
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`✅ Raw catalog written to ${outputPath}`);
}

function writeNormalizedCatalog(products: NormalizedProduct[]): void {
  const outputPath = path.join(OUTPUT_DIR, 'products-catalog-normalized.json');
  fs.writeFileSync(outputPath, JSON.stringify(products, null, 2), 'utf-8');
  console.log(`✅ Normalized catalog written to ${outputPath}`);
}

function writeImageManifest(products: RawProduct[]): void {
  const images: { productId: string; productName: string; urls: string[] }[] = [];
  
  for (const product of products) {
    const urlParts = product.url.replace(/\/$/, '').split('/');
    const slug = urlParts[urlParts.length - 1];
    
    images.push({
      productId: slug,
      productName: product.name,
      urls: product.images,
    });
  }
  
  const outputPath = path.join(OUTPUT_DIR, 'product-image-manifest.json');
  fs.writeFileSync(outputPath, JSON.stringify(images, null, 2), 'utf-8');
  console.log(`✅ Image manifest written to ${outputPath}`);
}

function generateReport(result: ScrapeResult): void {
  const reportLines: string[] = [
    '# Legacy Catalog Import Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Summary',
    '',
    `- **Total Products Scraped:** ${result.totalProducts}`,
    `- **Categories Processed:** ${Object.keys(result.categories).length}`,
    `- **Unique Brands Found:** ${Object.keys(result.brands).length}`,
    `- **Errors:** ${result.errors.length}`,
    '',
    '## Products by Category',
    '',
    '| Category | Count |',
    '|----------|-------|',
    ...Object.entries(result.categories)
      .sort((a, b) => b[1] - a[1])
      .map(([cat, count]) => `| ${cat} | ${count} |`),
    '',
    '## Products by Brand',
    '',
    '| Brand | Count |',
    '|-------|-------|',
    ...Object.entries(result.brands)
      .sort((a, b) => b[1] - a[1])
      .map(([brand, count]) => `| ${brand} | ${count} |`),
    '',
  ];
  
  if (result.unmappedBrands.length > 0) {
    reportLines.push(
      '## ⚠️ Unmapped Brands',
      '',
      'The following brand slugs were found but not mapped to existing brands:',
      '',
      ...result.unmappedBrands.map(b => `- \`${b}\``),
      '',
    );
  }
  
  if (result.errors.length > 0) {
    reportLines.push(
      '## ❌ Errors',
      '',
      ...result.errors.map(e => `- ${e}`),
      '',
    );
  }
  
  reportLines.push(
    '## Output Files',
    '',
    '- `data/products-catalog-raw.json` - Raw scraped data',
    '- `data/products-catalog-normalized.json` - Normalized product data',
    '- `data/product-image-manifest.json` - All product image URLs',
    '',
    '## Next Steps',
    '',
    '1. Review unmapped brands and add to `brands-data.ts`',
    '2. Run `npm run build` to verify product pages generate correctly',
    '3. Optionally download images locally for faster builds',
    '',
  );
  
  const outputPath = path.join(process.cwd(), 'catalog-import-report.md');
  fs.writeFileSync(outputPath, reportLines.join('\n'), 'utf-8');
  console.log(`✅ Report written to ${outputPath}`);
}

// =============================================================================
// MAIN ENTRY POINT
// =============================================================================

async function main(): Promise<void> {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('   LUXARTE LEGACY CATALOG SCRAPER');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('');
  
  ensureOutputDir();
  
  // Run scrape
  const result = await runFullScrape();
  
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('   PROCESSING RESULTS');
  console.log('═══════════════════════════════════════════════════════════════');
  
  // Write raw data
  writeRawCatalog(result.products);
  
  // Normalize and write
  const normalized = normalizeProducts(result.products);
  writeNormalizedCatalog(normalized);
  
  // Write image manifest
  writeImageManifest(result.products);
  
  // Generate report
  generateReport(result);
  
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('   SCRAPE COMPLETE');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`\n📊 Total products: ${result.totalProducts}`);
  console.log(`📁 Categories: ${Object.keys(result.categories).length}`);
  console.log(`🏷️ Brands: ${Object.keys(result.brands).length}`);
  if (result.unmappedBrands.length > 0) {
    console.log(`⚠️ Unmapped brands: ${result.unmappedBrands.join(', ')}`);
  }
  if (result.errors.length > 0) {
    console.log(`❌ Errors: ${result.errors.length}`);
  }
}

main().catch(console.error);
