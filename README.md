# PYFG Tanzania Website

Production-ready React + TypeScript + Tailwind website scaffold for Potential Youth for Future Generation.

## Features

- Modern multi-page React app using route-based pages.
- Home page aligned to your provided design template style.
- Impact Hub with measurable output dashboard.
- Opportunity Portal with searchable opportunities.
- Storytelling Engine with region-based success stories.
- Gamified onboarding "Growth Path" tracker.
- Donation page prepared for Stripe/Coinbase integration.
- SEO-ready page metadata with `react-helmet-async`.
- Analytics instrumentation hooks for PostHog and Microsoft Clarity.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Recharts

## Quick Start

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` and configure keys.

## Next Steps For Full Go-Live

- Connect `/donate` to secure backend checkout session endpoints.
- Add server-side webhook verification for payments and receipts.
- Replace demo data with CMS/API content for opportunities and impact metrics.
- Add e2e tests for donor and youth onboarding paths.
# PYFG
