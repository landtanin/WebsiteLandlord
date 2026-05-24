# Birmingham Spray Foam Removal — Site Content Brief (v3)

**Purpose of this document:** Complete content and structure brief for Claude Code to scaffold the site. Each page section specifies URL, meta tags, H1, section structure with talking points, internal linking, schema markup, and CTA placement. Drafting actual page copy from these briefs is a separate pass.

**v3 changes** (from positioning correction): The site is an **independent information resource and enquiry-routing service** — not a removal contractor and not (yet) a network of vetted specialists. Cost figures now require attributed UK industry sources. Schema is downgraded from LocalBusiness to Organization until partners and physical address exist. New legal/compliance guardrails for ASA/CAP, GDPR consent, and referral-fee disclosure.

**v3.1 changes** (commercial-tone correction): Commercial pages (homepage, area pages, cost, process) use **ambiguous "we" language** — they read like a service provider without making specific false claims. The "we are not a contractor" disclosure moves off commercial pages and lives only on About, footer (one line), form fine print, and privacy policy. The "What we do" three-column section is removed from the homepage. Phone CTA is now sticky in the header and dominant in the hero. This is the standard UK lead-gen pattern and sits within CAP Code tolerances **provided** specific factual claims (price, insurance, certifications) remain substantiable.

**v2 changes** (from SEO review, retained): Schema corrections (FAQPage and HowTo removed — both obsolete per 2023 Google changes); AEO/GEO formatting added to content style guide; title-tag formula, image SEO, hreflang, security headers, llms.txt, AI-crawler robots policy, expanded keyword set, pillar/cluster structure, content depth floors.

---

## 0. Project Overview

**Site:** Birmingham Spray Foam Removal (trading name TBD — examples: "Birmingham Spray Foam Solutions", "Spray Foam Removal Birmingham", "BSFR")
**Legal entity:** Trading name of Taninnovate Ltd
**Positioning:** Birmingham-focused **independent information resource and enquiry-routing service**. We help Birmingham homeowners understand spray foam insulation problems and connect them with local removal specialists when they're ready for a quote. **We are not a removal contractor, we have no own-staff surveyors, and we do not perform removal work.** We earn a referral fee when introductions lead to completed work.
**Primary audience:** Homeowners in Greater Birmingham who had spray foam insulation installed 5–20 years ago and now face mortgage, sale, or damage problems.
**Primary commercial action:** Phone call (rings to founder personally during phase 1) or enquiry form. Both capture details for partner routing once supply side is signed.
**Geographic scope:** Greater Birmingham + immediate West Midlands (Solihull, Sutton Coldfield, Wolverhampton, Dudley, Walsall).

### Phasing
- **Phase 1 (pre-partner):** Site is live, ranking, capturing enquiries. Calls ring to Tanin's mobile. Tanin answers, gives guidance, captures details, holds them until a partner is signed. About page is honest about this.
- **Phase 2 (first partner signed):** Enquiries routed to the partner. About page updates to name the partner. Schema may add LocalBusiness for the partner's verified location.
- **Phase 3 (multiple partners):** Enquiries auctioned/distributed. Possible directory-style listings.

This brief covers phase 1 with hooks to evolve into phase 2/3 without rewriting from scratch.

## 1. Tech Stack Assumptions

- **Framework:** Next.js 14+ (App Router) on Vercel
- **Styling:** Tailwind CSS
- **CMS:** None initially — content as MDX files in repo
- **Forms:** Server actions → email (Resend or similar) + Airtable/Supabase. Must include an un-prechecked consent tickbox for data sharing with partner specialists.
- **Analytics:** Plausible or Vercel Analytics (privacy-friendlier, simpler GDPR) — **live from day 1**
- **Call tracking:** Twilio UK number (0121), webhook → Supabase for call metadata logging. In phase 1, the Twilio number **rings to Tanin's mobile**; Twilio plays a call-recording disclosure announcement before the call connects (PECR requirement).
- **Domain:** TBD (EMD preferred: e.g. `sprayfoamremoval-birmingham.co.uk`)

## 2. Global Elements

### Header
- Logo/trading name (left)
- Nav: Home / How Removal Works / Areas / Costs / Contact / About
- **Phone CTA on the right** — button-styled, visually dominant, persistent on scroll (sticky on desktop AND mobile), tap-to-call on mobile. This is the single most important conversion element on the site.
- Optional: small "Birmingham & West Midlands" tag near the logo (light positioning support without explicit denial)

