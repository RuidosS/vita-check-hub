
import React from "react";

export const ResultsOverTime = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-purple tracking-tight leading-tight">
            Resultados que contam a tua história de saúde.
          </h2>
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground">
              Acompanhamos a evolução dos teus biomarcadores ao longo do tempo.
            </p>
            <p className="text-xl text-muted-foreground">
              Vê como as tuas ações melhoram a tua saúde, mês após mês.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
