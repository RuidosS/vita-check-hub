
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "Como funciona o processo de colheita?",
      answer: "A tua colheita é realizada presencialmente num dos nossos laboratórios parceiros. A marcação é rápida e feita diretamente através da nossa plataforma."
    },
    {
      question: "Quanto tempo demora para receber os resultados?",
      answer: "Os resultados laboratoriais ficam prontos entre 2 a 5 dias úteis após a colheita. O teu relatório personalizado e plano de ação é enviado até 5 a 10 dias úteis depois."
    },
    {
      question: "Os testes são validados por médicos?",
      answer: "Sim. Todos os testes são realizados em laboratórios certificados e validados por profissionais de saúde."
    },
    {
      question: "Os meus dados são privados e seguros?",
      answer: "Sim. A tua privacidade é a nossa prioridade. Utilizamos encriptação de ponta a ponta e seguimos protocolos rigorosos de proteção de dados."
    },
    {
      question: "Posso falar com um profissional sobre os meus resultados?",
      answer: "Claro. Tens a opção de marcar uma consulta de interpretação com um dos nossos profissionais de saúde especializados."
    },
    {
      question: "Com que frequência devo fazer os testes?",
      answer: "A Membership inclui duas testagens laboratoriais por ano, com um intervalo de 6 meses entre elas, para acompanhar a evolução da tua saúde."
    },
    {
      question: "Os testes são comparticipados pelo seguro de saúde?",
      answer: "Atualmente, os testes HealthLab não são comparticipados, mas estamos a trabalhar ativamente para que sejam no futuro."
    },
    {
      question: "Qual é a diferença entre o HealthLab e exames médicos tradicionais?",
      answer: "O HealthLab não é focado apenas em diagnosticar doenças. Analisamos mais de 100 biomarcadores para te oferecer uma visão completa da tua saúde, orientada para a longevidade, performance e otimização contínua."
    },
    {
      question: "Preciso de receita médica para fazer os testes?",
      answer: "Não. Ao aderires ao HealthLab, tens acesso direto às testagens laboratoriais, sem necessidade de receita médica."
    },
    {
      question: "O HealthLab substitui o meu médico?",
      answer: "Não. O HealthLab não substitui o acompanhamento médico tradicional. O nosso objetivo é complementar a tua jornada de saúde, oferecendo dados mais profundos, planos personalizados e monitorização contínua, sempre que quiseres agir de forma preventiva."
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
