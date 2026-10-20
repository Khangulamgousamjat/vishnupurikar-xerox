# 11_Security.md
# Security, Privacy, Reliability and Launch Rules

## 1. Data minimization
Version 1 should not collect customer information. Phone and WhatsApp actions take visitors to external applications; the website should not claim to receive or store those messages.

Do not publish:
- Customer policy details or documents
- Identity documents
- Customer phone lists
- Private WhatsApp screenshots
- Payment information
- Personal information visible in shop photographs
- Credentials or private owner records

## 2. Insurance content safety
- Publish only verified business and agent information.
- Do not imply official LIC ownership or endorsement without proof.
- Do not promise returns, policy approval, claim approval, or outcomes.
- Do not provide a personalized recommendation or transaction workflow unless separately authorized and properly designed.
- Link to official sources where useful.
- The owner should approve all LIC-related wording before launch.

## 3. Contact and form security
- Phone and WhatsApp links should use only the approved public number.
- If a form is added, use a secure provider/backend, server-side validation, spam prevention, safe output handling, and a privacy notice.
- Never display “message sent” unless the submission service confirms success.
- Do not place secret API keys in client-side JavaScript.

## 4. Hosting security
- Use HTTPS only.
- Redirect HTTP to HTTPS.
- Keep hosting configuration and dependencies maintained.
- Use least-privilege access for deployment accounts.
- Protect domain registrar and hosting accounts with strong unique passwords and MFA.
- Keep recovery options current.
- Do not commit `.env` files, credentials, private keys, or access tokens.

## 5. Image and copyright safety
- Obtain permission to publish identifiable people.
- Use licensed or owner-supplied imagery.
- Review every image for customer documents, computer screens, phone numbers, addresses, policy details, and other private information.
- Keep an original copy of approved assets.
- Use descriptive alt text without revealing sensitive details.

## 6. Privacy and analytics
- Add analytics only if needed.
- Review the chosen analytics provider's privacy implications.
- Provide an appropriate privacy notice when personal data or tracking is used.
- Avoid unnecessary third-party scripts and trackers.
- Do not add cookies or tracking features without understanding applicable obligations.

## 7. Reliability
- Keep source code under version control.
- Keep a copy of final approved images and content.
- Test the deployed website after each release.
- Monitor broken links and contact actions.
- Keep a simple rollback path to the last known-good deployment.
- Check that all placeholder assets and text are removed before production.

## 8. Launch security checklist
- [ ] HTTPS active
- [ ] No credentials in public source
- [ ] No sensitive customer or policy information
- [ ] Owner approved business and insurance content
- [ ] Phone and WhatsApp destinations verified
- [ ] Map pin verified
- [ ] Image permissions checked
- [ ] Forms secured or omitted
- [ ] Privacy notice added if needed
- [ ] Hosting/domain access protected with MFA
- [ ] Backup and rollback steps documented
- [ ] No placeholder claims or stock photos presented as real
