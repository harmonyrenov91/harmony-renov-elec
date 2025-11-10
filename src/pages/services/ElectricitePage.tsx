import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Clock, Award, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ElectricitePage = () => {
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
        <title>Électricité Générale en Essonne | Installation & Rénovation - Harmony Renov</title>
        <meta name="description" content="Expert en électricité générale en Essonne : installation électrique complète, rénovation, mise aux normes, tableaux électriques. Devis gratuit sous 24h." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Zap className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-primary">Électricité Générale</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Installation & Rénovation Électrique en Essonne
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Faites confiance à Harmony Renov pour tous vos travaux d'électricité générale. Installation complète, rénovation, mise aux normes : nous intervenons chez les particuliers et professionnels avec expertise et professionnalisme.
                </p>
                <Button onClick={scrollToContact} variant="cta" size="lg">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </section>

          {/* Services détaillés */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nos prestations en électricité générale</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="text-primary" size={24} />
                      Installation électrique complète
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Pose de tableaux électriques neufs conformes aux normes NF C 15-100</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation de circuits prises et éclairages dans toutes les pièces</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Câblage encastré ou apparent selon vos besoins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Protections différentielles et disjoncteurs adaptés</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="text-primary" size={24} />
                      Mise aux normes électriques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Diagnostic électrique complet de votre installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Remplacement des tableaux électriques vétustes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Mise en conformité pour vente ou location</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Attestation de conformité Consuel</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="text-primary" size={24} />
                      Rénovation électrique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Rénovation complète ou partielle de votre installation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Ajout de prises et interrupteurs supplémentaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Remplacement des anciens câblages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Modernisation avec équipements récents</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="text-primary" size={24} />
                      Dépannage électrique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Intervention rapide en cas de panne électrique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Recherche et réparation de courts-circuits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Remplacement de disjoncteurs défectueux</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Service disponible 24h/24 et 7j/7</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pourquoi nous choisir */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir Harmony Renov ?</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Award className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Expertise certifiée</h3>
                    <p className="text-muted-foreground">Électriciens qualifiés et expérimentés, formés aux dernières normes en vigueur</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Shield className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Travaux garantis</h3>
                    <p className="text-muted-foreground">Garantie décennale et respect strict des normes de sécurité électrique</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                      <Clock className="text-primary-foreground" size={32} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Réactivité</h3>
                    <p className="text-muted-foreground">Devis sous 24h, intervention rapide et respect des délais convenus</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Besoin d'un électricien qualifié en Essonne ?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Contactez-nous dès maintenant pour un devis gratuit et personnalisé. Nous intervenons rapidement dans toute l'Essonne.
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

export default ElectricitePage;
