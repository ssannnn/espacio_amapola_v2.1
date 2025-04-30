"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"

/**
 * Wraps a section so that:
 * - on desktop: it animates in via Framer Motion
 * - on mobile : it simply renders statically
 */
export function SectionWrapper({
  id,
  children,
}: {
  id: string
  children: ReactNode
}) {
  return (
    <>
      {/* Desktop: animated entrance */}
      <motion.section
        id={id}
        className="hidden md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {children}
      </motion.section>

      {/* Mobile: no animation */}
      <section id={id} className="md:hidden">
        {children}
      </section>
    </>
  )
}