### Footer
- Trading name disclosure: `"[Trading Name] is a trading name of Taninnovate Ltd, registered in England and Wales (Company No. [TBD]). Registered office: [TBD]. ICO Reg No: [TBD]."`
- **Business model disclosure** (one line): "We are an independent information resource. We earn a referral fee when introductions lead to completed work — this does not affect the price you pay the specialist."
- Quick links: Privacy Policy, Terms, Cookie Policy, Sitemap, About
- Copyright + year
- Service area summary line: "Serving Birmingham, Solihull, Sutton Coldfield, Wolverhampton, Dudley, Walsall and surrounding West Midlands."

### Reusable Components
- **PhoneCTA** — phone number block with tap-to-call, used 2–3× per long page. Always paired with the line "You'll speak to [Founder] directly" in phase 1.
- **ContactForm** — name, phone, postcode, property type, "what's the issue?" textarea, **un-prechecked consent tickbox**: "I consent to my details being shared with a removal specialist in my area for the purpose of providing me with a quote." Small print beneath: referral-fee disclosure.
- **TrustSignals** — four-item strip. **No unsubstantiated claims.** Default: "Birmingham & West Midlands" / "Free, no-obligation quote" / "Plain-English advice" / "RICS and PAS 2035 aware". (The fourth is true — we cite the standards — and stops short of claiming partner accreditation we can't yet verify.)
- **AreaCallout** — "Are you in [Area]? We cover this area — [link to area page]"
- **FAQAccordion** — semantic `<details>`/`<summary>`. **No FAQPage JSON-LD** (restricted to gov/health Aug 2023).
- **TLDR** — direct-answer callout at the top of every long-form page (~40–60 words, plain prose). AEO target.
- **DefinitionBox** — inline jargon definition box (open-cell foam, PAS 2035, isocyanate). High LLM citation rate.
- **CitationFootnote** — small superscript footnote for cited statistics, with a numbered source list at the bottom of the page. Every numeric claim on the site must be either citation-backed or hedged.
- **InfoBox** — for callouts like "Mortgage refused? You're not alone — read more"
- **AuthorBio** — small block at bottom of articles; populated from named-author decision (see §10)
- **Breadcrumbs** — visible on every non-homepage page, mirrored in BreadcrumbList schema

## 3. Information Architecture

```
/                                        Homepage (pillar)
/how-spray-foam-removal-works           Process page
/spray-foam-removal-cost                Costs page (high-intent)
/areas/                                  Areas hub
├── /areas/sutton-coldfield
├── /areas/solihull
├── /areas/edgbaston
├── /areas/harborne
├── /areas/erdington
├── /areas/wolverhampton
└── /areas/dudley
/guides/                                 Informational hub (topical cluster)
├── /guides/spray-foam-mortgage-problems
├── /guides/open-cell-vs-closed-cell-spray-foam
├── /guides/pas-2035-spray-foam-explained
├── /guides/rics-guidance-spray-foam
├── /guides/selling-house-with-spray-foam
├── /guides/spray-foam-health-risks
├── /guides/signs-spray-foam-needs-removal
├── /guides/how-long-spray-foam-removal-takes
├── /guides/diy-spray-foam-removal-warning
└── /guides/spray-foam-grant-removal-options
/contact                                 Contact page
/about                                   About page (E-E-A-T heavy, model disclosure)
/editorial-standards                    How we research and review content (E-E-A-T)
/privacy                                 Privacy policy (with call recording + data-sharing disclosure)
/terms                                   Terms of service
/cookies                                 Cookie policy
/sitemap.xml                             Auto-generated
/robots.txt                              Explicit AI-crawler policy (allow)
/llms.txt                                LLM-friendly site map (see §6)
```

### Pillar / cluster topology

The homepage is the pillar for "spray foam removal birmingham". Every guide and area page links back to it with varied descriptive anchor text. Guides also link to 2–3 thematically related sibling guides. Existing `≥3, ≤8` internal link rule per page stays.

## 4. Page-by-Page Briefs

---

### 4.1 Homepage — `/`

**Meta Title:** Spray Foam Removal Birmingham | Get a Free Quote — Call Us Today
**Meta Description:** Spray foam insulation removal in Birmingham and the West Midlands. Free quote, no obligation. Call 0121 XXX XXXX to discuss your property.
**H1:** Spray Foam Insulation Removal in Birmingham
**Target keywords:** "spray foam removal birmingham", "spray foam insulation removal birmingham", "remove spray foam birmingham", "spray foam removal near me", "spray foam removal company birmingham"
**Schema:** Organization + Service + BreadcrumbList. **No LocalBusiness** in phase 1 (no verified premises). **No FAQPage. No HowTo.**

**Section structure:**

1. **Hero** — H1, subheadline ("Free, no-obligation quote. Speak to us about your spray foam problem today."), dominant PhoneCTA (the headline visual element), secondary form-anchor link, trust signals strip
2. **TLDR** (~40–60 words direct answer, includes the attributed UK cost range)
3. **The Problem** (H2: "Why has spray foam insulation become a problem?") — market-level claims; sources cited for any specific stats
4. **Service Areas** (H2: "Which areas of the West Midlands do we cover?")
5. **The Removal Process** (H2: "How does spray foam removal work?") — 5-step summary, link to full process page
6. **Costs** (H2: "How much does spray foam removal cost?") — UK industry range with citation; closing CTA "for a precise quote for your property, call us"
7. **Why act now** (H2: "Why does spray foam removal matter now?") — market trends, hedged or sourced
8. **FAQ** (H2: "Common questions about spray foam removal") — practical Qs only; no self-denying questions ("do you remove yourselves?" or "are you certified?" are NOT included)
9. **Final CTA** — PhoneCTA + ContactForm with consent tickbox and soft-disclosure fine print

**Internal links from this page:** Highest-priority 8 links — mortgage guide, RICS guide, signs of removal guide, costs page, process page, about page, Sutton Coldfield + Solihull area pages. Other areas/guides reachable via hub.
**Content depth floor:** 1,200 words minimum; target 1,500–2,000.

---

### 4.2 How Spray Foam Removal Works — `/how-spray-foam-removal-works`

**Meta Title:** How Spray Foam Removal Works | Step-by-Step UK Process Guide
**Meta Description:** The 6-step spray foam insulation removal process explained — survey, isolation, manual extraction, debris disposal, structural check, and certification.
**H1:** How Spray Foam Insulation Removal Works
**Target keywords:** "how is spray foam removed", "spray foam removal process", "spray foam removal steps"
**Schema:** Article + BreadcrumbList. **No HowTo.**

**Framing change from v1/v2:** Open with "Here's how the removal process typically works, whichever Birmingham specialist you use." — i.e. educational, not promotional. We're explaining the industry process, not "our process".

**Section structure:**

1. **TLDR** (~40–60 words direct answer summarising the 6-step process and typical timeline)
2. **Intro** — "Here's how the removal process typically works, whichever Birmingham specialist you use. We're an information resource, not a contractor — but understanding the process helps you ask the right questions when you get a quote."
3. **Step 1: Initial Survey & Assessment**
4. **Step 2: Site Preparation & Isolation**
5. **Step 3: Manual Removal**
6. **Step 4: Debris Removal & Disposal**
7. **Step 5: Timber & Structural Inspection**
8. **Step 6: Final Certification**
9. **What to avoid** — DIY attempts, chemical dissolvers
10. **FAQ** — 5–6 process-specific questions
11. **CTA** — "Want help finding a local specialist? Call us on 0121 XXX XXXX or send your details."
12. **DisclosureBox** at the foot

**Internal links:** Cost page, mortgage problems guide, signs you need removal, DIY warning guide
**Content depth floor:** 1,500 words minimum; target 2,000–2,500.

---

### 4.3 Spray Foam Removal Cost — `/spray-foam-removal-cost`

**Biggest change from v2.** This page now pivots from "here's what we charge" to "here's what UK homeowners are paying, by source".

**Meta Title:** Spray Foam Removal Cost UK 2026 | Birmingham Price Guide
**Meta Description:** What does spray foam insulation removal cost? UK industry sources put typical removal at £1,500–£5,000. Birmingham-specific guidance and free specialist matching.
**H1:** Spray Foam Removal Cost in Birmingham (UK 2026 Guide)
**Target keywords:** "spray foam removal cost", "how much does spray foam removal cost", "spray foam removal price birmingham", "how much to remove spray foam"
**Schema:** Article + BreadcrumbList

**Section structure:**

1. **TLDR** — "Typical UK spray foam removal costs are £1,500–£5,000 depending on property size, foam type, and damage extent.<sup>[1]</sup> Birmingham prices are broadly in line with the UK average. For a precise quote for your property, call us on 0121 XXX XXXX — the survey is free."
2. **Cost factors** — table or grid: loft size, foam type, damage extent, access difficulty, disposal weight
3. **UK cost ranges by property type** — table (every row marked "UK industry source, typical 2024–2025 range"):
   - Mid-terrace: £1,200–£2,500
   - Bungalow: £1,500–£3,200
   - Semi-detached: £1,800–£3,500
   - Detached: £2,500–£5,500
   - Large detached / unusual roofs: £4,000–£8,000+
4. **How quotes vary in Birmingham** — what's likely to push your specific quote higher or lower than the UK average (access to lofts in older terraced areas, scaffold needs for steep roofs, etc.). Hedged language only.
5. **What's typically included** — survey, removal, disposal, certification, post-removal inspection
6. **What might cost extra** — timber repair, re-felting, replacement insulation, scaffold for high access
7. **Funding & grants** — link to grants guide
8. **FAQ** — 5–6 cost-specific (practical Qs only; no self-denying questions)
9. **CTA** — "For a precise quote for your property, call us on 0121 XXX XXXX. The survey is free."
10. **Sources** — numbered citation list at the foot: every cost figure on the page links to a real source (Which?, MoneySavingExpert, recent UK news pieces, RICS where applicable). **These citations are load-bearing — the page cannot publish until they're real, not placeholders.**

**Internal links:** Process page, mortgage guide, grants guide, area pages
**Content depth floor:** 1,500 words minimum; target 2,000–2,500.

---

### 4.4 Areas Hub — `/areas`

**Meta Title:** Spray Foam Removal Service Areas | Birmingham & West Midlands
**Meta Description:** We connect homeowners across Birmingham, Solihull, Sutton Coldfield, Wolverhampton and surrounding West Midlands with local spray foam removal specialists. Find your area.
**H1:** Spray Foam Removal Service Areas
**Schema:** ItemList referencing each area page + BreadcrumbList

**Section structure:**

1. Brief intro paragraph — independent resource framing
2. Map of coverage area
3. Grid of area cards — each card: area name, image, short blurb, "Spray Foam Removal in [Area] →" link
4. "Don't see your area? Call us anyway"
5. CTA

---

### 4.5 Area Pages — `/areas/[area]` (×7)

**Template for each area** — replace `[Area]` and customise local details.

**Meta Title:** Spray Foam Removal [Area] | Independent Guide & Specialist Matching
**Meta Description:** Independent resource on spray foam insulation removal in [Area]. Free guidance, UK cost ranges, and connection to a local removal specialist. Call 0121 XXX XXXX.
**H1:** Spray Foam Removal in [Area]
**Target keywords:** "spray foam removal [area]", "remove spray foam [area]", "spray foam insulation [area]", "spray foam contractor [area]"
**Schema:** Organization + Service (the matching service, with `areaServed` referencing this area as `City` + `GeoCircle`) + BreadcrumbList. **No LocalBusiness in phase 1.**

**Section structure:**

1. **Hero** — H1, area-specific subheadline: "Independent Birmingham resource. Connecting [Area] homeowners with local removal specialists." PhoneCTA.
2. **TLDR** (~40–60 words: who we serve in this area, what we do, how to start)
3. **Why [Area] homeowners need removal** — area-specific framing (per v2: Sutton Coldfield older detached, Solihull premium properties, Edgbaston Victorian, etc.)
4. **Local property types**
5. **Local landmarks / neighbourhood detail**
6. **Removal process summary** — link to full process page
7. **Costs in [Area]** — same UK-attributed-source pattern as the main cost page
8. **FAQ** — 4–5 area-tailored questions
9. **CTA + DisclosureBox**

Same anti-doorway warning as v2: 600–1,200 unique words per area, area-specific examples, unique FAQ items.

---

### 4.6 Guides

**Template** — informational content driving long-tail traffic and topical authority.

**Common structure:**
1. **TLDR** at the top (~40–60 words)
2. Detailed explanation, question-shaped headings
3. **DefinitionBox** for jargon
4. **Comparison table** where applicable
5. **Cited statistics with sources** — CitationFootnote pattern
6. Practical implications
7. FAQ (5–6 questions, content only)
8. Soft CTA → matching service
9. **DisclosureBox** at the foot: "We are an independent information resource. We don't carry out removal work — we help you find a local Birmingham specialist who does. [More about how we work](/about)."
10. Published / updated dates visible
11. **AuthorBio + reviewer credit** at the bottom

**Schema:** Article (or BlogPosting) + BreadcrumbList. Includes `author` (Person), `publisher` (Organization), `datePublished`, `dateModified`, `image`. `reviewedBy` added once a partner technical reviewer is signed.

**Content depth floor:** 1,500 words minimum; target 2,000–3,000.

The 10 guides themselves are unchanged from v2 — they're educational content with no service-claim adjustments needed. Topics, meta titles, H1s and section structures all carry over.

---

### 4.7 Contact — `/contact`

**Meta Title:** Contact Birmingham Spray Foam Removal | Free Guidance
**Meta Description:** Free, no-obligation enquiry on spray foam insulation in Birmingham. Speak directly to our founder. We'll talk through your situation and connect you with a local specialist.
**H1:** Get Free Spray Foam Removal Guidance

**Section structure:**

1. Two-column: contact methods (phone, email, form) on left; ContactForm with consent tickbox on right
2. Trust signals strip
3. **"What happens next"** — three-step expectation setting:
   1. **You call or fill in the form.** No charge, no obligation.
   2. **We talk through your situation** within one working day. Plain advice — what your options are and what a survey would involve.
   3. **We arrange a free survey** if you want one. A specialist visits, identifies the foam type, checks for damage, and gives you a written quote.
4. Service area summary
5. Map

**Schema:** ContactPage + BreadcrumbList

---

### 4.8 About — `/about`

**Meta Title:** About Us | Independent Birmingham Spray Foam Resource
**Meta Description:** Independent Birmingham-focused information resource on spray foam insulation removal. Founded by [Founder]. We connect homeowners with local removal specialists.
**H1:** About [Trading Name]

**Critical content — this is the disclosure-bearing page. Honest but light-touch.**

- **Named founder/operator** (Tanin) — photo, role, LinkedIn link, short bio
- **What we do** (one paragraph, no callouts): "We help Birmingham homeowners with spray foam insulation problems by combining plain-English guidance with introductions to local removal specialists. We may receive a referral fee when introductions lead to completed work — the information on this site stays free either way."
- **Why we built it**: "Spray foam information online is dominated by removal companies selling their service. There's room for a Birmingham-focused resource that explains the problem first."
- **Trading name + Companies House disclosure** (link to public Companies House page for Taninnovate Ltd)
- **ICO registration number**
- **Editorial standards link** → `/editorial-standards`
- **Partner with us** (one-line footer, soft): "Are you a Birmingham removal specialist? [Contact us]."

**Schema:** AboutPage + Organization (with `sameAs`: Companies House URL, LinkedIn, socials) + BreadcrumbList

---

### 4.9 Editorial Standards — `/editorial-standards`

No change from v2. Still essential for E-E-A-T.

Sections: how guides are researched (primary sources: RICS, PAS 2035, HSE, lender policies); who writes; who reviews; update cadence (quarterly minimum); corrections policy; **commercial disclosure** (introductions earn us a referral fee).

**Schema:** AboutPage + BreadcrumbList

---

### 4.10 Privacy Policy — `/privacy`

**Critical inclusions (updated for lead-gen model):**

- Data controller identification (Taninnovate Ltd, ICO Reg No)
- What data we collect (name, phone, postcode, property type, message, call recordings, IP/analytics)
- **Lawful basis** — for data sharing with removal specialists: **consent** captured at form submission (un-prechecked tickbox). Call recording: legitimate interest with LIA documented.
- **Data sharing disclosure**: "By submitting an enquiry, you consent to your details being shared with a removal specialist in your area for the purpose of providing you with a quote. You can withdraw consent at any time by emailing [address]. Until a partner specialist has been signed for your area, we will hold your details only as long as needed to make an introduction."
- **Referral-fee disclosure**: "We may receive a referral fee from a removal specialist if your introduction leads to completed work. This does not affect the price you pay the specialist."
- **Call recording disclosure**: "Calls to our advertised number may be recorded for quality, training, and lead-tracking purposes. A recorded announcement plays before each call connects. Recordings and call data may be shared with our partner removal specialists to facilitate your enquiry."
- Data sharing — third party processors named (Twilio, Resend/email, Supabase, etc.)
- Retention periods
- Data subject rights
- ICO complaint right
- Cookie usage
- Last updated date

**Must be live before any traffic arrives. ICO registration must be complete.**

---

### 4.11 Terms & Cookies

Standard templates. Terms should include a clear "we are not a removal contractor; introductions are at your discretion; the specialist provides any contract for removal services, not us" disclaimer.

---

## 5. Schema Markup Strategy

### Phase 1 schema (current)

The site is an **Organization** that provides a **Service** (free enquiry matching). It is **not** a LocalBusiness in phase 1, because:
- We have no verified physical address
- We do not perform the local service (removal) ourselves
- Claiming LocalBusiness/HomeAndConstructionBusiness when we don't do the work is misleading schema and risks a manual action

### Site-wide
- **Organization** schema in root layout (Taninnovate Ltd, with `sameAs`: Companies House URL, LinkedIn, socials)
- **WebSite** schema with SearchAction
- **BreadcrumbList** on all non-root pages

### Page-specific
- **Service** schema on homepage and area pages (the matching service, with `areaServed: GeoCircle` covering the West Midlands radius)
- **Article / BlogPosting** for guides (with `author`, `publisher`, `datePublished`, `dateModified`, `image`)
- **Article** (not HowTo) for the process page
- **ContactPage** for `/contact`
- **AboutPage** for `/about` and `/editorial-standards`
- **ItemList** for `/areas` hub

### Schema types to deliberately NOT use (phase 1)
- **LocalBusiness / HomeAndConstructionBusiness / RoofingContractor** — we don't do the work; misleading
- **FAQPage** — restricted Aug 2023 to gov/health authority sites only
- **HowTo** — rich results removed Sept 2023
- **aggregateRating / Review** — we have no reviews to mark up
- **`hasOfferCatalog` containing removal services** — implies we provide removal

### Phase 2/3 evolution
- Once a partner is signed and has a verified address: that partner can have a `LocalBusiness` (subtype `HomeAndConstructionBusiness`) schema on their featured area pages. Tanin's site keeps `Organization` schema.
- Reviews and aggregateRating only when we have real, verifiable reviews to mark up.

### Organization key fields (phase 1 example)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://example.co.uk/#organization",
  "name": "[Trading Name]",
  "legalName": "Taninnovate Ltd",
  "url": "https://example.co.uk",
  "logo": "https://example.co.uk/logo.png",
  "image": "https://example.co.uk/og-default.jpg",
  "description": "Independent Birmingham-focused information resource on spray foam insulation removal. We connect homeowners with local removal specialists.",
  "telephone": "+44-121-XXX-XXXX",
  "email": "hello@example.co.uk",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {"@type": "GeoCoordinates", "latitude": "52.4862", "longitude": "-1.8904"},
    "geoRadius": "30000"
  },
  "knowsAbout": [
    "Spray foam insulation removal",
    "PAS 2035 retrofit standard",
    "RICS spray foam guidance",
    "Open-cell and closed-cell foam",
    "Loft insulation remediation",
    "Mortgage implications of spray foam"
  ],
  "sameAs": [
    "https://find-and-update.company-information.service.gov.uk/company/[COMPANY-NUMBER]",
    "https://www.linkedin.com/in/[founder-handle]"
  ]
}
```

---

## 6. Technical SEO Requirements

Unchanged from v2:

- `sitemap.xml`, `robots.txt` with explicit AI-crawler `Allow` directives, `llms.txt` at root
- Canonical, OG, Twitter Card per page; unique `og:image` per page
- Hreflang en-GB + x-default on every page
- Performance: LCP <2.5s, CLS <0.1, INP <200ms; Lighthouse mobile Perf ≥90
- Image SEO: descriptive filenames, 10–15-word alt text, WebP/AVIF, lazy-load
- Security headers: HSTS, CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- Internal linking: ≥3 ≤8 per page, varied anchor text
- Analytics + tracking live from day 1; GSC + Bing Webmaster verified

See v2 brief for full text on each — no changes here from the positioning correction.

---

## 7. Content Tone & Style Guide

### Voice and tone (unchanged from v2)
- Plain, helpful, expert-but-not-condescending
- Mostly short sentences; vary occasionally
- Define jargon on first use (DefinitionBox)
- Conservative claims; no superlatives
- First person plural ("we", "our")
- British English

### Substantiation guardrails (new in v3)

Every factual claim about price, market behaviour, lender stance, or partner capability must be one of:

1. **Cited to a named source with year** — e.g. "Which? reports that…<sup>[1]</sup>" with a numbered Sources list at the foot of the page
2. **Hedged with first-person experience language** — but only where there is genuine experience to draw on. "In our experience" is not licence to invent.
3. **Marked clearly as illustrative** — "Industry ranges suggest…", "estate agents we've spoken to suggest…" — when the figure is directionally true but not from a single citable source

**Forbidden phrases anywhere on the site:**
- "Our specialists" / "our team of removers" / "our surveyors"
- "We arrange specialist removal" / "we perform removals"
- Specific firm price claims ("from £1,500") in titles, hero, or anywhere a casual reader would interpret as our offer
- "Vetted partner network" (until partners exist)
- "Fully insured" (in trust signals, without per-partner substantiation)
- Superlatives without proof: "best", "leading", "#1", "guaranteed"

### AEO/GEO formatting rules (unchanged from v2)
- TLDR at the top of every long-form page
- Question-shaped headings
- DefinitionBox for jargon
- Comparison tables
- Citation-ready statistics (now mandatory rather than recommended — see substantiation guardrails)
- PAA mining before draft

### Content depth floors (unchanged)

| Page type | Minimum | Target |
|---|---|---|
| Homepage | 1,200 | 1,500–2,000 |
| Service pages (process, cost) | 1,500 | 2,000–2,500 |
| Area pages | 600 | 800–1,200 |
| Guides | 1,500 | 2,000–3,000 |
| Contact / About / Editorial Standards | 400 | 600–800 |

### Title tag formula (revised for phase 1)

Patterns:
- Information-positioning: `Spray Foam Removal Birmingham | Independent Guide & Specialist Matching`
- Trust-positioning for areas: `Spray Foam Removal [Area] | Independent Guide & Specialist Matching`
- Question form for guides: `How Long Does Spray Foam Removal Take? UK Timing Guide`

No firm prices in title tags in phase 1.

---

## 8. Build Order Recommendation

**Step 0 (pre-build blockers) — resolve before any code:**
- **Substantiation review** — for every numeric/factual claim in the brief and homepage copy, identify whether we can source or substantiate it; rewrite anything we can't
- **Trading name** chosen (§10 question #2)
- **Domain** registered (§10 question #1)
- **Named author / founder** decided (§10 question #4) — drives About, schema, bylines
- **ICO registration** initiated for Taninnovate Ltd
- **Cost-page citations researched and selected** — 3–5 real UK source URLs for cost figures

**Step 0.5 (disclosure-first order, new in v3):**
- About page, editorial-standards, privacy policy must be live and honest **before** the homepage goes live. The lead-gen model depends on these trust signals existing at first contact.

**Step 1: Foundation:** Layout, header, footer, global components, legal pages → live first
**Step 2: About + Editorial Standards** — moved earlier in the order to support trust signals
**Step 3: Homepage**
**Step 4: How removal works + Cost page** — most commercial intent
**Step 5: Contact**
**Step 6: One area page** — Sutton Coldfield first
**Step 7: Top 3 guides:** mortgage problems, signs of need, RICS guidance
**Step 8: Remaining area pages**
**Step 9: Remaining guides**

Ship early. Don't wait for all 20+ pages.

---

## 9. What's NOT in this Brief (deliberately)

- Actual page copy — drafted in a separate pass, page by page
- Image sourcing — separate decisions. For area pages, real photos significantly outperform — budget for a photographer (~£500) is high-ROI.
- Author bio content — needs Tanin's real bio
- Specific contractor partner content — added once a partner is signed (phase 2)
- GTM, advanced conversion attribution — basic analytics from day 1; advanced deferred
- Backlink plan — separate document
- Local citations build — deferred until phase 2 (LocalBusiness claims need substantiation)

---

## 10. Open Questions for Tanin to Decide

1. **Domain:** Shortlist:
   - `sprayfoamremoval-birmingham.co.uk`
   - `birminghamsprayfoamremoval.co.uk`
   - `sprayfoamremovalbham.co.uk`
   - `removesprayfoam-birmingham.co.uk`
2. **Trading name:** Pick one. Affects logo, email, Companies House.
3. **Logo:** AI-generated or typographic? Either fine for v1.
4. **Author identity (critical):** Use real name + photo + LinkedIn? **Recommendation: yes.** Anonymous trading-name voice fails E-E-A-T for YMYL-adjacent content and undermines the "independent resource" positioning.
5. **Image strategy:** Stock, AI, or commissioned Birmingham photographer (~£500)? **Recommendation: real local photos for area pages, AI/diagrams elsewhere.**
6. **Cost-page sources:** Tanin to identify 3–5 real UK sources for cost figures before the cost page can publish. Candidates: Which? insulation removal guides, MoneySavingExpert forum threads (less authoritative but commonly cited), recent BBC/Guardian/Telegraph pieces on spray foam scandals, RICS consumer guide, Insulation Assurance Authority resources.

---

## 11. Launch Checklist

Must be complete before public launch / first marketing spend:

### Legal & compliance
- [ ] Taninnovate Ltd company number visible in footer
- [ ] ICO registration complete; reg number in footer + privacy policy
- [ ] Privacy policy live with PECR-compliant call-recording disclosure
- [ ] Privacy policy includes data-sharing consent flow + referral-fee disclosure
- [ ] Terms of service live (includes "we are not a removal contractor" disclaimer)
- [ ] Cookie policy live (matching actual cookies set)
- [ ] Twilio call-recording announcement plays before connect to Tanin's mobile

### Substantiation
- [ ] Every cost figure on the site has an attributed source URL in a numbered Sources block
- [ ] No forbidden phrases anywhere (`Our specialists`, `we arrange removal`, `from £X` in titles/hero, `vetted partner network`, `fully insured`, `best/leading/#1/guaranteed`)
- [ ] Every numeric market claim is either sourced or hedged

