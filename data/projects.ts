export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
};

export const projects: Project[] = [
  {
    slug: "intelligent-document-processing",
    title: "Intelligent Document Processing System",
    category: "AI PLATFORM",
    shortDescription: "AI-powered platform that extracts, classifies and processes documents with high accuracy.",
    fullDescription: "A comprehensive enterprise solution designed to automate the intake, classification, and data extraction from unstructured financial documents, saving thousands of manual processing hours.",
    challenge: "The client was processing over 50,000 complex financial documents monthly using a massive manual data entry team, leading to high error rates, slow turnaround times, and inability to scale.",
    solution: "We engineered a secure, HIPAA-compliant intelligent document processing pipeline leveraging custom Optical Character Recognition (OCR) and specialized Large Language Models. The system automatically classifies incoming PDFs, extracts key-value pairs, cross-references against internal databases, and flags low-confidence reads for human review.",
    technologies: ["Python", "PyTorch", "React", "PostgreSQL", "AWS Textract", "Docker"]
  },
  {
    slug: "business-management-dashboard",
    title: "Business Management Dashboard",
    category: "WEB APPLICATION",
    shortDescription: "A comprehensive dashboard that helps businesses monitor, analyze and manage operations efficiently.",
    fullDescription: "A centralized operational hub providing real-time visibility into inventory, sales metrics, and staff performance across multiple geographic regions.",
    challenge: "Operations were siloed across five different legacy software systems. Management lacked real-time visibility into company performance, relying on weekly manual Excel reports that were often outdated by the time they were read.",
    solution: "We built a unified web platform that integrates via API with all legacy systems. It provides a real-time, customizable dashboard for executives, automated reporting pipelines, and actionable insights driven by historical data analysis. The interface was strictly designed to require zero training for new managers.",
    technologies: ["Next.js", "TypeScript", "Node.js", "GraphQL", "Prisma", "Tailwind CSS"]
  },
  {
    slug: "on-demand-service-app",
    title: "On-Demand Service Mobile App",
    category: "MOBILE APPLICATION",
    shortDescription: "Cross-platform mobile application that connects users with service providers seamlessly.",
    fullDescription: "A high-performance dual-sided marketplace application connecting independent contractors with local customers requiring immediate service fulfillment.",
    challenge: "The startup needed to launch simultaneously on iOS and Android with a severely constrained runway. The app required real-time geolocation tracking, secure payment processing, and instantaneous push notifications without compromising battery life.",
    solution: "We utilized React Native to maintain a single codebase without sacrificing native-like performance. We integrated WebSockets for real-time location updates, Stripe Connect for split-payment processing, and implemented an optimistic UI update strategy to ensure the app felt instantly responsive even on poor cellular networks.",
    technologies: ["React Native", "Firebase", "Stripe API", "Google Maps API", "Zustand", "Node.js"]
  },
  {
    slug: "supply-chain-automation",
    title: "Global Supply Chain Automation",
    category: "AUTOMATION",
    shortDescription: "Automated logistics pipeline reducing manual tracking and dispatch errors.",
    fullDescription: "An end-to-end integration platform that automates the communication between international freight forwarders, local warehouses, and final-mile delivery providers.",
    challenge: "High volume of lost shipments and delayed notifications due to manual data transfer between distinct vendor APIs and internal warehouse management systems.",
    solution: "We developed a robust serverless automation pipeline that listens for webhooks from over 20 different vendor APIs, normalizes the data into a standard schema, and automatically routes dispatch instructions to the appropriate warehouse. The system includes a comprehensive error-handling and auto-retry mechanism.",
    technologies: ["AWS Lambda", "Python", "Amazon SQS", "DynamoDB", "Datadog"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
