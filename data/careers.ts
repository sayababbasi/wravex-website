export type JobCategory = 'Experienced' | 'Internship';

export interface Job {
  id: string;
  title: string;
  type: string;
  category: JobCategory;
  experience: string;
  location: string;
  department: string;
  shortDescription: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  skills: string[];
}

export const jobs: Job[] = [
  {
    id: "senior-full-stack-engineer",
    title: "Senior Full-Stack Software Engineer",
    type: "Full-time",
    category: "Experienced",
    experience: "5+ Years",
    location: "Lahore, Pakistan",
    department: "Engineering",
    shortDescription: "We're looking for an experienced full-stack software engineer who can design, build, and maintain scalable digital products from frontend interfaces to backend systems.",
    responsibilities: [
      "Design and develop production-quality web applications.",
      "Build scalable frontend and backend architectures.",
      "Work with modern JavaScript/TypeScript and backend technologies.",
      "Design and integrate APIs.",
      "Work with relational and/or modern database systems.",
      "Write maintainable, reusable, and well-tested code.",
      "Collaborate with product and design teams.",
      "Review code and maintain engineering standards.",
      "Troubleshoot production issues.",
      "Contribute to technical architecture and engineering decisions.",
      "Help mentor less-experienced developers and interns."
    ],
    requirements: [
      "Minimum 5 years of professional software development experience.",
      "Strong full-stack development experience.",
      "Strong JavaScript/TypeScript knowledge.",
      "Strong frontend development experience.",
      "Strong backend development experience.",
      "Experience designing and consuming REST APIs.",
      "Experience working with databases.",
      "Strong Git/GitHub workflow knowledge.",
      "Understanding of software architecture and clean code principles.",
      "Strong problem-solving skills.",
      "Ability to work independently and collaboratively."
    ],
    niceToHave: [
      "Next.js / React",
      "Node.js",
      "Python",
      "FastAPI / Django",
      "PostgreSQL",
      "Cloud deployment",
      "Docker",
      "AI/ML integration",
      "SaaS product development"
    ],
    skills: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "React", "System Architecture"]
  },
  {
    id: "ai-machine-learning-intern",
    title: "AI / Machine Learning Intern",
    type: "Internship Program",
    category: "Internship",
    experience: "Entry Level",
    location: "Lahore, Pakistan",
    department: "AI Solutions",
    shortDescription: "Machine learning, data-driven applications, model development, and practical AI systems.",
    responsibilities: [
      "Assist in developing and fine-tuning machine learning models.",
      "Work on practical AI systems and data-driven applications.",
      "Process and analyze datasets for AI training.",
      "Collaborate with senior engineers on AI integrations."
    ],
    requirements: [
      "Understanding of fundamental machine learning concepts.",
      "Experience with Python programming.",
      "Strong analytical and problem-solving skills.",
      "Eagerness to learn and build real-world AI systems."
    ],
    niceToHave: [
      "Experience with TensorFlow or PyTorch.",
      "Knowledge of NLP or Generative AI concepts."
    ],
    skills: ["Python", "Machine Learning", "TensorFlow / PyTorch", "Scikit-learn", "Data Processing"]
  },
  {
    id: "full-stack-web-intern",
    title: "Full-Stack Web Development Intern",
    type: "Internship Program",
    category: "Internship",
    experience: "Entry Level",
    location: "Lahore, Pakistan",
    department: "Web Development",
    shortDescription: "Building complete web applications across frontend and backend.",
    responsibilities: [
      "Develop responsive and accessible frontend interfaces.",
      "Build and test backend API endpoints.",
      "Collaborate on state management and database schema design.",
      "Participate in code reviews and agile workflows."
    ],
    requirements: [
      "Familiarity with HTML, CSS, and modern JavaScript.",
      "Understanding of basic backend concepts and databases.",
      "A portfolio of personal or academic web projects."
    ],
    niceToHave: [
      "Experience with React or Next.js.",
      "Familiarity with Node.js and REST APIs."
    ],
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "APIs"]
  },
  {
    id: "mobile-app-intern",
    title: "Mobile App Development Intern",
    type: "Internship Program",
    category: "Internship",
    experience: "Entry Level",
    location: "Lahore, Pakistan",
    department: "Mobile Development",
    shortDescription: "Building modern mobile applications and digital experiences.",
    responsibilities: [
      "Assist in building cross-platform mobile applications.",
      "Implement pixel-perfect mobile user interfaces.",
      "Integrate mobile apps with backend APIs.",
      "Test apps across various device sizes and platforms."
    ],
    requirements: [
      "Understanding of mobile application lifecycles.",
      "Familiarity with mobile UI/UX principles.",
      "Basic experience with JavaScript or mobile frameworks."
    ],
    niceToHave: [
      "Experience with React Native.",
      "Familiarity with iOS or Android deployment."
    ],
    skills: ["React Native", "JavaScript", "Mobile UI", "API Integration", "App Testing"]
  },
  {
    id: "business-automation-intern",
    title: "Business Automation Intern",
    type: "Internship Program",
    category: "Internship",
    experience: "Entry Level",
    location: "Lahore, Pakistan",
    department: "Automation",
    shortDescription: "Designing automation workflows that help businesses eliminate repetitive processes.",
    responsibilities: [
      "Identify manual workflows suitable for automation.",
      "Design and implement automated data pipelines.",
      "Connect third-party systems using APIs and webhooks.",
      "Monitor and troubleshoot automation scripts."
    ],
    requirements: [
      "Strong logical thinking and problem-solving skills.",
      "Basic programming knowledge (Python or JavaScript).",
      "Understanding of how APIs work."
    ],
    niceToHave: [
      "Experience with tools like Zapier, Make, or n8n.",
      "Knowledge of basic cloud concepts."
    ],
    skills: ["Python", "APIs", "Automation", "Workflow Design", "Integrations", "Problem Solving"]
  },
  {
    id: "software-engineering-intern",
    title: "Software Engineering Intern",
    type: "Internship Program",
    category: "Internship",
    experience: "Entry Level",
    location: "Lahore, Pakistan",
    department: "Business Software",
    shortDescription: "Software architecture, engineering practices, testing, debugging, and Git workflows.",
    responsibilities: [
      "Write clean, maintainable, and well-tested code.",
      "Participate in the software development lifecycle.",
      "Learn and apply software architecture principles.",
      "Debug and resolve issues in existing codebases."
    ],
    requirements: [
      "Strong foundation in computer science principles.",
      "Understanding of data structures and algorithms.",
      "Familiarity with version control (Git)."
    ],
    niceToHave: [
      "Experience with typed languages (TypeScript, Java).",
      "Understanding of clean code principles."
    ],
    skills: ["Programming", "Git", "APIs", "Data Structures", "Algorithms", "Software Engineering"]
  }
];

export function getJobsByCategory(category: JobCategory): Job[] {
  return jobs.filter(job => job.category === category);
}

export function getJobById(id: string): Job | undefined {
  return jobs.find(job => job.id === id);
}
