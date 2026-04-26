import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo richiede un progetto tipico?",
    a: "Da 2 settimane per un POC a 3 mesi per una piattaforma completa. Lavoriamo con sprint agili per consegnarti valore incrementale.",
  },
  {
    q: "Supportate anche la fase post-lancio?",
    a: "Assolutamente. Offriamo contratti di manutenzione, monitoring e supporto tecnico 24/7.",
  },
  {
    q: "Lavorate con aziende della nostra industry?",
    a: "Siamo industry-agnostic. Abbiamo esperienza in retail, manifattura, servizi professionali, healthcare e fintech.",
  },
  {
    q: "Possiamo integrare con i nostri sistemi esistenti?",
    a: "Sì. Siamo specializzati in integrazioni API e modernizzazione di sistemi legacy senza disruption operativa.",
  },
  {
    q: "Offrite formazione ai nostri team interni?",
    a: "Ogni progetto include training hands-on e documentazione completa per garantire autonomia.",
  },
  {
    q: "Cosa serve per iniziare?",
    a: "Una call di 30 minuti. Nessun commitment, solo una chiacchierata per capire se possiamo aiutarti.",
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
