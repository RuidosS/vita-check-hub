
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();
  
  const goToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };
  
  return (
    <section className="py-24 bg-white">
      <div className="container-custom max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Uma adesão anual para viveres melhor e mais tempo.
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Fazes duas análises clínicas por ano, separadas por 6 meses, com avaliação de mais de 100 biomarcadores essenciais: hormonas, vitaminas, metabolismo, inflamação e muito mais.
        </p>
        <button 
          onClick={goToWaitlist} 
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Reserva já o teu lugar
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
