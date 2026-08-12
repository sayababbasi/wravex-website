import { Metadata } from "next"
import CareersClient from "./CareersClient"

export const metadata: Metadata = {
  title: "Careers | Join Axiora Software",
  description: "Join our team of engineers and designers building the future of digital products and enterprise software."
}

export default function CareersPage() {
  return <CareersClient />
}
