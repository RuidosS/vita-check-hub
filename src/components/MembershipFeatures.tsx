
import React from "react";
import { Check } from "lucide-react";
import { BiologicalAgeCard } from "./BiologicalAgeCard";

export const MembershipFeatures = () => {
  const features = [
    {
      icon: "🧪",
      text: "+100 biomarcadores avaliados"
    },
    {
      icon: "🧍‍♂️",
      text: "2 análises clínicas presenciais/ano"
    },
    {
      icon: "🧠",
      text: "Relatório clínico interpretado por médicos"
    },
    {
      icon: "🍽️",
      text: "Sugestões alimentares e suplementação"
    },
    {
      icon: "🔁",
      text: "Reavaliação após 6 meses"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que inclui a tua adesão anual:
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-center mb-6">
              Descobre a tua verdadeira idade biológica
            </h3>
            <BiologicalAgeCard />
          </div>
        </div>
      </div>
    </section>
  );
};
