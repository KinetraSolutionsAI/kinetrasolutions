import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo-dark.png";

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
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Kinetra Solutions" className="h-10 md:h-12 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="mailto:info@kinetrasolutions.com" className="hidden md:inline-flex btn-primary !py-2.5 !px-5">
          Contattaci
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="container mx-auto py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:info@kinetrasolutions.com"
                onClick={() => setOpen(false)}
                className="btn-primary !py-2.5 !px-5 w-fit"
              >
                Contattaci
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
