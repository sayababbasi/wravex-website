import { Container } from "@/components/ui/Container"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { Process } from "@/components/sections/Process"
import { CTA } from "@/components/sections/CTA"

export default function ServicesIndexPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-navy-deep text-white text-center">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-semibold tracking-wide uppercase mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold tracking-tight leading-tight mb-6">
              Engineering Digital Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              We provide end-to-end software development services, helping businesses scale, automate, and innovate.
            </p>
          </div>
        </Container>
      </section>
      
      {/* We reuse the homepage services section for the grid */}
      <ServicesPreview />
      
      <Process />
      
      <CTA />
    </>
  )
}
