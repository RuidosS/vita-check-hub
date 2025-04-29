
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.ibb.co/wNCLwLfw/Chat-GPT-Image-Apr-28-2025-09-47-28-PM.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative h-full flex items-center pl-8 md:pl-24">
        <div className="max-w-2xl space-y-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Toma controlo da tua saúde. Com dados clínicos, planos reais e evolução a cada 6 meses.
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Testes laboratoriais + Relatório médico + Acompanhamento
            Um plano anual para prevenir, melhorar e otimizar a tua saúde.
          </p>
          <button 
            onClick={scrollToWaitlist} 
            className="relative bg-white text-black font-semibold py-3 px-8 rounded-lg inline-flex items-center gap-2 shadow-lg hover:bg-gray-100 transition w-fit overflow-hidden"
          >
            <span className="relative z-10">Junta-te à Lista de Espera</span>
            <span className="absolute inset-0 rounded-lg bg-white opacity-30 blur-lg"></span> {/* glow effect */}
          </button>
        </div>
      </div>
    </section>
  );
};
