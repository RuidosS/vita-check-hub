
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();
  
  const goToWaitlist = () => {
    navigate('/lista-de-espera');
  };
  
  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Uma adesão anual para quem quer viver melhor e mais tempo.
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Realiza 2 testagens laboratoriais presenciais por ano, separadas por 6 meses, com análise de mais de 100 biomarcadores críticos. Acompanha a tua evolução. Previne problemas. Otimiza a tua performance. Tudo baseado nos teus dados, não em achismos.
        </p>
        <button 
          onClick={goToWaitlist} 
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Junta-te à Lista de Espera
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
