/**
 * Build Preview Media
 * 
 * Creates a lightweight copy of media for preview deployments.
 * 
 * Usage:
 *   npm install sharp   # if not installed
 *   npx ts-node scripts/build-preview-media.ts
 * 
 * Output:
 *   /public/preview/ - Contains only essential images, resized to 800px max
 */

const fs = require('fs');
const path = require('path');

// Try to import sharp, provide fallback instructions
let sharp: any = null;
try {
  sharp = require('sharp');
} catch {
  console.error('Sharp not installed. Run: npm install sharp');
  process.exit(1);
}

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const PREVIEW_DIR = path.join(PUBLIC_DIR, 'preview');
const CATALOG_DIR = path.join(PUBLIC_DIR, 'catalog', 'products');
const BRANDS_LOGOS_DIR = path.join(PUBLIC_DIR, 'brands', 'logos-webp');
const BRANDS_HEROES_DIR = path.join(PUBLIC_DIR, 'media', 'brands');
const PAGES_DIR = path.join(PUBLIC_DIR, 'media', 'pages');

// Config
const MAX_WIDTH = 800;
const MAX_HEIGHT = 800;
const QUALITY = 70;

interface Stats {
  copied: number;
  skipped: number;
  errors: number;
  totalSizeOriginal: number;
  totalSizePreview: number;
}

const stats: Stats = {
  copied: 0,
  skipped: 0,
  errors: 0,
  totalSizeOriginal: 0,
  totalSizePreview: 0,
};

/**
 * Ensure directory exists
 */
function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Resize and copy image to preview folder
 */
async function processImage(
  srcPath: string,
  destPath: string
): Promise<boolean> {
  if (!sharp) return false;
  
  try {
    // Get original size
    const originalStats = fs.statSync(srcPath);
    stats.totalSizeOriginal += originalStats.size;
    
    // Ensure destination directory exists
    ensureDir(path.dirname(destPath));
    
    // Check if source is SVG - copy as-is
    if (srcPath.endsWith('.svg')) {
      fs.copyFileSync(srcPath, destPath);
      const newStats = fs.statSync(destPath);
      stats.totalSizePreview += newStats.size;
      stats.copied++;
      return true;
    }
    
    // Resize and convert to webp
    await sharp(srcPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: QUALITY })
      .toFile(destPath);
    
    const newStats = fs.statSync(destPath);
    stats.totalSizePreview += newStats.size;
    stats.copied++;
    return true;
  } catch (err) {
    console.error(`Error processing ${srcPath}:`, err);
    stats.errors++;
    return false;
  }
}

/**
 * Process all product card images
 */
async function processProducts(): Promise<void> {
  console.log('\n📦 Processing product images...');
  
  if (!fs.existsSync(CATALOG_DIR)) {
    console.log('  No catalog directory found');
    return;
  }
  
  const productDirs = fs.readdirSync(CATALOG_DIR);
  let processed = 0;
  
  for (const slug of productDirs) {
    const productDir = path.join(CATALOG_DIR, slug);
    
    // Skip if not a directory
    if (!fs.statSync(productDir).isDirectory()) continue;
    
    // Look for 01-card.webp
    const cardImage = path.join(productDir, '01-card.webp');
    
    if (fs.existsSync(cardImage)) {
      const destPath = path.join(PREVIEW_DIR, 'catalog', 'products', slug, '01-card.webp');
      await processImage(cardImage, destPath);
      processed++;
      
      // Progress indicator
      if (processed % 100 === 0) {
        process.stdout.write(`  Processed ${processed} products...\r`);
      }
    } else {
      stats.skipped++;
    }
  }
  
  console.log(`  ✓ Processed ${processed} product card images`);
}

/**
 * Process brand logos
 */
async function processBrandLogos(): Promise<void> {
  console.log('\n🏷️  Processing brand logos...');
  
  if (!fs.existsSync(BRANDS_LOGOS_DIR)) {
    console.log('  No brand logos directory found');
    return;
  }
  
  const logos = fs.readdirSync(BRANDS_LOGOS_DIR).filter(f => 
    f.endsWith('.webp') || f.endsWith('.svg') || f.endsWith('.png')
  );
  
  for (const logo of logos) {
    const srcPath = path.join(BRANDS_LOGOS_DIR, logo);
    const destPath = path.join(PREVIEW_DIR, 'brands', 'logos-webp', logo);
    await processImage(srcPath, destPath);
  }
  
  console.log(`  ✓ Processed ${logos.length} brand logos`);
}

/**
 * Process brand hero images
 */
async function processBrandHeroes(): Promise<void> {
  console.log('\n🖼️  Processing brand heroes...');
  
  if (!fs.existsSync(BRANDS_HEROES_DIR)) {
    console.log('  No brand heroes directory found');
    return;
  }
  
  const heroes = fs.readdirSync(BRANDS_HEROES_DIR).filter(f => 
    f.endsWith('-hero.webp')
  );
  
  for (const hero of heroes) {
    const srcPath = path.join(BRANDS_HEROES_DIR, hero);
    const destPath = path.join(PREVIEW_DIR, 'media', 'brands', hero);
    await processImage(srcPath, destPath);
  }
  
  console.log(`  ✓ Processed ${heroes.length} brand hero images`);
}

