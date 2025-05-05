"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Borderless images with varied sizes and asymmetrical distribution
  const images = [
    {
      src: "/hero_11.webp",
      alt: "Hijo con madre embarazada",
      color: "from-orange-300/40 to-transparent",
      shape: "rounded-xl",
    },
    {
      src: "/hero_44.webp",
      alt: "Recien nacido",
      color: "from-orange-400/40 to-transparent",
      shape: "rounded-full",
    },
    {
      src: "/hero_33.webp",
      alt: "Bebe",
      color: "from-orange-500/40 to-transparent",
      shape: "rounded-2xl",
    },
    {
      src: "/hero_22.webp",
      alt: "Madre amamantando",
      color: "from-orange-600/40 to-transparent",
      shape: "rounded-xl",
    },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-50 py-12 md:py-20"
    >
      {/* Background elements - simplified */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 top-0 h-full w-full">
          <motion.div
            className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-orange-200 opacity-30 blur-3xl"
            style={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
          />
          <motion.div
            className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-orange-100 opacity-40 blur-3xl"
            style={{ x: mousePosition.x, y: mousePosition.y }}
          />
        </div>
      </div>

      <motion.div
        className="container relative z-10 mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8"
        style={{ y, opacity }}
      >
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="mb-6 text-5xl leading-tight tracking-tight text-neutral-800 sm:text-6xl md:text-7xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span
              className="block"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Abrazá
            </motion.span>
            <motion.span
              className="block"
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              tu{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-orange-500">
                  maternidad
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 z-0 h-3 w-full text-orange-200"
                  viewBox="0 0 100 12"
                  fill="currentColor"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  <path d="M0,10 C30,4 70,4 100,10 L100,12 L0,12 Z"></path>
                </motion.svg>
              </span>
            </motion.span>
          </motion.h1>

          <motion.p
            className="mb-8 max-w-xl text-base text-neutral-700 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Te acompaño a transitar el camino hacia el encuentro con tu bebé y
            los primeros días en casa, ofreciéndote herramientas prácticas para
            conectar con vos misma, con tu bebé y tu pareja.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Button
              className="w-fit rounded-full bg-orange-500 px-6 py-3 text-white hover:bg-orange-600"
              asChild
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reservar un lugar
              </motion.a>
            </Button>
            <Button
              variant="outline"
              className="w-fit rounded-full border-2 border-orange-500 px-6 py-3 text-orange-500 hover:bg-orange-50"
              asChild
            >
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quiero saber más
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile view - static grid layout */}
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${image.shape} shadow-md`}
              style={{ aspectRatio: "1/1" }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />

                {/* Static gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${image.color} opacity-70`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-orange-500 p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <motion.div className="h-2 w-1 rounded-full bg-orange-500" />
        </motion.div>
        <p className="mt-2 text-center text-sm text-neutral-500">Scroll Down</p>
      </motion.div>
    </section>
  );
}
