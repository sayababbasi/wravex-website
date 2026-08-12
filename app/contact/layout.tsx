import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Nexora Digital Technologies",
  description: "Get in touch with Nexora Digital Technologies to discuss your next software project, custom AI solution, or business automation needs.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
