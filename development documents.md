WRAVEX INNOVATION — PHASE-BY-PHASE DEVELOPMENT DOCUMENTATION
Premium Corporate Website — Static Frontend v1.0

Technology: Next.js + TypeScript + Tailwind CSS
Architecture: Static frontend / backend-ready
Development Agent: Antigravity
Current Scope: Frontend only
Backend: Not implemented yet
Design Goal: Premium, sophisticated, human-designed corporate technology website
Brand: Wravex Innovation
Primary Brand Direction: Navy / Royal Blue / Cyan / White

0. MASTER DEVELOPMENT INSTRUCTION

This document is the source of truth for the entire Wravex Innovation website project.

Build the website as if it were designed and developed by a senior creative director and web designer with 20+ years of experience creating premium corporate technology websites.

The final website must NOT look AI-generated, template-generated, generic, or like a typical software-development agency website.

It should feel intentionally designed, visually balanced, editorial, premium, sophisticated and commercially credible.

Do not attempt to complete the entire project in one phase.

Work strictly phase-by-phase.

Before starting a phase:

Inspect the existing project.
Read all /docs files.
Read PROJECT_STATE.md.
Inspect what previous phases already implemented.
Preserve all completed work.
Never rebuild working sections unnecessarily.
Never remove functionality to simplify implementation.
Implement only the current phase.
Test the phase.
Update PROJECT_STATE.md.
Update the relevant documentation.
Only then consider the phase complete.

Never lose previous progress.

If something from a previous phase needs modification, improve it without destroying its existing functionality.

1. PROJECT VISION

Wravex Innovation is a software development company offering:

AI Solutions
Web Development
Mobile Development
Automation
Custom Business Software

The existing brand uses a recognizable blue/cyan upward-motion logo.

The website must transform that existing identity into a premium digital brand experience.

The design should communicate:

Technology + Intelligence + Growth + Reliability

without becoming overly futuristic.

2. DESIGN PRINCIPLE

The most important design rule:

Do not design this like an AI-generated website.

Avoid the common AI-generated patterns:

Huge centered gradient text
Excessive glassmorphism
Random glowing blobs
Purple/blue neon everywhere
Generic 3D robot
Excessive rounded cards
Every section having a different gradient
Huge meaningless statistics
Fake testimonials
Generic stock photos
Excessive animations
"Revolutionary / cutting-edge / next-generation" copy
Template-like layouts
Repeated 3-column cards everywhere

Instead use:

Strong typography
Intentional composition
Sophisticated spacing
Editorial layouts
Asymmetric grids
High-quality visual hierarchy
Controlled color
Real project presentation
Refined micro-interactions
Strong negative space
Carefully designed graphics
Subtle transitions
Consistent visual language
3. DESIGN DIRECTION
Primary aesthetic

Premium Technology Editorial

A combination of:

Premium software company
Modern consulting firm
Product studio
Technology brand
Editorial web design

Think:

sophisticated technology company rather than "AI agency template."

4. BRAND COLORS

Use the supplied logo as the primary visual reference.

Recommended digital palette:

WRAVEX NAVY
#092A5B

DEEP NAVY
#061A38

ROYAL BLUE
#1264C8

BRIGHT BLUE
#1789E8

CYAN
#27B9E8

LIGHT BLUE
#E9F7FD

OFF WHITE
#F8FAFC

WHITE
#FFFFFF

PRIMARY TEXT
#101828

SECONDARY TEXT
#667085

BORDER
#E4E7EC

Do not force every color into every component.

The site should remain mostly:

White + Navy + Blue

with cyan used as an accent.

5. TYPOGRAPHY

Use one sophisticated primary typeface.

Preferred:

Manrope

or:

Inter

or:

Plus Jakarta Sans

Do not use multiple unrelated font families.

Recommended:

Hero:
64–82px desktop

Section:
42–56px

Subheading:
20–24px

Body:
16–18px

Navigation:
14–15px

Small labels:
12–13px

Typography must be responsive.

6. TECHNOLOGY REQUIREMENTS

Use:

Next.js
TypeScript
Tailwind CSS
React
Lucide React
Framer Motion

Use the current stable versions available in the project environment.

Do not introduce unnecessary libraries.

7. BACKEND SCOPE

There is NO backend in this version.

However, the frontend must be structured so backend integration can be added later.

For example:

Contact Form
      ↓
Frontend validation
      ↓
