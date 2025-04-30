
import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const PoliticaPrivacidade = () => {
  // Scroll to top on page load
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        <div className="container-custom py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Política de Privacidade</h1>
          <p className="text-gray-600 mb-8">Data de Entrada em Vigor: 29 de Janeiro de 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">1. Introdução</h2>
              <p className="mb-4">
                A sua privacidade é importante para nós. A presente Política de Privacidade descreve como a Ōuma Health ("Ōuma", "nós", "nosso") recolhe, utiliza e protege os seus dados pessoais quando utiliza o nosso website ou se inscreve na nossa lista de espera. Esta Política está em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação portuguesa aplicável.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. Quem Somos</h2>
              <p className="mb-4">
                A Ōuma Health é uma plataforma digital com sede em Portugal que fornece conteúdos informativos sobre saúde e facilita o acesso a serviços laboratoriais realizados por entidades acreditadas.
              </p>
              <p className="mb-4">
                <strong>Responsável pelo Tratamento de Dados:</strong><br />
                HealthLabs (operando sob a marca Ōuma Health)<br />
                Email: <a href="mailto:geral.ouma.health@gmail.com" className="text-primary hover:underline">geral.ouma.health@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. Que Dados Recolhemos</h2>
              <p className="mb-4">
                Apenas recolhemos os dados estritamente necessários para prestar os nossos serviços ou melhorar a sua experiência.
              </p>
              <p className="mb-4">Dados que poderemos recolher incluem:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Dados de identificação: nome, endereço de e-mail</li>
                <li>Dados técnicos: endereço IP, tipo de navegador, dispositivo utilizado</li>
                <li>Dados de utilização: páginas visitadas, tempo de permanência no site</li>
                <li>Preferências de marketing: se aceitou receber comunicações nossas</li>
              </ul>
              <p className="mt-4"><em>Nota: Não recolhemos dados clínicos ou sensíveis nesta fase de pré-lançamento.</em></p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. Finalidades do Tratamento de Dados</h2>
              <p className="mb-4">Utilizamos os seus dados para:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Gerir a sua inscrição na nossa lista de espera</li>
                <li>Comunicar consigo sobre o lançamento da nossa plataforma</li>
                <li>Enviar, se consentido, newsletters ou conteúdos sobre saúde e bem-estar</li>
                <li>Analisar a utilização do website para fins de melhoria contínua</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">5. Fundamento Legal para o Tratamento</h2>
              <p className="mb-4">O tratamento dos seus dados pessoais é feito com base em:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Consentimento: quando se inscreve voluntariamente na nossa lista de espera ou aceita comunicações de marketing</li>
                <li>Interesse legítimo: para melhorar os nossos serviços e garantir a segurança da plataforma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">6. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Utilizamos cookies apenas para fins analíticos e técnicos, com o seu consentimento. Pode gerir as suas preferências de cookies através do seu navegador ou das definições no nosso site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">7. Conservação dos Dados</h2>
              <p className="mb-4">Os seus dados são conservados apenas pelo tempo necessário:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Emails da lista de espera: até ao lançamento da plataforma ou até pedir remoção</li>
                <li>Dados analíticos: até 25 meses</li>
              </ul>
              <p className="mt-4">Pode solicitar a eliminação dos seus dados a qualquer momento.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">8. Os Seus Direitos</h2>
              <p className="mb-4">De acordo com o RGPD, tem os seguintes direitos:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Aceder aos seus dados pessoais</li>
                <li>Corrigir dados imprecisos</li>
                <li>Retirar o seu consentimento</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Opor-se ao tratamento para fins de marketing</li>
                <li>Apresentar reclamação à CNPD (<a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnpd.pt</a>)</li>
              </ul>
              <p className="mt-4">
                Para exercer qualquer destes direitos, contacte-nos através de:
                <br />
                <a href="mailto:geral.ouma.health@gmail.com" className="text-primary hover:underline">geral.ouma.health@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">9. Segurança dos Dados</h2>
              <p>
                Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados contra acesso não autorizado, perda ou divulgação indevida.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">10. Alterações a Esta Política</h2>
              <p>
                Poderemos atualizar esta Política de Privacidade sempre que necessário. Quaisquer alterações serão publicadas nesta página com a nova data de entrada em vigor.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PoliticaPrivacidade;
