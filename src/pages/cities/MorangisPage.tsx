import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Clock, Phone, MapPin } from "lucide-react";

const MorangisPage = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Électricien à Morangis (91420) | Harmony Renov - Dépannage & Installation</title>
        <meta name="description" content="Électricien professionnel à Morangis (91420). Dépannage urgent, installation électrique, mise aux normes. Devis gratuit. ✓ Intervention rapide ✓ Artisan certifié" />
        <meta name="keywords" content="électricien Morangis, électricité 91420, dépannage électrique Morangis, installation électrique Morangis" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <MapPin size={14} className="mr-1" />
                  Morangis (91420)
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Électricien à Morangis
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Votre électricien de proximité pour tous vos travaux d'électricité à Morangis. 
                  Intervention rapide, devis gratuit et tarifs transparents.
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
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                  Nos services d'électricité à Morangis
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Zap, title: "Installation électrique", description: "Installation complète de votre réseau électrique à Morangis selon les normes NF C 15-100" },
                    { icon: Shield, title: "Mise aux normes", description: "Mise en conformité de votre installation pour votre sécurité" },
                    { icon: Clock, title: "Dépannage 24/7", description: "Intervention rapide en cas de panne électrique à Morangis" },
                    { icon: Zap, title: "Tableau électrique", description: "Rénovation et remplacement de tableau électrique" },
                    { icon: Zap, title: "Éclairage LED", description: "Installation d'éclairage moderne et économique" },
                    { icon: Shield, title: "Bornes IRVE", description: "Installation de bornes de recharge pour véhicules électriques" }
                  ].map((service, index) => (
                    <Card key={index} className="border-border hover:shadow-medium transition-smooth">
                      <CardContent className="pt-6">
                        <service.icon className="text-primary mb-4" size={32} />
                        <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Votre électricien à Morangis (91420)
                </h2>
                
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                  <p>
                    <strong>Harmony Renov</strong> intervient à <strong>Morangis</strong> pour tous vos besoins en électricité. 
                    Basés à proximité à Athis-Mons, nous connaissons parfaitement Morangis et intervenons rapidement dans 
                    tous les quartiers de la ville.
                  </p>
                  
                  <p>
                    Que vous habitiez près de la gare de Morangis, du centre-ville ou dans les zones résidentielles, 
                    nos électriciens qualifiés se déplacent chez vous pour réaliser tous types de travaux électriques : 
                    installation, rénovation, dépannage ou mise aux normes.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Dépannage électrique rapide à Morangis
                  </h3>
                  
                  <p>
                    En cas de <strong>panne électrique urgente</strong> à Morangis, contactez <strong>Harmony Renov</strong>. 
                    Nous intervenons 24h/24 et 7j/7 pour résoudre vos problèmes électriques : disjoncteur qui saute, 
                    coupure de courant, prise défectueuse ou tout autre dysfonctionnement.
                  </p>

                  <p>
                    Notre proximité avec Morangis nous permet d'intervenir rapidement, souvent dans l'heure qui suit 
                    votre appel. Nos électriciens sont équipés du matériel nécessaire pour diagnostiquer et réparer 
                    la panne dans les meilleurs délais.
                  </p>
                </div>

                <div className="mt-12 text-center">
                  <Button size="lg" onClick={scrollToContact}>
                    <Phone className="mr-2" size={20} />
                    Contactez votre électricien à Morangis
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

export default MorangisPage;