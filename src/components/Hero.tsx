import { ArrowRight, Check, Infinity as InfinityIcon, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 hero-bg pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="badge-pill mx-auto mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">Automazioni AI per Attività Locali</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8">
            <span className="text-gradient">Automatizziamo</span>
            <br />
            <span className="text-foreground">i processi della tua</span>
            <br />
            <span className="text-foreground">attività con l'AI</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Clienti, appuntamenti, comunicazioni e operazioni automatizzate con soluzioni AI su misura.
          </p>
          <p className="text-primary font-medium mb-10">
            L'AI lavora per te anche quando non sei operativo.
          </p>

          <a
            href="https://calendly.com/kinetrasolutions-proton/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold glow-button"
          >
            Prenota una Chiamata Gratuita
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Chiamata gratuita di 10 minuti – senza impegno
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
            <Stat icon={<Check className="w-5 h-5 text-primary" />} value="✓" label="Riduzione" sub="Costi" />
            <Stat icon={<InfinityIcon className="w-5 h-5 text-primary" />} value="∞" label="Tempo" sub="Liberato" />
            <Stat icon={null} value="H24" label="Sempre" sub="Attivo" big />
            <Stat icon={<TrendingUp className="w-5 h-5 text-primary" />} value="+" label="Fatturato" sub="" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label, sub, big }: { icon?: React.ReactNode; value: string; label: string; sub: string; big?: boolean }) => (
  <div className="flex flex-col items-center">
    <div className={`font-bold text-primary ${big ? "text-3xl" : "text-4xl"}`}>{value}</div>
    <div className="text-sm font-semibold mt-1">{label}</div>
    {sub && <div className="text-xs text-muted-foreground">{sub}</div>}
  </div>
);

export default Hero;
