
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-primary">
              HealthLab
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Monitorize, proteja e otimize a sua saúde com testes laboratoriais avançados.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/termos" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Termos de Uso
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
            <h3 className="font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-gray-600">
              Para dúvidas ou suporte:
              <br />
              <a href="mailto:suporte@healthlab.pt" className="text-primary hover:text-secondary">
                suporte@healthlab.pt
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-center text-gray-600">
            © {new Date().getFullYear()} HealthLab. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
