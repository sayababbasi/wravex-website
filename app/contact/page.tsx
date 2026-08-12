import { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact Axiora Software | Let's Build Something Remarkable",
  description: "Get in touch with Axiora Software to discuss AI solutions, software development, digital products, web and mobile applications, and business automation."
}

export default function ContactPage() {
  return <ContactClient />
}
