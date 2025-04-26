
import React from "react";

export const ResultsOverTime = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-purple tracking-tight leading-tight">
            Resultados ao longo do tempo
          </h2>
          <div className="space-y-4">
            <p className="text-2xl text-muted-foreground font-medium">
              Conheça o seu estado de saúde atual e acompanhe as mudanças.
            </p>
            <p className="text-xl text-muted-foreground">
              Todos os seus dados laboratoriais ficam seguros e acessíveis, para que possa ver a evolução da sua saúde ao longo dos anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
