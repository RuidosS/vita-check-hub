
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();
  
  const goToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };
  
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="container-custom max-w-4xl mx-auto text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 md:mb-12">
          Uma adesão anual para viveres melhor e mais tempo.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 md:mb-16 mx-auto max-w-[70ch] leading-relaxed">
          Fazes duas análises clínicas por ano, separadas por 6 meses, com avaliação de mais de 100 biomarcadores essenciais: hormonas, vitaminas, metabolismo, inflamação e muito mais.
        </p>
        <button 
          onClick={goToWaitlist} 
          className="inline-flex items-center gap-3 text-primary font-medium hover:underline text-lg py-2"
        >
          Reserva já o teu lugar
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};
