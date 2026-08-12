WRAVEX INNOVATION
Complete Website Development Documentation

Project: Wravex Innovation Corporate Website
Company: Wravex Innovation
Industry: Software Development / AI / Automation / Digital Solutions
Website Type: Corporate technology company website
Design Direction: Premium, modern, clean, innovative, technology-focused
Primary Brand Colors: Navy Blue + Royal Blue + Cyan + White
Status: Development Specification v1.0

1. Project Overview

Wravex Innovation is a software development company providing technology solutions for businesses.

The website must establish Wravex as a professional, modern and trustworthy technology company, rather than looking like a generic freelance agency.

The existing Instagram branding establishes the basic visual identity:

Wravex Innovation logo
Blue/cyan color palette
Upward-growth visual
Technology-oriented identity
"Smart software for a faster world."
AI solutions
Web & mobile development
Automation
Business software

The website should preserve this identity while upgrading it into a premium corporate digital experience.

Core brand message

Smart software for a faster world.

Primary positioning

We design and build intelligent digital solutions that help businesses work smarter, automate faster, and grow confidently.

2. Primary Website Goals

The website should accomplish five major objectives.

2.1 Establish credibility

Visitors should immediately understand that Wravex is a serious software development company.

2.2 Explain services

Visitors must quickly understand what Wravex actually provides.

2.3 Generate leads

The website should encourage potential clients to:

Request a project
Schedule a consultation
Contact Wravex
Discuss an idea
2.4 Showcase technical capability

The website should communicate expertise in:

Artificial Intelligence
Web development
Mobile development
Automation
Business software
SaaS
Custom software
2.5 Build a scalable company identity

The design should be flexible enough to accommodate future:

Products
Case studies
Services
Team members
Blog posts
Industries
Careers
3. Target Audience
Primary audience
Business owners

Companies looking for custom software solutions.

Startups

Founders who need:

MVP development
SaaS platforms
AI integration
Web applications
Mobile applications
Established businesses

Businesses looking for:

Automation
ERP/CRM systems
Internal software
AI solutions
Digital transformation
Technology decision makers

Examples:

CTOs
CEOs
Product managers
Operations managers
IT managers
4. Brand Personality

The website should communicate:

Innovative
Professional
Intelligent
Reliable
Fast
Business-focused
Modern
Confident

Avoid making the company appear:

Cheap
Generic
Overly flashy
Cryptocurrency-oriented
Cyberpunk
Gaming-oriented
Like a freelancer portfolio
5. Design Philosophy

The website should follow this principle:

Minimal interface + strong typography + premium graphics + subtle motion.

Do not fill every section with gradients and animations.

The visual hierarchy should be created through:

Typography
Spacing
Contrast
Grid structure
White space
Carefully designed graphics
Subtle animation
6. Visual Identity
6.1 Primary colors

Recommended starting palette:

Purpose	Color
Primary Navy	#0B2A5B
Deep Navy	#071A3A
Royal Blue	#1261C9
Cyan	#20B8E8
Light Cyan	#72D9F5
White	#FFFFFF
Background	#F7F9FC
Dark Text	#101828
Secondary Text	#667085
Border	#E4E7EC

These are website implementation colors, not claims about exact logo colors.

The logo itself should be used as the source of truth for brand color matching.

7. Color Usage Rules
Navy

Use for:

Headings
Navigation
Important UI elements
Footer
Dark sections
Blue

Use for:

Buttons
Links
Icons
Highlight elements
Cyan

Use sparingly for:

Gradient accents
Hover states
Decorative graphics
Glow effects
Technology visuals
White

Use extensively.

The website should have plenty of breathing room.

8. Typography

Recommended typography:

Primary

Inter

Alternative:

Manrope
Plus Jakarta Sans
Geist
Typography hierarchy
Hero heading:
64–80px desktop
42–52px tablet
36–42px mobile

Section heading:
42–52px desktop
32–40px mobile

Card heading:
20–24px

Body:
16–18px

Small text:
13–14px

Use appropriate font weights:

