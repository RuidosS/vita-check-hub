
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
          <br /><br />
          Com base nos teus resultados, recebes:
          <br /><br />
          📄 Relatório clínico simples e claro
          <br />
          🍎 Sugestões de alimentos a incluir
          <br />
          💊 Lista de suplementos e cuidados a considerar
          <br />
          🧭 Um plano de ação para viveres com mais energia, foco e longevidade
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
