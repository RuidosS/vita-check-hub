
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  HeartPulse, 
  Activity, 
  CircleCheck,
  TestTube,
  FileText,
  Check
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const IdadeBiologica = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="/placeholder.svg" 
                  alt="Idade Biológica" 
                  className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <Badge 
                  variant="outline" 
                  className="bg-green-100 text-green-600 border-green-200 mb-4 px-4 py-1.5 text-sm font-medium rounded-full"
                >
                  Teste de laboratório premium feito em casa
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                  Painel de Saúde da Idade Biológica
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Descobre como o teu corpo realmente está a envelhecer — e o que podes fazer para viver mais e melhor.
                </p>
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 mb-1">€XX</div>
                  <p className="text-gray-500 text-sm">Preço final a definir</p>
                </div>
                <p className="text-gray-700 mb-8">
                  Através de uma simples colheita de sangue feita em casa, avaliamos como o teu estilo de vida, nutrição, genética e hábitos impactam a tua idade biológica, metabólica, sanguínea e a saúde das tuas células.
                </p>
                <Button 
                  size="lg"
                  className="w-full md:w-auto text-xl py-6 px-8 text-white bg-[#22C55E] hover:bg-[#16A34A]"
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Measure Section */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-6">O que vais medir</h2>
            <div className="flex flex-wrap gap-4">
              {["Idade Biológica", "Idade Sanguínea", "Idade Metabólica", "Saúde Celular"].map((item, index) => (
                <Badge 
                  key={index}
                  className="bg-white text-gray-800 border border-gray-200 px-4 py-2 text-sm font-medium rounded-full"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* For Who Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Para quem é este teste?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Queres viver mais tempo com mais saúde",
                "Procuras fazer mudanças proativas na tua vida",
                "Tens histórico familiar de doenças",
                "Estás interessado em otimizar a tua saúde e longevidade (biohacking)"
              ].map((benefit, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <Check className="h-6 w-6 text-[#22C55E] flex-shrink-0" />
                    <p className="text-lg">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Discover Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">O que vais descobrir</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ul className="space-y-4">
                  {[
                    "Score de Idade Biológica fácil de interpretar",
                    "Análise de biomarcadores chave",
                    "Recomendações práticas e personalizadas",
                    "Dashboard online para acompanhar a tua evolução"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-[#22C55E] mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="aspect-square rounded-full bg-[#22C55E]/10 flex items-center justify-center p-4">
                  <div className="aspect-square rounded-full bg-[#22C55E]/20 flex items-center justify-center p-8 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-[#22C55E]/30 border-t-[#22C55E]"></div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#111111]">35</div>
                      <div className="text-sm text-gray-500">Idade Biológica</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Encomenda o teu kit online",
                  description: "Recebe o teu kit de colheita de sangue em casa. Tudo preparado para usares sem complicações.",
                  icon: <FileText className="h-12 w-12 text-[#22C55E]" />
                },
                {
                  step: 2,
                  title: "Faz a colheita de sangue",
                  description: "No conforto da tua casa, recolhe a amostra seguindo instruções simples. Agendamos a recolha para ti no mesmo dia.",
                  icon: <TestTube className="h-12 w-12 text-[#22C55E]" />
                },
                {
                  step: 3,
                  title: "Consulta os teus resultados no dashboard",
                  description: "Em 5-7 dias após o laboratório receber a tua amostra, acede ao teu relatório completo e personalizado através do nosso dashboard online.",
                  icon: <Activity className="h-12 w-12 text-[#22C55E]" />
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-[#22C55E]/10 flex items-center justify-center mb-6">
                    {step.icon}
                  </div>
                  <div className="bg-[#22C55E] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scientific Basis */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Base Científica</h2>
              <p className="text-lg text-gray-700">
                A nossa metodologia combina algoritmos validados e machine learning para calcular a tua idade biológica real, com base em múltiplos biomarcadores reconhecidos pela ciência.
              </p>
            </div>
          </div>
        </section>

        {/* Related Benefits */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Benefícios Relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Saúde Cardiovascular", icon: <HeartPulse className="h-6 w-6" /> },
                { title: "Saúde Metabólica", icon: <Activity className="h-6 w-6" /> },
                { title: "Saúde Hepática", icon: <TestTube className="h-6 w-6" /> },
                { title: "Longevidade e Performance", icon: <Check className="h-6 w-6" /> }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E]/10 flex items-center justify-center mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="font-medium">{benefit.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#22C55E]/10">
          <div className="container-custom max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Começa hoje a transformar a tua saúde.</h2>
              <Button 
                size="lg"
                className="text-xl py-6 px-10 text-white bg-[#22C55E] hover:bg-[#16A34A]"
              >
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IdadeBiologica;
