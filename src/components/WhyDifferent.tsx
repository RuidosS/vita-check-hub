
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

  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center leading-tight">
            Saúde de verdade<br />
            Sem complicações.
          </h2>
          <div className="space-y-4 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-lg">{feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center pt-8">
            <h3 className="text-3xl font-bold mb-4">
              O melhor investimento que podes fazer é em ti.
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Sabe exatamente como está o teu corpo. Atua com inteligência. Vive mais, vive melhor.
            </p>
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