Temporary success state
      ↓
Future API
      ↓
Email / CRM / Database

For now:

No database
No authentication
No server API
No real email sending
No CMS
No admin dashboard

But the UI must behave as though these features are ready.

8. STATIC FUNCTIONALITY REQUIREMENT

"Static website" does NOT mean dead HTML.

All frontend interactions must work.

Implement:

Navigation
Mobile navigation
Dropdowns
Hover states
Buttons
Page transitions
Scroll behavior
Smooth scrolling
Contact form validation
Form success state
Form error state
Project filtering
Service interactions
FAQ accordion
Modal where appropriate
Animated counters only where real data exists
Copy-to-clipboard where appropriate
Back-to-top
Active navigation state
Loading states
404 page
Responsive behavior

These are frontend-only simulations for now.

9. PROJECT MEMORY / PROGRESS SYSTEM

Create:

/docs/PROJECT_STATE.md

This file is mandatory.

Structure:

# Wravex Innovation Project State

## Current Phase
Phase 01

## Status
In Progress

## Completed
- ...

## Current Work
- ...

## Pending
- ...

## Important Decisions
- ...

## Files Created
- ...

## Files Modified
- ...

## Known Issues
- ...

## Next Phase
Phase 02

After every phase, update this file.

This prevents Antigravity from losing progress.

10. DEVELOPMENT PHASES

The project should be completed through these phases:

PHASE 01 — Project Audit & Foundation
PHASE 02 — Design System
PHASE 03 — Global Layout & Navigation
PHASE 04 — Premium Hero
PHASE 05 — Homepage Core Sections
PHASE 06 — Services Experience
PHASE 07 — Projects / Portfolio
PHASE 08 — About Experience
PHASE 09 — Contact Experience
PHASE 10 — Global Interactions & Animation
PHASE 11 — Responsive Refinement
PHASE 12 — SEO & Accessibility
PHASE 13 — Performance Optimization
PHASE 14 — QA & Visual Polish
PHASE 15 — Final Production Preparation
PHASE 01
PROJECT AUDIT & FOUNDATION
Objective

Establish a clean, stable Next.js foundation without prematurely designing the website.

Tasks
Inspect existing repository.
Identify current Next.js version.
Identify Tailwind configuration.
Identify existing components.
Identify existing assets.
Identify logo files.
Identify existing routes.
Identify existing dependencies.
Remove unnecessary demo/template content.
Do not delete useful existing infrastructure.
Create documentation
/docs/
PROJECT_REQUIREMENTS.md
PROJECT_STATE.md
DESIGN_DIRECTION.md
TECHNICAL_ARCHITECTURE.md
Establish architecture
app/
components/
data/
lib/
public/
types/
docs/

Use App Router.

Requirement

Do not build the visual design yet.

First make sure the project is clean and stable.

Completion criteria
✓ Project runs
✓ npm run dev works
✓ Production build works
✓ TypeScript works
✓ Tailwind works
✓ No unnecessary demo content
✓ Existing useful files preserved
✓ Documentation created
✓ PROJECT_STATE.md updated
PHASE 02
DESIGN SYSTEM
Objective

Create the visual language before building individual pages.

Create:

components/ui/

Components:

Button
Container
Section
SectionHeading
Badge
Card
Icon
Divider
Create design tokens

Define:

Colors
Typography
Spacing
Radius
Shadows
Transitions

Do not scatter values throughout the project.

Buttons

Create:

Primary
Secondary
Outline
Ghost

Example visual hierarchy:

Primary

Blue background + white text.

Secondary

White + navy border.

Ghost

Transparent + navy text.

Cards

Cards should be sophisticated.

Avoid:

border-radius: 50px

for everything.

Use controlled:

16px
20px
24px
Design philosophy

Every component must have:

Proper spacing
Typography hierarchy
Hover behavior
Focus state
Mobile behavior
Completion criteria
✓ Design tokens established
✓ Buttons reusable
✓ Cards reusable
✓ Typography system established
✓ Spacing system established
✓ Colors established
✓ No inconsistent styling
✓ Documentation updated
PHASE 03
GLOBAL LAYOUT & NAVIGATION
Objective

Build the global website shell.

Create:

components/layout/
Navbar.tsx
MobileMenu.tsx
Footer.tsx
Navbar

Desktop:

Logo

Home
Services
Solutions
Projects
About

                Let's Talk

