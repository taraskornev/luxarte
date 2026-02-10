/**
 * generate-media-manifest.ts
 * 
 * Scans public/catalog and public/media directories and generates
 * a JSON manifest of all files with their sizes. This allows the
 * build to work without the actual media files present (e.g. on Vercel).
 * 
 * Run: npx ts-node scripts/generate-media-manifest.ts
 */

import fs from 'fs';
import path from 'path';

interface FileEntry {
  name: string;
  size: number;
}

interface MediaManifest {
  generatedAt: string;
  catalog: Record<string, FileEntry[]>;  // slug -> files
  brands: Record<string, FileEntry[]>;   // brand-folder -> files
}

const PUBLIC_DIR = path.join(process.cwd(), 'public');

function scanDirectory(dirPath: string): FileEntry[] {
  try {
    const files = fs.readdirSync(dirPath);
    return files
      .filter(f => !f.startsWith('.'))
      .map(f => {
        try {
          const stats = fs.statSync(path.join(dirPath, f));
          return { name: f, size: stats.size };
        } catch {
          return { name: f, size: 0 };
        }
      })
      .filter(f => f.size > 0);
  } catch {
    return [];
  }
}

function main() {
  const manifest: MediaManifest = {
    generatedAt: new Date().toISOString(),
    catalog: {},
    brands: {},
  };

  // Scan catalog/products
  const catalogDir = path.join(PUBLIC_DIR, 'catalog', 'products');
  if (fs.existsSync(catalogDir)) {
    const slugs = fs.readdirSync(catalogDir).filter(f => {
      return fs.statSync(path.join(catalogDir, f)).isDirectory();
    });
    
    for (const slug of slugs) {
      const files = scanDirectory(path.join(catalogDir, slug));
      if (files.length > 0) {
        manifest.catalog[slug] = files;
      }
    }
    console.log(`Scanned ${slugs.length} catalog product directories`);
  }

  // Scan media/marki
  const markiDir = path.join(PUBLIC_DIR, 'media', 'marki');
  if (fs.existsSync(markiDir)) {
    const brands = fs.readdirSync(markiDir).filter(f => {
      return fs.statSync(path.join(markiDir, f)).isDirectory();
    });
    
    for (const brand of brands) {
      const files = scanDirectory(path.join(markiDir, brand));
      if (files.length > 0) {
        manifest.brands[brand] = files;
      }
    }
    console.log(`Scanned ${brands.length} brand directories`);
  }

  // Write manifest
  const outputPath = path.join(process.cwd(), 'src', 'data', 'generated', 'media-manifest.json');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
  
  const totalFiles = Object.values(manifest.catalog).reduce((acc, files) => acc + files.length, 0)
    + Object.values(manifest.brands).reduce((acc, files) => acc + files.length, 0);
  
  console.log(`\nManifest written to ${outputPath}`);
  console.log(`Total entries: ${totalFiles}`);
  console.log(`  Catalog products: ${Object.keys(manifest.catalog).length} dirs`);
  console.log(`  Brand directories: ${Object.keys(manifest.brands).length} dirs`);
}

main();
