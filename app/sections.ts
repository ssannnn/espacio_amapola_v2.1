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
  { id: "inicio",         label: "Inicio",              Component: Hero },
  { id: "propuestas",     label: "Propuestas",          Component: Services },
  { id: "testimonios", label: "Testimonios",         Component: Testimonials },
  { id: "sobre_mi",        label: "Sobre mí",            Component: About },
  { id: "faq",          label: "Preguntas Frecuentes", Component: FAQ },
  { id: "contacto",      label: "Contacto",            Component: Contact },
]
