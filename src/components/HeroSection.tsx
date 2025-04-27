
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
      className="relative pt-48 pb-32 bg-cover bg-center"
      style={{
        backgroundImage: `url('/lovable-uploads/76e9c308-89fd-45b2-a57a-11d9e53a619c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom text-center text-white relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight 
                       font-inter text-white/90 drop-shadow-lg">
          Assume o controlo da tua saúde
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto 
                      font-inter tracking-wide leading-relaxed drop-shadow">
          Testes laboratoriais avançados. Resultados claros. 
          Planos personalizados para otimizar a tua saúde e performance.
        </p>
        <Button 
          onClick={scrollToWaitlist}
          className="bg-primary hover:bg-primary/90 text-white font-medium 
                     px-8 py-3 rounded-xl text-base tracking-wide 
                     transition-all duration-300 ease-in-out 
                     hover:scale-105 shadow-lg"
        >
          Junta-te à Lista de Espera
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm"></div>
    </section>
  );
};

