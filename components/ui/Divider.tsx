import * as React from "react"
import { cn } from "@/lib/utils"

export type DividerProps = React.HTMLAttributes<HTMLHRElement>

export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      className={cn("w-full border-t border-border-subtle my-8", className)}
      {...props}
    />
  )
}
