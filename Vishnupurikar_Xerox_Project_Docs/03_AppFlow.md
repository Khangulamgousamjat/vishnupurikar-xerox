# 03_AppFlow.md
# Website Flow and Navigation

## 1. Global header
Elements, in order:
1. Business logo/wordmark placeholder.
2. Main navigation: Home, Services, LIC Services, About Owner, Gallery, Developer, Contact.
3. Language control: `EN | मराठी`.
4. Optional prominent contact action on larger screens.
5. Mobile menu button with accessible name and expanded state.

The logo should link to the homepage. On mobile, the menu must open/close, support Escape where appropriate, and not trap users unexpectedly.

## 2. Home page flow
1. Hero: business name, concise value statement, verified location, primary service CTA, WhatsApp CTA.
2. Quick service cards: only confirmed services.
3. Separate Ghansham Vima Seva Kendra introduction.
4. Why choose the business: only genuine and supportable points, not unverified superlatives.
5. Shop photo preview.
6. Owner introduction.
7. Contact/location strip.
8. Developer credit.
9. Footer with navigation and language links.

## 3. Services page flow
1. Breadcrumb and page title.
2. Short introduction.
3. Optional service category filters if enough services exist.
4. Service cards with photo, name, short description, and enquiry CTA.
5. Optional pricing only after owner approval.
6. WhatsApp/call contact strip.

Suggested candidate services requiring confirmation: black-and-white photocopy, colour printing, document printing, lamination, spiral binding, and additional services supplied by the owner. Never imply every candidate service is available until confirmed.

## 4. LIC Services page flow
1. Page heading: Ghansham Vima Seva Kendra.
2. Owner-approved description of the role and services.
3. Service list based on verified authorization and actual work.
4. Guidance / enquiry information that does not promise a policy outcome.
5. Call and WhatsApp actions.
6. Link to official LIC information where appropriate.
7. Disclaimer that this is the business's informational website, not an official LIC website, unless official status is independently confirmed.

Do not provide online policy purchase, premium calculation, claims handling, or personalized insurance advice in version 1.

## 5. About Owner page flow
1. Approved portrait.
2. Full name: Maroti Manika Vishnupurikar.
3. Short introduction.
4. Business background and professional journey once supplied.
5. Sections for the two business activities.
6. Approved workplace photographs.
7. Contact CTA.

## 6. Gallery page flow
1. Page title and short explanation.
2. Optional categories: Shop, Printing, Documents, Owner/Office.
3. Responsive image grid.
4. Accessible image enlargement/lightbox.
5. Captions only where accurate.
6. Contact CTA.

Never publish photos showing customer documents or personal information. Obtain permission for identifiable people.

## 7. Developer Portfolio page flow
1. Heading: Website designed and developed by Khan Gulamgous.
2. Approved developer photo.
3. Accurate short bio and skills.
4. Project case study for this website, after it is built.
5. Other completed projects only.
6. Links to actual portfolio/GitHub/LinkedIn/contact channels, if supplied.
7. Contact CTA for prospective clients.

Do not invent experience, credentials, testimonials, or project results.

## 8. Contact page flow
1. Phone and WhatsApp contact cards.
2. Address: Near Kaleshwar Kaman, Vishnupuri, Nanded.
3. Directions/map link after pin verification.
4. Business hours placeholder until supplied.
5. Optional contact form only if a secure submission route is implemented.
6. Footer and language controls.

## 9. Language-switch flow
- Store an explicit mapping between English and Marathi routes.
- When a translation exists, switching language keeps the user on the equivalent page.
- If an equivalent page does not exist, navigate to the translated homepage and communicate this clearly.
- Preserve no form data unless intentionally designed and tested.
- Use real Marathi translation, not raw machine output without review.

## 10. Error and fallback states
- Missing photo: show a neutral placeholder during development; do not publish it as a real photo.
- Missing translation: fall back to the matching language homepage, not mixed-language page text.
- Maps unavailable: show address and a normal directions link.
- WhatsApp unavailable: keep the phone call option visible.
- Broken form submission: show an error and do not claim the enquiry was sent.
