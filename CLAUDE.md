# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Konnektr Home is the **public-facing marketing website** for the Konnektr Platform. This is a marketing site only - it does NOT handle user authentication, resource management, or product functionality. All platform functionality redirects to KtrlPlane (the control plane).

**Technology Stack:**
- Frontend: React 19+ with TypeScript, Vite 7+, Vike framework (SSR/SSG)
- UI: shadcn/ui components, Tailwind CSS 4+ (OKLCH color space)
- Backend: Python FastAPI (waiting list only, MailerLite integration)
- Package Manager: **PNPM exclusively** (never npm or yarn)

## Common Commands

### Frontend Development
```bash
cd frontend
pnpm install              # Install dependencies
pnpm run dev             # Start dev server (Vike)
pnpm run build           # Build for production
pnpm run preview         # Preview production build
pnpm run lint            # Run ESLint
```

### Backend (Waiting List API)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env      # Configure MailerLite API credentials
uvicorn main:app --reload --port 8080
```

### OG Image Generation
```bash
cd frontend
node scripts/generate-og-images.js  # Generate social media images
```

### Testing
```bash
cd frontend
pnpm exec playwright test   # Run Playwright tests
```

## Architecture Overview

### Folder Structure
```
/frontend/src/
  /pages/           # Vike file-based routing (+Page.tsx, +Head.tsx)
    /index/         # Homepage
    /graph/         # Product: Konnektr Graph
    /assembler/     # Product: Konnektr Assembler
    /flow/          # Product: Konnektr Flow
    /compass/       # Product: Konnektr Compass
    /features/      # Feature-specific pages
  /components/      # React components (Navigation, Footer, etc.)
    /ui/            # shadcn/ui components
  /layouts/         # Layout components (LayoutDefault.tsx)
  /data/            # Data files (products.ts, seo.ts)
  /utils/           # Utility functions (analytics.ts)
  /assets/          # Static assets (images, SVGs)

/backend/
  main.py           # FastAPI app (waiting list + static file serving)
```

### Vike Framework (SSR/SSG)
This project uses **Vike** for server-side rendering and static site generation:
- File-based routing: Each page has a folder with `+Page.tsx` (component) and `+Head.tsx` (SEO meta tags)
- Server-side rendering with static prerendering for optimal performance
- `LayoutDefault.tsx` provides the shared header/footer/navigation wrapper

### Key Architectural Patterns

**1. Separation of Concerns**
- Marketing website is completely separate from platform functionality
- NO user authentication, sessions, or user data storage
- Redirects to `https://ktrlplane.konnektr.io` for all platform features

**2. SEO-First Design**
- Structured SEO data in `/frontend/src/data/seo.ts`
- Per-page `+Head.tsx` files for meta tags
- OpenGraph images generated via Playwright automation
- Static site generation for fast loading and SEO

**3. Component Architecture**
- shadcn/ui components in `/components/ui/`
- Custom components follow React functional patterns with TypeScript
- Shared navigation (`Navigation.tsx`) with desktop/mobile variants
- Reusable dialog components (`MailingListDialog.tsx`)

**4. Styling System**
- **OKLCH color space** for all colors (perceptually uniform)
- CSS custom properties in `/layouts/index.css`
- Brand colors: `--brand-dark`, `--brand-blue`, `--brand-teal`, etc.
- Tailwind CSS with semantic utility classes
- **Never hardcode hex/rgb colors** - always use CSS variables

**5. Analytics & Tracking**
- Google Tag Manager integration with cookie consent
- Analytics utilities in `/utils/analytics.ts`
- GDPR-compliant cookie consent component

## Critical Development Rules

### Package Management
**ALWAYS use PNPM**, never npm or yarn:
- ✅ `pnpm install`, `pnpm add`, `pnpm remove`
- ❌ Never `npm install`, `yarn add`, `npx`

### Styling Guidelines
- Use OKLCH color space: `oklch(L C H)` format
- Define colors in CSS variables, reference via Tailwind classes
- Use semantic classes: `bg-brand-teal`, `text-muted-foreground`
- Black text on teal buttons (14.26:1 contrast ratio for accessibility)
- Never use inline `style=` with hardcoded colors

### Scope Boundaries (CRITICAL)
This is a **marketing website only**. NEVER implement:
- User authentication or login systems (redirect to KtrlPlane)
- User-specific data storage or sessions
- Resource management or deployment functionality
- Billing or subscription logic
- Direct product functionality (Graph, Flow, etc.)

All platform interactions redirect to:
- `https://ktrlplane.konnektr.io` (authentication/platform)
- Deep linking supported: `/projects/{projectId}/resources/create?resourceType={type}&tier={tier}`

