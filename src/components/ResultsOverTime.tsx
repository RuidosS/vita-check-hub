
import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export const ResultsOverTime = () => {
  const navigate = useNavigate();

  const goToWaitlist = () => {
    navigate('/lista-de-espera');
  };

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-purple tracking-tight leading-tight">
            Resultados claros. Ações concretas.
          </h2>
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground">
              Compara os teus dados ao longo do tempo. Entende exatamente onde estás e o que podes melhorar.
            </p>
          </div>
          <button 
            onClick={goToWaitlist}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Junta-te à Lista de Espera
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
