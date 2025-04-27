import React from "react";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { TestTube, ChevronDown, ChevronUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer
} from "recharts";
import type { Biomarker } from "./BiomarkersList";

interface BiomarkerCardProps {
  biomarker: Biomarker;
  showAlwaysVisible?: boolean;
}

export const BiomarkerCard = ({ biomarker, showAlwaysVisible = false }: BiomarkerCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isInRange = biomarker.status === "In Range";
  
  const data = [
    { date: 'Dec 24', value: 65 },
    { date: 'Apr 25', value: biomarker.value as number }
  ];

  return (
    <div className="space-y-4">
      <div className="flex-1 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-in fade-in duration-500">
        <div 
          className="flex items-start justify-between mb-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <TestTube className="w-4 h-4 text-muted-foreground" />
              <h3 className="font-semibold text-lg">{biomarker.name}</h3>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 ml-auto" />
              ) : (
                <ChevronDown className="w-4 h-4 ml-auto" />
              )}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={isInRange ? "default" : "destructive"} className="text-xs">
                {biomarker.status}
              </Badge>
              <span className="text-sm text-muted-foreground">
                {biomarker.value} {biomarker.unit}
              </span>
            </div>
          </div>
        </div>
        <Progress 
          value={biomarker.progress} 
          className={`h-2 ${isInRange ? 'bg-green-100' : 'bg-red-100'}`}
          indicatorClassName={isInRange ? 'bg-green-500' : 'bg-red-500'}
        />
      </div>
      
      {(isOpen || showAlwaysVisible) && (
        <div className="p-4 bg-white rounded-lg border animate-in slide-in-from-top-2">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              {getBiomarkerDescription(biomarker.name)}
            </p>
            <div className="h-32 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <XAxis dataKey="date" stroke="#888888" fontSize={12} />
                  <YAxis stroke="#888888" fontSize={12} />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{ fill: "#8B5CF6", r: 4 }}
                  />
                  <ReferenceLine y={75} stroke="#EA4E4E" strokeDasharray="3 3" />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get biomarker descriptions
const getBiomarkerDescription = (name: string): string => {
  const descriptions: Record<string, string> = {
    "Apolipoprotein B (ApoB)": "Ajuda no transporte de lípidos na corrente sanguínea e é um importante marcador de risco cardiovascular.",
    "HDL-Cholesterol": "Conhecido como 'colesterol bom', ajuda a remover outras formas de colesterol da corrente sanguínea.",
    "High-Sensitivity C-Reactive Protein (hs-CRP)": "Um marcador de inflamação no corpo, útil para avaliar o risco cardiovascular.",
    "LDL Pattern": "Indica o tamanho e densidade das partículas de LDL, importante para avaliação do risco cardiovascular.",
    "LDL-Cholesterol": "Frequentemente chamado de 'colesterol mau', níveis elevados podem levar à acumulação nas artérias.",
    "Lipoprotein (a)": "Uma variante genética do colesterol LDL que pode aumentar o risco de doença cardíaca.",
    "Non-HDL Cholesterol": "Todos os tipos de colesterol exceto HDL, útil para prever risco cardiovascular.",
    "Total Cholesterol": "A quantidade total de colesterol no sangue.",
    "Total Cholesterol / HDL Ratio": "Um rácio usado para avaliar o risco cardiovascular.",
    "Triglycerides": "Um tipo de gordura encontrada no sangue que armazena energia extra da sua dieta."
  };
  
  return descriptions[name] || "Informação do biomarcador não disponível.";
};
