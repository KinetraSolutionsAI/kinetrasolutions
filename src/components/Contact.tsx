import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        toast.success("Messaggio inviato con successo!");
      } else {
        throw new Error("Errore nell'invio");
      }
    } catch (error) {
      toast.error("Si è verificato un errore. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contatti" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto glass-card p-12 text-center"
          >
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Grazie per averci contattato!</h2>
            <p className="text-foreground/70 text-lg mb-8">
              Il tuo messaggio è stato ricevuto. Ti risponderemo entro le prossime 24 ore.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn-ghost text-sm"
            >
              Invia un altro messaggio
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

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
                  href="https://wa.me/393278564287?text=Ciao!%20Vorrei%20informazioni%20sulle%20vostre%20soluzioni%20tecnologiche." 
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium ml-1">Nome e Cognome</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Mario Rossi"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium ml-1">Email Aziendale</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="mario@azienda.it"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium ml-1">Telefono (opzionale)</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+39 012 345 6789"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium ml-1">Come possiamo aiutarti?</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Descrivi brevemente la tua esigenza..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary !py-4 text-lg font-bold flex items-center justify-center gap-2 group disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      Invia Richiesta
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                <p className="text-[11px] text-center text-foreground/40 mt-4">
                  Cliccando su invia accetti il trattamento dei dati secondo la normativa vigente.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
