import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin } from "lucide-react";

const SavignySurOrgePage = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Électricien à Savigny-sur-Orge (91600) | Harmony Renov</title>
        <meta name="description" content="Électricien professionnel à Savigny-sur-Orge (91600). Dépannage urgent, installation électrique, mise aux normes. Devis gratuit. ✓ Intervention rapide" />
        <meta name="keywords" content="électricien Savigny-sur-Orge, électricité 91600, dépannage Savigny, installation électrique" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <MapPin size={14} className="mr-1" />
                  Savigny-sur-Orge (91600)
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Électricien à Savigny-sur-Orge
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Votre électricien de confiance à Savigny-sur-Orge. Installation, dépannage, rénovation électrique.
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
                <h2>Électricien professionnel à Savigny-sur-Orge (91600)</h2>
                <p>
                  <strong>Harmony Renov</strong> intervient à <strong>Savigny-sur-Orge</strong> pour tous vos travaux 
                  d'électricité. Installation complète, mise aux normes, dépannage urgent : nos électriciens qualifiés 
                  sont à votre service.
                </p>
                <p>
                  Nous intervenons dans tous les quartiers de Savigny-sur-Orge avec une garantie de réactivité et de 
                  professionnalisme. Devis gratuit, tarifs transparents et travaux garantis.
                </p>
                <div className="text-center mt-8">
                  <Button size="lg" onClick={scrollToContact}>
                    Contactez-nous
                  </Button>
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

export default SavignySurOrgePage;