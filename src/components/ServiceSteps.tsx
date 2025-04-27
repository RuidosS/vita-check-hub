
import React from "react";
import { Check } from "lucide-react";

export const ServiceSteps = () => {
  const steps = [
    {
      title: "Marca a tua colheita num laboratório parceiro",
      description: "Escolhe a data e o local mais conveniente para ti"
    },
    {
      title: "Recebe o teu relatório personalizado",
      description: "Com insights claros e recomendações práticas"
    },
    {
      title: "Testa novamente após 6 meses",
      description: "Para acompanhar a evolução e ajustar o teu plano"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-16">
          Como funciona
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
