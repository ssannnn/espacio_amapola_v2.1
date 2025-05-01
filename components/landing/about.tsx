"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function About() {
  const containerRef = useRef(null)

  return (
    <section id="about" ref={containerRef} className="relative overflow-hidden bg-white py-12 md:py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-orange-50/30 to-orange-100/20" />

      {/* Decorative patterns */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #f97316 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
              Sobre mi
            </span>
            <h2 className="mt-4 text-4xl tracking-tight text-neutral-900 sm:text-5xl">Hola! Soy Rochi</h2>
          </div>

          {/* Main content grid */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Image column with subtle animations on desktop */}
            <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center">
              <div className="relative aspect-square w-full max-w-md">
                {/* Static decorative circles with subtle pulse animation on desktop */}
                <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-orange-200 opacity-60 md:animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-orange-300 opacity-50 md:animate-[pulse_5s_ease-in-out_infinite]" />

                {/* Main image with container */}
                <div className="absolute left-1/2 top-1/2 aspect-square w-[80%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-xl">
                  <div className="relative h-full w-full">
                    <Image
                      src="/profile_3.webp"
                      alt="Rochi - Doula y Puericultora"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Static decorative elements with subtle float animation on desktop */}
                <div className="absolute left-[15%] top-[30%] h-4 w-4 rounded-full bg-orange-200 opacity-70 md:animate-[bounce_6s_ease-in-out_infinite]" />
                <div className="absolute right-[20%] top-[25%] h-6 w-6 rounded-full bg-orange-300 opacity-60 md:animate-[bounce_7s_ease-in-out_infinite]" />
                <div className="absolute bottom-[25%] left-[25%] h-5 w-5 rounded-full bg-orange-400 opacity-60 md:animate-[bounce_5s_ease-in-out_infinite]" />
                <div className="absolute bottom-[30%] right-[15%] h-3 w-3 rounded-full bg-orange-500 opacity-70 md:animate-[bounce_8s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* Content column with subtle fade-in animations on desktop */}
            <div className="flex flex-col justify-center">
              {/* Quote card with subtle hover effect on desktop */}
              <div className="mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-orange-100/80 to-orange-50/80 p-6 shadow-sm backdrop-blur-sm md:transition-all md:duration-500 md:hover:shadow-md">
                <div className="relative">
                  <svg
                    className="absolute -left-2 -top-2 h-8 w-8 text-orange-300 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-lg font-medium text-neutral-800 md:text-xl">
                    Soy doula y puericultora, dedicada a acompañar familias en el camino de la maternidad y paternidad.
                  </p>
                </div>
              </div>

              {/* Rest of the content remains the same */}
              <div className="space-y-5">
                <p className="text-base text-neutral-700 md:text-lg">
                  Pienso que abrazar la maternidad es abrazarse a uno mismo, al bebé, a la familia, con lo que uno es,
                  quiere y puede dar. Agradezco haberme encontrado con este mundo y tener la posibilidad de acompañar a
                  las familias en su camino.
                </p>

                <p className="text-base text-neutral-700 md:text-lg">
                  Desde muy joven me sentí atraída por el mundo de la maternidad. Crecí en una familia numerosa, rodeada
                  de embarazos y nacimientos, y me fascinaba comprender lo que vivían las mujeres en esa etapa tan
                  transformadora.
                </p>

                {/* Espacio Amapola card with subtle hover effect on desktop */}
                <div className="relative my-6 overflow-hidden rounded-xl bg-gradient-to-r from-orange-100/80 to-orange-50/60 p-6 backdrop-blur-sm md:transition-all md:duration-500 md:hover:shadow-md md:hover:bg-gradient-to-r md:hover:from-orange-100/90 md:hover:to-orange-50/70">
                  {/* Decorative element with subtle movement on desktop */}
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-orange-200 opacity-30 blur-xl md:animate-[pulse_6s_ease-in-out_infinite]" />

                  <h3 className="mb-2 text-xl font-medium text-neutral-900">Espacio Amapola</h3>
                  <p className="text-neutral-700">
                    Con el tiempo, mi inquietud se convirtió en vocación. Decidí formarme para acompañar a las familias
                    con conocimientos sólidos, escucha atenta y un enfoque amoroso. Así nació Espacio Amapola, un lugar
                    donde cada mujer y familia puede encontrar apoyo en su propio camino hacia la maternidad.
                  </p>
                </div>

                <p className="text-base text-neutral-700 md:text-lg">
                  Hoy, mi propósito es brindar herramientas y contención para que cada embarazo, nacimiento y posparto
                  se viva de manera consciente, segura y amorosa.
                </p>

                {/* CTA Button with enhanced hover effect on desktop */}
                <div className="mt-8">
                  <Button
                    className="rounded-full bg-orange-500 px-6 py-6 text-white hover:bg-orange-600 md:transition-all md:duration-300 md:hover:scale-105"
                    asChild
                  >
                    <a href="/services" className="flex items-center gap-2">
                      <span>Conoce las propuestas</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
