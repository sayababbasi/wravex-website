import { Section } from "@/components/ui/Section"
import { Container } from "@/components/ui/Container"

export function BrandStatement() {
  return (
    <Section className="bg-brand-navy-deep text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold tracking-tight leading-tight mb-6">
              Technology Built Around Your Business.
            </h2>
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              From intelligent automation to scalable digital products, Nexora Digital Technologies combines modern technology with practical business thinking to create software that delivers measurable value.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-cyan mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h3 className="text-xl font-semibold">AI Solutions</h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-cyan mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Web & Mobile</h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-cyan mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Automation</h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center text-brand-cyan mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
              </div>
              <h3 className="text-xl font-semibold">Business Software</h3>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
