"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href="/" scroll={false} className="flex items-center gap-2 text-2xl text-orange-500">
        <Image src="/logo_s.png" alt="logo" width={24} height={24} className="h-[1.2em] w-[1.2em]" />
        <span className="hidden md:block font-display font-light tracking-wide">Espacio Amapola</span>
      </Link>
    </motion.div>
  )
}
