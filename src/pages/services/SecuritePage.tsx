import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Shield, Video, Bell, Network, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SecuritePage = () => {
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
        <title>Installation Alarme, Vidéosurveillance & Courants Faibles Essonne - Harmony Renov</title>
        <meta name="description" content="Installation système de sécurité en Essonne : alarmes, vidéosurveillance, interphones, réseaux informatiques RJ45. Protection de votre habitat." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Shield className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-primary">Sécurité & Courants Faibles</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Sécurisez votre habitat avec des solutions professionnelles
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Protection complète de votre logement ou entreprise : alarmes, vidéosurveillance, interphones, vidéophones et réseaux informatiques. Installation et maintenance par des professionnels.
                </p>
                <Button onClick={scrollToContact} variant="cta" size="lg">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nos prestations sécurité</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="text-primary" size={24} />
                      Alarmes anti-intrusion
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Systèmes d'alarme filaires et sans fil</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Détecteurs de mouvement et d'ouverture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Sirènes intérieures et extérieures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Notification smartphone en cas d'intrusion</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="text-primary" size={24} />
                      Vidéosurveillance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Caméras IP haute définition 1080p/4K</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Vision nocturne infrarouge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Enregistrement sur serveur NAS ou cloud</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Visionnage à distance via application mobile</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="text-primary" size={24} />
                      Interphones & vidéophones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Interphones audio pour maisons et immeubles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Vidéophones avec écran couleur tactile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Gâches électriques et contrôle d'accès</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Systèmes connectés avec smartphone</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Network className="text-primary" size={24} />
                      Réseaux informatiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Câblage RJ45 Cat 6 et Cat 6A</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation baies de brassage et switchs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Distribution Wi-Fi performante avec bornes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Tests de certification réseau</span>
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
                <h2 className="text-3xl font-bold text-center mb-12">Pourquoi sécuriser votre habitat ?</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Shield className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Protection 24h/24</h3>
                    <p className="text-muted-foreground">Surveillance continue de votre domicile jour et nuit</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Bell className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Dissuasion efficace</h3>
                    <p className="text-muted-foreground">Les systèmes visibles découragent les tentatives d'effraction</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Video className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Tranquillité d'esprit</h3>
                    <p className="text-muted-foreground">Partez serein en vacances, votre maison est protégée</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Protégez votre foyer dès maintenant</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Étude de sécurité gratuite et devis personnalisé. Intervention rapide dans toute l'Essonne.
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

export default SecuritePage;