400 — regular
500 — medium
600 — semibold
700 — bold

Avoid excessive use of 800/900.

9. Logo Guidelines

Use the supplied Wravex Innovation logo.

The logo contains:

Upward arrow
Blue/cyan motion
Abstract technological shape
"WRAVEX"
"INNOVATION"
Logo usage

Desktop:

Logo mark + WRAVEX INNOVATION

Mobile:

Use the compact logo if available.

Do not:
Stretch the logo
Change proportions
Add unnecessary shadows
Rotate it
Change the logo colors
Place it over visually complicated backgrounds
10. Website Architecture

Recommended technology stack:

Frontend
Next.js
React
TypeScript
Tailwind CSS
Animation
Framer Motion
Icons
Lucide React
Forms
React Hook Form
Zod
Backend/API

Can initially use:

Next.js API routes

or connect to an existing backend.

Database

If required:

PostgreSQL
Email

Use a transactional email service such as:

Resend
Brevo
SendGrid

Do not rely on browser-side email credentials.

11. Recommended Project Structure
wravex-innovation/
│
├── app/
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   ├── ai-solutions/
│   │   ├── web-development/
│   │   ├── mobile-development/
│   │   ├── automation/
│   │   └── business-software/
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   ├── contact/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   ├── privacy/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileMenu.tsx
│   │
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── HeroGraphic.tsx
│   │
│   ├── sections/
│   │   ├── ServicesPreview.tsx
│   │   ├── WhyWravex.tsx
│   │   ├── ProjectsPreview.tsx
│   │   ├── Process.tsx
│   │   ├── Technologies.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeading.tsx
│   │   └── Container.tsx
│   │
│   └── forms/
│       └── ContactForm.tsx
│
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── validation.ts
│
├── data/
│   ├── services.ts
│   ├── projects.ts
│   ├── technologies.ts
│   └── testimonials.ts
│
├── public/
│   ├── logo/
│   ├── images/
│   ├── icons/
│   └── projects/
│
├── types/
│   └── index.ts
│
└── docs/
    ├── README.md
    ├── ARCHITECTURE.md
    ├── DESIGN_SYSTEM.md
    ├── COMPONENTS.md
    ├── CONTENT.md
    ├── SEO.md
    └── DEPLOYMENT.md
12. Global Layout

Maximum content width:

1200–1280px

Desktop horizontal padding:

32–48px

Tablet:

24–32px

Mobile:

16–20px

Sections should generally use:

80–120px vertical spacing

Do not make every section identical.

13. Navigation

Desktop navbar:

[WRAVEX LOGO]

Home
Services
Solutions
Projects
About

                    Let's Talk
Navbar behavior

At top:

Transparent or white depending on hero
Logo visible
Clean navigation

On scroll:

White background
Subtle shadow/border
Slight blur
Fixed position

Example:

backdrop-filter: blur(16px)

Do not create an extremely thick navbar.

14. Mobile Navigation

Mobile:

[Logo]                         [Menu]

Menu opens into a full-width panel.

Items:

Home
Services
Solutions
Projects
About
Contact

CTA:

Start a Project

The menu should animate smoothly.

15. Homepage

The homepage is the most important page.

Recommended structure:

Navbar
↓
Hero
↓
Trust / Introduction
↓
Services
↓
Solutions
↓
Why Wravex
↓
Featured Projects
↓
Technology
↓
Process
↓
Testimonials
↓
CTA
↓
Footer
16. Hero Section
Objective

Within 3–5 seconds the visitor should understand:

What Wravex is
What it does
Why it matters
What action to take
Recommended headline

We Build Smart Software for a Faster World.

Alternative:

Turning Ideas Into Intelligent Digital Products.

Alternative:

Technology That Moves Your Business Forward.

Supporting copy

Wravex Innovation builds AI-powered solutions, modern web and mobile applications, intelligent automation, and custom software designed around real business needs.

CTA

Primary:

Start a Project

Secondary:

Explore Our Services

17. Hero Visual

Do not use a generic stock image.

