
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section 
          id="reserva" 
          ref={reservaRef} 
          className="relative py-16 md:py-24 min-h-[50vh] flex items-center bg-gradient-to-br from-[#000000] via-[#1A1A1A] to-[#FF6B00]/90 text-white scroll-mt-24 overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-[#FF6B00] blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-[#FF6B00]/40 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full bg-[#FF6B00]/20 blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Reserva já o teu lugar
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Recebe acesso prioritário à primeira versão da nossa plataforma de saúde funcional. 
              Serás dos primeiros a experimentar o Ōuma Health.
            </p>
          </div>
        </section>
        
        {/* Form section with slightly different background */}
        <section className="py-8 bg-gradient-to-b from-[#1A1A1A] to-[#000000]">
          <WaitlistForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WaitlistPage;
