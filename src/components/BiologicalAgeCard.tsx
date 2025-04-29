
import React from 'react';
import { Card } from './ui/card';

export const BiologicalAgeCard = () => {
  // Dados de exemplo - em uma implementação real, estes viriam de uma API
  const biologicalAge = 23.4;
  const chronologicalAge = 36;
  const ageDifference = chronologicalAge - biologicalAge;
  const progressPercentage = (biologicalAge / chronologicalAge) * 100;

  // Total de barras na visualização
  const totalBars = 25;
  const activeBars = Math.round((progressPercentage / 100) * totalBars);

  return (
    <Card className="bg-gray-800 text-white p-6 max-w-sm mx-auto rounded-xl overflow-hidden">
      <div className="text-center mb-4">
        <p className="text-gray-300">Your age</p>
        <div className="flex items-center justify-center">
          <h2 className="text-6xl font-bold">-{ageDifference.toFixed(1)}</h2>
          <span className="text-3xl ml-1">YEARS</span>
        </div>
      </div>

      <div className="flex justify-between mb-2">
        <div>
          <p className="text-gray-300">Biological age</p>
          <p className="text-[#B4F05A] text-2xl font-bold">{biologicalAge}</p>
        </div>
        <div className="text-right">
          <p className="text-gray-300">Chronological age</p>
          <p className="text-white text-2xl font-bold">{chronologicalAge}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex space-x-1 mt-3">
        {Array.from({ length: totalBars }).map((_, index) => (
          <div
            key={index}
            className={`h-6 w-2 rounded-full ${
              index < activeBars ? 'bg-[#B4F05A]' : 'bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    </Card>
  );
};
