
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-muted py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <Link to="/" className="text-xl font-bold text-primary">
              Ōuma Health
            </Link>
            <p className="mt-6 text-sm text-gray-600 max-w-[70ch] leading-relaxed">
              Monitoriza, proteje e optimiza a tua saúde com testes laboratoriais.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/termos-e-condicoes" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link to="/privacidade" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Contacto</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Para dúvidas ou suporte:
              <br />
              <a href="mailto:geral.ouma.health@gmail.com" className="text-primary hover:text-secondary mt-2 inline-block">
                geral.ouma.health@gmail.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()} Ōuma Health. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
