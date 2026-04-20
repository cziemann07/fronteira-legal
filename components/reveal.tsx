"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ as: Tag = "div", children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Skip animation if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible")
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for paint-aligned reveal
            requestAnimationFrame(() => {
              node.classList.add("is-visible")
            })
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
