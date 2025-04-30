
import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WaitlistForm } from "../components/WaitlistForm";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const WaitlistInvitedPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    setTimeout(() => {
      const formElement = document.getElementById('waitlist-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section with invitation message */}
        <section className="relative py-24 min-h-[80vh] flex items-center bg-gradient-to-br from-[#000000] via-[#1A1A1A] to-[#FF6B00]/90 text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-[#FF6B00] blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-[#FF6B00]/40 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full bg-[#FF6B00]/20 blur-3xl"></div>
          </div>
          
          {/* Content */}
          <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-xl text-white/90 mb-6 font-light tracking-wider italic">
              Inscreve-te na lista de espera para ajudar um amigo
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white leading-tight max-w-3xl mx-auto">
              Foste <span className="text-primary italic">convidado</span> a juntar-te ao Ōuma Health
            </h1>
            
            {!showForm && (
              <div className="mt-12">
                <Button
                  onClick={handleShowForm}
                  className="relative bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-lg inline-flex items-center gap-3 shadow-premium text-lg transform hover:-translate-y-0.5 transition duration-300"
                >
                  <span className="relative z-10">Junta-te à Lista de Espera</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
                
                <p className="text-sm text-white/80 mt-4 flex items-center justify-center font-medium">
                  <span className="mr-2">⏳</span> Vagas limitadas nesta fase inicial
                </p>
              </div>
            )}
          </div>
        </section>
        
        {/* Form section that appears after clicking the button */}
        {showForm && (
          <section className="py-8 bg-gradient-to-b from-[#1A1A1A] to-[#000000]">
            <WaitlistForm />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default WaitlistInvitedPage;
