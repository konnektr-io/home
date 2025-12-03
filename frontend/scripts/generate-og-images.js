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

// LinkedIn banner configuration
const LINKEDIN_BANNER_CONFIG = {
  width: 1128,
  height: 191,
  deviceScaleFactor: 2,
};

// Logo PNG resolutions to generate
const LOGO_SIZES = [256, 512, 1024];

// Templates to generate
const templates = [
  { name: 'homepage', file: 'homepage-og-template.html' },
  { name: 'graph', file: 'graph-og-template.html' },
  { name: 'assembler', file: 'assembler-og-template.html' },
  { name: 'flow', file: 'flow-og-template.html' },
  { name: 'compass', file: 'compass-og-template.html' },
];

// LinkedIn banner template
const linkedinBanner = {
  name: 'linkedin-banner',
  file: 'linkedin-banner-template.html',
  config: LINKEDIN_BANNER_CONFIG,
};

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
    // Generate standard OG images
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

    // Generate LinkedIn banner
    console.log('\n📸 Generating LinkedIn banner...');
    const linkedinTemplatePath = join(__dirname, '../../og-templates', linkedinBanner.file);
    const linkedinOutputPath = join(outputDir, `${linkedinBanner.name}.png`);
    
    const linkedinPage = await browser.newPage({
      viewport: {
        width: linkedinBanner.config.width,
        height: linkedinBanner.config.height,
      },
      deviceScaleFactor: linkedinBanner.config.deviceScaleFactor,
    });

    try {
      await linkedinPage.goto(`file://${linkedinTemplatePath}`, {
        waitUntil: 'networkidle',
      });

      await linkedinPage.waitForTimeout(2000);

      await linkedinPage.screenshot({
        path: linkedinOutputPath,
        width: linkedinBanner.config.width,
        height: linkedinBanner.config.height,
        type: 'png',
      });

      console.log(`✅ Generated: ${linkedinBanner.name}.png`);
    } catch (error) {
      console.error(`❌ Error generating LinkedIn banner:`, error.message);
    } finally {
      await linkedinPage.close();
    }
  } finally {
    await browser.close();
  }

  console.log('\n🎉 OG image generation complete!');
  console.log(`📁 Images saved to: ${outputDir}`);
}

async function generateLogoPNGs() {
  console.log('\n🎨 Starting logo PNG generation...');
  
  const logoSvgPath = join(__dirname, '../public/konnektr.svg');
  const outputDir = join(__dirname, '../public');
  
  // Read the SVG file content
  const { readFileSync } = await import('fs');
  const svgContent = readFileSync(logoSvgPath, 'utf-8');
  
  // Launch browser
  const browser = await chromium.launch({
    headless: true,
  });

  try {
    for (const size of LOGO_SIZES) {
      console.log(`📸 Generating ${size}x${size}px logo...`);
      
      const outputPath = join(outputDir, `konnektr-${size}.png`);
      
      // Create new page
      const page = await browser.newPage({
        viewport: {
          width: size,
          height: size,
        },
        deviceScaleFactor: 1,
      });

      try {
        // SVG dimensions: 129.74384mm x 145.11189mm (width x height)
        // Aspect ratio: ~0.894 (slightly taller than wide)
        // Add padding of 10% on each side
        const padding = size * 0.1;
        const availableSize = size - (padding * 2);
        
        // Create an HTML wrapper to properly scale the SVG
        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                html, body { 
                  width: ${size}px; 
                  height: ${size}px; 
                  background: transparent;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: ${padding}px;
                }
                .svg-container {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }
                .svg-container svg {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              </style>
            </head>
            <body>
              <div class="svg-container">
                ${svgContent}
              </div>
            </body>
          </html>
        `;

        // Navigate to the HTML content
        await page.setContent(htmlContent, {
          waitUntil: 'networkidle',
        });

        // Wait for rendering
        await page.waitForTimeout(1000);

        // Take screenshot with transparent background
        await page.screenshot({
          path: outputPath,
          type: 'png',
          omitBackground: true, // This ensures transparent background
        });

        console.log(`✅ Generated: konnektr-${size}.png`);
      } catch (error) {
        console.error(`❌ Error generating ${size}px logo:`, error.message);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  console.log('\n🎉 Logo PNG generation complete!');
  console.log(`📁 Logos saved to: ${outputDir}`);
}

// Run the script
async function main() {
  await generateOGImages();
  await generateLogoPNGs();
}

main().catch(console.error);