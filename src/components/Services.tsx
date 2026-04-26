import { motion } from "framer-motion";
import { Bot, Brain, Cog, Database, Globe, Link2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents & Chatbot",
    desc: "Assistenti virtuali personalizzati e agenti autonomi per gestione operativa.",
    features: ["Customer service automatizzato", "Integrazione CRM esistenti", "NLP italiano e multilingua"],
    useCase: "Riduci del 70% il carico del supporto clienti",
  },
  {
    icon: Cog,
    title: "Automazioni & Workflow",
    desc: "Processi end-to-end automatizzati con trigger intelligenti.",
    features: ["Zapier, Make, n8n, API custom", "RPA aziendale", "Decision-making automatico"],
    useCase: "Da 40 ore/mese a 2 ore con un click",
  },
  {
    icon: Database,
    title: "CRM & Gestione Dati",
    desc: "CRM su misura, dashboard real-time e analytics predittiva.",
    features: ["Data pipeline e warehouse", "KPI strategici live", "Reporting automatico"],
    useCase: "Decisioni data-driven in tempo reale",
  },
  {
    icon: Globe,
    title: "Web & Mobile Apps",
    desc: "Applicazioni custom React/Next.js, PWA, mobile native e cross-platform.",
    features: ["E-commerce con AI", "Progressive Web Apps", "iOS & Android"],
    useCase: "Dal prototipo al deploy in 6 settimane",
  },
  {
    icon: Link2,
    title: "Integrazioni API & Legacy",
    desc: "Connettiamo i tuoi software, moderniziamo sistemi legacy senza disruption.",
    features: ["API gateway & microservizi", "Sincronizzazione real-time", "Modernizzazione legacy"],
    useCase: "ERP + CRM + E-commerce: un ecosistema unico",
  },
  {
    icon: Brain,
    title: "Consulenza Strategica AI",
    desc: "AI readiness assessment e roadmap tecnologica personalizzata.",
    features: ["Training interno team", "Proof of concept & MVP", "Strategia a lungo termine"],
    useCase: "Scopri dove l'AI fa la differenza nel tuo business",
  },
];

const Services = () => {
  return (
    <section id="servizi" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mx-auto mb-6">Servizi Core</div>
          <h2 className="section-title mb-5">
            Soluzioni AI e digitali <span className="text-gradient">su misura</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sei aree di expertise per portare la tua azienda al livello successivo, con tecnologie
            scelte sempre in funzione del tuo problema.
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
