"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { menuItems } from "./menuItems"

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
          className="fixed inset-0 z-30 flex items-center justify-center bg-gradient-to-b from-orange-50 to-white overflow-hidden"
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
            className="mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
              <Image src="/logo_s.png" alt="logo" width={24} height={24} />
            </div>
          </motion.div>

          {/* Links */}
          <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
            {menuItems.map(({ id, label, href }) => (
              <motion.div key={id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link href={href} scroll={false} onClick={onSelect}>
                  <span className="relative text-3xl text-neutral-800 hover:text-orange-500 font-display tracking-wide">
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
            className="mt-12 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {/* Facebook */}
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link href="#" aria-label="facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </motion.div>
            {/* Instagram */}
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Link href="#" aria-label="instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
