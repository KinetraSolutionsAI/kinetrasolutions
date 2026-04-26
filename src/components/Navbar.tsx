import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-light.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#top", label: "Home" },
    { href: "#soluzioni", label: "Soluzioni" },
    { href: "#settori", label: "Settori" },
    { href: "#come-funziona", label: "Come Funziona" },
    { href: "#chi-siamo", label: "Chi Siamo" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Kinetra Solutions" className="h-12 md:h-14 w-auto" />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contatti"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm glow-button"
        >
          Contattaci
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container mx-auto py-4 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contatti" onClick={() => setOpen(false)} className="inline-block px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
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
