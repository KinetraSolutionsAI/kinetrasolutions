import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "./ContactForm";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn-primary text-base !px-6 !py-3.5 sm:!px-8 sm:!py-4 w-full sm:w-auto"
                >
                  Contattaci ora <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="https://wa.me/393452838679?text=Salve%20volevo%20chiedere%20informazioni."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-base !px-6 !py-3.5 sm:!px-8 sm:!py-4 w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" /> Scrivici su WhatsApp
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

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-[100]"
            />
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="w-full max-w-lg glass-card bg-background/95 shadow-2xl p-6 sm:p-8 relative pointer-events-auto border-border/50 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute right-4 top-4 p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground z-10"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="mb-6 relative z-0">
                  <h3 className="text-2xl font-bold mb-2">Inviaci una richiesta</h3>
                  <p className="text-muted-foreground text-sm">
                    Compila i campi qui sotto. Ti contatteremo il prima possibile per discutere del tuo progetto.
                  </p>
                </div>

                <div className="relative z-0">
                  <ContactForm onSuccess={() => setIsModalOpen(false)} />
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTA;
