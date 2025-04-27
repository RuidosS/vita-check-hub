
import React from "react";

export const HealthEvolution = () => {
  return (
    <section className="bg-white py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-purple tracking-tight leading-tight">
            Evolução da sua saúde ao longo do tempo
          </h2>
          
          <div className="w-[70%] mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <img
                src="/lovable-uploads/2ffda944-05ab-400f-a9ab-45a0b2317de0.png"
                alt="Evolução dos biomarcadores ao longo do tempo"
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            Acompanhe o progresso dos seus principais biomarcadores com check-ups regulares e veja a sua evolução em dados claros.
          </p>
        </div>
      </div>
    </section>
  );
};
