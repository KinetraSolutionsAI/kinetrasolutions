import { motion } from "framer-motion";
import { Bot, Cog, Database, Globe, Smartphone, Search } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Analisi dei flussi aziendali",
    desc: "Studiamo come lavori oggi, individuiamo dove perdi tempo e denaro e ti diciamo esattamente cosa migliorare.",
    features: ["Mappatura processi attuali", "Stima ore e costi recuperabili", "Piano d'azione concreto"],
    useCase: "Capisci subito dove stai sprecando risorse",
  },
  {
    icon: Globe,
    title: "Siti web professionali",
    desc: "Siti vetrina, e-commerce e landing page veloci, moderne e pensate per portarti clienti.",
    features: ["Design su misura", "Ottimizzati per Google", "Pronti a vendere"],
    useCase: "Una presenza online che lavora per te",
  },
  {
    icon: Smartphone,
    title: "App mobile su misura",
    desc: "App per iOS e Android costruite sulle reali esigenze tue e dei tuoi clienti.",
    features: ["iOS e Android", "Esperienza utente curata", "Notifiche e fidelizzazione"],
    useCase: "Il tuo servizio sempre nelle tasche dei clienti",
  },
  {
    icon: Database,
    title: "Gestionali e software custom",
    desc: "Gestionali e software interni che sostituiscono fogli Excel, mail e processi manuali con un unico strumento ordinato.",
    features: ["Sostituisce Excel e file sparsi", "Tutto centralizzato in un posto", "Accessibile da qualsiasi device"],
    useCase: "Stop al caos: un solo strumento per tutto",
  },
  {
    icon: Bot,
    title: "Agenti AI e segretarie virtuali",
    desc: "Assistenti AI che rispondono ai clienti, prendono appuntamenti, gestiscono mail e compiti ripetitivi al posto tuo.",
    features: ["Risposte automatiche 24/7", "Prenotazioni e promemoria", "Parlano italiano in modo naturale"],
    useCase: "Come avere una segretaria che non dorme mai",
  },
  {
    icon: Cog,
    title: "Automazioni intelligenti",
    desc: "Colleghiamo i tuoi strumenti (mail, CRM, fatture, social) e facciamo lavorare tutto da solo.",
    features: ["Eliminano lavori ripetitivi", "Riducono errori umani", "Liberano ore ogni settimana"],
    useCase: "Da 40 ore al mese a 2, con un click",
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mx-auto mb-6">Cosa Facciamo</div>
          <h2 className="section-title mb-5">
            Strumenti su misura per <span className="text-gradient">farti recuperare tempo e denaro</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Analizziamo come lavori oggi e costruiamo gli strumenti che ti servono davvero: siti,
            app, gestionali, software e assistenti AI. Niente di superfluo, solo ciò che fa la
            differenza nei tuoi numeri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-7 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/80 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-gradient">→ {s.useCase}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
