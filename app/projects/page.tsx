import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { CTA } from "@/components/sections/CTA"

const placeholders = [
  { title: "Financial SaaS Platform", desc: "Intelligent Business Platform designed to automate accounting and reporting processes.", tags: ["Next.js", "AI", "PostgreSQL"] },
  { title: "Enterprise Dashboard", desc: "Automated Data Workflow allowing 360-degree visibility into manufacturing operations.", tags: ["React", "Python", "AWS"] },
  { title: "Logistics Application", desc: "Real-time tracking and delivery management system for a regional carrier.", tags: ["React Native", "Node.js", "Redis"] },
  { title: "Healthcare Portal", desc: "Secure, HIPAA-compliant patient communication and records management platform.", tags: ["TypeScript", "FastAPI", "MongoDB"] }
]

export default function ProjectsPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-navy-deep text-white text-center">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-semibold tracking-wide uppercase mb-6">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-tight mb-6">
              Ideas We've Turned Into Software
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              A selection of digital products, platforms, and automation systems we've built to solve complex business challenges.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-background">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {placeholders.map((p, i) => (
              <Card key={i} className="p-0 overflow-hidden group border-0 shadow-sm bg-white">
                <div className="aspect-[16/9] bg-brand-navy/5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-brand-navy/20 font-medium tracking-widest uppercase">Case Study Coming Soon</span>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-brand-navy-deep mb-4">{p.title}</h3>
                  <p className="text-text-secondary mb-8 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-semibold px-2 py-1 bg-background border border-border-subtle rounded-md text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/contact" className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors">
                    Request Details <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 p-10 bg-brand-navy/5 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-brand-navy-deep mb-4">Looking for something specific?</h3>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              Due to NDA restrictions, we cannot publicly display all of our enterprise work. Contact us directly for relevant private case studies.
            </p>
            <Button asChild variant="primary">
              <Link href="/contact">Request Private Case Studies</Link>
            </Button>
          </div>
        </Container>
      </Section>
      
      <CTA />
    </>
  )
}
