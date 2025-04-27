
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
        backgroundImage: `url('/lovable-uploads/b3b2582c-05e5-47a9-8a80-02765a2cca4c.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        <div className="text-left text-white space-y-8">
          <h1 className="text-6xl md:text-7xl font-serif leading-tight font-normal tracking-normal">
            Assume o<br />controlo da<br />tua saúde
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl 
                        font-sans tracking-wide leading-relaxed">
            Testes laboratoriais avançados. Resultados claros.
            Planos personalizados para otimizar a tua saúde
            e performance.
          </p>
          <Button 
            onClick={scrollToWaitlist}
            className="bg-[#6B4ED9] hover:bg-[#5B3EC9] text-white text-lg
                       px-8 py-6 rounded-2xl font-medium tracking-wide 
                       transition-all duration-300"
          >
            Junta-te à Lista de Espera
          </Button>
        </div>
        <div></div>
      </div>
      <div className="absolute inset-0 bg-[#6B4ED9]/40 mix-blend-multiply"></div>
    </section>
  );
};
