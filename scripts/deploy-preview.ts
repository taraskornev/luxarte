/**
 * Deploy Preview Script
 * 
 * One-command preview deployment:
 * 1. Builds preview media
 * 2. Swaps vercelignore
 * 3. Deploys to Vercel
 * 4. Restores vercelignore
 * 
 * Usage: npx ts-node scripts/deploy-preview.ts
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();

function run(cmd: string): void {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: ROOT });
}

function fileExists(p: string): boolean {
  return fs.existsSync(path.join(ROOT, p));
}

function copyFile(src: string, dest: string): void {
  fs.copyFileSync(path.join(ROOT, src), path.join(ROOT, dest));
}

async function main(): Promise<void> {
  console.log('🚀 Preview Deployment');
  console.log('=====================\n');

  // Step 1: Check if sharp is installed
  try {
    require.resolve('sharp');
  } catch {
    console.log('📦 Installing sharp...');
    run('npm install sharp --save-dev');
  }

  // Step 2: Build preview media
  console.log('\n📸 Building preview media...');
  run('npx ts-node scripts/build-preview-media.ts');

  // Step 3: Backup current vercelignore
  if (fileExists('.vercelignore')) {
    console.log('\n📋 Backing up .vercelignore...');
    copyFile('.vercelignore', '.vercelignore.backup');
  }

  // Step 4: Use preview vercelignore
  if (fileExists('.vercelignore.preview')) {
    console.log('📋 Switching to preview .vercelignore...');
    copyFile('.vercelignore.preview', '.vercelignore');
  }

  // Step 5: Deploy
  console.log('\n🚀 Deploying to Vercel...');
  try {
    run('cross-env NEXT_PUBLIC_PREVIEW_BUILD=true vercel --prod --archive=tgz');
  } catch (err) {
    console.error('Deploy failed:', err);
  }

  // Step 6: Restore vercelignore
  if (fileExists('.vercelignore.backup')) {
    console.log('\n📋 Restoring .vercelignore...');
    copyFile('.vercelignore.backup', '.vercelignore');
    fs.unlinkSync(path.join(ROOT, '.vercelignore.backup'));
  }

  console.log('\n✅ Preview deployment complete!');
}

main().catch(console.error);
