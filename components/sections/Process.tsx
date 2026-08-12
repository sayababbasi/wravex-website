import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

const steps = [
  { num: "01", title: "Discover", desc: "Understand the business, users and objectives." },
  { num: "02", title: "Plan", desc: "Define architecture, features, scope and roadmap." },
  { num: "03", title: "Design", desc: "Create a clear and intuitive product experience." },
  { num: "04", title: "Develop", desc: "Build, integrate and test the solution." },
  { num: "05", title: "Launch & Scale", desc: "Deploy, monitor and continuously improve." }
]

export function Process() {
  return (
    <Section className="bg-white overflow-hidden">
      <Container>
        <SectionHeading 
          eyebrow="Process"
          title="From Idea to Impact"
          className="mb-20"
        />
        
        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute top-6 left-0 w-full h-[2px] bg-border-subtle" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-row lg:flex-col gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-brand-blue flex items-center justify-center text-brand-navy font-bold text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy-deep mb-2">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed pr-4">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
