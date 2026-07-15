import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const INPUT_DIR = './public';
const BACKUP_DIR = './public/hero-originals';
const QUALITY = 75;
const SKIP_UNDER_KB = 200; // Skip files already under 200kb (likely already optimized)

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeWithRetry(filePath, buffer, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      fs.writeFileSync(filePath, buffer);
      return true;
    } catch (err) {
      if (i < retries - 1) {
        console.log(`  Write locked, retrying (${i + 1}/${retries})...`);
        await sleep(1500);
      } else {
        return false;
      }
    }
  }
}

async function optimizeImages() {
  const files = fs.readdirSync(INPUT_DIR).filter(f => /^(hero\d+|TP_\d+)\.webp$/i.test(f));

  console.log(`Found ${files.length} hero images to process...\n`);

  // Create backup folder and copy originals
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    console.log(`Created backup folder: ${BACKUP_DIR}`);
  }

  for (const file of files) {
    const src = path.join(INPUT_DIR, file);
    const dest = path.join(BACKUP_DIR, file);
    if (!fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
      console.log(`  Backed up ${file}`);
    } else {
      console.log(`  ${file} backup already exists — skipping`);
    }
  }

  console.log('');

  let optimized = 0;
  let skipped = 0;
  const failed = [];

  for (const file of files) {
    const filePath = path.join(INPUT_DIR, file);

    const statBefore = fs.statSync(filePath);
    const sizeBeforeKb = statBefore.size / 1024;

    if (sizeBeforeKb < SKIP_UNDER_KB) {
      console.log(`${file}: ${sizeBeforeKb.toFixed(0)}kb — skipped (already small)`);
      skipped++;
      continue;
    }

    // Read into buffer first to release the file handle
    const inputBuffer = fs.readFileSync(filePath);

    // Compress only — no resize, keep original dimensions
    const outputBuffer = await sharp(inputBuffer)
      .webp({ quality: QUALITY })
      .toBuffer();

    // Write optimized buffer back with retry for Windows file locks
    const success = await writeWithRetry(filePath, outputBuffer);

    if (success) {
      const sizeAfterKb = (outputBuffer.length / 1024).toFixed(0);
      console.log(`${file}: ${sizeBeforeKb.toFixed(0)}kb → ${sizeAfterKb}kb`);
      optimized++;
    } else {
      console.log(`${file}: ${sizeBeforeKb.toFixed(0)}kb — FAILED (file locked, skipping)`);
      failed.push(file);
    }
  }

  console.log(`\nDone! ${optimized} optimized, ${skipped} skipped.`);
  if (failed.length > 0) {
    console.log(`\n⚠ ${failed.length} file(s) could not be written (locked by another process):`);
    failed.forEach(f => console.log(`  - ${f}`));
    console.log('\nTip: Stop the dev server and re-run to process these files.');
  }
}

optimizeImages().catch(console.error);