Create a custom visual inspired by the Wravex logo.

Concept

A large abstract upward-moving structure.

Elements:

Blue flowing ribbon
Cyan edge lighting
Abstract arrow
Floating geometric shapes
Subtle grid
Small data particles
Soft gradient
Light background

The visual should communicate:

movement + growth + software + innovation

Important

Do not make the hero excessively dark.

The client branding is blue-based, but the website should remain bright and premium.

18. Hero Animation

Use subtle motion.

Possible animations:

Floating shapes
translateY: 0 → -10px → 0
Gradient movement

Slow movement:

8–15 seconds
Arrow movement

Very subtle upward movement.

Particle movement

Extremely low density.

Avoid:

Fast flashing
Excessive particle systems
Huge glowing effects
Distracting animations
19. Intro / Brand Statement

Immediately below hero:

Heading

Technology Built Around Your Business.

Copy:

From intelligent automation to scalable digital products, Wravex Innovation combines modern technology with practical business thinking to create software that delivers measurable value.

Possible visual:

A large number/statistic area.

Example:

AI Solutions       Web & Mobile
Automation         Business Software
20. Services Section

Heading:

What We Build

Subheading:

Technology solutions designed to solve real business problems.

Service 1 — AI Solutions

Icon:

Brain / Sparkles

Description:

Build intelligent systems using AI, machine learning, generative AI, chatbots, recommendation systems and intelligent assistants.

Features:

Generative AI
AI Agents
Machine Learning
Chatbots
RAG Systems
AI Automation
21. Service 2 — Web Development

Description:

High-performance websites and web applications designed for modern businesses and digital products.

Features:

Corporate Websites
SaaS Platforms
Dashboards
E-commerce
Web Applications
API Integration
22. Service 3 — Mobile Development

Description:

Modern mobile experiences built for iOS and Android with performance, usability and scalability in mind.

Features:

iOS
Android
Cross-platform
Mobile APIs
Push Notifications
Mobile Dashboards
23. Service 4 — Automation

Description:

Eliminate repetitive work by connecting systems, automating workflows and building intelligent business processes.

Features:

Workflow Automation
API Automation
AI Automation
Business Processes
Notifications
Data Processing
24. Service 5 — Business Software

Description:

Custom software that helps businesses manage operations, data, customers and workflows more efficiently.

Examples:

ERP
CRM
LMS
Inventory
HR Systems
Management Platforms
25. Service Card Design

Do not use basic:

[Icon]
Service name
Lorem ipsum...

Instead create premium cards.

Example:

┌────────────────────────────────────────┐
│                              ↗         │
│                                        │
│  ✦                                     │
│                                        │
│  AI Solutions                           │
│                                        │
│  Intelligent technology designed        │
│  around your business.                 │
│                                        │
│  AI Agents · RAG · ML                  │
│                                        │
│                           Explore →     │
└────────────────────────────────────────┘

Cards should have:

subtle borders
rounded corners
hover movement
gradient accent
custom visual
clean typography
26. Solutions Section

Instead of focusing only on technologies, explain business outcomes.

Heading:

Solutions That Solve Real Problems

Categories:

Startups
MVP development
SaaS
Product development
AI integration
Small & Medium Businesses
Business automation
Custom software
E-commerce
CRM/ERP
Enterprises
Digital transformation
Enterprise applications
AI systems
Workflow automation
27. Why Wravex

Heading:

Why Businesses Choose Wravex

Create 4–6 strong advantages.

01 — Business First

We don't build technology for technology's sake. Every solution starts with the business problem.

02 — Modern Technology

We use modern development frameworks, cloud infrastructure and AI technologies.

03 — Scalable Architecture

Solutions are designed to grow alongside the business.

04 — Human-Centered Design

Technology should be powerful but easy to use.

05 — Long-Term Partnership

Wravex should be positioned as a technology partner, not simply a development vendor.

28. Featured Projects

Heading:

Ideas We've Turned Into Software

Project cards should include:

Image
Project name
Industry
Description
Technology
View Case Study

Example:

