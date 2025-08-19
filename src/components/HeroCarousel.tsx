'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // High-end event imagery with sophisticated messaging
  const slides = [
    {
      id: 1,
      image: '/images/1.jpg',
      alt: 'Elegant wedding ceremony setup with luxury floral arrangements and sophisticated decor',
      badge: 'Bodas Exclusivas',
      title: 'Momentos que Perduran para Siempre',
      subtitle: 'Diseñamos experiencias únicas que reflejan la esencia de tu amor, con una atención impecable a cada detalle que trasciende lo ordinario.',
      cta: 'Descubre Nuestras Bodas'
    },
    {
      id: 2,
      image: '/images/2.jpg',
      alt: 'Sophisticated event setup with elegant table arrangements and refined atmosphere',
      badge: 'Eventos Exclusivos',
      title: 'Elegancia que Inspira Distinción',
      subtitle: 'Cada evento es una obra maestra cuidadosamente orquestada, donde la sofisticación y el refinamiento se encuentran para crear experiencias inolvidables.',
      cta: 'Eventos de Lujo'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const openCalendly = () => {
    window.open('https://calendly.com/medianaranjaplanners', '_blank', 'noopener,noreferrer');
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
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
      <div 
        ref={carouselRef}
        className="relative h-full group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
              <div className="absolute inset-0 gradient-cream opacity-15" />
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
                    onClick={openCalendly}
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

        {/* Elegant Navigation Arrows - Hidden by default, show on hover, hidden on mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Previous slide"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
            <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
          </div>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 hidden md:block"
          aria-label="Next slide"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300">
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
