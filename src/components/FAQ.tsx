import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo ci vuole per completare un progetto?",
    a: "Da 7 giorni a 1 mese in base al carico di lavoro. Riusciamo a completare rapidamente ogni progetto grazie a un team dedicato che lavora H24 per te.",
  },
  {
    q: "Ci assistete anche dopo aver consegnato il lavoro?",
    a: "Certamente. Restiamo al tuo fianco offrendo manutenzione e supporto tecnico continuo per garantire che tutto funzioni sempre al meglio.",
  },
  {
    q: "Lavorate anche nel nostro settore specifico?",
    a: "Sì, le nostre soluzioni sono flessibili e si adattano a qualsiasi tipologia di azienda. Che tu abbia un negozio o una grande impresa, sappiamo come aiutarti.",
  },
  {
    q: "Potete collegare i nuovi software ai programmi che usiamo già in azienda?",
    a: "Assolutamente sì. Facciamo in modo che le nuove tecnologie si aggancino ai tuoi sistemi attuali per modernizzarli, senza causare interruzioni al vostro lavoro.",
  },
  {
    q: "Insegnerete ai nostri dipendenti come usare i nuovi sistemi?",
    a: "Sì, alla consegna vi spiegheremo passo dopo passo come utilizzare tutto, affinché il tuo team sia subito autonomo e operativo.",
  },
  {
    q: "Cosa devo fare per iniziare?",
    a: "Basta contattarci per una semplice chiacchierata gratuita. Senza alcun impegno, capiremo le tue esigenze e ti diremo cosa possiamo fare per te.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="badge-pill mx-auto mb-6">FAQ</div>
          <h2 className="section-title mb-5">
            Domande <span className="text-gradient">frequenti</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card !border px-6 !rounded-2xl"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
