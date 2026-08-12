import Link from "next/link"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { Card } from "@/components/ui/Card"
import { Brain, Layout, Smartphone, Workflow, Briefcase } from "lucide-react"

const services = [
  {
    title: "AI Solutions",
    description: "Intelligent technology designed around your business. AI Agents, RAG, and ML.",
    icon: Brain,
    href: "/services/ai-solutions",
  },
  {
    title: "Web Development",
    description: "High-performance websites and web applications designed for modern businesses.",
    icon: Layout,
    href: "/services/web-development",
  },
  {
    title: "Mobile Development",
    description: "Modern mobile experiences built for iOS and Android with scalability in mind.",
    icon: Smartphone,
    href: "/services/mobile-development",
  },
  {
    title: "Automation",
    description: "Eliminate repetitive work by connecting systems and automating workflows.",
    icon: Workflow,
    href: "/services/automation",
  },
  {
    title: "Business Software",
    description: "Custom software that helps manage operations, data, and customers efficiently.",
    icon: Briefcase,
    href: "/services/business-software",
  }
]

export function ServicesPreview() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading 
          eyebrow="Services"
          title="What We Build"
          description="Technology solutions designed to solve real business problems."
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-cyan">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                </div>
                <div className="w-14 h-14 rounded-xl bg-brand-background flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy-deep mb-4">{service.title}</h3>
                <p className="text-text-secondary mb-8 flex-grow">{service.description}</p>
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-navy transition-colors mt-auto"
                >
                  Explore <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
