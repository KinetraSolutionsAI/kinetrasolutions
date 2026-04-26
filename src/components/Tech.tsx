import { motion } from "framer-motion";

const groups = [
  {
    name: "AI / ML",
    items: ["OpenAI GPT", "Claude", "TensorFlow", "LangChain", "Hugging Face"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue", "Tailwind CSS"],
  },
  {
    name: "Automazioni",
    items: ["Make.com", "Zapier", "n8n", "Apache Airflow"],
  },
  {
    name: "Cloud",
    items: ["AWS", "Google Cloud", "Azure", "Vercel", "Cloudflare"],
  },
  {
    name: "No-code & CRM",
    items: ["Airtable", "Notion API", "Retool", "Bubble"],
  },
];

const Tech = () => {
  return (
    <section id="tecnologie" className="py-16 md:py-24 lg:py-32 relative">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="badge-pill mx-auto mb-6">Stack Tecnologico</div>
          <h2 className="section-title mb-5">
            Gli strumenti migliori per <span className="text-gradient">risultati concreti</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {groups.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-6"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">
                {g.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="px-3 py-1.5 rounded-full text-sm bg-secondary/60 border border-border/60 text-foreground/90"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;
