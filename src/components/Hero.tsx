import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Phone } from "lucide-react";
import heroImage from "@/assets/hero-electrician.jpg";
const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return <section id="accueil" className="relative min-h-screen flex items-center bg-gradient-hero pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">
                + de 10 ans d'expérience
              </Badge>
              <Badge variant="outline" className="text-sm border-primary text-primary">
                Certifié & Assuré
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-bold text-neutral-600">
              Électricien Paris & Ile-de-France <span className="text-primary"></span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Travaux d'électricité et rénovation intérieure
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              <strong className="text-primary font-semibold">Fiabilité, sécurité et confort</strong> pour vos installations électriques. 
              Harmony Renov vous accompagne dans tous vos projets avec professionnalisme et expertise.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-foreground/80">Installations conformes aux normes NF C 15-100</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-foreground/80">Intervention rapide à Paris et en Ile-de-France</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                <span className="text-foreground/80">Devis gratuit et tarifs transparents</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToContact} variant="cta" size="lg" className="text-base">
                Demandez votre devis gratuit
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base">
                <a href="tel:+33" className="flex items-center gap-2">
                  <Phone size={18} />
                  Contactez-nous
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-2xl rounded-3xl"></div>
            <img src={heroImage} alt="Électricien professionnel Harmony Renov à Athis-Mons travaillant sur une installation électrique moderne" className="relative rounded-2xl shadow-strong w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;