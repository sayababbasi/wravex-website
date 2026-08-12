import { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nexora Digital Technologies to discuss your next software project."
}

export default function ContactPage() {
  return <ContactClient />
}
