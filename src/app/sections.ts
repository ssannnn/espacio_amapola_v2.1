import Hero from "@/src/components/landing/hero";
import Services from "@/src/components/landing/services";
import Testimonials from "@/src/components/landing/testimonials";
import About from "@/src/components/landing/about_v2";
import FAQ from "@/src/components/landing/faq";
import Contact from "@/src/components/landing/contact";

//Function to define homepage sections

export interface SectionItem {
  id: string;
  label: string;
  Component: React.ComponentType;
}

export const sections: SectionItem[] = [
  { id: "inicio", label: "Inicio", Component: Hero },
  { id: "propuestas", label: "Propuestas", Component: Services },
  { id: "testimonios", label: "Testimonios", Component: Testimonials },
  { id: "sobre_mi", label: "Sobre mí", Component: About },
  { id: "faq", label: "Preguntas Frecuentes", Component: FAQ },
  { id: "contacto", label: "Contacto", Component: Contact },
];
