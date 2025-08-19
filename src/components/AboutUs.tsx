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

        {/* About Content - Minimalist Text Only */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-xl max-w-none text-center">
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
            <p className="text-sm font-garamond text-muted-foreground tracking-wider uppercase">
              Fundadora & Directora Creativa
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
