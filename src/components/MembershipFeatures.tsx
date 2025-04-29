
import React from "react";
import { Check, Clock } from "lucide-react";

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
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      text: "Idade Biológica"
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
                <span className="text-2xl">
                  {typeof feature.icon === 'string' ? feature.icon : feature.icon}
                </span>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
