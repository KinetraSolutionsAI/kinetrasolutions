import { ArrowRight, Mail, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export interface SectorBlock {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  closer?: string;
}

export interface SectorPageProps {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string[];
  audience?: string[];
  problems: SectorBlock[];
  solutions: SectorBlock[];
  advantages: { title: string; subtitle: string; text: string }[];
  comparisons: { label: string; before: string; after: string }[];
  ctaTitle: string;
}

const MAILTO =
  "mailto:info@kinetrasolutions.com?subject=Prenotazione%20chiamata%20conoscitiva&body=Buongiorno%2C%0A%0Avorrei%20prenotare%20una%20chiamata%20conoscitiva%20gratuita.%0A%0AGrazie.";

const SectorPage = ({
  eyebrow,
  title,
  highlight,
  intro,
  audience,
  problems,
  solutions,
  advantages,
  comparisons,
  ctaTitle,
}: SectorPageProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="container mx-auto relative">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Torna alla home
          </Link>
          <div className="max-w-4xl mx-auto text-center">
            <div className="badge-pill mx-auto mb-6">
              <span className="text-muted-foreground">{eyebrow}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {title} <span className="text-gradient">{highlight}</span>
            </h1>
            <div className="space-y-2 mb-10">
              {intro.map((line) => (
                <p key={line} className="text-lg text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
            <a
              href={MAILTO}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold glow-button"
            >
              Prenota una Chiamata Gratuita <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Audience */}
      {audience && audience.length > 0 && (
        <section className="py-12 border-t border-border">
          <div className="container mx-auto">
            <h2 className="text-center text-sm uppercase tracking-wider text-muted-foreground mb-6">
              A chi si rivolge
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {audience.map((a) => (
                <span key={a} className="badge-pill">
                  <span>{a}</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problems */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="badge-pill mx-auto mb-6">
              <span className="text-muted-foreground">Le Sfide Quotidiane</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              I problemi che <span className="text-gradient">affronti ogni giorno</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {problems.map((p) => (
              <div key={p.title} className="card-light p-8">
                <h3 className="text-xl font-bold mb-1 text-neutral-900">{p.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{p.subtitle}</p>
                <p className="text-neutral-700 mb-5">{p.description}</p>
                <ul className="space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-neutral-700">
                      <span className="text-primary">✕</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="badge-pill mx-auto mb-6">
              <span className="text-muted-foreground">Le Nostre Soluzioni</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Come <span className="text-gradient">risolviamo</span> questi problemi
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {solutions.map((s) => (
              <div key={s.title} className="card-elegant p-8 flex flex-col">
                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{s.subtitle}</p>
                <p className="text-muted-foreground mb-5 text-sm">{s.description}</p>
                <ul className="space-y-2 flex-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground/80">{b}</span>
                    </li>
                  ))}
                </ul>
                {s.closer && (
                  <p className="mt-5 text-sm text-foreground/90 italic border-t border-border pt-4">
                    {s.closer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="badge-pill mx-auto mb-6">
              <span className="text-muted-foreground">I Vantaggi</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Perché scegliere <span className="text-gradient">Kinetra Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantages.map((a) => (
              <div key={a.title} className="card-elegant p-8">
                <h3 className="text-lg font-bold mb-1">{a.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{a.subtitle}</p>
                <p className="text-muted-foreground text-sm">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="badge-pill mx-auto mb-6">
              <span className="text-muted-foreground">Risultati Concreti</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Prima vs <span className="text-gradient">Dopo</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {comparisons.map((c) => (
              <div key={c.label} className="card-elegant p-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">{c.label}</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg font-semibold text-muted-foreground line-through">
                    {c.before}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary" />
                  <span className="text-2xl font-bold text-primary">{c.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg pointer-events-none" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-5">{ctaTitle}</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Chiamata gratuita di 10 minuti – senza impegno
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold glow-button"
              >
                Prenota Chiamata <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@kinetrasolutions.com?subject=Richiesta%20informazioni&body=Buongiorno%2C%0A%0Asarei%20interessato%20alle%20vostre%20soluzioni.%0A%0AGrazie."
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card font-semibold hover:border-primary transition-colors"
              >
                <Mail className="w-5 h-5" /> Contattaci via Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SectorPage;
