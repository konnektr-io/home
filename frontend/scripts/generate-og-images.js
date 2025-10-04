import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync, existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration for OG images
const OG_CONFIG = {
  width: 1200,
  height: 630,
  deviceScaleFactor: 2, // For high-DPI images
};

// Templates to generate
const templates = [
  { name: 'homepage', file: 'homepage-og-template.html' },
  { name: 'graph', file: 'graph-og-template.html' },
  { name: 'assembler', file: 'assembler-og-template.html' },
  { name: 'flow', file: 'flow-og-template.html' },
  { name: 'compass', file: 'compass-og-template.html' },
];

async function generateOGImages() {
  console.log('🚀 Starting OG image generation...');
  
  // Create output directory
  const outputDir = join(__dirname, '../public/og-images');
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
    console.log(`📁 Created output directory: ${outputDir}`);
  }

  // Launch browser
  const browser = await chromium.launch({
    headless: true,
  });

  try {
    for (const template of templates) {
      const templatePath = join(__dirname, '../../og-templates', template.file);
      const outputPath = join(outputDir, `${template.name}-og.png`);
      
      console.log(`📸 Generating ${template.name} OG image...`);
      
      // Create new page
      const page = await browser.newPage({
        viewport: {
          width: OG_CONFIG.width,
          height: OG_CONFIG.height,
        },
        deviceScaleFactor: OG_CONFIG.deviceScaleFactor,
      });

      try {
        // Navigate to the HTML template
        await page.goto(`file://${templatePath}`, {
          waitUntil: 'networkidle',
        });

        // Wait for any animations or dynamic content
        await page.waitForTimeout(2000);

        // Take screenshot
        await page.screenshot({
          path: outputPath,
          width: OG_CONFIG.width,
          height: OG_CONFIG.height,
          type: 'png',
        });

        console.log(`✅ Generated: ${template.name}-og.png`);
      } catch (error) {
        console.error(`❌ Error generating ${template.name}:`, error.message);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  console.log('🎉 OG image generation complete!');
  console.log(`📁 Images saved to: ${outputDir}`);
}

// Run the script
generateOGImages().catch(console.error);