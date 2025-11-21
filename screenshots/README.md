# Beta Testing Screenshots

This folder contains screenshots captured for Wizzo's beta testing **Method 3: Create with Image Upload**.

## Purpose

These screenshots are used to test Wizzo's image-based test case generation feature. Beta testers can upload these screenshots in Slack DMs with Wizzo to see how the AI generates test cases from visual context.

## Structure

```
screenshots/
├── uber/           # Uber ride-sharing app screenshots
├── airbnb/         # Airbnb vacation rental screenshots
├── amazon/         # Amazon e-commerce screenshots
├── stripe/         # Stripe payment processing screenshots
└── chase/          # Chase mobile banking screenshots
```

## Screenshot Inventory

### 🚗 Uber
- `uber-ride-booking.png` - Ride booking flow page
- `uber-safety-features.png` - Driver safety features page

### 🏠 Airbnb
- `airbnb-search-results.png` - Search results with filters
- `airbnb-instant-book.png` - Instant booking information

### 📦 Amazon
- `amazon-product-search.png` - Product search results for "laptop"
- `amazon-product-reviews.png` - Product page with reviews and ratings

### 💳 Stripe
- `stripe-payment-form.png` - Payment form documentation
- `stripe-dashboard.png` - Dashboard overview

### 🏦 Chase
- `chase-mobile-banking.png` - Mobile banking features
- `chase-zelle.png` - Zelle transfer page

## Related GitHub Issues/PRs

These screenshots correspond to the following issues and PRs in the quest-for-quality repository:

- **Uber**: Issue #1 (SMS verification), Issue #11 (booking freeze), Issue #16 (safety features), PR #55 (surge pricing)
- **Airbnb**: Issue #2 (social login), Issue #7 (search filters), Issue #12 (instant book filter), PR #56 (calendar sync)
- **Amazon**: Issue #3 (1-click checkout), Issue #8 (reviews), Issue #13 (PII in URL), Issue #23 (search relevance)
- **Stripe**: Issue #4 (fraud detection), Issue #10 (SEPA payments), Issue #19 (Apple/Google Pay), PR #54 (PCI compliance)
- **Chase**: Issue #5 (Zelle), Issue #9 (check deposit OCR), Issue #20 (name validation), Issue #24 (check photo attempts)

## How to Regenerate

If you need to capture new screenshots or update existing ones:

```bash
# Install dependencies
npm run setup

# Capture all screenshots
npm run capture
```

The script will automatically:
1. Create the directory structure
2. Navigate to each URL
3. Wait for page load
4. Capture screenshots at 1400x900 resolution
5. Save to the appropriate folder

## Usage in Wizzo Beta Testing

1. Go to Wizzo Home Tab → Test Scrolls subtab
2. Click **"New Chat"** button
3. Upload one of these screenshots in the DM
4. Type: "Generate test cases for this screen focusing on [focus areas]"
5. Wizzo will analyze the image and generate contextual test cases

## Notes

- Screenshots are captured using Playwright with a standard viewport (1400x900)
- User agent is set to Chrome on macOS for consistent rendering
- All screenshots are from public-facing pages (no authentication required)
- Screenshots may become outdated as websites change - regenerate periodically
