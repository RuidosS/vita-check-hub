
import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WaitlistForm } from "../components/WaitlistForm";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WaitlistInvitedPage = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleShowForm = () => {
    setShowForm(true);
    setTimeout(() => {
      const formElement = document.getElementById('waitlist-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const redirectToWaitlist = () => {
    navigate('/lista-de-espera');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero section with health report design */}
        <section className="relative py-16 md:py-24 min-h-[90vh] flex items-center bg-gradient-to-br from-[#1A1A1A] via-[#2A1A0E] to-[#3A1A00] text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-[#FF6B00] blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-72 h-72 rounded-full bg-[#FF6B00]/40 blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Side - Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Descobre o que o teu sangue te está a dizer.
              </h1>
              
              <p className="text-xl font-medium text-white/90 mb-5">
                Recebe 25€ de desconto na tua primeira subscrição — e quem te convidou também.
              </p>
              
              <p className="text-xl text-white/90 mb-12 max-w-lg">
                Junta-te à Ōuma e recebe uma análise funcional da tua saúde para melhorares energia, foco e longevidade
              </p>

              <Button 
                onClick={redirectToWaitlist} 
                className="bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-lg inline-flex items-center gap-3 shadow-premium text-lg"
              >
                Junta-te à Lista de Espera
              </Button>
              
              <p className="text-sm text-white/80 mt-4">
                Ao inscreveres-te, recebes um guia exclusivo para começares a tua jornada de saúde funcional.
              </p>
            </div>
            
            {/* Right Side - Health Report Card */}
            <div className="w-full max-w-md">
              <div className="bg-white rounded-3xl shadow-2xl p-6 text-black">
                <h3 className="text-xl font-bold mb-6">Relatório de Otimização de Saúde</h3>
                
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-bold">Estado Geral</p>
                    <p className="text-lg">Normal</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Vitamin D</span>
                    <span className="text-green-600">Optimal</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">hs-CRP</span>
                    <span className="text-green-600">Normal</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Glucose</span>
                    <span className="text-green-600">Normal</span>
                  </div>
                </div>
                
                {/* Graph representation */}
                <div className="h-24 w-full bg-gray-50 rounded-lg p-2">
                  <svg viewBox="0 0 100 30" className="w-full h-full">
                    <path
                      d="M0,25 L10,22 L20,24 L30,18 L40,20 L50,15 L60,18 L70,10 L80,8 L90,5 L100,4"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
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
