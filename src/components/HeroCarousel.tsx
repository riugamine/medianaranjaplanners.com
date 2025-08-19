'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface HeroCarouselProps {
  className?: string;
}

/**
 * Elegant hero carousel with luxury aesthetic and sophisticated animations
 */
export default function HeroCarousel({ className }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // High-end event imagery with sophisticated messaging
  const slides = [
    {
      id: 1,
      image: '/api/placeholder/1920/1080',
      alt: 'Elegant wedding ceremony with luxury floral arrangements',
      badge: 'Bodas Exclusivas',
      title: 'Momentos que Perduran para Siempre',
      subtitle: 'Diseñamos experiencias únicas que reflejan la esencia de tu amor, con una atención impecable a cada detalle.',
      cta: 'Descubre Nuestras Bodas'
    },
    {
      id: 2,
      image: '/api/placeholder/1920/1080',
      alt: 'Sophisticated corporate event with elegant decor',
      badge: 'Eventos Corporativos',
      title: 'Elegancia que Inspira Confianza',
      subtitle: 'Transformamos espacios corporativos en ambientes sofisticados que comunican profesionalismo y distinción.',
      cta: 'Eventos Empresariales'
    },
    {
      id: 3,
      image: '/api/placeholder/1920/1080',
      alt: 'Intimate luxury celebration with refined details',
      badge: 'Celebraciones Íntimas',
      title: 'La Belleza Está en los Detalles',
      subtitle: 'Cada celebración íntima es una obra de arte personalizada, donde cada elemento cuenta una historia única.',
      cta: 'Celebraciones Personalizadas'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-advance slides with longer intervals for luxury feel
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className={cn('relative h-screen overflow-hidden', className)}>
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              'absolute inset-0 transition-all duration-1500 ease-out',
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            )}
          >
            {/* Background Image */}
            <div className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover transition-transform duration-[7000ms] ease-out hover:scale-105"
                priority={index === 0}
              />
              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
              <div className="absolute inset-0 gradient-cream opacity-10" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-5xl mx-auto">
                <Badge 
                  variant="outline" 
                  className="mb-6 border-white/30 text-white bg-white/10 backdrop-blur-sm text-sm font-garamond tracking-wider px-4 py-2"
                >
                  {slide.badge}
                </Badge>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-title-primary mb-8 tracking-wide leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-subtitle-elegant opacity-90 max-w-3xl mx-auto leading-relaxed mb-12">
                  {slide.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="gradient-grapefruit text-accent-foreground hover:shadow-elegant-hover px-8 py-4 text-lg font-light tracking-wide transition-all duration-500 group"
                  >
                    <FontAwesomeIcon 
                      icon={faCalendarCheck} 
                      className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" 
                    />
                    Agendar Consulta
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
                  >
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Elegant Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 z-10 group"
          aria-label="Previous slide"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
            <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
          </div>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 z-10 group"
          aria-label="Next slide"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
            <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
          </div>
        </button>

        {/* Sophisticated Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                'transition-all duration-300 rounded-full',
                index === currentSlide 
                  ? 'w-12 h-3 bg-white shadow-elegant' 
                  : 'w-3 h-3 bg-white/40 hover:bg-white/60 hover:scale-110'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
