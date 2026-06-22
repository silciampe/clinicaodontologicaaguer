import { logo, navLinks } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-dark/5 py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Clínica Dental Aguer"
              className="h-10 w-10 object-contain"
            />
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-semibold text-primary">
                Clínica Aguer
              </p>
              <p className="mt-1 text-xs text-neutral-medium">
                © {year} Todos los derechos reservados
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-neutral-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-xs text-neutral-medium">
          Realizado por{" "}
          <a
            href="https://www.itivi.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary transition-colors hover:text-primary/80"
          >
            ITIVI
          </a>
        </p>
      </div>
    </footer>
  );
}
