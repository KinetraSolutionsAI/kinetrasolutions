import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";

const Contact = () => {
  return (
    <section id="contatti" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <div className="badge-pill mb-6">Contattaci</div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  Pronto a far decollare il tuo <span className="text-gradient">business?</span>
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Compila il form per una consulenza gratuita. Analizzeremo i tuoi processi e ti proporremo le soluzioni migliori per recuperare tempo e guadagnare competitività.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-lg font-medium">info@kinetrasolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50 uppercase tracking-wider font-semibold">Supporto Rapido</p>
                    <p className="text-lg font-medium text-green-600 font-bold">WhatsApp disponibile</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button for Desktop/Mobile directly under info */}
              <div className="pt-4">
                <a 
                  href="https://wa.me/393452838679?text=Salve%20volevo%20chiedere%20informazioni." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-green-500/20"
                >
                  <MessageCircle className="w-6 h-6" />
                  Parla con noi su WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 relative"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
