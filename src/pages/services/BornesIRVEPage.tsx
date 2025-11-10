import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Car, Zap, Award, Battery, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const BornesIRVEPage = () => {
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
        <title>Installation Borne de Recharge Véhicule Électrique IRVE Essonne - Harmony Renov</title>
        <meta name="description" content="Installation borne de recharge IRVE pour véhicule électrique en Essonne. Électricien qualifié, aides financières, diagnostic gratuit." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Car className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-primary">Bornes de Recharge IRVE</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Installation Borne de Recharge pour Véhicule Électrique
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Rechargez votre véhicule électrique à domicile en toute sécurité. Installation par un électricien qualifié IRVE. Diagnostic, conseil, installation et mise en service complète.
                </p>
                <Button onClick={scrollToContact} variant="cta" size="lg">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nos prestations bornes IRVE</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="text-primary" size={24} />
                      Installation wallbox
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Bornes murales de 3,7 kW à 22 kW</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Marques reconnues : Wallbox, Schneider, Hager</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation intérieure (garage) ou extérieure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Câble de recharge type 2 fourni</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="text-primary" size={24} />
                      Qualification IRVE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Électricien certifié IRVE (obligatoire au-delà de 3,7kW)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Attestation de conformité délivrée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Respect des normes NF C 15-100</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Garantie décennale sur installation</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Battery className="text-primary" size={24} />
                      Diagnostic électrique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Vérification puissance compteur disponible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Analyse capacité tableau électrique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Conseil puissance borne adaptée à vos besoins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Mise à niveau si nécessaire</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="text-primary" size={24} />
                      Bornes intelligentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Bornes connectées Wi-Fi avec application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Programmation heures creuses pour économies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Suivi consommation en temps réel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Badge RFID pour contrôle d'accès</span>
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
                <h2 className="text-3xl font-bold text-center mb-12">Aides financières disponibles</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">300€</div>
                    <h3 className="font-bold text-lg mb-2">Crédit d'impôt</h3>
                    <p className="text-muted-foreground">Crédit d'impôt de 300€ pour installation borne</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">960€</div>
                    <h3 className="font-bold text-lg mb-2">Prime Advenir</h3>
                    <p className="text-muted-foreground">Aide jusqu'à 960€ en habitat collectif</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">TVA 5,5%</div>
                    <h3 className="font-bold text-lg mb-2">TVA réduite</h3>
                    <p className="text-muted-foreground">Taux réduit pour logement de plus de 2 ans</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Rechargez chez vous en toute sérénité</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Diagnostic gratuit, conseil personnalisé et installation professionnelle par électricien qualifié IRVE.
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

export default BornesIRVEPage;
