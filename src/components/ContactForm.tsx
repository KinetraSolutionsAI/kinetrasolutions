import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const ContactForm = ({ onSuccess }: { onSuccess?: () => void }) => {
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
        if (onSuccess) {
          setTimeout(() => onSuccess(), 2000);
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error ? JSON.stringify(errorData.error) : "Errore nell'invio dal server");
      }
    } catch (error: any) {
      toast.error(`Si è verificato un errore: ${error.message || "Riprova più tardi."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Grazie per averci contattato!</h2>
        <p className="text-foreground/70 text-base mb-6">
          Il tuo messaggio è stato ricevuto. Ti risponderemo in meno di 24 ore.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="btn-ghost text-sm"
        >
          Invia un altro messaggio
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium ml-1">Nome e Cognome</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Mario Rossi"
            className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium ml-1">Email Aziendale</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
            title="Inserisci un indirizzo email valido (es: mario@azienda.it)"
            placeholder="mario@azienda.it"
            className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="phone" className="text-sm font-medium ml-1">Telefono</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+39 012 345 6789"
          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium ml-1">Come possiamo aiutarti?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Descrivi brevemente la tua esigenza..."
          className="w-full px-4 py-2.5 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary !py-3.5 text-base font-bold flex items-center justify-center gap-2 group disabled:opacity-70 mt-2"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Invia Richiesta
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
      
      <p className="text-[11px] text-center text-foreground/40 mt-3 mb-0">
        Cliccando su invia accetti il trattamento dei dati secondo la normativa vigente.
      </p>
    </form>
  );
};
