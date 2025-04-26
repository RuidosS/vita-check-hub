
import React from "react";

export const CompleteHealth = () => {
  const features = [
    "Mais de 60 análises laboratoriais.",
    "Avaliação de milhares de potenciais doenças e desequilíbrios.",
    "Interpretação médica especializada.",
    "Relatórios claros e acionáveis."
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container-custom">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-dark-purple tracking-tight">
          A visão mais completa da sua saúde
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                         transform hover:-translate-y-2 border border-purple-100"
            >
              <p className="text-xl font-semibold text-dark-purple">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
