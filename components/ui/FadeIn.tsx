"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className,
  direction = "up"
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion()

  const getDirectionOffset = () => {
    switch (direction) {
      case "up": return { y: 20, x: 0 }
      case "down": return { y: -20, x: 0 }
      case "left": return { x: 20, y: 0 }
      case "right": return { x: -20, y: 0 }
      case "none": return { x: 0, y: 0 }
    }
  }

  const initial = shouldReduceMotion 
    ? { opacity: 0 } 
    : { opacity: 0, ...getDirectionOffset() }

  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
