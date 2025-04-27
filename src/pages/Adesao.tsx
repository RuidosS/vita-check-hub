
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WaitlistForm } from "../components/WaitlistForm";
import { Membership } from "../components/Membership";

const Adesao = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Membership />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default Adesao;
