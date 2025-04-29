
import React from "react";
import { Check } from "lucide-react";
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
    <section className="py-20 bg-[#FFF9F6]">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">
            Saúde de verdade<br />
            Sem complicações.
          </h2>
          
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Com dados reais, tens clareza. Com acompanhamento, tens direção. Com tudo isso, tens o controlo da tua saúde.
          </p>
          
          <div className="max-w-xl mx-auto">
            {/* Only keeping the left column with checkmarks */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-orange-100 p-1.5 rounded-full flex-shrink-0">
                    <Check className="h-4 w-4 text-orange-500" />
                  </div>
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-12">
            <button 
              onClick={goToWaitlist}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Reserva já o teu lugar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
