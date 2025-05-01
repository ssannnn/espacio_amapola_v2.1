"use client"

import Navigation from "@/components/landing/navigation"
import WhatsAppButton from "@/components/landing/whatsapp-button"
import ScrollToTop from "@/components/landing/scroll-to-top"
import Footer from "@/components/landing/footer"
import { sections } from "./sections"
import { SectionWrapper } from "@/components/landing/sectionWrapper"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-50">
      <Navigation />
      <WhatsAppButton />

      {sections.map(({ id, Component }) => (
        <SectionWrapper key={id} id={id}>
          <Component />
        </SectionWrapper>
      ))}

      <Footer />
      <ScrollToTop />
    </main>
  )
}
