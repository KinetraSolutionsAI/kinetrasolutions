import { motion } from "framer-motion";
import { Lightbulb, RefreshCw, Rocket } from "lucide-react";

const modules = [
  {
    icon: Lightbulb,
    title: "Consulting Sprint",
    ideal: "Validare idee, POC, roadmap strategica",
    duration: "1-2 settimane",
    output: "Documento strategico + prototipo",
  },
  {
    icon: Rocket,
    title: "Progetto Custom",
    ideal: "MVP, applicazioni complete, integrazioni complesse",
    duration: "2-4 settimane",
    output: "Prodotto production-ready + training",
    highlight: true,
  },
  {
    icon: RefreshCw,
    title: "Retainer Mensile",
    ideal: "Supporto continuativo, iterazioni, scaling",
    duration: "Ore dedicate al mese",
    output: "Priorità su nuove feature + SLA garantito",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="badge-pill mx-auto mb-6">Modelli di Ingaggio</div>
          <h2 className="section-title mb-5">
            Investimento su misura, <span className="text-gradient">valore garantito</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 sm:p-8 bg-white border shadow-lg ${
                m.highlight ? "border-primary ring-2 ring-primary/40" : "border-black/10"
              }`}
            >
              {m.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-semibold text-primary-foreground">
                  Più richiesto
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/30 flex items-center justify-center mb-5">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900">{m.title}</h3>
              <div className="space-y-3 text-sm">
                <Row label="Ideale per" value={m.ideal} />
                <Row label="Durata" value={m.duration} />
                <Row label="Output" value={m.output} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Row = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs uppercase tracking-wider text-neutral-500 mb-1">{label}</div>
    <div className="text-neutral-800">{value}</div>
  </div>
);

export default Pricing;
