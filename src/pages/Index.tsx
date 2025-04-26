
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { ServiceSteps } from '../components/ServiceSteps';
import { SimpleSteps } from '../components/SimpleSteps';
import { ResultsOverTime } from '../components/ResultsOverTime';
import { CompleteHealth } from '../components/CompleteHealth';
import { ClinicalSummary } from '../components/ClinicalSummary';
import { BiomarkersCarousel } from '../components/BiomarkersCarousel';
import { ReTest } from '../components/ReTest';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <BiomarkersCarousel />
        <ServiceSteps />
        <SimpleSteps />
        <ResultsOverTime />
        <ReTest />
        <CompleteHealth />
        <ClinicalSummary />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
