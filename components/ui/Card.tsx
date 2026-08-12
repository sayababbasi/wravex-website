import * as React from "react"
import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export function Card({ className, hoverEffect = true, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-border-subtle bg-white p-6 md:p-8 transition-all duration-300",
        hoverEffect && "hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-navy/5",
        className
      )}
      {...props}
    />
  )
}
