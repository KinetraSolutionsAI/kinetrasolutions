import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contatti" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-7 sm:p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

            <div className="relative">
              <div className="badge-pill mx-auto mb-6">Iniziamo</div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 md:mb-6 leading-tight">
                Pronto a portare la tua azienda <span className="text-gradient">nel futuro?</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10">
                Parliamo del tuo progetto senza impegno. Ti risponderemo entro 24 ore con un piano
                d'azione concreto.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                <a
                  href="mailto:info@kinetrasolutions.com?subject=Voglio%20parlare%20del%20mio%20progetto"
                  className="btn-primary text-base !px-6 !py-3.5 sm:!px-8 sm:!py-4 w-full sm:w-auto"
                >
                  Contattaci ora <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="mailto:info@kinetrasolutions.com"
                  className="btn-ghost text-sm sm:text-base !px-6 !py-3.5 sm:!px-8 sm:!py-4 w-full sm:w-auto break-all"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" /> info@kinetrasolutions.com
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
                <span>✓ Risposta in 24 ore</span>
                <span>✓ Analisi gratuita</span>
                <span>✓ Nessun impegno</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
