import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  theme?: "light" | "dark"
}

export function Logo({ className, theme = "light" }: LogoProps) {
  // ARCHITECTURE NOTE:
  // When the final Axiora Software logo asset is provided, 
  // replace this typographic rendering with a Next.js <Image /> component.
  return (
    <Link href="/" className={cn("flex flex-col justify-center select-none group", className)}>
      <span className={cn(
        "font-black tracking-tighter leading-none text-2xl md:text-[28px] transition-colors duration-300",
        theme === "dark" ? "text-white group-hover:text-brand-cyan" : "text-brand-navy-deep group-hover:text-brand-blue"
      )}>
        AXIORA
      </span>
      <span className={cn(
        "font-bold tracking-[0.2em] text-[7px] md:text-[8px] uppercase mt-1 transition-colors duration-300",
        theme === "dark" ? "text-gray-400 group-hover:text-white" : "text-text-secondary group-hover:text-brand-navy-deep"
      )}>
        Software
      </span>
    </Link>
  )
}
