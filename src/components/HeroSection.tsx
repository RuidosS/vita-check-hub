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
    <section
      className="pt-48 pb-32 bg-contain bg-center bg-no-repeat min-h-[70vh]"
      style={{ backgroundImage: "url('/lovable-uploads/22584d25-dbb7-4b89-a91e-e7f29f924bf3.png')" }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-6">
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
        </div>
      </div>
    </section>
  );
};
