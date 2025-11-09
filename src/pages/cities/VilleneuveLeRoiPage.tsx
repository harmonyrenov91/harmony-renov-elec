import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";

const VilleneuveLeRoiPage = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Électricien à Villeneuve-le-Roi (94290) | Harmony Renov</title>
        <meta name="description" content="Électricien professionnel à Villeneuve-le-Roi (94290). Dépannage urgent, installation électrique. Devis gratuit." />
        <meta name="keywords" content="électricien Villeneuve-le-Roi, électricité 94290, dépannage Villeneuve" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <MapPin size={14} className="mr-1" />
                  Villeneuve-le-Roi (94290)
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Électricien à Villeneuve-le-Roi
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Votre électricien à Villeneuve-le-Roi. Installation et dépannage électrique.
                </p>
                <Button size="lg" onClick={scrollToContact}>
                  <Phone className="mr-2" size={20} />
                  Demander un devis
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto prose prose-lg text-foreground/80">
                <h2>Électricien professionnel à Villeneuve-le-Roi</h2>
                <p>
                  <strong>Harmony Renov</strong> intervient à <strong>Villeneuve-le-Roi</strong> pour tous vos travaux 
                  électriques : installation, dépannage urgent, mise aux normes.
                </p>
                <p>
                  Proche de Villeneuve-le-Roi, nous assurons une intervention rapide et des travaux de qualité. 
                  Devis gratuit sur simple demande.
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

export default VilleneuveLeRoiPage;