import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "../lib/animations";

const principles = [
  {
    number: "01",
    title: "Escuchar primero",
    text: "Comprender sus necesidades, inquietudes y expectativas antes de cualquier decisión clínica.",
  },
  {
    number: "02",
    title: "Transparencia",
    text: "Información clara sobre diagnósticos, opciones de tratamiento y procedimientos.",
  },
  {
    number: "03",
    title: "Acompañamiento",
    text: "Seguimiento cercano en cada etapa del proceso, con disponibilidad y empatía.",
  },
];

export default function Filosofia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="filosofia" className="section-y bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-medium uppercase tracking-[0.3em] text-secondary"
            >
              Filosofía de Atención
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Más allá del tratamiento clínico
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-white/80 lg:text-lg"
            >
              La atención odontológica va más allá del tratamiento clínico.
              Nuestro objetivo es construir relaciones de confianza, comprender
              las necesidades de cada paciente y ofrecer una experiencia de
              atención integral.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-white/70"
            >
              Creemos que el cuidado de la salud bucal es un proceso humano, no
              meramente técnico. Por eso, cada interacción está guiada por el
              respeto, la paciencia y la dedicación.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col gap-4 md:gap-6"
          >
            {principles.map((item) => (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="rounded-[20px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <span className="font-display text-sm font-semibold text-secondary">
                  {item.number}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
