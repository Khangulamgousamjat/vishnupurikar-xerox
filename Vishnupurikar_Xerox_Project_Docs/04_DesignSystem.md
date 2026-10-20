# 04_DesignSystem.md
# UI/UX Design System

## 1. Design direction
Premium light mode: warm, clear, modern, professional, locally welcoming. Avoid dark-mode layouts, excessive gradients, bubbly shapes, loud shadows, and over-decoration.

## 2. Colour tokens
Primary palette supplied by the owner/developer:
- Chocolate Brown / primary: `#4E342E`
- Cream / main background: `#F8F4E7`
- Burnt Orange / accent: `#CC5500`
- White / card surface: `#FFFFFF`

Recommended supporting tokens:
- Body text: `#2E2724`
- Muted text: `#665A54`
- Border: `#E6DCC6`
- Soft section background: `#F1E6D4`
- WhatsApp green: `#25D366` (only for WhatsApp actions)
- Focus outline: choose a clearly visible accessible tone, and test contrast.

Use chocolate brown for headings and important navigation, cream for the page canvas, burnt orange for primary calls to action and selected states, and white for cards. Do not use orange for large paragraphs. Test contrast for all text sizes.

## 3. Typography
- Display/headings: **Bodoni Moda**. Use for prominent headings and selected editorial labels, not for dense body text.
- Body/UI: **Inter** or a comparable legible sans-serif.
- Marathi: choose and test a Devanagari font such as Noto Sans Devanagari. Bodoni Moda is not a complete Marathi font; do not rely on it for Devanagari text.
- Use font fallbacks if external font loading fails.
- Self-host fonts where licensing and project setup permit, or load from a trusted provider with appropriate privacy/performance consideration.

Suggested scale:
- H1 desktop: 48–60px; mobile: 34–42px.
- H2 desktop: 32–40px; mobile: 26–32px.
- H3: 22–28px.
- Body: 16–18px.
- Small labels: 12–14px.
- Line height: body 1.5–1.7; headings 1.1–1.25.

## 4. Layout and spacing
Use a consistent 4px spacing base. Common spacing: 4, 8, 12, 16, 24, 32, 48, 64, 80px.
- Maximum content width: approximately 1120–1240px.
- Keep readable text measure around 60–75 characters.
- Desktop gutters: 32–56px depending on viewport.
- Mobile gutters: 16–20px.
- Section spacing: 64–96px desktop and 40–64px mobile.
- Use a 12-column grid on wide screens where useful.
- Avoid stretching paragraph text across the entire viewport.

## 5. Buttons
Primary button:
- Burnt orange fill, white text.
- Height around 44–48px.
- Radius 8–12px.
- Visible hover, active, disabled and focus states.

Secondary button:
- White/cream surface, chocolate border/text.
- Same height and radius as primary.

WhatsApp button:
- Green fill, white icon and label.
- Only for actions that open WhatsApp.

Do not use buttons for simple navigation where a normal link is more semantically appropriate. Button labels should describe the action.

## 6. Cards
- White surface on cream background.
- Border `#E6DCC6`.
- Radius 12–16px.
- Soft, low-contrast shadow only when needed.
- Consistent image ratio and padding.
- Avoid excessive card nesting.
- Use consistent CTA placement.

## 7. Header and footer
Header:
- White or cream surface.
- Wordmark at left.
- Main navigation on desktop.
- Language switcher visible.
- Mobile menu at small widths.
- Sticky header only if it remains compact and does not obscure content.

Footer:
- Business name and verified contact.
- Useful page links.
- English/Marathi options.
- Developer credit linking to developer page.
- Privacy notice if data collection/analytics warrants it.

## 8. Photography and icons
- Prioritize actual shop, owner, equipment, documents-without-private-data, and developer photos.
- Crop consistently, but do not distort people or machines.
- Optimize images and use appropriate responsive variants.
- Use one coherent icon family.
- Decorative botanical shapes may be used sparingly, but the overall visual should remain appropriate for printing and insurance services.

## 9. Motion
- Short transitions around 150–250ms.
- Prefer opacity and transform.
- Respect `prefers-reduced-motion`.
- Avoid scroll-jacking, long intro animations, and animation that delays contact actions.

## 10. Responsive behaviour
- Mobile: one-column content, accessible menu, full-width CTA when appropriate.
- Tablet: two-column cards where space permits.
- Desktop: wider hero, 2–3 service columns, balanced image/text sections.
- Prevent horizontal overflow.
- Ensure touch targets are around 44px or larger.
- Test both English and Marathi because translated text lengths differ.

## 11. Accessibility
- Semantic headings in order.
- Keyboard-operable navigation and gallery.
- Visible focus styles.
- Descriptive link text.
- Alt text for informative images; empty alt for decorative images.
- Contrast checks.
- Form labels and error messages if a form exists.
- Correct `lang` attributes.
