
import React from "react";
import { ArrowRight, Check, UserStanding, Brain } from "lucide-react";
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
      icon: <UserStanding className="w-6 h-6 text-amber-500" />,
      text: "2 análises clínicas presenciais/ano"
    },
    {
      icon: <Brain className="w-6 h-6 text-pink-400" />,
      text: "Relatório clínico interpretado por médicos"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500"><circle cx="12" cy="5" r="1"/><path d="M16 16a4 4 0 0 1-8 0"/><path d="M12 12V9"/><path d="m9 9 1 7"/><path d="m15 9-1 7"/></svg>,
      text: "Sugestões alimentares e suplementação"
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-500"><path d="M21 12a9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9Z"/><path d="m21 12-9 9-9-9"/><circle cx="12" cy="12" r="1"/></svg>,
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
