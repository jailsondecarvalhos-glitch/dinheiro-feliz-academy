import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import instructorImg from "@/assets/instructor.jpg";

export default function InstructorSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="instructor" className="py-24 md:py-32 section-padding bg-card/50" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={`relative ${isVisible ? "animate-slide-left" : "opacity-0"}`}
          >
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-background/50">
              <img
                src={instructorImg}
                alt="Instrutora do curso de Educação Financeira"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 -z-10" />
          </div>

          <div>
            <p
              className={`text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4 ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              Sua Instrutora
            </p>
            <h2
              className={`font-display text-3xl md:text-4xl text-foreground leading-[1.15] mb-6 ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Profissional apaixonada por{" "}
              <span className="gold-gradient-text">transformar vidas</span>
            </h2>
            <div
              className={`space-y-4 text-muted-foreground leading-relaxed text-pretty ${
                isVisible ? "animate-slide-right" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <p>
                Com mais de 10 anos de experiência em educação e finanças pessoais,
                nossa instrutora já ajudou milhares de pessoas a saírem das dívidas
                e construírem patrimônio.
              </p>
              <p>
                Especialista em didática financeira, ela desenvolveu um método
                prático e acessível que funciona tanto para quem quer aprender
                quanto para quem precisa ensinar educação financeira.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
