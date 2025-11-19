# Quest for Quality - Complete Inventory

**Repository:** https://github.com/EpicTestQuest/quest-for-quality
**Created:** 2025-11-19
**Total Items:** 56 (25 Issues + 31 PRs)

---

## Quick Stats

| Metric | Count |
|--------|-------|
| **GitHub Issues** | 25 |
| **Pull Requests** | 31 |
| **Products** | 5 (Uber, Airbnb, Amazon, Stripe, Chase) |
| **Features** | 16 (across all products) |
| **Jira-Linked Issues** | 3 (#4, #5, #9) |
| **Minimal PRs** | 10 (32%) |
| **Moderate PRs** | 12 (39%) |
| **Verbose PRs** | 9 (29%) |

---

## All GitHub Issues (25)

| # | Product | Title | Type | Labels | Jira |
|---|---------|-------|------|--------|------|
| 1 | Uber | SMS verification fails for international numbers | Bug | uber, bug, phone-verification, priority-high | - |
| 2 | Airbnb | Social login redirect loop on Safari | Bug | airbnb, bug, authentication, browser-specific | - |
| 3 | Amazon | 1-Click Checkout charges wrong saved card | Bug | amazon, bug, payments, priority-critical | - |
| 4 | Stripe | Fraud detection blocking legitimate VPN users | Enhancement | stripe, enhancement, fraud-detection, false-positives | ✅ SCRUM-51,52,53 |
| 5 | Chase | Zelle transfer fails silently with no error | Bug | chase, bug, zelle, error-handling | ✅ SCRUM-57,58,59 |
| 6 | Uber | Add biometric authentication for ride confirmations | Enhancement | uber, enhancement, safety, authentication | - |
| 7 | Airbnb | Search filters reset after navigating back | Bug | airbnb, bug, search, ux | - |
| 8 | Amazon | Product reviews show wrong star rating | Bug | amazon, bug, reviews, data-integrity | - |
| 9 | Chase | Mobile check deposit fails for handwritten amounts | Bug | chase, bug, mobile-deposit, ocr | ✅ SCRUM-61,62,63 |
| 10 | Stripe | Add support for SEPA Direct Debit recurring | Enhancement | stripe, enhancement, payments, europe | - |
| 11 | Uber | Ride booking freezes on payment selection (Android) | Bug | uber, bug, android, priority-high, booking | - |
| 12 | Airbnb | Add "Instant Book" filter to search results | Enhancement | airbnb, enhancement, search, instant-booking | - |
| 13 | Amazon | 1-Click Checkout exposes address data in URL | Security | amazon, bug, security, priority-critical, pii | - |
| 14 | Airbnb | Host messaging delays exceed 2 minutes peak hours | Bug | airbnb, bug, performance, messaging, priority-high | - |
| 15 | Uber | Account registration success but can't log in | Bug | uber, bug, registration, priority-high, auth | - |
| 16 | Uber | Driver safety features not visible in night mode | Bug | uber, bug, safety, accessibility, priority-high | - |
| 17 | Airbnb | Search filters don't persist switching to map | Bug | airbnb, bug, search, ux, priority-medium | - |
| 18 | Amazon | Add "Verified Purchase" badge to reviews | Enhancement | amazon, enhancement, reviews, trust-safety | - |
| 19 | Stripe | Add support for Apple Pay and Google Pay | Enhancement | stripe, enhancement, payments, mobile | - |
| 20 | Chase | Zelle validation fails for hyphenated names | Bug | chase, bug, zelle, validation, priority-medium | - |
| 21 | Uber | Add real-time driver location updates | Enhancement | uber, enhancement, booking, real-time | - |
| 22 | Airbnb | Instant booking email has wrong check-in date | Bug | airbnb, bug, instant-booking, email, priority-high | - |
| 23 | Amazon | Product catalog search returns irrelevant results | Bug | amazon, bug, search, catalog, priority-high | - |
| 24 | Chase | Mobile deposit requires 3+ photo attempts | Bug | chase, bug, mobile-deposit, ux, priority-medium | - |
| 25 | Stripe | Add webhook retry configuration dashboard | Enhancement | stripe, enhancement, webhooks, dashboard | - |

---

## All Pull Requests (31)

### Minimal PRs (10) - Sparse Descriptions

| # | Product | Title | Body Length | Branch | Source |
|---|---------|-------|-------------|--------|--------|
| 26 | Uber | Fix international SMS | 27 chars | fix/uber-sms-international | Issue #1 |
| 27 | Chase | Update Zelle validation | 68 chars | fix/chase-zelle-names | Issue #20 |
| 28 | Airbnb | Fixed filter persistence | 45 chars | fix/airbnb-filters | Issue #17 |
| 29 | Amazon | Fix review ratings | 28 chars | fix/amazon-star-rating | Hot Fix |
| 30 | Stripe | Fix payment timeout | 41 chars | hotfix/stripe-timeout | Hot Fix |
| 31 | Uber | Fix app crash on ride confirm | 7 chars | hotfix/uber-crash | Hot Fix |
| 32 | Chase | Better error messages for check deposit | 39 chars | fix/chase-mobile-deposit | Issue #24 |
| 33 | Airbnb | Social login buttons | 63 chars | feature/airbnb-social-login | Jira |
| 34 | Amazon | Prevent double charges | 22 chars | hotfix/amazon-checkout | Hot Fix |
| 35 | Stripe | Webhook retry logic | 30 chars | feature/stripe-webhooks | Jira |

**Characteristics:**
- Body: 7-68 characters (1-2 sentences)
- No testing notes
- No file lists
- Minimal or no context

---

### Moderate PRs (12) - Normal Developer Style

| # | Product | Title | Body Length | Branch | Source |
|---|---------|-------|-------------|--------|--------|
| 36 | Uber | Add Face ID/Touch ID for ride confirmation | 389 chars | feature/uber-biometric | Issue #6 |
| 37 | Airbnb | Fix instant booking date calculation | 324 chars | fix/airbnb-date-bug | Issue #22 |
| 38 | Amazon | Add verified purchase badge to reviews | 278 chars | feature/amazon-verified-badge | Issue #18 |
| 39 | Stripe | Add Apple Pay support | 298 chars | feature/stripe-apple-pay | Issue #19 |
| 40 | Chase | Zelle transfer form improvements | 312 chars | feature/chase-zelle-transfer | Jira SCRUM-58 |
| 41 | Uber | Fix Android freeze on payment selection | 267 chars | fix/uber-booking-freeze | Issue #11 |
| 42 | Airbnb | Optimize messaging performance | 345 chars | fix/airbnb-messaging-delay | Issue #14 |
| 43 | Amazon | Improve search relevance algorithm | 289 chars | feature/amazon-search-improvements | Issue #23 |
| 44 | Stripe | Fix refund processing for failed payments | 156 chars | hotfix/stripe-refund | Hot Fix |
| 45 | Chase | Improve check photo quality validation | 301 chars | feature/chase-check-quality | Issue #9 |
| 46 | Uber | Real-time driver location updates | 287 chars | feature/uber-realtime-tracking | Issue #21 |
| 47 | Airbnb | Add Instant Book filter to search | 234 chars | feature/airbnb-instant-book-filter | Issue #12 |

**Characteristics:**
- Body: 156-389 characters (2-4 paragraphs)
- Lists what changed and files
- Some testing notes
- References issues/Jira

---

### Verbose PRs (9) - AI-Generated Walls of Text

| # | Product | Title | Body Length | Branch | Source |
|---|---------|-------|-------------|--------|--------|
| 48 | Amazon | Security enhancement for 1-Click Checkout | ~4,000 chars | feature/amazon-1click-security | Issue #13 |
| 49 | Stripe | ML-powered fraud detection enhancements | ~3,800 chars | feature/stripe-fraud-ml | Issue #4 |
| 50 | Uber | Comprehensive accessibility for night mode | ~4,200 chars | feature/uber-night-mode-a11y | Issue #16 |
| 51 | Airbnb | Real-time messaging infrastructure WebSocket | ~5,100 chars | feature/airbnb-messaging-ws | Jira |
| 52 | Chase | Account aggregation API integration | ~4,900 chars | feature/chase-account-aggregation | Jira |
| 53 | Amazon | Personalized product recommendation ML | ~5,300 chars | feature/amazon-recommendation-engine | Jira |
| 54 | Stripe | PCI DSS 4.0 compliance infrastructure | ~5,400 chars | feature/stripe-pci-compliance | Jira |
| 55 | Uber | Dynamic surge pricing algorithm v3 | ~5,200 chars | feature/uber-surge-pricing | Jira |
| 56 | Airbnb | Multi-platform calendar synchronization | ~5,000 chars | feature/airbnb-calendar-sync | Jira |

**Characteristics:**
- Body: 3,800-5,400 characters (walls of text)
- Multiple sections: Executive Summary, Context, Architecture, Files, Testing, Performance, Rollback, Monitoring, Compliance
- Decision matrices and benchmarks
- Load testing results
- Compliance checklists

---

## Products & Features

### Uber (Mobile App - Mobility)

**Features (4):**
1. Driver & Rider Safety *(Product Area)*
2. Ride Booking Flow *(Specific)*
3. Account Registration & Onboarding *(Product Area)*
4. Phone Number Verification *(Specific)*

**Issues:** #1, #6, #11, #15, #16, #21
**PRs:** #26, #31, #36, #41, #46, #50, #55

---

### Airbnb (Web App - Travel & Hospitality)

**Features (5):**
1. Search & Discovery *(Product Area)*
2. Instant Booking *(Specific)*
3. Host & Guest Messaging *(Product Area)*
4. User Authentication *(Product Area)*
5. Social Login (Google/Facebook/Apple) *(Specific)*

**Issues:** #2, #7, #12, #14, #17, #22
**PRs:** #28, #33, #37, #42, #47, #51, #56

---

### Amazon (Web App - eCommerce)

**Features (3):**
1. Product Catalog *(Product Area)*
2. 1-Click Checkout *(Specific)*
3. Product Reviews & Ratings *(Product Area)*

**Issues:** #3, #8, #13, #18, #23
**PRs:** #29, #34, #38, #43, #48, #53

---

### Stripe (API - Fintech)

**Features (2):**
1. Payment Processing *(Product Area)*
2. Fraud Detection & Prevention *(Specific)*

**Issues:** #4, #10, #19, #25
**PRs:** #30, #35, #39, #44, #49, #54

---

### Chase Banking (Mobile App - Fintech)

**Features (2):**
1. Zelle Instant Transfers *(Specific)*
2. Mobile Check Deposit *(Specific)*

**Issues:** #5, #9, #20, #24
**PRs:** #27, #32, #40, #45, #52

---

## Label Reference

**Product Labels (all gray #ededed):**
- `uber` - Uber product
- `airbnb` - Airbnb product
- `amazon` - Amazon product
- `stripe` - Stripe product
- `chase` - Chase product

**Type Labels:**
- `bug` (red #d73a4a) - Something isn't working
- `enhancement` (blue #a2eeef) - New feature or request
- `feature` (green #0e8a16) - Major new feature
- `security` - Security-related
- `ml` - Machine learning

**Priority Labels:**
- `priority-critical` - Immediate attention
- `priority-high` - High priority
- `priority-medium` - Medium priority

**Special Labels:**
- `qa-review-needed` (gray #ededed) - **ALL 31 PRs**
- `jira-linked` - Issues #4, #5, #9
- `accessibility` - Accessibility improvements
- `performance` - Performance optimization

---

## Jira Integration

**Jira Project:** SCRUM (https://epictestquest.atlassian.net)

**Linked Issues:**

**Issue #4 → Stripe Fraud Detection**
- SCRUM-51: Stripe - Fraud Detection
- SCRUM-52: Integrate 3D Secure authentication flow
- SCRUM-53: Configure Radar fraud rules

**Issue #5 → Chase Zelle Transfers**
- SCRUM-57: Chase - Zelle Instant Transfers
- SCRUM-58: Build Zelle transfer form with recipient lookup
- SCRUM-59: Fix transfer confirmation email bug

**Issue #9 → Chase Mobile Check Deposit**
- SCRUM-61: Chase - Mobile Check Deposit
- SCRUM-62: Implement check photo capture with quality validation
- SCRUM-63: Add deposit confirmation and funds availability notification

---

## PR Source Breakdown

**From GitHub Issues (12 PRs - 39%):**
#26, #27, #28, #36, #37, #38, #39, #41, #42, #43, #45, #46, #47

**From Jira Stories (10 PRs - 32%):**
#33, #35, #40, #51, #52, #53, #54, #55, #56
(Note: Some reference generic "SCRUM-XX" to simulate Jira workflow)

**Hot Fixes - No Link (9 PRs - 29%):**
#29, #30, #31, #34, #44
Plus 4 others without explicit references

---

## Technical Coverage

**API/Backend Changes (~10 PRs):**
Fraud detection, webhooks, payment processing, surge pricing, PCI compliance

**Frontend-Only (~8 PRs):**
UI components, search filters, social login, verified badge, instant book filter

**Full-Stack (~9 PRs):**
Biometric auth, messaging performance, real-time tracking, calendar sync

**Infrastructure/Config (~4 PRs):**
WebSocket infrastructure, account aggregation, ML pipelines, security enhancements

---

## Quick Access URLs

**Repository:**
https://github.com/EpicTestQuest/quest-for-quality

**All Issues:**
https://github.com/EpicTestQuest/quest-for-quality/issues

**All PRs:**
https://github.com/EpicTestQuest/quest-for-quality/pulls

**Documentation:**
- [README.md](README.md) - Beta testing introduction
- [BETA_TESTING_SETUP_DOCUMENTATION.md](BETA_TESTING_SETUP_DOCUMENTATION.md) - Complete setup guide
- [INVENTORY.md](INVENTORY.md) - This file

---

## For Beta Testers

### Getting Started

1. **Browse Issues:** https://github.com/EpicTestQuest/quest-for-quality/issues
2. **Browse PRs:** https://github.com/EpicTestQuest/quest-for-quality/pulls
3. **Use Wizzo AI in Slack** to generate test cases
4. **Practice with different PR types:**
   - Minimal PRs (#26-35) - Fill in missing context
   - Moderate PRs (#36-47) - Enhance existing docs
   - Verbose PRs (#48-56) - Extract key scenarios

### Tips for Testing

**Minimal PRs:** Great for practicing when documentation is sparse
- Focus: How well can Wizzo infer test scenarios?
- Example: PR #31 "Fix app crash" - only 7 characters!

**Moderate PRs:** Realistic everyday scenarios
- Focus: How well does Wizzo enhance typical PR descriptions?
- Example: PR #36 "Add Face ID" - includes what/why/files

**Verbose PRs:** Practice extracting signal from noise
- Focus: How well does Wizzo distill 5000+ chars into test cases?
- Example: PR #48 "Security enhancement" - massive compliance doc

### Products to Focus On

- **Uber:** Mobile app, safety-critical features
- **Airbnb:** Web app, marketplace flows
- **Amazon:** eCommerce, high transaction volume
- **Stripe:** Payment API, security-critical
- **Chase:** Banking, regulatory compliance

---

**Last Updated:** 2025-11-19
**Maintainer:** Christine Pinto
