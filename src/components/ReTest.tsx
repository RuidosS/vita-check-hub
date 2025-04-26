
import React from "react";
import { HealthEvolution } from "./HealthEvolution";

export const ReTest = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <HealthEvolution />
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            <img 
              src="/lovable-uploads/d6e33871-d622-4c86-8ae5-68f93152ab8d.png"
              alt="Mobile app tracking results over 6 months"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