The navbar should feel elegant.

Do not use a giant pill-shaped floating navbar unless the overall composition genuinely supports it.

Navbar behavior

At top:

Clean
Transparent/white depending on hero

After scrolling:

Fixed
Subtle background
Backdrop blur
Thin border
Slight shadow
Mobile

Mobile header:

Logo                      Menu

Menu should open smoothly.

Navigation:

Home
Services
Solutions
Projects
About
Contact

Start a Project
Footer

Build a premium multi-column footer.

Include:

Brand
Navigation
Services
Contact
Social links
Legal

Only use real client information.

Do not invent phone numbers, email addresses or social accounts.

Completion criteria
✓ Navbar
✓ Mobile menu
✓ Footer
✓ Scroll behavior
✓ Responsive
✓ Keyboard accessible
✓ All links work
✓ No broken routes
PHASE 04
PREMIUM HERO
Objective

Create the defining visual experience of Wravex.

This is the most important design phase.

Hero message

Recommended:

We Build Smart Software for a Faster World.

Supporting text:

Wravex Innovation builds intelligent digital solutions, modern applications and automation systems designed around real business needs.

CTA:

Start a Project

Secondary:

Explore Services

Hero composition

Do NOT simply create:

text left
image right

Instead create an editorial composition.

Example:

------------------------------------------------

Small brand statement

WE BUILD SMART
SOFTWARE FOR A
FASTER WORLD.

Supporting copy

[Start a Project] [Explore Services]


                      abstract Wravex
                      technology visual

------------------------------------------------

The visual can overlap the grid slightly.

Hero graphic

Create or use a custom visual based on the Wravex logo.

Concept:

Upward motion
Blue ribbons
Cyan highlights
Geometric forms
Soft light
Depth
Elegant composition

No text inside the image.

No generic AI robot.

No random glowing orb.

Hero motion

Use Framer Motion.

Animation should be:

Slow
Elegant
Controlled

Examples:

Graphic:
slow floating movement

Accent:
subtle opacity/position change

Text:
small entrance animation

Avoid exaggerated animation.

Completion criteria
✓ Strong visual hierarchy
✓ Premium hero
✓ Logo-consistent graphics
✓ CTA works
✓ Mobile hero redesigned
✓ No visual overflow
✓ Animation smooth
✓ Reduced motion supported
PHASE 05
HOMEPAGE CORE
Objective

Build the remainder of the homepage.

Homepage structure:

Navbar
Hero
Brand Statement
Services
Solutions
Why Wravex
Featured Projects
Technology
Process
CTA
Footer
SECTION 01 — BRAND STATEMENT

Heading:

Technology Built Around Your Business.

Short supporting paragraph.

Use an editorial layout.

Do not create another generic centered section.

SECTION 02 — SERVICES

Heading:

What We Build

Services:

AI Solutions
Web Development
Mobile Development
Automation
Business Software

Use different visual treatments for cards where appropriate.

Not every card needs to look identical.

SECTION 03 — SOLUTIONS

Heading:

Solutions That Solve Real Problems

Present:

Startups
Growing Businesses
Established Companies

Focus on business outcomes rather than technology buzzwords.

SECTION 04 — WHY WRAVEX

Use an editorial grid.

Example:

WHY WRAVEX

Large statement          01 Business First
                         02 Modern Technology

                         03 Scalable Architecture
                         04 Long-Term Partnership

This should feel like a premium agency presentation.

SECTION 05 — PROJECTS

Display real projects only.

If there are no projects yet:

Do not create fake case studies.

Instead create a tasteful "selected work" placeholder structure or hide the section until actual projects are available.

SECTION 06 — TECHNOLOGY

Display actual technologies used by Wravex.

Use restrained logos.

Do not create a giant wall of 40 technology icons.

SECTION 07 — PROCESS
01 Discover
02 Plan
03 Design
04 Develop
05 Launch

Use a visual timeline.

SECTION 08 — CTA

Heading:

Have an Idea? Let's Build Something Smart.

CTA:

Start a Project

Completion criteria
✓ Homepage complete
✓ All sections responsive
✓ No fake data
✓ Consistent visual language
✓ Premium spacing
✓ Strong hierarchy
✓ No repetitive layouts
PHASE 06
SERVICES EXPERIENCE
Objective

Make Services a major part of the website rather than just five cards.

Services page

URL:

/services

Hero:

