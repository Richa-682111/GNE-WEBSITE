## GNE Web (Next.js)

Modern Node.js website for a renewable-energy company with:

- Dark / light mode
- Service pages (Solar EPC, BESS & EMS, Hydrogen, Solar Panel Plant)
- Projects portfolio (map + timeline placeholders)
- Blog / news (SEO-ready with schema.org)
- Contact form + API endpoint (`/api/contact`)
- Auto-generated `sitemap.xml` + `robots.txt`

### Prerequisites

- Install **Node.js LTS (18+ / 20+ recommended)**.
- After installing, restart your terminal and verify:

```bash
node -v
npm -v
```

### Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Configure your real domain + contact details

Edit:

- `content/site.ts` (set `url`, email, phone, company name)
- `content/projects.ts` (replace sample projects)
- `content/blog.ts` (replace sample posts)

### Production build

```bash
npm run build
npm run start
```

### Notes on WordPress items you listed

This repo is a **Node.js rebuild** (not WordPress). If you still want WordPress + a block theme, we can do that in a separate folder and migrate content.

