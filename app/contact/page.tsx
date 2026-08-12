import { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Wravex Innovation to discuss your next software project."
}

export default function ContactPage() {
  return <ContactClient />
}
