"use client"

import * as React from "react"
import { SidebarContext } from "@/components/ui/sidebar"

/**
 * Returns the SidebarContext value.
 * Must be used within a <SidebarProvider>.
 */
export default function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }
  return context
}
