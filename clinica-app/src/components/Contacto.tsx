import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contactInfo, logo, receptionPhoto } from "../data/content";
import { getTelHref, getWhatsAppHref } from "../lib/contact";
import { fadeUp, staggerContainer } from "../lib/animations";

const whatsappHref = getWhatsAppHref(contactInfo.whatsapp);

const contactItems = [
  {
    label: "Dirección",
    value: contactInfo.address,
    href: contactInfo.mapsLink,
    external: true,
  },
  {
    label: "WhatsApp",
    value: contactInfo.whatsapp,
    href: whatsappHref,
    external: true,
  },
  {
    label: "Tel. fijo",
    value: contactInfo.phone,
    href: getTelHref(contactInfo.phone),
  },
  {
    label: "Horarios",
    value: contactInfo.hours,
  },
  {
    label: "Urgencias",
    value: contactInfo.urgencias,
    href: getTelHref(contactInfo.urgencias),
  },
];

export default function Contacto() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" className="section-y bg-neutral-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
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
              Contacto
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight text-neutral-dark sm:text-4xl lg:text-5xl"
            >
              Estamos para atenderle
            </motion.h2>

            <div className="relative mb-10 mt-8 w-full max-w-lg">
              <div className="overflow-hidden rounded-[20px] bg-white p-2 shadow-[var(--shadow-hover)] ring-1 ring-primary/10">
                <img
                  src={receptionPhoto}
                  alt="Recepción de Clínica Dental Aguer"
                  className="aspect-[4/3] w-full rounded-[14px] object-cover object-[center_25%]"
                />
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                Recepción · Atención personalizada
              </p>
              <div
                className="absolute -bottom-4 -right-4 hidden h-20 w-20 rounded-[20px] border border-white bg-primary/10 backdrop-blur-sm lg:block"
                aria-hidden="true"
              />
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-base leading-relaxed text-neutral-medium"
            >
              Comuníquese con nosotros por WhatsApp para consultas, información
              o para coordinar su próxima visita. En recepción le recibimos con
              calidez y dedicación.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-8 flex flex-col gap-6 md:mt-12 md:gap-8"
            >
              {contactItems.map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-medium">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="mt-2 block text-base font-medium text-neutral-dark transition-colors hover:text-primary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-base font-medium text-neutral-dark">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[14px] bg-[#25D366] px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-[#20bd5a] hover:shadow-[0_8px_30px_rgba(37,211,102,0.3)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4 md:gap-6"
          >
            <div className="overflow-hidden rounded-[20px] bg-white shadow-[var(--shadow-soft)]">
              <iframe
                src={contactInfo.mapsEmbedUrl}
                title="Ubicación de Clínica Dental Aguer"
                className="aspect-[4/3] w-full border-0 sm:aspect-[5/4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="flex items-center gap-4 rounded-[20px] bg-white p-6 shadow-[var(--shadow-soft)]">
              <img
                src={logo}
                alt=""
                className="h-14 w-14 shrink-0 object-contain"
              />
              <div>
                <h3 className="font-display text-lg font-semibold text-neutral-dark">
                  Clínica Dental Aguer
                </h3>
                <p className="mt-1 text-sm text-neutral-medium">
                  España 416 · San Nicolás de los Arroyos
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
