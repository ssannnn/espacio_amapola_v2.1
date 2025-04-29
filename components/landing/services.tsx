
"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Prenatal",
    description:
      "Propuestas integrales para acompañarte durante el embarazo, prepararte para el parto y conectar con tu bebé.",
    image: "/prenatal_1.webp",
  },
  {
    title: "En Pareja",
    description: "Preparación para recibir a tu bebé junto a tu pareja o acompañante, fortaleciendo el vínculo.",
    image: "/en_pareja_1.webp",
  },
  {
    title: "Postparto",
    description:
      "Apoyo especializado para el período posterior al nacimiento, enfocado en la lactancia y el destete.",
    image: "/postparto_1.webp",
  },
]

export default function Services() {
  const containerRef = useRef(null)

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-neutral-50 py-12 md:py-20"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mt-4 text-4xl tracking-tight text-neutral-900 sm:text-5xl">Acompañamiento Integral</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Te acompaño durante todo el proceso, desde el embarazo hasta el postparto, con servicios personalizados
            disponibles online y presenciales
          </p>
        </div>

        {/* Main featured card with larger integrated mini-map */}
        <div className="group relative mb-12">
          <div className="relative h-96 overflow-hidden rounded-3xl shadow-xl">
            {/* Background image */}
            <Image
              src="/place_1.webp"
              alt="Acompañamiento Integral"
              fill
              className="object-cover"
            />

            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />

            <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
              <div className="flex justify-between">
                <h3 className="text-2xl md:text-3xl">Habitando mi Cuerpo</h3>

                {/* Location indicator */}
                <div className="flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Arenales 1900, CABA</span>
                </div>
              </div>

              {/* Adjusted layout for larger map */}
              <div className="flex flex-col gap-6 md:flex-row md:items-end">
                {/* Content area - reduced width to accommodate larger map */}
                <div className="flex-1 md:max-w-[50%]">
                  <p className="mb-6 text-base md:text-lg text-neutral-200">
                    Trabajamos con movimientos suaves y conscientes para aliviar tensiones, desde la esferodinamia, el
                    método de Frida Kaplan y visualizaciones, para conectar con tu bebé y preparar tu cuerpo para el
                    trabajo de parto y parto.
                  </p>
                  <button className="rounded-full bg-orange-500 px-6 py-3 text-white hover:bg-orange-600">
                    <Link href="/services">Conocer Más</Link>
                  </button>
                </div>

                {/* Larger mini-map placeholder */}
                <div className="hidden md:block h-[220px] w-full flex-shrink-0 overflow-hidden rounded-xl border-2 border-white/20 shadow-lg md:h-[260px] md:w-[400px]">
                  <div className="relative h-full w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.3621877118485!2d-58.39700882345722!3d-34.595001857039435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccabdf541ca19%3A0xc3896c970fe9063a!2sArenales%201900%2C%20C1216%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1745770561898!5m2!1ses!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación: Arenales 1900, CABA"
                      className="absolute inset-0"
                    ></iframe>

                    {/* Overlay with location label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-center text-sm text-white backdrop-blur-sm z-10">
                      <div className="font-medium">Arenales al 1900, CABA</div>
                      <div className="mt-1 text-xs text-neutral-300">Sesiones semanales disponibles</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three service cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="relative h-80 overflow-hidden rounded-3xl shadow-lg">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <h3 className="text-xl md:text-2xl">{service.title}</h3>
                  <div>
                    <p className="mb-4 text-neutral-200">{service.description}</p>
                    <button className="rounded-full bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600">
                      <Link href={`/services#${service.title.toLowerCase().replace(" ", "-")}`}>Conocer Más</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

