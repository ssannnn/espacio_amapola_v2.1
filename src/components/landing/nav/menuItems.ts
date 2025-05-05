import type { SectionItem } from "@/src/app/sections";
import { sections } from "@/src/app/sections";

/**
 * Bolts together label, href, and id for every nav item.
 * “services” becomes a full-page link; others are in-page anchors.
 */

export interface MenuItem {
  id: string;
  label: string;
  href: string;
}

export const menuItems: MenuItem[] = sections.map(({ id, label }: SectionItem): MenuItem => {
  const href = id === "propuestas" ? "/services" : `/#${id}`;
  return { id, label, href };
});
