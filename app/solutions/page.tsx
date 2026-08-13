import { Metadata } from "next"
import { SolutionsClient } from "./SolutionsClient"

export const metadata: Metadata = {
  title: "Solutions",
  description: "Discover tailored software and AI solutions designed specifically for your industry's unique challenges.",
}

export default function SolutionsPage() {
  return <SolutionsClient />
}
