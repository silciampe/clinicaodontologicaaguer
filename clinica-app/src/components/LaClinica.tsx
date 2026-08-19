import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { clinicValues } from "../data/content";
import { mainConsultoryPhoto } from "../data/content";
import { fadeUp, staggerContainer } from "../lib/animations";

export default function LaClinica() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="clinica" className="section-y bg-neutral-light">
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
              La Clínica
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl lg:text-5xl"
            >
              Un espacio pensado para cuidar de usted
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-relaxed text-neutral-medium lg:text-lg"
            >
              En Clínica Aguer creemos que la odontología de calidad nace de la
              combinación entre excelencia técnica, calidez humana y un entorno
              que inspire tranquilidad. Nuestra visión de trabajo se fundamenta
              en la atención personalizada y el compromiso con cada paciente.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-neutral-medium"
            >
              Cada detalle —desde la consulta hasta el seguimiento— está
              diseñado para que se sienta escuchado, informado y acompañado en
              todo momento.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[20px] shadow-[var(--shadow-soft)]">
              <img
                src={mainConsultoryPhoto}
                alt="Consultorio principal de Clínica Dental Aguer"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-[20px] border border-white bg-primary/10 backdrop-blur-sm lg:block" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="section-gap grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {clinicValues.map((value) => (
            <motion.article
              key={value.title}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-[20px] bg-white p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-hover)]"
            >
              <h3 className="font-display text-lg font-semibold text-neutral-dark">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-medium">
                {value.text}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
