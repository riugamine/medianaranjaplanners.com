'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

/**
 * Elegant navigation component with high-class aesthetic
 */
export default function Navigation({ className }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-elegant',
      className
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl lg:text-3xl text-title-primary tracking-wide text-foreground">
              <span className="text-gradient-grapefruit">Mediana Naranja</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground font-garamond text-base tracking-wide transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="ml-4 text-accent hover:text-foreground font-garamond text-base tracking-wide transition-all duration-300 relative group"
            >
              Agendar Cita
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-all duration-300 group-hover:bg-foreground"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2 transition-colors duration-300"
            >
              <FontAwesomeIcon 
                icon={isMenuOpen ? faTimes : faBars} 
                className="h-6 w-6" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-muted-foreground hover:text-foreground font-garamond text-lg tracking-wide transition-all duration-300 relative group py-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="block w-full text-left text-accent hover:text-foreground font-garamond text-lg tracking-wide transition-all duration-300 relative group py-2 mt-6"
                >
                  Agendar Cita
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-all duration-300 group-hover:bg-foreground"></span>
                </button>
              </div>
            </div>
          )}
      </div>
    </nav>
  );
}
