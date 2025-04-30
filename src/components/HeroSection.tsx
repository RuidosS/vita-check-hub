
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
      style={{ 
        backgroundImage: "url('/lovable-uploads/caf0e1fb-dacd-4049-a3b7-748bc56d5705.png')", 
        backgroundPosition: "center center"
      }}
    >
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      <div className="relative h-full flex items-center px-6 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-2xl flex flex-col space-y-10">
          {/* Main headline with enhanced styling */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg max-w-[20ch]">
              <span className="text-primary">Assume o controlo</span> da tua saúde.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wider italic drop-shadow-md leading-relaxed max-w-[35ch]">
              <span className="font-medium">Testes, resultados e acompanhamento</span> num só plano.
            </p>
          </div>
          
          {/* Description section with enhanced styling */}
          <div className="space-y-6 backdrop-blur-sm bg-black/30 p-6 rounded-lg border border-white/10 max-w-lg">
            <p className="text-lg text-white leading-relaxed">
              A nossa plataforma de saúde funcional monitoriza 
              <span className="font-semibold text-primary"> mais de 100 biomarcadores </span> 
              que afetam a tua saúde ao longo do tempo.
            </p>
          </div>
          
          {/* CTA section with premium button */}
          <div>
            <button 
              onClick={scrollToWaitlist} 
              className="relative bg-gradient-to-r from-primary to-[#FF9B70] text-white font-semibold py-4 px-8 rounded-lg inline-flex items-center gap-3 shadow-xl transition-all duration-300 hover:shadow-primary/20 hover:translate-y-[-2px] group w-fit mb-4"
            >
              <span className="relative z-10">Reserva já o teu lugar</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
