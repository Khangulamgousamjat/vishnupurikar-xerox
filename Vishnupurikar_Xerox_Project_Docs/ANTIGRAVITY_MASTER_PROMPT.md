# ANTIGRAVITY_MASTER_PROMPT.md
# Build the Website Using the 11 Project Documents

You are the implementation agent for the website of Vishnupurikar Xerox and Ghansham Vima Seva Kendra. Read all 11 project documents before coding:

1. `01_PRD.md`
2. `02_TRD.md`
3. `03_AppFlow.md`
4. `04_DesignSystem.md`
5. `05_Schema.md`
6. `06_ImplementationPlan.md`
7. `07_Tracker.md`
8. `08_Rules.md`
9. `09_ComponentLibrary.md`
10. `10_Decisions.md`
11. `11_Security.md`

These are project specifications and working documents, not folders or a suggested visual folder tree. Treat them as the source of truth. If two documents conflict, follow the latest explicit decision in `10_Decisions.md`; if uncertain, do not invent facts and record the question in the tracker.

## Business facts
- Business: Vishnupurikar Xerox
- Related insurance-service name supplied: Ghansham Vima Seva Kendra
- Owner: Maroti Manika Vishnupurikar
- Address: Near Kaleshwar Kaman, Vishnupuri, Nanded
- Phone/WhatsApp: 9657931621, verify the number and WhatsApp availability before production
- Developer credit: Khan Gulamgous
- Site: multi-page
- Languages: English and Marathi
- Domain: not selected yet

## Design requirements
Build a premium, clean, responsive **light-mode** website. Use:
- Chocolate brown `#4E342E`
- Cream `#F8F4E7`
- Burnt orange `#CC5500`
- White `#FFFFFF`
- Bodoni Moda for display headings
- Inter or a comparable legible font for English body/UI text
- A tested Devanagari font such as Noto Sans Devanagari for Marathi
- Green only for recognizable WhatsApp actions

Use generous but efficient spacing, strong hierarchy, restrained shadows, consistent cards and buttons, readable text, real photographs when supplied, and accessible controls. Do not reproduce the UI reference as a single flattened image. Implement the design as working HTML/CSS/JavaScript.

## Required pages
- Home
- Xerox and printing services
- LIC / Ghansham Vima Seva Kendra
- About owner
- Photo gallery
- Developer portfolio
- Contact and location
- Matching English and Marathi routes for all pages

Include consistent navigation, a language switcher, phone/WhatsApp actions, a verified directions link, and footer credit for Khan Gulamgous.

## Important truth and safety rules
- Do not invent services, prices, opening hours, qualifications, experience, agent credentials, testimonials, awards, or official affiliations.
- Candidate printing services remain unpublished until confirmed by the owner.
- Do not claim this is the official LIC website.
- Do not create online insurance purchase or personalized insurance advice features.
- Do not show customer documents, policy records, IDs, private messages, or other sensitive data.
- Stock/reference images are placeholders, not photographs of the actual shop or named people. Replace them with approved real photos before launch.
- Do not add a fake working contact form. Only implement a form if a secure delivery backend is selected.
- No database, login, admin dashboard, or backend is needed for version 1.

## Implementation workflow
1. Inspect the repository and read all 11 docs.
2. Create a working task checklist in `07_Tracker.md`.
3. Set up shared design tokens and reusable components.
4. Implement shared header/footer, navigation, language routing, buttons, cards, gallery, contact actions, and responsive layout.
5. Implement all English pages.
6. Implement reviewed Marathi equivalents and proper `lang` attributes.
7. Add metadata, accessible image text, optimized images, and SEO basics.
8. Test all pages on desktop, tablet, and mobile.
9. Test every link, language switch, keyboard interaction, focus state, and image fallback.
10. Run performance/accessibility checks and fix issues.
11. Report any missing owner-provided content as a clearly listed blocker.
12. Do not publish until the owner approves the final content, real photos, phone/WhatsApp links, map location, and LIC wording.

## Expected output
- Complete working website source code, not just a mockup or screenshots.
- All required page routes and bilingual content structure.
- Shared CSS design system and reusable components.
- Optimized assets and clear placeholders for missing real photos.
- Updated `07_Tracker.md` with completed, pending, and blocked items.
- A README with local run instructions and deployment steps.
- A final summary of what works, what still needs owner confirmation, and how to run/test/deploy the site.

Build in small testable stages. Do not stop after generating the homepage; implement the full scope described in the documents.
