
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceSteps } from '../components/ServiceSteps';
import { SimpleSteps } from '../components/SimpleSteps';
import { ResultsOverTime } from '../components/ResultsOverTime';
import { CompleteHealth } from '../components/CompleteHealth';

const ComoFunciona = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <ServiceSteps />
        <SimpleSteps />
        <ResultsOverTime />
        <CompleteHealth />
      </main>
      <Footer />
    </div>
  );
};

export default ComoFunciona;

