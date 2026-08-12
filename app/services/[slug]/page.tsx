import { notFound } from "next/navigation"
import { getServiceBySlug, services } from "@/data/services"
import { ServiceDetailClient } from "./ServiceDetailClient"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

// In Next.js 15+ App Router, params is a Promise that must be awaited
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug)
  
  if (!service) {
    notFound()
  }

  return <ServiceDetailClient service={service} />
}
