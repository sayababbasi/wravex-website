# Changelog

## [Phase 18 Complete] - Comprehensive Careers Redesign
- **Added**: `data/careers.ts` to type and store job posting data dynamically.
- **Redesigned**: `app/careers/page.tsx` entirely to match the new UI specification. Added Hero, Open Positions (Experienced vs Internships), Why Axiora, How We Work, and General Application sections.
- **Updated**: `app/api/careers/route.ts` to process new form fields (`phone`, `yearsExperience`, `portfolio`) and properly render them in the Resend HTML email.

## [Phase 17 Complete] - Rebranding to Axiora Software
- **Migrated**: Rebranded website from Nexora Digital Technologies/Wravex Innovation to Axiora Software.
- **Migrated**: Metadata, SEO, Open Graph tags updated to target `axiorasoftware.it.com`.
- **Migrated**: Updated typographic placeholder logo architecture for Axiora Software.

## [Phase 16 Complete] - Rebranding
- **Migrated**: Rebranded website from Wravex Innovation to Nexora Digital Technologies.
- **Migrated**: Metadata, SEO, Open Graph tags updated to target `nexoradigitaltechnologies.com`.
- **Migrated**: Implemented typographic placeholder logo architecture for Nexora.
- **Migrated**: Cleaned all UI copy and internal references.
## [Phases 9-15 Complete] - Final
- **Added**: Complete SEO `metadata` architecture across all pages using Server/Client component splitting.
- **Added**: Active state routing logic inside `Navbar.tsx` based on `usePathname`.
- **Fixed**: Removed duplicate metadata fields in `layout.tsx`.
- **Verified**: Full 17/17 Next.js static production build compilation.

## [Phases 6, 7, 8 Complete] - Current
- **Added**: `app/projects/[slug]/page.tsx` with SSG and Client component abstraction.
- **Added**: `app/about/page.tsx` with editorial philosophy section.
- **Added**: `app/contact/page.tsx` completely redesigned into a premium frontend experience. Features custom abstract visuals, simulated frontend form validation, and exact Lahore location data.

## [Phases 3, 4, 5 Complete]
- **Added**: Data architecture for `services.ts` and `projects.ts` to power all routes.
- **Added**: `app/services/page.tsx` (Services overview page).
- **Added**: `app/services/[slug]/page.tsx` with dynamic static generation (SSG) and Client component abstraction for framer-motion support.
- **Added**: `app/projects/page.tsx` (Premium Portfolio page) with dynamic CSS volumetric gradients and hover interactions.
- **Fixed**: Replaced `logo.jpg` with `logo.png` in Navbar and Footer components.
## [Phase 2 Redesign] - Current
- **Added**: `Capabilities.tsx` section to expand on service domains.
- **Added**: `Solutions.tsx` section with a structured business-value flow diagram.
- **Added**: `WhyWravex.tsx` section mimicking a high-end consultancy presentation.
- **Added**: `Projects.tsx` section with premium dark cards and subtle hover scaling.
- **Added**: `Technologies.tsx` section with a clean, low-opacity logo grid.
- **Added**: `Process.tsx` section featuring a horizontal dashed timeline.
- **Added**: `CTA.tsx` full-width dark section with a custom SVG arrow graphic.
- **Redesigned**: `Footer.tsx` rewritten into a 4-column deep navy architecture with raw SVG social icons.
- **Integrated**: `app/page.tsx` now successfully compiles all 9 components into a seamless, unified scroll experience.
## [Phase 1 Redesign] - Current
- **Refactored**: `app/page.tsx` stripped of all non-Phase 1 components to guarantee a clean slate.
- **Redesigned**: `Navbar.tsx` rewritten for a pure, lightweight enterprise aesthetic (white background, standard interactions).
- **Redesigned**: `Hero.tsx` converted to a strict editorial split layout featuring tightly tracked typography and a custom SVG/CSS layered architecture arrow visual.
- **Redesigned**: `ServicesPreview.tsx` updated to a sophisticated grid layout with numbered items, subtle borders, and refined hover states.
- **Removed**: All "AI-generated" UI patterns, including custom cursors, magnetic springs, and excessive glassmorphism.
All notable changes to this project will be documented in this file.

## [1.0.0] - Initial Setup
- Phase 01: Project Foundation & Next.js Initialization
- Creation of comprehensive documentation architecture in `/docs`.

## Phase 02 - Design System
- **Date**: 2026-08-12
- **Major changes**: Configured Tailwind CSS v4 variables, typography, and base UI components.

## Phase 03 - Global Layout & Navigation
- **Date**: 2026-08-12
- **Major changes**: Implemented Navbar, MobileMenu, Footer and integrated into `app/layout.tsx`.

## Phase 04 - Premium Hero
- **Date**: 2026-08-12
- **Major changes**: Created animated, asymmetric hero section using Framer Motion.

## Phase 05 - Homepage Core Sections
- **Date**: 2026-08-12
- **Major changes**: Built all core homepage sections and integrated them into `app/page.tsx`.

## Phase 06 - Services Experience
- **Date**: 2026-08-12
- **Major changes**: Created `/services` and dynamic route `/services/[slug]`.

## Phase 07 - Projects / Portfolio
- **Date**: 2026-08-12
- **Major changes**: Created `/projects/page.tsx` with a placeholder structure.

## Phase 08 - About Experience
- **Date**: 2026-08-12
- **Major changes**: Created `/about/page.tsx`.

## Phase 09 - Contact Experience
- **Date**: 2026-08-12
- **Major changes**: Created `/contact/page.tsx` with a split layout and client-side form logic.

## Phase 10 - Global Interactions & Animation
- **Date**: 2026-08-12
- **Major changes**: Implemented `FadeIn.tsx` component and wrapped UI elements for subtle entrance animations.

## Phase 11 - Responsive Refinement
- **Date**: 2026-08-12
- **Major changes**: Verified and finalized responsive classes across all pages and components.

## Phase 12 - SEO & Accessibility
- **Date**: 2026-08-12
- **Major changes**: Added Next.js `Metadata` exports to all static and dynamic pages.

## Phase 13 - Performance Optimization
- **Date**: 2026-08-12
- **Major changes**: Verified 100% static generation (SSG) for all routes via `next build`.

## Phase 14 - QA & Visual Polish
- **Date**: 2026-08-12
- **Major changes**: 
  - Ran global ESLint check (`npm run lint`).
  - Fixed unescaped quotes, redundant `useEffect` hooks, and empty interfaces.
  - Verified code quality and component structure.

## Phase 15 - Final Production Preparation
- **Date**: 2026-08-12
- **Major changes**: 
  - Performed final audit.
  - Finalized `PROJECT_STATE.md` and `CHANGELOG.md`.
  - Project development complete according to `/docs`.
