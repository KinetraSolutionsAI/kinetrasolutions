import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-32 md:py-40 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Torna alla Home
        </Link>
        
        <div className="prose prose-invert prose-zinc max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informazioni generali</h2>
              <p>
                Benvenuti su Kinetra Solutions. La presente Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali quando visiti il nostro sito web e utilizzi i nostri servizi. La tua privacy è di massima importanza per noi, e ci impegniamo a gestirla con trasparenza e in conformità con la normativa vigente (GDPR).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Titolare del Trattamento</h2>
              <p>
                Il Titolare del Trattamento dei dati personali è Kinetra Solutions. Per qualsiasi richiesta relativa alla gestione dei tuoi dati, puoi contattarci all'indirizzo email: <a href="mailto:info@kinetrasolutions.com" className="text-primary hover:underline">info@kinetrasolutions.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Quali dati raccogliamo</h2>
              <p>Possiamo raccogliere le seguenti categorie di dati:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Dati forniti volontariamente:</strong> Nome, email, telefono e altre informazioni inserite nei moduli di contatto.</li>
                <li><strong>Dati di navigazione:</strong> Indirizzi IP, tipo di browser, pagine visitate e tempo trascorso sul sito.</li>
                <li><strong>Dati di tracciamento e marketing:</strong> Potremmo utilizzare il <strong>Meta Pixel</strong> (ex Facebook Pixel) per raccogliere dati sull'attività degli utenti nel sito, per personalizzare le inserzioni pubblicitarie e misurare l'efficacia delle nostre campagne di marketing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Finalità del trattamento</h2>
              <p>I tuoi dati saranno trattati per le seguenti finalità:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Rispondere alle tue richieste di informazioni e consulenza.</li>
                <li>Migliorare l'esperienza di navigazione sul nostro sito e inviarti aggiornamenti o materiale promozionale relativo ai nostri servizi (solo previo esplicito consenso).</li>
                <li>Analizzare il traffico sul sito e le interazioni tramite strumenti statistici e di marketing (es. Meta Pixel, per azioni di retargeting).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Trasferimento a Terze Parti</h2>
              <p>
                Non vendiamo né affittiamo i tuoi dati a terzi. Tuttavia, i dati potrebbero essere condivisi con fornitori di servizi terzi (es. servizi di hosting, strumenti di analisi come Meta) necessari per il funzionamento del sito. I dati trattati tramite Meta Pixel potrebbero essere trasferiti al di fuori dello Spazio Economico Europeo (SEE), in conformità alle policy di Meta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Diritti dell'utente</h2>
              <p>
                In ogni momento, hai il diritto di richiedere l'accesso, la rettifica, la cancellazione dei tuoi dati o l'opposizione al loro trattamento contattandoci via email. Hai inoltre il diritto di revocare il consenso all'uso dei cookie o dei pixel di tracciamento attraverso le preferenze del browser o il nostro banner cookie.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modifiche alla Policy</h2>
              <p>
                Ci riserviamo il diritto di aggiornare periodicamente la presente Privacy Policy per conformarci a modifiche legislative o adattamenti dei nostri servizi. Ti invitiamo a visitare frequentemente questa pagina.
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

export default PrivacyPolicy;
