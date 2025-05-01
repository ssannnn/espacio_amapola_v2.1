"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href="/" scroll={true} className="flex items-center gap-2">
        <Image src="/logo_s.png" alt="logo" width={24} height={24} className="h-[1.6em] w-[1.6em]" aria-hidden="true" />
        <span className="hidden md:block font-display font-light tracking-wide text-xl text-orange-500">Espacio Amapola</span>
      </Link>
    </motion.div>
  )
}
