
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="pt-48 pb-32 bg-gradient-to-b from-muted to-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Assume o controlo da tua saúde
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Testes laboratoriais avançados. Resultados claros. 
          Planos de ação personalizados para a tua saúde.
        </p>
        <button className="btn-primary inline-flex items-center gap-2">
          Junta-te à Lista de Espera
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
