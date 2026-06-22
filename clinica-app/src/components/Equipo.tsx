import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { professionals, teamPhoto } from "../data/content";
import { fadeUp, staggerContainer } from "../lib/animations";

export default function Equipo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="equipo" className="section-y">
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
            Equipo Profesional
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl lg:text-5xl"
          >
            Profesionales comprometidos con su bienestar
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-neutral-medium"
          >
            Un equipo unido por la pasión por la odontología y el respeto hacia
            cada persona que confía en nosotros.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="section-gap overflow-hidden rounded-[20px] shadow-[var(--shadow-soft)]"
        >
          <img
            src={teamPhoto}
            alt="Od. Pablo Aguer, Od. Matías Ponti y Od. Dominique Gautier"
            className="aspect-[21/9] w-full object-cover object-[center_30%] sm:aspect-[2.4/1]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="section-gap grid gap-5 md:grid-cols-3 md:gap-8 lg:gap-10"
        >
          {professionals.map((pro) => (
            <motion.article
              key={pro.name}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-[20px] bg-neutral-light p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-hover)]"
            >
              <h3 className="font-display text-xl font-semibold text-neutral-dark">
                {pro.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-secondary">
                {pro.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-neutral-medium">
                {pro.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
