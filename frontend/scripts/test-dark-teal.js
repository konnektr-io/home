// Test much darker teal values and alternative hues
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

const white = [255, 255, 255];

console.log('🔧 Testing MUCH darker teal values:');
for (let lightness = 0.15; lightness <= 0.30; lightness += 0.05) {
  const testTeal = oklchToRgb(lightness, 0.15, 180);
  const contrast = contrastRatio(testTeal, white);
  const passes = contrast >= 4.5 ? '✅ AA' : contrast >= 3.0 ? '⚠️ Large' : '❌';
  console.log(`${passes} oklch(${lightness.toFixed(2)} 0.15 180) = rgb(${testTeal.join(', ')}) = ${contrast.toFixed(2)}:1`);
}

console.log('\n🎨 Testing alternative hues that feel "teal-ish":');
const testHues = [160, 170, 175, 185, 190, 200]; // Around teal region
for (const hue of testHues) {
  const testColor = oklchToRgb(0.25, 0.15, hue);
  const contrast = contrastRatio(testColor, white);
  const passes = contrast >= 4.5 ? '✅ AA' : contrast >= 3.0 ? '⚠️ Large' : '❌';
  console.log(`${passes} oklch(0.25 0.15 ${hue}) = rgb(${testColor.join(', ')}) = ${contrast.toFixed(2)}:1`);
}

console.log('\n🔍 Testing the original brand colors from light mode:');
// Test original brand-blue for comparison
const brandBlue = oklchToRgb(0.35, 0.08, 240);
const blueContrast = contrastRatio(brandBlue, white);
const bluePasses = blueContrast >= 4.5 ? '✅ AA' : blueContrast >= 3.0 ? '⚠️ Large' : '❌';
console.log(`${bluePasses} brand-blue oklch(0.35 0.08 240) = rgb(${brandBlue.join(', ')}) = ${blueContrast.toFixed(2)}:1`);

console.log('\n💡 Best options:');
console.log('1. Use much darker teal: oklch(0.20 0.15 180) or similar');
console.log('2. Consider using brand-blue instead, which has better contrast');
console.log('3. Use white text on dark background or dark text on light background');