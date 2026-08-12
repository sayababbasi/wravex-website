import { Hero } from "@/components/hero/Hero"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { Capabilities } from "@/components/sections/Capabilities"
import { Solutions } from "@/components/sections/Solutions"
import { WhyNexora } from "@/components/sections/WhyNexora"
import { Projects } from "@/components/sections/Projects"
import { Technologies } from "@/components/sections/Technologies"
import { Process } from "@/components/sections/Process"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Capabilities />
      <Solutions />
      <WhyNexora />
      <Projects />
      <Technologies />
      <Process />
      <CTA />
    </>
  )
}
