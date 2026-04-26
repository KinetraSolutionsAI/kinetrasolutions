import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden noise-overlay"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge-pill mx-auto mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Analizziamo. Ottimizziamo. Ti facciamo recuperare tempo e denaro.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.05]"
          >
            Meno tempo perso, <span className="text-gradient">più risultati</span> per la tua azienda
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-2"
          >
            Studiamo i tuoi flussi di lavoro e ti costruiamo gli strumenti che ti mancano: siti web,
            app, gestionali, software su misura e segretarie virtuali con AI. Tu lavori meglio, in
            meno tempo, spendendo meno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6"
          >
            <a href="mailto:info@kinetrasolutions.com?subject=Parliamo%20del%20mio%20progetto" className="btn-primary text-base !px-6 !py-3.5 sm:!px-8 sm:!py-4 w-full sm:w-auto">
              Parliamo del tuo progetto
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#servizi" className="btn-ghost text-base !px-6 !py-3.5 sm:!px-8 sm:!py-4 w-full sm:w-auto">
              Scopri i servizi
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            ⚡ Risposta entro 24 ore · Nessun impegno
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-3 gap-3 md:gap-8 max-w-3xl mx-auto mt-14 md:mt-20 pt-10 md:pt-12 border-t border-border/50"
          >
            <Stat value="50+" label="Aziende ottimizzate" />
            <Stat value="200+" label="Processi automatizzati" />
            <Stat value="10k+" label="Ore risparmiate / mese" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div>
    <div className="text-2xl md:text-5xl font-bold text-gradient mb-1">{value}</div>
    <div className="text-[11px] md:text-sm text-muted-foreground leading-tight">{label}</div>
  </div>
);

export default Hero;
