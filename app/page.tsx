import { Hero } from "@/components/hero/Hero"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { Capabilities } from "@/components/sections/Capabilities"
import { Solutions } from "@/components/sections/Solutions"
import { WhyWravex } from "@/components/sections/WhyWravex"
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
      <WhyWravex />
      <Projects />
      <Technologies />
      <Process />
      <CTA />
    </>
  )
}
