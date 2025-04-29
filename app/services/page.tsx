"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Add imports for Navigation, Footer, and WhatsAppButton at the top of the file
import Navigation from "@/components/landing/navigation"
import Footer from "@/components/landing/footer"
import WhatsAppButton from "@/components/landing/whatsapp-button"
import ScrollToTop from "@/components/landing/scroll-to-top"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("prenatal")
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: false, amount: 0.2 })

  // Service data
  const services = [
    {
      id: "prenatal",
      title: "Prenatal",
      subtitle: "Acompañamiento durante el embarazo",
      description:
        "Propuestas integrales para acompañarte durante el embarazo, prepararte para el parto y conectar con tu bebé a través de diferentes técnicas y recursos.",
      image: "/prenatal_1.webp",
      features: [
        {
          title: "Información Personalizada",
          description:
            "Cada embarazo es único. Creo planes de cuidado individualizados adaptados a tus necesidades específicas, preferencias y antecedentes de salud.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          ),
        },
        {
          title: "Movimiento y Respiración",
          description:
            "Aprende técnicas de movimiento y respiración que te ayudarán durante el trabajo de parto y a conectar con tu bebé durante el embarazo.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M18 8a5 5 0 0 0-10 0v7h10Z"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="M8 20v2"></path>
              <path d="M16 20v2"></path>
              <path d="M8 8V7a4 4 0 0 1 8 0v1"></path>
            </svg>
          ),
        },
        {
          title: "Asesoría en Lactancia",
          description:
            "Recibe orientación experta sobre lactancia, incluyendo técnicas de agarre, posiciones y cómo identificar señales de hambre en tu bebé.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 1.5.5 3.5 2 3.5 1.5 0 2-1.5 2-3.5 0 2 .5 3.5 2 3.5s2-1.5 2-3.5c0 2 .5 3.5 2 3.5s2-1.5 2-3.5c0 2 .5 3.5 2 3.5 1.5 0 2-2 2-3.5a7 7 0 0 0-7-7Z"></path>
              <path d="M13.5 11.5c-.28.56-2.67 1.75-3.5 1.5-.83-.25-1.22-.99-1-2 .22-1.01 1.67-2 3-2 1.33 0 2.28.99 2.5 2 .22 1.01-.47 2-1 2Z"></path>
              <path d="M13.5 15.5c-.28.56-2.67 1.75-3.5 1.5-.83-.25-1.22-.99-1-2 .22-1.01 1.67-2 3-2 1.33 0 2.28.99 2.5 2 .22 1.01-.47 2-1 2Z"></path>
              <path d="M13.5 19.5c-.28.56-2.67 1.75-3.5 1.5-.83-.25-1.22-.99-1-2 .22-1.01 1.67-2 3-2 1.33 0 2.28.99 2.5 2 .22 1.01-.47 2-1 2Z"></path>
            </svg>
          ),
        },
        {
          title: "Preparación Integral",
          description:
            "Preparación completa para el trabajo de parto, parto y la vuelta a casa, con información sobre la fisiología del cuerpo y la importancia del entorno.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path>
              <path d="M8 7h6"></path>
              <path d="M8 11h8"></path>
              <path d="M8 15h6"></path>
            </svg>
          ),
        },
      ],
      pricing: [
        {
          title: "Camino al Encuentro",
          //price: "$140.000",
          description: "Propuesta integral para prepararse para el trabajo de parto, parto y la vuelta a casa",
          included: [
            "4 encuentros de 1 hora",
            "Frecuencia semanal",
            "Información sobre fisiología del cuerpo",
            "Recursos de movimiento y respiración",
            "Disponible online o a domicilio en zona norte, CABA",
          ],
        },
        {
          title: "Habitando mi Cuerpo",
          //price: "$130.000",
          description: "Movimientos suaves y conscientes para aliviar tensiones y preparar tu cuerpo",
          included: [
            "A partir de la semana 14 de embarazo",
            "Sesiones de 1 hora y 15 minutos",
            "Frecuencia semanal",
            "Esferodinamia y método de Frida Kaplan",
            "Visualizaciones para conectar con tu bebé",
            "Ubicación: Arenales al 1900, CABA",
            "También disponible online",
          ],
          highlighted: true,
        },
        {
          title: "El Arte de Amamantar",
          //price: "$35.000",
          description: "Charla sobre lactancia y técnicas de amamantamiento",
          included: [
            "1 o 2 encuentros",
            "Duración de 1 hora",
            "Cómo lograr una buena prendida",
            "Identificación de señales de hambre",
            "Posiciones y producción de leche",
            "Beneficios de amamantar",
            "Disponible online o a domicilio en zona norte, CABA",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Cuándo debo comenzar con la preparación prenatal?",
          answer:
            "Lo ideal es comenzar en el segundo trimestre, alrededor de la semana 14-20 de embarazo, para tener tiempo suficiente para integrar las técnicas y la información. Sin embargo, puedes comenzar en cualquier momento del embarazo.",
        },
        {
          question: "¿Puedo asistir con mi pareja?",
          answer:
            "¡Absolutamente! De hecho, tenemos propuestas específicas para parejas. La participación de tu pareja o acompañante es muy valiosa para el proceso.",
        },
        {
          question: "¿Las sesiones son presenciales u online?",
          answer:
            "Ofrecemos ambas modalidades. Las sesiones pueden ser online o presenciales en tu domicilio si estás cerca de Recoleta, CABA. El plan 'Habitando mi Cuerpo' tiene un espacio específico en Ayacucho y Juncal, CABA.",
        },
        {
          question: "¿Qué debo llevar a las sesiones presenciales?",
          answer:
            "Para las sesiones presenciales, recomendamos ropa cómoda que te permita moverte con libertad. Para 'Habitando mi Cuerpo', nosotros proporcionamos todos los elementos necesarios como pelotas y otros materiales.",
        },
      ],
      testimonial: {
        quote:
            "No duden en regalarse este espacio, es un mimo y una lindísima forma de transitar el embarazo. Para mí fue de quietud y encuentro. Encuentro con mi bebé, con mi cuerpo cambiante, conmigo misma. Rochi habilita este espacio de manera dulce y suave, compartiendo su conocimiento sin imponer. Su acompañamiento me dio mucha tranquilidad y los movimientos que hicimos ayudaron a calmar los dolores del cuerpo propios de esta etapa.",
        name: "Justi, Nico y Simón",
        image: "/chu_simon.webp",
      },
    },
    {
      id: "pareja",
      title: "En Pareja",
      subtitle: "Preparación para recibir a tu bebé junto a tu acompañante",
      description:
        "Propuestas diseñadas para que junto a tu pareja o acompañante se preparen para la llegada del bebé, fortaleciendo el vínculo y aprendiendo juntos sobre el proceso.",
      image: "/en_pareja_1.webp",
      features: [
        {
          title: "Preparación Conjunta",
          description:
            "Aprenderán juntos sobre el proceso de parto y cómo pueden apoyarse mutuamente durante este momento tan especial.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          ),
        },
        {
          title: "Recursos Prácticos",
          description:
            "Técnicas de acompañamiento, masajes y posiciones que pueden utilizar durante el trabajo de parto para mayor comodidad.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          ),
        },
        {
          title: "Asesoría en Lactancia",
          description:
            "Información para que ambos comprendan el proceso de lactancia y cómo pueden colaborar para que sea exitoso.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 1.5.5 3.5 2 3.5 1.5 0 2-1.5 2-3.5 0 2 .5 3.5 2 3.5s2-1.5 2-3.5c0 2 .5 3.5 2 3.5s2-1.5 2-3.5c0 2 .5 3.5 2 3.5 1.5 0 2-2 2-3.5a7 7 0 0 0-7-7Z"></path>
              <path d="M13.5 11.5c-.28.56-2.67 1.75-3.5 1.5-.83-.25-1.22-.99-1-2 .22-1.01 1.67-2 3-2 1.33 0 2.28.99 2.5 2 .22 1.01-.47 2-1 2Z"></path>
            </svg>
          ),
        },
        {
          title: "Fortalecimiento del Vínculo",
          description:
            "Actividades para fortalecer el vínculo entre la pareja y con el bebé, preparándose emocionalmente para la llegada.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" x2="9.01" y1="9" y2="9"></line>
              <line x1="15" x2="15.01" y1="9" y2="9"></line>
            </svg>
          ),
        },
      ],
      pricing: [
        {
          title: "Camino al Encuentro",
          //price: "$140.000",
          description:
            "Propuesta integral para prepararse en pareja para el trabajo de parto, parto y la vuelta a casa",
          included: [
            "4 encuentros de 1 hora",
            "Frecuencia semanal",
            "Información sobre fisiología del cuerpo",
            "Recursos de movimiento y respiración",
            "Técnicas de acompañamiento para la pareja",
            "Disponible online o a domicilio en zona norte, CABA",
          ],
          highlighted: true,
        },
        {
          title: "El Arte de Amamantar",
          //price: "$35.000",
          description: "Charla sobre lactancia y técnicas de amamantamiento para ambos",
          included: [
            "1 o 2 encuentros",
            "Duración de 1 hora",
            "Cómo lograr una buena prendida",
            "Identificación de señales de hambre",
            "Posiciones y producción de leche",
            "Beneficios de amamantar",
            "Disponible online o a domicilio en zona norte, CABA",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Es necesario que mi pareja asista a todas las sesiones?",
          answer:
            "Lo ideal es que asista a todas las sesiones para aprovechar al máximo el programa, pero entendemos que a veces hay compromisos laborales u otras responsabilidades. Pueden coordinar la asistencia según sus posibilidades.",
        },
        {
          question: "¿Qué pasa si no tengo pareja pero quiero que me acompañe un familiar o amigo/a?",
          answer:
            "¡Absolutamente bienvenido/a! El acompañante puede ser cualquier persona que estará contigo durante el parto y posparto: tu madre, hermana, amiga, doula, etc. Lo importante es que sea alguien con quien te sientas cómoda y que esté comprometido/a con el proceso.",
        },
        {
          question: "¿Cuál es el mejor momento para tomar estas sesiones?",
          answer:
            "Recomendamos comenzar en el segundo trimestre, idealmente entre las semanas 20-30 de embarazo, para tener tiempo de practicar e integrar las técnicas aprendidas.",
        },
        {
          question: "¿Las sesiones son presenciales u online?",
          answer:
            "Ofrecemos ambas modalidades. Las sesiones pueden ser online o presenciales en tu domicilio si estás cerca de Recoleta, CABA.",
        },
      ],
      testimonial: {
        quote:
          "Los encuentros personalizados con Rochi fueron lindísimos. Un espacio único para conectar con mi cuerpo y, sobre todo, con Elena, mi bebé. Destaco especialmente el rol y el lugar que le dio a mi marido, el papá de Elena. Los últimos encuentros compartidos fueron muy emotivos. Ojalá muchas familias tengan la suerte de ser acompañadas por ella.",
        name: "Muli, Juan y Elena",
        image: "/muli_juan.webp",
      },
    },
    {
      id: "postparto",
      title: "Postparto",
      subtitle: "Acompañamiento después del nacimiento",
      description:
        "Apoyo especializado para el período posterior al nacimiento, enfocado en la lactancia y el destete respetuoso, adaptado a las necesidades de cada familia.",
      image: "/postparto_1.webp",
      features: [
        {
          title: "Asesoría en Lactancia",
          description:
            "Apoyo personalizado para resolver dificultades como grietas, dolor o agarre, y ajustar las tomas para que sean más cómodas y efectivas.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 1.5.5 3.5 2 3.5 1.5 0 2-1.5 2-3.5 0 2 .5 3.5 2 3.5s2-1.5 2-3.5c0 2 .5 3.5 2 3.5s2-1.5 2-3.5c0 2 .5 3.5 2 3.5 1.5 0 2-2 2-3.5a7 7 0 0 0-7-7Z"></path>
              <path d="M13.5 11.5c-.28.56-2.67 1.75-3.5 1.5-.83-.25-1.22-.99-1-2 .22-1.01 1.67-2 3-2 1.33 0 2.28.99 2.5 2 .22 1.01-.47 2-1 2Z"></path>
              <path d="M13.5 15.5c-.28.56-2.67 1.75-3.5 1.5-.83-.25-1.22-.99-1-2 .22-1.01 1.67-2 3-2 1.33 0 2.28.99 2.5 2 .22 1.01-.47 2-1 2Z"></path>
              <path d="M13.5 19.5c-.28.56-2.67 1.75-3.5 1.5-.83-.25-1.22-.99-1-2 .22-1.01 1.67-2 3-2 1.33 0 2.28.99 2.5 2 .22 1.01-.47 2-1 2Z"></path>
            </svg>
          ),
        },
        {
          title: "Seguimiento Personalizado",
          description:
            "Seguimiento durante los 10 días posteriores a la consulta para resolver dudas y ajustar las recomendaciones según sea necesario.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          ),
        },
        {
          title: "Destete Respetuoso",
          description:
            "Acompañamiento para transitar el destete de forma respetuosa, con herramientas y estrategias adaptadas a las necesidades de cada familia.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M8 9h8"></path>
              <path d="M8 13h6"></path>
              <path d="M18 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12Z"></path>
            </svg>
          ),
        },
        {
          title: "Apoyo Emocional",
          description:
            "Soporte emocional durante el posparto y los procesos de lactancia y destete, reconociendo la importancia del bienestar emocional de la madre.",
          icon: (
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
              className="h-6 w-6 text-orange-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
          ),
        },
      ],
      pricing: [
        {
          title: "Asesorías en Lactancia",
          //price: "$60.000",
          description: "Espacio personalizado para acompañarte cuando ya nació tu bebé",
          included: [
            "Duración de 1 a 3 horas",
            "Resolución de dificultades como grietas o dolor",
            "Mejora del agarre y ajuste de tomas",
            "Seguimiento durante los siguientes 10 días",
            "Disponible online o a domicilio en zona norte, CABA",
          ],
          highlighted: true,
        },
        {
          title: "Destete",
          //price: "$45.000",
          description: "Acompañamiento para transitar el destete de forma respetuosa",
          included: [
            "1 encuentro de 1 hora",
            "Herramientas y estrategias personalizadas",
            "Adaptado a las necesidades de cada familia",
            "Seguimiento durante los siguientes 10 días",
            "Disponible online o a domicilio en zona norte, CABA",
          ],
        },
      ],
      faqs: [
        {
          question: "¿Cuándo debo buscar asesoría en lactancia?",
          answer:
            "Puedes buscar asesoría en cualquier momento de la lactancia, pero es especialmente útil en las primeras semanas después del nacimiento o cuando surgen dificultades como dolor, grietas, problemas de agarre o dudas sobre la producción de leche.",
        },
        {
          question: "¿Cuál es el mejor momento para iniciar el destete?",
          answer:
            "No hay un momento 'correcto' para el destete, es una decisión personal que depende de las necesidades y circunstancias de cada familia. Lo importante es que sea un proceso respetuoso y gradual. La asesoría te ayudará a encontrar el enfoque adecuado para tu situación específica.",
        },
        {
          question: "¿Las consultas son presenciales u online?",
          answer:
            "Ofrecemos ambas modalidades. Las consultas pueden ser online o presenciales en tu domicilio si estás cerca de Recoleta, CABA.",
        },
        {
          question: "¿En qué consiste el seguimiento posterior a la consulta?",
          answer:
            "Durante los 10 días posteriores a la consulta, estaré disponible para responder tus dudas por mensaje o videollamada breve, ajustar las recomendaciones según sea necesario y acompañarte en el proceso.",
        },
      ],
      testimonial: {
        quote:
          "Rochi me acompañó durante el embarazo y en mis primeros meses de lactancia. En momentos donde necesitaba contención y ayuda, siempre conté con ella, con su consejo, su aliento, su positividad y su calma.",
        name: "Male y Delfín",
        image: "/male_rufo.webp",
      },
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-50">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        ref={headerRef}
        className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-neutral-50 py-20 pt-32"
      >
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-orange-200 opacity-30 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-orange-100 opacity-40 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Propuestas
            </motion.div>
            <motion.h1
              className="mb-4 text-4xl text-neutral-900 sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Acompañamiento Integral
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-neutral-600 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Te acompaño durante todo el proceso, desde el embarazo hasta el postparto, con servicios personalizados
              para ti y tu familia
            </motion.p>

            <motion.div
              className="mt-8 flex justify-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="rounded-full bg-orange-500 px-6 py-3 text-white hover:bg-orange-600" asChild>
                <Link href="#contact">Reservar un lugar</Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-2 border-orange-500 px-6 py-3 text-orange-500 hover:bg-orange-50"
                asChild
              >
                <Link href="/">Volver al Inicio</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Service Navigation */}
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Tabs defaultValue="prenatal" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 rounded-full bg-orange-100/50 p-1">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-orange-500 data-[state=active]:shadow-sm"
                  >
                    {service.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Service Details Section */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className={`py-16 ${service.id === activeTab ? "block" : "hidden"}`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Service Header */}
            <div className="mb-16 grid gap-12 md:grid-cols-2">
              <motion.div
                className="flex flex-col justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-3xl text-neutral-900 sm:text-4xl">{service.title}</h2>
                <p className="mb-2 text-xl text-orange-500">{service.subtitle}</p>
                <p className="mb-6 text-lg text-neutral-600">{service.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="w-fit rounded-full bg-orange-500 px-6 py-3 text-white hover:bg-orange-600" asChild>
                    <Link href="#contact">Reservar Este Servicio</Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-fit rounded-full border-2 border-[#25D366] px-6 py-3 text-[#25D366] hover:bg-[#25D366]/10"
                    asChild
                  >
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>

                      </svg>
                      Consultar por WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[400px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </motion.div>
            </div>

            {/* Plan details cards Section */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8 text-center text-2xl text-neutral-900 sm:text-3xl">Opciones y Precios</h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {service.pricing.map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`flex flex-col rounded-xl bg-white p-6 shadow-md ${
                      plan.highlighted ? "border-2 border-orange-500 shadow-orange-100" : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
                  >
                    {plan.highlighted && (
                      <span className="mb-4 inline-block self-start rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
                        Destacado
                      </span>
                    )}
                    <h4 className="mb-2 text-xl text-neutral-900">{plan.title}</h4>
                    <p className="mb-4 text-3xl text-orange-500">{}</p>
                    <p className="mb-6 text-neutral-600">{plan.description}</p>
                    <div className="mb-6 flex-grow">
                      <p className="mb-2 font-medium text-neutral-900">Incluye:</p>
                      <ul className="space-y-2">
                        {plan.included.map((item, i) => (
                          <li key={i} className="flex items-start">
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
                              className="mr-2 h-5 w-5 shrink-0 text-orange-500"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="text-neutral-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button
                      className="mt-auto w-full rounded-full bg-orange-500 py-2 text-white hover:bg-orange-600"
                      asChild
                    >
                      <Link href="#contact">Seleccionar Plan</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Service Features */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8 text-center text-2xl text-neutral-900 sm:text-3xl">Qué Incluye</h3>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl bg-white p-6 shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      {feature.icon}
                    </div>
                    <h4 className="mb-2 text-lg text-neutral-900">{feature.title}</h4>
                    <p className="text-neutral-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>


            {/* Testimonial */}
            <motion.div
              className="mb-16 rounded-2xl bg-gradient-to-r from-orange-50 to-orange-100 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-8 flex justify-center">
                  {/* Larger avatar container with simple design */}
                  <div className="relative h-32 w-32 md:h-40 md:w-40 overflow-hidden rounded-full border-4 border-white shadow-md">
                    <Image
                      src={service.testimonial.image || "/placeholder.svg"}
                      alt={service.testimonial.name}
                      width={160}
                      height={160}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <p className="mb-6 text-lg md:text-xl italic leading-relaxed text-neutral-700">{service.testimonial.quote}</p>
                <div className="text-center">
                  <p className="text-orange-500">{service.testimonial.name}</p>
                </div>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8 text-center text-2xl text-neutral-900 sm:text-3xl">Preguntas Frecuentes</h3>
              <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-light text-neutral-900">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-neutral-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="rounded-2xl bg-orange-500 p-8 text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-2xl sm:text-3xl">¿Lista para comenzar?</h3>
              <p className="mb-6 text-lg text-white/90">
                Reserva una consulta para hablar sobre cómo puedo acompañarte en tu {service.title.toLowerCase()}.
              </p>
              <Button
                className="rounded-full bg-white px-8 py-3 text-lg font-light text-orange-500 hover:bg-white/90"
                asChild
              >
                <Link href="#contact">Reservar Consulta</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section id="contact" className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contacto
            </motion.div>
            <motion.h2
              className="mb-4 text-3xl text-neutral-900 sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Reserva un lugar
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-neutral-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              ¿Tienes preguntas o estás lista para reservar un servicio? Completa el formulario o contáctame
              directamente por WhatsApp para una respuesta más rápida.
            </motion.p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-5">
            {/* WhatsApp Contact Card - 2 columns */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-gradient-to-br from-[#25D366]/90 to-[#128C7E] p-8 text-white shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="rounded-full bg-white/20 p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="h-10 w-10"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>

                    </svg>
                  </div>
                </div>
                <h3 className="mb-4 text-center text-2xl">Contacto Directo</h3>
                <p className="mb-6 text-center">
                  Para una respuesta más rápida, contáctame directamente por WhatsApp. Estoy disponible para resolver
                  tus dudas y agendar tu consulta.
                </p>
                <div className="flex justify-center">
                  <Button className="w-full rounded-full bg-white px-6 py-3 text-[#25D366] hover:bg-white/90" asChild>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>

                      </svg>
                      Enviar Mensaje
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form - 3 columns */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <form className="grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-1">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-900">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-neutral-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                      placeholder="Tu nombre"
                      required
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-900">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-neutral-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                      placeholder="Tu email"
                      required
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-900">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-neutral-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-neutral-900">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-lg border border-neutral-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                      required
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="camino-encuentro">Camino al Encuentro</option>
                      <option value="habitando-cuerpo">Habitando mi Cuerpo</option>
                      <option value="arte-amamantar">El Arte de Amamantar</option>
                      <option value="asesoria-lactancia">Asesoría en Lactancia</option>
                      <option value="destete">Destete</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-900">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-lg border border-neutral-300 p-3 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                      placeholder="Cuéntame sobre tus necesidades y cualquier pregunta que tengas"
                      required
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      className="w-full rounded-lg bg-orange-500 px-6 py-3 text-center text-white hover:bg-orange-600"
                    >
                      Enviar Mensaje
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
