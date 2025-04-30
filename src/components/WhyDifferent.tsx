
import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export const WhyDifferent = () => {
  const features = [
    "Análises clínicas presenciais em laboratórios certificados",
    "Resultados médicos validados",
    "Relatórios simples e personalizados",
    "+100 biomarcadores que impactam a tua saúde",
    "Recomendações reais, baseadas em dados — não palpites"
  ];

  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };

  return (
    <section className="py-28 md:py-36 bg-[#FFF9F6]">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-12 text-center leading-tight">
            Saúde de verdade<br />
            Sem complicações.
          </h2>
          
          <p className="text-center text-lg md:text-xl mb-16 md:mb-20 max-w-[70ch] mx-auto leading-relaxed">
            Com dados reais, tens clareza. Com acompanhamento, tens direção. Com tudo isso, tens o controlo da tua saúde.
          </p>
          
          <div className="max-w-xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-orange-100 p-1.5 rounded-full flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-lg leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-16 md:pt-24">
            <button 
              onClick={goToWaitlist}
              className="btn-primary inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors text-lg"
            >
              Reserva já o teu lugar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
