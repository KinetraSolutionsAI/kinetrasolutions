import { Bot, Cog } from "lucide-react";

const Solutions = () => {
  const steps = [
    { n: "01", title: "Analisi del flusso operativo reale", text: "Studiamo come lavorate oggi e dove state perdendo tempo e soldi" },
    { n: "02", title: "Progettazione della soluzione su misura", text: "Sviluppiamo assistenti AI, automazioni o app che risolvono i vostri problemi specifici" },
    { n: "03", title: "Implementazione guidata", text: "Vi affianchiamo nell'attivazione e vi formiamo sull'uso" },
    { n: "04", title: "Risultati misurabili e controllo totale", text: "Ore risparmiate, costi ridotti, sistema vostro. Numeri concreti." },
  ];

  return (
    <section id="soluzioni" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mx-auto mb-6">
            <span className="text-muted-foreground">Le Nostre Soluzioni</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Come <span className="text-gradient">Kinetra Solutions</span> risolve questi problemi
          </h2>
          <p className="text-muted-foreground text-lg">
            Non vendiamo software standard che dovete adattare alla vostra attività. Creiamo soluzioni su misura che si integrano perfettamente nei vostri flussi di lavoro.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          <div className="card-elegant p-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Bot className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Assistenti AI per Clienti e Prenotazioni</h3>
            <p className="text-muted-foreground mb-5">
              Assistenti intelligenti che gestiscono WhatsApp e telefono, rispondono ai clienti, fissano appuntamenti e riducono le interruzioni durante il lavoro.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Per medici: Triage pazienti, conferma appuntamenti, riduzione no-show",
                "Per parrucchieri: Gestione prenotazioni automatizzata, promemoria trattamenti",
                "Per ristoratori: Gestione prenotazioni automatizzata, ordini asporto, info menu",
                "Per palestre: Gestione prenotazioni automatizzata, promemoria abbonamenti, info orari",
                "Per officine: Gestione appuntamenti automatizzata, notifiche auto pronta, preventivi",
                "Per ecommerce: Tracking ordini, assistenza clienti, recupero carrelli abbandonati",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-elegant p-8">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <Cog className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Automazioni Operative AI su Misura</h3>
            <p className="text-muted-foreground mb-5">
              Sistemi e agenti AI che eseguono azioni reali: invio comunicazioni, aggiornamento dati, gestione documenti, follow-up automatici e processi interni.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "Database clienti intelligenti con storico e preferenze",
                "Sistemi di notifiche automatiche e follow-up",
                "Dashboard di controllo per monitorare performance",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-foreground/80 italic border-t border-border pt-5">
              Ogni soluzione viene progettata sul vostro metodo di lavoro, non adattata a un software standard.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Il nostro approccio</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="card-elegant p-6">
                <div className="text-5xl font-black text-primary/30 mb-3">{s.n}</div>
                <h4 className="font-bold mb-2">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
