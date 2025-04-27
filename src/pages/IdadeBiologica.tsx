
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
  CalendarDays,
  FileText
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

const IdadeBiologica = () => {
  const navigate = useNavigate();

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
                  Análise de Laboratório Premium
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                  Painel de Saúde da Idade Biológica
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Descobre o impacto real do estilo de vida na tua saúde.
                </p>
                <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="text-2xl font-bold text-gray-900 mb-1">€XX</div>
                  <p className="text-gray-500 text-sm">Preço final a definir</p>
                </div>
                <p className="text-gray-700 mb-8">
                  A análise de idade biológica avalia o efeito do teu estilo de vida, nutrição, doenças e genética no teu corpo e órgãos vitais.
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

        {/* Tags Section */}
        <section className="py-8 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-4">
              {["Idade Biológica", "Idade Sanguínea", "Idade Metabólica", "Saúde Celular"].map((tag, index) => (
                <Badge 
                  key={index}
                  className="bg-white text-gray-800 border border-gray-200 px-4 py-2 text-sm font-medium rounded-full"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Para quem é este teste?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Queres viver mais tempo e com mais saúde",
                  icon: <HeartPulse className="h-8 w-8 text-[#22C55E]" />
                },
                {
                  title: "Queres fazer mudanças saudáveis de forma proativa",
                  icon: <Activity className="h-8 w-8 text-[#22C55E]" />
                },
                {
                  title: "Tens histórico familiar de doenças",
                  icon: <FileText className="h-8 w-8 text-[#22C55E]" />
                },
                {
                  title: "Estás interessado em biohacking",
                  icon: <TestTube className="h-8 w-8 text-[#22C55E]" />
                }
              ].map((benefit, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <p className="text-lg font-medium">{benefit.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Discover Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">O que vais descobrir</h2>
              <p className="text-lg text-gray-700">
                Recebe um score de idade biológica fácil de interpretar, com insights claros sobre o que está a acelerar ou retardar o teu envelhecimento.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
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
                  <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-4">Relatório Completo</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CircleCheck className="h-5 w-5 text-[#22C55E]" />
                        <span>Score de idade biológica</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CircleCheck className="h-5 w-5 text-[#22C55E]" />
                        <span>Análise de biomarcadores</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CircleCheck className="h-5 w-5 text-[#22C55E]" />
                        <span>Recomendações personalizadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CircleCheck className="h-5 w-5 text-[#22C55E]" />
                        <span>Dashboard intuitivo</span>
                      </li>
                    </ul>
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
                  title: "Completa o teu perfil",
                  description: "Preenche o teu perfil de saúde online em poucos minutos.",
                  icon: <FileText className="h-12 w-12 text-[#22C55E]" />
                },
                {
                  step: 2,
                  title: "Colheita de sangue",
                  description: "Realiza a colheita de sangue no laboratório parceiro mais próximo.",
                  icon: <TestTube className="h-12 w-12 text-[#22C55E]" />
                },
                {
                  step: 3,
                  title: "Recebe o teu relatório",
                  description: "Acede ao teu relatório detalhado com recomendações práticas.",
                  icon: <CalendarDays className="h-12 w-12 text-[#22C55E]" />
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
                A nossa análise utiliza algoritmos validados e machine learning para calcular com precisão a tua idade biológica baseada em múltiplos biomarcadores.
              </p>
            </div>
          </div>
        </section>

        {/* Related Benefits */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Benefícios Relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Saúde cardiovascular", icon: <HeartPulse className="h-6 w-6" /> },
                { title: "Saúde hepática", icon: <Activity className="h-6 w-6" /> },
                { title: "Saúde metabólica", icon: <TestTube className="h-6 w-6" /> },
                { title: "Longevidade", icon: <CalendarDays className="h-6 w-6" /> }
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
