import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"

const reasons = [
  {
    number: "01",
    title: "Business First",
    description: "We don't build technology for technology's sake. Every solution starts with the business problem."
  },
  {
    number: "02",
    title: "Modern Technology",
    description: "We use modern development frameworks, cloud infrastructure and AI technologies."
  },
  {
    number: "03",
    title: "Scalable Architecture",
    description: "Solutions are designed to grow alongside the business."
  },
  {
    number: "04",
    title: "Human-Centered Design",
    description: "Technology should be powerful but easy to use."
  },
  {
    number: "05",
    title: "Long-Term Partnership",
    description: "Wravex is a technology partner, not simply a development vendor."
  }
]

export function WhyWravex() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-brand-navy-deep leading-[1.1] sticky top-32">
              Why Businesses Choose Wravex
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-16">
            {reasons.map((reason) => (
              <div key={reason.number} className="flex gap-6 lg:gap-12">
                <span className="text-2xl font-bold text-brand-blue/40">{reason.number}</span>
                <div className="flex flex-col gap-4 pt-1">
                  <h3 className="text-2xl font-bold text-brand-navy-deep">{reason.title}</h3>
                  <p className="text-lg text-text-secondary leading-relaxed max-w-lg">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
