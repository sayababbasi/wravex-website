import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

const solutions = [
  {
    category: "Startups",
    list: ["MVP development", "SaaS", "Product development", "AI integration"]
  },
  {
    category: "Small & Medium Businesses",
    list: ["Business automation", "Custom software", "E-commerce", "CRM/ERP"]
  },
  {
    category: "Enterprises",
    list: ["Digital transformation", "Enterprise applications", "AI systems", "Workflow automation"]
  }
]

export function SolutionsPreview() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading 
          eyebrow="Outcomes"
          title="Solutions That Solve Real Problems"
          alignment="center"
          className="mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {solutions.map((solution, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-brand-navy-deep mb-8">{solution.category}</h3>
              <ul className="flex flex-col gap-4 text-text-secondary">
                {solution.list.map((item, j) => (
                  <li key={j} className="text-lg">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
