import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium tracking-tight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 disabled:opacity-50 disabled:pointer-events-none rounded-lg"
    
    const variants = {
      primary: "bg-brand-blue text-white hover:bg-brand-navy shadow-sm hover:shadow",
      secondary: "bg-white text-brand-navy-deep border border-border-subtle hover:bg-gray-50 shadow-sm",
      outline: "bg-transparent border border-border-subtle text-brand-navy-deep hover:border-brand-blue hover:text-brand-blue",
      ghost: "bg-transparent text-text-secondary hover:text-brand-navy-deep hover:bg-gray-50",
    }
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      default: "h-11 px-6 text-base",
      lg: "h-12 px-8 text-lg",
    }

    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
