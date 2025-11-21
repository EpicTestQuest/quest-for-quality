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

// Screenshot configuration - Focus on login, registration, and error states
const screenshots = [
  // Uber Screenshots - Login/Registration/Errors
  {
    name: 'uber-login',
    url: 'https://auth.uber.com/v2/?breeze_local_zone=dca26',
    folder: 'uber',
    description: 'Uber login page'
  },
  {
    name: 'uber-signup',
    url: 'https://www.uber.com/signup',
    folder: 'uber',
    description: 'Uber signup/registration page'
  },
  {
    name: 'uber-help-errors',
    url: 'https://help.uber.com/riders/article/i-was-charged-an-incorrect-amount?nodeId=9e657cf7-a35e-449b-9e49-4b222d5aa172',
    folder: 'uber',
    description: 'Uber error help page - payment issues'
  },

  // Airbnb Screenshots - Login/Registration/Errors
  {
    name: 'airbnb-login',
    url: 'https://www.airbnb.com/login',
    folder: 'airbnb',
    description: 'Airbnb login page'
  },
  {
    name: 'airbnb-signup',
    url: 'https://www.airbnb.com/signup',
    folder: 'airbnb',
    description: 'Airbnb signup/registration page'
  },
  {
    name: 'airbnb-help-errors',
    url: 'https://www.airbnb.com/help/article/1318',
    folder: 'airbnb',
    description: 'Airbnb error help - booking issues'
  },

  // Amazon Screenshots - Login/Registration/Errors
  {
    name: 'amazon-signin',
    url: 'https://www.amazon.com/ap/signin',
    folder: 'amazon',
    description: 'Amazon sign-in page'
  },
  {
    name: 'amazon-register',
    url: 'https://www.amazon.com/ap/register',
    folder: 'amazon',
    description: 'Amazon create account page'
  },
  {
    name: 'amazon-help-errors',
    url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GYF8VYURLVS3SWPJ',
    folder: 'amazon',
    description: 'Amazon error help - payment declined'
  },
  {
    name: 'amazon-cart-error',
    url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=G3W8E5GYQSVMSCMV',
    folder: 'amazon',
    description: 'Amazon shopping cart errors help page'
  },

  // Stripe Screenshots - Integration/Registration/Errors
  {
    name: 'stripe-signup',
    url: 'https://dashboard.stripe.com/register',
    folder: 'stripe',
    description: 'Stripe signup/registration page'
  },
  {
    name: 'stripe-login',
    url: 'https://dashboard.stripe.com/login',
    folder: 'stripe',
    description: 'Stripe login page'
  },
  {
    name: 'stripe-error-codes',
    url: 'https://stripe.com/docs/error-codes',
    folder: 'stripe',
    description: 'Stripe API error codes documentation'
  },
  {
    name: 'stripe-payment-errors',
    url: 'https://stripe.com/docs/declines',
    folder: 'stripe',
    description: 'Stripe payment declines and errors'
  },

  // Chase Screenshots - Login/Registration/Errors
  {
    name: 'chase-login',
    url: 'https://secure.chase.com/web/auth/dashboard',
    folder: 'chase',
    description: 'Chase online banking login'
  },
  {
    name: 'chase-enroll',
    url: 'https://www.chase.com/personal/online-banking',
    folder: 'chase',
    description: 'Chase online banking enrollment'
  },
  {
    name: 'chase-help-errors',
    url: 'https://www.chase.com/personal/online-banking/frequently-asked-questions',
    folder: 'chase',
    description: 'Chase error help - FAQ page'
  },
  {
    name: 'chase-security',
    url: 'https://www.chase.com/personal/online-banking/security-center',
    folder: 'chase',
    description: 'Chase security center - fraud/error prevention'
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
