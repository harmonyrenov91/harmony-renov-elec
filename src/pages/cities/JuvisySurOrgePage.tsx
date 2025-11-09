import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Clock, Phone, MapPin } from "lucide-react";

const JuvisySurOrgePage = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Électricien à Juvisy-sur-Orge (91260) | Harmony Renov - Dépannage & Installation</title>
        <meta name="description" content="Électricien professionnel à Juvisy-sur-Orge (91260). Dépannage urgent, installation électrique, mise aux normes. Devis gratuit. ✓ Intervention rapide" />
        <meta name="keywords" content="électricien Juvisy-sur-Orge, électricité 91260, dépannage électrique Juvisy, installation électrique Juvisy" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <MapPin size={14} className="mr-1" />
                  Juvisy-sur-Orge (91260)
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Électricien à Juvisy-sur-Orge
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Votre électricien local pour tous vos travaux d'électricité à Juvisy-sur-Orge. 
                  Intervention rapide, devis gratuit et expertise certifiée.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact}>
                    <Phone className="mr-2" size={20} />
                    Demander un devis gratuit
                  </Button>
                  <Button size="lg" variant="outline" onClick={scrollToContact}>
                    Dépannage urgent
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Électricien qualifié à Juvisy-sur-Orge (91260)
                </h2>
                
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                  <p>
                    <strong>Harmony Renov</strong> est votre électricien de confiance à <strong>Juvisy-sur-Orge</strong>. 
                    Nous intervenons dans toute la ville pour vos installations électriques, rénovations et dépannages urgents.
                  </p>
                  
                  <p>
                    Que vous soyez situé près de la gare de Juvisy, dans le quartier de la Pointe, ou dans n'importe quel 
                    secteur de Juvisy-sur-Orge, nos électriciens qualifiés interviennent rapidement pour tous vos besoins 
                    en électricité.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Nos prestations électriques à Juvisy-sur-Orge
                  </h3>
                  
                  <ul className="space-y-2 list-disc list-inside">
                    <li><strong>Installation électrique complète</strong> : pour vos constructions neuves ou rénovations</li>
                    <li><strong>Mise aux normes NF C 15-100</strong> : sécurisation de votre installation électrique</li>
                    <li><strong>Dépannage électrique 24/7</strong> : intervention rapide en cas de panne</li>
                    <li><strong>Tableau électrique</strong> : rénovation et mise en conformité</li>
                    <li><strong>Bornes de recharge IRVE</strong> : installation certifiée pour véhicules électriques</li>
                    <li><strong>Éclairage et domotique</strong> : solutions modernes et connectées</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Pourquoi choisir Harmony Renov à Juvisy-sur-Orge ?
                  </h3>
                  
                  <p>
                    Situés à proximité de Juvisy-sur-Orge, nous garantissons une <strong>intervention rapide</strong> sur 
                    toute la ville. Nos électriciens sont formés aux dernières normes et disposent de tout le matériel 
                    nécessaire pour intervenir efficacement.
                  </p>

                  <p>
                    Nous proposons systématiquement un <strong>devis gratuit et détaillé</strong> avant chaque intervention. 
                    Nos tarifs sont transparents et compétitifs. Tous nos travaux sont garantis et réalisés dans le respect 
                    des normes électriques en vigueur.
                  </p>
                </div>

                <div className="mt-12 text-center">
                  <Button size="lg" onClick={scrollToContact}>
                    <Phone className="mr-2" size={20} />
                    Contactez votre électricien à Juvisy-sur-Orge
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

export default JuvisySurOrgePage;