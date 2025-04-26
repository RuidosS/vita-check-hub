
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
  { name: "Apolipoprotein B (ApoB)", value: 69, unit: "mg/dL", status: "In Range", progress: 65 },
  { name: "HDL-Cholesterol", value: 54, unit: "mg/dL", status: "In Range", progress: 70 },
  { name: "High-Sensitivity C-Reactive Protein (hs-CRP)", value: 0.6, unit: "mg/L", status: "In Range", progress: 45 },
  { name: "LDL Pattern", value: "A", unit: "", status: "In Range", progress: 80 },
  { name: "LDL-Cholesterol", value: 86, unit: "mg/dL", status: "In Range", progress: 55 },
  { name: "Lipoprotein (a)", value: 10, unit: "nmol/L", status: "In Range", progress: 50 },
  { name: "Non-HDL Cholesterol", value: 105, unit: "mg/dL", status: "In Range", progress: 60 },
  { name: "Total Cholesterol", value: 159, unit: "mg/dL", status: "In Range", progress: 75 },
  { name: "Total Cholesterol / HDL Ratio", value: 2.9, unit: "", status: "In Range", progress: 65 },
  { name: "Triglycerides", value: 99, unit: "mg/dL", status: "In Range", progress: 58 }
];

export const BiomarkersList = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Resultados simples de interpretar como nunca antes visto. Segue um plano de ação personalize baseado em dados para melhorares o teu corpo.
        </h2>
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
