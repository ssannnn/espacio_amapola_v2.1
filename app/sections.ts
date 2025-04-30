import Hero         from "@/components/landing/hero"
import Services     from "@/components/landing/services"
import Testimonials from "@/components/landing/testimonials"
import About        from "@/components/landing/about"
import FAQ          from "@/components/landing/faq"
import Contact      from "@/components/landing/contact"

//Function to define homepage sections 
  
export interface SectionItem {
  id: string
  label: string
  Component: React.ComponentType
}

export const sections: SectionItem[] = [
  { id: "home",         label: "Inicio",              Component: Hero },
  { id: "services",     label: "Propuestas",          Component: Services },
  { id: "testimonials", label: "Testimonios",         Component: Testimonials },
  { id: "about",        label: "Sobre mí",            Component: About },
  { id: "faq",          label: "Preguntas Frecuentes", Component: FAQ },
  { id: "contact",      label: "Contacto",            Component: Contact },
]
