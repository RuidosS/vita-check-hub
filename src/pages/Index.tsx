
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { HowItWorks } from '../components/HowItWorks';
import { BiomarkersCarousel } from '../components/BiomarkersCarousel';
import { HealthEvolution } from '../components/HealthEvolution';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <BiomarkersCarousel />
        <HealthEvolution />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
