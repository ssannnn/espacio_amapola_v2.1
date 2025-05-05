"use client";

import { motion } from "framer-motion";

export default function Hamburger({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <motion.button
      className="relative z-50 block md:hidden"
      onClick={toggle}
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
  );
}
