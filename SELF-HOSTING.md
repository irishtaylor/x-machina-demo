# X-Machina portal

Complete editable source for the compact, multi-page portal. The screenshot artwork is bundled in public/assets. Separate routes serve AI Learning (/), Schools (/schools) and Universities & Colleges (/universities). Preferences, bookmarks, lesson progress, registrations and forms are implemented; records use D1 and uploaded submission files use R2.

## Run locally

Requires Node.js 22 and pnpm. Run `pnpm install`, then `pnpm build`. The build emits a Cloudflare Worker in dist/server and static assets in dist/client.

Apply the bundled SQL migration to the local D1 database before testing saved records:

`pnpm exec wrangler d1 execute DB --local --config dist/server/wrangler.json --file drizzle/0000_luxuriant_reaper.sql`

Run `pnpm start` (see package.json for the preview command).

## Hosting outside the preview

This is a Cloudflare Workers application, not a static HTML download. Provision a D1 database bound as DB and an R2 bucket bound as FILES. Apply drizzle/0000_luxuriant_reaper.sql to that database. Configure your own Wrangler deployment with the built Worker entry point and static assets. The .openai/hosting.json identifies the existing private preview; use your own deployment configuration outside Sites.

For a conventional Linux server, replace cloudflare:workers access in app/api/records/route.ts and app/api/files/route.ts with your database and object-storage adapters, and use a compatible React server runtime. Do not upload the source ZIP to a static-only web host and expect the API to work.

## Content and launch scope

The portal is an owner-private demonstration with functional saved workflows. The workspace switcher changes demo scope, not authenticated identity. Reference statistics, people, winners and scores are sample content. The lesson pages contain sample written lessons and a quiz; actual training video files have not been supplied. Uploads accept PDF, MP4 and WebM up to 20 MB. Bookings and enquiries save records; they do not send emails or reserve an external calendar.

Before enrolling real institutions, implement user authentication and server-enforced institution membership/permissions, replace sample content with approved content, attach licensed training videos, connect email and any payment service, and establish upload access policies. The current school/university/learner scopes are shared demo workspaces, not isolated customer accounts.

## Main journeys

AI Learning: dashboard, course catalogue, lesson detail, learning paths, hackathon registration, teams, submission, challenges, community, winners, certificates and profile.

Schools and Universities: independent dashboards, classes/cohorts, students, faculty, course assignment, hackathon delivery, reports, submissions, certificates and settings. Reports download CSV. Theme preference persists between visits. Navigation remains keyboard accessible and hides its scrollbar on short screens.
