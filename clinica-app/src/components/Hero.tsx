import { motion } from "framer-motion";
import { coverPhotoMobile } from "../data/content";
import { fadeUp } from "../lib/animations";

const heroTitle =
  "Cada detalle está pensado para recuperar la sonrisa del paciente, desde la salud y la estética.";

export default function Hero() {
  return (
    <>
      {/* Mobile: imagen visible arriba */}
      <section className="lg:hidden">
        <div className="relative h-52 overflow-hidden sm:h-60">
          <img
            src={coverPhotoMobile}
            alt="Fachada de Clínica Dental Aguer"
            fetchPriority="high"
            className="h-full w-full object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
        </div>

        <div className="px-6 pb-10 pt-8">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-secondary"
          >
            Clínica Odontológica · San Nicolás
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="font-display text-2xl font-bold leading-[1.25] tracking-tight text-neutral-dark sm:text-[1.75rem]"
          >
            {heroTitle}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm leading-relaxed text-neutral-medium sm:text-base"
          >
            Un espacio diseñado para brindar atención odontológica profesional,
            cercana y basada en la confianza.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="#clinica"
              className="rounded-[14px] bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]"
            >
              Conocer la clínica
            </a>
            <a
              href="#contacto"
              className="rounded-[14px] border border-neutral-dark/15 px-6 py-3 text-sm font-medium text-neutral-dark transition-all hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
            >
              Contactar
            </a>
          </motion.div>
        </div>
      </section>

      {/* Desktop: hero fullscreen */}
      <section className="relative hidden min-h-screen items-center overflow-hidden lg:flex">
        <div className="absolute inset-0">
          <img
            src={coverPhotoMobile}
            alt="Fachada de Clínica Dental Aguer"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/75 to-white/15" />
          <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/35 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-8 pt-40 pb-20">
          <div className="max-w-3xl">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.3em] text-secondary"
            >
              Clínica Odontológica · San Nicolás
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="font-display text-4xl font-bold leading-[1.2] tracking-tight text-neutral-dark xl:text-5xl"
            >
              {heroTitle}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-neutral-medium"
            >
              Un espacio diseñado para brindar atención odontológica profesional,
              cercana y basada en la confianza.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a
                href="#clinica"
                className="rounded-[14px] bg-primary px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]"
              >
                Conocer la clínica
              </a>
              <a
                href="#contacto"
                className="rounded-[14px] border border-neutral-dark/15 bg-white/60 px-8 py-3.5 text-sm font-medium text-neutral-dark backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
              >
                Contactar
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-medium">
                Descubrir
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="h-10 w-px bg-neutral-medium/40"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
