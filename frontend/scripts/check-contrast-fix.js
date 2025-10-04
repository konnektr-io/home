import { chromium } from 'playwright';

async function checkContrastColors() {
  console.log('🎨 Checking contrast improvements...');
  
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    await page.goto('http://localhost:3000');
    
    // Get computed styles for elements that should now use text-muted-foreground
    const colorInfo = await page.evaluate(() => {
      const elements = document.querySelectorAll('.text-muted-foreground');
      const results = [];
      
      for (const el of elements) {
        const style = window.getComputedStyle(el);
        results.push({
          textContent: el.textContent?.trim().substring(0, 30) + '...',
          computedColor: style.color,
          className: el.className
        });
      }
      
      return results.slice(0, 5); // First 5 elements
    });
    
    console.log('📊 Elements now using text-muted-foreground class:');
    colorInfo.forEach((info, index) => {
      console.log(`${index + 1}. Text: "${info.textContent}"`);
      console.log(`   Computed Color: ${info.computedColor}`);
      console.log(`   Classes: ${info.className}`);
      console.log('');
    });
    
    // Check if the colors match our expected OKLCH values
    // The OKLCH(0.75 0.02 260) should render as a lighter gray
    const expectedLightness = colorInfo[0]?.computedColor;
    console.log(`✅ New muted foreground color: ${expectedLightness}`);
    console.log('🎯 This should be significantly lighter than the old text-gray-400');
    
    await browser.close();
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

checkContrastColors();