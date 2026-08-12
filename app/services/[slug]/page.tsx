import { notFound } from "next/navigation"
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate"

const servicesData = {
  "ai-solutions": {
    title: "AI Solutions & Integration",
    description: "Leverage artificial intelligence to automate complex decisions, analyze vast amounts of data, and create intelligent digital agents that transform how your business operates.",
    capabilities: [
      { title: "Custom AI Agents", description: "Autonomous digital workers that handle support, analysis, and repetitive workflows." },
      { title: "RAG Systems", description: "Chat with your private data using secure Retrieval-Augmented Generation architectures." },
      { title: "LLM Integration", description: "Embed powerful language models directly into your existing software ecosystem." }
    ],
    useCases: [
      "Automated Customer Support",
      "Internal Knowledge Retrieval",
      "Predictive Analytics & Forecasting",
      "Document Processing & Extraction"
    ],
    technologies: ["OpenAI", "Anthropic", "Llama", "LangChain", "Pinecone", "Python"]
  },
  "web-development": {
    title: "Web Application Development",
    description: "High-performance, scalable web applications built with modern frontend and backend architectures to deliver exceptional user experiences.",
    capabilities: [
      { title: "SaaS Platforms", description: "Multi-tenant architectures designed for scale, subscription management, and security." },
      { title: "Enterprise Portals", description: "Secure dashboards for managing complex data, users, and business operations." },
      { title: "Progressive Web Apps", description: "Web applications that feel and function like native apps across all devices." }
    ],
    useCases: [
      "B2B SaaS Products",
      "Internal Business Dashboards",
      "Customer Portals",
      "E-commerce Platforms"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"]
  },
  "mobile-development": {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that bring your business directly to your users' fingertips with uncompromising performance.",
    capabilities: [
      { title: "Cross-Platform Apps", description: "Build once, deploy everywhere using modern cross-platform frameworks." },
      { title: "Native Experiences", description: "High-fidelity, hardware-optimized applications for iOS and Android." },
      { title: "Backend Integration", description: "Seamless data synchronization with existing enterprise systems." }
    ],
    useCases: [
      "Consumer Applications",
      "On-Demand Services",
      "Internal Workforce Tools",
      "IoT Control Apps"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
  },
  "automation": {
    title: "Business Automation",
    description: "Eliminate manual work by connecting disconnected systems and automating repetitive workflows across your entire organization.",
    capabilities: [
      { title: "Workflow Automation", description: "Rule-based systems that trigger actions across different software platforms." },
      { title: "API Integrations", description: "Connecting isolated software tools to create unified data pipelines." },
      { title: "Data Processing", description: "Automated extraction, transformation, and loading (ETL) of business data." }
    ],
    useCases: [
      "Sales & CRM Synchronization",
      "Automated Reporting",
      "Invoice & Payment Processing",
      "HR & Onboarding Workflows"
    ],
    technologies: ["Make", "Zapier", "n8n", "Python", "AWS Lambda", "REST/GraphQL"]
  },
  "business-software": {
    title: "Custom Business Software",
    description: "Tailor-made software solutions designed specifically around your unique operational requirements when off-the-shelf software falls short.",
    capabilities: [
      { title: "Custom ERP & CRM", description: "Systems built specifically for your sales process and resource management." },
      { title: "Legacy Modernization", description: "Upgrading outdated systems to modern cloud architectures." },
      { title: "Supply Chain Tools", description: "End-to-end visibility and management of complex logistics operations." }
    ],
    useCases: [
      "Replacing Complex Spreadsheets",
      "Consolidating Disparate Systems",
      "Custom Compliance Tracking",
      "Inventory Management"
    ],
    technologies: ["Next.js", "Django", "PostgreSQL", "AWS", "Docker"]
  }
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData]
  
  if (!service) {
    notFound()
  }

  return (
    <ServicePageTemplate
      title={service.title}
      description={service.description}
      capabilities={service.capabilities}
      useCases={service.useCases}
      technologies={service.technologies}
    />
  )
}
