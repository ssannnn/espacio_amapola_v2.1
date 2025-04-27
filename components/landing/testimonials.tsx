"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "No duden en regalarse este espacio, es un mimo y una lindísima forma de transitar el embarazo. Para mí fue de quietud y encuentro. Encuentro con mi bebé, con mi cuerpo cambiante, conmigo misma. Rochi habilita este espacio de manera dulce y suave, compartiendo su conocimiento sin imponer. Su acompañamiento me dio mucha tranquilidad y los movimientos que hicimos ayudaron a calmar los dolores del cuerpo propios de esta etapa.",
    name: "Justi, Nico y Simón",
    role: "Familia",
    avatar: "/chu_simon.jpg",
    rating: 5,
    category: "Prenatal",
  },
  {
    quote:
      "Los encuentros personalizados con Rochi fueron lindísimos. Un espacio único para conectar con mi cuerpo y, sobre todo, con Elena, mi bebé. Destaco especialmente el rol y el lugar que le dio a mi marido, el papá de Elena. Los últimos encuentros compartidos fueron muy emotivos. Ojalá muchas familias tengan la suerte de ser acompañadas por ella.",
    name: "Muli, Juan y Elena",
    role: "Familia",
    avatar: "/muli_juan.jpg",
    rating: 5,
    category: "Prenatal",
  },
  {
    quote:
      "Tengo la suerte de haber contado con las palabras y el acompañamiento amoroso de Rochi tanto embarazada como luego del parto. En nuestra charla previa al nacimiento pude desagotar un montón de dudas y recibir recomendaciones que me ayudaron a mí y al padre a recibir nuestro bebé con mucho amor.",
    name: "Amanda e Ignacio",
    role: "Familia",
    avatar: "/mandi_ignacio.jpg",
    rating: 5,
    category: "Prenatal y Postparto",
  },
  {
    quote:
      "Rochi me acompañó durante el embarazo y en mis primeros meses de lactancia. En momentos donde necesitaba contención y ayuda, siempre conté con ella, con su consejo, su aliento, su positividad y su calma.",
    name: "Male y Delfín",
    role: "Familia",
    avatar: "/male_rufo.jpg",
    rating: 5,
    category: "Lactancia",
  },
  {
    quote:
      "Como mamá primeriza, llena de dudas y miedos, me ayudó mucho a sentir más seguridad tanto a mí como a mi marido. Me ayudó a sentir confianza en mí. La lactancia era un tema que le tenía pánico y gracias a Rochi, que me dio herramientas para sentirme preparada, pude sentir más confianza en mí misma. Es clave la información, la contención y la seguridad, y es algo que se lo voy a agradecer siempre.",
    name: "Clari y Ramón",
    role: "Familia",
    avatar: "/clari_ramon.jpg",
    rating: 5,
    category: "Prenatal",
  },
  {
    quote:
      "Fue clave tener el acompañamiento de Rochi en este mundo nuevo de la lactancia. Con sus indicaciones el dolor y el miedo se fueron en muy poco tiempo. Como madre primeriza me ayudó muchísimo tenerla a Rochi guiándome.",
    name: "Angie y Jachu",
    role: "Familia",
    avatar: "/angie_jachu.jpg",
    rating: 5,
    category: "Lactancia",
  },
  {
    quote:
      "¡Mil gracias Rochi por tu ayuda! Estaba súper angustiada por sentir tanto dolor y no disfrutar la lactancia. Poco a poco fui poniendo en práctica tus consejos y ahora los dos: Bauti y yo disfrutamos mucho de un momento único para ambos.",
    name: "Flor y Bauti",
    role: "Familia",
    avatar: "/flor_bauti.jpg",
    rating: 5,
    category: "Lactancia",
  },
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
    setCurrentX(clientX)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging) return
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setCurrentX(clientX)
  }

  const handleDragEnd = () => {
    if (!dragging) return
    setDragging(false)
    const diff = startX - currentX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      } else {
        // Swiped right
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
      }
    }
  }

  return (
    <section id="testimonials" ref={containerRef} className="relative overflow-hidden bg-neutral-50 py-10 md:py-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C30,40 70,60 100,30 L100,100 L0,100 Z" fill="#FEF8F4" />
          <path d="M0,100 C20,60 50,30 100,70 L100,100 L0,100 Z" fill="#FDEEE4" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-600">
            Testimonios
          </span>
          <h2 className="mt-4 text-4xl tracking-tight text-neutral-900 sm:text-5xl">Experiencias de Familias</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600">
            Conoce las experiencias de familias que han recibido mi acompañamiento
          </p>
        </div>

        {/* Mobile-optimized testimonial carousel */}
        <div
          className="relative mx-auto max-w-4xl"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {/* Testimonial card container - fixed height on mobile, auto on desktop */}
          <div className="relative h-auto overflow-hidden">
            {/* Current testimonial - fully visible with subtle animations on desktop */}
            <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-xl md:transition-all md:duration-500 md:hover:shadow-2xl">
              <div className="flex flex-col">
                {/* Top section with image and category */}
                <div className="flex items-center justify-between bg-gradient-to-r from-orange-100 to-orange-50 p-4 md:transition-all md:duration-500 md:hover:from-orange-200 md:hover:to-orange-100">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md sm:h-20 sm:w-20 md:transition-all md:duration-300 md:hover:scale-105">
                      <Image
                        src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                        alt={testimonials[activeIndex].name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-neutral-900">{testimonials[activeIndex].name}</h3>
                      <p className="text-sm text-orange-500">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600 md:transition-all md:duration-300 md:hover:bg-orange-200">
                    {testimonials[activeIndex].category}
                  </span>
                </div>

                {/* Quote content */}
                <div className="flex flex-col p-6">
                  <div className="mb-4">
                    <svg className="h-6 w-6 text-orange-200 md:animate-pulse" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-base italic leading-relaxed text-neutral-700 sm:text-lg">
                    {testimonials[activeIndex].quote}
                  </p>

                  {/* Rating stars with subtle animation on desktop */}
                  <div className="mt-6 flex justify-end">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={i < testimonials[activeIndex].rating ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`ml-1 text-orange-400 ${i < testimonials[activeIndex].rating ? "md:animate-pulse" : ""}`}
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation controls with enhanced hover effects on desktop */}
            <div className="mt-6 flex items-center justify-between px-4">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 shadow-md hover:bg-orange-50 sm:h-12 sm:w-12 md:transition-all md:duration-300 md:hover:scale-110"
                onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              >
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
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* Pagination indicator */}
              <div className="text-sm font-medium text-neutral-600">
                {activeIndex + 1} / {testimonials.length}
              </div>

              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-orange-500 shadow-md hover:bg-orange-50 sm:h-12 sm:w-12 md:transition-all md:duration-300 md:hover:scale-110"
                onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              >
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
                  className="h-5 w-5 sm:h-6 sm:w-6"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Swipe instruction - only visible on mobile */}
          <div className="mt-6 flex items-center justify-center text-sm text-neutral-500 sm:hidden">
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
              className="mr-2 h-4 w-4"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Desliza para ver más testimonios
          </div>
        </div>
      </div>
    </section>
  )
}
