
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WaitlistForm } from "../components/WaitlistForm";

const WaitlistPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-4 bg-gradient-to-b from-muted to-white">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reserva já o teu lugar
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recebe acesso prioritário à primeira versão da nossa plataforma de saúde funcional. Serás dos primeiros a experimentar o HealthLab.
            </p>
          </div>
        </section>
        <div id="waitlist-form">
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WaitlistPage;
