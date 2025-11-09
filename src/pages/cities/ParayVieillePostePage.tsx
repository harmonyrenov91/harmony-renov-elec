import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";

const ParayVieillePostePage = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Électricien à Paray-Vieille-Poste (91550) | Harmony Renov</title>
        <meta name="description" content="Électricien professionnel à Paray-Vieille-Poste (91550). Dépannage urgent, installation électrique. Devis gratuit. ✓ Intervention rapide" />
        <meta name="keywords" content="électricien Paray-Vieille-Poste, électricité 91550, dépannage électrique Paray" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <MapPin size={14} className="mr-1" />
                  Paray-Vieille-Poste (91550)
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Électricien à Paray-Vieille-Poste
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Votre électricien local à Paray-Vieille-Poste pour tous vos travaux électriques.
                </p>
                <Button size="lg" onClick={scrollToContact}>
                  <Phone className="mr-2" size={20} />
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-lg text-foreground/80">
                <h2>Services électriques à Paray-Vieille-Poste</h2>
                <p>
                  <strong>Harmony Renov</strong> intervient à <strong>Paray-Vieille-Poste</strong> pour tous vos besoins 
                  en électricité : installation, rénovation, dépannage urgent 24/7.
                </p>
                <p>
                  Basés à proximité, nous garantissons une intervention rapide sur Paray-Vieille-Poste. 
                  Nos électriciens sont qualifiés et certifiés pour tous types de travaux électriques.
                </p>
                <div className="text-center mt-8">
                  <Button size="lg" onClick={scrollToContact}>
                    Contactez votre électricien
                  </Button>
                  <div className="mt-4">
                    <a href="tel:+33764399106" className="text-2xl font-bold text-primary hover:text-primary/80 transition-smooth">
                      07 64 39 91 06
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Appelez directement</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ParayVieillePostePage;