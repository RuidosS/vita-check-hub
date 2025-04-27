
import React from "react";
import { BiomarkerCard } from "./BiomarkerCard";
import { Card } from "./ui/card";
import { 
  Droplet, 
  Heart, 
  Flame, 
  Activity, 
  Sun, 
  CircleDot 
} from "lucide-react";

export interface Biomarker {
  name: string;
  value: number | string;
  unit: string;
  status: "In Range" | "Out of Range";
  progress: number;
}

const biomarkers: Biomarker[] = [
  { 
    name: "Apolipoproteína B (ApoB)",
    value: 69,
    unit: "mg/dL",
    status: "In Range",
    progress: 65
  },
  { 
    name: "Colesterol HDL",
    value: 54, 
    unit: "mg/dL",
    status: "In Range",
    progress: 70 
  },
  { 
    name: "Proteína C-Reativa de Alta Sensibilidade (hs-PCR)",
    value: 0.6,
    unit: "mg/L",
    status: "In Range", 
    progress: 45
  },
  { 
    name: "Padrão LDL",
    value: "A",
    unit: "",
    status: "In Range",
    progress: 80 
  },
  { 
    name: "Colesterol LDL",
    value: 86,
    unit: "mg/dL", 
    status: "In Range", 
    progress: 55
  },
  { 
    name: "Lipoproteína (a)",
    value: 10,
    unit: "nmol/L",
    status: "In Range",
    progress: 50 
  },
  { 
    name: "Colesterol Não-HDL",
    value: 105,
    unit: "mg/dL",
    status: "In Range",
    progress: 60 
  },
  { 
    name: "Colesterol Total",
    value: 159, 
    unit: "mg/dL",
    status: "In Range",
    progress: 75
  },
  { 
    name: "Rácio Colesterol Total / HDL",
    value: 2.9,
    unit: "",
    status: "In Range",
    progress: 65
  },
  { 
    name: "Triglicerídeos",
    value: 99,
    unit: "mg/dL",
    status: "In Range",
    progress: 58 
  }
];

export const BiomarkersList = () => {
  return (
    <section id="biomarcadores" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          O que analisamos em cada testagem
        </h2>
        <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Mais de 100 biomarcadores organizados em 8 categorias principais para uma visão completa da tua saúde.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <CategoryCard icon={Heart} title="Cardiovascular" count={10} />
          <CategoryCard icon={CircleDot} title="Hormonal" count={14} />
          <CategoryCard icon={Flame} title="Inflamação" count={8} />
          <CategoryCard icon={Activity} title="Metabolismo" count={12} />
          <CategoryCard icon={Sun} title="Vitaminas e Minerais" count={15} />
          <CategoryCard icon={Activity} title="Fígado" count={8} />
          <CategoryCard icon={Droplet} title="Rins" count={7} />
          <CategoryCard icon={Droplet} title="Marcadores de sangue" count={12} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {biomarkers.map((biomarker, index) => (
            <BiomarkerCard 
              key={index} 
              biomarker={biomarker} 
              showAlwaysVisible={index === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente para os cards de categorias
const CategoryCard = ({ 
  icon: Icon, 
  title, 
  count 
}: { 
  icon: React.ElementType; 
  title: string; 
  count: number;
}) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-full">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{count} marcadores</p>
        </div>
      </div>
    </Card>
  );
};
