export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  workflow: { title: string; description: string }[];
  technologies: string[];
};

export const services: Service[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortDescription: "Intelligent systems, AI agents and automation solutions that augment human capability.",
    fullDescription: "We engineer custom artificial intelligence solutions designed to solve complex business challenges. From generative AI agents that handle customer interactions to advanced Machine Learning models for predictive analytics, we build systems that integrate seamlessly into your operations.",
    capabilities: [
      "AI Agents & Copilots",
      "Generative AI Implementation",
      "Machine Learning Models",
      "RAG (Retrieval-Augmented Generation)",
      "Intelligent Automation",
      "Natural Language Processing"
    ],
    workflow: [
      { title: "Data Assessment", description: "Evaluating existing data structures and availability." },
      { title: "Model Selection", description: "Choosing the optimal LLM or ML architecture." },
      { title: "Training & Fine-tuning", description: "Adapting the model to your specific domain context." },
      { title: "Integration", description: "Connecting the AI capabilities to your existing software." }
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain", "Pinecone"]
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "High-performance websites and web applications built for scalability and growth.",
    fullDescription: "We build robust, scalable, and ultra-fast web applications. Using modern frontend frameworks and secure backend architectures, we deliver enterprise-grade digital products that provide exceptional user experiences while maintaining rigorous technical standards.",
    capabilities: [
      "Corporate Websites",
      "SaaS Platforms",
      "Complex Web Applications",
      "Data Dashboards",
      "Headless E-commerce",
      "Custom API Integrations"
    ],
    workflow: [
      { title: "Architecture Design", description: "Planning the stack, database schemas, and state management." },
      { title: "Frontend Engineering", description: "Building responsive, accessible user interfaces." },
      { title: "Backend Development", description: "Creating secure APIs and robust business logic." },
      { title: "Performance Optimization", description: "Ensuring sub-second load times and high Core Web Vitals." }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    slug: "mobile-development",
    title: "Mobile Development",
    shortDescription: "Native and cross-platform mobile apps that deliver seamless user experiences.",
    fullDescription: "We design and engineer mobile applications that perform flawlessly across iOS and Android. By prioritizing native-like performance and intuitive interface design, we ensure your mobile product engages users and drives business value.",
    capabilities: [
      "iOS Development",
      "Android Development",
      "Cross-Platform Apps",
      "Enterprise Mobility Solutions",
      "Mobile API Integration",
      "App Modernization"
    ],
    workflow: [
      { title: "UX/UI Prototyping", description: "Mapping out mobile-first user journeys and interactions." },
      { title: "Core Development", description: "Engineering the application logic and native integrations." },
      { title: "Testing & QA", description: "Rigorous testing across physical devices and operating systems." },
      { title: "Store Deployment", description: "Managing the Apple App Store and Google Play launch process." }
    ],
    technologies: ["React Native", "Swift", "Kotlin", "Firebase", "GraphQL", "AWS"]
  },
  {
    slug: "automation",
    title: "Automation",
    shortDescription: "Streamline workflows, reduce manual work and increase efficiency with smart automation.",
    fullDescription: "We identify operational bottlenecks and replace manual, repetitive tasks with automated software pipelines. By connecting disparate systems and leveraging programmatic workflows, we drastically reduce human error and operational overhead.",
    capabilities: [
      "Workflow Automation",
      "Business Process Automation",
      "AI-Driven Automation",
      "Data Pipeline Workflows",
      "Legacy System Integration",
      "Automated Reporting"
    ],
    workflow: [
      { title: "Process Audit", description: "Identifying inefficiencies and high-friction operational tasks." },
      { title: "Logic Design", description: "Mapping the automated workflow and failover conditions." },
      { title: "API Integration", description: "Connecting third-party tools, legacy systems, and databases." },
      { title: "Monitoring", description: "Setting up telemetry to ensure the automation runs flawlessly." }
    ],
    technologies: ["Python", "Node.js", "Zapier/Make", "AWS Lambda", "Docker", "Apache Airflow"]
  },
  {
    slug: "business-software",
    title: "Business Software",
    shortDescription: "Custom business platforms and enterprise software tailored to your operations.",
    fullDescription: "Off-the-shelf software rarely fits complex business models perfectly. We build custom enterprise resource planning (ERP), customer relationship management (CRM), and internal operational tools that match your exact business logic and scale with your growth.",
    capabilities: [
      "Custom ERP Solutions",
      "Tailored CRM Systems",
      "Learning Management Systems",
      "Inventory Management",
      "Internal Portals",
      "Enterprise Data Platforms"
    ],
    workflow: [
      { title: "Requirements Gathering", description: "Deep dive into your operational needs and user roles." },
      { title: "System Architecture", description: "Designing scalable, secure, and compliant cloud architectures." },
      { title: "Iterative Build", description: "Delivering the platform in modular, testable sprints." },
      { title: "Training & Handover", description: "Ensuring your team can fully leverage the new system." }
    ],
    technologies: ["Next.js", "Java", "PostgreSQL", "Redis", "AWS", "Kubernetes"]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
