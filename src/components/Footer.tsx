export default function Footer() {
  return (
    <footer className="py-12 section-padding border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg gold-gradient-text">Educação Financeira</p>
            <p className="text-muted-foreground text-sm mt-1">
              Transformando vidas através do conhecimento.
            </p>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Educação Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
