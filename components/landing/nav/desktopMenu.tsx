"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuItems } from "./menuItems"

export default function DesktopMenu({ onSelect }: { onSelect?: () => void }) {
  const handleClick = () => onSelect?.()
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

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
          <Link href={href} scroll={href !== "/services"}>
            <a className={isActive(href) ? "text-orange-500 font-bold" : ""}>
              {label}
            </a>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
                isActive(href) ? "w-full bg-orange-500" : "w-0"
              }`}
            />
          </Link>
        </motion.button>
      ))}
    </div>
  )
}
