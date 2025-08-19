import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ContactProps {
  className?: string;
}

/**
 * Elegant contact section with luxury aesthetic and Calendly integration
 */
export default function Contact({ className }: ContactProps) {
  return (
    <section id="contact" className={cn('py-24 px-6 bg-background', className)}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <Badge 
            variant="outline" 
            className="mb-6 border-muted-foreground/30 text-muted-foreground bg-background/50 backdrop-blur-sm text-sm font-garamond tracking-wider px-6 py-3"
          >
            Comencemos Juntos
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-title-primary text-foreground mb-8 tracking-wide">
            <span className="text-gradient-grapefruit">Contacto</span>
          </h2>
          <Separator className="w-32 mx-auto bg-accent opacity-60 mb-8" />
          <p className="text-xl md:text-2xl text-subtitle-elegant text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ¿Listo para crear algo extraordinario? Agenda una consulta personalizada y 
            comencemos a dar vida a tu visión.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl md:text-3xl text-title-secondary text-foreground mb-6">
                  Hablemos de tu próximo evento
                </h3>
                <p className="text-lg text-body-elegant text-muted-foreground leading-relaxed mb-8">
                  Cada proyecto extraordinario comienza con una conversación íntima. Nos encanta 
                  conocer tus ideas, sueños y visión para crear juntos algo verdaderamente único 
                  y memorable.
                </p>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 gradient-grapefruit rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon 
                        icon={faMapMarkerAlt} 
                        className="h-5 w-5 text-accent-foreground" 
                      />
                    </div>
                    <div>
                      <p className="text-sm font-garamond text-muted-foreground uppercase tracking-wider">Ubicación</p>
                      <p className="text-lg font-garamond text-foreground">Isla de Margarita, Venezuela</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 gradient-grapefruit rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon 
                        icon={faEnvelope} 
                        className="h-5 w-5 text-accent-foreground" 
                      />
                    </div>
                    <div>
                      <p className="text-sm font-garamond text-muted-foreground uppercase tracking-wider">Email</p>
                      <a 
                        href="mailto:info@medianaranjaplanners.com" 
                        className="text-lg font-garamond text-foreground hover:text-accent transition-colors"
                      >
                        info@medianaranjaplanners.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 gradient-grapefruit rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FontAwesomeIcon 
                        icon={faPhone} 
                        className="h-5 w-5 text-accent-foreground" 
                      />
                    </div>
                    <div>
                      <p className="text-sm font-garamond text-muted-foreground uppercase tracking-wider">Teléfono</p>
                      <a 
                        href="tel:+584121234567" 
                        className="text-lg font-garamond text-foreground hover:text-accent transition-colors"
                      >
                        +58 (412) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-garamond text-muted-foreground uppercase tracking-wider mb-2">
                    Horario de Atención
                  </p>
                  <p className="text-lg font-garamond text-foreground">
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-lg font-garamond text-foreground">
                    Sábados: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Calendly CTA */}
          <div className="relative">
            <Card className="shadow-elegant-hover border-border/50 bg-card/90 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 gradient-grapefruit"></div>
              <CardContent className="p-12 text-center">
                <div className="mb-10">
                  <div className="w-20 h-20 mx-auto mb-8 gradient-grapefruit rounded-full flex items-center justify-center shadow-elegant">
                    <FontAwesomeIcon 
                      icon={faCalendarCheck} 
                      className="h-10 w-10 text-accent-foreground" 
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl text-title-secondary text-foreground mb-6">
                    Agenda tu Consulta Exclusiva
                  </h3>
                  <p className="text-lg text-body-elegant text-muted-foreground leading-relaxed mb-8">
                    Reserva una sesión personalizada para discutir cada detalle de tu evento. 
                    Te acompañamos en cada paso del proceso para materializar tu visión con 
                    la elegancia que mereces.
                  </p>
                </div>

                {/* Calendly Button */}
                <Button
                  asChild
                  size="lg"
                  className="gradient-grapefruit text-accent-foreground hover:shadow-elegant-hover px-10 py-6 text-lg font-light tracking-wide transition-all duration-500 group mb-6"
                >
                  <a
                    href="https://calendly.com/medianaranjaplanners"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon 
                      icon={faCalendarCheck} 
                      className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" 
                    />
                    Agendar Consulta
                  </a>
                </Button>

                <Separator className="w-24 mx-auto bg-accent opacity-60 mb-4" />
                <p className="text-sm font-garamond text-muted-foreground tracking-wide">
                  Consulta inicial gratuita de 45 minutos
                </p>
                <p className="text-xs font-garamond text-muted-foreground/70 mt-2">
                  Disponible presencial y virtual
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
