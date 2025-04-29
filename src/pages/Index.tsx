
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { AboutUs } from '../components/AboutUs';
import { BiomarkersIntro } from '../components/BiomarkersIntro';
import { BiomarkersCarousel } from '../components/BiomarkersCarousel';
import { SilentDiseases } from '../components/SilentDiseases';
import { BiomarkersCategories } from '../components/BiomarkersCategories';
import { ResultsOverTime } from '../components/ResultsOverTime';
import { HealthEvolution } from '../components/HealthEvolution';
import { ServiceSteps } from '../components/ServiceSteps';
import { WhyDifferent } from '../components/WhyDifferent';
import { MembershipFeatures } from '../components/MembershipFeatures';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutUs />
        <MembershipFeatures />
        <BiomarkersIntro />
        <BiomarkersCarousel />
        <SilentDiseases />
        <ResultsOverTime />
        <ServiceSteps />
        <HealthEvolution />
        <BiomarkersCategories />
        <WhyDifferent />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
