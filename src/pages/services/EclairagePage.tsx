import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Lightbulb, Sparkles, Sun, Lamp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EclairagePage = () => {
  const navigate = useNavigate();

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
        <title>Installation Éclairage Intérieur & Extérieur | Spots LED Essonne - Harmony Renov</title>
        <meta name="description" content="Spécialiste de l'éclairage LED en Essonne : spots encastrés, luminaires design, éclairage extérieur. Création d'ambiances lumineuses sur mesure." />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="pt-24">
          <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Lightbulb className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-primary">Éclairage Intérieur & Extérieur</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Solutions d'Éclairage LED Modernes en Essonne
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Sublimez vos espaces avec des solutions d'éclairage LED performantes et esthétiques. Spots encastrés, luminaires design, éclairage d'ambiance : nous créons l'atmosphère lumineuse idéale pour votre intérieur et extérieur.
                </p>
                <Button onClick={scrollToContact} variant="cta" size="lg">
                  Demander un devis gratuit
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Nos solutions d'éclairage</h2>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sparkles className="text-primary" size={24} />
                      Spots LED encastrés
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation de spots LED basse consommation dans plafonds et faux-plafonds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Spots orientables pour éclairage directionnel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Variateurs d'intensité pour ambiances personnalisées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Large choix de températures de couleur (blanc chaud, neutre, froid)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lamp className="text-primary" size={24} />
                      Luminaires design
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation de luminaires suspendus et appliques murales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Pose de lustres et plafonniers modernes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation de DCL (Dispositif de Connexion Luminaire) normés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Câblage esthétique et sécurisé</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="text-primary" size={24} />
                      Éclairage extérieur
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Projecteurs LED pour façades et jardins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Bornes et balises d'éclairage pour allées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Éclairage avec détecteur de mouvement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Installation étanche et résistante aux intempéries (IP65)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="text-primary" size={24} />
                      Éclairage d'ambiance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Rubans LED pour éclairage indirect</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Création de scénarios lumineux personnalisés</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Éclairage RGB multicolore pour effets décoratifs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>Solutions connectées pilotables à distance</span>
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
                <h2 className="text-3xl font-bold text-center mb-12">Les avantages de l'éclairage LED</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">80%</div>
                    <h3 className="font-bold text-lg mb-2">Économies d'énergie</h3>
                    <p className="text-muted-foreground">Jusqu'à 80% d'économie par rapport aux ampoules traditionnelles</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">50 000h</div>
                    <h3 className="font-bold text-lg mb-2">Durée de vie</h3>
                    <p className="text-muted-foreground">Longévité exceptionnelle jusqu'à 50 000 heures d'utilisation</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">0%</div>
                    <h3 className="font-bold text-lg mb-2">Zéro entretien</h3>
                    <p className="text-muted-foreground">Aucun remplacement fréquent, installation et oubliez</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Besoin d'un éclairage moderne et économique ?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Nos électriciens spécialisés vous conseillent et installent vos solutions d'éclairage LED partout en Essonne.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={scrollToContact} variant="cta" size="lg">
                    Demander un devis
                  </Button>
                  <Button onClick={() => navigate("/")} variant="outline" size="lg">
                    Retour à l'accueil
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

export default EclairagePage;
