import { chromium } from 'playwright';

async function main() {
  console.log('🔍 Starting simple contrast test...');
  
  try {
    console.log('📊 Launching browser...');
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    console.log('🌐 Navigating to localhost:3000...');
    await page.goto('http://localhost:3000');
    
    console.log('📄 Page loaded, taking screenshot...');
    await page.screenshot({ path: 'debug-screenshot.png' });
    
    console.log('🎨 Getting computed styles for text elements...');
    const textElements = await page.evaluate(() => {
      const elements = [];
      const textNodes = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
      
      for (const el of textNodes) {
        if (el.textContent && el.textContent.trim()) {
          const style = window.getComputedStyle(el);
          elements.push({
            tagName: el.tagName,
            textContent: el.textContent.trim().substring(0, 50),
            color: style.color,
            backgroundColor: style.backgroundColor,
            className: el.className
          });
        }
      }
      
      return elements.slice(0, 10); // First 10 elements
    });
    
    console.log('📊 Found text elements:', textElements);
    
    await browser.close();
    console.log('✅ Test completed successfully');
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

main();