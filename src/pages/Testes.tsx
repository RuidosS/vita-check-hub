
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Testes = () => {
  const navigate = useNavigate();
  const tests = [
    {
      name: "Idade Biológica",
      subtitle: "Teste de saúde em casa",
      description: "Avalia a tua verdadeira idade interna, analisando como o teu estilo de vida e saúde impactam o envelhecimento biológico.",
      sampleType: "Sangue do dedo",
      path: "/teste/idade-biologica"
    },
    {
      name: "Doenças Sexualmente Transmissíveis (DST's)",
      subtitle: "Teste de saúde em casa",
      description: "Deteta infeções sexualmente transmissíveis de forma discreta e rápida, garantindo maior tranquilidade e proteção.",
      sampleType: "Sangue do dedo e Urina"
    },
    {
      name: "Teste Micronutrients",
      subtitle: "Teste de saúde em casa",
      description: "Avalie o teu nível de vitaminas e minerais essenciais e obtêm recomendações para otimizar a tua saúde.",
      sampleType: "Sangue do dedo"
    },
    {
      name: "Checkup Hormonal",
      subtitle: "Teste de saúde em casa",
      description: "Analisa os teus principais níveis hormonais e descobre como eles podem estar a afetar o teu bem-estar diário.",
      sampleType: "Sangue do dedo"
    },
    {
      name: "Testosterona",
      subtitle: "Teste de saúde em casa",
      description: "Avalia os teus níveis de testosterona e conhece o impacto que podem ter na tua energia, humor e performance.",
      sampleType: "Sangue do dedo"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        {/* Secção principal com imagem de fundo */}
        <section 
          className="relative py-16 border-b overflow-hidden"
          style={{
            backgroundImage: "url('/lovable-uploads/33a37cbe-adc0-4b8a-bf33-1141c6923d5c.png')",
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#FFF9F6", // NOVA COR CERTA
          }}
        >
          <div className="container-custom relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-start text-left space-y-6">
                <Badge 
                  variant="outline" 
                  className="bg-orange-100 text-orange-600 border-orange-200 px-4 py-1.5 text-sm font-medium rounded-full"
                >
                  Coming Soon
                </Badge>
                
                <div className="flex items-center gap-3 text-4xl font-bold">
                  <Activity className="h-10 w-10 text-primary" />
                  <h1>Em breve vais poder testar a tua saúde... a partir de casa 🚀</h1>
                </div>
                
                <p className="text-xl font-semibold text-gray-700">
                  Estamos a preparar uma nova geração de testes laboratoriais para tua saúde.
                </p>
                
                <p className="text-gray-600 max-w-2xl">
                Junta-te hoje e sê dos primeiros a receber acesso exclusivo.
                </p>
                
                <Button 
                  size="lg"
                  onClick={() => navigate('/lista-de-espera')}
                  className="mt-6 text-white"
                >
                  Junta-te à Lista de Espera
                </Button>
              </div>
              <div className="hidden md:block" />
            </div>
          </div>

          {/* Overlay da metade esquerda */}
          <div className="absolute inset-0 bg-[#FFF9F6] md:w-1/2"></div> {/* NOVA COR CERTA */}
        </section>

        {/* Secção dos testes */}
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
                    <Button 
                      variant="default" 
                      className="text-white"
                    >
                      Brevemente
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testes;
