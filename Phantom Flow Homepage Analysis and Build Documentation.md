# Phantom Flow Homepage: Analysis and Build Documentation

Nov 17, 2026 · @Harsh Prajapati

## Purpose and scope

This document describes the Phantom Flow homepage (`/`) in enough detail to rebuild it: every section, its colours, its construction, and the requirements behind it. It covers the homepage only. Other pages, the blog and the payment gateway are out of scope.

**Evidence used, and how each finding is labelled:**

| Label | Meaning | Source |
| --- | --- | --- |
| Observed | Seen in the rendered page text or head tags | Page fetched 17 Nov 2026 |
| CSS Peeper | A colour you captured with the extension | Your JSON palette |
| Inferred | Reasoned from the content or layout | Analyst judgement |
| To verify | Needs a look at the live HTML or CSS | Steps in the last section |

**Limit you should know about.** Raw HTML could not be downloaded from this workspace, because outbound access to the site is blocked. Section order, copy, headings, anchors and head tags are observed. Class names, exact tag choices, spacing and fonts are not, so they are marked To verify, with a checklist for you to complete in DevTools.

**Who it is for:** a designer or developer who needs a build specification, and a product owner who needs to check the page against requirements.

## Colour system

The page's captured palette is strictly monochrome: pure black, near-black, light grey and white. The only other colour on record is the browser theme colour #1c1917, a warm near-black that CSS Peeper did not list because it is a `<meta>` tag, not a CSS value on the page.

| Token (suggested) | Hex | RGB | Likely role | Source | Confidence |
| --- | --- | --- | --- | --- | --- |
| `--color-black` | `#000000` | 0, 0, 0 | Body or heading text on light surfaces; possibly the darkest backgrounds | CSS Peeper | Role is inferred |
| `--color-ink` | `#0A0A0A` | 10, 10, 10 | Dark section backgrounds, primary button fill, text on light surfaces | CSS Peeper | Role is inferred |
| `--color-line` | `#E5E5E5` | 229, 229, 229 | Card borders, dividers, subtle panels, secondary text on dark | CSS Peeper | Role is inferred |
| `--color-white` | `#FFFFFF` | 255, 255, 255 | Light page background, card fill, text on dark | CSS Peeper | Role is inferred |
| `--color-theme` | `#1C1917` | 28, 25, 23 | Browser address bar and tab colour on mobile | `<meta name="theme-color">` | Observed |

**What the values suggest.** `#0A0A0A` and `#E5E5E5` match Tailwind CSS's default neutral-950 and neutral-200, and `#1C1917` matches its stone-900. That points to a Tailwind-based build, but it is an inference. Confirm it by looking for classes such as `bg-neutral-950` or `border-neutral-200` in the Elements panel.

**Contrast checks** (WCAG ratio, calculated; 4.5:1 is the minimum for body text):

| Pair | Ratio | Use it for |
| --- | --- | --- |
| White on `#0A0A0A` | 19.8:1 | Body text on dark sections |
| `#E5E5E5` on `#0A0A0A` | 15.7:1 | Secondary text on dark sections |
| `#000000` on white | 21:1 | Body text on light sections |
| `#E5E5E5` on white | 1.26:1 | Borders and dividers only, never text |

**Gaps in the palette.** The copy refers to green buy arrows and red sell arrows, and to green or red candles. Those colours were not captured, so they probably live in the demo video and chart images, not the page's CSS. No link, hover, focus or accent colour was captured either. Capture these before building: button hover, link colour, focus ring, FAQ or card hover, and any gradient.

## Final homepage analysis

The homepage has 12 building blocks: one non-visual head block and 11 visible sections, in the order below. The **Colours** column is a proposal drawn from your CSS Peeper palette, not a reading of the live page, so check each section's real background and text colour before you lock it. The **How it is created** column gives the recommended construction; tag names and layout are inferred from the content and marked where they need checking.

