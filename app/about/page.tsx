import { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Axiora Software, our philosophy, and how we build resilient digital products."
}

export default function AboutPage() {
  return <AboutClient />
}
