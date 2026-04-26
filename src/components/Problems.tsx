import { Phone, Clock, Lock, Repeat } from "lucide-react";

const problems = [
  {
    icon: Phone,
    title: "Il telefono squilla mentre lavori",
    text: "Ogni chiamata persa è un cliente che non torna. E intanto perdi tempo e concentrazione sul lavoro che stai facendo.",
  },
  {
    icon: Clock,
    title: "Perdi clienti se non rispondi subito",
    text: "I clienti non aspettano. Se non rispondi in pochi minuti, vanno dalla concorrenza. Tempo perso, soldi persi.",
  },
  {
    icon: Lock,
    title: "Senza di te tutto si blocca",
    text: "Ogni richiesta, decisione o problema passa da te. Non puoi delegare, non puoi staccare, non puoi crescere.",
  },
  {
    icon: Repeat,
    title: "Troppo lavoro manuale ripetitivo",
    text: "Copi, incolli, rispondi, aggiorni e controlli tutto a mano. Attività che un sistema automatico potrebbe gestire al posto tuo.",
  },
];

const Problems = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mx-auto mb-6">
            <span className="text-muted-foreground">I Problemi che Risolviamo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ti riconosci in queste <span className="text-gradient">situazioni?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Sono i problemi più comuni delle attività locali. E sono tutti risolvibili.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((p) => (
            <div key={p.title} className="card-light p-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-neutral-900">{p.title}</h3>
              <p className="text-neutral-700 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