| # | Section and anchor | Purpose | Description (observed content) | Colours (proposed) | How it is created |
| --- | --- | --- | --- | --- | --- |
| 0 | Document head and tracking | Search, sharing and ad measurement | Title "Phantom Flow — TradingView Chart Indicator"; description "A TradingView indicator that marks trend, structure and key zones in one overlay. $149 one-time."; canonical, robots `index, follow`, viewport, theme colour `#1c1917`; Open Graph and Twitter tags using a 222 by 206 logo; three Meta Pixel noscript image beacons; a plain-text business address line | Not visible. Theme colour `#1C1917` | `<head>` meta tags plus three `<noscript><img>` beacons at the top of `<body>`. Use your own pixel IDs and a visually hidden address block or footer text |
| 1 | Header and navigation | Orient the visitor and keep a buy button always in reach | Logo link to `/`; links Features `#features`, Pricing `#pricing`, FAQ `#faq`, Blog `/blog`, Documentation `/docs`, Support `/support`; button "Get Phantom Flow" to `#pricing` | Background `#0A0A0A` or `#FFFFFF`; text inverse; button filled with the opposite colour | `<header>` containing `<nav>` and a `<ul>` of links; flex row with logo left. Sticky behaviour and a mobile menu are likely but To verify |
| 2 | Hero | Hook within five seconds and start the sale | `<h1>` "Know when to buy. Know when to sell."; prompt "Does this sound like you?" with four lines (buy then price pulls back, sell then it keeps going, hold then it drops, hesitate then it runs); one paragraph promising zones on your chart and setup in under 2 minutes; button "Get Phantom Flow"; a "Live demo" element; bonus badge for Phantom AI Trading Coach ($240/yr value), free until 1 Dec | `#0A0A0A` background, `#FFFFFF` heading, `#E5E5E5` supporting text and badge border, white button with `#0A0A0A` text | `<section>` with a centred container, `<h1>`, `<ul>` of four items, `<a>` styled as a button, a 16:9 wrapper for the demo (`<video>` or `<iframe>`, To verify), and a pill-shaped badge link to `#pricing` |
| 3 | The root cause | Shift blame from the trader to missing structure | Label "The root cause"; `<h2>` "It's not you. It's how you're trading."; subline "It's not about being smarter or faster. It's about structure."; three cards: you don't know where to buy or sell, every indicator contradicts the last, no plan, just reacting | `#FFFFFF` background, `#0A0A0A` text, `#E5E5E5` card borders | `<section>` with label, `<h2>`, subline and a three-column grid of cards, each an `<h3>` plus `<p>`; stacks to one column on phones |
| 4 | The solution | Present the product as the fix | Label "The solution"; `<h2>` "What winning traders see that you don't."; subline "The difference isn't talent. It's what's on their chart."; three cards: see key price zones, one clear answer up or down, a repeatable process with alerts; closing line; button "See It On Your Chart" to `#pricing` | `#0A0A0A` background, `#FFFFFF` text, `#E5E5E5` card borders | Same pattern as section 3 with the colours reversed, so the two read as a pair; button is an `<a href="#pricing">` |
| 5 | Social proof | Build trust with peer voices | Label "From real traders"; `<h2>` "Thousands of traders use it daily."; six quotes, each with a handle and trader type (swing trader, forex, crypto and forex, day trader, part-time trader, forex GBP/USD) | `#FFFFFF` background, `#0A0A0A` text, `#E5E5E5` card borders | `<section>` with a grid of six `<blockquote>` cards, each with a `<footer>` or `<cite>` for the attribution. Grid or carousel is To verify |
| 6 | Features | Show what is included | `<h2>` "Everything you need. Nothing you don't."; six cards (trend shift signals, buy and sell zones, buy and sell signals, smart alerts, works on any market, private Discord); a seventh card for Phantom AI with a "Limited time bonus" tag and four sample questions with answers | `#0A0A0A` or `#FFFFFF` background; cards on `#E5E5E5` borders; bonus tag inverted | `<section id="features">`, a grid of seven `<article>` or `<div>` cards, and a chat-style block of question and answer pairs inside the last card |
| 7 | How it works | Remove fear of setup effort | Label "How it works"; `<h2>` "Set up in under 2 minutes."; subline "No coding. No downloads. No experience needed."; three steps: get Phantom Flow, add it to your chart, follow the signals | `#FFFFFF` background, `#0A0A0A` text, numerals in `#000000` | `<section>` with an `<ol>` of three steps; each step has a number, `<h3>` and short `<p>`; horizontal on desktop, vertical on phones |
| 8 | Pricing and value stack (`#pricing`) | Justify $149 and convert | `<h2>` "One investment. Yours for life."; other indicators at $1,440 to $2,520 over three years ($40 to $70 a month); four benefits; itemised value (indicator suite $499, Discord $120/yr, alerts and any market included, Phantom AI $240/yr); total value $850+/yr; "You pay $149 once"; "one-time"; "Secure checkout via Stripe, Instant delivery"; two buttons. The checkout itself is out of scope | `#0A0A0A` background, `#FFFFFF` price, `#E5E5E5` struck-through or muted comparison figures | `<section id="pricing">` with two columns: a comparison column and an offer card containing a value list, a large price and buttons. Button behaviour is the payment gateway and is excluded |
| 9 | FAQ (`#faq`) | Answer objections before they leave | `<h2>` "Questions?" with subline "Everything you need to know."; seven questions on requirements, access, beginners, support, free trial, subscription, and "why sell it?" | `#FFFFFF` background, `#0A0A0A` text, `#E5E5E5` dividers | `<section id="faq">` with a list of `<h3>` question and `<p>` answer pairs. An accordion built from `<details>` and `<summary>` is possible but To verify |
| 10 | Lead capture | Keep non-buyers in touch | `<h2>` "Watch the $2K trade breakdown"; line "Setup, entry, and result — sent to your inbox." An email form is implied; no fields appear in the page text | `#0A0A0A` background, `#FFFFFF` heading, input border `#E5E5E5` | `<section>` with `<form>`, an `<input type="email">` and a submit button. Where the form posts is To verify |
| 11 | Footer | Navigation, legal and compliance | Four groups: Product (Features, Pricing, FAQ), Trading (Guide, Blog, Documentation, Support, SMC Glossary, Compare Indicators), Company (About us, Blog, Compare Indicators, Partner Program), Legal (Privacy Policy, Terms of Service, Refund Policy); risk disclaimer; address in Newark, Delaware; "© 2026 Phantom Flow. All rights reserved." | `#0A0A0A` background, `#E5E5E5` links and text, `#FFFFFF` on hover | `<footer>` with four `<nav>` or `<div>` columns each headed by an `<h3>`, followed by a bordered legal strip with the disclaimer and copyright |

