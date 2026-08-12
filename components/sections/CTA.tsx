import Link from "next/link"
import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export function CTA() {
  return (
    <Section className="bg-brand-navy-deep text-white relative overflow-hidden">
      {/* Abstract subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/20 blur-3xl opacity-50" />
      
      <Container className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 max-w-3xl">
          Have an Idea? Let's Build Something Smart.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
          Tell us what you're trying to build, and we'll help turn your idea into a practical digital solution.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button asChild size="lg" variant="primary" className="bg-brand-blue hover:bg-brand-cyan text-white border-none w-full sm:w-auto">
            <Link href="/contact">Start a Project</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
            <Link href="/contact">Talk to Wravex</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
