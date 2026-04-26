import { motion } from "framer-motion";

const benefits = [
  {
    title: "Intelligenza Artificiale Utile",
    description: "Sfruttiamo l'AI per risolvere problemi reali: dall'analisi avanzata dei tuoi dati agli assistenti virtuali che lavorano per te 24 ore su 24.",
  },
  {
    title: "Sistemi Solidi e Scalabili",
    description: "Creiamo fondamenta sicure per il tuo progetto. Niente blocchi: le nostre piattaforme crescono in tranquillità insieme al fatturato della tua azienda.",
  },
  {
    title: "Piattaforme Semplici da Usare",
    description: "Nessun manuale d'istruzioni. Sviluppiamo strumenti che tu e il tuo team imparerete a usare in 5 minuti, fluidi su ogni computer o smartphone.",
  },
  {
    title: "Zero Lavoro Manuale",
    description: "Facciamo comunicare i tuoi software tra loro in modo automatico. Riduciamo drasticamente le ore perse in compiti noiosi, ripetitivi o soggetti a errori.",
  },
  {
    title: "I Tuoi Dati Sempre al Sicuro",
    description: "Il tuo lavoro è protetto e accessibile. Ci affidiamo alle migliori tecnologie cloud moderne per garantire massima velocità e sicurezza.",
  },
  {
    title: "Flessibilità e Adattamento",
    description: "Non ti ingabbiamo in software rigidi da scaffale. Consegniamo strumenti pensati per ricalcare i tuoi processi lavorativi, e non viceversa.",
  },
];

const Tech = () => {
  return (
    <section id="tecnologie" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 md:px-6">
          <div className="badge-pill mx-auto mb-6">Come Ti Aiutiamo</div>
          <h2 className="section-title mb-5">
            Non ti vendiamo tecnologia, <span className="text-gradient">ti portiamo risultati</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Semplifichiamo gli strumenti tecnici più complessi per trasformarli nella leva di crescita più potente per il tuo business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-6 flex flex-col"
            >
              <h3 className="text-lg font-bold text-foreground/90 mb-3 tracking-tight">
                {b.title}
              </h3>
              <p className="text-foreground/70 text-[15px] leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
