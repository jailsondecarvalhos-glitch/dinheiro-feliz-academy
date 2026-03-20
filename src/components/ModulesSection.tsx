import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { BookOpen, PiggyBank, TrendingUp, Shield, Target, Calculator } from "lucide-react";

const modules = [
  {
    icon: BookOpen,
    title: "Mentalidade Financeira",
    desc: "Reprograme suas crenças sobre dinheiro e desenvolva hábitos que transformam.",
  },
  {
    icon: PiggyBank,
    title: "Orçamento Inteligente",
    desc: "Aprenda a organizar suas finanças com métodos práticos e eficientes.",
  },
  {
    icon: Shield,
    title: "Reserva de Emergência",
    desc: "Construa sua rede de segurança financeira e durma tranquilo.",
  },
  {
    icon: TrendingUp,
    title: "Investimentos",
    desc: "Do básico ao intermediário: renda fixa, variável e diversificação.",
  },
  {
    icon: Target,
    title: "Metas e Planejamento",
    desc: "Defina objetivos claros e trace o caminho para alcançá-los.",
  },
  {
    icon: Calculator,
    title: "Impostos e Direitos",
    desc: "Entenda seus direitos como contribuinte e otimize sua declaração.",
  },
];

export default function ModulesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="modules" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Conteúdo Programático
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-[1.15] ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            Módulos do <span className="gold-gradient-text">Curso</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <div
              key={mod.title}
              className={`group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 card-glow ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <mod.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">{mod.title}</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
