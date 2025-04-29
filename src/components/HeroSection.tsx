
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToWaitlist = () => {
    navigate('/lista-de-espera', { state: { scrollToForm: true } });
  };

  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.ibb.co/Gf9Q8zZz/Chat-GPT-Image-Apr-13-2025-07-58-09-PM.png')" }}
    >
      {/* Overlay with gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

      <div className="relative h-full flex items-center px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl flex flex-col space-y-20 md:space-y-24">
          {/* Main headline with glow effect */}
          <div className="space-y-12 md:space-y-16">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg max-w-[20ch]">
              Assume o controlo da tua saúde.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wider italic drop-shadow-md leading-relaxed max-w-[35ch]">
              Testes, resultados e acompanhamento num só plano.
            </p>
          </div>
          
          {/* Description section with more space and highlighted terms */}
          <div className="space-y-6">
            {/* Empty div */}
          </div>
          
          {/* Enhanced CTA section with icon and FOMO microcopy */}
          <div className="space-y-8">
            <button 
              onClick={scrollToWaitlist} 
              className="relative bg-white text-black font-semibold py-5 px-10 rounded-lg inline-flex items-center gap-4 shadow-lg hover:bg-gray-100 transition w-fit overflow-hidden text-lg mt-6 mb-6"
            >
              <span className="relative z-10">Reserva já o teu lugar</span>
              <ArrowRight className="h-5 w-5" />
              <span className="absolute inset-0 rounded-lg bg-white opacity-30 blur-lg"></span> {/* glow effect */}
            </button>
            
            <p className="text-sm text-white/70 flex items-center mt-4">
              <span className="mr-2">⏳</span> Vagas limitadas nesta fase inicial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
