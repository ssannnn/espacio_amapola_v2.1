"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { menuItems } from "./menuItems"

export default function DesktopMenu({ onSelect }: { onSelect?: () => void }) {
  const handleClick = () => onSelect?.()

  return (
    <div className="hidden md:flex md:items-center md:space-x-8">
      {menuItems.map(({ id, label, href }) => (
        <motion.button
          key={id}
          className="relative font-sans text-neutral-700 transition-colors hover:text-orange-500"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          <Link href={href} scroll={false}>
            {label}
            <span
              className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500"
              style={{ transition: "width 0.3s" }}
            />
          </Link>
        </motion.button>
      ))}
    </div>
  )
}
