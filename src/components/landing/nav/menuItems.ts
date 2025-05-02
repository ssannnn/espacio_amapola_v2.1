import { sections } from "@/src/app/sections"

/**
 * Bolts together label, href, and id for every nav item.
 * “services” becomes a full-page link; others are in-page anchors.
 */

export const menuItems = sections.map(({ id, label }) => {
  const href = id === "propuestas" ? "/services" : `/#${id}`
  return { id, label, href }
})