### Disclosure
- [ ] About page names Tanin as operator with photo + LinkedIn
- [ ] About page explicitly says we don't do the work
- [ ] About page discloses referral-fee business model
- [ ] Footer carries one-line model disclosure
- [ ] Every guide footer carries DisclosureBox
- [ ] Form submission has un-prechecked consent tickbox
- [ ] FAQ on homepage answers "Do you remove the foam yourselves?"

### Technical
- [ ] `sitemap.xml` accessible, valid, includes `<lastmod>`
- [ ] `robots.txt` with explicit AI-crawler `Allow` directives
- [ ] `llms.txt` deployed at site root
- [ ] Canonical tags on every page
- [ ] Hreflang en-GB + x-default on every page
- [ ] Open Graph image unique per page
- [ ] Security headers configured (HSTS, CSP, etc.)
- [ ] Lighthouse mobile Performance ≥90, Accessibility ≥95, SEO 100
- [ ] Schema validated (no LocalBusiness, no FAQPage, no HowTo)

### Analytics & tracking
- [ ] Plausible or Vercel Analytics live
- [ ] Twilio webhook → Supabase logging confirmed
- [ ] Google Search Console verified, sitemap submitted
- [ ] Bing Webmaster Tools verified, sitemap submitted
- [ ] Server-side form submission logging confirmed

### E-E-A-T
- [ ] About page lists named founder with photo, role, LinkedIn
- [ ] Editorial-standards page live
- [ ] Author bio appears at bottom of every guide
- [ ] At least 3 guides cite primary sources (RICS, PAS 2035, HSE, named lenders)
- [ ] Organization schema includes `sameAs` array

### Post-launch (first 30 days)
- [ ] Weekly Search Console review for indexing coverage
- [ ] First inbound call answered, logged, callback-promise honoured (even without partner)
- [ ] Begin partner outreach to local Birmingham removal contractors
- [ ] Run full `/seo audit` after 30 days for baseline scoring
- [ ] Manual AI search check: query in ChatGPT, Claude, Perplexity
