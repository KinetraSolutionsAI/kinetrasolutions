import { Stethoscope, Scissors, UtensilsCrossed, ArrowRight } from "lucide-react";

const sectors = [
  {
    icon: Stethoscope,
    title: "Professionisti della Salute",
    tagline: "Segreteria AI che gestisce i vostri pazienti h24",
    problem: "Siete in visita con un paziente e il telefono squilla. Dovete interrompere, rispondere, segnare l'appuntamento a mano.",
    solution: "L'AI risponde alle chiamate h24, gestisce prenotazioni, fa triage delle richieste. Voi ricevete solo una notifica.",
    features: [
      "Segreteria AI h24",
      "Follow-up automatico pazienti",
      "Notifiche e recupero no-show",
      "Gestione dati e report automatizzati",
      "Creazione e invio fatture automatico",
    ],
    link: "https://www.kinetrasolutions.com/professionisti-salute",
  },
  {
    icon: Scissors,
    title: "Estetica e Parrucchieri",
    tagline: "Agenda sempre piena con prenotazioni automatiche",
    problem: "Avete le mani impegnate nel trattamento e il telefono squilla. La cliente che state servendo aspetta, quella che chiama si spazientisce.",
    solution: "L'AI gestisce prenotazioni e modifiche su WhatsApp. Risponde in 30 secondi, anche quando siete occupati.",
    features: [
      "Prenotazioni automatiche h24",
      "Promemoria e follow-up clienti",
      "Recupero automatico no-show",
      "Gestione storico trattamenti",
    ],
    link: "https://www.kinetrasolutions.com/parrucchieri-estetica",
  },
  {
    icon: UtensilsCrossed,
    title: "Ristorazione",
    tagline: "Gestite prenotazioni e asporto senza commissioni",
    problem: "Durante il servizio è il caos. Telefono che squilla, ordini asporto da gestire. Le piattaforme vi rubano il 25-30%.",
    solution: "L'AI gestisce prenotazioni tavoli e ordini asporto. Zero commissioni, pieno controllo.",
    features: [
      "Prenotazioni e ordini automatizzati",
      "Zero commissioni su asporto",
      "Follow-up e fidelizzazione clienti",
      "Report vendite automatici",
    ],
    link: "https://www.kinetrasolutions.com/ristorazione",
  },
];

const Sectors = () => {
  return (
    <section id="settori" className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mx-auto mb-6">
            <span className="text-muted-foreground">Per Chi Lavoriamo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Soluzioni specifiche per <span className="text-gradient">ogni settore</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Costruiamo soluzioni specifiche perché sappiamo che ogni attività ha sfide diverse.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sectors.map((s) => (
            <div key={s.title} className="card-light p-8 flex flex-col">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">{s.title}</h3>
              <p className="text-primary text-sm font-medium mb-5">{s.tagline}</p>

              <div className="mb-4">
                <p className="text-xs uppercase text-neutral-500 tracking-wider mb-1">Il problema</p>
                <p className="text-sm text-neutral-700">{s.problem}</p>
              </div>

              <div className="mb-5">
                <p className="text-xs uppercase text-primary tracking-wider mb-1">La soluzione</p>
                <p className="text-sm text-neutral-700">{s.solution}</p>
              </div>

              <ul className="space-y-2 text-sm mb-6 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2 text-neutral-700">
                    <span className="text-primary">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                Scopri di più <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-6">
            Anche se sei titolare di officina, palestra o qualsiasi altra attività le nostre soluzioni possono fare al caso tuo in quanto sono costruite sul tuo modello di lavoro.
          </p>
          <a
            href="mailto:info@kinetrasolutions.com?subject=Richiesta%20informazioni&body=Buongiorno%2C%0A%0Asarei%20interessato%20alle%20vostre%20soluzioni%20per%20la%20mia%20attivit%C3%A0."
            className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold glow-button"
          >
            Contattaci
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
