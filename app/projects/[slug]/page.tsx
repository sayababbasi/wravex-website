import { notFound } from "next/navigation"
import { getProjectBySlug, projects } from "@/data/projects"
import { ProjectDetailClient } from "./ProjectDetailClient"
import { Metadata } from "next"

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug)
  
  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