**Arithmetic check on the page's own figures.** $40 to $70 a month over 12 months is $480 to $840 a year, and three years is $1,440 to $2,520, which matches the page. $499 plus $120 plus $240 is $859, which matches "$850+".

## Section build specs

Each spec lists the content model (the fields a developer or CMS must supply), layout, interactions and responsive behaviour. Layout and breakpoints are proposed requirements using Tailwind's default breakpoints (phone under 640 px, tablet 640 to 1023 px, desktop 1024 px and up). Copy is described by field, not repeated in full; take final copy from the live page.

### 0. Document head and tracking

- **Fields:** page title, meta description (about 150 characters), canonical URL, robots, viewport, theme colour, Open Graph (title, description, type, URL, image, size, alt, locale, site name), Twitter (card, site handle, title, description, image).
- **Social image:** the page uses a small 222 by 206 logo. For a better share preview, use a 1200 by 630 image and switch the Twitter card to `summary_large_image`.
- **Tracking:** three Meta Pixel `<noscript>` beacons for page view. A JavaScript pixel snippet should accompany them. Load it after consent where privacy law requires.

### 1. Header and navigation

- **Fields:** logo image and alt text; six links (label, href); one CTA (label, href).
- **Layout:** logo left, links centre or right, CTA far right. Height about 64 px.
- **Interactions:** anchor links scroll smoothly to `#features`, `#pricing` and `#faq`; CTA scrolls to `#pricing`; hover and focus states on every link.
- **Responsive:** below 1024 px collapse links into a menu button. Keep the CTA visible if space allows.

### 2. Hero

- **Fields:** H1, prompt line, four pain lines, promise paragraph, CTA, demo media (video file or embed URL, poster image, caption), bonus badge text and link.
- **Layout:** centred single column, or text left and demo right on desktop. Four pain lines read as a short stacked list with a pain icon or marker.
- **Interactions:** demo plays on click with controls; no autoplay with sound. Badge and CTA scroll to `#pricing`.
- **Responsive:** demo drops below the text on phones; H1 scales from about 32 px to 64 px.

### 3. The root cause

- **Fields:** label, H2, subline, three cards (H3 plus 25 to 35 word body).
- **Layout:** centred header block over a three-column card grid with equal heights.
- **Responsive:** three columns on desktop, one on phones.

### 4. The solution

- **Fields:** label, H2, subline, three cards (H3 plus 15 to 25 word body), closing line, CTA.
- **Layout:** mirrors section 3 with inverted colours so the problem and solution read as a pair.

### 5. Social proof

- **Fields per quote:** quote text (20 to 60 words), handle, trader type, optional market or pair.
- **Layout:** six cards in a 3 by 2 grid on desktop, two columns on tablet, one on phones.
- **Requirements:** store testimonials as data, with consent and a way to verify each, so the section can be updated without a code change.

