"use client"
import * as React from 'react'
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion'

export function CustomCursor() {
  const shouldReduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isMounted, setIsMounted] = React.useState(false)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  const [isHovering, setIsHovering] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps, react-hooks/set-state-in-effect
    setIsMounted(true)
    if (shouldReduceMotion) return;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [mouseX, mouseY, shouldReduceMotion])

  if (!isMounted || shouldReduceMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-brand-cyan/80 backdrop-blur-sm border border-brand-navy rounded-full pointer-events-none z-[10000] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%"
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        opacity: 1
      }}
      transition={{ duration: 0.2 }}
    />
  )
}
