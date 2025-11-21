# Wizzo Beta Testing Checklist

**Time estimate:** 30-45 minutes
**Prerequisites:** GitHub App and Jira OAuth already configured

---

## 📢 Important Note About Test Data

To make your beta testing experience as realistic as possible, we've created a comprehensive test repository with:
- 50+ GitHub PRs and Issues across multiple products (Uber, Airbnb, Amazon, Chase, Stripe)
- Jira stories and tickets
- Product screenshots captured from real apps

**Please note:** All of this test data (PRs, Issues, Jira tickets, and screenshots) was generated with AI assistance to speed up our beta preparation. While we've reviewed the content, there may be occasional inconsistencies, hallucinations, or inaccuracies in the test data itself. **This is totally fine!**

We're focusing on testing Wizzo's functionality, not the perfection of the test data. If you notice something odd in a PR description or screenshot, that's okay - just focus on whether Wizzo handles it properly. We'll continue refining the test data based on your feedback.

Thank you for your understanding! 🙏

---

## Resources

- **Getting Started Guide (Optional):** [Detailed documentation](https://api.epictestquest.com/docs/) - We also have an onboarding video in the Slack Home tab!
- **GitHub Test Repo:** https://github.com/EpicTestQuest/quest-for-quality
- **Example Screenshots:** https://github.com/EpicTestQuest/quest-for-quality/tree/main/screenshots
- **Jira Board:** https://epictestquest.atlassian.net/jira/software/projects/SCRUM/list
- **Report Progress:** [GitHub Discussions](https://github.com/EpicTestQuest/quest-for-quality/discussions) - Find your personal thread!
- **Ask Questions:** #beta-testing Slack channel

---

## How to Report Your Findings

We've created a **personal GitHub Discussion** for each tester to track progress and report findings!

**Your Discussion Thread:**
1. Go to [GitHub Discussions](https://github.com/EpicTestQuest/quest-for-quality/discussions)
2. Find the discussion titled **"Beta Testing Report - [Your Name]"**
3. Comment as you test! You can:
   - Post updates as you complete sections
   - Report bugs immediately when you find them (one comment per bug is fine)
   - Share suggestions or questions anytime
   - Add your overall experience at the end

**What to Include:**
- ✅ **Works as expected** - Quick note saying section completed
- ⚠️ **Works but confusing** - Describe what was unclear
- ❌ **Broken/Error** - Screenshot + steps to reproduce
- 💡 **Suggestion** - Ideas for improvement

**No strict format required!** Comment however works best for you - whether that's one big update at the end or multiple small comments as you go.

---

## Part 1: Products, Features & Personas

### Create a Product
- [ ] Go to Home Tab → 💎 Products tab → Products subtab
- [ ] Click **"Add Product"** button
- [ ] Fill in: Name, Type (choose any), Industry, Description
- [ ] Save and verify it appears in your products list

**Suggested test data:**
- Name: "Your Company App"
- Type: Web App
- Industry: Any
- Description: "Beta testing product"

---

### Create a Feature
- [ ] Go to Home Tab → 💎 Products tab → Features subtab
- [ ] Click **"Add Feature"** button
- [ ] Select a product from dropdown (use one of the existing: Uber, Airbnb, Amazon, Chase, or Stripe)
- [ ] Fill in: Name and Description
- [ ] Save and verify it appears in features list

**Suggested test data:**
- Product: Pick any existing product
- Name: "Beta Test Feature"
- Description: "Testing the feature creation flow"

---

### Create a Persona
- [ ] Go to Home Tab → 💎 Products tab → Personas subtab
- [ ] Click **"Add Persona"** button
- [ ] Click **"Browse Templates"** button to see persona suggestions
- [ ] Review the 5 suggested persona templates
- [ ] Either select one or create your own
- [ ] Save and verify it appears in personas list

---

## Part 2: Test Scrolls - 5 Different Ways

### Method 1: Conversational Flow with Persona
- [ ] Go to Home Tab → Test Scrolls subtab
- [ ] Click **"New Chat"** button (top right)
- [ ] In the DM conversation, describe what you want to test
- [ ] When Wizzo asks, select a **product** (e.g., Uber)
- [ ] When Wizzo asks, select a **feature** (optional - or skip)
- [ ] When Wizzo asks, select a **persona** from your list
- [ ] When Wizzo asks, select **at least 3 focus areas** (e.g., Accessibility, Security, Usability)
- [ ] Choose a format (Traditional, BDD/Gherkin, or Test Charter)
- [ ] Review the generated test cases

**What to test:** "Help me test the Uber ride booking flow"

---

### Method 2: Modal Flow from Test Scrolls Subtab
- [ ] Go to Home Tab → Test Scrolls subtab
- [ ] Click **"Forge Test Scrolls"** button
- [ ] Step 1: Select a product
- [ ] Step 2: Optionally select a feature
- [ ] Fill in test requirements in the text area
- [ ] Select **at least 3 focus areas**
- [ ] Choose format
- [ ] Click "Forge Test Scrolls" and wait for DM with results

**What to test:** "Test the payment processing for edge cases like network failures"

---

### Method 3: Create with Image Upload
- [ ] Click **"New Chat"** button to start conversational flow
- [ ] Upload a screenshot/image (PNG or JPG) in the DM
  - **Ready-to-use screenshots:** Browse [/screenshots folder](https://github.com/EpicTestQuest/quest-for-quality/tree/main/screenshots) with examples for:
    - **Uber**: `uber-signup.png` (registration), `uber-help-errors.png` (payment errors)
    - **Airbnb**: `airbnb-login.png` (login), `airbnb-signup.png` (registration), `airbnb-help-errors.png` (booking errors)
    - **Amazon**: `amazon-signin.png` (login), `amazon-register.png` (registration), `amazon-help-errors.png` (payment declined), `amazon-cart-error.png` (cart errors)
    - **Stripe**: `stripe-login.png` (dashboard login)
  - **Alternatively:** Take your own screenshot of any login, signup, or error page
- [ ] Type: "Generate test cases for this screen focusing on usability and accessibility"
- [ ] Wizzo will show "Forge Test Scrolls" button after seeing your image
- [ ] Click the button to start the modal flow with image context
- [ ] Complete the product selection and test details
- [ ] Review how Wizzo uses the image context in test cases

---

### Method 4: Generate from GitHub PR or Issue
- [ ] Click **"New Chat"** button to start conversational flow
- [ ] Paste a GitHub PR or Issue URL:
  - `https://github.com/EpicTestQuest/quest-for-quality/pull/56`
- [ ] Wizzo shows a preview card with PR/Issue details
- [ ] Click **"Generate Tests"** button on the preview card
- [ ] Select product when asked: **Airbnb**
- [ ] At the requirements gathering stage, paste the PR URL again or let Wizzo use the context
- [ ] Notice how Wizzo auto-suggests focus areas from PR labels
- [ ] Complete the flow and review generated tests
- [ ] Check that generated tests reference PR context (acceptance criteria, technical details)

---

### Method 5: Craft Your Own (Manual Entry)
- [ ] Go to Home Tab → Test Scrolls subtab
- [ ] Click **"Craft Your Own"** button
- [ ] Fill in: Title, Content (paste your own test case), Product
- [ ] Optionally select a feature if one exists
- [ ] Save and verify it appears in your test scrolls

**Suggested test case:**
```
Title: Login with invalid credentials
Content:
1. Navigate to login page
2. Enter invalid username and password
3. Click "Login"
Expected: Error message displayed, user remains on login page
```

---

## Part 3: GitHub Integration Testing

### Generate from Multiple PR Types
- [ ] **Large PR (complex):** Use PR #56 (Airbnb - 287 files changed)
  - Verify Wizzo extracts acceptance criteria from the massive PR description
  - Check focus areas suggested from labels: `airbnb`, `qa-review-needed`, `feature`
- [ ] **Feature PR (standard):** Use PR #55 (Uber - surge pricing)
  - URL: `https://github.com/EpicTestQuest/quest-for-quality/pull/55`
  - Verify enrichment works for Uber product
- [ ] **Security PR:** Use PR #54 (Stripe - PCI compliance)
  - URL: `https://github.com/EpicTestQuest/quest-for-quality/pull/54`
  - Check if security focus areas are auto-suggested

---

### Post Test Case to GitHub
- [ ] Find any test case card in your Test Scrolls subtab
- [ ] Click on the test case to **view it in detail**
- [ ] In the test case viewer, look for **"Post to GitHub"** button
- [ ] Click it and select a PR/Issue to post to
- [ ] Go to GitHub and verify the test case appears as a comment
- [ ] Check formatting (should be readable markdown)

---

## Part 4: Jira Integration Testing (Optional)

**Prerequisites:** You must have connected Jira OAuth (one-time setup)

### Generate from Jira Ticket
- [ ] Go to Home Tab → Test Scrolls subtab → **"Forge Test Scrolls"**
- [ ] Select a product (e.g., Chase Mobile Banking)
- [ ] In the **"Jira Issue URL"** field, paste a ticket from:
  - `https://epictestquest.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog`
- [ ] Verify Wizzo shows "✅ SCRUM-XXX: [ticket title]"
- [ ] Check that test cases include Jira acceptance criteria

**Note:** If you don't see the Jira URL field, you may need to connect Jira first (Home Tab → Wizzo's Workshop → "Connect to Jira")

---

### Post Test Case to Jira
- [ ] Find any test case card in your Test Scrolls subtab
- [ ] Click on the test case to **view it in detail**
- [ ] In the test case viewer, look for **"Post to Jira"** button
- [ ] Click it and select a Jira ticket to post to
- [ ] Go to Jira and verify the test case appears as a comment
- [ ] Check formatting (should be readable)

---

## Part 5: Quality Parties

### Start a Quality Party
- [ ] In any Slack channel (or #wizzo-beta-testing), type: `/start-party`
- [ ] Modal appears - fill in:
  - **Session Type:** Choose Test Case, Product, or Feature
  - **Subject:** Select which test case/product/feature to discuss
  - **Goal:** Pick one of the 11 goals
    - For Test Cases: Gap Analysis, Test Improvement, Cross-Platform, Accessibility, or Test Data
    - For Products/Features: Test Strategy, Quality Metrics, Exploratory Testing, Knowledge Transfer, Integration Testing, or Customer Scenarios
  - **Duration:** Choose 6h, 12h, 24h, 48h, 72h, or 96h
- [ ] Click "Start Quality Party"
- [ ] Verify Wizzo posts initial insights to the thread

**Suggested test:**
- Session Type: Feature
- Feature: Pick any (e.g., "Uber - Driver & Rider Safety")
- Goal: 🎭 Customer Scenarios
- Duration: 24h

---

### Participate in Someone Else's Quality Party
- [ ] Find an active Quality Party thread in the channel
- [ ] Reply in the thread with **at least 2 meaningful messages**
  - Share ideas, ask questions, or contribute scenarios
  - Example 1: "What about edge cases like network disconnection during ride?"
  - Example 2: "We should also test accessibility for blind riders in emergencies"
- [ ] **Mention @wizzo** in the thread to get AI facilitation
- [ ] Observe how Wizzo facilitates with adaptive responses (suggestions or questions)

---

### End a Quality Party
- [ ] Find a Quality Party thread with **at least 4 user messages** from participants (not counting Wizzo)
- [ ] Click the **"End Party"** button in the thread
- [ ] Verify Wizzo posts a final party analysis with insights and outcomes

**Note:** This may require async testing if you chose 24h+ duration

---

## Part 6: Focus Break

### Play 2048
- [ ] Go to Home Tab → 🧠 Focus Break tab
- [ ] Click on **2048** game
- [ ] Play for 1-2 minutes
- [ ] Verify the game works smoothly
- [ ] Note your experience (relaxing? distracting? helpful?)

---

### Play Wordle
- [ ] Go to Home Tab → 🧠 Focus Break tab
- [ ] Click on **Wordle** game
- [ ] Play one round
- [ ] Verify the game works correctly
- [ ] Note your experience

---

## Testing Complete! 🎉

Thank you for completing the beta testing checklist! Don't forget to share your overall experience and any final thoughts in your GitHub Discussion thread.

---

## Common Issues to Watch For

- [ ] **GitHub private repo error:** If you try a private repo PR, did you get a clear "Notify Admin" option?
- [ ] **Jira OAuth expiration:** If Jira token expires, does auto-refresh work or do you get a reconnect prompt?
- [ ] **Multiple GitHub URLs:** If you paste 2+ PR URLs, does Wizzo handle them correctly?
- [ ] **Invalid URLs:** Do you get helpful error messages?
- [ ] **Modal timeouts:** Do modals respond within 3 seconds or do you get timeout errors?
- [ ] **AI generation failures:** If test generation fails, is the error message clear?

---

## Edge Cases Worth Testing (Optional)

If you have extra time, try these scenarios:

- [ ] **Invalid GitHub URL:** Paste a random URL and verify error handling
- [ ] **Private GitHub repo:** Try a PR from a private repo not in the GitHub App installation
- [ ] **Expired Jira session:** Disconnect and reconnect Jira OAuth
- [ ] **Concurrent Quality Parties:** Start 2-3 parties in different channels simultaneously

---

**Thank you for beta testing Wizzo! Your feedback helps us build a better product. 🙏**
