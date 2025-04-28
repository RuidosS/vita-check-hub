
import React from "react";
import { Check } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export const WhyDifferent = () => {
  const features = [
    "Testagens clínicas presenciais certificadas.",
    "+100 biomarcadores analisados.",
    "Sem consultas obrigatórias.",
    "Resultados claros e sem medicalês.",
    "Planos de ação personalizados."
  ];

  const actionItems = [
    { icon: "📝", text: "Resumo Clínico" },
    { icon: "🍽️", text: "Alimentos a incluir" },
    { icon: "⛔", text: "Alimentos a limitar" },
    { icon: "❤️", text: "Cuidados pessoais" },
    { icon: "💊", text: "Lista de suplementos" }
  ];

  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };

  return (
    <section className="py-24 bg-[#FFF9F6]">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-tight">
            Saúde de verdade<br />
            Sem complicações.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left column with checkmarks */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-orange-100 p-1.5 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
            
            {/* Right column with action items */}
            <div className="space-y-5">
              {actionItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <span className="text-xl w-8 flex justify-center">{item.icon}</span>
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-16 mt-4">
            <button 
              onClick={goToWaitlist}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Junta-te à Lista de Espera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
