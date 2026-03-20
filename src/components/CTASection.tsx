import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cta" className="py-24 md:py-32 section-padding" ref={ref}>
      <div className="container mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-12 md:p-20 text-center card-glow ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <p
              className={`text-sm uppercase tracking-[0.25em] text-primary font-medium mb-4 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              Oferta por tempo limitado
            </p>
            <h2
              className={`font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.15] mb-4 text-balance ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Comece sua jornada{" "}
              <span className="gold-gradient-text">agora mesmo</span>
            </h2>
            <p
              className={`text-muted-foreground text-lg max-w-lg mx-auto mb-8 text-pretty ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              Invista em conhecimento que retorna para você todos os dias.
              Acesso vitalício com garantia de 7 dias.
            </p>

            <div
              className={`mb-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-muted-foreground line-through text-sm mb-1">De R$ 497,00</p>
              <p className="text-4xl md:text-5xl font-bold gold-gradient-text font-display">
                R$ 197<span className="text-2xl">,00</span>
              </p>
              <p className="text-emerald text-sm font-semibold mt-2">
                ou 12x de R$ 19,17
              </p>
            </div>

            <a
              href="#"
              className={`inline-flex items-center justify-center bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-bold text-lg px-12 py-5 rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:brightness-105 uppercase tracking-wider transition-all active:scale-[0.97] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              Garantir minha vaga →
            </a>

            <p
              className={`text-muted-foreground text-xs mt-6 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              Pagamento seguro · Garantia de 7 dias · Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
