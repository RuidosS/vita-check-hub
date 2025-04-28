
import React from "react";
import { Check, ArrowRight } from "lucide-react";
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
    { icon: "📋", text: "Clinician Summary" },
    { icon: "🍽️", text: "Foods to enjoy" },
    { icon: "🚫", text: "Foods to limit" },
    { icon: "❤️", text: "Self care" },
    { icon: "💊", text: "Supplement list" }
  ];

  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };

  return (
    <section className="py-24 bg-[#FFF9F6]">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight">
            Saúde de verdade<br />
            Sem complicações.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left column with checkmarks */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-orange-100 p-1.5 rounded-full">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
            
            {/* Right column with action items */}
            <div className="space-y-4">
              {actionItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm border border-gray-100"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-16">
            <button 
              onClick={goToWaitlist}
              className="btn-primary inline-flex items-center gap-2"
            >
              Junta-te à Lista de Espera
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
