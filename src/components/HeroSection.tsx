
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/lovable-uploads/2b95f72c-00b4-4984-bae1-2aa412eebd7a.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        <div className="hidden md:block"></div>
        <div className="text-right text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight 
                         font-inter text-white drop-shadow-lg">
            Assume o controlo<br /> da tua saúde
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl ml-auto 
                        font-inter tracking-wide leading-relaxed drop-shadow">
            Testes laboratoriais avançados. Resultados claros. 
            Planos personalizados para otimizar a tua saúde e performance.
          </p>
          <Button 
            onClick={scrollToWaitlist}
            className="bg-primary hover:bg-primary/90 text-white font-medium 
                       px-8 py-3 rounded-xl text-base tracking-wide 
                       transition-all duration-300 ease-in-out 
                       hover:scale-105 shadow-lg ml-auto"
          >
            Junta-te à Lista de Espera
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm"></div>
    </section>
  );
};
