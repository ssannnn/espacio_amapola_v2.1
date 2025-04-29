"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = ["Inicio", "Propuestas", "Testimonios", "Sobre mí", "Preguntas Frecuentes", "Contacto"]

  const scrollToSection = (section: string) => {
    setIsOpen(false)

    // If it's the Services item, navigate directly to the services page
    if (section.toLowerCase() === "propuestas") {
      window.location.href = "/services"
      return
    }

    // Map Spanish section names to English IDs
    const sectionMap: Record<string, string> = {
      inicio: "home",
      propuestas: "services",
      "sobre mí": "about",
      testimonios: "testimonials",
      preguntas: "faq",
      contacto: "contact",
    }

    const sectionId = sectionMap[section.toLowerCase()] || section.toLowerCase()

    // Check if we're on the home page
    const isHomePage = window.location.pathname === "/"

    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on another page, navigate to home page with hash
      window.location.href = `/#${sectionId}`
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed left-0 top-0 z-40 w-full ${
          scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
        } transition-all duration-300`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex items-center gap-2 text-2xl text-orange-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-2">
              {/* Logo container that scales with text size */}
              <div className="relative flex h-auto w-auto items-center">
                <Image
                  src="/logo_s.png"
                  alt="logo"
                  width="24"
                  height="24"                   
                  className="h-[1.2em] w-[1.2em]"
                  aria-hidden="true"                     
                /> 
              </div>
              <span className="hidden md:block md:text-xl font-display font-light tracking-wide">Espacio Amapola</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                className="relative font-sans text-neutral-700 transition-colors hover:text-orange-500"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
              >
                {item}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          <motion.button
            className="relative z-50 block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="relative h-10 w-10">
              <motion.span
                className="absolute left-1 top-3 block h-0.5 w-8 bg-orange-500"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4 : 0 }}
              />
              <motion.span
                className="absolute left-1 top-5 block h-0.5 w-8 bg-orange-500"
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.span
                className="absolute left-1 top-7 block h-0.5 w-8 bg-orange-500"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4 : 0 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 flex items-center justify-center overflow-hidden bg-gradient-to-b from-orange-50 to-white"
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5 }}
          >
            {/* Decorative elements */}
            <motion.div
              className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-orange-200 opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, -20, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-orange-300 opacity-20"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 30, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/3 h-24 w-24 rounded-full bg-orange-400 opacity-10"
              animate={{
                scale: [1, 1.4, 1],
                x: [0, 20, 0],
                y: [0, -30, 0],
              }}
              transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
            />

            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                {/*SVG here to match with header logo */}
                <Image
                  src="/logo_s.png"
                  alt="logo"
                  width="24"
                  height="24"                   
                  className="h-[1.2em] w-[1.2em]"
                  aria-hidden="true"                     
                /> 
              </div>
            </motion.div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                className="flex flex-col items-center space-y-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.3 }}
                  >
                    <motion.button
                      className="relative text-3xl text-neutral-800 transition-colors hover:text-orange-500 font-display tracking-wide"
                      onClick={() => scrollToSection(item)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                      <motion.div
                        className="absolute -bottom-2 left-0 h-1 w-0 bg-orange-500"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-12 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {["facebook", "instagram"].map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-colors hover:bg-orange-200"
                      aria-label={`Follow us on ${social}`}
                    >
                      {social === "facebook" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      )}
                      {social === "instagram" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                        </svg>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
