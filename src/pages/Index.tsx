
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { AboutUs } from '../components/AboutUs';
import { BiomarkersCarousel } from '../components/BiomarkersCarousel';
import { BiomarkersIntro } from '../components/BiomarkersIntro';
import { BiomarkersCategories } from '../components/BiomarkersCategories';
import { ResultsOverTime } from '../components/ResultsOverTime';
import { HealthEvolution } from '../components/HealthEvolution';
import { ServiceSteps } from '../components/ServiceSteps';
import { WhyDifferent } from '../components/WhyDifferent';
import { Membership } from '../components/Membership';
import { WaitlistForm } from '../components/WaitlistForm';
import { BiomarkersList } from '../components/BiomarkersList';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUs />
        <BiomarkersCarousel />
        <ResultsOverTime />
        <HealthEvolution />
        <ServiceSteps />
        <BiomarkersIntro />
        <BiomarkersCategories />
        <WhyDifferent />
        <BiomarkersList />
        <Membership />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
