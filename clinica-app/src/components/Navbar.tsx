import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo, navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Clínica Dental Aguer"
              className="h-10 w-10 object-contain lg:h-12 lg:w-12"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold tracking-tight text-primary lg:text-xl">
                Clínica Aguer
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-medium">
                Odontología
              </span>
            </div>
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-neutral-dark/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-[14px] lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-neutral-dark" />
              <span className="block h-0.5 w-5 bg-neutral-dark" />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col px-6 py-5">
              <div className="flex items-center justify-between">
                <img src={logo} alt="" className="h-10 w-10 object-contain" />
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  <span className="text-2xl text-neutral-dark">&times;</span>
                </button>
              </div>
              <ul className="mt-16 flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-display text-3xl font-semibold text-neutral-dark"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
