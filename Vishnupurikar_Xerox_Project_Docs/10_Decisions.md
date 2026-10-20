# 10_Decisions.md
# Architecture and Design Decision Log

## D001 — Multi-page website
**Decision:** Use separate pages for Home, Services, LIC Services, About Owner, Gallery, Developer, and Contact.  
**Reason:** Business services and the owner/developer profiles need clear navigation and page-specific SEO.  
**Status:** Accepted.

## D002 — English and Marathi
**Decision:** Support both languages with equivalent page routes and a visible language switcher.  
**Reason:** The business is local and bilingual content makes the site more accessible.  
**Status:** Accepted.

## D003 — Light-mode brand palette
**Decision:** Use chocolate brown `#4E342E`, cream `#F8F4E7`, burnt orange `#CC5500`, and white `#FFFFFF`.  
**Reason:** The palette is the requested brand direction.  
**Status:** Accepted.

## D004 — Typography
**Decision:** Use Bodoni Moda for display headings, Inter or equivalent for English body/UI text, and a tested Devanagari font such as Noto Sans Devanagari for Marathi.  
**Reason:** Bodoni Moda provides the desired premium heading style, while body and Marathi text require high legibility and script coverage.  
**Status:** Accepted.

## D005 — Static site for first release
**Decision:** No database, login, admin dashboard, or backend in version 1.  
**Reason:** The current site is informational and can work with static pages and direct contact links.  
**Status:** Accepted, revisit only if content editing or data collection is required.

## D006 — WhatsApp integration
**Decision:** Use a `wa.me` link with the supplied phone number after verifying it is WhatsApp-enabled.  
**Reason:** It is the simplest enquiry path and does not require storing visitor messages.  
**Status:** Pending phone verification.

## D007 — Contact form
**Decision:** Do not include a functional contact form unless a secure submission service is selected.  
**Reason:** A front-end-only form cannot reliably deliver messages and could mislead visitors.  
**Status:** Accepted.

## D008 — Domain
**Decision:** Select the domain later.  
**Reason:** The owner has not chosen a domain.  
**Status:** Deferred.

## D009 — Verified content only
**Decision:** Unknown hours, prices, services, qualifications, insurance credentials, testimonials, and experience remain placeholders until approved.  
**Reason:** The site must not misrepresent the business.  
**Status:** Accepted.

## D010 — Real imagery
**Decision:** Use approved photographs of the actual shop, owner, and developer for production.  
**Reason:** Stock images should not be mistaken for the real people or business.  
**Status:** Pending asset collection.

## Decision template for future changes
- ID:
- Date:
- Proposal:
- Decision:
- Reason:
- Pages/components affected:
- Owner approval required:
- Status:
