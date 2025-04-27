import React from "react";

export const ClinicalSummary = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-dark-purple tracking-tight">
            Resumo Clínico Personalizado
          </h2>
          <p className="text-2xl text-muted-foreground font-medium leading-relaxed">
            A nossa equipa médica analisa minuciosamente os teus resultados, destaca áreas críticas e entregam-te um plano de ação baseado nos teus biomarcadores.
          </p>
        </div>
      </div>
    </section>
  );
};