Technology Services Built Around Your Goals.

Then provide detailed service presentation.

Service detail pages

Create:

/services/ai-solutions
/services/web-development
/services/mobile-development
/services/automation
/services/business-software
AI page

Sections:

Hero
Capabilities
Use Cases
How We Build
Technology
Related Work
CTA

Potential capabilities:

AI Agents
Generative AI
RAG
Machine Learning
Chatbots
AI Automation

Only list technologies/capabilities that are genuinely offered.

Web page

Include:

Corporate websites
SaaS
Web applications
Dashboards
E-commerce
API integrations
Mobile page

Include:

iOS
Android
Cross-platform
Mobile APIs
Notifications
Automation page

Include:

Workflow automation
API integrations
Business process automation
AI automation
Data workflows
Business software

Include:

ERP
CRM
LMS
Inventory
Management systems
Interaction

Service cards should have:

Hover
Arrow movement
Accent movement
Visual transition

Clicking should navigate to the full service page.

Completion criteria
✓ Services index
✓ 5 service pages
✓ Responsive
✓ Navigation
✓ Hover states
✓ SEO structure
✓ No backend required
PHASE 07
PROJECTS / PORTFOLIO
Objective

Create a premium project showcase.

Projects page

URL:

/projects

Hero:

Ideas We've Turned Into Software.

Project filtering

Frontend-only filtering:

All
AI
Web
Mobile
Automation
Business Software

Filtering should happen instantly without backend.

Project card

Each card:

Image
Category
Project Name
Short Description
Technology
View Project
Project detail

URL:

/projects/[slug]

Structure:

Hero
Overview
Challenge
Solution
Features
Technology
Screenshots
Results
Next Project
Important

Never fabricate:

Client names
Revenue
User numbers
Performance metrics
Results

Use real information supplied by the client.

Completion criteria
✓ Projects page
✓ Filters
✓ Project cards
✓ Project detail routing
✓ Responsive
✓ Animations
✓ No fake claims
PHASE 08
ABOUT EXPERIENCE
Objective

Create an About page that feels like a real technology company's story.

URL:

/about
Structure
Hero
Company Story
Mission
Vision
Values
Approach
Technology Philosophy
CTA
Visual direction

Do not create a generic:

About Us
We are passionate...

section.

Use:

Large typography
Timeline if real history exists
Editorial imagery
Brand graphics
Strong whitespace
Values

Potential values:

Innovation
Integrity
Excellence
Collaboration
Customer Success

Use only if approved by the client.

Completion criteria
✓ About page
✓ Professional storytelling
✓ No fabricated company history
✓ Responsive
✓ Premium visual treatment
PHASE 09
CONTACT EXPERIENCE
Objective

Create a high-conversion contact experience.

URL:

/contact
Hero

Let's Build Something Smart.

Supporting copy:

Tell us what you're building, and let's explore how technology can help.

Form

Fields:

Name
Email
Company
Phone
Service
Budget
Project Details
Frontend validation

Use Zod or equivalent.

Validate:

Required fields
Email
Length
Invalid input
Submit behavior

Since there is no backend:

User submits
↓
Validate
↓
Simulate short request
↓
Show success state

Example:

Thanks for reaching out. Your project request has been received.

Clearly structure the code so the simulated submission can later be replaced with:

POST /api/contact
Completion criteria
✓ Form
✓ Validation
✓ Loading
✓ Success
✓ Error
✓ Mobile
✓ Accessible
✓ Backend-ready
PHASE 10
GLOBAL INTERACTIONS & ANIMATION
Objective

Add polish without making the website feel animated for the sake of animation.

Global animation rules

Animation should be:

subtle + intentional + fast enough

Implement
Scroll reveal

Sections gently appear.

Hover

Cards move approximately:

4px

not 20px.

Buttons

Small movement.

Images

Subtle scale:

1 → 1.02
Navigation

Smooth state transitions.

Page transitions

Use subtle opacity/position transitions.

Do not create long theatrical transitions.

Cursor effects

Avoid custom cursors unless there is a strong design reason.

A standard cursor usually feels more professional.

Reduced motion

Always support:

prefers-reduced-motion
Completion criteria
✓ Motion system
✓ Hover states
✓ Scroll animations
✓ Reduced motion
✓ No performance problems
✓ No distracting effects
PHASE 11
RESPONSIVE REFINEMENT
Objective

