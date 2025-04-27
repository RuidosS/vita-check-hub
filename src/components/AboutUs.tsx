
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AboutUs = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/51a1ba83-7925-41d6-b401-595be24a2bbd.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-custom max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">
          A adesão anual para quem quer viver melhor e mais tempo.
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Realiza 2 testagens laboratoriais presenciais por ano, separadas por 6 meses, com análise de mais de 100 biomarcadores críticos. Acompanha a tua evolução. Previne problemas. Otimiza a tua performance. Tudo baseado nos teus dados, não em achismos.
        </p>
        <button 
          onClick={scrollToWaitlist} 
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Junta-te à Lista de Espera
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
