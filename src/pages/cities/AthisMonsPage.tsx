import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Clock, Star, Phone, MapPin } from "lucide-react";

const AthisMonsPage = () => {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

  return (
    <>
      <Helmet>
        <title>Électricien à Athis-Mons (91200) | Harmony Renov - Dépannage & Installation</title>
        <meta name="description" content="Électricien professionnel à Athis-Mons (91200). Dépannage urgent 24/7, installation électrique, mise aux normes. Devis gratuit. ✓ Intervention rapide ✓ Artisan local certifié" />
        <meta name="keywords" content="électricien Athis-Mons, électricité 91200, dépannage électrique Athis-Mons, installation électrique Athis-Mons" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-4">
                  <MapPin size={14} className="mr-1" />
                  Athis-Mons (91200)
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Électricien à Athis-Mons
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Votre artisan électricien local pour tous vos travaux d'électricité à Athis-Mons et ses environs. 
                  Intervention rapide, devis gratuit et tarifs transparents.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={scrollToContact} className="text-lg">
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

          {/* Services Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                  Nos services d'électricité à Athis-Mons
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Zap,
                      title: "Installation électrique",
                      description: "Installation complète de votre réseau électrique neuf ou rénové à Athis-Mons selon les normes NF C 15-100"
                    },
                    {
                      icon: Shield,
                      title: "Mise aux normes",
                      description: "Mise en conformité de votre installation électrique pour votre sécurité et celle de votre habitation"
                    },
                    {
                      icon: Clock,
                      title: "Dépannage urgent 24/7",
                      description: "Intervention rapide en cas de panne électrique, disjoncteur qui saute ou problème urgent à Athis-Mons"
                    },
                    {
                      icon: Zap,
                      title: "Tableau électrique",
                      description: "Rénovation et remplacement de tableau électrique aux normes pour votre maison ou appartement"
                    },
                    {
                      icon: Star,
                      title: "Éclairage LED",
                      description: "Installation d'éclairage moderne LED, spots encastrés et luminaires design"
                    },
                    {
                      icon: Shield,
                      title: "Bornes de recharge",
                      description: "Installation de bornes IRVE pour véhicules électriques certifiée Qualifelec"
                    }
                  ].map((service, index) => (
                    <Card key={index} className="border-border hover:shadow-medium transition-smooth">
                      <CardContent className="pt-6">
                        <service.icon className="text-primary mb-4" size={32} />
                        <h3 className="font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                  Pourquoi choisir Harmony Renov à Athis-Mons ?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg text-foreground mb-3">🏠 Artisan local basé à Athis-Mons</h3>
                      <p className="text-muted-foreground">
                        Entreprise locale implantée à Athis-Mons depuis plusieurs années. Nous connaissons parfaitement 
                        le secteur et intervenons rapidement chez vous.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg text-foreground mb-3">⚡ Intervention rapide</h3>
                      <p className="text-muted-foreground">
                        Dépannage d'urgence 24h/24 et 7j/7 à Athis-Mons. En cas de panne électrique, 
                        nous intervenons dans les plus brefs délais.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg text-foreground mb-3">💰 Devis gratuit et transparent</h3>
                      <p className="text-muted-foreground">
                        Devis détaillé gratuit avant chaque intervention. Tarifs clairs et transparents, 
                        sans surprise à la fin des travaux.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg text-foreground mb-3">✅ Travaux garantis et certifiés</h3>
                      <p className="text-muted-foreground">
                        Tous nos travaux sont garantis et réalisés dans le respect des normes électriques 
                        en vigueur (NF C 15-100).
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Local Content Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Votre électricien de confiance à Athis-Mons (91200)
                </h2>
                
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-4">
                  <p>
                    <strong>Harmony Renov</strong> est votre partenaire de confiance pour tous vos travaux d'électricité 
                    à <strong>Athis-Mons</strong> et dans tout le département de l'Essonne (91). Que vous soyez un particulier 
                    ou un professionnel, nous intervenons pour l'installation, la rénovation ou le dépannage de vos 
                    installations électriques.
                  </p>
                  
                  <p>
                    Situés directement à Athis-Mons, nous connaissons parfaitement la ville et ses quartiers : le centre-ville, 
                    le quartier de la Gare, les Cités Jardin, et tous les secteurs résidentiels. Cette proximité nous permet 
                    d'intervenir rapidement en cas d'urgence et de vous offrir un service de qualité à des tarifs compétitifs.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Nos prestations d'électricité à Athis-Mons
                  </h3>
                  
                  <p>
                    Que ce soit pour une <strong>installation électrique complète</strong> dans une construction neuve ou une 
                    rénovation, une <strong>mise aux normes</strong> de votre tableau électrique, ou un <strong>dépannage 
                    électrique urgent</strong>, nos électriciens qualifiés sont à votre service.
                  </p>

                  <p>
                    Nous réalisons également l'installation de <strong>bornes de recharge pour véhicules électriques</strong> (IRVE), 
                    l'installation de <strong>systèmes de chauffage électrique</strong>, de <strong>VMC</strong>, ainsi que tous 
                    travaux de <strong>domotique</strong> pour rendre votre maison plus intelligente et confortable.
                  </p>

                  <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                    Dépannage électrique urgent à Athis-Mons
                  </h3>
                  
                  <p>
                    Une panne électrique peut survenir à tout moment. C'est pourquoi <strong>Harmony Renov</strong> propose 
                    un service de <strong>dépannage électrique 24h/24 et 7j/7</strong> à Athis-Mons. Disjoncteur qui saute, 
                    panne de courant totale, prise électrique défectueuse ou court-circuit : nous intervenons rapidement 
                    pour diagnostiquer et résoudre votre problème électrique en toute sécurité.
                  </p>
                </div>

                <div className="mt-12 text-center">
                  <Button size="lg" onClick={scrollToContact}>
                    <Phone className="mr-2" size={20} />
                    Contactez votre électricien à Athis-Mons
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

export default AthisMonsPage;