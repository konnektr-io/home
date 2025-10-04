// Verify the contrast improvements are working
import { chromium } from 'playwright';

async function verifyContrastFix() {
  console.log('🎨 Verifying contrast improvements...');
  
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    // Try port 3001 first, then 3000
    let url = 'http://localhost:3001';
    try {
      await page.goto(url);
    } catch (e) {
      url = 'http://localhost:3000';
      await page.goto(url);
    }
    
    console.log(`📄 Connected to ${url}`);
    
    // Get computed styles for teal buttons
    const buttonInfo = await page.evaluate(() => {
      const tealButtons = document.querySelectorAll('.bg-brand-teal');
      const results = [];
      
      for (const button of tealButtons) {
        const style = window.getComputedStyle(button);
        results.push({
          textContent: button.textContent?.trim().substring(0, 30) + '...',
          backgroundColor: style.backgroundColor,
          color: style.color,
          className: button.className
        });
      }
      
      return results;
    });
    
    console.log('🔍 Found teal buttons with these styles:');
    buttonInfo.forEach((info, index) => {
      console.log(`${index + 1}. "${info.textContent}"`);
      console.log(`   Background: ${info.backgroundColor}`);
      console.log(`   Text Color: ${info.color}`);
      console.log(`   Classes: ${info.className}`);
      console.log('');
    });
    
    // Check if we're using black text now
    const hasBlackText = buttonInfo.some(btn => 
      btn.color.includes('0, 0, 0') || btn.color === 'rgb(0, 0, 0)'
    );
    
    if (hasBlackText) {
      console.log('✅ SUCCESS: Buttons are now using black text on teal background!');
    } else {
      console.log('⚠️  WARNING: May still be using light text on teal background');
    }
    
    await browser.close();
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

verifyContrastFix();