### 6. Features

- **Fields per card:** title and one-sentence description (six cards). Phantom AI card: title, tag text, intro line, four question and answer pairs.
- **Layout:** three columns by two rows for the six cards; the Phantom AI card spans the full width below them with the Q and A set as a chat-style list.
- **Interactions:** cards are static; optional hover lift. The Phantom AI exchanges could animate in on scroll.
- **Anchor:** `id="features"` on the section.

### 7. How it works

- **Fields:** label, H2, subline, three steps (number, H3, one-sentence body).
- **Layout:** three columns with connecting line on desktop; vertical list on phones.

### 8. Pricing and value stack

- **Fields:** H2; comparison panel (title, three-year range, monthly range, annual range, risk line); four benefit lines; value list (item, value or "Included"); bonus deadline; total value; price; billing note; trust note; two CTAs.
- **Layout:** two panels side by side on desktop, stacked on phones. The offer panel is visually dominant: large price, check-marked value list, full-width button.
- **Requirements:** the bonus deadline (1 Dec 2026) must come from a single configuration value, so the badge in the hero, the Phantom AI card and this section stay in sync and expire together.
- **Out of scope:** what happens when a CTA is pressed (checkout and payment).
- **Anchor:** `id="pricing"`.

### 9. FAQ

- **Fields per item:** question, answer (one to four sentences; the "why sell it?" answer runs longer).
- **Layout:** single narrow column, readable line length of about 70 characters.
- **Interactions:** recommended accordion with one item open at a time, keyboard operable, using `<details>` and `<summary>` or `aria-expanded` buttons.
- **Anchor:** `id="faq"`. Add FAQ structured data if you want rich search results.

### 10. Lead capture

- **Fields:** H2, subline, email input with label, submit button, consent text, success and error messages.
- **Interactions:** validate email, show inline errors, disable the button while sending, confirm on success. Send to your email service by a server endpoint, never with a key in the browser.
- **Requirements:** state that the email is used to send the breakdown, and link the privacy policy.

### 11. Footer

- **Fields:** four columns of links (label, href), disclaimer paragraph, address, copyright year.
- **Layout:** four columns on desktop, two on tablet, one on phones; legal strip below with a divider in `#E5E5E5`.
- **Requirements:** copyright year generated automatically; risk disclaimer visible on the homepage.

## Functional requirements

The homepage needs 19 functional requirements. Priority uses Must, Should and Could. Requirement FR-07 depends on the payment gateway, which is outside this document; it is listed so the dependency is not forgotten.

| ID | Requirement | Section | Priority | Acceptance test |
| --- | --- | --- | --- | --- |
| FR-01 | Serve the page at `/` with the 11 visible sections in the order given in the analysis table | All | Must | Scrolling from top to bottom shows the sections in order |
| FR-02 | Header links Features, Pricing and FAQ scroll to their section ids | 1 | Must | Each click lands on the correct heading, not hidden under the header |
| FR-04 | Header CTA "Get Phantom Flow" goes to `#pricing` | 1 | Must | Click scrolls to the pricing section |
| FR-05 | Hero demo plays only when the visitor presses play | 2 | Must | No sound or motion on load; controls work by mouse and keyboard |
| FR-06 | Every CTA (hero, solution, pricing, bonus badge) leads to the pricing offer | 2, 4, 8 | Must | Four CTAs, one destination |
| FR-07 | The pricing CTA starts checkout | 8 | Must | Depends on the payment gateway (out of scope) |
| FR-08 | Price, value-stack lines and totals come from one configuration source | 8 | Must | Changing the price in config updates every place it appears |
| FR-09 | The bonus deadline (1 Dec 2026) is one configuration value that controls the hero badge, the Phantom AI tag and the pricing bonus line | 2, 6, 8 | Must | After the date, all three change or disappear together |
| FR-10 | FAQ items open and close and are fully keyboard operable | 9 | Must | Tab, Enter and Space work; screen reader announces state |
| FR-11 | Email form validates the address, submits to an email service and shows success or error | 10 | Must | Valid email gives a confirmation; invalid email shows an inline error |
| FR-12 | Testimonials render from a data list | 5 | Should | Adding a record adds a card with no code change |
| FR-13 | Phantom AI exchanges appear as static examples unless a live assistant is confirmed on the real page | 6 | Should | Four example pairs shown; no live input unless approved |
| FR-14 | Footer links to Guide, Docs, Support, Glossary, Compare, About, Partner, Privacy, Terms and Refund pages | 11 | Must | No broken links |
| FR-15 | Copyright year is generated from the current date | 11 | Should | Shows the current year on 1 Jan |
| FR-16 | Risk disclaimer is visible on the page | 11 | Must | Disclaimer text present in the footer |
| FR-17 | Meta Pixel page view fires, and respects consent where required | 0 | Must | Event appears in the platform's test tool |
| FR-18 | Navigation collapses to a menu on screens under 1024 px | 1 | Must | Menu opens, closes with Escape, traps focus while open |
| FR-19 | Smooth scrolling is disabled for visitors who prefer reduced motion | All | Should | Setting honoured in browser test |

