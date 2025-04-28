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
      style={{ backgroundImage: "url('/lovable-uploads/ChatGPT Image Apr 28, 2025, 09_47_28 PM.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container-custom h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left flex flex-col space-y-10"> {/* Increased space between blocks */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              Conhece o teu corpo. <br />Melhora a tua saúde
            </h1>
            <p className="text-xl text-white max-w-lg">
              Análises profundas de +100 biomarcadores, validadas por médicos, com planos de ação práticos a cada 6 meses.
            </p>
            <button 
              onClick={scrollToWaitlist} 
              className="bg-white text-black font-semibold py-3 px-6 rounded-lg inline-flex items-center gap-2 shadow-md hover:bg-gray-100 transition w-fit"
            >
              Junta-te à Lista de Espera
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

