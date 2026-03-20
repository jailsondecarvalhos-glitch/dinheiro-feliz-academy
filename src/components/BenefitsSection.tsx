import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Aulas 100% online e no seu ritmo",
  "Material didático exclusivo em PDF",
  "Certificado de conclusão reconhecido",
  "Comunidade exclusiva de alunos",
  "Planilhas de controle financeiro prontas",
  "Suporte direto com a instrutora",
  "Acesso vitalício ao conteúdo",
  "Atualizações constantes do material",
];

export default function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="benefits" className="py-24 md:py-32 section-padding bg-card/50" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className={`text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4 ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              Por que escolher este curso?
            </p>
            <h2
              className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-6 text-balance ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              Tudo que você precisa para{" "}
              <span className="gold-gradient-text">seu sucesso financeiro</span>
            </h2>
            <p
              className={`text-muted-foreground text-lg text-pretty leading-relaxed ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Este curso foi pensado para quem está começando e também para quem
              quer aprofundar seus conhecimentos. Professores encontram aqui
              ferramentas para ensinar educação financeira em sala de aula.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 p-4 rounded-xl bg-background/60 border border-border ${
                  isVisible ? "animate-fade-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
              >
                <CheckCircle2 className="text-emerald shrink-0 mt-0.5" size={20} />
                <span className="text-sm text-foreground leading-snug">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
