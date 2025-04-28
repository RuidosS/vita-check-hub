
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToWaitlist = () => {
    navigate('/#waitlist');
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/lovable-uploads/7e09dcee-0359-48d2-808f-89a4609c1863.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container-custom h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Assume o controlo da tua saúde.
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-white">Testagens laboratoriais a cada 6 meses.</p>
              <p className="text-xl text-white">+100 biomarcadores analisados.</p>
              <p className="text-xl text-white">Resultados claros, validados por médicos.</p>
              <p className="text-xl text-white">Planos de ação práticos e acionáveis.</p>
            </div>
            <button 
              onClick={scrollToWaitlist} 
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg inline-flex items-center gap-2 shadow-md hover:bg-gray-100 transition"
            >
              Junta-te à Lista de Espera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
