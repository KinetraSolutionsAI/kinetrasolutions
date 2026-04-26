import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section id="contatti" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 hero-bg pointer-events-none" />
      <div className="container mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="badge-pill mx-auto mb-6">
            <span className="text-muted-foreground">Inizia Ora</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Stanchi di gestire <span className="text-gradient">tutto manualmente?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Prenotate un appuntamento conoscitivo di 10 minuti, senza impegno. Scopriamo insieme come automatizzare la vostra attività.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://calendly.com/kinetrasolutions-proton/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold glow-button"
            >
              Prenota una Chiamata Gratuita <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/393452838679?text=Buongiorno%20%2C%20sarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attivit%C3%A0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border bg-card font-semibold hover:border-primary transition-colors"
            >
              <MessageCircle className="w-5 h-5" /> Scrivici su WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <span>✓ Risposta rapida</span>
            <span>✓ Analisi gratuita inclusa</span>
            <span>✓ Nessun impegno</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
