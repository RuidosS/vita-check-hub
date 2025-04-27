import React from "react";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { TestTube, ChevronDown, ChevronUp, Droplet, Flame, Activity, CircleDot } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer
} from "recharts";

interface BiomarkerData {
  name: string;
  status: "In Range" | "Out of Range";
  value: number | string;
  unit?: string;
  range: string;
  description: string;
  progress: number;
}

export const BiomarkerCard = ({ biomarker, showAlwaysVisible = false }: { biomarker: BiomarkerData; showAlwaysVisible?: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isInRange = biomarker.status === "In Range";
  
  const data = [
    { date: 'Dec 24', value: typeof biomarker.value === 'number' ? biomarker.value * 0.8 : 0 },
    { date: 'Apr 25', value: biomarker.value }
  ];

  // Get icon based on biomarker name
  const getIconForBiomarker = (name: string) => {
    if (name.includes("Colesterol")) return <Droplet className="w-4 h-4 text-primary" />;
    if (name.includes("Proteína C-Reativa") || name.includes("Inflamação")) return <Flame className="w-4 h-4 text-primary" />;
    if (name.includes("Triglicerídeos") || name.includes("Lipoproteína")) return <Activity className="w-4 h-4 text-primary" />;
    if (name.includes("Padrão")) return <CircleDot className="w-4 h-4 text-primary" />;
    return <TestTube className="w-4 h-4 text-primary" />;
  };

  // Get ideal range text
  const getIdealRange = (name: string) => {
    const ranges = {
      "Apolipoproteína B (ApoB)": "55–90 mg/dL",
      "Colesterol HDL": "40–60 mg/dL",
      "Proteína C-Reativa de Alta Sensibilidade (hs-PCR)": "<1.0 mg/L",
      "Padrão LDL": "Tipo A (grande e fofa)",
      "Colesterol LDL": "70–100 mg/dL",
      "Lipoproteína (a)": "<30 nmol/L",
      "Colesterol Não-HDL": "<130 mg/dL",
      "Colesterol Total": "<200 mg/dL",
      "Rácio Colesterol Total / HDL": "<5.0",
      "Triglicerídeos": "<150 mg/dL"
    };
    
    return ranges[name as keyof typeof ranges] || "Não disponível";
  };

  return (
    <div className="shadow-sm border border-gray-100 rounded-2xl overflow-hidden bg-white">
      <div className="space-y-4 p-6">
        <div 
          className="flex items-start justify-between mb-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              {getIconForBiomarker(biomarker.name)}
              <h3 className="font-semibold text-xl text-gray-900">{biomarker.name}</h3>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 ml-auto text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-auto text-gray-400" />
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <Badge 
                className={isInRange 
                  ? "bg-[#7F56D9] hover:bg-[#7F56D9]/90 text-white" 
                  : "bg-orange-500 hover:bg-orange-600 text-white"
                }
              >
                {biomarker.status}
              </Badge>
              
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-gray-900">
                  {biomarker.value} {biomarker.unit}
                </span>
                <span className="text-sm text-gray-500">
                  Ideal: {getIdealRange(biomarker.name)}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <Progress 
          value={biomarker.progress} 
          className={`h-2 ${isInRange ? 'bg-green-100' : 'bg-orange-100'}`}
          indicatorClassName={isInRange ? 'bg-[#22C55E]' : 'bg-[#F59E0B]'}
        />
      </div>
      
      {(isOpen || showAlwaysVisible) && (
        <div className="p-6 bg-gray-50 border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="space-y-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              {getBiomarkerDescription(biomarker.name)}
            </p>
            
            <div className="h-44 w-full bg-white p-4 rounded-lg border border-gray-100">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <XAxis 
                    dataKey="date" 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis 
                    stroke="#888888" 
                    fontSize={12} 
                    tickLine={false}
                    axisLine={false}
                    domain={['dataMin - 10', 'dataMax + 10']}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={isInRange ? "#22C55E" : "#F59E0B"}
                    strokeWidth={2}
                    dot={{ fill: isInRange ? "#22C55E" : "#F59E0B", r: 6 }}
                    activeDot={{ r: 8 }}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "white", borderColor: "#e5e7eb", borderRadius: "0.5rem" }}
                    labelStyle={{ color: "#111827", fontWeight: 500 }}
                    itemStyle={{ color: isInRange ? "#22C55E" : "#F59E0B" }}
                  />
                  {biomarker.name === "Colesterol HDL" && (
                    <ReferenceLine 
                      y={40} 
                      stroke="#d1d5db" 
                      strokeDasharray="3 3" 
                      label={{ value: 'Min', position: 'insideLeft', fill: '#6b7280', fontSize: 10 }}
                    />
                  )}
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
    "Apolipoproteína B (ApoB)": "A ApoB mede o número de partículas de lipoproteínas na corrente sanguínea. Níveis saudáveis estão associados a menor risco cardiovascular.",
    "Colesterol HDL": "Conhecido como 'bom colesterol', níveis mais altos ajudam a proteger contra doenças cardíacas.",
    "Proteína C-Reativa de Alta Sensibilidade (hs-PCR)": "Biomarcador de inflamação sistêmica; níveis baixos indicam baixo risco cardiovascular.",
    "Padrão LDL": "Subtipos de LDL identificam o tamanho das partículas; o tipo A é menos prejudicial.",
    "Colesterol LDL": "LDL elevado pode aumentar o risco cardíaco; níveis ótimos mantêm as artérias limpas.",
    "Lipoproteína (a)": "Altos níveis de Lipoproteína (a) aumentam o risco de doença cardiovascular.",
    "Colesterol Não-HDL": "Mede todas as partículas de colesterol prejudiciais; importante para avaliação de risco cardíaco.",
    "Colesterol Total": "Valor geral de colesterol no sangue; níveis normais indicam equilíbrio lipídico.",
    "Rácio Colesterol Total / HDL": "Um rácio mais baixo indica menor risco cardiovascular.",
    "Triglicerídeos": "Triglicerídeos altos aumentam o risco de doenças cardíacas e metabólicas."
  };
  
  return descriptions[name] || "Informação do biomarcador não disponível.";
};
