import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo-harmony-renov.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      // Si on est déjà sur la page d'accueil, scroll direct
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Si on est sur une autre page, naviguer vers l'accueil avec l'ancre
      navigate(`/#${section}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Harmony Renov" className="h-14 w-auto" />
            <div>
              <h2 className="font-bold text-xl text-foreground tracking-tight">HARMONY RENOV</h2>
              <p className="text-xs text-primary font-medium tracking-wide">ÉLECTRICITÉ & TRAVAUX D'INTÉRIEUR</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => handleNavigation("accueil")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Accueil
            </button>
            <button onClick={() => handleNavigation("services")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </button>
            <button onClick={() => handleNavigation("realisations")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Réalisations
            </button>
            <button onClick={() => handleNavigation("apropos")} className="text-foreground hover:text-primary transition-smooth font-medium">
              À propos
            </button>
            <button onClick={() => handleNavigation("temoignages")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Témoignages
            </button>
            <button onClick={() => handleNavigation("contact")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+33780919488" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
              <Phone size={16} />
              <span className="font-medium">07 80 91 94 88</span>
            </a>
            <Button onClick={() => handleNavigation("contact")} variant="cta" size="default">
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
            <button onClick={() => handleNavigation("accueil")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Accueil
            </button>
            <button onClick={() => handleNavigation("services")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </button>
            <button onClick={() => handleNavigation("realisations")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Réalisations
            </button>
            <button onClick={() => handleNavigation("apropos")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              À propos
            </button>
            <button onClick={() => handleNavigation("temoignages")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Témoignages
            </button>
            <button onClick={() => handleNavigation("contact")} className="text-left py-2 text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <a href="tel:+33780919488" className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Phone size={16} />
                <span className="font-medium">07 80 91 94 88</span>
              </a>
              <Button onClick={() => handleNavigation("contact")} variant="cta" size="default" className="w-full">
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
