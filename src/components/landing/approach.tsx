"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

export default function Approach() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const steps = [
    {
      number: 1,
      title: "Personalized Care Plans",
      description: "I create individualized care plans tailored to your specific needs and preferences.",
    },
    {
      number: 2,
      title: "Evidence-Based Practices",
      description: "My methods are grounded in the latest research and proven techniques in maternal care.",
    },
    {
      number: 3,
      title: "Continuous Support",
      description: "I provide ongoing support throughout your pregnancy journey and into early parenthood.",
    },
    {
      number: 4,
      title: "Flexible Consultation Options",
      description: "I offer both online virtual consultations and in-person sessions at my dedicated space.",
    },
  ]

  return (
    <section id="approach" ref={containerRef} className="relative min-h-screen overflow-hidden bg-white py-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute left-0 top-0 h-full w-1/3 bg-orange-50"
          style={{
            clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
          }}
        />
        <motion.div
          className="absolute right-0 top-0 h-full w-1/2 bg-neutral-50"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%, 20% 0)",
          }}
        />
      </div>

      <motion.div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8" style={{ y, opacity, scale }}>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            My Approach
          </motion.span>
          <motion.h2
            className="mt-4 text-4xl tracking-tight text-neutral-900 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            How I Support You
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I believe in holistic care that addresses the physical, emotional, and social needs of mothers
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative mb-16 last:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1 bg-orange-200"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: "100%" } : { height: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  />
                  <div className="ml-8">
                    <div className="relative">
                      <motion.div
                        className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.4 + index * 0.2 }}
                      >
                        {step.number}
                      </motion.div>
                      <h3 className="text-xl text-neutral-900">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-neutral-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 h-[600px] lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Larger video container */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-full w-full">
                <Image src="/placeholder.svg?height=800&width=800" alt="Approach video" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-white"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </motion.div>
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
