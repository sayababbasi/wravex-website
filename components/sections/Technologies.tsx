import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

const techCategories = [
  { name: "AI", items: ["OpenAI", "Gemini", "Claude", "TensorFlow", "PyTorch"] },
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", items: ["Node.js", "Python", "FastAPI", "Django"] },
  { name: "Database & Cloud", items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Vercel"] }
]

export function Technologies() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeading 
          eyebrow="Technology"
          title="Built With Modern Technology"
          alignment="center"
          className="mb-20"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {techCategories.map((cat, i) => (
            <div key={i} className="flex flex-col gap-6">
              <h3 className="text-xl font-bold text-brand-navy-deep">{cat.name}</h3>
              <div className="flex flex-col gap-4 text-text-secondary font-medium">
                {cat.items.map((item, j) => (
                  <span key={j}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
