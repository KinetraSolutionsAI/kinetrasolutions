import { useEffect, useState } from "react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const links = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#servizi", label: "Servizi" },
  { href: "#processo", label: "Processo" },
  { href: "#tecnologie", label: "Tecnologie" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-900/95 backdrop-blur-xl shadow-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={scrolled ? logoLight : logoDark} alt="Kinetra Solutions" className="h-10 md:h-12 w-auto transition-opacity duration-300" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm transition-colors ${
                  scrolled 
                    ? "text-zinc-300 hover:text-white" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contatti" className="hidden md:inline-flex btn-primary !py-2.5 !px-5">
          Contattaci
        </a>

      </nav>
    </header>
  );
};

export default Navbar;
