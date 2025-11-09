import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

import beforeTableau1 from "@/assets/gallery/before-tableau-1.jpg";
import afterTableau1 from "@/assets/gallery/after-tableau-1.jpg";
import beforeTableau2 from "@/assets/gallery/before-tableau-2.jpg";
import afterTableau2 from "@/assets/gallery/after-tableau-2.jpg";
import beforeEclairage1 from "@/assets/gallery/before-eclairage-1.jpg";
import afterEclairage1 from "@/assets/gallery/after-eclairage-1.jpg";
import beforeEclairage2 from "@/assets/gallery/before-eclairage-2.jpg";
import afterEclairage2 from "@/assets/gallery/after-eclairage-2.jpg";
import beforePrises1 from "@/assets/gallery/before-prises-1.jpg";
import afterPrises1 from "@/assets/gallery/after-prises-1.jpg";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Rénovation tableau électrique complet",
    category: "electricite",
    location: "Athis-Mons",
    beforeImage: beforeTableau2,
    afterImage: afterTableau2,
    description: "Rénovation complète d'un tableau électrique avec mise aux normes, installation de nouveaux disjoncteurs et organisation professionnelle des circuits."
  },
  {
    id: 2,
    title: "Installation luminaire design moderne",
    category: "eclairage",
    location: "Essonne",
    beforeImage: beforeEclairage2,
    afterImage: afterEclairage2,
    description: "Installation professionnelle d'un luminaire moderne avec câblage électrique et finitions impeccables."
  },
  {
    id: 3,
    title: "Mise aux normes tableau électrique",
    category: "electricite",
    location: "Athis-Mons",
    beforeImage: beforeTableau1,
    afterImage: afterTableau1,
    description: "Rénovation et mise en conformité d'un ancien tableau électrique avec installation de protections modernes."
  },
  {
    id: 4,
    title: "Installation éclairage LED design",
    category: "eclairage",
    location: "Essonne",
    beforeImage: beforeEclairage1,
    afterImage: afterEclairage1,
    description: "Installation complète d'un système d'éclairage LED moderne avec spots encastrés et création d'une ambiance chaleureuse."
  },
  {
    id: 5,
    title: "Ajout de prises électriques",
    category: "electricite",
    location: "Athis-Mons",
    beforeImage: beforePrises1,
    afterImage: afterPrises1,
    description: "Installation de nouvelles prises murales avec câblage encastré et finitions soignées."
  }
];

const ComparisonCard = ({ item }: { item: GalleryItem }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <Card className="overflow-hidden border-border hover:shadow-medium transition-smooth bg-card group">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={showAfter ? item.afterImage : item.beforeImage}
          alt={`${showAfter ? 'Après' : 'Avant'} - ${item.title}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        <div className="absolute top-4 left-4">
          <Badge 
            variant={showAfter ? "default" : "secondary"}
            className="shadow-soft font-semibold"
          >
            {showAfter ? 'APRÈS' : 'AVANT'}
          </Badge>
        </div>

        <button
          onClick={() => setShowAfter(!showAfter)}
          className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg shadow-medium hover:shadow-strong transition-smooth flex items-center gap-2 font-medium"
        >
          <ArrowLeftRight size={18} />
          {showAfter ? 'Voir avant' : 'Voir après'}
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"></div>
      </div>

      <CardContent className="p-5">
        <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground flex items-center gap-1">
            📍 {item.location}
          </span>
          <Badge variant="outline" className="text-xs">
            {item.category === 'electricite' ? 'Électricité' : 'Éclairage'}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("tous");

  const filteredItems = activeCategory === "tous" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="realisations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Nos réalisations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Galerie de nos travaux Avant / Après
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez la qualité de nos installations électriques à travers nos réalisations 
            chez des particuliers et professionnels en Essonne. Chaque projet est réalisé avec 
            soin, professionnalisme et dans le respect des normes.
          </p>
        </div>

        <Tabs defaultValue="tous" className="mb-8" onValueChange={setActiveCategory}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="tous">Tous</TabsTrigger>
            <TabsTrigger value="electricite">Électricité</TabsTrigger>
            <TabsTrigger value="eclairage">Éclairage</TabsTrigger>
          </TabsList>

          <TabsContent value={activeCategory} className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {filteredItems.map((item) => (
                <ComparisonCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucune réalisation dans cette catégorie pour le moment.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-muted/50 px-6 py-4 rounded-xl border border-border">
            <span className="text-2xl">✨</span>
            <div className="text-left">
              <p className="font-semibold text-foreground">Votre projet en photos ?</p>
              <p className="text-sm text-muted-foreground">Contactez-nous pour transformer votre installation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
