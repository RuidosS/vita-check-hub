
import React from "react";

export const HealthEvolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-purple tracking-tight leading-tight">
            Evolução da sua saúde ao longo do tempo
          </h2>
          
          <div className="w-[70%] mx-auto">
            <img
              src="/lovable-uploads/ed14c02a-8e4a-486d-9133-8db05c1ca945.png"
              alt="Gráfico de evolução da Vitamina D ao longo do tempo"
              className="w-full h-auto shadow-lg rounded-2xl"
            />
          </div>

          <p className="text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            Acompanhe o progresso dos seus principais biomarcadores com check-ups regulares e veja a sua evolução em dados claros.
          </p>
        </div>
      </div>
    </section>
  );
};
