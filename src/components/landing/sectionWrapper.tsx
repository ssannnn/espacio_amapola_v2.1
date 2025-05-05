"use client";

import type React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/src/lib/motion";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
}

/**
 * Wraps a section so that:
 * - on desktop: it animates in via Framer Motion
 * - on mobile : it simply renders statically
 */
export function SectionWrapper({
  id,
  children,
}: SectionWrapperProps): React.JSX.Element {
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
  );
}
