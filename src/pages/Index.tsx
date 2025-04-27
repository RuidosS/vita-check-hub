
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { AboutUs } from '../components/AboutUs';
import { BiomarkersIntro } from '../components/BiomarkersIntro';
import { BiomarkersCarousel } from '../components/BiomarkersCarousel';
import { BiomarkersCategories } from '../components/BiomarkersCategories';
import { ResultsOverTime } from '../components/ResultsOverTime';
import { HealthEvolution } from '../components/HealthEvolution';
import { ServiceSteps } from '../components/ServiceSteps';
import { WhyDifferent } from '../components/WhyDifferent';
import { WaitlistForm } from '../components/WaitlistForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUs />
        <BiomarkersIntro />
        <BiomarkersCarousel />
        <ResultsOverTime />
        <HealthEvolution />
        <ServiceSteps />
        <BiomarkersCategories />
        <WhyDifferent />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
