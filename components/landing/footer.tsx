"use client"

import { useState } from "react"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate subscription
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubscribed(true)
      setEmail("")
    }, 1000)
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-orange-100/30 py-10 md:py-16 text-neutral-700">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #f97316 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-48 h-48 rounded-full bg-orange-200 opacity-20"></div>
        <div className="absolute top-1/3 -left-20 w-64 h-64 rounded-full bg-orange-200 opacity-10"></div>
        <div className="absolute -bottom-20 right-10 w-40 h-40 rounded-full bg-orange-100 opacity-20"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and tagline */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              {/* SVG logo matching header */}
              <Image
                src="/logo_s.png"
                alt="logo"
                width="32"
                height="32"                   
                className="h-[1.2em] w-[1.2em]"
                aria-hidden="true"                     
                /> 
            </div>
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-2 text-2xl text-orange-500 font-display tracking-wide"
          >
            Espacio Amapola
          </motion.h3>
          <motion.p className="max-w-md text-lg font-sans">
            Brindando apoyo personalizado para madres embarazadas y nuevos padres
          </motion.p>
        </div>

        {/* Main content grid */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <h4 className="mb-4 text-xl text-neutral-900 font-display tracking-wide">Sobre Mi</h4>
            <p className="mb-6 font-sans">
              Estoy dedicada a brindar apoyo personalizado durante todo tu
              camino de embarazo y más allá.
            </p>
            <div className="flex space-x-4">
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
            </div>
          </motion.div>

          {/* Quick links section with visual indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="mb-4 text-xl text-neutral-900 font-display tracking-wide">Enlaces Rápidos</h4>
            <ul className="space-y-3 font-sans">
              {[
                { name: "Inicio", path: "/" },
                { name: "Servicios", path: "/services" },
                { name: "Sobre Mí", path: "/#about" },
                { name: "Testimonios", path: "/#testimonials" },
                { name: "Preguntas", path: "/#faq" },
                { name: "Contacto", path: "/#contact" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href={item.path}
                    className="group flex items-center text-neutral-700 transition-colors hover:text-orange-500"
                  >
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-orange-300 transition-all duration-300 group-hover:h-2 group-hover:w-2 group-hover:bg-orange-500"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter section with improved visual design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="mb-4 text-xl text-neutral-900 font-display tracking-wide">Newsletter</h4>
            <p className="mb-4 font-sans">Suscríbete para recibir las últimas actualizaciones y recursos.</p>
            {isSubscribed ? (
              <motion.div
                className="w-full rounded-xl bg-gradient-to-r from-green-50 to-green-100 p-6 text-green-700 font-sans"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-500">
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <p className="text-neutral-900">¡Gracias por suscribirte!</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full space-y-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 rounded-lg border-2 border-neutral-200 bg-white px-4 py-2 pr-12 text-neutral-700 transition-all duration-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 font-sans"
                    required
                  />
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-orange-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-white hover:from-orange-600 hover:to-orange-700 font-sans"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Suscribiendo...</span>
                    </div>
                  ) : (
                    "Suscribirse"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom section with copyright and visual divider */}
        <div className="relative mt-16 pt-8">
          <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
          <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0 font-sans">
            <p className="text-sm">&copy; {new Date().getFullYear()} Espacio Amapola. Todos los derechos reservados.</p>
            <div className="flex space-x-6 text-sm text-neutral-500">
              {["Política de Privacidad", "Términos de Servicio", "Política de Cookies"].map((item, index) => (
                <Link key={index} href="#" className="hover:text-orange-500">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