┌──────────────────────────────────┐
│                                  │
│       PROJECT IMAGE              │
│                                  │
├──────────────────────────────────┤
│ SaaS Platform                    │
│                                  │
│ Intelligent Business Platform    │
│                                  │
│ Next.js · AI · PostgreSQL        │
│                                  │
│ View Case Study →                │
└──────────────────────────────────┘
29. Project Case Study Page

Every major project should have its own page.

Structure:

Project Hero
↓
Overview
↓
Challenge
↓
Solution
↓
Features
↓
Technology
↓
Results
↓
Screenshots
↓
Next Project
30. Technologies Section

Heading:

Built With Modern Technology

Display technology categories.

AI
OpenAI
Gemini
Claude
Llama
TensorFlow
PyTorch
Frontend
React
Next.js
TypeScript
Tailwind
Backend
Node.js
Python
FastAPI
Django
Database
PostgreSQL
MongoDB
Redis
Cloud
AWS
Vercel
Render
Docker

Only display technologies Wravex genuinely uses.

31. Process Section

Heading:

From Idea to Impact

Five steps.

01 — Discover

Understand the business, users and objectives.

02 — Plan

Define architecture, features, scope and roadmap.

03 — Design

Create a clear and intuitive product experience.

04 — Develop

Build, integrate and test the solution.

05 — Launch & Scale

Deploy, monitor and continuously improve.

Visual:

Discover
   ↓
Plan
   ↓
Design
   ↓
Develop
   ↓
Launch

Desktop can use a horizontal timeline.

Mobile should become vertical.

32. Testimonials

If real testimonials are available, display them.

Never invent testimonials.

Structure:

"Quote..."

Name
Position
Company

If testimonials aren't available yet, the section can be temporarily hidden rather than filled with fake content.

33. CTA Section

This should be one of the strongest sections.

Heading

Have an Idea? Let's Build Something Smart.

Supporting copy:

Tell us what you're trying to build, and we'll help turn your idea into a practical digital solution.

Buttons:

Start a Project

Talk to Wravex

Visual:

Use a refined blue/cyan gradient background with the Wravex upward-motion graphic.

34. Footer

Footer structure:

WRAVEX INNOVATION

Smart software for a faster world.

Company
Home
About
Services
Projects
Contact

Services
AI Solutions
Web Development
Mobile Development
Automation
Business Software

Connect
LinkedIn
Instagram
Facebook
X

Contact
Email
Phone
Location

© 2026 Wravex Innovation
Privacy Policy
Terms

Only include social accounts that actually exist.

35. Services Page

URL:

/services

Hero:

Technology Services Built Around Your Goals

Then list every service in detail.

Each service section should contain:

Overview
Problems solved
Features
Technologies
Process
CTA
36. Individual Service Pages

Example:

/services/ai-solutions

Structure:

Hero
↓
What We Do
↓
Capabilities
↓
Use Cases
↓
Technology
↓
Process
↓
Projects
↓
FAQ
↓
CTA
37. About Page

Hero:

Building Technology That Moves Businesses Forward.

Sections:

Our Story

Actual company story.

Our Mission

Actual mission statement.

Our Vision

Actual vision.

Values

Suggested:

Innovation
Integrity
Excellence
Collaboration
Customer Success

Do not fabricate company history.

38. Contact Page

Hero:

Let's Build Something Smart.

Contact form:

Name *
Email *
Company
Phone
Service *
Budget
Project Details *

Service dropdown:

AI Solutions
Web Development
Mobile Development
Automation
Business Software
Other

Budget:

Under $1,000
$1,000–$5,000
$5,000–$10,000
$10,000+
Not sure yet

CTA:

Send Project Request

39. Form Validation

Required:

name
email
projectDetails
service

Email validation:

valid email format

Project details:

Minimum:

20 characters

Maximum:

3000 characters

Show clear validation messages.

Example:

Please enter a valid email address.

Never expose backend errors directly to users.

40. Contact Form UX

States:

