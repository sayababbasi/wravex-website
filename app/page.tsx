import { Hero } from "@/components/hero/Hero"
import { BrandStatement } from "@/components/sections/BrandStatement"
import { ServicesPreview } from "@/components/sections/ServicesPreview"
import { SolutionsPreview } from "@/components/sections/SolutionsPreview"
import { WhyWravex } from "@/components/sections/WhyWravex"
import { ProjectsPreview } from "@/components/sections/ProjectsPreview"
import { Technologies } from "@/components/sections/Technologies"
import { Process } from "@/components/sections/Process"
import { CTA } from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStatement />
      <ServicesPreview />
      <SolutionsPreview />
      <WhyWravex />
      <ProjectsPreview />
      <Technologies />
      <Process />
      <CTA />
    </>
  );
}
