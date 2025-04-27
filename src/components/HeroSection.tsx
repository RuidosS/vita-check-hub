
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/public/lovable-uploads/2304f46c-6e55-4c70-b8cf-edcfc52ef53f.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="container-custom relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Assume o controlo da tua saúde
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Testes laboratoriais avançados. Resultados claros. 
            Planos de ação personalizados para otimizar a tua saúde e performance.
          </p>
          <button 
            onClick={scrollToWaitlist}
            className="btn-primary inline-flex items-center gap-2"
          >
            Junta-te à Lista de Espera
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
