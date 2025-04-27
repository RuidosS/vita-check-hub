
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
      {/* Full screen background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/ea197514-27a3-4be9-a786-3a6adff8c5b3.png"
          alt="Saúde e bem-estar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Dark overlay for better text readability */}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Assume o controlo da tua saúde.
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-white/90">Testagens laboratoriais a cada 6 meses.</p>
              <p className="text-xl text-white/90">+100 biomarcadores analisados.</p>
              <p className="text-xl text-white/90">Resultados claros, validados por médicos.</p>
              <p className="text-xl text-white/90">Planos de ação práticos e acionáveis.</p>
            </div>
            <button onClick={scrollToWaitlist} className="btn-primary inline-flex items-center gap-2">
              Junta-te à Lista de Espera
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
