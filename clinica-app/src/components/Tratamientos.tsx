import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { treatments } from "../data/content";
import { fadeUp, staggerContainer } from "../lib/animations";

export default function Tratamientos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tratamientos" className="section-y">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-xl"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.3em] text-secondary"
          >
            Tratamientos
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl lg:text-5xl"
          >
            Soluciones para cada necesidad
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-neutral-medium"
          >
            Ofrecemos un amplio rango de tratamientos odontológicos con la mejor
            tecnología, equipamiento de última generación y un enfoque
            personalizado en cada caso.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="section-gap grid grid-cols-2 gap-4 overflow-visible sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-6 lg:pb-8"
        >
          {treatments.map((treatment) => (
            <motion.article
              key={treatment.title}
              variants={fadeUp}
              className="group relative z-0 overflow-visible rounded-[20px] bg-neutral-light shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:z-30 hover:shadow-[var(--shadow-hover)]"
            >
              <div className="relative flex h-32 items-center justify-center overflow-visible rounded-t-[20px] bg-white p-4 sm:h-36 sm:p-5 lg:h-40">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="max-h-full max-w-[100px] object-contain transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[2] group-hover:drop-shadow-[0_16px_32px_rgba(0,0,0,0.18)] sm:max-w-[120px] lg:max-w-[130px]"
                />
              </div>
              <div className="rounded-b-[20px] border-t border-neutral-dark/5 bg-neutral-light px-3 py-3 sm:px-4 sm:py-4">
                <h3 className="text-center font-display text-sm font-semibold text-neutral-dark sm:text-base">
                  {treatment.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
