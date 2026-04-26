import { motion } from "framer-motion";

const phases = [
  {
    n: "01",
    title: "Scoperta e Analisi",
    text: "Call conoscitiva gratuita. Capiamo dove perdi tempo e come l'AI o l'informatica possono salvarti.",
    output: "Piano d'azione strategico e preventivo chiaro",
  },
  {
    n: "02",
    title: "Progettazione e Anteprima",
    text: "Disegniamo su carta la soluzione. Ti mostriamo in anteprima come funzionerà tutto, zero sorprese.",
    output: "Tempi esatti e obiettivi condivisi",
  },
  {
    n: "03",
    title: "Sviluppo a Tappe",
    text: "Lavoriamo per piccoli traguardi. Sviluppiamo e ti teniamo aggiornato costantemente sul nostro lavoro.",
    output: "Revisioni frequenti durante i lavori",
  },
  {
    n: "04",
    title: "Consegna e Formazione",
    text: "Mettiamo tutto online, ma non ti lasciamo solo. Affianchiamo il tuo team per insegnargli a usare tutto.",
    output: "Passaggio di consegne completo e trasparente",
  },
  {
    n: "05",
    title: "Assistenza e Crescita",
    text: "Siamo sempre qui. Controlliamo i sistemi giorno e notte per evitare intoppi e aggiungiamo nuove idee.",
    output: "Miglioramenti costanti basati sulle tue richieste",
  },
];

const Process = () => {
  return (
    <section id="processo" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="badge-pill mx-auto mb-6">Come Lavoriamo</div>
          <h2 className="section-title mb-5">
            Un processo <span className="text-gradient">trasparente</span> in 5 fasi
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Dalla prima call alla manutenzione: metodologia agile, comunicazione costante,
            risultati misurabili.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {phases.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex md:items-center gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number bubble */}
                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-8 ring-background" />
                </div>

                {/* Card */}
                <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-card p-5 sm:p-7">
                    <div className="text-sm font-mono text-primary mb-2">{p.n}</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">{p.title}</h3>
                    <p className="text-muted-foreground mb-4">{p.text}</p>
                    <div className="text-sm font-medium text-foreground/80">
                      <span className="text-muted-foreground">Output: </span>
                      {p.output}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
