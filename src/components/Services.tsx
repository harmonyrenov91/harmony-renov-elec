import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Lightbulb, 
  Thermometer, 
  Smartphone, 
  Shield, 
  Car,
  Wrench,
  Clock
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Électricité générale",
    description: "Installation complète, rénovation, mise aux normes, tableaux électriques, circuits prises et éclairages.",
    color: "text-primary"
  },
  {
    icon: Lightbulb,
    title: "Éclairage intérieur & extérieur",
    description: "Création d'ambiances lumineuses, éclairage LED, spots encastrés, luminaires, DCL, projecteurs extérieurs.",
    color: "text-secondary"
  },
  {
    icon: Thermometer,
    title: "Chauffage & ventilation",
    description: "Pose de radiateurs électriques, sèche-serviettes, VMC simple ou double flux, thermostats programmables.",
    color: "text-primary-light"
  },
  {
    icon: Smartphone,
    title: "Domotique & confort connecté",
    description: "Pilotage à distance de votre éclairage, chauffage et volets. Installation de solutions connectées simples et efficaces.",
    color: "text-secondary-light"
  },
  {
    icon: Shield,
    title: "Sécurité & courants faibles",
    description: "Alarmes, interphones, vidéophones, vidéosurveillance, réseaux informatiques et câblage RJ45.",
    color: "text-primary"
  },
  {
    icon: Car,
    title: "Bornes de recharge IRVE",
    description: "Installation de bornes de recharge pour véhicules électriques, diagnostic et mise en conformité.",
    color: "text-secondary"
  },
  {
    icon: Wrench,
    title: "Travaux d'intérieur",
    description: "Petits travaux de finition, aménagements, réparations et rénovations électriques complémentaires.",
    color: "text-primary-light"
  },
  {
    icon: Clock,
    title: "Dépannage 24/24 7/7",
    description: "Intervention d'urgence rapide pour tous vos problèmes électriques. Service disponible 24h/24 et 7j/7 pour vous dépanner à tout moment.",
    color: "text-primary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos prestations en électricité et travaux d'intérieur
          </h2>
          <p className="text-lg text-muted-foreground">
            Harmony Renov propose une large gamme de services électriques et de rénovation intérieure 
            pour répondre à tous vos besoins, que vous soyez particulier, entreprise ou syndic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-medium transition-smooth hover:scale-[1.02] cursor-pointer bg-card"
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft`}>
                  <service.icon className="text-primary-foreground" size={28} />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Besoin d'un service spécifique ? Contactez-nous pour discuter de votre projet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
