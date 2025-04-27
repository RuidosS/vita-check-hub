
import React from "react";
import { BiomarkerCard } from "./BiomarkerCard";
import { ScrollArea } from "./ui/scroll-area";
import { Card } from "./ui/card";

export interface Biomarker {
  name: string;
  value: number | string;
  unit: string;
  status: "In Range" | "Out of Range";
  progress: number;
}

const biomarkers: Biomarker[] = [
  { name: "Apolipoproteína B (ApoB)", value: 69, unit: "mg/dL", status: "In Range", progress: 65 },
  { name: "Colesterol HDL", value: 54, unit: "mg/dL", status: "In Range", progress: 70 },
  { name: "Proteína C-Reativa de Alta Sensibilidade (hs-PCR)", value: 0.6, unit: "mg/L", status: "In Range", progress: 45 },
  { name: "Padrão LDL", value: "A", unit: "", status: "In Range", progress: 80 },
  { name: "Colesterol LDL", value: 86, unit: "mg/dL", status: "In Range", progress: 55 },
  { name: "Lipoproteína (a)", value: 10, unit: "nmol/L", status: "In Range", progress: 50 },
  { name: "Colesterol Não-HDL", value: 105, unit: "mg/dL", status: "In Range", progress: 60 },
  { name: "Colesterol Total", value: 159, unit: "mg/dL", status: "In Range", progress: 75 },
  { name: "Rácio Colesterol Total / HDL", value: 2.9, unit: "", status: "In Range", progress: 65 },
  { name: "Triglicerídeos", value: 99, unit: "mg/dL", status: "In Range", progress: 58 }
];

export const BiomarkersList = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Resultados simples de interpretar como nunca antes visto
        </h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Segue um plano de ação personalizado baseado em dados para melhorares o teu corpo.
        </p>
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-6">
            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-4">
                {biomarkers.map((biomarker, index) => (
                  <BiomarkerCard key={index} biomarker={biomarker} showAlwaysVisible={index === 0} />
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </section>
  );
};

