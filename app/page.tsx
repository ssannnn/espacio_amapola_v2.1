"use client"

import Hero from "@/components/landing/hero"
import Services from "@/components/landing/services"
import Testimonials from "@/components/landing/testimonials"
import About from "@/components/landing/about"
import FAQ from "@/components/landing/faq"
import Contact from "@/components/landing/contact"
import Footer from "@/components/landing/footer"
import Navigation from "@/components/landing/navigation"
import WhatsAppButton from "@/components/landing/whatsapp-button"
import ScrollToTop from "@/components/landing/scroll-to-top"
import { motion } from "framer-motion"

// Animation variants for desktop only
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-50">
      <Navigation />
      <WhatsAppButton />
      <div className="relative z-10 space-y-0">
        <Hero />

        {/* Services section with desktop-only animations */}
        <motion.div
          className="hidden md:block" // Only apply animation container on desktop
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Services />
        </motion.div>
        <div className="md:hidden">
          <Services />
        </div>

        {/* About section with desktop-only animations */}
        <motion.div
          className="hidden md:block" // Only apply animation container on desktop
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        <div className="md:hidden">
          <About />
        </div>

        {/* Testimonials section with desktop-only animations */}
        <motion.div
          className="hidden md:block" // Only apply animation container on desktop
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Testimonials />
        </motion.div>
        <div className="md:hidden">
          <Testimonials />
        </div>

        {/* FAQ section with desktop-only animations */}
        <motion.div
          className="hidden md:block" // Only apply animation container on desktop
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <FAQ />
        </motion.div>
        <div className="md:hidden">
          <FAQ />
        </div>

        {/* Contact section with desktop-only animations */}
        <motion.div
          className="hidden md:block" // Only apply animation container on desktop
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
        <div className="md:hidden">
          <Contact />
        </div>

        <Footer />
        <ScrollToTop />
      </div>
    </main>
  )
}
