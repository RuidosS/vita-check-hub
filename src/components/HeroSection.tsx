
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-48 pb-32 bg-gradient-to-b from-muted to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Assume o controlo da tua saúde.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Testagens laboratoriais a cada 6 meses. +100 biomarcadores analisados. Resultados claros. Planos acionáveis.
            </p>
            <button 
              onClick={scrollToWaitlist}
              className="btn-primary inline-flex items-center gap-2"
            >
              Junta-te à Lista de Espera
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img 
              src="/woman-profile.jpg" 
              alt="Saúde e bem-estar" 
              className="rounded-lg shadow-lg max-w-full md:max-w-md h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
