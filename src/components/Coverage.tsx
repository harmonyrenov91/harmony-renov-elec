import { Badge } from "@/components/ui/badge";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const cities = [
  { name: "Athis-Mons", link: "/villes/athis-mons" },
  { name: "Juvisy-sur-Orge", link: "/villes/juvisy-sur-orge" },
  { name: "Savigny-sur-Orge", link: "/villes/savigny-sur-orge" },
  { name: "Paray-Vieille-Poste", link: "/villes/paray-vieille-poste" },
  { name: "Morangis", link: "/villes/morangis" },
  { name: "Viry-Châtillon", link: "/villes/viry-chatillon" },
  { name: "Draveil", link: "/villes/draveil" },
  { name: "Vigneux-sur-Seine", link: "/villes/vigneux-sur-seine" },
  { name: "Ablon-sur-Seine", link: "/villes/ablon-sur-seine" },
  { name: "Villeneuve-le-Roi", link: "/villes/villeneuve-le-roi" }
];

const Coverage = () => {
  return (
    <section id="zone-intervention" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Zone d'intervention
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nos interventions à Paris et en Ile-de-France
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Basée à Athis-Mons (91200), Harmony Renov intervient à Paris, dans tout le département de l'Essonne 
              et l'ensemble de l'Ile-de-France pour vos installations électriques, dépannages urgents, 
              rénovations complètes ou mises en conformité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <MapPin className="text-primary" size={24} />
                Principales villes d'intervention
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {cities.map((city, index) => (
                  <Link 
                    key={index} 
                    to={city.link}
                    className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-smooth"
                  >
                    <CheckCircle2 className="text-secondary shrink-0" size={18} />
                    <span>{city.name}</span>
                  </Link>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6 shadow-soft mt-8">
                <h4 className="font-semibold text-foreground mb-3">Vous cherchez :</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                    <span>Un électricien à Athis-Mons ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                    <span>Un installateur de VMC à Savigny-sur-Orge ?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                    <span>Un spécialiste IRVE à Viry-Châtillon ?</span>
                  </li>
                </ul>
                <p className="mt-4 font-semibold text-primary">
                  Faites confiance à Harmony Renov, votre partenaire local en électricité et travaux d'intérieur.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl overflow-hidden shadow-medium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42006.89947822729!2d2.3536!3d48.7056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673b8c6f7e3c3%3A0x40b82c3688c9460!2s91200%20Athis-Mons!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte de localisation Harmony Renov - Électricien Athis-Mons (91200)"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
