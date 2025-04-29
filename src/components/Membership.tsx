
import React from "react";
import { ArrowRight, Check, User, Brain, Apple, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Membership = () => {
  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };

  const features = [
    {
      icon: <Check className="w-6 h-6 text-green-500" />,
      text: "+100 biomarcadores avaliados"
    },
    {
      icon: <User className="w-6 h-6 text-amber-500" />,
      text: "2 análises clínicas presenciais/ano"
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      text: "Relatório clínico interpretado por médicos"
    },
    {
      icon: <Apple className="w-6 h-6 text-gray-500" />,
      text: "Sugestões alimentares e suplementação"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      text: "Reavaliação após 6 meses"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que inclui a tua adesão anual:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 flex items-center gap-4 shadow-sm border border-gray-100"
              >
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
