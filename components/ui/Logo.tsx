import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  theme?: "light" | "dark"
}

export function Logo({ className, theme = "light" }: LogoProps) {
  return (
    <Link href="/" className={cn("flex flex-col justify-center select-none group", className)}>
      <div className={cn(
        "relative w-48 h-12 md:h-14 transition-all duration-300",
        theme === "dark" ? "brightness-[200%] grayscale" : ""
      )}>
        <Image 
          src="/logo.png" 
          alt="Axiora Software" 
          fill 
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  )
}
