import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-muted to-white">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/photo-1649972904349-6e44c42644a7.png" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50" 
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6 bg-white/80 p-8 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Assume o controlo da tua saúde.
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground">Testagens laboratoriais a cada 6 meses.</p>
              <p className="text-xl text-muted-foreground">+100 biomarcadores analisados.</p>
              <p className="text-xl text-muted-foreground">Resultados claros, validados por médicos.</p>
              <p className="text-xl text-muted-foreground">Planos de ação práticos e acionáveis.</p>
            </div>
            <button onClick={scrollToWaitlist} className="btn-primary inline-flex items-center gap-2">
              Junta-te à Lista de Espera
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <img alt="Saúde e bem-estar" className="rounded-lg shadow-lg max-w-full md:max-w-md h-auto relative z-10" src="/lovable-uploads/fb5e5880-e5a6-4aea-8e61-eba78a7b2a99.png" />
          </div>
        </div>
      </div>
    </section>
  );
};
