
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
      {/* Enhanced gradient overlay for better text contrast and premium feel */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>

      <div className="relative h-full flex items-center px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl flex flex-col space-y-12">
          {/* Main headline with refined typography */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight drop-shadow-lg max-w-[20ch]">
              Assume o <span className="text-primary italic">controlo</span> da tua saúde.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wider italic drop-shadow-md leading-relaxed max-w-[35ch] font-serif">
              Mais de 100 análises laboratoriais e um plano para agires com confiança.
            </p>
          </div>
          
          {/* Description section */}
          <div className="space-y-6">
            {/* Empty div */}
          </div>
          
          {/* Enhanced CTA section with premium button styling */}
          <div>
            <button 
              onClick={scrollToWaitlist} 
              className="relative bg-primary text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center gap-3 shadow-xl hover:bg-primary/90 transition duration-300 transform hover:-translate-y-0.5 w-fit overflow-hidden text-lg mb-4"
            >
              <span className="relative z-10">Reserva já o teu lugar</span>
              <ArrowRight className="h-5 w-5" />
              <span className="absolute inset-0 rounded-lg bg-primary-hover opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute -inset-0.5 rounded-lg bg-white/20 opacity-0 blur-md group-hover:opacity-100 transition-all duration-300"></span> {/* enhanced glow effect */}
            </button>
            
            <p className="text-sm text-white/80 flex items-center font-medium">
              <span className="mr-2">⏳</span> Vagas limitadas nesta fase inicial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
