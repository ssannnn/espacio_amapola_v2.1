"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useRef, useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

const whatsappNumber: string = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const whatsappHref = `https://wa.me/${whatsappNumber}`;
const formspreeEndpoint: string = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView: boolean = useInView(containerRef, {
    once: false,
    amount: 0.2,
  });
  const { scrollYProgress }: { scrollYProgress: MotionValue<number> } =
    useScroll({
      target: containerRef,
      offset: ["start end", "end start"],
    });

  const y: MotionValue<number> = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
          interface FormspreeErrorResponse {
          errors?: { message: string }[];
        }
  
        const data = (await res.json()) as FormspreeErrorResponse;
        throw new Error(data.errors?.[0]?.message ?? "Error al enviar el formulario");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert((error as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-orange-50 py-10 md:py-16"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #f97316 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-orange-100 opacity-20"></div>
        <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-orange-200 opacity-10"></div>
        <div className="absolute bottom-0 left-1/3 w-40 h-40 rounded-full bg-orange-100 opacity-10"></div>
      </div>

      <motion.div
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block rounded-full bg-orange-100 px-4 py-1 text-sm text-orange-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            Contacto
          </motion.span>
          <motion.h2
            className="mt-4 text-3xl tracking-tight text-neutral-900 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contactame
          </motion.h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-8">
              <motion.div
                className="flex items-start gap-4 p-2 rounded-xl transition-colors hover:bg-[#25D366]/10"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  {/* WhatsApp icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-5 w-5"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-neutral-900">
                    WhatsApp (Preferido)
                  </h3>
                  <a
                    href={whatsappHref}
                    className="mt-1 text-[#25D366] font-medium hover:text-[#128C7E] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactar por WhatsApp
                    <br />
                    <span className="text-neutral-600 font-normal">
                      Respuesta rápida, disponible 7 días
                    </span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  {/* Email icon */}
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg text-neutral-900">
                    Envíame un e-mail
                  </h3>
                  <p className="mt-1 text-neutral-600">
                    espacioamapola@hotmail.com
                    <br />
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="overflow-hidden rounded-xl bg-white p-6 shadow-lg"
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              {isSubmitted ? (
                <motion.div
                  className="flex h-full flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: 0.2,
                    }}
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
                      className="h-10 w-10"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </motion.div>
                  <motion.h3
                    className="mb-4 text-2xl text-neutral-900"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    ¡Gracias!
                  </motion.h3>
                  <motion.p
                    className="text-lg text-neutral-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    Tu mensaje ha sido recibido. Me pondré en contacto lo antes
                    posible.
                  </motion.p>
                  <motion.button
                    className="mt-8 rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
                    onClick={() => setIsSubmitted(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Enviar Otro Mensaje
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { void handleSubmit(e); }} className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-base md:text-lg font-medium"
                    >
                      Nombre Completo
                    </Label>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre completo"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === "name"
                            ? "border-orange-500 ring-2 ring-orange-200"
                            : "border-neutral-200"
                        }`}
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-base md:text-lg font-medium"
                    >
                      Correo Electrónico
                    </Label>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === "email"
                            ? "border-orange-500 ring-2 ring-orange-200"
                            : "border-neutral-200"
                        }`}
                        required
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-base md:text-lg font-medium"
                    >
                      Número de Teléfono
                    </Label>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Tu número de teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                          focusedField === "phone"
                            ? "border-orange-500 ring-2 ring-orange-200"
                            : "border-neutral-200"
                        }`}
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-base md:text-lg font-medium"
                    >
                      Mensaje
                    </Label>
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Escribe tu mensaje aquí"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`rounded-xl border-2 transition-all duration-300 ${
                          focusedField === "message"
                            ? "border-orange-500 ring-2 ring-orange-200"
                            : "border-neutral-200"
                        }`}
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      type="submit"
                      className="w-full rounded-xl bg-orange-500 px-6 py-3 text-white hover:bg-orange-600"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                      </span>
                      {isSubmitting && (
                        <motion.span
                          className="absolute inset-0 bg-orange-600"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5 }}
                        />
                      )}
                    </Button>
                  </motion.div>
                  <div className="md:col-span-2 mt-4 text-center">
                    <p className="text-neutral-600 mb-2 text-base md:text-lg">
                      O si prefieres una respuesta más rápida:
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-full border-2 border-[#25D366] px-6 py-3 text-[#25D366] hover:bg-[#25D366]/10"
                      asChild
                    >
                      <a
                        href={whatsappHref}
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
                        Contactar por WhatsApp
                      </a>
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
