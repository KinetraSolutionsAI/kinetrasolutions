import { Award, Cloud, Cpu, Lock, ShieldCheck, Sparkles, Zap } from "lucide-react";

const badges = [
  { icon: Cloud, label: "Cloud Native" },
  { icon: Cpu, label: "AI Certified" },
  { icon: ShieldCheck, label: "ISO Compliant" },
  { icon: Award, label: "Top Rated Partner" },
  { icon: Zap, label: "Rapid Deploy" },
  { icon: Lock, label: "Enterprise Security" },
  { icon: Sparkles, label: "GPT & Claude Expert" },
];

const TrustBar = () => {
  const items = [...badges, ...badges];
  return (
    <section className="py-12 border-y border-border/40 bg-card/20 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto mb-6">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
          Tecnologia · Competenza · Risultati
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-12 animate-marquee w-max">
          {items.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-muted-foreground/70 whitespace-nowrap"
            >
              <b.icon className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wide">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
