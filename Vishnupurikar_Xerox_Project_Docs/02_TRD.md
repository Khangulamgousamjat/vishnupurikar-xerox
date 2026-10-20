# 02_TRD.md
# Technical Requirements Document

## 1. Recommended technical approach
Build a static, multi-page website with HTML5, CSS3, and vanilla JavaScript unless the developer has a strong reason to use a framework. A static site is sufficient for the current scope and avoids unnecessary databases, authentication, and backend maintenance.

**Hosting suggestion:** Firebase Hosting or another reliable static host with HTTPS. Hosting choice is not final until confirmed.

## 2. Browser and device support
- Current stable Chrome, Edge, Firefox, and Safari.
- Android and iOS mobile browsers.
- Widths from small phones through wide desktop screens.
- Keyboard navigation and visible focus indicators.
- Content must remain usable if web fonts fail to load.

## 3. Page architecture
Suggested routes:
- `/` — Home
- `/services/` — Xerox and printing services
- `/lic-services/` — Ghansham Vima Seva Kendra
- `/about-owner/` — Owner profile
- `/gallery/` — Photo gallery
- `/developer/` — Developer portfolio
- `/contact/` — Contact and location
- `/mr/` and equivalent Marathi routes — Marathi translations

Use trailing slash conventions consistently. If the host does not support route rewriting, use `.html` pages or configure redirects appropriately.

## 4. Core requirements
- Shared header and footer on every page.
- English/Marathi switcher with equivalent-page mapping.
- Mobile navigation menu with keyboard support.
- Click-to-call link using the confirmed phone number.
- WhatsApp URL in international format: `https://wa.me/919657931621`; test before launch and confirm the number is WhatsApp-enabled.
- Maps link based on a location pin verified by the owner.
- Responsive image gallery with an accessible lightbox if implemented.
- All page metadata and language attributes set correctly.
- No broken links, missing images, or JavaScript console errors.

## 5. Performance
- Use WebP/AVIF where supported, with a sensible fallback strategy.
- Use `srcset` and `sizes` for responsive images when useful.
- Set image width and height to reduce layout shift.
- Lazy-load below-the-fold images.
- Do not lazy-load the main above-the-fold hero image if it is the LCP element.
- Minimize JavaScript and third-party scripts.
- Avoid autoplay video and heavy animation libraries.
- Target good Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 under suitable test conditions. These are targets, not guarantees.

## 6. SEO
- Unique title and description for each page and language.
- Correct `<html lang="en">` or `<html lang="mr">`.
- Canonical URLs and `hreflang` alternates once the final domain and routes are known.
- XML sitemap and robots.txt.
- Descriptive image filenames and alt text.
- Open Graph/social preview metadata.
- LocalBusiness structured data only for verified facts.
- Do not include unverified hours, coordinates, service claims, ratings, or insurance credentials in metadata/schema.

## 7. Security and privacy
- Serve the website over HTTPS.
- Do not collect customer data unless a clear requirement exists.
- Do not publish policy documents, customer IDs, identity documents, private messages, or other sensitive material.
- If a contact form is added, it requires a secure backend/service, server-side validation, spam protection, and a privacy notice.
- Keep dependencies minimal and update them when applicable.
- Do not embed API keys or credentials in public source code.

## 8. Hosting and deployment
- Use a staging preview before launch.
- Test links on the deployed URL, not only locally.
- Configure HTTPS and redirect HTTP to HTTPS.
- Add a custom domain later after the owner selects and purchases it.
- Keep source code and final assets in version control.
- Document rollback and redeployment steps.

## 9. Acceptance checks
- Every route returns the correct page.
- The language switcher maps to the matching language page.
- All contact actions work on desktop and mobile.
- No critical console errors.
- No horizontal overflow at common mobile widths.
- Images have useful alt text or empty alt when decorative.
- Forms, if any, provide success/error states and do not claim success without confirmation.
