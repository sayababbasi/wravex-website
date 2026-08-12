import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/data/projects"
import { ProjectDetailClient } from "./ProjectDetailClient"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug)
  
  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
