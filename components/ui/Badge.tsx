import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "cyan" | "neutral";
}

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-colors",
        {
          "bg-brand-blue/10 text-brand-blue": variant === "blue",
          "bg-brand-cyan-light/20 text-brand-cyan": variant === "cyan",
          "bg-gray-100 text-text-secondary": variant === "neutral",
        },
        className
      )}
      {...props}
    />
  )
}
