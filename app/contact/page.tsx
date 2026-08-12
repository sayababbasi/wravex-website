import { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Axiora Software to discuss your next software project."
}

export default function ContactPage() {
  return <ContactClient />
}
