
import React from 'react';
import { Calendar, TrendingUp, Sun } from 'lucide-react';

export const TestRepetitionExplanation = () => {
  // Sample data for the chart
  const chartData = [
    { month: "Mês 0", value: 28, color: "#FFA07A" },
    { month: "Mês 6", value: 35, color: "#FF8C61" },
    { month: "Mês 12", value: 42, color: "#FA5F55" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
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
            
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 via-amber-50 to-orange-50 p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-medium">Evolução da Vitamina D (ng/mL)</h3>
                  <Sun className="h-5 w-5 text-amber-500" />
                </div>
                
                <div className="relative h-64">
                  {/* Background graphic elements */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/3 left-1/4 w-16 h-16 rounded-full bg-amber-400"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-amber-300"></div>
                    <div className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-orange-300"></div>
                  </div>
                  
                  {/* Chart */}
                  <div className="relative h-3/4 flex items-end justify-between gap-8 pt-6 z-10">
                    {chartData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center flex-1">
                        <div 
                          className={`w-full rounded-t-md ${
                            index === 0 ? 'bg-amber-300' : 
                            index === 1 ? 'bg-amber-400' : 'bg-amber-500'
                          }`}
                          style={{ height: `${(item.value / 50) * 100}%` }}
                        ></div>
                        <div className="mt-2 text-center">
                          <div className="font-bold">{item.value}</div>
                          <div className="text-sm text-muted-foreground">{item.month}</div>
                        </div>
                      </div>
                    ))}
                    
                    {/* Connecting trend line */}
                    <div className="absolute top-[20%] left-0 w-full flex items-center justify-between z-0">
                      <svg className="w-full h-16 absolute" style={{ top: '10%' }}>
                        <path 
                          d="M30,60 L140,35 L250,10" 
                          stroke="#FB923C" 
                          strokeWidth="2" 
                          fill="none"
                          strokeDasharray="4 4"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Status indicators */}
                  <div className="absolute top-[25%] left-[12%] h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-200"></div>
                  <div className="absolute top-[15%] left-[50%] h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-200"></div>
                  <div className="absolute top-[5%] left-[88%] h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-200"></div>
                </div>
                
                {/* Legend */}
                <div className="mt-4 flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-700">Dentro da faixa ideal (30-100 ng/mL)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
