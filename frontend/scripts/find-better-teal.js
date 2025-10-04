// Convert OKLCH to RGB and calculate contrast ratio
function oklchToRgb(l, c, h) {
  // Convert hue to radians
  const hRad = (h * Math.PI) / 180;
  
  // Convert from OKLCH to OKLab
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);
  
  // Convert from OKLab to XYZ (simplified approximation)
  const x = l + 0.3963377774 * a + 0.2158037573 * b;
  const y = l - 0.1055613458 * a - 0.0638541728 * b;
  const z = l - 0.0894841775 * a - 1.2914855480 * b;
  
  // Convert from XYZ to RGB (simplified)
  let r = 3.2406 * x - 1.5372 * y - 0.4986 * z;
  let g = -0.9689 * x + 1.8758 * y + 0.0415 * z;
  let bl = 0.0557 * x - 0.2040 * y + 1.0570 * z;
  
  // Gamma correction
  r = r > 0.0031308 ? 1.055 * Math.pow(r, 1/2.4) - 0.055 : 12.92 * r;
  g = g > 0.0031308 ? 1.055 * Math.pow(g, 1/2.4) - 0.055 : 12.92 * g;
  bl = bl > 0.0031308 ? 1.055 * Math.pow(bl, 1/2.4) - 0.055 : 12.92 * bl;
  
  // Clamp to 0-1 range and convert to 0-255
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

const white = [255, 255, 255];

console.log('🎨 Finding DARKER brand-teal for better contrast with WHITE text:');
console.log('(We need darker colors, not lighter ones!)');

// Test darker values with current chroma
console.log('\n🔧 Testing darker values with current chroma (0.12):');
for (let lightness = 0.30; lightness <= 0.50; lightness += 0.05) {
  const testTeal = oklchToRgb(lightness, 0.12, 180);
  const contrast = contrastRatio(testTeal, white);
  const passes = contrast >= 4.5 ? '✅ AA' : contrast >= 3.0 ? '⚠️ Large' : '❌';
  console.log(`${passes} oklch(${lightness.toFixed(2)} 0.12 180) = rgb(${testTeal.join(', ')}) = ${contrast.toFixed(2)}:1`);
}

// Test with higher chroma for more vibrant color
console.log('\n🎨 Testing with higher chroma (0.15) for more vibrant colors:');
for (let lightness = 0.30; lightness <= 0.50; lightness += 0.05) {
  const testTeal = oklchToRgb(lightness, 0.15, 180);
  const contrast = contrastRatio(testTeal, white);
  const passes = contrast >= 4.5 ? '✅ AA' : contrast >= 3.0 ? '⚠️ Large' : '❌';
  console.log(`${passes} oklch(${lightness.toFixed(2)} 0.15 180) = rgb(${testTeal.join(', ')}) = ${contrast.toFixed(2)}:1`);
}

// Test the original light mode value
console.log('\n🔍 Original light mode brand-teal: oklch(0.55 0.12 180)');
const originalTeal = oklchToRgb(0.55, 0.12, 180);
const originalContrast = contrastRatio(originalTeal, white);
const originalPasses = originalContrast >= 4.5 ? '✅ AA' : originalContrast >= 3.0 ? '⚠️ Large' : '❌';
console.log(`${originalPasses} oklch(0.55 0.12 180) = rgb(${originalTeal.join(', ')}) = ${originalContrast.toFixed(2)}:1`);

console.log('\n💡 Recommendation: Use a darker teal (lightness 0.35-0.45) for better contrast!');