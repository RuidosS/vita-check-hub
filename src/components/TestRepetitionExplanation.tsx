
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const TestRepetitionExplanation = () => {
  // Sample data for the chart
  const chartData = [
    { month: "Mês 0", value: 28, color: "#FFA07A" },
    { month: "Mês 6", value: 35, color: "#FF8C61" },
    { month: "Mês 12", value: 42, color: "#FA5F55" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Porquê repetir os testes a cada 6 meses?</h2>
              <p className="text-lg text-muted-foreground mb-4">
                O teu corpo muda com o tempo. Níveis de stress, alimentação, sono e idade afetam os teus resultados.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-lg">Monitorizas melhorias (ou alertas precoces)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-lg">Ajustas suplementos ou hábitos com base em dados reais</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span className="text-lg">Garante que as tuas escolhas estão a funcionar</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-center font-medium mb-2">Evolução da Vitamina D (ng/mL)</h3>
              <div className="relative h-64 flex items-end justify-between gap-8 pt-6">
                {chartData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-gradient-to-t from-primary/80 to-primary/50 rounded-t-md"
                      style={{ 
                        height: `${(item.value / 50) * 100}%`, 
                        backgroundColor: item.color 
                      }}
                    ></div>
                    <div className="mt-2 text-center">
                      <div className="font-bold">{item.value}</div>
                      <div className="text-sm text-muted-foreground">{item.month}</div>
                    </div>
                  </div>
                ))}
                
                {/* Connecting arrows between bars */}
                <div className="absolute top-1/2 left-1/4 w-1/2 flex items-center justify-between">
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
