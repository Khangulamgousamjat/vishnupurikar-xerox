# 08_Rules.md
# Project Rules and Development Guidelines

## 1. Accuracy rules
- Never invent the owner's qualifications, years of experience, business history, prices, business hours, ratings, testimonials, or insurance credentials.
- Treat candidate services as unconfirmed until the owner approves them.
- Do not claim that the website is the official LIC website.
- Do not promise policy approval, investment returns, claim settlement, or financial outcomes.
- Use placeholders during development and remove them before production.

## 2. Brand rules
- Primary brown: `#4E342E`
- Cream background: `#F8F4E7`
- Burnt-orange accent: `#CC5500`
- White surfaces: `#FFFFFF`
- Heading font: Bodoni Moda
- Body font: Inter or equivalent.
- Marathi text must use a tested Devanagari-capable font.
- WhatsApp green is reserved for WhatsApp actions.
- Do not introduce random extra colours or inconsistent button styles.
- Keep the UI in light mode.

## 3. UI consistency
- Use shared design tokens and components.
- Keep spacing, card radius, button height, and icon treatment consistent.
- Do not create a unique header for every page.
- Use consistent image aspect ratios within a component group.
- Maintain readable text contrast and mobile tap targets.
- Prefer simple interactions over decorative complexity.

## 4. Content and images
- Use actual approved photos for the final site.
- Stock imagery is temporary only and must not be represented as the real shop or owner.
- Do not publish customer records, policy papers, identity cards, phone screenshots, or other private data.
- Obtain permission for recognizable people and testimonials.
- Add alt text for informative images.
- Keep original image files safely backed up.

## 5. Code rules
- Use semantic HTML.
- Use CSS variables for colour, spacing, typography and radii.
- Avoid unnecessary dependencies.
- Avoid inline styles for repeated design values.
- Keep JavaScript modular and focused.
- Do not store secrets or credentials in the repository.
- Use meaningful file names and stable component names.
- Test every interaction after modifying shared components.

## 6. Language rules
- English and Marathi must communicate the same information.
- Do not leave mixed-language UI by accident.
- Preserve the correct language in the page `lang` attribute.
- Use a Devanagari font for Marathi.
- Have a fluent reviewer check final Marathi copy.

## 7. Change control
Before changing an approved design decision:
1. Record the requested change in `10_Decisions.md`.
2. Identify impacted pages and components.
3. Update the design system and implementation plan if necessary.
4. Test all affected pages.
5. Record the final decision and reason.

## 8. Quality gate
No page is production-ready if it contains broken links, fake claims, unapproved photos, placeholder text, inaccessible controls, or untested contact actions.
