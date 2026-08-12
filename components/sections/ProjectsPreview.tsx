import Link from "next/link"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const placeholders = [
  { title: "SaaS Platform", desc: "Intelligent Business Platform", tags: ["Next.js", "AI", "PostgreSQL"] },
  { title: "Enterprise Dashboard", desc: "Automated Data Workflow", tags: ["React", "Python", "AWS"] }
]

export function ProjectsPreview() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeading 
            eyebrow="Selected Work"
            title="Ideas We've Turned Into Software"
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {placeholders.map((p, i) => (
            <Card key={i} className="p-0 overflow-hidden group border-0 shadow-sm bg-background">
              <div className="aspect-[4/3] bg-brand-navy/5 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent mix-blend-multiply opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-brand-navy/20 font-medium tracking-widest uppercase">Project Preview</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-navy-deep mb-2">{p.title}</h3>
                <p className="text-text-secondary mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-semibold px-2 py-1 bg-white border border-border-subtle rounded-md text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href="#" className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors">
                  View Case Study <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
