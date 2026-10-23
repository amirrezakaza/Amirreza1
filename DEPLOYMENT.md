# GAZANOVA — Setup, Email Configuration & Deployment Guide

This guide documents how to run, configure, verify, and deploy the **GAZANOVA** bilingual (English LTR / Persian RTL) website in development and production environments without assuming a single hosting vendor.

---

## 1. Technology Stack Summary

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling:** Tailwind CSS v4 + Logical CSS properties (`ltr` / `rtl`)
- **Database:** PostgreSQL via Drizzle ORM (`src/db/index.ts`, `src/db/schema.ts`)
  - Used for `/api/health` readiness checks and privacy-preserving hashed rate-limiting / duplicate-submission guards (zero personal contact data is stored in PostgreSQL).
- **Email Delivery:** Server-side `src/lib/email.ts` supporting **Resend HTTP API** (`EMAIL_PROVIDER=resend`) and **Standard SMTP** (`EMAIL_PROVIDER=smtp` via `nodemailer`).

---

## 2. Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create local `.env` from `.env.example`:**
   ```bash
   cp .env.example .env
   ```
   Populate `DATABASE_URL` and (optionally for local email testing) email provider variables. Never commit `.env` to version control (`.gitignore` excludes `.env` and `.env.*` automatically).

3. **Push database schema to PostgreSQL:**
   ```bash
   npx drizzle-kit push
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

---

## 3. Environment Variables Reference

| Variable | Required | Description |
| :--- | :--- | :--- |
| `DATABASE_URL` | **Yes** | PostgreSQL connection string (`postgresql://user:pass@host:5432/dbname`). |
| `NEXT_PUBLIC_SITE_URL` | **Prod** | Verified canonical HTTPS origin without trailing slash (e.g. `https://gazanova.com`). Used for canonical URLs, `hreflang`, Open Graph, `sitemap.xml`, and `robots.txt`. |
| `EMAIL_PROVIDER` | **Yes (Email)** | Set to `"resend"` for Resend HTTP API or `"smtp"` for standard SMTP. |
| `CONTACT_EMAIL_TO` | **Yes (Email)** | Real destination inbox that receives project inquiries. |
| `CONTACT_EMAIL_FROM` | **Yes (Email)** | Verified sender identity (e.g. `GAZANOVA Inquiries <noreply@yourdomain.com>`). |
| `EMAIL_PROVIDER_API_KEY` | Conditional | Required when `EMAIL_PROVIDER="resend"`. Keep server-side only. |
| `EMAIL_API_ENDPOINT` | Optional | Defaults to `https://api.resend.com/emails`. |
| `SMTP_HOST` | Conditional | Required when `EMAIL_PROVIDER="smtp"`. |
| `SMTP_PORT` | Optional | SMTP port (`587` STARTTLS default, or `465` implicit TLS). |
| `SMTP_SECURE` | Optional | `"true"` for port 465 TLS, `"false"` for port 587 STARTTLS. |
| `SMTP_USER` / `SMTP_PASS` | Conditional | SMTP authentication credentials when required by your mail server. |
| `RATE_LIMIT_SALT` | **Prod** | Long random secret string used to salt SHA-256 rate-limit & idempotency hashes. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Publicly displayed business email (only rendered when set to a real address). |
| `NEXT_PUBLIC_TELEGRAM_URL` | Optional | Verified public Telegram link (hidden when unset). |
| `NEXT_PUBLIC_GITHUB_URL` | Optional | Verified public GitHub link (hidden when unset). |
| `NEXT_PUBLIC_LINKEDIN_URL` | Optional | Verified public LinkedIn link (hidden when unset). |

---

## 4. Configuring Real Email Delivery

The `/api/contact` endpoint **never fakes success**. Until real sender/recipient credentials are configured, submissions return `503 Service Unavailable` with a clear localized message.

### Option A: Resend API (`EMAIL_PROVIDER="resend"`)
1. Create an account at Resend and add your domain.
2. Add the required DNS records (**SPF**, **DKIM**, and **DMARC**) at your DNS registrar and wait for domain verification.
3. Generate an API key with Sending permission.
4. Set in your production environment:
   - `EMAIL_PROVIDER="resend"`
   - `EMAIL_PROVIDER_API_KEY="re_..."`
   - `CONTACT_EMAIL_FROM="GAZANOVA <inquiries@your-verified-domain.com>"`
   - `CONTACT_EMAIL_TO="projects@your-verified-domain.com"`

### Option B: Standard SMTP (`EMAIL_PROVIDER="smtp"`)
1. Provision an authenticated mailbox or transactional SMTP relay (Postmark, AWS SES, Mailgun, Google Workspace, Zoho Mail, or private mail server) with SPF/DKIM configured on the sending domain.
2. Set in your production environment:
   - `EMAIL_PROVIDER="smtp"`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`
   - `CONTACT_EMAIL_FROM` (must match an authorized sender on that SMTP server)
   - `CONTACT_EMAIL_TO`

---

## 5. Build, Verification & Start Commands

```bash
# 1. Generate Next.js route types
npx next typegen

# 2. Run strict TypeScript validation
npm exec tsc -- --noEmit --pretty false

# 3. Run ESLint
npm run lint

# 4. Build for production
npm run build

# 5. Start production server
npm run start
```

---

## 6. Production Domain, HTTPS & Deployment Checklist

- [ ] **PostgreSQL Ready:** Provision managed or self-hosted PostgreSQL with TLS, set `DATABASE_URL`, and run `npx drizzle-kit push`.
- [ ] **HTTPS & Canonical Domain:** Point DNS (`A`/`AAAA` or `CNAME`) to your hosting platform, enable automatic TLS/HTTPS certificates, and set `NEXT_PUBLIC_SITE_URL="https://your-real-domain.com"`.
- [ ] **Secrets Isolation:** Confirm `.env` is not tracked in Git (`git status --ignored`) and secrets are entered only in your host's encrypted environment settings.
- [ ] **Security Salt:** Set `RATE_LIMIT_SALT` to a newly generated 32+ byte random string (`openssl rand -hex 32`).
- [ ] **Healthcheck Endpoint:** Verify `GET https://your-real-domain.com/api/health` returns `200 {"ok":true}`.
- [ ] **SEO Verification:** Inspect `/sitemap.xml` and `/robots.txt` on production to confirm `NEXT_PUBLIC_SITE_URL` replaced the placeholder domain.
- [ ] **Production Contact Form Test:**
  1. Open `/en/contact` and `/fa/contact` in a browser.
  2. Submit an invalid form first to confirm localized validation errors appear.
  3. Submit a controlled real test inquiry and confirm:
     - HTTP `200` confirmation state appears in the UI.
     - Formatted email arrives in `CONTACT_EMAIL_TO` with `Reply-To` set to your test email.
     - Immediate re-submission of the exact same payload returns `409` duplicate protection.

---

## 7. Maintaining Services & Portfolio Projects

- **Services:** Edit `src/data/services.ts` (`SERVICES_DATA`) with both `en` and `fa` entries.
- **Portfolio Projects:** Edit `src/data/projects.ts` (`PROJECTS_DATA`). Once real client case studies are approved for public display, add new project entries (and update `statusText` / badge logic as appropriate).
