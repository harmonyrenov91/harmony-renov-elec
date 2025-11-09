import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">HR</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Harmony Renov</h3>
                <p className="text-sm text-muted-foreground">Électricien Athis-Mons</p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Votre partenaire de confiance pour tous vos travaux d'électricité et de rénovation intérieure 
              en Essonne. Plus de 10 ans d'expérience au service de votre confort et de votre sécurité.
            </p>
            <p className="text-sm text-muted-foreground">
              Certifié • Assuré • Interventions rapides
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-smooth">Électricité générale</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Éclairage</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Chauffage & VMC</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Domotique</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Bornes IRVE</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Informations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#apropos" className="hover:text-primary transition-smooth">À propos</a></li>
              <li><a href="#zone-intervention" className="hover:text-primary transition-smooth">Zone d'intervention</a></li>
              <li><a href="#temoignages" className="hover:text-primary transition-smooth">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Harmony Renov. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-smooth">
              Mentions légales
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              RGPD
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Assurance décennale et Responsabilité Civile Professionnelle - Documents disponibles sur demande
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
