import React from "react";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { TestTube } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
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
  const isInRange = biomarker.status === "In Range";
  
  // Sample data for the mini chart
  const data = [
    { date: 'Dec 24', value: 65 },
    { date: 'Apr 25', value: biomarker.value as number }
  ];

  const PopoverWrapper = showAlwaysVisible ? React.Fragment : Popover;
  const TriggerWrapper = showAlwaysVisible ? React.Fragment : PopoverTrigger;

  const content = (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg">{biomarker.name}</h4>
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
  );

  return (
    <div className="flex items-start gap-6">
      <div className="flex-1 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-in fade-in duration-500">
        <div className="flex items-start justify-between mb-2">
          <div className="space-y-1">
            <PopoverWrapper>
              <TriggerWrapper asChild>
                <div className={`flex items-center gap-2 ${!showAlwaysVisible ? "cursor-pointer hover:opacity-80" : ""}`}>
                  <TestTube className="w-4 h-4 text-muted-foreground" />
                  <h3 className="font-semibold text-lg">{biomarker.name}</h3>
                </div>
              </TriggerWrapper>
              {!showAlwaysVisible ? (
                <PopoverContent side="right" align="start" className="w-80">
                  {content}
                </PopoverContent>
              ) : null}
            </PopoverWrapper>
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
      {showAlwaysVisible && (
        <div className="w-80 p-4 bg-gray-50 rounded-lg">
          {content}
        </div>
      )}
    </div>
  );
};

// Helper function to get biomarker descriptions
const getBiomarkerDescription = (name: string): string => {
  const descriptions: Record<string, string> = {
    "Apolipoprotein B (ApoB)": "Helps transport lipids in the bloodstream and is a powerful risk marker for cardiovascular disease.",
    "HDL-Cholesterol": "Known as 'good' cholesterol, it helps remove other forms of cholesterol from your bloodstream.",
    "High-Sensitivity C-Reactive Protein (hs-CRP)": "A marker of inflammation in the body, useful for assessing cardiovascular risk.",
    "LDL Pattern": "Indicates the size and density of LDL particles, important for cardiovascular risk assessment.",
    "LDL-Cholesterol": "Often called 'bad' cholesterol, high levels can lead to buildup in your arteries.",
    "Lipoprotein (a)": "A genetic variant of LDL cholesterol that can increase risk of heart disease.",
    "Non-HDL Cholesterol": "All types of cholesterol except HDL, useful for predicting cardiovascular risk.",
    "Total Cholesterol": "The overall amount of cholesterol in your blood.",
    "Total Cholesterol / HDL Ratio": "A ratio used to assess cardiovascular risk.",
    "Triglycerides": "A type of fat found in blood that stores excess energy from your diet."
  };
  
  return descriptions[name] || "Biomarker information not available.";
};
