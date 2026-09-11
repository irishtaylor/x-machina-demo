# X-Machina Portal Static Prototype

This is a self-contained clickable front-end prototype for the X-Machina portal.

## Included screens

- D2C Student Dashboard
- AI Courses page
- Video lesson page
- Learning paths
- Hackathon workspace
- Team submission workflow
- Winners showcase
- Certificates page
- Community page
- Profile page
- Pricing / proposal enquiry page
- B2B University / Institution Dashboard
- Students and cohorts
- Faculty enablement
- Program management
- Institution hackathons
- Analytics
- Reports
- Sponsors and partners
- Institution settings

## How to run locally

Open `index.html` in any browser.

For best results, use a simple local server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## How to host on your own server

Upload the full folder contents to your server public web root, for example:

```text
/public_html/xmachina-portal/
```

or

```text
/var/www/html/xmachina-portal/
```

Then access:

```text
https://yourdomain.com/xmachina-portal/
```

## No backend included

This is a clickable front-end prototype. Login, video library, user accounts, submissions, certificates, payments and analytics are mocked in JavaScript.

## Production build recommendation

- Frontend: React / Next.js
- Backend: Node.js / NestJS or Laravel
- Database: PostgreSQL
- Storage: AWS S3 / Cloudflare R2 / Azure Blob
- Authentication: Email OTP + Google login + institution SSO later
- Video hosting: Vimeo, Bunny Stream, YouTube unlisted, AWS MediaConvert, or self-hosted HLS
- Payments: Razorpay for India, Stripe for international
- Certificates: QR-verifiable PDF certificates
- Admin analytics: role-based dashboards
- Deployment: Docker + Nginx + Cloudflare

## Production roles

- Student
- Faculty
- Institution Admin
- X-Machina Admin
- Mentor
- Judge
- Sponsor
- Super Admin

## Important

Sponsor/company names shown are for concept/prospecting only. Do not use official logos or imply sponsorship until written approval is secured.
