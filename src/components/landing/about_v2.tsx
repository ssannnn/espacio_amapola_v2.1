"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";

interface Certification {
  institution: string;
  certification: string;
  logoUrl: string;
}

export default function About(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const certifications: Certification[] = [
    {
      institution: "FUNDALAM",
      certification: "Tecnicatura en Puericultura",
      logoUrl: "/fundalam.webp",
    },
    {
      institution: "NATAL",
      certification: "Doula",
      logoUrl: "/natal.webp",
    },
    {
      institution: "ISMA",
      certification: "Prof. en Nivel Inicial",
      logoUrl: "/isma.webp",
    },
    {
      institution: "EDULACTA",
      certification: "Master en Lactancia Materna",
      logoUrl: "/edulacta.webp",
    },
    {
      institution: "Escuela Hugo Ardiles",
      certification: "Terapeuta corporal",
      logoUrl: "/escuela-hugo-ardiles.webp",
    },
    {
      institution: "Paramana Doula Course",
      certification: "Doula",
      logoUrl: "/paramana-doula.webp",
    },
    {
      institution: "Método Frida Kaplan",
      certification: "Docente en el Método Frida Kaplan",
      logoUrl: "/frida-kaplan.webp",
    },
    {
      institution: "Psicología Perinatal Argentina",
      certification: "Formación en Salud Mental Perinatal",
      logoUrl: "/psicologia-prenatal.webp",
    },
    {
      institution: "Parto positivo",
      certification: "Prof. de HIPNOPARTO B",
      logoUrl: "/parto-positivo.webp",
    },
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-white py-12 md:py-20"
    >
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
            <h2 className="mt-4 text-4xl tracking-tight text-neutral-900 sm:text-5xl">
              Hola! Soy Rochi
            </h2>
          </div>

          {/* Main content grid - profile and text side by side */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            {/* Image column with subtle animations */}
            <div className="relative mx-auto flex h-full w-full max-w-md items-center justify-center">
              <div className="relative aspect-[4/5] w-full max-w-md">
                {/* Static decorative circles with subtle pulse animation on desktop */}
                <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-orange-200 opacity-60 md:animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-orange-300 opacity-50 md:animate-[pulse_5s_ease-in-out_infinite]" />

                {/* Main image with container - rectangular with XL border */}
                <div className="absolute left-1/2 top-1/2 aspect-[3/4] w-[80%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border-8 border-orange-100 shadow-xl">
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
                <div className="absolute left-[15%] top-[20%] h-4 w-4 rounded-full bg-orange-200 opacity-70 md:animate-[bounce_6s_ease-in-out_infinite]" />
                <div className="absolute right-[20%] top-[15%] h-6 w-6 rounded-full bg-orange-300 opacity-60 md:animate-[bounce_7s_ease-in-out_infinite]" />
                <div className="absolute bottom-[15%] left-[25%] h-5 w-5 rounded-full bg-orange-400 opacity-60 md:animate-[bounce_5s_ease-in-out_infinite]" />
                <div className="absolute bottom-[20%] right-[15%] h-3 w-3 rounded-full bg-orange-500 opacity-70 md:animate-[bounce_8s_ease-in-out_infinite]" />
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
                  <p className="relative text-base font-medium text-neutral-800 md:text-xl">
                    Soy doula y puericultora, dedicada a acompañar familias en
                    el camino de la maternidad y paternidad.
                  </p>
                </div>
              </div>

              {/* Content text */}
              <div className="space-y-4">
                <p className="text-sm text-neutral-700 md:text-lg">
                  Pienso que abrazar la maternidad es abrazarse a uno mismo, al
                  bebé, a la familia, con lo que uno es, quiere y puede dar.
                  Desde muy joven me sentí atraída por el mundo de la
                  maternidad, creciendo en una familia numerosa rodeada de
                  embarazos y nacimientos.
                </p>

                {/* Espacio Amapola card with subtle hover effect on desktop */}
                <div className="relative my-4 overflow-hidden rounded-xl bg-gradient-to-r from-orange-100/80 to-orange-50/60 p-6 backdrop-blur-sm md:transition-all md:duration-500 md:hover:shadow-md md:hover:bg-gradient-to-r md:hover:from-orange-100/90 md:hover:to-orange-50/70">
                  {/* Decorative element with subtle movement on desktop */}
                  <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-orange-200 opacity-30 blur-xl md:animate-[pulse_6s_ease-in-out_infinite]" />

                  <h3 className="mb-2 text-xl font-medium text-neutral-900">
                    Espacio Amapola
                  </h3>
                  <p className="text-neutral-700 text-sm md:text-lg">
                    Con el tiempo, mi inquietud se convirtió en vocación. Decidí
                    formarme para acompañar a las familias con conocimientos
                    sólidos, escucha atenta y un enfoque amoroso. Así nació
                    Espacio Amapola, un lugar donde cada mujer y familia puede
                    encontrar apoyo en su propio camino hacia la maternidad.
                  </p>
                </div>

                <p className="text-sm text-neutral-700 md:text-lg">
                  Hoy, mi propósito es brindar herramientas y contención para
                  que cada embarazo, nacimiento y posparto se viva de manera
                  consciente, segura y amorosa.
                </p>
              </div>

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

          {/* Certifications section - now below both profile and text */}
          <div className="mt-16 border-t border-orange-100 pt-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl text-neutral-900">
                Formación y Certificaciones
              </h3>
            </div>

            {/* List view only */}
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-lg border border-orange-100 p-4 transition-all duration-300 hover:shadow-sm hover:border-orange-200"
                >
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                    <Image
                      src={cert.logoUrl || "/placeholder.svg"}
                      alt={cert.institution}
                      width={60}
                      height={60}
                      className="max-h-full w-auto"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">
                      {cert.institution}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {cert.certification}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
