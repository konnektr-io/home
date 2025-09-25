# Konnektr Home - GitHub Copilot Instructions

## 🎯 Project Overview

Konnektr Home is the **public-facing marketing and information website** for the Konnektr Platform. It serves as the primary entry point for potential users, providing product information, pricing, interactive demos, and seamless transitions to the platform's applications.

**Technology Stack:**

- Frontend: React + TypeScript + Vite + shadcn/ui + Tailwind CSS
- Deployment: Static hosting (Nginx/CDN)
- Integration: Links to KtrlPlane for authentication and resource creation

## 📋 Core Instructions for GitHub Copilot

### 1. Maintain These Instructions

**CRITICAL:** Always keep this file and `.github/DEVELOPMENT_PLAN.md` up to date:

- When user provides new instructions ("don't do this", "always do that"), immediately add them to this file
- When significant features are added or architectural decisions are made, update both files
- When user mentions "in the future we might add X", add it to the development plan roadmap but don't implement
- When user provides documentation links, summarize key points and add relevant instructions here

### 2. Scope Adherence

Konnektr Home is the **Marketing Website** only. Always refer to `.github/PLATFORM_SCOPE.md` for boundaries:

- ✅ **In Scope:** Product information, pricing pages, blog content, documentation links, interactive demos, marketing content, lead generation forms
- ❌ **Out of Scope:** User authentication, user-specific data, resource management functionality, billing systems, user dashboards
- All transitions to platform functionality must redirect to appropriate Konnektr applications
- No direct knowledge of other product's databases or internal business logic

**Platform Integration:**

- Konnektr Home → KtrlPlane (Control Plane for authentication and resource management)
- Konnektr Home → Product Applications (via KtrlPlane routing)
- Support URL patterns like: `/projects/{projectId}/resources/create?resourceType={type}&tier={tier}`

### 3. Architecture Principles

#### Frontend (React + TypeScript)

- Follow modern React best practices with functional components and hooks
- Use TypeScript strictly - no `any` types
- Component-based architecture with clear separation of concerns
- Feature-based folder structure in `/src`
- Responsive design with mobile-first approach

#### UI/UX Guidelines

- Use shadcn/ui components consistently for design system alignment
- Implement proper loading states and smooth transitions
- Follow accessibility best practices (WCAG 2.1 AA)
- Optimize for performance (lazy loading, code splitting, image optimization)
- Maintain visual consistency with Konnektr Design System

#### Content Management

- Structured approach to content organization
- SEO optimization for all pages
- Clear call-to-action placement
- Interactive demos and product showcases
- Lead capture and conversion optimization

### 4. Development Workflow

#### Always Start With:

1. Check DEVELOPMENT_PLAN.md for current priorities
2. Understand the marketing scope and user journey
3. Plan before implementing (use manage_todo_list for complex tasks)
4. Consider SEO and performance implications

#### Code Quality Standards:

- TypeScript: Use strict TypeScript, follow React best practices
- Package Manager: **ALWAYS use PNPM** - never use npm or yarn commands
- CSS & Styling: Use OKLCH color space, semantic CSS variables, avoid hardcoded colors
- Performance: Optimize bundle size, implement lazy loading
- SEO: Proper meta tags, structured data, semantic HTML
- Accessibility: ARIA labels, keyboard navigation, screen reader support
- Testing: Component testing for critical user flows

#### Content Development:

- Focus on clear value propositions
- Technical accuracy in product descriptions
- Consistent brand voice and messaging
- Regular content updates and freshness

### 5. CSS & Styling Guidelines

**CRITICAL:** Follow consistent styling approach across all Konnektr solutions:

- **Color System:** Use OKLCH color space exclusively for better perceptual uniformity
- **CSS Variables:** Define colors in CSS custom properties, never hardcode hex/rgb values
- **Brand Colors:** Use predefined brand color variables (--brand-dark, --brand-blue, --brand-teal, etc.)
- **Typography:** Plus Jakarta Sans font is set globally in CSS, avoid inline font specifications
- **Semantic Classes:** Use utility classes (.bg-brand-teal, .text-brand-blue) instead of hardcoded colors
- **Reusability:** CSS file should be portable across all Konnektr solutions
- **Consistency:** Maintain color consistency between light/dark modes using CSS variables

