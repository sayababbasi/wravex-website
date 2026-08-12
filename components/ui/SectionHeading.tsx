import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        alignment === "center" ? "text-center items-center" : "text-left items-start",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wider text-brand-blue uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight text-brand-navy-deep">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg md:text-xl text-text-secondary mt-2">
          {description}
        </p>
      )}
    </div>
  )
}
