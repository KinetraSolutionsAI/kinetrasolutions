import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Approccio pragmatico orientato ai risultati",
  "Soluzioni AI costruite da zero, non a scaffale",
  "Team di sviluppatori, data scientist e business strategist",
  "Esperienza con imprese italiane e internazionali",
];

const About = () => {
  return (
    <section id="chi-siamo" className="py-24 md:py-32 relative">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="badge-pill mb-6">Chi Siamo</div>
            <h2 className="section-title mb-6">
              Un team di esperti al servizio della tua{" "}
              <span className="text-gradient">innovazione</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Siamo un collettivo di sviluppatori, data scientist e business strategist con una
              missione chiara: portare l'intelligenza artificiale nel cuore delle operazioni
              aziendali. Da anni aiutiamo imprese italiane e internazionali a implementare
              soluzioni che funzionano davvero.
            </p>
            <ul className="space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="glass-card p-10 lg:p-12 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="text-6xl mb-6">"</div>
                <p className="text-2xl md:text-3xl font-semibold leading-tight mb-6">
                  Non vendiamo software a scaffale. <br />
                  <span className="text-gradient">Costruiamo il tuo sistema AI da zero.</span>
                </p>
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent" />
                  <div>
                    <div className="font-semibold">Kinetra Solutions</div>
                    <div className="text-sm text-muted-foreground">Founders & System Architects</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
