# 09_ComponentLibrary.md
# Reusable UI Component Library

## 1. Design tokens
```css
:root {
  --color-brown: #4E342E;
  --color-cream: #F8F4E7;
  --color-orange: #CC5500;
  --color-white: #FFFFFF;
  --color-text: #2E2724;
  --color-muted: #665A54;
  --color-border: #E6DCC6;
  --color-soft-section: #F1E6D4;
  --color-whatsapp: #25D366;

  --font-heading: "Bodoni Moda", Georgia, serif;
  --font-body: "Inter", Arial, sans-serif;
  --font-marathi: "Noto Sans Devanagari", sans-serif;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;

  --content-max: 1200px;
}
```

## 2. Button variants
### Primary
- Orange background, white text.
- Used for primary service exploration or contact action.
- Clear hover/focus/active states.

### Secondary
- Cream or white background, brown text and border.
- Used for secondary actions.

### WhatsApp
- Green background and white icon/label.
- Must open the intended WhatsApp destination.

### Text link
- Used for simple navigation and secondary inline actions.
- Must look interactive and have a visible focus state.

## 3. Header component
Props/content:
- Wordmark/logo
- Navigation links
- Current route
- Language options
- Mobile menu state
- Optional call/contact CTA

Behaviour:
- Logo returns to homepage.
- Current page is visually and semantically identified.
- Mobile menu is keyboard-accessible.
- Header does not cover anchor targets.

## 4. Service card
Fields:
- Image
- Service name
- Short description
- Optional approved price
- Enquiry link
- Language-specific alt text

Rules:
- Do not display unconfirmed services.
- Use consistent image ratio.
- Enquiry message names the selected service.
- If price is unknown, omit it or say “Contact for pricing” only if approved.

## 5. Contact card
Variants:
- Phone
- WhatsApp
- Address/map
- Business hours

Rules:
- Show only confirmed data.
- Map link must point to the verified location.
- Keep phone and WhatsApp actions distinct.
- Do not show business hours until confirmed.

## 6. Profile card
Fields:
- Approved portrait
- Name
- Role
- Short biography
- Optional page link

Used for the owner and developer. Do not reuse the same stock portrait to imply it is either person.

## 7. Gallery component
Features:
- Responsive grid
- Optional category filter
- Accessible enlargement view
- Escape to close
- Focus management
- Previous/next controls only if implemented accessibly
- Captions and alt text from approved content

## 8. Language switcher
- Labels: `EN` and `मराठी`.
- Switch to matching route when available.
- Use normal links so it works without JavaScript where possible.
- Indicate the active language.
- Do not use flag icons as the only language label.

## 9. Breadcrumb component
- Show current page hierarchy on inner pages.
- Use semantic navigation with an accessible label.
- Do not show a breadcrumb on the homepage unless the design has a reason.

## 10. Footer component
- Business names
- Contact information
- Page navigation
- Language switcher
- Developer credit
- Optional privacy link if applicable

## 11. Empty and error states
- Missing gallery content: do not show an empty shell in production.
- Broken image: fallback graphic with no false implication.
- Form error: explain what needs fixing.
- WhatsApp/map external service unavailable: keep phone/address text available.
