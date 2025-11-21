# Technical Documentation - Screenshot Capture

This folder contains the technical implementation for automated screenshot capture used in the quest-for-quality repository.

## Files

- **capture-screenshots.js** - Playwright-based screenshot automation script
- **package.json** - Node.js dependencies and npm scripts
- **package-lock.json** - Locked dependency versions

## How It Works

The capture script uses Playwright to automate browser navigation and screenshot capture:

1. Launches headless Chromium browser
2. Navigates to predefined URLs (login pages, error pages, etc.)
3. Waits for page load (networkidle strategy with 30s timeout)
4. Captures viewport screenshots (1400x900 resolution)
5. Saves PNG files to `/screenshots` folder

## Setup & Usage

### Installation

```bash
npm run setup
```

This installs Playwright and downloads Chromium browser (~100MB).

### Capture Screenshots

```bash
npm run capture
```

Or run directly:

```bash
node capture-screenshots.js
```

### Expected Results

- **Success rate**: ~55-60% (10 out of 18 URLs)
- **Common failures**: Timeouts on heavy JavaScript sites (Uber login, Chase pages, Stripe docs)
- **Output**: PNG files organized by product in `/screenshots` folder

## Configuration

Edit `capture-screenshots.js` to modify:

- **URLs**: Update the `screenshots` array
- **Viewport size**: Modify `viewport` in `newContext()`
- **Timeout**: Adjust `timeout` in `goto()` options
- **User agent**: Change `userAgent` string

## Troubleshooting

**Timeouts**: Some sites have aggressive bot detection or heavy JavaScript. Consider:
- Using alternative URLs
- Increasing timeout duration
- Adding custom wait strategies

**Blank screenshots**: Ensure pages fully load before capture. Use `waitUntil: 'networkidle'` or explicit waits.

**Large files**: GitHub has 100MB file size limit. Compress PNGs if needed:
```bash
pngquant screenshots/**/*.png --ext .png --force
```

## Architecture Decisions

- **Playwright over Puppeteer**: Better stability, cross-browser support
- **Sequential execution**: Avoids rate limiting, more respectful to target sites
- **1-second delays**: Polite scraping between requests
- **Networkidle strategy**: Ensures JavaScript-heavy pages fully render
- **Viewport screenshots only**: Faster than fullPage, adequate for testing

## Success Rate Analysis

**Successful captures** (10/18 - 56%):
- Airbnb: login, signup, help pages
- Amazon: signin, register, help pages, cart errors
- Uber: signup, help pages
- Stripe: login

**Failed captures** (8/18 - 44%):
- Uber: login (timeout)
- Stripe: signup, error docs (timeout)
- Chase: all pages (timeout - likely bot detection)

## Future Improvements

- Add retry logic for failed captures
- Implement cookie/session management for authenticated pages
- Add image optimization pipeline
- Support for mobile viewport screenshots
- Parallel execution with rate limiting
