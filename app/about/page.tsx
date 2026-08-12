import { Metadata } from "next"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CTA } from "@/components/sections/CTA"

export const metadata: Metadata = {
  title: "About Us | Wravex Innovation",
  description: "Learn about Wravex Innovation, our mission, vision, and the core values that drive our software engineering processes.",
}

const values = [
  { title: "Precision", description: "We believe in writing clean code, building stable architecture, and measuring twice." },
  { title: "Pragmatism", description: "Technology serves the business. We focus on ROI, not just new frameworks." },
  { title: "Transparency", description: "Honest communication about timelines, budgets, and technical feasibility." },
  { title: "Long-Term Thinking", description: "We build systems designed to scale and endure, avoiding technical debt." }
]

const teamPlaceholders = [
  { name: "Executive Team", role: "Leadership", desc: "Guiding the strategic vision of Wravex." },
  { name: "Engineering", role: "Development", desc: "Senior architects and developers." },
  { name: "Design & Product", role: "UX/UI", desc: "Creating intuitive digital experiences." }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-navy-deep text-white text-center">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-semibold tracking-wide uppercase mb-6">
              About Wravex
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-tight mb-6">
              Building the Engine of Modern Business
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Wravex Innovation is a software engineering company dedicated to designing, building, and scaling high-performance digital products.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-brand-blue uppercase mb-4">Our Mission</h2>
              <p className="text-2xl md:text-3xl font-medium text-brand-navy-deep leading-relaxed">
                To empower businesses with intelligent software that eliminates friction, accelerates growth, and creates competitive advantages.
              </p>
            </div>
            <div>
              <h2 className="text-sm font-semibold tracking-wider text-brand-blue uppercase mb-4">Our Vision</h2>
              <p className="text-2xl md:text-3xl font-medium text-brand-navy-deep leading-relaxed">
                To be the most trusted technology partner for companies that refuse to settle for mediocre software.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section className="bg-background">
        <Container>
          <SectionHeading eyebrow="Core Values" title="The Principles We Work By" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
            {values.map((value, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-lg mx-auto md:mx-0">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-navy-deep">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Placeholder */}
      <Section className="bg-white">
        <Container>
          <SectionHeading 
            eyebrow="The Team" 
            title="Built by Experts" 
            description="Our team consists of senior engineers, product designers, and AI specialists."
            className="mb-16" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamPlaceholders.map((member, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-border-subtle">
                <div className="w-24 h-24 rounded-full bg-brand-navy/10 mb-6" />
                <h3 className="text-xl font-bold text-brand-navy-deep mb-1">{member.name}</h3>
                <span className="text-brand-blue text-sm font-semibold mb-4">{member.role}</span>
                <p className="text-text-secondary">{member.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The Wravex Standard */}
      <Section className="bg-brand-navy text-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">The Wravex Standard</h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
              We do not ship generic templates. We do not write unmaintainable code. We do not over-engineer simple problems. We build precise, powerful software designed to work flawlessly.
            </p>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
