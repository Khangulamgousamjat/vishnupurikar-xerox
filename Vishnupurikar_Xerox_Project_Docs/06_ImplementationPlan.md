# 06_ImplementationPlan.md
# Step-by-Step Implementation Plan

## Phase 0: Confirm inputs
Checklist:
- [ ] Confirm exact display names and how the two businesses relate.
- [ ] Confirm printing services actually offered.
- [ ] Confirm LIC role, approved service descriptions, and any designation details.
- [ ] Collect approved shop photos and owner portrait.
- [ ] Collect developer portrait, actual skills, bio, and project links.
- [ ] Confirm opening hours.
- [ ] Verify map pin.
- [ ] Confirm whether 9657931621 is WhatsApp-enabled.
- [ ] Approve English and Marathi copy.
- [ ] Decide domain later.

Do not block early layout work on every item; use visible development placeholders and replace them before release.

## Phase 1: Project setup
1. Create repository and a clear README.
2. Create base HTML/page template and shared CSS.
3. Add design tokens as CSS custom properties.
4. Add font loading/fallbacks.
5. Establish routes for English and Marathi.
6. Add a reusable header and footer.
7. Add a placeholder asset policy so demo images cannot accidentally be mistaken for real business photos.

## Phase 2: Shared components
Build and test:
- Header/navigation
- Mobile navigation
- Language switcher
- Primary, secondary, WhatsApp and outline buttons
- Service card
- Photo tile and gallery lightbox
- Breadcrumbs
- Contact card
- Owner profile card
- Developer project card
- Footer
- Section heading and responsive container

## Phase 3: Pages
Recommended order:
1. Home
2. Services
3. LIC Services
4. About Owner
5. Gallery
6. Developer Portfolio
7. Contact
8. Marathi equivalents for all pages

Build reusable layouts rather than copying inconsistent code between pages.

## Phase 4: Functionality
- Add telephone links using `tel:+919657931621` after number verification.
- Add WhatsApp link `https://wa.me/919657931621` after WhatsApp verification.
- Use a safe prefilled message; visitor must press Send themselves.
- Add map directions only after verifying the correct location.
- Implement gallery keyboard controls and focus handling if lightbox is used.
- Implement language route mapping.
- Add optional contact form only after a secure submission method is selected.

## Phase 5: Content and imagery
- Replace temporary stock/demo images with approved real images.
- Compress and resize images.
- Add accurate English and Marathi alt text.
- Remove placeholder claims and unapproved testimonials.
- Confirm no private documents appear in photos.
- Verify all LIC statements.

## Phase 6: Quality assurance
- Test desktop, tablet, and small mobile.
- Test all links and buttons.
- Test keyboard-only use.
- Test reduced-motion preference.
- Test font fallback and Marathi text wrapping.
- Test image failures and slow network.
- Run Lighthouse or equivalent checks.
- Check HTML validity and browser console.
- Check SEO metadata and language alternates.

## Phase 7: Deployment
1. Deploy to a preview/staging URL.
2. Obtain owner approval.
3. Deploy production build.
4. Test production links.
5. Enable HTTPS.
6. Add domain when selected.
7. Configure Search Console and sitemap after the domain is live.
8. Save a release copy and deployment instructions.

## Definition of done
A page is done only when content is approved, links work, translations are checked, responsive behaviour is verified, and no temporary placeholders remain in the published version.
