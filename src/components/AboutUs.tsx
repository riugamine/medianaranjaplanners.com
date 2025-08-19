'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface AboutUsProps {
  className?: string;
}

/**
 * Elegant About Us section with sophisticated layout and brand storytelling
 */
export default function AboutUs({ className }: AboutUsProps) {
  return (
    <section id="about" className={cn('py-24 px-6 gradient-cream', className)}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 border-muted-foreground/30 text-muted-foreground bg-background/50 backdrop-blur-sm text-sm font-garamond tracking-wider px-6 py-3"
          >
            Nuestra Historia
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-title-primary mb-8 tracking-wide">
            <span className="text-muted-foreground">Sobre</span> <span className="text-gradient-grapefruit">Nosotros</span>
          </h2>
          <Separator className="w-32 mx-auto bg-accent opacity-60" />
        </div>

        {/* About Content - Minimalist Text Only */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-xl max-w-none text-left">
            <p className="text-lg md:text-xl lg:text-2xl text-body-elegant text-foreground leading-relaxed mb-8">
              Creemos que un evento no debería ser solo bonito: debe sentirse. Con más de una 
              década creando celebraciones inolvidables, hemos aprendido que lo extraordinario 
              ocurre cuando la estética se une a la autenticidad y a una estructura pensada al 
              detalle.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-body-elegant text-foreground leading-relaxed mb-8">
              Fundada por Enith Dugarte en la isla de Margarita, nuestra marca nació con el 
              propósito de diseñar experiencias que reflejen a quienes las viven. Desde bodas 
              destino que parecen hechas a la medida de cada historia, hasta eventos 
              corporativos que inspiran y celebraciones íntimas cargadas de significado, cada 
              proyecto lleva impreso un sello único: transformar lo efímero en recuerdos que 
              perduran.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-body-elegant text-foreground leading-relaxed mb-8">
              Nuestro proceso va más allá de la planificación impecable. Escuchamos, 
              interpretamos y traducimos la esencia de cada cliente en atmósferas que hablan por 
              sí solas: espacios donde la estética no solo se contempla, sino que se experimenta 
              con todos los sentidos.
            </p>

            <p className="text-lg md:text-xl lg:text-2xl text-body-elegant text-foreground leading-relaxed">
              Lo que nos mueve es simple: que cada persona, al mirar atrás, sienta que lo que 
              vivió no fue solo un evento, sino un capítulo de su historia contado con belleza, 
              detalle y propósito.
            </p>
          </div>

          {/* Founder Signature */}
          <div className="mt-16 text-center">
            <Separator className="w-32 mx-auto bg-accent opacity-60 mb-6" />
            <p className="text-lg text-title-secondary text-foreground mb-2">Enith Dugarte</p>
            <p className="text-sm font-garamond text-muted-foreground tracking-wider uppercase mb-6">
              Fundadora & Directora Creativa
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center items-center space-x-4 text-sm font-garamond tracking-wider">
              <button
                onClick={() => window.open('https://www.instagram.com/medianaranjaplanners', '_blank', 'noopener,noreferrer')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
              >
                Instagram
              </button>
              <span className="text-muted-foreground/40">|</span>
              <button
                onClick={() => window.open('https://calendly.com/medianaranjaplanners', '_blank', 'noopener,noreferrer')}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
              >
                Contacto
              </button>
            </div>
          </div>
        </div>

        {/* Instagram Feed Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl text-title-secondary mb-4 text-foreground">
              Síguenos en Instagram
            </h3>
            <p className="text-muted-foreground font-garamond text-lg">
              Descubre nuestros últimos proyectos y momentos especiales
            </p>
          </div>
          
          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-elegant hover:shadow-elegant-hover transition-all duration-300 cursor-pointer"
                onClick={() => window.open('https://www.instagram.com/medianaranjaplanners', '_blank', 'noopener,noreferrer')}
              >
                <img
                  src={`/images/${index === 1 ? '1' : index === 2 ? '2' : index === 3 ? '3' : '1'}.jpg`}
                  alt={`Instagram post ${index} - Mediana Naranja Planners elegant event planning`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg 
                      className="h-6 w-6 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Instagram CTA */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.open('https://www.instagram.com/medianaranjaplanners', '_blank', 'noopener,noreferrer')}
              className="cursor-pointer border border-accent/30 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent/50 hover:scale-105 px-8 py-3 font-garamond tracking-wide transition-all duration-300 group rounded-lg"
            >
              <svg 
                className="inline-block mr-3 h-5 w-5 group-hover:scale-110 transition-transform" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Ver más en Instagram
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
