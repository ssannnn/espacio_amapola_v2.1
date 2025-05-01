"use client"

import * as React from "react"
import { CarouselContext } from "@/components/ui/carousel"

/**
 * Returns the CarouselContext value.
 * Must be used within a <Carousel /> component.
 */
export default function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}
