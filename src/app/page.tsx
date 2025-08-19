import Navigation from '@/components/Navigation';
import HeroCarousel from '@/components/HeroCarousel';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

/**
 * Main landing page for Mediana Naranja Planners
 * Elegant, high-class event planning website with sophisticated design
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Carousel */}
      <HeroCarousel />
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