Do a dedicated mobile/tablet pass.

Do not assume desktop CSS automatically produces good mobile design.

Breakpoints

Test:

320px
375px
390px
430px
768px
1024px
1280px
1440px
1920px
Mobile hero

Desktop hero should NOT simply shrink.

Recompose:

Heading
Copy
Buttons
Graphic

with appropriate spacing.

Mobile cards

Avoid extremely tall cards.

Make content scannable.

Mobile navigation

Test:

Opening
Closing
Outside click
Escape
Navigation
Scroll locking
Mobile form

All inputs:

width: 100%

Buttons should be easy to tap.

Completion criteria
✓ 320px
✓ 375px
✓ 390px
✓ 430px
✓ Tablet
✓ Desktop
✓ No horizontal scrolling
✓ No overlapping content
✓ No broken typography
PHASE 12
SEO + ACCESSIBILITY
SEO

Implement:

Metadata
OpenGraph
Sitemap
Robots
Canonical
Structured data
Page titles

Example:

Wravex Innovation | Smart Software for a Faster World

AI Solutions | Wravex Innovation

Web Development | Wravex Innovation

Mobile Development | Wravex Innovation

About Wravex Innovation

Contact Wravex Innovation
Accessibility

Target:

WCAG 2.2 AA

Implement:

Keyboard navigation
Focus states
Semantic HTML
Alt text
Form labels
Accessible menu
Contrast
Reduced motion
Completion criteria
✓ SEO
✓ Metadata
✓ Sitemap
✓ Robots
✓ Accessibility
✓ Keyboard navigation
✓ Forms accessible
PHASE 13
PERFORMANCE
Objective

Make the site feel extremely fast.

Optimize

Images:

next/image
WebP
AVIF

Fonts:

Optimize loading
Avoid unnecessary weights

JavaScript:

Server Components where possible
Client Components only where necessary
Avoid
Huge video backgrounds
Massive unoptimized images
Unnecessary libraries
Heavy animation libraries beyond requirements
Large JavaScript bundles
Target
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+

Targets are goals, not excuses to damage visual quality.

PHASE 14
QA + VISUAL POLISH

This is where the site should receive the 20+ years senior designer pass.

Do not simply run tests and declare success.

Perform a visual review of every page.

Visual review checklist

Ask:

Typography
Does the hierarchy feel intentional?
Are headings too large?
Are paragraphs too wide?
Are line breaks attractive?
Spacing
Is there enough breathing room?
Are sections too repetitive?
Does the page rhythm feel natural?
Color
Is blue being overused?
Is cyan being overused?
Does the website still feel premium?
Layout
Does every section look like a card grid?
Are there enough editorial/asymmetric compositions?
Does the website feel custom-designed?
Animation
Is anything distracting?
Are transitions too slow?
Does motion feel expensive or cheap?
Senior designer rule

Before finishing:

Remove 10–20% of anything unnecessary.

Premium design often comes from restraint, not adding more effects.

PHASE 15
FINAL PRODUCTION PREPARATION
Final build

Run:

npm run build

Resolve every:

TypeScript error
ESLint error
Build error
Routing error
Final functional testing

Test:

Navbar
Mobile menu
All links
Buttons
Services
Projects
Filters
Contact form
FAQ
404
Back navigation
External links
Final visual testing

Test:

Chrome
Edge
Firefox
Safari
iOS
Android
FINAL PROJECT STRUCTURE

The final architecture should approximately look like:

wravex/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── services/
│   │   ├── page.tsx
│   │   ├── ai-solutions/
│   │   ├── web-development/
│   │   ├── mobile-development/
│   │   ├── automation/
│   │   └── business-software/
│   │
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │
│   ├── contact/
│   ├── not-found.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── services/
│   ├── projects/
│   ├── contact/
│   └── ui/
│
├── data/
│   ├── services.ts
│   ├── projects.ts
│   └── navigation.ts
│
├── lib/
│   ├── utils.ts
│   └── validation.ts
│
├── public/
│   ├── logo/
│   ├── images/
│   ├── projects/
│   └── icons/
│
├── types/
│
└── docs/
    ├── PROJECT_REQUIREMENTS.md
    ├── PROJECT_STATE.md
    ├── DESIGN_DIRECTION.md
    ├── DESIGN_SYSTEM.md
    ├── TECHNICAL_ARCHITECTURE.md
    ├── COMPONENTS.md
    ├── PAGES.md
    ├── CONTENT.md
    ├── ANIMATIONS.md
    ├── RESPONSIVE.md
    ├── SEO.md
    ├── ACCESSIBILITY.md
    ├── PERFORMANCE.md
    ├── TESTING.md
    └── CHANGELOG.md
