"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { menuItems } from "./menuItems"

const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL

const instagramHref = instagramUrl

export default function MobileMenu({
  isOpen,
  onSelect,
}: {
  isOpen: boolean
  onSelect: () => void
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 h-screen w-screen z-30
            flex flex-col justify-between items-center
            bg-gradient-to-b from-orange-50 to-white"
          initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
          animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
          exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative Circles */}
          <motion.div
            className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-orange-200 opacity-20"
            animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-orange-300 opacity-20"
            animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 h-24 w-24 rounded-full bg-orange-400 opacity-10"
            animate={{ scale: [1, 1.4, 1], x: [0, 20, 0], y: [0, -30, 0] }}
            transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
          />

          {/* Logo */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Image src="/logo_s.png" alt="logo" width={24} height={24} />
            </div>
          </motion.div>

          {/* Links */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
            {menuItems.map(({ id, label, href }) => (
              <motion.div key={id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={href} scroll={true} onClick={onSelect}>
                  <span className="relative text-3xl text-neutral-600 font-display tracking-wide">
                    {label}
                    <span
                      className="absolute -bottom-2 left-0 h-1 w-0 bg-orange-500 transition-all duration-300"
                    />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Icons */}
          <motion.div
            className="mb-40 flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Instagram */}
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link href={instagramHref} aria-label="instagram" className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-colors hover:bg-orange-200">
              <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
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
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
