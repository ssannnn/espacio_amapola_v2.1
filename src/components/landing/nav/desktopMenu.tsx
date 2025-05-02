"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuItems } from "./menuItems"

// Wrap Next.js Link with Framer Motion to animate the <a> it renders
const MotionLink = motion(Link)

export default function DesktopMenu({ onSelect }: { onSelect?: () => void }) {
  const handleClick = () => onSelect?.()
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href

  return (
    <div className="hidden md:flex md:items-center md:space-x-8">
      {menuItems.map(({ id, label, href }) => (
        <MotionLink
          key={id}
          href={href}
          scroll={href !== "/services"}
          onClick={handleClick}
          className={`relative font-sans transition-colors ${
            isActive(href)
              ? "text-orange-500 font-bold"
              : "text-neutral-700 hover:text-orange-500"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 transition-all ${
              isActive(href) ? "w-full bg-orange-500" : "w-0"
            }`}
          />
        </MotionLink>
      ))}
    </div>
  )
}
