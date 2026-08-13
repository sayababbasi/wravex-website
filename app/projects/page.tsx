import { Metadata } from "next"
import { ProjectsClient } from "./ProjectsClient"

export const metadata: Metadata = {
  title: "Our Work & Projects",
  description: "View our portfolio of digital products, AI systems, and automated workflows built for enterprise and startups.",
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
