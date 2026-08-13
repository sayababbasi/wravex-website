import { Metadata } from "next"
import { ServicesClient } from "./ServicesClient"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our range of intelligent software services, including AI solutions, web and mobile development, and enterprise automation.",
}

export default function ServicesPage() {
  return <ServicesClient />
}
