
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Scissors } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ScrollingAnnouncement from '@/components/ScrollingAnnouncement';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollingAnnouncement />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1594736797933-d0d2355d9511?w=1920&h=1080&fit=crop"
        >
          <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1594736797933-d0d2355d9511?w=1920&h=1080&fit=crop)',
            zIndex: 5
          }}
        />
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            <span className="text-gradient-gold">AL-KOGIWWYY</span>
            <br />
            CASUALS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Redefining luxury fashion for the modern African man with precision tailoring and cultural pride
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-semibold"
            >
              <Link to="/gallery">
                Explore Our Styles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-luxury-navy font-semibold"
            >
              <a 
                href="https://wa.me/2349022920617?text=Hello%20AL-KOGIWWYY%20CASUALS,%20I'm%20interested%20in%20your%20premium%20fashion%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-slide-in">
              <div className="bg-luxury-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-2">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="animate-slide-in">
              <div className="bg-luxury-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scissors className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-2">1000+</h3>
              <p className="text-gray-600">Garments Tailored</p>
            </div>
            <div className="animate-slide-in">
              <div className="bg-luxury-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-2">5+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="animate-slide-in">
              <div className="bg-luxury-gold text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-luxury-navy mb-2">100%</h3>
              <p className="text-gray-600">Quality Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-4">
              Our Premium Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our exquisite range of handcrafted garments, each piece telling a story of African elegance and modern sophistication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-luxury-navy hover:bg-luxury-navy-dark text-white">
              <Link to="/gallery">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust AL-KOGIWWYY CASUALS for their premium fashion needs.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-semibold"
          >
            <a 
              href="https://wa.me/2349022920617?text=Hello%20AL-KOGIWWYY%20CASUALS,%20I'm%20ready%20to%20experience%20luxury%20fashion"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
