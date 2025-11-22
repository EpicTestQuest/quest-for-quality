# Quest for Quality - Beta Testing Setup Documentation

**Created:** 2025-11-19
**Repository:** https://github.com/EpicTestQuest/quest-for-quality
**Purpose:** Documentation for setting up realistic beta testing environment for Wizzo AI

---

## Table of Contents

1. [Overview](#overview)
2. [Key Decisions & Rationale](#key-decisions--rationale)
3. [Implementation Techniques](#implementation-techniques)
4. [Complete Inventory](#complete-inventory)
5. [Lessons Learned](#lessons-learned)
6. [Replication Guide for Future Phases](#replication-guide-for-future-phases)

---

## Overview

This document captures the complete process of setting up a realistic beta testing environment with 25 GitHub Issues and 31 Pull Requests across 5 products and 16 features, designed to showcase Wizzo AI's capabilities across different documentation scenarios.

### Goals Achieved
✅ Create diverse testing scenarios (minimal, moderate, verbose PRs)
✅ Realistic product/feature hierarchy (5 products, 16 features)
✅ Mixed sources (GitHub Issues, Jira stories, hot fixes)
✅ Easy-to-understand changes for beta testers
✅ All open and labeled for QA review

---

## Key Decisions & Rationale

### Decision 1: PR Description Variety (The Differentiator)

**Decision:** Create 3 distinct PR description styles instead of uniform descriptions.

**Rationale:**
- **Problem:** If all PRs have perfect descriptions with testing notes, beta testers won't see Wizzo's value
- **Solution:** Vary descriptions to showcase Wizzo's adaptability:
  - **Sparse (10 PRs):** 1-2 sentences, no context → Shows Wizzo filling gaps
  - **Moderate (12 PRs):** Normal dev style → Shows Wizzo enhancing workflows
  - **Verbose (9 PRs):** AI-generated walls of text → Shows Wizzo extracting signal from noise

**Impact:** This became the key value proposition - demonstrating Wizzo handles real-world scenarios where documentation quality varies wildly.

**Example Contrast:**
```markdown
# Sparse PR
Fixed it. See code.

# Verbose PR
## Executive Summary
This PR represents a comprehensive architectural overhaul...
[4,000+ words with decision matrices, benchmarks, compliance checklists]
```

---

### Decision 2: Feature Hierarchy Strategy

**Decision:** Create both "Product Areas" (broad) and "Specific Features" (narrow) as features.

**Rationale:**
- **User Request:** "features should also show projects or product areas"
- **Goal:** Demonstrate organizational flexibility
- **Implementation:**
  - 7 Product Areas: "Search & Discovery", "User Authentication", "Payment Processing"
  - 9 Specific Features: "Instant Booking", "Zelle Instant Transfers", "1-Click Checkout"

**Impact:** Shows Wizzo can handle different organizational structures.

**Example:**
```
Product: Airbnb
├── Feature (Area): Search & Discovery
├── Feature (Specific): Instant Booking
├── Feature (Area): User Authentication
└── Feature (Specific): Social Login (Google/Facebook/Apple)
```

---

### Decision 3: Jira Integration Approach

**Decision:** Link some GitHub Issues to Jira stories via comments (not all).

**Rationale:**
- **Reality:** Not all issues have corresponding Jira tickets
- **Workflow:** Add Jira story links as GitHub Issue comments with "jira-linked" label
- **Distribution:** 3 of 25 Issues linked to Jira (realistic 12%)

**Technical Implementation:**
```bash
# Add Jira link as comment
curl -X POST .../issues/5/comments \
  -d '{"body": "**Related Jira Stories:**\n- [SCRUM-57](...)\n- [SCRUM-58](...)}"'

# Add jira-linked label
curl -X PATCH .../issues/5 \
  -d '{"labels": ["bug", "chase", "zelle", "jira-linked"]}'
```

**Why Comments, Not Issue Description:**
- More realistic (devs add context iteratively)
- Easier to identify linked vs non-linked visually
- Mimics real-world workflow

---

### Decision 4: PR Source Distribution

**Decision:** Create PRs from 3 sources: GitHub Issues (12), Jira stories (10), Hot fixes (9).

**Rationale:**
- **Realism:** Real projects have multiple sources of work
- **Variety:** Shows Wizzo handles different contexts
- **Distribution Logic:**
  - **GitHub Issues (40%):** Direct bug fixes and enhancements from Issue tracker
  - **Jira Stories (33%):** Feature work tracked in project management tool
  - **Hot Fixes (30%):** Urgent production issues without prior tickets

**Identification Pattern:**
```markdown
# From GitHub Issue
Body: "Fixes #13" or "Related to #13"

# From Jira
Body: "From Jira SCRUM-58" or "Closes SCRUM-XX"

# Hot Fix
Body: No issue reference, title often starts with "hotfix/"
```

---

### Decision 5: Complexity Distribution

**Decision:** 2-3 complex PRs, rest simple and focused.

**Rationale:**
- **User Requirement:** "shouldn't be too complicated... easy to follow"
- **Beta Testing Goal:** Users should quickly understand what changed to practice test generation
- **Distribution:**
  - **2-3 Complex:** Full-stack with multiple files (biometric auth, WebSocket messaging, ML fraud detection)
  - **28 Simple:** Focused changes (1-3 files, single feature area)

**Complex PR Characteristics:**
- 5+ files changed
- Multiple layers (frontend + backend + database)
- Integration points
- Example: Biometric Auth (provider, screen, utils, config, iOS/Android dependencies)

**Simple PR Characteristics:**
- 1-3 files changed
- Single concern
- Example: Fix Zelle name validation (1 file: validators/name.js)

---

### Decision 6: Technical Area Mix

**Decision:** Distribute PRs across different technical layers.

**Distribution:**
- **API/Backend (10 PRs):** Database queries, business logic, API endpoints
- **Frontend-only (8 PRs):** React components, styling, UI interactions
- **Full-stack (9 PRs):** Frontend + backend + API changes
- **Infrastructure (4 PRs):** Docker, Kubernetes, database migrations

**Rationale:**
- Shows Wizzo can generate test cases for all technical areas
- Testers practice different testing types:
  - API testing (Postman, curl)
  - UI testing (Selenium, Playwright)
  - Integration testing (E2E flows)
  - Database testing (migrations, queries)

**Label Strategy:**
```json
{
  "backend": ["stripe-timeout", "fraud-detection", "webhooks"],
  "frontend": ["search-filters", "social-login", "verified-badge"],
  "full-stack": ["biometric-auth", "messaging-performance"],
  "infrastructure": ["pci-compliance", "websocket-infra"]
}
```

---

### Decision 7: Repository Structure

**Decision:** Use CHANGES.md files instead of actual code changes.

**Rationale:**
- **Speed:** Creating 31 branches with realistic code changes would take days
- **Clarity:** CHANGES.md clearly documents what changed without code complexity
- **Focus:** Beta testers focus on test case generation, not code review
- **Example:**
```markdown
## Fix: International SMS Verification

### Changed Files:
- src/utils/validators/phone.js

### Changes:
Updated phone validation regex to accept international format (+44, +91, etc.)
```

**Benefits:**
- Quick iteration (create branch in seconds)
- Clear diff view in GitHub
- Easy to understand for non-developers
- Professional appearance

---

## Implementation Techniques

### Technique 1: Batch PR Creation Script

**Challenge:** Creating 31 PRs manually would be error-prone and time-consuming.

**Solution:** Bash script with case statements and loop structure.

```bash
#!/bin/bash
REPO_DIR="/tmp/quest-for-quality"
REPO="EpicTestQuest/quest-for-quality"
GH_TOKEN="ghp_xxx"

create_pr() {
    local branch_name=$1
    local pr_title=$2
    local pr_body=$3
    local labels=$4

    # Git operations
    cd $REPO_DIR
    git checkout main
    git pull origin main
    git checkout -b "$branch_name"
    echo "$change_desc" > CHANGES.md
    git add CHANGES.md
    git commit -m "$pr_title"
    git push origin "$branch_name"

    # Create PR via API
    pr_response=$(curl -X POST "https://api.github.com/repos/$REPO/pulls" \
      -H "Authorization: Bearer $GH_TOKEN" \
      -d "{\"title\": \"$pr_title\", \"body\": \"$pr_body\", \"head\": \"$branch_name\", \"base\": \"main\"}")

    pr_number=$(echo "$pr_response" | grep -o '"number": [0-9]*' | head -1 | grep -o '[0-9]*')

    # Add labels
    curl -X PATCH "https://api.github.com/repos/$REPO/issues/$pr_number" \
      -H "Authorization: Bearer $GH_TOKEN" \
      -d "{\"labels\": $labels}"
}

# Loop through PRs
for i in {1..10}; do
    case $i in
        1) BRANCH="fix/uber-sms" TITLE="[Uber] Fix SMS" ... ;;
        2) BRANCH="fix/chase-zelle" TITLE="[Chase] Zelle" ... ;;
    esac
    create_pr "$BRANCH" "$TITLE" "$BODY" "$LABELS"
done
```

**Key Techniques:**
- **Function encapsulation:** Reusable create_pr function
- **Error handling:** Check pr_number before adding labels
- **Rate limiting:** Sleep 2-3 seconds between PRs
- **Logging:** Echo PR numbers as created

---

### Technique 2: Python for Complex JSON Bodies

**Challenge:** Bash struggles with multi-line JSON strings and special characters.

**Solution:** Use Python for PRs with verbose bodies.

```python
import json
import subprocess

body = """## Executive Summary
[4,000 word body with special characters, quotes, code blocks]
"""

pr_data = {
    "title": "[Amazon] Security enhancement",
    "body": body,
    "head": "feature/amazon-security",
    "base": "main"
}

# Create PR
result = subprocess.run(
    ["curl", "-X", "POST", "https://api.github.com/repos/EpicTestQuest/quest-for-quality/pulls",
     "-H", "Authorization: Bearer ghp_xxx",
     "-d", json.dumps(pr_data)],
    capture_output=True, text=True
)

response = json.loads(result.stdout)
pr_num = response["number"]

# Add labels
subprocess.run([...])
```

**Benefits:**
- **JSON safety:** json.dumps() handles escaping
- **Multiline strings:** Python triple quotes
- **No shell quoting issues:** Direct subprocess calls
- **Error handling:** Try/except blocks

---

### Technique 3: Heredoc for Complex Bodies

**Challenge:** Storing verbose PR bodies inline makes scripts unreadable.

**Solution:** Use heredoc to external files.

```bash
cat > /tmp/verbose_pr_body.txt << 'EOFBODY'
## Context
[4,000 word body]
EOFBODY

# Read and use
body=$(cat /tmp/verbose_pr_body.txt)
```

**Benefits:**
- **Readability:** Main script stays clean
- **Reusability:** Can use same body template for similar PRs
- **Version control:** Can track body templates separately

---

### Technique 4: GitHub REST API Direct Usage

**Challenge:** GitHub CLI (gh) has rate limits and complex authentication.

**Solution:** Use GitHub REST API with personal access token.

```bash
# Create Issue
curl -X POST https://api.github.com/repos/ORG/REPO/issues \
  -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/vnd.github+json" \
  -d '{"title": "Bug", "body": "Description", "labels": ["bug"]}'

# Create PR
curl -X POST https://api.github.com/repos/ORG/REPO/pulls \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"title": "Fix", "head": "branch", "base": "main"}'

# Add labels (PATCH Issue, not PR)
curl -X PATCH https://api.github.com/repos/ORG/REPO/issues/26 \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"labels": ["qa-review-needed"]}'
```

**Key Learnings:**
- PRs are issues too → use /issues/:number to add labels
- Must use PATCH not POST for labels
- Accept header: "application/vnd.github+json"
- Token in Authorization header: "Bearer $TOKEN"

---

### Technique 5: Jira REST API with HTTP Basic Auth

**Challenge:** Jira Cloud requires specific authentication format.

**Solution:** HTTP Basic Auth with email + API token.

```bash
# Search Jira issues
curl -X POST \
  -u "christine@epictestquest.com:$JIRA_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{"jql": "project = SCRUM ORDER BY created DESC", "maxResults": 50}' \
  "https://epictestquest.atlassian.net/rest/api/3/search/jql"

# Get single issue
curl -u "email:token" \
  -H "Accept: application/json" \
  "https://domain.atlassian.net/rest/api/3/issue/SCRUM-57"
```

**Key Learnings:**
- **Auth format:** -u "email:token" (not Bearer)
- **New endpoint:** /rest/api/3/search/jql (not /search)
- **JQL queries:** Must use POST with {"jql": "query"}
- **Rate limiting:** Jira more restrictive than GitHub (wait 3-5s between calls)

---

### Technique 6: Feature Creation Across Multiple Teams

**Challenge:** Create identical features in 3 Slack workspaces (teams).

**Solution:** Supabase batch INSERT with workspace-specific user IDs.

```sql
-- Create features for all 3 teams at once
INSERT INTO features (product_id, team_id, name, description, created_by)
VALUES
  -- Team 1 (T07UXE73LRG)
  ('product_id_1', 'T07UXE73LRG', 'Driver & Rider Safety', '...', 'U07UQRW7M8W'),
  ('product_id_1', 'T07UXE73LRG', 'Ride Booking Flow', '...', 'U07UQRW7M8W'),

  -- Team 2 (T08UZJCNNCT)
  ('product_id_2', 'T08UZJCNNCT', 'Driver & Rider Safety', '...', 'U08UZJCQDPV'),
  ('product_id_2', 'T08UZJCNNCT', 'Ride Booking Flow', '...', 'U08UZJCQDPV'),

  -- Team 3 (T09NRRJ8AER)
  ('product_id_3', 'T09NRRJ8AER', 'Driver & Rider Safety', '...', 'U09PPJG4A1E'),
  ('product_id_3', 'T09NRRJ8AER', 'Ride Booking Flow', '...', 'U09PPJG4A1E');
```

**Key Mappings:**
```javascript
const teamMappings = {
  'T07UXE73LRG': {
    name: 'Wizzo Test',
    userId: 'U07UQRW7M8W',
    products: { uber: 'uuid1', airbnb: 'uuid2', ... }
  },
  'T08UZJCNNCT': {
    name: 'Wizzo Development',
    userId: 'U08UZJCQDPV',
    products: { uber: 'uuid4', airbnb: 'uuid5', ... }
  },
  'T09NRRJ8AER': {
    name: 'Wizzo Sandbox',
    userId: 'U09PPJG4A1E',
    products: { uber: 'uuid7', airbnb: 'uuid8', ... }
  }
};
```

**Benefits:**
- Single query creates 48 features (16 × 3 teams)
- Maintains data consistency
- Proper foreign keys and creator attribution

---

### Technique 7: Label Auto-Creation

**Challenge:** GitHub auto-creates labels when first used, but inconsistent colors.

**Solution:** Pre-create labels with consistent color scheme before creating Issues/PRs.

```bash
# Pre-create labels with colors
labels=(
  '{"name": "qa-review-needed", "color": "ededed", "description": "Needs QA review"}'
  '{"name": "uber", "color": "ededed", "description": "Uber product"}'
  '{"name": "priority-high", "color": "d73a4a", "description": "High priority"}'
)

for label in "${labels[@]}"; do
  curl -X POST https://api.github.com/repos/ORG/REPO/labels \
    -H "Authorization: Bearer $TOKEN" \
    -d "$label"
done
```

**Color Scheme Used:**
- Bug: `d73a4a` (red)
- Enhancement: `a2eeef` (light blue)
- Feature: `0e8a16` (green)
- Priority-high: `ededed` (gray)
- Product labels: `ededed` (gray - neutral)

---

## Complete Inventory

### Products (5 total across 3 teams = 15 instances)

| Product | Type | Industry | Features Count |
|---------|------|----------|----------------|
| Uber | Mobile App | Mobility | 4 |
| Airbnb | Web App | Travel & Hospitality | 5 |
| Amazon | Web App | eCommerce | 3 |
| Stripe | API | Fintech | 2 |
| Chase Banking | Mobile App | Fintech | 2 |

---

### Features (16 per team × 3 teams = 48 total)

**Uber (4):**
1. Driver & Rider Safety *(Product Area)*
2. Ride Booking Flow *(Specific Feature)*
3. Account Registration & Onboarding *(Product Area)*
4. Phone Number Verification *(Specific Feature)*

**Airbnb (5):**
1. Search & Discovery *(Product Area)*
2. Instant Booking *(Specific Feature)*
3. Host & Guest Messaging *(Product Area)*
4. User Authentication *(Product Area)*
5. Social Login (Google/Facebook/Apple) *(Specific Feature)*

**Amazon (3):**
1. Product Catalog *(Product Area)*
2. 1-Click Checkout *(Specific Feature)*
3. Product Reviews & Ratings *(Product Area)*

**Stripe (2):**
1. Payment Processing *(Product Area)*
2. Fraud Detection & Prevention *(Specific Feature)*

**Chase (2):**
1. Zelle Instant Transfers *(Specific Feature)*
2. Mobile Check Deposit *(Specific Feature)*

---

### GitHub Issues (25 total)

| # | Product | Type | Feature | Jira Linked |
|---|---------|------|---------|-------------|
| 1 | Uber | Bug | Phone Verification | No |
| 2 | Airbnb | Bug | Social Login | No |
| 3 | Amazon | Bug | 1-Click Checkout | No |
| 4 | Stripe | Enhancement | Fraud Detection | **Yes** (SCRUM-51,52,53) |
| 5 | Chase | Bug | Zelle Transfers | **Yes** (SCRUM-57,58,59) |
| 6 | Uber | Enhancement | Driver Safety | No |
| 7 | Airbnb | Bug | Search Filters | No |
| 8 | Amazon | Bug | Product Reviews | No |
| 9 | Chase | Bug | Mobile Check Deposit | **Yes** (SCRUM-61,62,63) |
| 10 | Stripe | Enhancement | Payment Processing | No |
| 11 | Uber | Bug | Ride Booking | No |
| 12 | Airbnb | Enhancement | Instant Booking | No |
| 13 | Amazon | Security | 1-Click Checkout | No |
| 14 | Airbnb | Performance | Messaging | No |
| 15 | Uber | Bug | Account Registration | No |
| 16 | Uber | Bug | Driver Safety | No |
| 17 | Airbnb | Bug | Search Filters | No |
| 18 | Amazon | Enhancement | Product Reviews | No |
| 19 | Stripe | Enhancement | Payment Processing | No |
| 20 | Chase | Bug | Zelle Transfers | No |
| 21 | Uber | Enhancement | Ride Booking | No |
| 22 | Airbnb | Bug | Instant Booking | No |
| 23 | Amazon | Bug | Product Catalog | No |
| 24 | Chase | Bug | Mobile Check Deposit | No |
| 25 | Stripe | Enhancement | Webhooks | No |

**Jira Linked Issues (3):**
- Issue #4 → SCRUM-51 (Stripe Fraud Detection), SCRUM-52 (3D Secure), SCRUM-53 (Radar rules)
- Issue #5 → SCRUM-57 (Zelle Transfers), SCRUM-58 (Transfer form), SCRUM-59 (Email bug)
- Issue #9 → SCRUM-61 (Check Deposit), SCRUM-62 (Photo capture), SCRUM-63 (Confirmation)

---

### Pull Requests (31 total)

#### MINIMAL PRs (10) - Sparse Descriptions

| # | Product | Title | Body Length | Source | Branch |
|---|---------|-------|-------------|--------|--------|
| 26 | Uber | Fix international SMS | 27 chars | Issue #1 | fix/uber-sms-international |
| 27 | Chase | Update Zelle validation | 68 chars | Issue #20 | fix/chase-zelle-names |
| 28 | Airbnb | Fixed filter persistence | 45 chars | Issue #17 | fix/airbnb-filters |
| 29 | Amazon | Fix review ratings | 28 chars | None | fix/amazon-star-rating |
| 30 | Stripe | Fix payment timeout | 41 chars | Hot Fix | hotfix/stripe-timeout |
| 31 | Uber | Fix app crash on ride confirm | 7 chars | Hot Fix | hotfix/uber-crash |
| 32 | Chase | Better error messages | 39 chars | Issue #24 | fix/chase-mobile-deposit |
| 33 | Airbnb | Social login buttons | 63 chars | Jira | feature/airbnb-social-login |
| 34 | Amazon | Prevent double charges | 22 chars | Hot Fix | hotfix/amazon-checkout |
| 35 | Stripe | Webhook retry logic | 30 chars | Jira | feature/stripe-webhooks |

**Characteristics:**
- Body: 7-68 characters
- No testing notes
- No file lists
- No business context
- Some have issue references, some don't

---

#### MODERATE PRs (12) - Normal Developer Style

| # | Product | Title | Body Length | Source | Branch |
|---|---------|-------|-------------|--------|--------|
| 36 | Uber | Add Face ID/Touch ID | 389 chars | Issue #6 | feature/uber-biometric |
| 37 | Airbnb | Fix instant booking date | 324 chars | Issue #22 | fix/airbnb-date-bug |
| 38 | Amazon | Add verified purchase badge | 278 chars | Issue #18 | feature/amazon-verified-badge |
| 39 | Stripe | Add Apple Pay support | 298 chars | Issue #19 | feature/stripe-apple-pay |
| 40 | Chase | Zelle transfer form improvements | 312 chars | Jira SCRUM-58 | feature/chase-zelle-transfer |
| 41 | Uber | Fix Android freeze | 267 chars | Issue #11 | fix/uber-booking-freeze |
| 42 | Airbnb | Optimize messaging performance | 345 chars | Issue #14 | fix/airbnb-messaging-delay |
| 43 | Amazon | Improve search relevance | 289 chars | Issue #23 | feature/amazon-search-improvements |
| 44 | Stripe | Fix refund processing | 156 chars | Hot Fix | hotfix/stripe-refund |
| 45 | Chase | Improve check photo quality | 301 chars | Issue #9 | feature/chase-check-quality |
| 46 | Uber | Real-time driver location | 287 chars | Issue #21 | feature/uber-realtime-tracking |
| 47 | Airbnb | Add Instant Book filter | 234 chars | Issue #12 | feature/airbnb-instant-book-filter |

**Characteristics:**
- Body: 156-389 characters
- Lists what changed and why
- Mentions 2-4 files changed
- Some testing notes or just mentions "Test:"
- Closes or references issues

---

#### VERBOSE PRs (9) - AI-Generated Walls of Text

| # | Product | Title | Body Length | Source | Branch |
|---|---------|-------|-------------|--------|--------|
| 48 | Amazon | Security enhancement for 1-Click | ~4,000 chars | Issue #13 | feature/amazon-1click-security |
| 49 | Stripe | ML-powered fraud detection | ~3,800 chars | Issue #4 | feature/stripe-fraud-ml |
| 50 | Uber | Accessibility improvements night mode | ~4,200 chars | Issue #16 | feature/uber-night-mode-a11y |
| 51 | Airbnb | Real-time messaging WebSocket | ~5,100 chars | Jira | feature/airbnb-messaging-ws |
| 52 | Chase | Account aggregation API | ~4,900 chars | Jira | feature/chase-account-aggregation |
| 53 | Amazon | Product recommendation ML | ~5,300 chars | Jira | feature/amazon-recommendation-engine |
| 54 | Stripe | PCI DSS 4.0 compliance | ~5,400 chars | Jira | feature/stripe-pci-compliance |
| 55 | Uber | Dynamic surge pricing v3 | ~5,200 chars | Jira | feature/uber-surge-pricing |
| 56 | Airbnb | Multi-platform calendar sync | ~5,000 chars | Jira | feature/airbnb-calendar-sync |

**Characteristics:**
- Body: 3,800-5,400 characters (10-15x longer than moderate)
- Multiple sections: Executive Summary, Context, Technical Approach, Architecture, Files Changed, Testing Requirements, Performance, Rollback, Monitoring, Compliance
- Decision matrices and comparison tables
- Performance benchmarks and load testing results
- Security audit results
- Compliance checklists
- Link to internal design docs (simulated)

**Example Sections from PR #48:**
```markdown
## Context
CVE-2024-XXXXX security vulnerability...

## Problem Statement
Q4 2024 security audit by CyberSec Partners...

## Technical Approach
Evaluated 3 approaches with decision matrix...

| Criteria | Weight | A | B | C |
|----------|--------|---|---|---|
| Security | 40% | 8 | 9 | 9 |

## Implementation Details
### Encryption Strategy
AES-256-GCM using Web Crypto API...

### Storage Schema
```json
{
  "checkoutData": {
    "iv": "base64-iv",
    ...
  }
}
```

## Files Changed (9 files)
### New Files:
- src/security/encryption.js (324 lines)
- src/security/storage.js (156 lines)
...

## Testing Requirements
### Functional Testing (6 categories, 30+ scenarios)
### Edge Cases (8 scenarios)
### Platform-Specific (iOS/Android details)

## Performance Impact
Load testing with 10,000 users...
**Before:** 1.2s p50, 2.8s p95
**After:** 1.1s p50, 2.5s p95 (8% improvement)

## Rollback Plan
Three-tier strategy: Feature Flag (15min), Partial (2hr), Full (4hr)

## Monitoring
DataDog metrics, Sentry errors, Analytics events

## Compliance
- [x] GDPR Article 32
- [x] PCI DSS Section 3.4
...
```

---

### PR Source Distribution

**From GitHub Issues (12 PRs):**
- #26 → Issue #1 (Uber SMS)
- #27 → Issue #20 (Chase Zelle)
- #28 → Issue #17 (Airbnb filters)
- #36 → Issue #6 (Uber biometric)
- #37 → Issue #22 (Airbnb date)
- #38 → Issue #18 (Amazon badge)
- #39 → Issue #19 (Stripe Apple Pay)
- #41 → Issue #11 (Uber freeze)
- #42 → Issue #14 (Airbnb messaging)
- #43 → Issue #23 (Amazon search)
- #45 → Issue #9 (Chase check quality)
- #46 → Issue #21 (Uber tracking)
- #47 → Issue #12 (Airbnb filter)

**From Jira Stories (10 PRs):**
- #33 → Jira (Airbnb social login)
- #35 → Jira (Stripe webhooks)
- #40 → Jira SCRUM-58 (Chase Zelle form)
- #51 → Jira (Airbnb messaging)
- #52 → Jira (Chase aggregation)
- #53 → Jira (Amazon recommendations)
- #54 → Jira (Stripe PCI)
- #55 → Jira (Uber surge pricing)
- #56 → Jira (Airbnb calendar)
- (Note: Some Jira PRs reference generic "SCRUM-XX" to simulate)

**Hot Fixes - No Issue/Jira (9 PRs):**
- #29 (Amazon star rating)
- #30 (Stripe timeout)
- #31 (Uber crash)
- #34 (Amazon double charge)
- #44 (Stripe refund)
- Plus 4 others without explicit issue links

---

### Labels Used

**Product Labels (5):**
- `uber` - Uber product (gray #ededed)
- `airbnb` - Airbnb product (gray #ededed)
- `amazon` - Amazon product (gray #ededed)
- `stripe` - Stripe product (gray #ededed)
- `chase` - Chase product (gray #ededed)

**Type Labels:**
- `bug` - Something isn't working (red #d73a4a)
- `enhancement` - New feature or request (blue #a2eeef)
- `feature` - Major new feature (green #0e8a16)
- `security` - Security-related (critical)
- `ml` - Machine learning related

**Priority Labels:**
- `priority-critical` - Immediate attention required
- `priority-high` - High priority
- `priority-medium` - Medium priority

**Special Labels:**
- `qa-review-needed` - **ALL 31 PRs have this** (gray #ededed)
- `jira-linked` - 3 Issues have this
- `accessibility` - Accessibility improvements
- `performance` - Performance optimization

---

## Lessons Learned

### 1. GitHub API Rate Limiting

**Problem:** Creating 31 PRs in rapid succession hit secondary rate limits.

**Solution:** Add 2-3 second sleep between PR creations.

```bash
for pr in prs; do
    create_pr ...
    sleep 3  # Prevent rate limiting
done
```

**Lesson:** Always add delays in batch operations, even if under primary rate limit (5000 req/hour).

---

### 2. PR Labels vs Issue Labels

**Problem:** Initially tried to add labels when creating PR, got 404 errors.

**Discovery:** GitHub PRs don't have a labels field in the POST /pulls endpoint.

**Solution:** PRs are issues too - use PATCH /issues/:number after PR creation.

```bash
# Create PR
pr_num=$(create_pr ...)

# Add labels to PR via Issues API
curl -X PATCH https://api.github.com/repos/.../issues/$pr_num \
  -d '{"labels": ["bug", "qa-review-needed"]}'
```

**Lesson:** PRs inherit from Issues - use Issues API for labels, assignees, milestones.

---

### 3. Jira API Endpoint Changes

**Problem:** `/rest/api/3/search` returned "API removed" error.

**Discovery:** Jira Cloud deprecated GET-based search, now requires POST with JQL.

**Solution:** Use `/rest/api/3/search/jql` with POST request.

```bash
# ❌ Old (deprecated)
curl https://domain.atlassian.net/rest/api/3/search?jql=...

# ✅ New
curl -X POST https://domain.atlassian.net/rest/api/3/search/jql \
  -H "Content-Type: application/json" \
  -d '{"jql": "project = SCRUM", "maxResults": 50}'
```

**Lesson:** Always check API documentation for latest endpoints, especially for SaaS products.

---

### 4. JSON Escaping in Bash

**Problem:** PR bodies with quotes, newlines, and code blocks broke bash string handling.

**Failed Attempts:**
```bash
# Attempt 1: Single quotes (can't escape internal quotes)
body='Text with "quotes" fails'

# Attempt 2: Double quotes (variable expansion issues)
body="Text with $variables expands"

# Attempt 3: Escaping hell
body="Text with \"nested \\\"quotes\\\" fails\""
```

**Solutions:**
1. **Heredoc to file:** For moderate bodies
2. **Python json.dumps():** For verbose bodies with special chars
3. **jq --raw-input:** For piping to curl

```bash
# Solution 1: Heredoc
cat > /tmp/body.txt << 'EOF'
Complex body with "quotes" and $variables
EOF
body=$(cat /tmp/body.txt)

# Solution 2: Python
python3 << 'PYEOF'
body = """Complex "body" with $vars"""
json.dumps({"body": body})
PYEOF

# Solution 3: jq
echo "$body" | jq -Rs . | curl ... -d @-
```

**Lesson:** Use Python for complex JSON, bash for simple strings.

---

### 5. User Attribution Across Teams

**Problem:** Features showed "Unknown" creator in UI because wrong user_id used.

**Discovery:** Each Slack team (workspace) has different user_id for same person.

**Solution:** Query products table to find Christine's user_id per team, then update user_profiles display_name.

```sql
-- Find user_ids
SELECT team_id, created_by
FROM products
WHERE created_by IS NOT NULL
GROUP BY team_id, created_by;

-- Results
-- T07UXE73LRG: U07UQRW7M8W
-- T08UZJCNNCT: U08UZJCQDPV
-- T09NRRJ8AER: U09PPJG4A1E

-- Update display names
UPDATE user_profiles
SET display_name = 'Christine'
WHERE (team_id = 'T07UXE73LRG' AND user_id = 'U07UQRW7M8W')
   OR (team_id = 'T08UZJCNNCT' AND user_id = 'U08UZJCQDPV')
   OR (team_id = 'T09NRRJ8AER' AND user_id = 'U09PPJG4A1E');
```

**Lesson:** In multi-tenant systems, always map user IDs per tenant, never assume global IDs.

---

### 6. Branch Naming Conventions

**Good Patterns:**
- `fix/product-brief-description` - Bug fixes
- `feature/product-brief-description` - New features
- `hotfix/product-brief-description` - Urgent production fixes

**Examples:**
- ✅ `fix/uber-sms-international` - Clear, product-prefixed
- ✅ `feature/stripe-fraud-ml` - Indicates new feature
- ✅ `hotfix/amazon-checkout` - Shows urgency
- ❌ `fix-bug` - Too vague
- ❌ `christine/testing` - Not descriptive
- ❌ `temp` - Meaningless

**Lesson:** Branch names should be self-documenting; include product and brief description.

---

### 7. Realistic vs Overwhelming Detail

**Initial Approach:** First verbose PR had 8,000+ words (too much even for "verbose").

**Feedback:** Even AI-generated PRs should be readable, not satire.

**Adjusted:** Verbose PRs now 3,800-5,400 characters (~1,000-1,200 words) - still wall of text but not absurd.

**Balance:**
- **Minimal:** 20-70 chars (1 sentence)
- **Moderate:** 150-400 chars (2-4 paragraphs)
- **Verbose:** 3,800-5,400 chars (8-12 sections)

**Lesson:** "Verbose" should feel like overzealous documentation, not parody.

---

### 8. Feature vs Product Area Naming

**Challenge:** Distinguishing broad "areas" from specific "features".

**Solution:** Descriptive naming patterns:
- **Product Areas:** "User Authentication", "Payment Processing", "Search & Discovery"
- **Specific Features:** "Social Login (Google/Facebook/Apple)", "1-Click Checkout", "Instant Booking"

**Indicators:**
- Areas: Plural/abstract nouns ("Authentication", "Processing", "Discovery")
- Features: Concrete/action-oriented ("Login", "Checkout", "Booking")

**Lesson:** Naming conventions help users understand hierarchy without explicit tagging.

---

### 9. Git Operations in Loops

**Problem:** Git state corruption when creating branches in rapid succession without cleanup.

**Solution:** Always return to clean state before next operation.

```bash
for branch in branches; do
    git checkout main           # Return to stable base
    git pull origin main        # Get latest changes
    git checkout -b $branch     # Create fresh branch
    # ... make changes ...
    git push origin $branch     # Push to remote
done
```

**Anti-pattern:**
```bash
# ❌ This breaks after first iteration
git checkout -b branch1
git commit ...
git checkout -b branch2  # Fails! Already on branch1
```

**Lesson:** Treat each iteration as fresh start - checkout main, pull, then create branch.

---

### 10. Testing Incrementally

**Mistake:** Wrote entire 31-PR script before testing.

**Better Approach:**
1. Test single PR creation manually
2. Test 2-3 PRs with script
3. Test error handling (rate limits, auth failures)
4. Run full batch

**Debugging Techniques:**
```bash
# Add debug output
echo "Creating PR #$i: $title"

# Capture and log errors
result=$(curl ...) 2>&1
echo "$result" | grep -q "error" && echo "ERROR: $result"

# Test with dry run flag
if [ "$DRY_RUN" = "true" ]; then
    echo "Would create PR: $title"
else
    create_pr ...
fi
```

**Lesson:** Batch operations are hard to debug - test incrementally, add logging.

---

## Replication Guide for Future Phases

### Phase 2: Adding More Content

If you need to add more Issues/PRs in the future:

#### Step 1: Prepare Content Mapping

Create a spreadsheet with:
```
| PR# | Product | Title | Description Style | Source | Issue# | Jira# |
|-----|---------|-------|-------------------|--------|--------|-------|
| 57  | Uber    | ...   | Minimal           | Issue  | #27    | -     |
| 58  | Airbnb  | ...   | Moderate          | Jira   | -      | S-64  |
```

**Distribution Goals:**
- **Minimal:** 30-35% (sparse, forces Wizzo to infer)
- **Moderate:** 35-40% (realistic developer docs)
- **Verbose:** 25-30% (overwhelming detail)

#### Step 2: Clone and Set Up

```bash
# Clone repo
cd /tmp
git clone https://ghp_TOKEN@github.com/EpicTestQuest/quest-for-quality.git
cd quest-for-quality
git config user.name "Your Name"
git config user.email "your@email.com"
```

#### Step 3: Create Issues First (if needed)

```bash
#!/bin/bash
TOKEN="ghp_xxx"
REPO="EpicTestQuest/quest-for-quality"

issues=(
  '{"title": "[Product] Issue title", "body": "Description", "labels": ["product", "bug"]}'
  '{"title": "[Product] Another", "body": "More detail", "labels": ["product", "enhancement"]}'
)

for issue_json in "${issues[@]}"; do
  curl -X POST "https://api.github.com/repos/$REPO/issues" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Accept: application/vnd.github+json" \
    -d "$issue_json"
  sleep 2
done
```

#### Step 4: Create PRs with Script

**Template Script:**
```bash
#!/bin/bash
REPO_DIR="/tmp/quest-for-quality"
TOKEN="ghp_xxx"
REPO="EpicTestQuest/quest-for-quality"

create_pr() {
    local branch=$1 title=$2 body=$3 labels=$4 change=$5

    cd $REPO_DIR
    git checkout main && git pull origin main
    git checkout -b "$branch"
    echo "$change" > CHANGES.md
    git add CHANGES.md && git commit -m "$title"
    git push origin "$branch"

    pr_response=$(curl -s -X POST "https://api.github.com/repos/$REPO/pulls" \
      -H "Authorization: Bearer $TOKEN" \
      -d "{\"title\": \"$title\", \"body\": \"$body\", \"head\": \"$branch\", \"base\": \"main\"}")

    pr_num=$(echo "$pr_response" | grep -o '"number": [0-9]*' | grep -o '[0-9]*')

    if [ -n "$pr_num" ]; then
        curl -s -X PATCH "https://api.github.com/repos/$REPO/issues/$pr_num" \
          -H "Authorization: Bearer $TOKEN" \
          -d "{\"labels\": $labels}"
        echo "Created PR #$pr_num"
    fi

    sleep 3  # Rate limiting
}

# Minimal PR
create_pr \
  "fix/uber-new-bug" \
  "[Uber] Fix new bug" \
  "Fixed. Check code." \
  "[\"uber\", \"qa-review-needed\", \"bug\"]" \
  "## Fix: Description\n\nChanged: file.js"

# Moderate PR
create_pr \
  "feature/airbnb-enhancement" \
  "[Airbnb] New feature" \
  "Added feature X.\n\n**Changed:**\n- file1.js\n- file2.js\n\n**Test:** Verify behavior\n\nCloses #28" \
  "[\"airbnb\", \"qa-review-needed\", \"feature\"]" \
  "## Feature: Description\n\nFiles: file1.js, file2.js"

# Verbose PR - use Python
python3 << 'PYEOF'
import json, subprocess

body = """## Executive Summary
[Long detailed body with sections]

## Files Changed
- Many files...

## Testing Requirements
- Many tests...
"""

pr_data = {"title": "[Amazon] Complex feature", "body": body, "head": "feature/amazon-complex", "base": "main"}
# ... create PR with Python ...
PYEOF
```

#### Step 5: Verify Results

```bash
# Count PRs
curl -s "https://api.github.com/repos/$REPO/pulls?state=open&per_page=100" \
  -H "Authorization: Bearer $TOKEN" \
  | python3 -c "import json,sys; print(len(json.load(sys.stdin)))"

# List PRs
gh pr list --repo EpicTestQuest/quest-for-quality
```

---

### Phase 3: Adding New Products/Features

If expanding to more products:

#### Step 1: Create Products in Supabase

```sql
-- Add new products (repeat for all 3 teams)
INSERT INTO products (team_id, name, type, industry, description, created_by)
VALUES
  ('T09NRRJ8AER', 'Netflix', 'web_app', 'Entertainment', 'Streaming service', 'U09PPJG4A1E'),
  ('T09NRRJ8AER', 'Spotify', 'mobile_app', 'Entertainment', 'Music streaming', 'U09PPJG4A1E');

-- Get product IDs
SELECT id, name FROM products WHERE team_id = 'T09NRRJ8AER' AND name IN ('Netflix', 'Spotify');
```

#### Step 2: Create Features

```sql
-- Netflix features
INSERT INTO features (product_id, team_id, name, description, created_by)
VALUES
  ('netflix_uuid', 'T09NRRJ8AER', 'Content Discovery', 'Recommendation engine...', 'U09PPJG4A1E'),
  ('netflix_uuid', 'T09NRRJ8AER', 'Profile Management', 'Multi-user profiles...', 'U09PPJG4A1E'),
  ('netflix_uuid', 'T09NRRJ8AER', 'Video Playback', 'Adaptive streaming...', 'U09PPJG4A1E');

-- Spotify features
INSERT INTO features (product_id, team_id, name, description, created_by)
VALUES
  ('spotify_uuid', 'T09NRRJ8AER', 'Playlist Creation', 'Custom playlists...', 'U09PPJG4A1E'),
  ('spotify_uuid', 'T09NRRJ8AER', 'Social Sharing', 'Share music...', 'U09PPJG4A1E');
```

#### Step 3: Create GitHub Issues/PRs

Follow same process as above, referencing new products:
- Issues: `[Netflix] Recommendation bug`, `[Spotify] Playlist sync issue`
- PRs: Use new product labels

---

### Phase 4: Jira Integration Expansion

If adding more Jira-linked Issues:

#### Step 1: Create Jira Stories

Use Jira UI or API:
```bash
curl -X POST \
  -u "email:token" \
  -H "Content-Type: application/json" \
  --data '{
    "fields": {
      "project": {"key": "SCRUM"},
      "summary": "Netflix - Content Discovery Algorithm",
      "description": "Implement ML-based content recommendation",
      "issuetype": {"name": "Story"}
    }
  }' \
  "https://domain.atlassian.net/rest/api/3/issue"
```

#### Step 2: Link to GitHub Issues

```bash
# Create GitHub Issue
issue_num=$(curl -X POST ... | jq -r '.number')

# Add Jira link as comment
curl -X POST "https://api.github.com/repos/$REPO/issues/$issue_num/comments" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "body": "**Related Jira Stories:**\n- [SCRUM-70](https://epictestquest.atlassian.net/browse/SCRUM-70)\n- [SCRUM-71](https://epictestquest.atlassian.net/browse/SCRUM-71)"
  }'

# Add jira-linked label
curl -X PATCH "https://api.github.com/repos/$REPO/issues/$issue_num" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{"labels": ["netflix", "jira-linked", "enhancement"]}'
```

---

### Phase 5: Scaling to 100+ PRs

For larger scale:

#### Technique 1: Database-Driven Generation

```python
import pandas as pd
import subprocess

# Load PR plan from CSV
df = pd.read_csv('pr_plan.csv')

for idx, row in df.iterrows():
    create_pr(
        branch=row['branch'],
        title=row['title'],
        body=get_body_template(row['template'], row),
        labels=row['labels'].split(','),
        change=row['change_description']
    )
    time.sleep(3)
```

#### Technique 2: Template System

```python
TEMPLATES = {
    'minimal': "Fixed. See code.",
    'moderate': """Fixed {issue}.

**Changed:**
{files}

**Test:** {test_notes}

Closes #{issue_num}""",
    'verbose': load_template('verbose_template.md')
}

def get_body_template(template_name, data):
    return TEMPLATES[template_name].format(**data)
```

#### Technique 3: Parallel Execution

```python
from concurrent.futures import ThreadPoolExecutor
import time

def create_pr_with_delay(pr_data):
    create_pr(**pr_data)
    time.sleep(3)  # Rate limiting

# Create PRs in parallel (with delay)
with ThreadPoolExecutor(max_workers=3) as executor:
    executor.map(create_pr_with_delay, pr_data_list)
```

---

### Quick Reference Commands

**Check PR count:**
```bash
gh pr list --repo EpicTestQuest/quest-for-quality | wc -l
```

**Check Issue count:**
```bash
gh issue list --repo EpicTestQuest/quest-for-quality | wc -l
```

**List all open PRs:**
```bash
gh pr list --repo EpicTestQuest/quest-for-quality --limit 100
```

**Get PR details:**
```bash
gh pr view 26 --repo EpicTestQuest/quest-for-quality
```

**Check labels on PR:**
```bash
gh pr view 26 --json labels --repo EpicTestQuest/quest-for-quality
```

**Close all PRs (cleanup):**
```bash
for pr in $(gh pr list --json number -q '.[].number'); do
    gh pr close $pr --repo EpicTestQuest/quest-for-quality
done
```

---

## Success Metrics

✅ **31 PRs created** (target: 30) - 103% of goal
✅ **25 Issues created** (target: 25) - 100% of goal
✅ **3 Jira-linked Issues** - Realistic 12% link rate
✅ **10 Minimal PRs** - 32% sparse descriptions
✅ **12 Moderate PRs** - 39% normal descriptions
✅ **9 Verbose PRs** - 29% overwhelming descriptions
✅ **5 Products** with **16 Features** - Complete hierarchy
✅ **All PRs labeled** with "qa-review-needed" + product
✅ **Mixed sources:** Issues (40%), Jira (33%), Hot fixes (27%)
✅ **Technical diversity:** API, Frontend, Full-stack, Infrastructure
✅ **All PRs open** and ready for beta testing

---

## Tools & Technologies Used

**Version Control:**
- Git (branching, commits, push)
- GitHub REST API v3 (Issues, PRs, labels)

**APIs:**
- GitHub REST API (https://api.github.com)
- Jira REST API v3 (https://domain.atlassian.net/rest/api/3/)

**Databases:**
- Supabase (PostgreSQL) - products, features, user_profiles tables

**Scripting:**
- Bash (batch operations, git automation)
- Python 3 (JSON handling, complex API calls)
- curl (HTTP requests)
- jq (JSON processing)

**Authentication:**
- GitHub Personal Access Token (Bearer token)
- Jira API Token (HTTP Basic Auth)

---

## Next Steps

### Immediate (Phase 2)
- [ ] Monitor beta tester usage and feedback
- [ ] Track which PR types get most engagement
- [ ] Identify gaps in product/feature coverage
- [ ] Gather metrics on Wizzo test case generation quality

### Short-term (Phase 3)
- [ ] Add 10-15 more PRs based on beta feedback
- [ ] Create more Jira-linked Issues if needed
- [ ] Add "Test Cases" section to some Issues showing example Wizzo output
- [ ] Create "Best Practices" guide for beta testers

### Long-term (Phase 4)
- [ ] Expand to 10+ products
- [ ] Add 50+ more Issues/PRs
- [ ] Create video tutorials showing Wizzo workflow
- [ ] Build automated test case quality scoring

---

## Contact & Maintenance

**Repository:** https://github.com/EpicTestQuest/quest-for-quality
**Supabase Project:** Wizzo Slack App Database
**Jira Project:** https://epictestquest.atlassian.net/jira/software/projects/SCRUM

**Maintainer:** Christine Pinto (christine@epictestquest.com)
**Created:** 2025-11-19
**Last Updated:** 2025-11-22

For questions or issues with this setup, refer to this documentation or contact the maintainer.

---

## Appendix: Example Scripts

### Full PR Creation Script

See `/tmp/create_prs.sh` for complete implementation of:
- Minimal PRs (10)
- Moderate PRs (12)
- Label management
- Error handling
- Rate limiting

### Verbose PR Creation Script

See `/tmp/create_verbose_prs.py` for:
- Python JSON handling
- Multi-section PR bodies
- Template system
- Parallel execution

### Issue Creation Script

```bash
#!/bin/bash
TOKEN="ghp_xxx"
REPO="EpicTestQuest/quest-for-quality"

# Array of issues
declare -a issues=(
  '{"title":"[Uber] SMS bug","body":"Description","labels":["uber","bug"]}'
  '{"title":"[Airbnb] Feature","body":"Detail","labels":["airbnb","enhancement"]}'
)

# Create each issue
for issue_json in "${issues[@]}"; do
  echo "Creating issue..."
  curl -X POST "https://api.github.com/repos/$REPO/issues" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Accept: application/vnd.github+json" \
    -d "$issue_json"
  sleep 2
done
```

### Jira Ticket Assignment Script

For distributing Jira tickets randomly across beta testers:

**Script Location:** `wizzo_slackApp/scripts/assign-jira-tickets-v2.sh`

**Purpose:** Randomly assigns all unassigned Jira tickets and moves "Finished" issues to "In Review" status.

**Features:**
- Fetches all assignable users from Jira project
- Excludes specified users (project leads, admins)
- Round-robin distribution for fair workload
- Automatically transitions "Finished" → "In Review" status
- Uses new Jira REST API v3 (`/search/jql` endpoint)
- Rate limiting (0.5s between assignments)
- macOS compatible (uses `sort -R` instead of `shuf`)

**Usage:**
```bash
cd wizzo_slackApp/scripts
chmod +x assign-jira-tickets-v2.sh
bash assign-jira-tickets-v2.sh
```

**Configuration:**

Edit the script to customize:
- `EXCLUDED_IDS`: Account IDs to exclude from assignment
- `PROJECT_KEY`: Jira project key (default: "SCRUM")
- `JIRA_EMAIL` and `JIRA_TOKEN`: Authentication credentials

**API Notes:**
- Uses two-step fetch process: `/search/jql` for IDs, then `/issue/{id}` for details
- Old `/rest/api/3/search` GET endpoint is deprecated as of 2024
- Handles both unassigned tickets and status transitions in one run

**Example Output:**
```
🎯 Jira Ticket Assignment Script (v2)
======================================

Step 1: Fetching project members...
  ✓ Including: 19 users
  ⊗ Excluding: Christine Pinto, Aaron Pinto

Step 2: Fetching all issues from project...
  Found 46 issues to assign

Step 3: Randomly assigning tickets...
  ✓ 46 issues assigned
  ✓ 8 "Finished" issues moved to "In Review"

✅ Assignment complete!
```

**When to use:**
- Initial beta tester onboarding (first ticket distribution)
- After creating new Jira stories (Phase 2/3)
- When rebalancing workload across team

---

**End of Documentation**
