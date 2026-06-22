import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { facilities } from "../data/content";
import { fadeUp, staggerContainer } from "../lib/animations";

export default function Instalaciones() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instalaciones" className="section-y bg-white">
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
            Instalaciones
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl lg:text-5xl"
          >
            Conozca nuestro espacio
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-neutral-medium"
          >
            Ambientes pensados para combinar tecnología, comodidad y calidez
            humana en cada visita.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="section-gap grid gap-5 md:grid-cols-3 md:gap-8 lg:gap-10"
        >
          {facilities.map((facility) => (
            <motion.article
              key={facility.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-[20px] bg-neutral-light shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-hover)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-neutral-dark">
                  {facility.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-medium">
                  {facility.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
