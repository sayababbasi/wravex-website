import { Metadata } from "next"
import CareersClient from "./CareersClient"

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Axiora Software team. We are looking for talented software engineers, designers, and AI specialists.",
}

export default function CareersPage() {
  return <CareersClient />
}