## Non-functional requirements

These targets are proposals for the rebuild. The live page's current scores were not measured.

| Area | Requirement | Target | How to test |
| --- | --- | --- | --- |
| SEO | One `<h1>`, then `<h2>` per section and `<h3>` for cards, with no skipped levels | 1 H1; no level skips | Headings outline in DevTools or an SEO extension |
| SEO | Title, description, canonical, robots, Open Graph and Twitter tags on the page | All present | View source |
| SEO | Optional FAQ structured data and Organization data | Valid markup | Rich Results Test |
| Performance | Largest Contentful Paint | 2.5 s or less on mobile | Lighthouse, PageSpeed Insights |
| Performance | Cumulative Layout Shift | 0.1 or less | Lighthouse |
| Performance | Interaction to Next Paint | 200 ms or less | Chrome UX Report or DevTools |
| Performance | Images in WebP or AVIF with width and height set; demo video loaded only on demand | No oversized images | Lighthouse image audits |
| Performance | Fonts limited to two families, `font-display: swap` | 2 families | Network tab |
| Accessibility | WCAG 2.2 level AA | Zero critical issues | axe DevTools plus manual keyboard pass |
| Accessibility | Text contrast 4.5:1 or better; `#E5E5E5` used only for borders on white | See colour section | Contrast checker |
| Accessibility | Visible focus ring, skip-to-content link, alt text on images, labelled form field | All present | Keyboard-only walk-through |
| Responsive | Works from 320 px to 1920 px wide with no horizontal scroll | Pass at 320, 768, 1024, 1440 | Responsive mode in DevTools |
| Browser support | Last two versions of Chrome, Edge, Safari, Firefox; iOS Safari and Chrome for Android | Pass | Cross-browser test run |
| Privacy | Consent before the tracking script where the law requires; privacy policy linked at the form | Compliant | Cookie and network inspection |
| Security | HTTPS with HSTS; security headers; form endpoint rate-limited; no secret keys in client code | Pass | Header scanner, code review |
| Compliance | Risk disclaimer visible; no promise of results; testimonials only with permission; user-count and value claims backed by records | Reviewed | Legal and marketing sign-off |
| Maintainability | Colours, spacing, type and the bonus deadline held in tokens or config, not repeated by hand | One source each | Code review |

## Components, stack and file structure

The 11 sections reduce to ten reusable components. Building these once keeps the page consistent and lets the other site pages reuse them.

| Component | Used in | Fields | Variants |
| --- | --- | --- | --- |
| `SiteHeader` | 1 | logo, links, CTA | Light, dark; desktop bar, mobile menu |
| `Button` | 1, 2, 4, 8, 10 | label, href or type, size | Primary (fill), secondary (outline); hover, focus, disabled |
| `SectionHeader` | 3 to 10 | label, H2, subline | Centred; light or dark theme |
| `Card` | 3, 4, 5, 6 | title, body, optional tag | Plain, quote, feature, bonus |
| `Badge` | 2, 6 | text, link | Pill, tag |
| `MediaEmbed` | 2 | source, poster, caption | Video file, iframe |
| `StepList` | 7 | steps (number, title, body) | Horizontal, vertical |
| `Accordion` | 9 | items (question, answer) | Single open, multi open |
| `EmailForm` | 10 | label, button text, consent text, endpoint | Idle, sending, success, error |
| `SiteFooter` | 11 | link groups, disclaimer, address, year | Four-column, stacked |

### Suggested stack

This is a recommendation, not what the live site uses. The colour values point towards Tailwind CSS, but the framework is unconfirmed.

- **Framework:** Astro or Next.js, using static generation for speed and search visibility.
- **Styling:** Tailwind CSS with the palette as design tokens.
- **Interactivity:** small islands of JavaScript for the menu, accordion, form and video; no heavy framework needed on this page.
- **Content:** a typed data file for testimonials, features, FAQ and footer links.
- **Forms:** a server route or serverless function that calls your email service.
- **Hosting:** any static host with a CDN and automatic HTTPS.

