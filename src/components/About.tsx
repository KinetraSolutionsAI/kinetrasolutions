import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="chi-siamo" className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mx-auto mb-6">
            <span className="text-muted-foreground">Chi Siamo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fondatori & <span className="text-gradient">System Architects</span>
          </h2>
          <p className="text-xl italic text-foreground/80 mb-4">
            "Dietro ogni automazione c'è una visione umana."
          </p>
          <p className="text-muted-foreground text-lg">
            Siamo Stefano Taino e Antonio Valente, e insieme abbiamo fondato Kinetra Solutions per aiutare le attività locali a uscire dal caos operativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          <div className="card-elegant p-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center text-2xl font-black text-primary-foreground mb-5">
              ST
            </div>
            <h3 className="text-2xl font-bold mb-1">Stefano Taino</h3>
            <p className="text-primary text-sm font-semibold mb-4">Co-Founder & Tech Architect</p>
            <p className="text-muted-foreground mb-4">
              Porta in Kinetra oltre un decennio di esperienza in e-commerce, marketing digitale e automazioni basate su intelligenza artificiale. La sua missione è costruire infrastrutture digitali su misura che liberano tempo e risorse.
            </p>
            <div className="badge-pill">10+ anni di esperienza in automazioni AI</div>
          </div>

          <div className="card-elegant p-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center text-2xl font-black text-primary-foreground mb-5">
              AV
            </div>
            <h3 className="text-2xl font-bold mb-1">Antonio Valente</h3>
            <p className="text-primary text-sm font-semibold mb-4">Co-Founder & Strategy Lead</p>
            <p className="text-muted-foreground mb-4">
              Fondatore di Metodo Sincro®, azienda di mental coaching che ha già aiutato più di 1.100 atleti e ha superato 1 milione di euro di fatturato.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-secondary rounded-lg p-3 text-center">
                <div className="text-xl font-black text-primary">8.880+</div>
                <div className="text-xs text-muted-foreground">ore di consulenza</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 text-center">
                <div className="text-xl font-black text-primary">20+</div>
                <div className="text-xs text-muted-foreground">professionisti nel team</div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-2">La Repubblica · Sport Mediaset · La Gazzetta · Millionaire</p>
            <p className="text-xs text-primary mb-4">#1 in Italia su Trustpilot • 5 stelle su 342 recensioni</p>
            <a href="https://valenteantonio.it/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
              Scopri di più su Antonio <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-20 space-y-5">
          <p className="text-lg text-foreground/90">
            Insieme uniamo tecnologia e mentalità vincente per creare soluzioni che non solo automatizzano, ma trasformano il modo in cui lavori.
          </p>
          <p className="text-muted-foreground">
            Non crediamo nei software 'copia e incolla' che vi tengono prigionieri. Il nostro obiettivo è costruire l'infrastruttura digitale della vostra azienda: sistemi intelligenti che rispondono ai clienti, gestionali che ordinano i vostri dati e automazioni che vi restituiscono il tempo che meritate.
          </p>
          <p className="text-primary font-medium">
            Con Kinetra Solutions, il software è vostro, i dati sono vostri e il risultato è garantito.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-2">
            Perché <span className="text-gradient">Kinetra Solutions</span> è diverso
          </h3>
          <p className="text-center text-muted-foreground mb-10">
            Non vendiamo software. Costruiamo sistemi che lavorano al posto vostro.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Costruito su misura, non adattato", d: "Non vi vendiamo un software standard. Studiamo come lavorate oggi, individuiamo i colli di bottiglia, costruiamo la soluzione che si integra perfettamente." },
              { t: "Persone reali, non call center", d: "Quando ci contattate, parlate direttamente con noi. Noi analizziamo il problema, noi progettiamo la soluzione, noi vi seguiamo nell'implementazione." },
              { t: "Focus sui risultati misurabili", d: "Non vi vendiamo 'innovazione'. Vi vendiamo ore risparmiate, costi ridotti, clienti non persi. Numeri concreti che si vedono sul conto corrente." },
            ].map((i) => (
              <div key={i.t} className="card-elegant p-6">
                <h4 className="font-bold mb-3 text-primary">{i.t}</h4>
                <p className="text-sm text-muted-foreground">{i.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-2">
            A chi si rivolge <span className="text-gradient">Kinetra Solutions?</span>
          </h3>
          <p className="text-center text-muted-foreground mb-10">
            Titolari e professionisti che vogliono eliminare il caos operativo.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {[
              { t: "Il lavoro gestionale vi ruba tempo", d: "Ore perse al telefono invece di produrre valore." },
              { t: "Perdete clienti per risposte lente", d: "Non riuscite a rispondere in tempo reale." },
              { t: "Volete un sistema su misura per voi", d: "Nessun software standard si adatta al vostro business." },
            ].map((i) => (
              <div key={i.t} className="card-elegant p-6">
                <h4 className="font-bold mb-3">{i.t}</h4>
                <p className="text-sm text-muted-foreground">{i.d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-primary font-semibold">Ti riconosci? Possiamo aiutarti.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
