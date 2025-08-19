'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

/**
 * Elegant footer with sophisticated design and smooth navigation
 */
export default function Footer({ className }: FooterProps) {
  const handleNavigation = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={cn('bg-primary text-primary-foreground py-16 px-6', className)}>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left space-y-6">
            <div>
              <h3 className="text-xl  text-title-primary text-center mb-2">
                <span className="text-primary-foreground">Media Naranja</span>
              </h3>
              <Separator className="w-16 bg-accent opacity-60 md:mx-0 mx-auto" />
            </div>
            <p className="text-primary-foreground/70 text-body-elegant max-w-sm md:mx-0 mx-auto">
              Transformando momentos en recuerdos que perduran para siempre. 
              Más de una década creando celebraciones extraordinarias con elegancia y distinción.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center space-y-6">
            <div>
              <h4 className="text-xl text-title-secondary mb-2 text-primary-foreground text-center">Navegación</h4>
              <Separator className="w-12 mx-auto bg-accent opacity-60" />
            </div>
            <nav className="space-y-3">
              <Button
                variant="ghost"
                onClick={() => handleNavigation('#hero')}
                className="block w-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 font-light transition-all duration-300 py-2"
              >
                Inicio
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigation('#about')}
                className="block w-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 font-light transition-all duration-300 py-2"
              >
                Nosotros
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigation('https://calendly.com/medianaranjaplanners', true)}
                className="block w-full text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10 font-light transition-all duration-300 py-2"
              >
                Contacto
              </Button>
            </nav>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right space-y-6">
            <div>
              <h4 className="text-xl text-title-secondary mb-2 text-primary-foreground text-center">Síguenos</h4>
              <Separator className="w-12 md:ml-auto mx-auto bg-accent opacity-60" />
            </div>
            <div className="flex justify-center md:justify-center">
              <Button
                variant="ghost"
                asChild
                className="group hover:bg-primary-foreground/10 transition-all duration-300 p-4"
              >
                <a
                  href="https://www.instagram.com/medianaranjaplanners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon 
                      icon={faInstagram} 
                      className="h-6 w-6 text-accent-foreground" 
                    />
                  </div>

                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="bg-primary-foreground/20 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/60 font-garamond text-sm">
              © {new Date().getFullYear()} Mediana Naranja Planners. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/60 font-garamond text-sm">
              Isla de Margarita, Venezuela
            </p>
            <p className="text-primary-foreground/40 font-garamond text-xs mt-1">
              Diseñado con ❤️ para crear momentos extraordinarios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
