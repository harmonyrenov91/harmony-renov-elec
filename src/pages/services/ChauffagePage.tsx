import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Thermometer, Wind, Gauge, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ChauffagePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      <Helmet>
        <title>Installation Chauffage Électrique & VMC Essonne - Harmony Renov</title>
        <meta name="description" content="Installation de radiateurs électriques, sèche-serviettes, VMC simple et double flux en Essonne. Chauffage performant et ventilation optimale." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Thermometer className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-primary">Chauffage & Ventilation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Installation Chauffage Électrique & VMC en Essonne
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Optimisez votre confort thermique avec nos solutions de chauffage électrique performantes et nos systèmes de ventilation adaptés. Installation de radiateurs, sèche-serviettes, VMC et thermostats programmables.
                </p>
                <Button onClick={scrollToContact} variant="cta" size="lg">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nos solutions de chauffage et ventilation</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Thermometer className="text-primary" size={24} />
                      Radiateurs électriques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation de radiateurs à inertie dernière génération</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Radiateurs rayonnants pour montée en température rapide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Convecteurs électriques économiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Sèche-serviettes pour salles de bain</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wind className="text-primary" size={24} />
                      VMC et ventilation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation de VMC simple flux autoréglable</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>VMC double flux à récupération de chaleur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>VMC hygroréglable pour optimiser l'humidité</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Entretien et nettoyage de systèmes existants</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gauge className="text-primary" size={24} />
                      Thermostats programmables
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Thermostats connectés Wi-Fi pilotables à distance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Programmation horaire et hebdomadaire</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Régulation par pièce pour confort optimal</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Économies d'énergie jusqu'à 25%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Thermometer className="text-primary" size={24} />
                      Planchers chauffants
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation de planchers chauffants électriques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Chauffage au sol pour salles de bain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Confort thermique homogène sans encombrement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Compatible avec tous types de revêtements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir le chauffage électrique ?</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Thermometer className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Installation simple</h3>
                    <p className="text-muted-foreground">Pas de tuyauterie ni chaudière, installation rapide et propre</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Gauge className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Contrôle précis</h3>
                    <p className="text-muted-foreground">Régulation au degré près pour un confort optimal</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Wind className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Zéro entretien</h3>
                    <p className="text-muted-foreground">Pas de ramonage ni de révision annuelle obligatoire</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Optimisez votre confort thermique</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contactez-nous pour une étude personnalisée de vos besoins en chauffage et ventilation. Devis gratuit en Essonne.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={scrollToContact} variant="cta" size="lg">
                    Demander un devis
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+33764399106" className="flex items-center gap-2">
                      <Phone size={18} />
                      Nous contacter
                    </a>
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

export default ChauffagePage;
