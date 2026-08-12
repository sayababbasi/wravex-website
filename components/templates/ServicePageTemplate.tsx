import * as React from "react"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { CTA } from "@/components/sections/CTA"
import { Card } from "@/components/ui/Card"
import { CheckCircle2 } from "lucide-react"

interface ServicePageTemplateProps {
  title: string;
  description: string;
  capabilities: { title: string; description: string }[];
  useCases: string[];
  technologies: string[];
}

export function ServicePageTemplate({ title, description, capabilities, useCases, technologies }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-navy-deep text-white">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <Section className="bg-background">
        <Container>
          <SectionHeading eyebrow="Capabilities" title="What We Can Build" className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <Card key={i} className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-brand-navy-deep">{cap.title}</h3>
                <p className="text-text-secondary">{cap.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Cases & Tech */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading eyebrow="Use Cases" title="Where It Applies" className="mb-12" />
              <div className="flex flex-col gap-6">
                {useCases.map((useCase, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                    <span className="text-lg text-text-secondary font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-background rounded-3xl p-10 md:p-12">
              <h3 className="text-2xl font-bold text-brand-navy-deep mb-8">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white border border-border-subtle rounded-full text-brand-navy font-semibold shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  )
}
