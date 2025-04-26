
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            HealthLab
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
              Como Funciona
            </Link>
            <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link to="/testes" className="text-sm font-medium hover:text-primary transition-colors">
              Testes em Casa
            </Link>
            <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">
              Login
            </Link>
            <button className="btn-primary">
              Junta-te à Lista de Espera
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-2 bg-white border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link to="/como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
                Como Funciona
              </Link>
              <Link to="/faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link to="/testes" className="text-sm font-medium hover:text-primary transition-colors">
                Testes em Casa
              </Link>
              <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">
                Login
              </Link>
              <button className="btn-primary w-full text-center">
                Junta-te à Lista de Espera
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