/**
 * Process page hero images (first image only from each page folder)
 */
async function processPageHeroes(): Promise<void> {
  console.log('\n📄 Processing page heroes...');
  
  if (!fs.existsSync(PAGES_DIR)) {
    console.log('  No pages directory found');
    return;
  }
  
  const pageDirs = fs.readdirSync(PAGES_DIR);
  let processed = 0;
  
  for (const pageSlug of pageDirs) {
    const pageDir = path.join(PAGES_DIR, pageSlug);
    
    if (!fs.statSync(pageDir).isDirectory()) continue;
    
    // Find first hero image
    const files = fs.readdirSync(pageDir).filter(f => 
      f.includes('-hero.webp')
    ).sort();
    
    if (files.length > 0) {
      const srcPath = path.join(pageDir, files[0]);
      const destPath = path.join(PREVIEW_DIR, 'media', 'pages', pageSlug, files[0]);
      await processImage(srcPath, destPath);
      processed++;
    }
  }
  
  console.log(`  ✓ Processed ${processed} page hero images`);
}

/**
 * Copy fallback image
 */
async function copyFallback(): Promise<void> {
  console.log('\n⚠️  Copying fallback image...');
  
  const srcPath = path.join(PUBLIC_DIR, 'catalog', 'fallback.svg');
  
  if (fs.existsSync(srcPath)) {
    const destPath = path.join(PREVIEW_DIR, 'catalog', 'fallback.svg');
    ensureDir(path.dirname(destPath));
    fs.copyFileSync(srcPath, destPath);
    stats.copied++;
    console.log('  ✓ Copied fallback.svg');
  } else {
    // Create a simple placeholder SVG
    const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" fill="none">
  <rect width="400" height="300" fill="#f5f5f5"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-family="system-ui" font-size="14">Brak obrazu</text>
</svg>`;
    const destPath = path.join(PREVIEW_DIR, 'catalog', 'fallback.svg');
    ensureDir(path.dirname(destPath));
    fs.writeFileSync(destPath, placeholderSvg);
    stats.copied++;
    console.log('  ✓ Created fallback.svg');
  }
}

/**
 * Generate report
 */
function generateReport(): void {
  const originalSizeMB = (stats.totalSizeOriginal / 1024 / 1024).toFixed(2);
  const previewSizeMB = (stats.totalSizePreview / 1024 / 1024).toFixed(2);
  const reduction = ((1 - stats.totalSizePreview / stats.totalSizeOriginal) * 100).toFixed(1);
  
  const report = `# PREVIEW BUILD SIZE REPORT

Generated: ${new Date().toISOString()}

## Summary

| Metric | Value |
|--------|-------|
| Images copied | ${stats.copied} |
| Images skipped | ${stats.skipped} |
| Errors | ${stats.errors} |

## Size Comparison

| Folder | Size |
|--------|------|
| Original (selected files) | ${originalSizeMB} MB |
| Preview /public/preview | ${previewSizeMB} MB |
| **Size reduction** | **${reduction}%** |

## What's Included

- Product card images (01-card.webp only) - 1 per product
- Brand logos (all)
- Brand hero images (all)
- Page hero images (first per page)
- Fallback SVG

## What's Excluded

- Product gallery images (02+)
- Product lightbox images
- Brand gallery images
- Page secondary images
- Full-size images

## Deployment Estimate

With ~${stats.copied} preview images at ${previewSizeMB} MB total:
- Vercel upload should complete without timeout
- Build should stay under limits

## Verification

Original files: **UNTOUCHED**
Preview files: /public/preview/

To deploy preview build:
\`\`\`bash
NEXT_PUBLIC_PREVIEW_BUILD=true npm run build
vercel --prod
\`\`\`
`;

  fs.writeFileSync(
    path.join(process.cwd(), 'PREVIEW_BUILD_SIZE_REPORT.md'),
    report
  );
  
  console.log('\n📋 Report saved to PREVIEW_BUILD_SIZE_REPORT.md');
}

/**
 * Main
 */
async function main(): Promise<void> {
  console.log('🚀 Building Preview Media Set');
  console.log('================================');
  console.log(`Source: ${PUBLIC_DIR}`);
  console.log(`Destination: ${PREVIEW_DIR}`);
  console.log(`Max size: ${MAX_WIDTH}x${MAX_HEIGHT}px`);
  console.log(`Quality: ${QUALITY}%`);
  
  // Clean preview directory
  if (fs.existsSync(PREVIEW_DIR)) {
    console.log('\n🗑️  Cleaning existing preview folder...');
    fs.rmSync(PREVIEW_DIR, { recursive: true });
  }
  ensureDir(PREVIEW_DIR);
  
  // Process each category
  await processProducts();
  await processBrandLogos();
  await processBrandHeroes();
  await processPageHeroes();
  await copyFallback();
  
  // Generate report
  generateReport();
  
  console.log('\n✅ Preview media build complete!');
  console.log(`   Total images: ${stats.copied}`);
  console.log(`   Preview size: ${(stats.totalSizePreview / 1024 / 1024).toFixed(2)} MB`);
}

main().catch(console.error);
