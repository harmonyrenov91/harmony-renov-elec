import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">HR</span>
            </div>
            <div>
              <h2 className="font-bold text-lg text-foreground">Harmony Renov</h2>
              <p className="text-xs text-muted-foreground">Électricien Athis-Mons</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("accueil")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("apropos")} className="text-foreground hover:text-primary transition-smooth font-medium">
              À propos
            </button>
            <button onClick={() => scrollToSection("temoignages")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Témoignages
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+33" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
              <Phone size={16} />
              <span className="font-medium">Appelez-nous</span>
            </a>
            <Button onClick={() => scrollToSection("contact")} variant="cta" size="default">
              Devis gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth"
          >
            <Menu size={24} className="text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-border pt-4">
            <button onClick={() => scrollToSection("accueil")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Accueil
            </button>
            <button onClick={() => scrollToSection("services")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("apropos")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              À propos
            </button>
            <button onClick={() => scrollToSection("temoignages")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Témoignages
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <a href="tel:+33" className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Phone size={16} />
                <span className="font-medium">Appelez-nous</span>
              </a>
              <Button onClick={() => scrollToSection("contact")} variant="cta" size="default" className="w-full">
                Devis gratuit
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