Default
Send Project Request
Loading
Sending...
Success
Thanks! Your project request has been received.
We'll get back to you soon.
Error
Something went wrong.
Please try again or contact us directly.
41. SEO Requirements

Every page must have:

Title
Meta description
Open Graph metadata
Canonical URL
Proper heading hierarchy

Homepage example:

Title

Wravex Innovation | Smart Software for a Faster World

Description

Wravex Innovation builds AI solutions, web and mobile applications, automation systems and custom business software for modern businesses.

42. SEO URL Structure

Use clean URLs.

/
/about
/services
/services/ai-solutions
/services/web-development
/services/mobile-development
/services/automation
/services/business-software
/projects
/projects/project-name
/contact
/blog
/blog/article-name
/privacy
/terms

Avoid:

/services?id=123
/page123
/service-new-final
43. Technical SEO

Implement:

sitemap.xml
robots.txt
canonical URLs
Open Graph
Twitter/X metadata
structured data
semantic HTML

Structured data:

Organization

Use Organization schema.

Service

Use Service schema where appropriate.

Article

Use Article schema for blog posts.

Do not add structured data for information that isn't actually present.

44. Accessibility

Target:

WCAG 2.2 AA

Requirements:

Proper contrast
Keyboard navigation
Visible focus states
Semantic HTML
Alt text
ARIA only when necessary
Accessible forms
Accessible navigation
Reduced-motion support

Images must have meaningful alt text.

Decorative images:

alt=""
45. Responsive Design

The website must work properly on:

Mobile
320px+
Tablet
768px+
Laptop
1024px+
Desktop
1440px+
Large screens
1920px+

Do not simply scale desktop down.

Mobile layouts should be deliberately designed.

46. Mobile Design Rules

On mobile:

One-column layouts
Simplified navigation
Large touch targets
Reduced decorative elements
Shorter headings
Optimized images
No horizontal overflow

Minimum touch target:

44 × 44px
47. Animation System

Animations should communicate polish, not distract users.

Recommended:

Page entrance
opacity: 0 → 1
translateY: 20px → 0

Duration:

400–700ms
Cards

On hover:

translateY(-4px)
Buttons

Subtle:

scale(1.01)
Hero graphics

Slow continuous movement.

48. Reduced Motion

Respect:

prefers-reduced-motion

If enabled:

Disable floating animations
Disable unnecessary transitions
Disable particle effects

Content must remain fully usable.

49. Image Guidelines

Do not use random stock images throughout the website.

Preferred visual hierarchy:

1

Custom branded graphics

2

Real project screenshots

3

Professional technology imagery

4

Stock photography only when genuinely useful

Graphics should follow:

Blue + cyan + white

50. Hero Graphics Guidelines

Hero images should have:

Large negative space
Bright background
Blue/cyan visual elements
Soft shadows
Modern 3D shapes
High-quality rendering
No text embedded in image

Text must be HTML, not part of the graphic.

This is important for:

SEO
accessibility
responsive design
maintainability
51. Component Design System

Create reusable components.

Button

Variants:

primary
secondary
outline
ghost
Card

Variants:

default
service
project
feature
testimonial
Badge

Variants:

blue
cyan
neutral
SectionHeading

Props:

eyebrow
title
description
alignment
52. Button Specification

Primary:

Background: Blue
Text: White
Radius: 10–12px
Padding: 12px 20px

Hover:

Slight darkening
Subtle elevation

Secondary:

Background: White
Border: Blue
Text: Blue

Avoid giant pill buttons unless deliberately used for a specific component.

53. Card Specification

Recommended:

border-radius: 20px
border: 1px solid #E4E7EC
background: #FFFFFF

Hover:

transform: translateY(-4px)
box-shadow: subtle

Cards should not have huge shadows.

54. Border Radius System

Use consistent values.

Small: 8px
Medium: 12px
Large: 16px
XL: 20px
Hero: 24–32px

Do not randomly use 7px, 13px, 27px etc.

55. Spacing System

Use a consistent spacing scale.

4
8
12
16
20
24
32
40
48
64
80
96
120

Avoid arbitrary spacing wherever possible.

