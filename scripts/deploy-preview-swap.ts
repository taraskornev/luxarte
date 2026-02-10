/**
 * Deploy Preview - Temporary Folder Swap
 * 
 * This script temporarily moves heavy folders out of the way,
 * deploys to Vercel, then restores them.
 * 
 * Usage: npx ts-node --transpile-only scripts/deploy-preview-swap.ts
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PUBLIC = path.join(process.cwd(), 'public');
const TEMP_DIR = path.join(process.cwd(), '.preview-backup');

// Folders to temporarily move out
const HEAVY_FOLDERS = [
  'catalog',    // ~1.1 GB product images (not preview)
  'media/marki' // ~200 MB brand gallery images
];

function ensureDir(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function moveFolder(src: string, dest: string): void {
  if (fs.existsSync(src)) {
    ensureDir(path.dirname(dest));
    fs.renameSync(src, dest);
    console.log(`  Moved: ${src} → ${dest}`);
  }
}

function run(cmd: string): void {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { 
    stdio: 'inherit', 
    cwd: process.cwd(),
    env: {
      ...process.env,
      NEXT_PUBLIC_PREVIEW_BUILD: 'true'
    }
  });
}

async function main(): Promise<void> {
  console.log('🚀 Preview Deploy with Folder Swap');
  console.log('===================================\n');

  // Step 1: Move heavy folders to temp location
  console.log('📦 Moving heavy folders to temp backup...');
  ensureDir(TEMP_DIR);
  
  for (const folder of HEAVY_FOLDERS) {
    const src = path.join(PUBLIC, folder);
    const dest = path.join(TEMP_DIR, folder);
    moveFolder(src, dest);
  }

  try {
    // Step 2: Verify preview folder exists
    const previewDir = path.join(PUBLIC, 'preview');
    if (!fs.existsSync(previewDir)) {
      console.log('\n⚠️  Preview folder not found! Building preview media...');
      run('npx ts-node --transpile-only scripts/build-preview-media.ts');
    }

    // Step 3: Check file count (simple counting, no powershell)
    console.log('\n📊 Checking public folder...');
    function countFiles(dir: string): number {
      let count = 0;
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory()) {
            count += countFiles(fullPath);
          } else {
            count++;
          }
        }
      } catch {}
      return count;
    }
    const fileCount = countFiles(PUBLIC);
    console.log(`  File count: ${fileCount}`);

    // Step 4: Deploy
    console.log('\n🚀 Deploying to Vercel...');
    run('vercel --prod --yes --archive=tgz');

  } finally {
    // Step 6: Restore folders
    console.log('\n📦 Restoring heavy folders...');
    
    for (const folder of HEAVY_FOLDERS) {
      const src = path.join(TEMP_DIR, folder);
      const dest = path.join(PUBLIC, folder);
      
      if (fs.existsSync(src)) {
        // Ensure parent directory exists
        ensureDir(path.dirname(dest));
        moveFolder(src, dest);
      }
    }

    // Clean up temp directory
    if (fs.existsSync(TEMP_DIR)) {
      try {
        fs.rmSync(TEMP_DIR, { recursive: true });
        console.log('  Cleanup: Removed temp backup folder');
      } catch (e) {
        console.log('  Note: Could not remove temp folder, remove manually: .preview-backup');
      }
    }
  }

  console.log('\n✅ Preview deployment complete!');
}

main().catch((err) => {
  console.error('\n❌ Deployment failed:', err.message);
  
  // Emergency restore
  console.log('\n🔄 Attempting emergency restore...');
  for (const folder of HEAVY_FOLDERS) {
    const src = path.join(TEMP_DIR, folder);
    const dest = path.join(PUBLIC, folder);
    
    if (fs.existsSync(src) && !fs.existsSync(dest)) {
      try {
        fs.renameSync(src, dest);
        console.log(`  Restored: ${folder}`);
      } catch (e) {
        console.error(`  Failed to restore: ${folder}`);
      }
    }
  }
  
  process.exit(1);
});
