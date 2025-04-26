
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';

const Testes = () => {
  const tests = [
    {
      name: "Idade Biológica",
      subtitle: "Análise de sangue em laboratório",
      description: "Analisa o impacto que o estilo de vida, nutrição, doenças e genética têm no seu corpo e órgãos vitais como o fígado e rins.",
      sampleType: "Análise de Sangue em Lab"
    },
    {
      name: "Saúde Intestinal",
      subtitle: "Teste de saúde em casa",
      description: "O teste do microbioma intestinal oferece uma análise profunda e um plano de bem-estar personalizado que visa o seu desconforto GI e otimiza o bem-estar.",
      sampleType: "Amostra de Fezes"
    },
    {
      name: "Sono",
      subtitle: "Teste de saúde em casa",
      description: "Descubra por que está tendo problemas para dormir testando os ritmos hormonais que regulam o ciclo sono-vigília.",
      sampleType: "Saliva"
    },
    {
      name: "Stress",
      subtitle: "Teste de saúde em casa",
      description: "Teste os níveis de hormonas do stress e receba um plano personalizado para poder redescobrir a sua calma.",
      sampleType: "Saliva"
    },
    {
      name: "Gestão de Peso",
      subtitle: "Teste de saúde em casa",
      description: "Descubra como atingir seus objetivos de peso medindo biomarcadores-chave associados ao gerenciamento de peso e metabolismo.",
      sampleType: "Saliva e Sangue Capilar"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-white">
          <div className="container-custom">
            <h1 className="text-4xl font-bold mb-12">Testes em casa</h1>
            <div className="space-y-8">
              {tests.map((test, index) => (
                <div key={index} className="grid md:grid-cols-4 gap-6 p-6 border-b border-gray-200">
                  <div>
                    <h3 className="font-semibold text-lg">{test.name}</h3>
                    <p className="text-sm text-gray-600">{test.subtitle}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-700">{test.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-600">{test.sampleType}</span>
                    <Button variant="default">Comprar</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Explorar Todos os Testes de Saúde
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testes;
