import React from 'react';
import { Calendar, TrendingUp, Sun } from 'lucide-react';

export const TestRepetitionExplanation = () => {
  // Sample data for the chart
  const chartData = [
    { month: "Maio 24", value: 28, color: "#FFA07A" },
    { month: "Nov 24", value: 35, color: "#FF8C61" },
    { month: "Maio 25", value: 42, color: "#FA5F55" }
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
