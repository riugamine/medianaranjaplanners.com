import Image from 'next/image';
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-title-primary text-foreground mb-8 tracking-wide">
            Sobre <span className="text-gradient-grapefruit">Nosotros</span>
          </h2>
          <Separator className="w-32 mx-auto bg-accent opacity-60" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-8">
            <Card className="shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg md:text-xl text-body-elegant text-foreground/90 mb-6">
                  Creemos que un evento no debería ser solo bonito: debe sentirse. Con más de una 
                  década creando celebraciones inolvidables, hemos aprendido que lo extraordinario 
                  ocurre cuando la estética se une a la autenticidad y a una estructura pensada al 
                  detalle.
                </p>

                <p className="text-lg md:text-xl text-body-elegant text-foreground/90 mb-6">
                  Fundada por Enith Dugarte en la isla de Margarita, nuestra marca nació con el 
                  propósito de diseñar experiencias que reflejen a quienes las viven. Desde bodas 
                  destino que parecen hechas a la medida de cada historia, hasta eventos 
                  corporativos que inspiran y celebraciones íntimas cargadas de significado, cada 
                  proyecto lleva impreso un sello único: transformar lo efímero en recuerdos que 
                  perduran.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg md:text-xl text-body-elegant text-foreground/90 mb-6">
                  Nuestro proceso va más allá de la planificación impecable. Escuchamos, 
                  interpretamos y traducimos la esencia de cada cliente en atmósferas que hablan por 
                  sí solas: espacios donde la estética no solo se contempla, sino que se experimenta 
                  con todos los sentidos.
                </p>

                <p className="text-lg md:text-xl text-body-elegant text-foreground/90">
                  Lo que nos mueve es simple: que cada persona, al mirar atrás, sienta que lo que 
                  vivió no fue solo un evento, sino un capítulo de su historia contado con belleza, 
                  detalle y propósito.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visual Side */}
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-elegant-hover">
              <Image
                src="/api/placeholder/600/600"
                alt="Enith Dugarte, fundadora de Mediana Naranja Planners"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating Founder Card */}
            <Card className="absolute -bottom-8 -left-8 shadow-elegant-hover border-border/50 bg-card/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-center">
                  <Separator className="w-16 mx-auto bg-accent opacity-60 mb-4" />
                  <h3 className="text-xl text-title-secondary text-foreground mb-1">Enith Dugarte</h3>
                  <p className="text-sm font-garamond text-muted-foreground tracking-wide">
                    Fundadora & Directora Creativa
                  </p>
                  <Separator className="w-16 mx-auto bg-accent opacity-60 mt-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-elegant-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-6 gradient-grapefruit rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-accent-foreground">✨</span>
              </div>
              <h3 className="text-xl text-title-secondary text-foreground mb-4">Elegancia Auténtica</h3>
              <p className="text-muted-foreground text-body-elegant">
                Cada detalle refleja la personalidad única de nuestros clientes con sofisticación natural.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-elegant-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-6 gradient-grapefruit rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-accent-foreground">🎯</span>
              </div>
              <h3 className="text-xl text-title-secondary text-foreground mb-4">Atención al Detalle</h3>
              <p className="text-muted-foreground text-body-elegant">
                Perfeccionamos cada elemento para crear experiencias sensoriales inolvidables.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-elegant border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-elegant-hover transition-all duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-6 gradient-grapefruit rounded-full flex items-center justify-center">
                <span className="text-2xl font-light text-accent-foreground">💎</span>
              </div>
              <h3 className="text-xl text-title-secondary text-foreground mb-4">Experiencias Exclusivas</h3>
              <p className="text-muted-foreground text-body-elegant">
                Diseñamos momentos únicos que trascienden las expectativas y perduran en el tiempo.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
