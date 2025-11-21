# Welcome! Here's Your Wizzo Beta Testing Checklist

**You'll need:** 30-45 minutes

**Pre-requisites:** GitHub App and Jira OAuth already configured

---

## ❤️ A Quick Note of Thanks Before We Begin
Aaron and I are incredibly grateful that you are a part of this project! We can't tell you how excited we are to be in this beta phase afer months of hard work. You are a part of this group because we believe in your expertise and judgement. And, of course, because you are one of those rare few that belong in the "early-adopter" category. 

Thank you from the bottom of our hearts for investing your time and insights into building a tool we will all be proud to call our own once it releases to the big wide world.

---

## Important Note About Test Data

To make your beta testing experience as realistic as possible, we've created a comprehensive test repository with:
- 50+ GitHub PRs and Issues across multiple products (Uber, Airbnb, Amazon, Chase, Stripe)
- Jira stories and tickets
- Product screenshots captured from real apps

**Note**: Test data (PRs, Issues, Jira tickets, screenshots) was generated with AI assistance, so you might spot occasional quirks. That's totally fine! Focus on testing whether Wizzo handles everything properly, not whether the test data is perfect because we'll continue refining it. 

---

## Resources

- **In-Depth Getting Started Guide (Optional):** [Detailed documentation](https://api.epictestquest.com/docs/) - We also have a short onboarding video in the Slack Home tab!
- **GitHub Test Repo:** https://github.com/EpicTestQuest/quest-for-quality
- **Example Screenshots:** https://github.com/EpicTestQuest/quest-for-quality/tree/main/screenshots
- **Jira Board:** https://epictestquest.atlassian.net/jira/software/projects/SCRUM/list
- **Report Progress:** [GitHub Discussions](https://github.com/EpicTestQuest/quest-for-quality/discussions) - Find your personal thread!
- **For Questions or Immediate Contact:** Slack channel: #beta-testing
- **📢 Important Updates:** We'll post any major issues, fixes, or critical updates in #beta-testing - check there if something seems off!

---

## How to Report Your Findings

We've created a **personal GitHub Discussion** for each tester to track progress and report findings!

### Three Ways to Comment

**1️⃣ Quick Progress Updates** (after completing sections)
```
✅ Part 2 done! Methods 1-3 worked great, Method 4 had a bug (see below)
```

**2️⃣ Detailed Bug Reports** (when you find issues)
```
❌ Bug - Method 4 GitHub Integration
- Pasted PR #55, preview showed, but "Generate Tests" button missing
- Screenshot: [link]
```

**3️⃣ Suggestions & Questions** (anytime)
```
💡 The focus areas dropdown could use helper text - wasn't sure how many to pick
```

### Your Discussion Thread:
1. Go to [GitHub Discussions](https://github.com/EpicTestQuest/quest-for-quality/discussions)
2. Find **"Beta Testing Report - [Your Name]"**
3. Click **"Comment"** at the bottom
4. Use the examples above as inspiration!

**Note:** You can comment as many times as you want - one per section, one per bug, or save it all for one big update at the end!

---
## Ready? Let's Go!
---
## Part 1: Products, Features & Personas

### Create a Product
- [ ] Go to Home Tab → 💎 Products tab → Products subtab
- [ ] Click **"Conjure Product"** button
- [ ] Fill in the fields
- [ ] Save and verify it appears in your products list

---

### Create a Feature
- [ ] Go to Home Tab → 💎 Products tab → Features subtab
- [ ] Click **"Conjure New Feature"** button
- [ ] Select a product from dropdown
- [ ] Fill in the fields
- [ ] Save and verify it appears in features list

---

### Create a Persona
- [ ] Go to Home Tab → 💎 Products tab → Personas subtab
- [ ] Click **"Create Persona"** button and create persona
...**OR**
- [ ] Click **"Browse Templates"** button and create persona from that
- [ ] Save and verify it appears in personas list

---

## Part 2: Test Scrolls - 4 Different Ways

### Method 1: Conversational Flow with Persona
- [ ] Go to Home Tab → Test Scrolls subtab
- [ ] Click **"New Chat"** button (top right)
- [ ] In the chat conversation, either click **"Forge Test Scrolls"** or write what you want to test
- [ ] Go through the flow and create test cases
- [ ] Review the generated test cases
- [ ] Choose and save one permanently

**Example prompt:** "Help me test the Uber ride booking flow"

---

### Method 2: Create with Image Upload
- [ ] Click **"New Chat"** button to start conversational flow
- [ ] Upload a screenshot/image (PNG or JPG) during the requirement step in the chat flow
  - **Ready-to-use screenshots:** Browse [/screenshots folder](https://github.com/EpicTestQuest/quest-for-quality/tree/main/screenshots)
  - **Alternatively:** Take your own screenshot of any login, signup, or error page
- [ ] Review how Wizzo uses the image context in test cases

---

### Method 3: Modal Flow from Test Scrolls Subtab
- [ ] Go to Home Tab → Test Scrolls subtab
- [ ] Click **"Forge Test Scrolls with Wizzo"** button
- [ ] Select a product
- [ ] Fill in all the required fields
- [ ] Select **at least 2 focus areas**
- [ ] Click "Forge Test Scrolls" and wait for DM with results

**Example prompt:** "Test the payment processing for edge cases like network failures"

---

### Method 4: Craft Your Own (Manual Entry)
- [ ] Go to Home Tab → Test Scrolls subtab
- [ ] Click **"Craft Your Own"** button
- [ ] Fill in: Title, Content (paste your own test case), Product
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

### Generate a Test Case from One PR Type
- [ ] Click **"New Chat"** button to start conversational flow
- [ ] **Choose one PR from https://github.com/EpicTestQuest/quest-for-quality/pulls**
- [ ] Paste your chosen GitHub PR URL or Issue URL in the requirement step
  - e.g. URL: `https://github.com/EpicTestQuest/quest-for-quality/pull/56`,`https://github.com/EpicTestQuest/quest-for-quality/pull/55`
- [ ] Complete the flow and review generated tests
- [ ] Check that generated tests reference PR context (acceptance criteria, technical details)
  - Verify Wizzo extracts acceptance criteria from the massive PR description

---

### Post Test Case to GitHub
- [ ] Find any test case card in your Test Scrolls subtab
- [ ] Click on the test case to **view it in detail**
- [ ] In the test case viewer, look for **"Post to GitHub"** button
- [ ] Click it and paste a PR/Issue URL to post to
- [ ] Go to GitHub and verify the test case appears as a comment

---

## Part 4: Jira Integration Testing

**Prerequisites:** You must have connected Jira OAuth (one-time setup)

### Generate from Jira Ticket
- [ ] Go to Home Tab → Test Scrolls subtab → **"Forge Test Scrolls"**
- [ ] Select a product (e.g., Chase Mobile Banking)
- [ ] In the **"Jira Issue URL"** field, paste a ticket from:
  - `https://epictestquest.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog`
- [ ] Check that test cases include Jira acceptance criteria

**Note:** If you don't see the Jira URL field, you may need to connect Jira first (Home Tab → Wizzo's Workshop → "Connect to Jira")

---

### Post Test Case to Jira
- [ ] Find any test case card in your Test Scrolls subtab
- [ ] Click on the test case to **view it in detail**
- [ ] In the test case viewer, look for **"Post to Jira"** button
- [ ] Click it and enter a Jira ticket to post to
- [ ] Go to Jira and verify the test case appears as a comment
- [ ] Check formatting (should be readable)

---

## Part 5: Quality Parties

### Start a Quality Party
- [ ] In any Slack channel (or #wizzo-beta-testing), type: `/start-party`
- [ ] Modal appears - fill in or select fields and lists
- [ ] Click "Start Quality Party"
- [ ] Verify Wizzo posts initial insights to the thread

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
- [ ] Go to Home Tab → 🧠 Focus Break tab
- [ ] Play for 1-2 minutes any of the games
- [ ] Verify the game works smoothly

---

## Testing Complete! 🎉

YAY, you've completed the beta testing checklist! Thank you so much for being part of this project! Your feedback is so important, so don't forget to share your overall experience and any final thoughts in your GitHub Discussion thread.

---

## Common Issues to Watch For

**Known Issues (We're Working On These!):**
- [ ] **First message not processed:** In conversational flow, sometimes the first message you send isn't processed when Wizzo asks for requirements. If this happens, simply copy/paste your original message into the requirements prompt. Please note when this occurs!
- [ ] **GitHub OR Jira detection (not both):** Wizzo currently detects either GitHub OR Jira URLs in test generation, not both simultaneously. GitHub has priority if both are present. For now, use them separately in different test generation sessions.
- [ ] **Home tab switching performance:** Switching between tabs may take 2-3 seconds. This is expected as we optimize performance!
- [ ] **Posting format to GitHub/Jira:** The formatting when posting test cases to GitHub or Jira is still being refined and may look rough. However, all data should be present - if any content is missing, that's a bug! Please report it.

---

**Thank you for beta testing Wizzo! Your feedback will help shape the future of testing. 🥳**
