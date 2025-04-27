
import React from "react";
import { BiomarkerCard } from "./BiomarkerCard";

export interface Biomarker {
  name: string;
  value: number | string;
  unit: string;
  status: "In Range" | "Out of Range";
  progress: number;
  // Adding the missing properties needed by BiomarkerCard
  range: string;
  description: string;
}

const biomarkers: Biomarker[] = [
  { 
    name: "Apolipoproteína B (ApoB)",
    value: 69,
    unit: "mg/dL",
    status: "In Range",
    progress: 65,
    range: "55–90 mg/dL",
    description: "A ApoB mede o número de partículas de lipoproteínas na corrente sanguínea. Níveis saudáveis estão associados a menor risco cardiovascular."
  },
  { 
    name: "Colesterol HDL",
    value: 54, 
    unit: "mg/dL",
    status: "In Range",
    progress: 70,
    range: "40–60 mg/dL",
    description: "Conhecido como 'bom colesterol', níveis mais altos ajudam a proteger contra doenças cardíacas."
  },
  { 
    name: "Proteína C-Reativa de Alta Sensibilidade (hs-PCR)",
    value: 0.6,
    unit: "mg/L",
    status: "In Range", 
    progress: 45,
    range: "<1.0 mg/L",
    description: "Biomarcador de inflamação sistêmica; níveis baixos indicam baixo risco cardiovascular."
  },
  { 
    name: "Padrão LDL",
    value: "A",
    unit: "",
    status: "In Range",
    progress: 80,
    range: "Tipo A (grande e fofa)",
    description: "Subtipos de LDL identificam o tamanho das partículas; o tipo A é menos prejudicial."
  },
  { 
    name: "Colesterol LDL",
    value: 86,
    unit: "mg/dL", 
    status: "In Range", 
    progress: 55,
    range: "70–100 mg/dL",
    description: "LDL elevado pode aumentar o risco cardíaco; níveis ótimos mantêm as artérias limpas."
  },
  { 
    name: "Lipoproteína (a)",
    value: 10,
    unit: "nmol/L",
    status: "In Range",
    progress: 50,
    range: "<30 nmol/L",
    description: "Altos níveis de Lipoproteína (a) aumentam o risco de doença cardiovascular."
  },
  { 
    name: "Colesterol Não-HDL",
    value: 105,
    unit: "mg/dL",
    status: "In Range",
    progress: 60,
    range: "<130 mg/dL",
    description: "Mede todas as partículas de colesterol prejudiciais; importante para avaliação de risco cardíaco."
  },
  { 
    name: "Colesterol Total",
    value: 159, 
    unit: "mg/dL",
    status: "In Range",
    progress: 75,
    range: "<200 mg/dL",
    description: "Valor geral de colesterol no sangue; níveis normais indicam equilíbrio lipídico."
  },
  { 
    name: "Rácio Colesterol Total / HDL",
    value: 2.9,
    unit: "",
    status: "In Range",
    progress: 65,
    range: "<5.0",
    description: "Um rácio mais baixo indica menor risco cardiovascular."
  },
  { 
    name: "Triglicerídeos",
    value: 99,
    unit: "mg/dL",
    status: "In Range",
    progress: 58,
    range: "<150 mg/dL",
    description: "Triglicerídeos altos aumentam o risco de doenças cardíacas e metabólicas."
  }
];

export const BiomarkersList = () => {
  return (
    <section id="biomarcadores" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Resultados simples de interpretar
        </h2>
        <p className="text-lg text-gray-700 text-center mb-16 max-w-3xl mx-auto">
          Segue um plano de ação personalizado baseado em dados para melhorares o teu corpo.
        </p>
        
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
