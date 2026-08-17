<div align="center">

# Evnorix — Connected Business Systems

**Technology services for lending, collections, and connected data.**

A premium, enterprise-grade marketing site for Evnorix — a service-based technology company that designs, digitises, and integrates business-critical workflows.

[Live Preview](https://evnorix-core-systems.lovable.app) · [Services](https://evnorix-core-systems.lovable.app/services) · [Contact](https://evnorix-core-systems.lovable.app/contact)

</div>

---

## Overview

Evnorix is positioned as a dependable engineering partner — not a SaaS product, not a generic agency. The site communicates business value first and technology capability second, across three core service lines:

| # | Service | What it covers |
|---|---------|----------------|
| 01 | **Loan Origination System Services** | Workflow design, application processing, KYC/verification, document handling, integrations, dashboards |
| 02 | **Collections Services** | Collection workflows, task management, field operations, payment follow-up, status visibility, analytics |
| 03 | **Database Repositories & Data Mirroring** | Replication, controlled synchronisation, continuity, monitoring, auditability, secure data handling |

## Design system

- **Concept:** "Connected Business Systems" — business workflow → application → data → connected systems → outcome.
- **Surfaces:** dark-first deep navy and charcoal, thin borders, restrained glow, generous whitespace.
- **Accents:** brand teal `#00A1A4` with a deep blue `#1B4486` support tone, defined as semantic tokens in `src/styles.css`.
- **Typography:** Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (technical labels/eyebrows).
- **Visuals:** custom SVG system diagrams and flow maps instead of stock photography.
- **Motion:** intersection-observer reveals, subtle flow dashes and node pulses — restrained by design.

## Site map

```text
/                     Home — hero system diagram, positioning strip, services, process, CTA
/about                Positioning, principles, culture and ethics
/services             All three service lines
/services/$slug       Deep-dive per service (problem, approach, flow, outcomes, FAQs)
/how-we-work          Discovery → design → build → integration → testing → support
/technology           Capabilities and engineering practices
/work                 Representative delivery scenarios
/contact              Enquiry form and direct routes
```

## Tech stack

- **Framework:** TanStack Start v1 (React 19, SSR, file-based routing)
- **Build:** Vite 7
- **Styling:** Tailwind CSS v4 via `src/styles.css` theme tokens
- **UI primitives:** shadcn-style components under `src/components/ui`
- **Language:** TypeScript (strict, `exactOptionalPropertyTypes`)

## Project structure

```text
src/
├─ routes/                 File-based routes (__root.tsx is the app shell)
├─ components/site/        Header, Footer, Logo, Reveal, diagrams, sections, primitives
├─ components/ui/          Reusable UI primitives
├─ lib/site.ts             Navigation, service content, process and brand data
├─ assets/                 Brand logo variants
└─ styles.css              Design tokens, typography, utilities
```

All copy lives in `src/lib/site.ts` — edit content there and every page updates.

## Running locally

```sh
git clone <your-repo-url>
cd <repo>
npm install
npm run dev
```

The dev server runs on `http://localhost:8080`.

```sh
npm run build     # production build
npm run preview   # preview the production build
```

## Content principles

- No invented clients, certifications, awards, or statistics.
- Specific, business-oriented messaging — never vague innovation slogans.
- Every navigation item and CTA resolves to a real page.
- Each route ships its own title, description, and Open Graph metadata.

## Accessibility & performance

- Semantic HTML with a single `H1` per page and clear heading hierarchy.
- Keyboard-navigable header, mobile menu, and forms.
- Sufficient contrast on all dark surfaces.
- SVG-first visuals keep page weight low; images are lazy-loaded.

---

<div align="center">
Built with care for enterprise credibility. © Evnorix.
</div>
