
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
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-tight">
            <span className="whitespace-nowrap">Resultados claros.</span>{' '}
            <span className="whitespace-nowrap text-primary">Ações concretas.</span>
          </h2>
          <div className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-sm">
            <p className="text-xl text-muted-foreground">
              Compara os teus dados ao longo do tempo.
              <br />
              <span className="font-semibold text-foreground">Vê exatamente onde estás e o que está a melhorar.</span>
            </p>
          </div>
          <button 
            onClick={goToWaitlist}
            className="inline-flex items-center gap-2 text-white font-medium bg-primary px-6 py-3 rounded-lg hover:bg-primary/90 transition-all group"
          >
            Reserva já o teu lugar
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
