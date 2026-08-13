import { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Axiora Software's mission, our team, and how we build intelligent software solutions for modern businesses.",
}

export default function AboutPage() {
  return <AboutClient />
}
