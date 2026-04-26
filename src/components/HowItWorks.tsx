import { CheckCircle2, MessageCircle, Target, Headphones } from "lucide-react";

const steps = [
  { n: "STEP 01", title: "Primo Contatto", text: "Prenotate un appuntamento conoscitivo di 10 minuti tramite Calendly oppure scriveteci su WhatsApp. Nessun impegno, nessuna pressione." },
  { n: "STEP 02", title: "Chiamata Conoscitiva", text: "Vi ascoltiamo. Raccontateci della vostra attività, dei problemi che affrontate ogni giorno. Se possiamo aiutarvi concretamente, passiamo allo step successivo." },
  { n: "STEP 03", title: "Analisi Flussi (Gratuita)", text: "Dedichiamo 1-2 ore a studiare i vostri processi. Vi presentiamo un'analisi dettagliata: cosa automatizzare, come funzionerebbe, quanto risparmiereste." },
  { n: "STEP 04", title: "Sviluppo Soluzione", text: "Costruiamo la vostra soluzione su misura. Vi teniamo aggiornati costantemente, raccogliamo feedback, perfezioniamo ogni dettaglio." },
  { n: "STEP 05", title: "Testing e Attivazione", text: "Testiamo insieme l'applicazione o l'automazione creata. Configuriamo tutto, vi formiamo sull'uso, ci assicuriamo che funzioni perfettamente. Restiamo disponibili per supporto." },
];

const principles = [
  { icon: CheckCircle2, title: "Trasparenza totale", text: "Costi chiari, tempi realistici" },
  { icon: MessageCircle, title: "Comunicazione costante", text: "Sapete sempre a che punto siamo" },
  { icon: Target, title: "Focus sui risultati", text: "Se non migliora, non ha senso farlo" },
  { icon: Headphones, title: "Supporto continuativo", text: "Non vi lasciamo soli dopo la consegna" },
];

const HowItWorks = () => {
  return (
    <section id="come-funziona" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mx-auto mb-6">
            <span className="text-muted-foreground">Come Funziona</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Un processo semplice, <span className="text-gradient">trasparente</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Senza sorprese. Saprete sempre a che punto siamo e cosa stiamo facendo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5 mb-16">
          {steps.map((s, i) => (
            <div key={s.n} className="card-elegant p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-5">
              <div className="md:w-32 flex-shrink-0">
                <div className="text-xs font-bold tracking-widest text-primary mb-1">{s.n}</div>
                <div className="text-4xl md:text-5xl font-black text-primary/20">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {principles.map((p) => (
            <div key={p.title} className="card-elegant p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-bold mb-1">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
