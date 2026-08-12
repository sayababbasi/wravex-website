import { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Nexora Digital Technologies, our philosophy, and how we build resilient digital products."
}

export default function AboutPage() {
  return <AboutClient />
}