56. Dark Sections

Dark sections can be used strategically.

For example:

Technology
CTA
Footer

But the whole website should not be dark.

Recommended visual balance:

70–80% light
20–30% dark/accent

This keeps the site aligned with the bright logo/post identity.

57. Performance

Target:

Lighthouse
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+

Optimize:

Images
Fonts
JavaScript
Third-party scripts
Animations

Use Next.js image optimization.

58. Image Optimization

Use:

next/image

Prefer:

WebP
AVIF

Use appropriate dimensions.

Never load a 5000px image when a 1200px image is sufficient.

59. Font Optimization

Use local or optimized Google fonts.

Avoid loading unnecessary font families.

Ideally:

1 primary family
2–4 weights
60. Security

Never expose:

API keys
SMTP credentials
database credentials
private environment variables

Frontend environment variables must only contain values that are safe to expose.

Example:

NEXT_PUBLIC_SITE_URL

Private:

DATABASE_URL
EMAIL_API_KEY

must remain server-side.

61. Environment Variables

Example:

NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_ID=

DATABASE_URL=

EMAIL_API_KEY=
CONTACT_EMAIL=

Create:

.env.local
.env.example

Never commit:

.env.local
62. Analytics

Recommended:

Google Analytics
Google Search Console

Track:

Page views
CTA clicks
Contact form submissions
Project clicks
Service page visits

Primary conversion:

Contact form submission

Secondary conversion:

CTA click
63. Error Handling

Create:

404 page
500/error boundary
loading states
form errors
network errors

404 example:

Looks like you've taken a wrong turn.

CTA:

Back to Home

64. Loading Experience

Use skeleton loaders where needed.

Do not show a huge loading spinner for an entire static page.

Next.js Server Components should be used wherever client-side interactivity isn't required.

65. React Architecture

Prefer:

Server Components

for:

Static content
SEO pages
Project pages
Services

Use:

"use client"

only when required for:

Animation
Interactive forms
Menus
Carousels
Client-side state
66. Content Architecture

Do not hard-code repeated content directly inside components.

Instead:

data/services.ts
data/projects.ts
data/testimonials.ts

Example:

export const services = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    description: "...",
    features: [],
  }
]

This makes future CMS integration easier.

67. CMS Readiness

The architecture should allow future integration with:

Sanity
Contentful
Strapi
WordPress
Payload CMS

Do not build a CMS unless the client actually requires one.

68. Blog

Blog should be optional initially.

If implemented:

/blog
/blog/[slug]

Categories:

AI
Software Development
Automation
Business Technology
Product Development

Blog cards:

Image
Category
Title
Excerpt
Date
Read Article
69. Social Media Integration

Use the client's actual social profiles.

Potential platforms:

Instagram
LinkedIn
Facebook
X

Do not add social icons for accounts that don't exist.

70. Content Rules

The website copy should be:

Clear
Confident
Professional
Business-focused

Avoid excessive buzzwords.

Bad:

We leverage cutting-edge revolutionary next-generation AI-powered synergistic digital ecosystems.

Better:

We build intelligent software that helps businesses automate work and make better decisions.

71. Brand Voice
Tone

Professional but human.

Sentence style

Short and confident.

Example

Instead of:

We are a leading organization providing a diverse range of highly innovative technological solutions.

Use:

We build software that helps businesses work smarter.

72. CTA Language

Preferred:

Start a Project
Let's Talk
Build With Us
Discuss Your Idea
Get Started

Avoid:

Click Here
Submit
Learn More Everywhere
73. Homepage Conversion Strategy

Primary CTA appears:

Hero

Start a Project

Services

Explore Services

Projects

View Projects

End

Let's Build Something Smart

This creates a clear conversion path.

74. SEO Content Keywords

Potential keyword themes:

software development company
AI development company
AI solutions
custom software development
web development company
mobile app development
business automation
software solutions
SaaS development
AI automation
custom business software

Do not keyword-stuff.

75. Metadata Architecture

Create reusable SEO utility.

Example concept:

