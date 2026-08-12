import { Metadata } from "next"
import { ServicesClient } from "./ServicesClient"

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our software engineering, AI solutions, web development, mobile apps, and business automation capabilities."
}

export default function ServicesPage() {
  return <ServicesClient />
}
