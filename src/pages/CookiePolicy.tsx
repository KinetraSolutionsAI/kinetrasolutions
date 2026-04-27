import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-32 md:py-40 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Torna alla Home
        </Link>
        
        <div className="prose prose-invert prose-zinc max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Cookie Policy</h1>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Cos'è un cookie?</h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. Servono a migliorare l'esperienza di navigazione, ricordare le preferenze di accesso, e per analizzare l'uso del sito per migliorarne la struttura e i contenuti offrendo all'utente anche campagne promozionali in target.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Quali cookie utilizziamo su questo sito</h2>
              <p>Il nostro sito web Kinetra Solutions si avvale delle seguenti categorie di cookie:</p>
              
              <div className="mt-4 space-y-4">
                <div className="bg-card/30 border border-border/50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-2">Cookie Tecnici e Strettamente Necessari</h3>
                  <p className="text-sm">
                    Questi cookie sono essenziali per il corretto funzionamento del sito. Consentono la navigazione, il salvataggio delle preferenze (come l'accettazione o il rifiuto dei cookie stessi) e la fruizione di base del sito. Per questa tipologia di cookie non è richiesto il consenso dell'utente.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-2">Cookie di Navigazione o di Sessione</h3>
                  <p className="text-sm">
                    Garantiscono la normale navigazione e fruizione del sito web, permettendo, ad esempio, di autenticarsi per accedere ad aree riservate.
                  </p>
                </div>

                <div className="bg-card/30 border border-border/50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-2">Cookie di Profilazione e Marketing (Meta Pixel)</h3>
                  <p className="text-sm">
                    Utilizziamo cookie di profilazione di terze parti, specificamente il <strong>Meta Pixel</strong> (di proprietà di Meta Platforms, Inc.), al fine di monitorare il comportamento dei visitatori. Questo ci permette di fornire annunci pubblicitari pertinenti e personalizzati, misurare l'efficacia delle nostre campagne e tracciare conversioni generate dalle inserzioni Meta (Facebook e Instagram). 
                    Questo tipo di cookie raccoglie informazioni sull'utilizzo del sito e sulle azioni intraprese. Il rilascio di questi cookie richiede il tuo esplicito consenso.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Gestione e Revoca del Consenso</h2>
              <p>
                Al tuo primo accesso al nostro sito, ti viene mostrato un banner contenente un'informativa breve. Puoi gestire o modificare le tue preferenze sui cookie o revocare il consenso in qualsiasi momento utilizzando l'apposita funzione del banner o gestendo le impostazioni del tuo browser web. 
              </p>
              <p className="mt-2">
                Qualora il nostro banner non sia visibile, puoi eliminare i cookie memorizzati dalle opzioni offerte dal tuo programma di navigazione e, successivamente alla ricarica della pagina, il banner riapparirà, chiedendoti nuovamente le tue preferenze. Ti ricordiamo che la disabilitazione di alcuni cookie (come il Meta Pixel) non pregiudica la funzionalità del sito, che continuerà a funzionare regolarmente nelle sue funzioni di base.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contatti</h2>
              <p>
                Per maggiori informazioni sull'uso dei cookie da parte di Kinetra Solutions, per esercitare i tuoi diritti previsti dalla normativa in tema protezione dei dati o per dubbi, scrivici a: <a href="mailto:info@kinetrasolutions.com" className="text-primary hover:underline">info@kinetrasolutions.com</a>.
              </p>
              <p className="mt-4 text-sm mt-8 opacity-75">Ultimo aggiornamento: Aprile 2026</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
