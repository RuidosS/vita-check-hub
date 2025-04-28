import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { TestingSteps } from '../components/TestingSteps';
const ComoFuncionaAnual = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto mb-6">
              Como Funciona.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              Análises clínicas, insights claros, plano de ação. Tudo com a nossa adesão anual.
              <br /><br />
              A saúde é um investimento — começa hoje.
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-muted">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <div className="mb-6 w-full h-64 overflow-hidden rounded-xl">
                  <img alt="Agendar Análises" className="w-full h-full object-cover" src="/lovable-uploads/7a6259f5-ac12-49e1-b747-151ca942693f.png" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">1. Agenda a tua colheita de análises</h3>
                <p className="text-muted-foreground text-center">
                  Escolhe o laboratório parceiro mais conveniente e marca a tua colheita de forma rápida e fácil.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <div className="mb-6 w-full h-64 overflow-hidden rounded-xl">
                  <img alt="Receber Resultados" className="w-full h-full object-cover" src="/lovable-uploads/baad4d9c-94b3-4597-84fe-298171442603.png" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">2. Recebe o teu painel de saúde personalizado</h3>
                <p className="text-muted-foreground text-center">
                  Vais receber uma análise completa dos teus biomarcadores com explicações claras e orientações práticas. Sem linguagem técnica complicada.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                <div className="mb-6 w-full h-64 overflow-hidden rounded-xl">
                  <img alt="Evolução de Saúde" className="w-full h-full object-cover" src="/lovable-uploads/c4cb9b90-5f28-4fa7-9026-74dea217bb4e.png" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">3. Acompanha a tua evolução ao longo do tempo</h3>
                <p className="text-muted-foreground text-center">
                  A cada ano, repetimos o check-up para ajustarmos o teu plano e garantirmos que estás a evoluir na direção certa.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testing Steps Section */}
        <TestingSteps />
      </main>
      <Footer />
    </div>;
};
export default ComoFuncionaAnual;