MASTER "DO NOT" LIST FOR ANTIGRAVITY

These rules should remain active for the entire project.

NEVER:

❌ Replace the Wravex logo
❌ Change the brand into purple/black AI styling
❌ Make the entire website dark
❌ Use generic AI robots
❌ Use random stock images
❌ Generate fake statistics
❌ Generate fake testimonials
❌ Invent clients
❌ Invent awards
❌ Invent company history
❌ Invent social accounts
❌ Put important text inside graphics
❌ Make every section a 3-column card grid
❌ Overuse rounded containers
❌ Overuse gradients
❌ Overuse glassmorphism
❌ Overuse glow effects
❌ Overuse animations
❌ Use giant meaningless headings everywhere
❌ Add unnecessary libraries
❌ Add a backend during this phase
❌ Delete completed work
❌ Rewrite working components without reason
❌ Break existing functionality while redesigning
❌ Stop after merely making the page "look good"

MASTER "DO" LIST
ALWAYS:

✅ Preserve previous progress
✅ Read PROJECT_STATE.md before working
✅ Update state after working
✅ Build reusable components
✅ Keep TypeScript clean
✅ Keep frontend backend-ready
✅ Design mobile intentionally
✅ Use semantic HTML
✅ Maintain accessibility
✅ Optimize performance
✅ Use real client information only
✅ Keep visual consistency
✅ Create intentional layouts
✅ Use subtle premium motion
✅ Review the page visually as a senior designer
✅ Fix spacing and typography before adding effects
✅ Test every interaction
✅ Test production build

HOW ANTIGRAVITY MUST WORK

Every session should follow this exact cycle:

READ
 ↓
Inspect existing project
 ↓
Read /docs
 ↓
Read PROJECT_STATE.md
 ↓
Understand completed work
 ↓
PLAN
 ↓
Define current phase tasks
 ↓
BUILD
 ↓
Implement only current phase
 ↓
TEST
 ↓
Run build
 ↓
Check responsive
 ↓
Check console
 ↓
REVIEW
 ↓
Perform visual quality review
 ↓
DOCUMENT
 ↓
Update PROJECT_STATE.md
 ↓
Update CHANGELOG.md
 ↓
STOP

Do not silently jump from Phase 03 to Phase 09.

If the current phase is complete, stop and record it.

PHASE COMPLETION FORMAT

At the end of every phase, Antigravity should update PROJECT_STATE.md using this structure:

# Wravex Innovation — Project State

## Current Phase
Phase 04 — Premium Hero

## Status
Completed

## Completed in This Phase

- Implemented premium hero
- Added responsive hero layout
- Added CTA interactions
- Added Wravex-inspired visual
- Added subtle entrance animations
- Added reduced-motion support

## Files Created

- components/hero/Hero.tsx
- components/hero/HeroGraphic.tsx

## Files Modified

- app/page.tsx
- app/globals.css

## Testing

- Desktop: Passed
- Tablet: Passed
- Mobile: Passed
- Production build: Passed

## Known Issues

- None

## Next Phase

Phase 05 — Homepage Core Sections

This is important because it gives the next Antigravity session a persistent source of truth.

FINAL DESIGN STANDARD

The finished website should make someone think:

"This company takes software seriously."

Not:

"This looks like an AI-generated template."

The website should feel like it was created by a senior branding team, UX designer, visual designer and frontend engineer working together.

The key formula is:

Strong brand identity

excellent typography
editorial composition
restrained blue/cyan palette
custom graphics
subtle motion
real content
excellent responsive behavior
clean engineering

= Premium Wravex Innovation website.

First instruction to give Antigravity

You can start the project with this exact instruction:

Read the complete Wravex Innovation development documentation before modifying anything. Do not start by generating the entire website. Begin with PHASE 01 only. Inspect the existing repository, preserve useful existing work, establish the project foundation and documentation, and create/update /docs/PROJECT_STATE.md. Do not proceed to Phase 02 until Phase 01 is completed, tested, documented and the production build passes. From this point forward, work strictly phase-by-phase and never lose or overwrite completed progress.