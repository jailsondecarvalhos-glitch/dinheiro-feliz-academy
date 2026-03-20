import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto section-padding pt-24">
        <p
          className="text-sm uppercase tracking-[0.3em] text-primary font-medium mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          ★ Transforme sua vida financeira
        </p>

        <h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 text-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Educação Financeira{" "}
          <span className="gold-gradient-text">Para Todos</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 text-pretty opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          Aprenda a cuidar do seu dinheiro, construir patrimônio e conquistar
          liberdade financeira. Um curso feito para professores e para quem quer
          mudar de vida.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center bg-gradient-to-r from-gold to-gold-light text-primary-foreground font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 hover:brightness-105 uppercase tracking-widest transition-all active:scale-[0.97]"
          >
            Quero me inscrever →
          </a>
          <a
            href="#modules"
            className="inline-flex items-center justify-center border border-primary/30 text-primary bg-transparent hover:bg-primary/10 px-8 py-4 rounded-xl font-semibold transition-all active:scale-[0.97]"
          >
            Conhecer o curso
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#modules"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}
