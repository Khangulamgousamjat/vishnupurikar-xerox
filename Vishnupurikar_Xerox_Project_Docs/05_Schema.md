# 05_Schema.md
# Content Schema and Data Model

## 1. Database decision
No database is required for version 1. This website is a public informational site with static content and contact links. Avoid adding Firebase Firestore, authentication, or a CMS unless a concrete future requirement is approved.

## 2. Suggested content files
Keep repeated content separate from page layout where practical:
- `content/en/site.json`
- `content/mr/site.json`
- `content/en/services.json`
- `content/mr/services.json`
- `content/en/lic-services.json`
- `content/mr/lic-services.json`
- `content/gallery.json`
- `content/developer.json`

The exact file format can change with the implementation approach. Do not place private information in public content files.

## 3. Site configuration fields
- `businessName`: approved public name.
- `insuranceBusinessName`: approved public name.
- `ownerName`: Maroti Manika Vishnupurikar.
- `developerName`: Khan Gulamgous.
- `phoneDisplay`: 9657931621.
- `phoneE164`: +919657931621, after number confirmation.
- `addressDisplay`: Near Kaleshwar Kaman, Vishnupuri, Nanded.
- `mapUrl`: verified directions URL; placeholder until verified.
- `whatsappEnabled`: boolean after confirmation.
- `businessHours`: unknown until supplied.
- `domain`: unknown until selected.
- `defaultLanguage`: English.
- `supportedLanguages`: English, Marathi.

## 4. Service content structure
Each service item may contain:
- `id`: stable slug, e.g. `photocopy`.
- `title.en`, `title.mr`.
- `description.en`, `description.mr`.
- `image`: approved asset path.
- `alt.en`, `alt.mr`.
- `isPublished`: false until verified.
- `price`: optional and only if owner confirms.
- `enquiryMessage.en`, `enquiryMessage.mr`.
- `sortOrder`.

Do not mark candidate services as published before the owner confirms availability.

## 5. LIC content structure
- `pageTitle`
- `intro`
- `verifiedServiceItems[]`
- `agentDesignation` (unknown until verified)
- `agentNumber` (unknown until verified; do not publish without approval)
- `officialLinks[]`
- `disclaimer`
- `approvedImage`
- `lastReviewedDate`

Only publish insurance statements approved by the owner and consistent with official information. Do not store or display customer policy data.

## 6. Gallery structure
- `id`
- `imagePath`
- `thumbnailPath`
- `category`
- `caption.en`
- `caption.mr`
- `alt.en`
- `alt.mr`
- `isApproved`
- `permissionConfirmed`
- `sortOrder`

Every image must be reviewed for private customer data before publication.

## 7. Developer profile structure
- `name`: Khan Gulamgous.
- `photo`: placeholder until supplied.
- `bio.en`, `bio.mr`: placeholders until supplied.
- `skills[]`: only actual skills.
- `projects[]`: actual projects and verified links.
- `contactLinks[]`: optional and supplied by developer.
- `portfolioPublished`: false until approved.

## 8. Future database option
If an admin CMS is later requested, prepare a separate design for collections such as `siteContent`, `services`, `gallery`, and `announcements`, with authentication and role-based access. Do not implement this future model in version 1 by default.

## 9. Data quality
- Keep English and Marathi values aligned.
- Validate required fields before build/deployment.
- Use stable IDs rather than relying on array positions.
- Treat missing values as missing, not as permission to invent details.
- Do not expose private data in source control.
