import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Claire B.",
    city: "Juvisy-sur-Orge",
    rating: 5,
    text: "Travail impeccable, propre et rapide. Très professionnel, je recommande !"
  },
  {
    name: "Marc D.",
    city: "Athis-Mons",
    rating: 5,
    text: "Intervention rapide pour un tableau électrique. Résultat parfait."
  },
  {
    name: "Nadia F.",
    city: "Viry-Châtillon",
    rating: 5,
    text: "Installation de radiateurs électriques et VMC. Artisan sérieux et à l'écoute."
  },
  {
    name: "Karim L.",
    city: "Morangis",
    rating: 5,
    text: "Excellent électricien, ponctuel et efficace. Je referai appel à lui sans hésiter."
  },
  {
    name: "Thomas R.",
    city: "Draveil",
    rating: 5,
    text: "Très satisfait de la rénovation complète de mon installation. Bon rapport qualité/prix."
  },
  {
    name: "Sophie M.",
    city: "Savigny-sur-Orge",
    rating: 5,
    text: "Installation d'une borne de recharge impeccable. Professionnel et de bon conseil."
  }
];

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Témoignages
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ils nous ont fait confiance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits partout en Essonne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-medium transition-smooth bg-card relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-10">
                <Quote size={48} className="text-primary" />
              </div>
              <CardContent className="pt-6 relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Vérifié
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://www.google.com/search?q=harmony+renov+athis+mons" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-smooth font-medium"
          >
            <Star size={18} className="fill-secondary text-secondary" />
            Lire d'autres avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