generateMetadata({
  title,
  description,
  image,
})

Each page should have unique metadata.

76. Sitemap

Automatically include:

/
 /about
 /services
 /services/ai-solutions
 /services/web-development
 /services/mobile-development
 /services/automation
 /services/business-software
 /projects
 /contact

If blog exists:

/blog
/blog/*
77. Deployment

Recommended:

Frontend

Vercel

Domain

Client's actual domain.

Example:

www.wravexinnovation.com

Only use the actual domain after confirming it.

78. Deployment Checklist

Before production:

[ ] Production build succeeds
[ ] No TypeScript errors
[ ] No ESLint errors
[ ] No console errors
[ ] Mobile tested
[ ] Tablet tested
[ ] Desktop tested
[ ] Forms tested
[ ] Email tested
[ ] SEO metadata tested
[ ] Sitemap tested
[ ] Robots tested
[ ] Favicon added
[ ] OG image added
[ ] Images optimized
[ ] Links tested
[ ] 404 tested
[ ] Accessibility tested
[ ] Lighthouse tested
79. Browser Testing

Test on:

Desktop
Chrome
Edge
Firefox
Safari
Mobile
iOS Safari
Android Chrome
80. Quality Assurance

Before delivery, verify:

Visual
Logo correct
Colors consistent
Typography consistent
Spacing consistent
No broken images
Functional
Navigation works
Mobile menu works
Forms work
Buttons work
Links work
Technical
Build succeeds
No hydration errors
No console warnings
No broken routes
81. Important Development Rule
DO NOT over-engineer the first version.

Build:

Phase 1 — Premium corporate website

Then:

Phase 2 — Content management

Then:

Phase 3 — Advanced features

Potential future additions:

Client portal
AI chatbot
Project inquiry dashboard
Careers
Blog CMS
Case study management
Lead management
Analytics dashboard
82. Development Phases
Phase 1 — Foundation
Next.js setup
TypeScript
Tailwind
Fonts
Global CSS
Theme
Layout
Navbar
Footer
Phase 2 — Homepage

Build:

Hero
Services
Solutions
Why Wravex
Projects
Technologies
Process
CTA
Phase 3 — Inner Pages

Build:

About
Services
Individual services
Projects
Contact
Phase 4 — Interactions

Add:

Navbar scroll behavior
Mobile menu
Hover states
Page transitions
Hero animation
Scroll reveal
Phase 5 — SEO

Implement:

Metadata
Sitemap
Robots
Structured data
OG images
Phase 6 — Contact System

Implement:

Validation
API
Email
Success state
Error state
Spam protection
Phase 7 — QA

Perform:

Responsive testing
Browser testing
Accessibility
Performance
SEO
Security
83. Design Don'ts
Don't make it cyberpunk.

No excessive:

neon
black backgrounds
glowing grids
futuristic HUDs
Don't make it generic.

Avoid:

random stock business people
generic AI robot images
meaningless abstract blobs everywhere
Don't overuse gradients.

Gradients should emphasize important elements.

Don't over-animate.

Animation should support the design.

Don't use text inside images.

All important text should be HTML.

Don't fake information.

Never invent:

clients
statistics
testimonials
awards
projects
years of experience
team members
84. Overall Visual Direction

The final website should feel approximately like:

Modern SaaS + Premium Software Company + AI Innovation

rather than:

Freelancer portfolio + generic IT company + dark cyberpunk website

The strongest combination is:

White space + navy typography + blue/cyan accents + sophisticated graphics + subtle motion.

85. Final Homepage Visual Hierarchy

The homepage should visually flow like this:

                    WRAVEX
                      ↓

       WE BUILD SMART SOFTWARE
          FOR A FASTER WORLD.

      Supporting business-focused copy

       [ START A PROJECT ] [ SERVICES ]

                         ╭───────────────╮
                         │               │
                         │  ABSTRACT     │
                         │  WRAVEX       │
                         │  TECHNOLOGY   │
                         │  GRAPHIC      │
                         │               │
                         ╰───────────────╯

────────────────────────────────────────────

             TECHNOLOGY BUILT
            AROUND YOUR BUSINESS

────────────────────────────────────────────

                 WHAT WE BUILD

       AI       WEB       MOBILE
       AUTOMATION       SOFTWARE

────────────────────────────────────────────

          SOLUTIONS THAT SOLVE
             REAL PROBLEMS

────────────────────────────────────────────

              WHY WRAVEX

      01        02        03        04

────────────────────────────────────────────

              OUR PROJECTS

       [ Project ]   [ Project ]
       [ Project ]   [ Project ]

────────────────────────────────────────────

           MODERN TECHNOLOGY

      AI • WEB • CLOUD • MOBILE

────────────────────────────────────────────

            FROM IDEA TO IMPACT

    DISCOVER → PLAN → DESIGN → BUILD → SCALE

────────────────────────────────────────────

       HAVE AN IDEA?
       LET'S BUILD SOMETHING SMART.

             [ START A PROJECT ]

────────────────────────────────────────────

                  FOOTER
86. Developer Non-Negotiable Requirements

The developer/coding agent must follow these rules:

Do not change the Wravex logo.
Do not replace the brand identity with another color scheme.
Do not make the entire website dark.
Do not use excessive neon effects.
Do not use generic AI robot imagery.
Do not invent company information.
Do not invent testimonials or statistics.
Do not hard-code repeated content unnecessarily.
Do not sacrifice mobile responsiveness for desktop design.
Do not sacrifice performance for animations.
Do not put important text inside images.
Use semantic HTML.
Maintain accessibility.
Keep components reusable.
Keep the code production-ready.
Use TypeScript properly.
Do not leave placeholder lorem ipsum in the production UI.
Do not expose API keys.
Do not create unnecessary dependencies.
Every page must feel like part of the same Wravex brand.
87. Definition of Done

The Wravex website is considered complete only when:

✓ Brand identity implemented
✓ Logo correctly implemented
✓ Responsive navbar
✓ Premium hero
✓ Hero graphic
✓ Services section
✓ Solutions section
✓ Why Wravex
✓ Projects
✓ Technology section
✓ Development process
✓ CTA
✓ Footer
✓ About page
✓ Services page
✓ Service detail pages
✓ Projects page
✓ Project detail structure
✓ Contact page
✓ Working contact form
✓ Form validation
✓ Responsive design
✓ Mobile navigation
✓ SEO metadata
✓ Sitemap
✓ Robots.txt
✓ Open Graph
✓ Accessibility
✓ Performance optimization
✓ Error handling
✓ 404 page
✓ Production build
✓ Browser testing
✓ Mobile testing
✓ Deployment
88. Recommended First Version

I would not launch every possible feature immediately.

For the first professional version, build:

Core pages
Home
About
Services
Projects
Contact
Services
AI Solutions
Web Development
Mobile Development
Automation
Business Software
Core conversion
Start a Project
Core visual identity
White
Navy
Royal Blue
Cyan
Blue/Cyan gradients
Wravex upward-motion graphics

This will give Wravex a strong, credible corporate presence without making the website unnecessarily complicated.

Recommended project documentation files

For the actual development repository, I recommend creating these inside /docs:

docs/
│
├── README.md
├── PROJECT_REQUIREMENTS.md
├── ARCHITECTURE.md
├── DESIGN_SYSTEM.md
├── BRAND_GUIDELINES.md
├── UI_COMPONENTS.md
├── PAGES.md
├── CONTENT.md
├── ANIMATIONS.md
├── RESPONSIVE_DESIGN.md
├── ACCESSIBILITY.md
├── SEO.md
├── PERFORMANCE.md
├── SECURITY.md
├── API.md
├── DEPLOYMENT.md
├── TESTING.md
└── CHANGELOG.md

This should be the baseline specification before starting the actual UI development. The next step should be to turn this into the actual /docs files and then build the website section-by-section, starting with the design system → navbar → hero → homepage, rather than asking an AI coding agent to generate the entire website in one uncontrolled pass.