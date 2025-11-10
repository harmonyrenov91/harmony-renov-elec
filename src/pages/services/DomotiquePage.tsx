import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Smartphone, Wifi, Home, Zap, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DomotiquePage = () => {
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
        <title>Installation Domotique & Maison Connectée Essonne - Harmony Renov</title>
        <meta name="description" content="Installation domotique en Essonne : pilotage éclairage, chauffage, volets. Maison connectée intelligente pour plus de confort et d'économies." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Smartphone className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-primary">Domotique & Confort Connecté</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Transformez votre maison en habitat intelligent
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Profitez du confort et des économies d'une maison connectée. Pilotez votre éclairage, chauffage et volets depuis votre smartphone. Solutions domotiques simples et accessibles.
                </p>
                <Button onClick={scrollToContact} variant="cta" size="lg">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Solutions domotiques</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="text-primary" size={24} />
                      Éclairage connecté
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Interrupteurs et variateurs Wi-Fi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Ampoules connectées Philips Hue, Yeelight</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Création de scénarios d'ambiance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Commande vocale Alexa, Google Home</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="text-primary" size={24} />
                      Chauffage intelligent
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Thermostats connectés Netatmo, Nest</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Programmation à distance depuis smartphone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Détection de présence et géolocalisation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Économies jusqu'à 25% sur facture</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Wifi className="text-primary" size={24} />
                      Volets et stores motorisés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Motorisation volets roulants connectée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Pilotage centralisé de tous les volets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Programmation horaire lever/coucher soleil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Simulation de présence en cas d'absence</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="text-primary" size={24} />
                      Box domotique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation box domotique centralisée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Systèmes Home Assistant, Jeedom, Fibaro</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Contrôle total depuis une seule application</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Compatibilité tous protocoles (Z-Wave, Zigbee)</span>
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
                <h2 className="text-3xl font-bold text-center mb-12">Les avantages de la domotique</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Zap className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Confort au quotidien</h3>
                    <p className="text-muted-foreground">Simplifiez-vous la vie avec la gestion automatisée de votre habitat</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Home className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Économies d'énergie</h3>
                    <p className="text-muted-foreground">Réduisez vos factures grâce à une gestion intelligente</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Smartphone className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Contrôle à distance</h3>
                    <p className="text-muted-foreground">Pilotez votre maison de n'importe où via smartphone</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Prêt pour la maison du futur ?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nos experts vous accompagnent dans votre projet domotique. Solutions simples et évolutives adaptées à votre budget.
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

export default DomotiquePage;
