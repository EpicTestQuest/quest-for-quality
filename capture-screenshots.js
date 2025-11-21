#!/usr/bin/env node
/**
 * Screenshot Capture Script for Beta Testing
 *
 * This script uses Playwright to capture screenshots of various product pages
 * for the Wizzo beta testing checklist (Method 3: Image Upload)
 *
 * Usage:
 *   npm install playwright
 *   npx playwright install chromium
 *   node capture-screenshots.js
 */

const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

// Screenshot configuration based on GitHub issues/PRs
const screenshots = [
  // Uber Screenshots
  {
    name: 'uber-ride-booking',
    url: 'https://www.uber.com/us/en/ride/',
    folder: 'uber',
    description: 'Uber ride booking flow page'
  },
  {
    name: 'uber-safety-features',
    url: 'https://www.uber.com/us/en/about/safety/',
    folder: 'uber',
    description: 'Uber driver safety features page'
  },

  // Airbnb Screenshots
  {
    name: 'airbnb-search-results',
    url: 'https://www.airbnb.com/s/New-York--NY/homes',
    folder: 'airbnb',
    description: 'Airbnb search results with filters'
  },
  {
    name: 'airbnb-instant-book',
    url: 'https://www.airbnb.com/help/article/3179',
    folder: 'airbnb',
    description: 'Airbnb instant booking information'
  },

  // Amazon Screenshots
  {
    name: 'amazon-product-search',
    url: 'https://www.amazon.com/s?k=laptop',
    folder: 'amazon',
    description: 'Amazon product search results'
  },
  {
    name: 'amazon-product-reviews',
    url: 'https://www.amazon.com/Amazon-Kindle-Paperwhite/dp/B08KTZ8249',
    folder: 'amazon',
    description: 'Amazon product page with reviews'
  },

  // Stripe Screenshots
  {
    name: 'stripe-payment-form',
    url: 'https://stripe.com/docs/payments/accept-a-payment',
    folder: 'stripe',
    description: 'Stripe payment form documentation'
  },
  {
    name: 'stripe-dashboard',
    url: 'https://stripe.com/docs/dashboard',
    folder: 'stripe',
    description: 'Stripe dashboard overview'
  },

  // Chase Screenshots
  {
    name: 'chase-mobile-banking',
    url: 'https://www.chase.com/personal/mobile-online-banking',
    folder: 'chase',
    description: 'Chase mobile banking features'
  },
  {
    name: 'chase-zelle',
    url: 'https://www.chase.com/personal/zelle',
    folder: 'chase',
    description: 'Chase Zelle transfer page'
  },
];

async function captureScreenshot(browser, config) {
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });

  const page = await context.newPage();

  try {
    console.log(`📸 Capturing: ${config.name}`);

    // Navigate to URL
    await page.goto(config.url, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait a bit for any dynamic content
    await page.waitForTimeout(2000);

    // Take screenshot
    const screenshotPath = path.join(__dirname, 'screenshots', config.folder, `${config.name}.png`);
    await page.screenshot({
      path: screenshotPath,
      fullPage: false
    });

    console.log(`   ✅ Saved: ${screenshotPath}`);
    return { success: true, path: screenshotPath };

  } catch (error) {
    console.error(`   ❌ Failed: ${config.name} - ${error.message}`);
    return { success: false, error: error.message };

  } finally {
    await context.close();
  }
}

async function main() {
  console.log('🚀 Starting Screenshot Capture for Beta Testing\n');

  // Ensure screenshot directories exist
  const folders = ['uber', 'airbnb', 'amazon', 'stripe', 'chase'];
  for (const folder of folders) {
    const dir = path.join(__dirname, 'screenshots', folder);
    await fs.mkdir(dir, { recursive: true });
  }

  // Launch browser
  console.log('🌐 Launching browser...\n');
  const browser = await chromium.launch({
    headless: true
  });

  const results = [];

  // Capture all screenshots sequentially
  for (const config of screenshots) {
    const result = await captureScreenshot(browser, config);
    results.push({ ...config, ...result });

    // Small delay between requests to be respectful
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  await browser.close();

  // Print summary
  console.log('\n📊 Summary:');
  console.log(`   Total: ${results.length}`);
  console.log(`   Success: ${results.filter(r => r.success).length}`);
  console.log(`   Failed: ${results.filter(r => !r.success).length}`);

  if (results.some(r => !r.success)) {
    console.log('\n❌ Failed screenshots:');
    results.filter(r => !r.success).forEach(r => {
      console.log(`   - ${r.name}: ${r.error}`);
    });
  }

  console.log('\n✅ Screenshot capture complete!');
  console.log('\n📋 Next steps:');
  console.log('   1. Review screenshots in ./screenshots/ folder');
  console.log('   2. git add screenshots/');
  console.log('   3. git commit -m "Add beta testing screenshots"');
  console.log('   4. git push origin main');
}

main().catch(console.error);
