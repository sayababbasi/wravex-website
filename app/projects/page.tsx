import { Metadata } from "next"
import { ProjectsClient } from "./ProjectsClient"

export const metadata: Metadata = {
  title: "Projects",
  description: "View our portfolio of digital products, AI solutions, web applications, and enterprise software."
}

export default function ProjectsPage() {
  return <ProjectsClient />
}
