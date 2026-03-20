import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda Oliveira",
    role: "Professora de Matemática",
    text: "Mudou completamente minha relação com o dinheiro. Agora consigo ensinar educação financeira para meus alunos com confiança.",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Servidor Público",
    text: "Saí das dívidas em 8 meses seguindo o método do curso. As planilhas são um diferencial incrível.",
    stars: 5,
  },
  {
    name: "Ana Beatriz Lima",
    role: "Empreendedora",
    text: "O módulo de investimentos abriu minha mente. Hoje meu dinheiro trabalha para mim enquanto foco no meu negócio.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p
            className={`text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Depoimentos
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground text-balance leading-[1.15] ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            O que dizem nossos <span className="gold-gradient-text">alunos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-card border border-border rounded-2xl p-8 card-glow ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="text-primary fill-primary" size={16} />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-pretty">"{t.text}"</p>
              <div>
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm mb-2">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
