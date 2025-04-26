
import React from "react";

export const ReTest = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-dark-purple tracking-tight leading-tight">
              Re-test after 6 months
            </h2>
            <p className="text-2xl text-muted-foreground font-medium leading-relaxed">
              A full check-up every 6 months to track progress and refine your optimization plan. Results stored in one secure place for easy access anytime.
            </p>
          </div>
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
