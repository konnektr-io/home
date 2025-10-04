import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// WCAG contrast ratios
const WCAG_AA_NORMAL = 4.5;
const WCAG_AA_LARGE = 3.0;
const WCAG_AAA_NORMAL = 7.0;
const WCAG_AAA_LARGE = 4.5;

// Convert RGB to relative luminance
function relativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio between two colors
function contrastRatio(color1, color2) {
  const l1 = relativeLuminance(color1.r, color1.g, color1.b);
  const l2 = relativeLuminance(color2.r, color2.g, color2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Parse RGB color string
function parseRGB(colorStr) {
  const match = colorStr.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (!match) return null;
  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3])
  };
}

// Check compliance level
function getComplianceLevel(ratio, isLarge = false) {
  if (isLarge) {
    if (ratio >= WCAG_AAA_LARGE) return 'AAA';
    if (ratio >= WCAG_AA_LARGE) return 'AA';
    return 'FAIL';
  } else {
    if (ratio >= WCAG_AAA_NORMAL) return 'AAA';
    if (ratio >= WCAG_AA_NORMAL) return 'AA';
    return 'FAIL';
  }
}

async function checkContrastCompliance() {
  console.log('🔍 Starting contrast compliance check...');
  
  const browser = await chromium.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage({
      viewport: { width: 1920, height: 1080 },
      colorScheme: 'dark' // Test dark mode
    });

    // Navigate to local development server or build
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' });

    // Wait for page to be fully loaded
    await page.waitForTimeout(2000);

    const results = [];

    // Define text elements to check
    const textSelectors = [
      // Main content
      { selector: 'h1', description: 'Main heading' },
      { selector: 'h2', description: 'Section headings' },
      { selector: 'h3', description: 'Card titles' },
      { selector: 'p.text-gray-400', description: 'Gray text paragraphs' },
      { selector: '.text-muted-foreground', description: 'Muted foreground text' },
      { selector: '.text-foreground', description: 'Primary foreground text' },
      { selector: '.text-brand-teal', description: 'Brand teal text' },
      { selector: '.text-white', description: 'White text' },
      
      // Button text
      { selector: 'button', description: 'Button text' },
      
      // Navigation and UI elements
      { selector: 'nav a', description: 'Navigation links' },
      { selector: '.feature-card p', description: 'Feature card descriptions' },
    ];

    for (const { selector, description } of textSelectors) {
      try {
        const elements = await page.locator(selector).all();
        
        for (let i = 0; i < Math.min(elements.length, 3); i++) { // Check first 3 instances
          const element = elements[i];
          
          // Get computed styles
          const textColor = await element.evaluate(el => 
            window.getComputedStyle(el).color
          );
          const backgroundColor = await element.evaluate(el => {
            let bgColor = window.getComputedStyle(el).backgroundColor;
            let currentEl = el;
            
            // Walk up the DOM tree to find a non-transparent background
            while (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
              currentEl = currentEl.parentElement;
              if (!currentEl || currentEl === document.body) break;
              bgColor = window.getComputedStyle(currentEl).backgroundColor;
            }
            
            // Fallback to body background
            if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
              bgColor = window.getComputedStyle(document.body).backgroundColor;
            }
            
            return bgColor;
          });

          const fontSize = await element.evaluate(el => 
            parseFloat(window.getComputedStyle(el).fontSize)
          );
          const fontWeight = await element.evaluate(el => 
            window.getComputedStyle(el).fontWeight
          );

          // Parse colors
          const textRGB = parseRGB(textColor);
          const bgRGB = parseRGB(backgroundColor);

          if (textRGB && bgRGB) {
            const ratio = contrastRatio(textRGB, bgRGB);
            const isLarge = fontSize >= 18 || (fontSize >= 14 && parseInt(fontWeight) >= 700);
            const compliance = getComplianceLevel(ratio, isLarge);

            results.push({
              selector: `${selector}${i > 0 ? ` (${i + 1})` : ''}`,
              description,
              textColor,
              backgroundColor,
              fontSize: Math.round(fontSize),
              fontWeight,
              ratio: Math.round(ratio * 100) / 100,
              isLarge,
              compliance,
            });
          }
        }
      } catch (error) {
        console.warn(`⚠️  Could not check ${selector}: ${error.message}`);
      }
    }

    // Display results
    console.log('\n📊 Contrast Compliance Results:\n');
    console.log('=' .repeat(120));
    console.log('SELECTOR'.padEnd(30) + 'DESCRIPTION'.padEnd(25) + 'RATIO'.padEnd(8) + 'SIZE'.padEnd(8) + 'COMPLIANCE'.padEnd(12) + 'COLORS');
    console.log('=' .repeat(120));

    const failedChecks = [];
    
    results.forEach(result => {
      const status = result.compliance === 'FAIL' ? '❌' : result.compliance === 'AA' ? '✅' : '🏆';
      
      console.log(
        `${status} ${result.selector.padEnd(28)} ${result.description.padEnd(23)} ${result.ratio.toString().padEnd(6)} ${result.fontSize}px${result.isLarge ? '*' : ' '} ${result.compliance.padEnd(10)} ${result.textColor} on ${result.backgroundColor}`
      );

      if (result.compliance === 'FAIL') {
        failedChecks.push(result);
      }
    });

    console.log('=' .repeat(120));
    console.log('Legend: ❌ FAIL  ✅ AA Compliant  🏆 AAA Compliant  * Large text');
    console.log(`\nSummary: ${results.length - failedChecks.length}/${results.length} checks passed`);

    if (failedChecks.length > 0) {
      console.log(`\n⚠️  ${failedChecks.length} contrast issues found:`);
      failedChecks.forEach(fail => {
        const required = fail.isLarge ? WCAG_AA_LARGE : WCAG_AA_NORMAL;
        console.log(`   • ${fail.selector}: ${fail.ratio}:1 (need ${required}:1 minimum)`);
      });
    } else {
      console.log('\n🎉 All contrast checks passed!');
    }

  } catch (error) {
    console.error('❌ Error during contrast checking:', error);
  } finally {
    await browser.close();
  }
}

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  checkContrastCompliance().catch(console.error);
}

export { checkContrastCompliance };