
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
          className="relative py-20 md:py-32 min-h-[60vh] flex items-center bg-gradient-to-br from-[#1A1F2C] to-[#222222] text-white scroll-mt-24 overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-primary blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-secondary blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full bg-primary/40 blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Reserva já o teu lugar
            </h1>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Recebe acesso prioritário à primeira versão da nossa plataforma de saúde funcional. 
              Serás dos primeiros a experimentar o HealthLab.
            </p>
            
            <div className="w-20 h-20 mx-auto mb-10 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-10 h-10 text-white"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
          </div>
        </section>
        
        {/* Form section with slightly different background */}
        <section className="py-16 bg-gradient-to-b from-[#222222] to-[#1A1F2C]/90">
          <WaitlistForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WaitlistPage;
