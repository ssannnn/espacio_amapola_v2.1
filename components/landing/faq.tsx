"use client"

import { useRef, useState } from "react"

const faqs = [
  {
    question: "¿Cuándo puedo empezar?",
    answer:
      "Los encuentros de movimiento, a partir del segundo trimestre. La preparación para el trabajo de parto y parto, a partir de la semana 28.",
  },
  {
    question: "¿Los encuentros presenciales son únicamente a domicilio?",
    answer: "Actualmente si, siempre que sean dentro de algunos barrios de CABA.",
  },
  {
    question: "¿La modalidad híbrida es posible?",
    answer:
      "Si, siempre se puede conversar acerca de realizar algunos encuentros de manera presencial en CABA y virtual.",
  },
  {
    question: "¿Aceptas obras sociales o prepagas?",
    answer:
      "Actualmente trabajo de manera particular. Recomiendo contactarme para verificar las opciones de pago disponibles antes de tu primera cita. También ofrezco planes de pago para servicios.",
  },
]

export default function FAQ() {
  const containerRef = useRef(null)
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" ref={containerRef} className="relative overflow-hidden bg-neutral-50 py-10 md:py-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            background: `radial-gradient(circle at 50% 50%, #fdeee4 0%, #fef8f4 70%)`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl tracking-tight text-neutral-900 sm:text-5xl">Preguntas Frecuentes</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4"
              style={{
                transitionDelay: `${index * 0.1}s`,
                transition: "all 0.3s ease-in-out",
              }}
            >
              <div className="overflow-hidden rounded-xl bg-white shadow-md md:transition-all md:duration-300 md:hover:shadow-lg md:hover:translate-x-1">
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => toggleItem(`item-${index}`)}
                >
                  <h3 className="text-lg text-neutral-900">{faq.question}</h3>
                  <div>
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
                      className="h-5 w-5 text-orange-500 md:transition-transform md:duration-300"
                      style={{
                        transform: openItem === `item-${index}` ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                {openItem === `item-${index}` && (
                  <div>
                    <div className="border-t border-neutral-100 px-6 pb-6 pt-4 md:animate-fadeIn">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
