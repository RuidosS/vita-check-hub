
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "Como funciona o processo de colheita em casa?",
      answer: "O processo é simples e seguro. Enviamos um kit completo com instruções detalhadas para a colheita. Após a colheita, basta enviar as amostras usando o envelope pré-pago fornecido."
    },
    {
      question: "Quanto tempo demora para receber os resultados?",
      answer: "Os resultados são disponibilizados na sua conta em 5-7 dias úteis após o laboratório receber as suas amostras."
    },
    {
      question: "Os testes são cientificamente validados?",
      answer: "Sim, todos os nossos testes são realizados em laboratórios certificados e utilizam métodos cientificamente validados."
    },
    {
      question: "Como é garantida a privacidade dos meus dados?",
      answer: "Seguimos rigorosos protocolos de segurança e privacidade. Seus dados são encriptados e protegidos de acordo com as normas GDPR."
    },
    {
      question: "Posso falar com um profissional sobre os meus resultados?",
      answer: "Sim, oferecemos consultoria com profissionais de saúde para ajudar na interpretação dos resultados e definição de planos de ação."
    },
    {
      question: "Com que frequência devo repetir os testes?",
      answer: "Recomendamos repetir os testes a cada 3-6 meses para monitorizar a sua evolução, mas isso pode variar dependendo dos seus objetivos de saúde."
    },
    {
      question: "Os testes são comparticipados pelo seguro de saúde?",
      answer: "Atualmente trabalhamos diretamente com o consumidor, mas estamos em processo de estabelecer parcerias com seguradoras."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-white">
          <div className="container-custom max-w-3xl">
            <h1 className="text-4xl font-bold text-center mb-8">Perguntas Frequentes</h1>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
