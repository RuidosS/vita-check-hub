
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

      <div className="relative h-full flex items-center pl-8 md:pl-24">
        <div className="max-w-2xl flex flex-col space-y-16">
          {/* Main headline with glow effect */}
          <div className="space-y-12">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              Assume o controlo da tua saúde.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wider italic drop-shadow-md">
              Testes, resultados e acompanhamento num só plano.
            </p>
          </div>
          
          {/* Description section with more space and highlighted terms */}
          <div className="space-y-6">
            </p>
          </div>
          
          {/* Enhanced CTA section with icon and FOMO microcopy */}
          <div className="space-y-4">
            <button 
              onClick={scrollToWaitlist} 
              className="relative bg-white text-black font-semibold py-4 px-8 rounded-lg inline-flex items-center gap-3 shadow-lg hover:bg-gray-100 transition w-fit overflow-hidden text-lg"
            >
              <span className="relative z-10">Reserva já o teu lugar</span>
              <ArrowRight className="h-5 w-5" />
              <span className="absolute inset-0 rounded-lg bg-white opacity-30 blur-lg"></span> {/* glow effect */}
            </button>
            
            <p className="text-sm text-white/70 flex items-center">
              <span className="mr-2">⏳</span> Vagas limitadas nesta fase inicial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
