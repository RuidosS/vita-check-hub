
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
      <main className="flex-grow pt-20">
        <section id="reserva" ref={reservaRef} className="py-4 bg-gradient-to-b from-muted to-white scroll-mt-24">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reserva já o teu lugar
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recebe acesso prioritário à primeira versão da nossa plataforma de saúde funcional. Serás dos primeiros a experimentar o HealthLab.
            </p>
          </div>
        </section>
        <div>
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WaitlistPage;
