import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Wravex Innovation",
  description: "Get in touch with Wravex Innovation to discuss your next software project, custom AI solution, or business automation needs.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