Available Brand Colors:

- `--brand-dark`: Main dark background (#0B111D equivalent)
- `--brand-blue`: Primary blue (#2D4263 equivalent)
- `--brand-teal`: Secondary teal (#1E9E95 equivalent)
- `--brand-gray`: Neutral gray for text
- `--brand-light`: Light text/backgrounds

### 6. Marketing & Lead Generation

- Implement proper analytics tracking
- Lead capture forms with validation
- A/B testing capabilities for key pages
- Conversion funnel optimization
- Integration with marketing automation tools

### 7. Package Management

**CRITICAL:** Always use PNPM for all package management operations:

- ✅ Use: `pnpm install`, `pnpm add`, `pnpm remove`, `pnpm dlx`
- ❌ Never use: `npm install`, `yarn add`, `npx`, etc.
- Project uses `pnpm-lock.yaml` for dependency locking
- Maintain consistency with existing lock file

### 8. Platform Integration Strategy

#### Authentication Flow

- Homepage → "Get Started" → KtrlPlane authentication
- Support deep linking to specific product creation flows
- Maintain state during authentication transitions
- Handle authentication redirects gracefully

#### Product Discovery

- Clear product categorization and descriptions
- Interactive demos and previews
- Pricing information and tier comparisons
- Seamless transition to resource creation

#### URL Integration

- Support tier pre-selection via URL parameters
- Integration with KtrlPlane URL patterns
- SEO-friendly URLs for all content pages

### 9. Performance & SEO Requirements

- Fast loading times (< 3s LCP)
- Optimized images and assets
- Proper meta tags and structured data
- Mobile-responsive design
- Core Web Vitals optimization
- Search engine optimization

### 10. Content Strategy

#### Key Pages Structure

- Homepage: Hero, value proposition, product overview
- Products: Detailed product information (Graph, Assembler, Flow, Compass)
- Pricing: Transparent pricing for different tiers
- Blog: Technical content and product updates
- Documentation: Getting started guides and API references
- About: Company information and team

#### Interactive Elements

- Product demos and previews
- Interactive pricing calculators
- Video content and tutorials
- Customer testimonials and case studies

### 11. Analytics & Conversion Tracking

- Implement proper event tracking
- Conversion funnel analysis
- User behavior analytics
- A/B testing infrastructure
- Performance monitoring

### 12. Security & Privacy

- Privacy policy and cookie consent
- Secure form handling
- No sensitive data storage
- GDPR compliance considerations
- Content Security Policy (CSP)

### 13. Deployment & Infrastructure

- Static site generation for optimal performance
- CDN integration for global delivery
- Automated deployment pipelines
- Environment-specific configurations
- Health checks and monitoring

## 🚫 What NOT to Do

- Do not implement user authentication (redirect to KtrlPlane)
- Do not store user-specific data or sessions
- Do not implement business logic of other Konnektr products
- Do not create separate user management or billing systems
- Do not hardcode product pricing (prepare for dynamic pricing)
- Do not compromise on performance for marketing features
- Do not ignore accessibility requirements
- Do not create separate design systems (use shared Konnektr Design System)

## 🎯 Marketing-Specific Guidelines

### Brand Voice & Messaging

- Technical but approachable tone
- Focus on developer experience and ease of use
- Emphasize time-to-value and competitive advantages
- Clear differentiation from competitors
- Evidence-based claims with metrics

### Conversion Optimization

- Clear and prominent call-to-action buttons
- Progressive disclosure of information
- Social proof and testimonials
- Free trial or demo offerings
- Minimal friction in sign-up process

### Content Guidelines

- Regular blog posts on technical topics
- Product update announcements
- Case studies and success stories
- Integration guides and tutorials
- Industry thought leadership

## 📝 Change Log

When updating these instructions, add entries here:

- **2025-09-25**: Initial comprehensive instructions created for Konnektr Home
- **2025-09-25**: Added PNPM requirement - always use PNPM for package management operations
- **2025-09-25**: Added comprehensive CSS & styling guidelines using OKLCH color space and semantic variables

---

**Remember:** This file is the source of truth for development guidelines. Keep it updated with every significant instruction or architectural decision.