### Import Patterns
- NO dynamic imports for utilities: `❌ import("...")`
- Always use top-level imports: `✅ import { foo } from "@/utils/bar"`
- Path aliases configured: `@/` maps to `./src/`

### TypeScript Standards
- Strict TypeScript with no `any` types
- Functional components with proper typing
- Path aliases: `@/components/*`, `@/lib/*`, `@/styles/*`

## Key Integration Points

### MailerLite Backend API
The FastAPI backend exposes `/api/waitinglist` for email signups:
- Products: `graph`, `assembler`, `flow`, `compass`, `demo`
- Configured via environment variables in `.env`
- Frontend uses `MailingListDialog.tsx` component

### KtrlPlane Integration
- Sign-in redirects: `https://ktrlplane.konnektr.io`
- Resource creation: Pass tier/product via URL parameters
- No shared authentication - completely decoupled

### Google Analytics
- GTM integration with consent management
- Cookie consent component in layout
- Custom event tracking functions in `/utils/analytics.ts`

## Important Files

### Configuration
- `frontend/vite.config.ts` - Vite build config with Vike plugin
- `frontend/tsconfig.json` - TypeScript path aliases
- `frontend/eslint.config.js` - ESLint rules for React/TypeScript
- `backend/main.py` - FastAPI app with MailerLite integration
- `Dockerfile` - Multi-stage build (frontend + backend)

### Data Files
- `frontend/src/data/products.ts` - Product definitions and pricing
- `frontend/src/data/seo.ts` - SEO metadata for all pages

### Documentation
- `.github/copilot-instructions.md` - Comprehensive development guidelines
- `.github/DEVELOPMENT_PLAN.md` - Roadmap and progress tracking
- `.github/PLATFORM_SCOPE.md` - Platform architecture and boundaries
- `README.md` - Setup and deployment instructions

## Common Tasks

### Adding a New Page
1. Create folder in `/frontend/src/pages/{pagename}/`
2. Add `+Page.tsx` (React component)
3. Add `+Head.tsx` (SEO meta tags)
4. Update navigation in `Navigation.tsx` if needed
5. Add SEO data to `/data/seo.ts`
6. Generate OG image: `node scripts/generate-og-images.js`

### Updating Product Information
1. Edit `/frontend/src/data/products.ts`
2. Update corresponding page in `/pages/{product}/+Page.tsx`
3. Regenerate OG images if branding changed

### Modifying Colors
1. Edit CSS variables in `/frontend/src/layouts/index.css`
2. Use OKLCH format: `oklch(lightness chroma hue)`
3. Test contrast ratios for accessibility (WCAG AA)
4. Avoid hardcoded colors in components

### Adding Analytics Events
1. Add tracking function to `/utils/analytics.ts`
2. Call function in component with appropriate parameters
3. Test with GTM preview mode

## Build and Deployment

### Frontend Static Build
```bash
cd frontend
pnpm run build    # Outputs to dist/client/
```

### Docker Build (Frontend + Backend)
```bash
docker build --build-arg GTM_ID=GTM-XXXXXXX -t konnektr-home .
docker run -p 8080:8080 konnektr-home
```

### Environment Variables
Backend requires (`.env` file):
- `MAILERLITE_API_TOKEN` - MailerLite API key
- `MAILERLITE_GROUP_WAITINGLIST_*` - Group IDs for each product

Frontend build-time variables:
- `PUBLIC_ENV__GTM_ID` - Google Tag Manager ID

## Testing and Quality

### Linting
```bash
cd frontend
pnpm run lint     # ESLint with React and TypeScript rules
```

### Type Checking
TypeScript is configured with strict mode. Check types:
```bash
cd frontend
pnpm exec tsc --noEmit
```

### Accessibility
- Maintain WCAG 2.1 AA compliance
- Test contrast ratios (scripts in `/frontend/scripts/`)
- Use semantic HTML and ARIA labels

### Performance
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Optimize images before adding to `/assets/`
- Use lazy loading for non-critical content
- Monitor bundle size with Vite build

## Additional Context

### Brand Identity
- Primary colors: Dark (#0B111D), Blue (#2D4263), Teal (#1E9E95)
- Typography: Plus Jakarta Sans (globally set in CSS)
- Logo: Konnektr icon + wordmark in header

### Product Portfolio
1. **Konnektr Graph** - Digital twin graph database (ADT-compatible)
2. **Konnektr Assembler** - AI-powered model builder
3. **Konnektr Flow** - Real-time data processing pipeline
4. **Konnektr Compass** - Analytics and simulation layer

### Platform Relationships
- **KtrlPlane** - Control plane for auth and resource management
- **Konnektr Home** - Marketing site (this repository)
- **Konnektr Docs** - Separate documentation site (docs.konnektr.io)

All three use the same design system (shadcn/ui + Tailwind + OKLCH).
