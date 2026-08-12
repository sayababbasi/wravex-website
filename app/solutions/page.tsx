import { Metadata } from "next"
import { SolutionsClient } from "./SolutionsClient"

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore our comprehensive technological solutions designed to solve complex operational bottlenecks."
}

export default function SolutionsPage() {
  return <SolutionsClient />
}
