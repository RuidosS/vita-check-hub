
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const TermosECondicoes = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <div className="container-custom py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Termos e Condições</h1>
          <p className="text-gray-600 mb-8">Data de Entrada em Vigor: 29 de Janeiro de 2025</p>
          <p className="font-medium mb-8">Bem-vindo à Ōuma Health!</p>

          <p className="mb-8">
            Estes Termos e Condições ("Termos") regulam o acesso e a utilização do website e dos serviços da HealthLabs. 
            Ao aceder ou utilizar o nosso website, aceita estes Termos.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">1. Quem Somos</h2>
              <p className="mb-4">
                A Ōuma Health ("nós", "nosso" ou "connosco") é uma plataforma digital com sede em Portugal, 
                que fornece informação geral sobre saúde e facilita o acesso a serviços de análises sanguíneas 
                realizados por laboratórios acreditados.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Não somos um prestador de cuidados de saúde e não oferecemos diagnóstico médico, tratamento ou aconselhamento médico.</li>
                <li>Toda a informação que disponibilizamos destina-se apenas a fins informativos e educativos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. Os Nossos Serviços</h2>
              <p className="mb-4">Através da HealthLabs, poderá:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Aceder a informação educativa sobre saúde e bem-estar;</li>
                <li>Solicitar acesso a serviços de análises sanguíneas realizados por laboratórios certificados;</li>
                <li>Receber relatórios informativos gerais com base nos resultados laboratoriais.</li>
              </ul>
              <p className="mt-4">
                Os nossos serviços não substituem consultas médicas, tratamentos médicos, nem aconselhamento de profissionais de saúde qualificados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Aviso de Responsabilidade Médica</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>A HealthLabs não presta aconselhamento médico, diagnóstico ou tratamento.</li>
                <li>Toda a informação disponibilizada destina-se exclusivamente a fins informativos e educativos.</li>
                <li>Deve sempre procurar o aconselhamento de um profissional de saúde qualificado para quaisquer preocupações médicas.</li>
                <li>Em caso de emergência médica, contacte imediatamente os serviços de emergência (112 em Portugal).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. Obrigações dos Utilizadores</h2>
              <p className="mb-4">Ao utilizar a HealthLabs, compromete-se a:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Fornecer informações verdadeiras, atualizadas e completas sempre que solicitado;</li>
                <li>Utilizar a plataforma apenas para fins lícitos e pessoais;</li>
                <li>Não utilizar a plataforma de forma abusiva, nem interferir ou prejudicar os nossos serviços.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">5. Proteção de Dados</h2>
              <p className="mb-4">
                Respeitamos a sua privacidade e protegemos os seus dados pessoais em conformidade com o Regulamento Geral 
                sobre a Proteção de Dados (RGPD) e com a legislação portuguesa aplicável.
              </p>
              <p>
                Para mais informações, consulte a nossa{" "}
                <a href="/privacidade" className="text-primary hover:underline">
                  Política de Privacidade
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">6. Limitação de Responsabilidade</h2>
              <p className="mb-4">Na máxima extensão permitida por lei:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>A HealthLabs não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais resultantes da utilização dos nossos serviços;</li>
                <li>A utilização das informações e dos serviços é feita por sua conta e risco;</li>
                <li>Não garantimos a completude, exatidão ou utilidade da informação fornecida.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">7. Alterações aos Termos</h2>
              <p className="mb-4">
                Podemos atualizar estes Termos periodicamente. Quaisquer alterações serão publicadas nesta página com a respetiva data de atualização.
              </p>
              <p>
                A continuação da utilização dos nossos serviços após a publicação das alterações significa que aceita os novos Termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">8. Lei Aplicável</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Estes Termos são regidos pelas leis de Portugal.</li>
                <li>Qualquer litígio relacionado com estes Termos será submetido à jurisdição exclusiva dos tribunais de Lisboa, Portugal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">9. Contactos</h2>
              <p className="mb-4">Se tiver alguma dúvida sobre estes Termos, pode contactar-nos através de:</p>
              <p>
                HealthLabs
                <br />
                Email: <a href="mailto:suporte@healthlab.pt" className="text-primary hover:underline">suporte@healthlab.pt</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermosECondicoes;
