
import React, { useEffect, useRef } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WaitlistForm } from "../components/WaitlistForm";
import { useLocation } from "react-router-dom";

const WaitlistPage = () => {
  const location = useLocation();
  const reservaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (location.state && location.state.scrollToForm) {
      setTimeout(() => {
        if (reservaRef.current) {
          reservaRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/lovable-uploads/caf0e1fb-dacd-4049-a3b7-748bc56d5705.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      <Header />
      <main className="flex-grow">
        <section 
          id="reserva" 
          ref={reservaRef} 
          className="relative py-12 md:py-16 min-h-[55vh] flex items-center text-white scroll-mt-24 overflow-hidden backdrop-blur-sm"
        >
          {/* Background overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-transparent z-0"></div>
          
          {/* Content */}
          <div className="container-custom relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="text-primary relative">Assume o controlo</span>
              <br /> 
              da tua saúde.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl italic leading-relaxed">
              Testes, resultados e acompanhamento num só plano.
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Recebe acesso prioritário à primeira versão da nossa plataforma de saúde funcional.
              <br/>
              <span className="font-semibold text-primary">Serás dos primeiros a experimentar o Ōuma Health.</span>
            </p>
          </div>
        </section>
        
        {/* Form section with transparent overlay */}
        <section className="pb-16 pt-0 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/95 z-0"></div>
          <WaitlistForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WaitlistPage;
