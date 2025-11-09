import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";

const ViryChatillonPage = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Électricien à Viry-Châtillon (91170) | Harmony Renov</title>
        <meta name="description" content="Électricien professionnel à Viry-Châtillon (91170). Dépannage urgent, installation électrique, bornes IRVE. Devis gratuit. ✓ Intervention rapide" />
        <meta name="keywords" content="électricien Viry-Châtillon, électricité 91170, dépannage Viry" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <MapPin size={14} className="mr-1" />
                  Viry-Châtillon (91170)
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Électricien à Viry-Châtillon
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Installation électrique et dépannage urgent à Viry-Châtillon. Devis gratuit.
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
                <h2>Votre électricien à Viry-Châtillon (91170)</h2>
                <p>
                  <strong>Harmony Renov</strong> intervient à <strong>Viry-Châtillon</strong> pour tous vos travaux 
                  électriques : installation complète, mise aux normes, dépannage 24/7, installation de bornes IRVE.
                </p>
                <p>
                  Électricien qualifié proche de Viry-Châtillon, nous garantissons une intervention rapide et des 
                  travaux de qualité conformes aux normes NF C 15-100.
                </p>
                <div className="text-center mt-8">
                  <Button size="lg" onClick={scrollToContact}>
                    Demander un devis gratuit
                  </Button>
                  <div className="mt-4">
                    <a href="tel:+33780919488" className="text-2xl font-bold text-primary hover:text-primary/80 transition-smooth">
                      07 80 91 94 88
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

export default ViryChatillonPage;