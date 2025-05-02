"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { navSlide } from "@/src/lib/motion"
import useScrollPosition from "@/src/hooks/useScrollPosition"

import Logo from "./nav/logo"
import DesktopMenu from "./nav/desktopMenu"
import Hamburger from "./nav/hamburgerAnimation"
import MobileMenu from "./nav/mobileMenu"

export default function Navigation() {
  const scrolled = useScrollPosition(50)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      {...navSlide}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Logo />

        <DesktopMenu onSelect={() => setIsOpen(false)} />

        <Hamburger isOpen={isOpen} toggle={() => setIsOpen((o) => !o)} />
      </div>

      <MobileMenu isOpen={isOpen} onSelect={() => setIsOpen(false)} />
    </motion.nav>
  )
}
