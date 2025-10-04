// Test black text on various teal backgrounds
function oklchToRgb(l, c, h) {
  const hRad = (h * Math.PI) / 180;
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);
  
  const x = l + 0.3963377774 * a + 0.2158037573 * b;
  const y = l - 0.1055613458 * a - 0.0638541728 * b;
  const z = l - 0.0894841775 * a - 1.2914855480 * b;
  
  let r = 3.2406 * x - 1.5372 * y - 0.4986 * z;
  let g = -0.9689 * x + 1.8758 * y + 0.0415 * z;
  let bl = 0.0557 * x - 0.2040 * y + 1.0570 * z;
  
  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1/2.4) - 0.055 : 12.92 * r;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1/2.4) - 0.055 : 12.92 * g;
  bl = bl > 0.0031308 ? 1.055 * Math.pow(bl, 1/2.4) - 0.055 : 12.92 * bl;
  
  r = Math.max(0, Math.min(1, r)) * 255;
  g = Math.max(0, Math.min(1, g)) * 255;
  bl = Math.max(0, Math.min(1, bl)) * 255;
  
  return [Math.round(r), Math.round(g), Math.round(bl)];
}

function relativeLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(rgb1, rgb2) {
  const l1 = relativeLuminance(...rgb1);
  const l2 = relativeLuminance(...rgb2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const black = [0, 0, 0];

console.log('🎨 Testing BLACK text on various TEAL backgrounds:');

// Test original light mode teal
const originalTeal = oklchToRgb(0.55, 0.12, 180);
const originalContrast = contrastRatio(originalTeal, black);
const originalPasses = originalContrast >= 4.5 ? '✅ AA' : originalContrast >= 3.0 ? '⚠️ Large' : '❌';
console.log(`${originalPasses} Original light mode: oklch(0.55 0.12 180) = rgb(${originalTeal.join(', ')}) = ${originalContrast.toFixed(2)}:1`);

// Test the current problematic dark mode teal
const currentDarkTeal = oklchToRgb(0.70, 0.12, 180);
const currentContrast = contrastRatio(currentDarkTeal, black);
const currentPasses = currentContrast >= 4.5 ? '✅ AA' : currentContrast >= 3.0 ? '⚠️ Large' : '❌';
console.log(`${currentPasses} Current dark mode: oklch(0.70 0.12 180) = rgb(${currentDarkTeal.join(', ')}) = ${currentContrast.toFixed(2)}:1`);

console.log('\n🔧 Testing range of teal values with BLACK text:');
for (let lightness = 0.60; lightness <= 0.80; lightness += 0.05) {
  const testTeal = oklchToRgb(lightness, 0.12, 180);
  const contrast = contrastRatio(testTeal, black);
  const passes = contrast >= 4.5 ? '✅ AA' : contrast >= 3.0 ? '⚠️ Large' : '❌';
  console.log(`${passes} oklch(${lightness.toFixed(2)} 0.12 180) = rgb(${testTeal.join(', ')}) = ${contrast.toFixed(2)}:1`);
}

console.log('\n🎨 Testing with higher chroma for more vibrant colors:');
for (let lightness = 0.60; lightness <= 0.80; lightness += 0.05) {
  const testTeal = oklchToRgb(lightness, 0.15, 180);
  const contrast = contrastRatio(testTeal, black);
  const passes = contrast >= 4.5 ? '✅ AA' : contrast >= 3.0 ? '⚠️ Large' : '❌';
  console.log(`${passes} oklch(${lightness.toFixed(2)} 0.15 180) = rgb(${testTeal.join(', ')}) = ${contrast.toFixed(2)}:1`);
}

console.log('\n💡 Recommendations:');
console.log('1. Revert to a lighter teal (0.60-0.70 range)');
console.log('2. Change buttons to use BLACK text instead of WHITE text');
console.log('3. This will provide better contrast AND keep teal visible as text on dark backgrounds');