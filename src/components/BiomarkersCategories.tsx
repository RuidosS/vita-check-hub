
import React from "react";
import { Droplet, HeartPulse, FlaskConical, Sun, Gauge, Flame, CircleDot, Dna, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

interface BiomarkerCategory {
  icon: React.ElementType;
  name: string;
  markers: string[];
  count: number;
  benefit: string;
}

export const BiomarkersCategories = () => {
  const categories: BiomarkerCategory[] = [
    {
      icon: Droplet,
      name: "Saúde do Sangue",
      count: 5,
      benefit: "Essencial para oxigenação, sistema imunitário e energia.",
      markers: [
        "Hemoglobina",
        "Hematócrito",
        "Contagem de glóbulos vermelhos",
        "Contagem de glóbulos brancos",
        "Contagem de plaquetas"
      ]
    },
    {
      icon: HeartPulse,
      name: "Saúde dos Rins",
      count: 7,
      benefit: "Filtram toxinas e equilibram eletrólitos no corpo.",
      markers: [
        "Creatinina",
        "Ureia",
        "Taxa de Filtração Glomerular (TFG)",
        "Sódio",
        "Potássio",
        "Cloro",
        "Cálcio"
      ]
    },
    {
      icon: FlaskConical,
      name: "Saúde do Fígado",
      count: 8,
      benefit: "Ajuda a filtrar toxinas e processar nutrientes.",
      markers: [
        "ALT (TGP)",
        "AST (TGO)",
        "GGT",
        "Fosfatase alcalina",
        "Bilirrubina total",
        "Bilirrubina direta",
        "Albumina",
        "Proteínas totais"
      ]
    },
    {
      icon: Sun,
      name: "Vitaminas e Minerais",
      count: 4,
      benefit: "Essenciais para imunidade, foco, metabolismo.",
      markers: [
        "Vitamina D",
        "Vitamina B12",
        "Ácido fólico",
        "Ferro"
      ]
    },
    {
      icon: Gauge,
      name: "Saúde Metabólica",
      count: 5,
      benefit: "Controla energia, peso e risco de diabetes.",
      markers: [
        "Glicemia",
        "Hemoglobina A1C",
        "Insulina",
        "Colesterol total",
        "Triglicerídeos"
      ]
    },
    {
      icon: Flame,
      name: "Inflamação",
      count: 7,
      benefit: "Avalia marcadores associados a processos inflamatórios.",
      markers: [
        "Proteína C-reativa (PCR)",
        "Ferritina",
        "Fibrinogénio",
        "Haptoglobina",
        "Alfa-1 antitripsina",
        "Imunoglobulinas",
        "Velocidade de sedimentação (VHS)"
      ]
    },
    {
      icon: CircleDot,
      name: "Saúde da Tiroide",
      count: 4,
      benefit: "Regula o peso, energia e temperatura corporal.",
      markers: [
        "TSH",
        "T3 livre",
        "T4 livre",
        "Anticorpos anti-tiroide"
      ]
    },
    {
      icon: Dna,
      name: "Saúde Hormonal",
      count: 8,
      benefit: "Controla humor, libido, sono e energia.",
      markers: [
        "Testosterona total",
        "Testosterona livre",
        "Estradiol",
        "Progesterona",
        "SHBG",
        "LH",
        "FSH",
        "DHEA-S"
      ]
    },
    {
      icon: Heart,
      name: "Saúde Cardiovascular",
      count: 8,
      benefit: "Protege o coração e reduz risco de enfartes.",
      markers: [
        "ApoB",
        "Lipoproteína (a)",
        "Colesterol LDL",
        "Colesterol HDL",
        "Triglicerídeos",
        "Proteína C-reativa ultrasensível (hs-CRP)",
        "Homocisteína",
        "NT-proBNP"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Avaliamos o que realmente conta para a tua saúde.</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mais de 100 biomarcadores organizados em 9 áreas essenciais, para uma visão completa da tua saúde física, mental e metabólica.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">{category.name} <span className="text-sm text-muted-foreground">({category.count})</span></h3>
                    </div>
                  </div>
                  
                  {/* Benefit line */}
                  <div className="mb-4 bg-primary/5 p-2 rounded-md">
                    <p className="text-sm">{category.benefit}</p>
                  </div>
                  
                  <ul className="space-y-2 text-sm">
                    {category.markers.map((marker, idx) => (
                      <li key={idx} className="text-muted-foreground">{marker}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
