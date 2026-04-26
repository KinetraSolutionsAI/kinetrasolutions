import { motion } from "framer-motion";

const phases = [
  {
    n: "01",
    title: "Discovery",
    text: "Call conoscitiva gratuita, analisi pain point e identificazione opportunità AI.",
    output: "Documento strategico + preventivo",
  },
  {
    n: "02",
    title: "Progettazione",
    text: "Wireframe, mockup, architettura tecnica e scelta dello stack tecnologico.",
    output: "Milestones e timeline condivise",
  },
  {
    n: "03",
    title: "Sviluppo Agile",
    text: "Sprint bi-settimanali con demo iterative e feedback continuo.",
    output: "Testing in ambiente staging",
  },
  {
    n: "04",
    title: "Deploy & Training",
    text: "Go-live assistito, formazione team interno e documentazione completa.",
    output: "Handover trasparente",
  },
  {
    n: "05",
    title: "Manutenzione & Evoluzione",
    text: "Supporto tecnico dedicato, aggiornamenti e monitoring 24/7.",
    output: "Iterazioni basate su feedback reali",
  },
];

const Process = () => {
  return (
    <section id="processo" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mx-auto mb-6">Come Lavoriamo</div>
          <h2 className="section-title mb-5">
            Un processo <span className="text-gradient">trasparente</span> in 5 fasi
          </h2>
          <p className="text-lg text-muted-foreground">
            Dalla prima call alla manutenzione: metodologia agile, comunicazione costante,
            risultati misurabili.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-12">
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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent ring-8 ring-background" />
                </div>

                {/* Card */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-card p-7">
                    <div className="text-sm font-mono text-primary mb-2">{p.n}</div>
                    <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
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
