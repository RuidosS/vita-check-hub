
import React from "react";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { TestTube } from "lucide-react";
import type { Biomarker } from "./BiomarkersList";

interface BiomarkerCardProps {
  biomarker: Biomarker;
}

export const BiomarkerCard = ({ biomarker }: BiomarkerCardProps) => {
  const isInRange = biomarker.status === "In Range";

  return (
    <div className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-in fade-in duration-500">
      <div className="flex items-start justify-between mb-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <TestTube className="w-4 h-4 text-muted-foreground" />
            <h3 className="font-semibold text-lg">{biomarker.name}</h3>
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
  );
};
