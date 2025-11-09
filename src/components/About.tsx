import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Users, Clock } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "+ de 10 ans",
    description: "D'expérience professionnelle"
  },
  {
    icon: Shield,
    title: "Certifié",
    description: "Assurance décennale & RC Pro"
  },
  {
    icon: Users,
    title: "Satisfait",
    description: "Clients particuliers & pros"
  },
  {
    icon: Clock,
    title: "Réactif",
    description: "Intervention rapide en Essonne"
  }
];

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              À propos
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Votre électricien de confiance à Athis-Mons et dans l'Essonne
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center border-border hover:shadow-medium transition-smooth bg-card">
                <CardContent className="pt-6 pb-6">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center">
                    <item.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-soft space-y-5 text-foreground/90">
              <p className="text-lg leading-relaxed">
                Électricien qualifié avec plus de <strong className="text-primary font-semibold">10 ans d'expérience</strong>, 
                j'interviens auprès des particuliers et des professionnels pour tous vos travaux d'électricité, 
                en neuf, rénovation ou dépannage.
              </p>

              <p className="text-lg leading-relaxed">
                Mon objectif est de vous garantir des <strong className="text-primary font-semibold">installations fiables, sécurisées et durables</strong>, 
                dans le respect des normes en vigueur (NF C 15-100) et des délais annoncés.
              </p>

              <p className="text-lg leading-relaxed">
                J'assure la création complète d'installations électriques, la mise aux normes, le remplacement de tableaux, 
                ainsi que la pose d'appareillages et d'éclairages. Chaque projet bénéficie d'un accompagnement personnalisé 
                et de conseils adaptés à vos besoins.
              </p>

              <div className="bg-muted/50 border-l-4 border-secondary p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed font-medium">
                  Mon entreprise dispose d'une <strong className="text-secondary">assurance décennale et d'une responsabilité civile professionnelle</strong>, 
                  afin de vous apporter toutes les garanties nécessaires pour votre tranquillité d'esprit.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                Sérieux, réactif et soucieux du travail bien fait, je mets mon savoir-faire au service de votre confort et de votre sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