### Design tokens

```json
{
  "colors": {
    "black": "#000000",
    "ink": "#0A0A0A",
    "line": "#E5E5E5",
    "white": "#FFFFFF",
    "theme": "#1C1917"
  },
  "breakpoints": { "sm": "640px", "md": "768px", "lg": "1024px", "xl": "1280px" }
}
```

### Suggested file structure

```text
src/
  pages/
    index              Homepage; assembles the sections in order
  components/
    SiteHeader, SiteFooter, Button, Badge, Card
    SectionHeader, MediaEmbed, StepList, Accordion, EmailForm
  sections/
    Hero, RootCause, Solution, SocialProof, Features
    HowItWorks, PricingStack, Faq, LeadCapture
  data/
    testimonials, features, faq, navigation, offer
  styles/
    tokens, base
public/
  assets/              Logo, social image, demo poster
```

## Build steps and acceptance checklist

### Build steps

1. **Confirm the open items** in the last section: capture the missing colours, fonts and spacing from the live page.
2. **Set up the project** with the framework, Tailwind CSS and the token file.
3. **Build the shared components:** Button, SectionHeader, Card, Badge first, then the others.
4. **Build sections 1 to 11** in page order, using placeholder data files.
5. **Add behaviour:** anchor scrolling, mobile menu, accordion, video play, email form.
6. **Add head tags and tracking:** metadata, social image, pixel with consent.
7. **Fill the content** from the data files and review every figure against its source.
8. **Check responsive layouts** at 320, 768, 1024 and 1440 px.
9. **Run performance, accessibility and link checks** and fix what fails.
10. **Integrate checkout** under the separate payment work, then run an end-to-end test.
11. **Launch,** then monitor page views, form submissions and CTA clicks.

### Acceptance checklist

- [ ] All 11 sections appear in the order of the analysis table
- [ ] Header, hero, solution and pricing CTAs all reach the pricing offer
- [ ] Colours match the approved palette and pass contrast checks
- [ ] Hero demo plays on request, with captions or a transcript
- [ ] FAQ works by mouse, keyboard and screen reader
- [ ] Email form validates, submits and confirms
- [ ] One configuration value controls the bonus deadline everywhere
- [ ] Mobile menu works and the page has no horizontal scroll at 320 px
- [ ] Lighthouse mobile scores are 90 or higher for performance, accessibility, best practices and SEO
- [ ] Head tags, social preview and tracking verified
- [ ] Footer links all resolve and the risk disclaimer is visible
- [ ] Copy, testimonials and figures approved by the owner

## Open items and appendix

These items need the live HTML or CSS, which could not be downloaded from this workspace. Each can be finished in a few minutes with DevTools (right-click, Inspect) and CSS Peeper.

| Item | Where to look | What to record |
| --- | --- | --- |
| Section background and text colour | Click each section in Elements, read Computed styles; run CSS Peeper on each section | Which of the four colours each section uses |
| Accent, link, hover and focus colours | Hover each button, link and card; Styles panel | Hex values for every state |
| Fonts | Computed tab, then Fonts in the Rendered Fonts pane | Family, weights, sizes for H1, H2, H3, body, label |
| Spacing and container width | Computed box model on a section and its container | Section padding, max width, grid gap |
| Tags and classes | Elements panel on each section | Tag names, ids, and whether Tailwind-style classes appear |
| Header behaviour | Scroll the page and resize the window | Sticky or fixed; mobile menu style |
| Demo element | Elements panel on the "Live demo" block | `<video>` or `<iframe>`, source, poster, controls |
| FAQ behaviour | Inspect one question | `<details>` or script-driven accordion |
| Testimonials layout | Resize the window | Grid or carousel, number of columns per width |
| Email form | Network tab while submitting a test address | Endpoint, fields, success message |
| Scripts and styles | Page source and Sources panel | Framework bundle names, analytics scripts, stylesheets |
| Images | Network tab, filter by Img | Formats, sizes, logo and social image files |

### Appendix: CSS Peeper colours as supplied

```json
{
  "CSS Peeper Colors": {
    "000000": "#000000",
    "0A0A0A": "#0A0A0A",
    "E5E5E5": "#E5E5E5",
    "FFFFFF": "#FFFFFF"
  }
}
```

The browser theme colour `#1C1917` comes from the page's head tags and is not in this list.
