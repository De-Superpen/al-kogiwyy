
import React from 'react';
import { Scissors, Crown, Shirt, Users, Sparkles, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Crown,
      title: 'Bespoke Kaftans',
      description: 'Custom-tailored kaftans crafted with premium fabrics and intricate designs for special occasions.',
      price: 'Starting from ₦45,000',
    },
    {
      icon: Sparkles,
      title: 'Royal & Wedding Agbadas',
      description: 'Majestic agbadas for weddings and royal events, featuring traditional embroidery and modern cuts.',
      price: 'Starting from ₦120,000',
    },
    {
      icon: Shirt,
      title: 'Senator Materials',
      description: 'High-quality senator materials perfect for formal meetings and business occasions.',
      price: 'Starting from ₦55,000',
    },
    {
      icon: Scissors,
      title: 'Custom Trousers & Casuals',
      description: 'Perfectly fitted trousers and casual wear tailored to your exact measurements and style preferences.',
      price: 'Starting from ₦25,000',
    },
    {
      icon: Users,
      title: 'Event Styling',
      description: 'Complete styling services for weddings, corporate events, and special celebrations.',
      price: 'Contact for pricing',
    },
    {
      icon: UserCheck,
      title: 'Fashion Consulting',
      description: 'Personal styling consultation to help you choose the perfect attire for any occasion.',
      price: 'Starting from ₦10,000',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-luxury-navy to-luxury-navy-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Comprehensive fashion services designed to meet all your style needs with precision and cultural authenticity.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-t-4 border-luxury-gold animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-luxury-gold mb-6">
                  <service.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-luxury-gold font-semibold">
                    {service.price}
                  </span>
                  <Button 
                    asChild
                    size="sm" 
                    className="bg-luxury-navy hover:bg-luxury-navy-dark text-white"
                  >
                    <a 
                      href={`https://wa.me/2349022920617?text=Hello%20AL-KOGIWWYY%20CASUALS,%20I'm%20interested%20in%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-luxury-navy mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From consultation to final fitting, we ensure every step delivers excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your needs, style preferences, and occasion requirements.' },
              { step: '02', title: 'Measurement', description: 'Precise measurements are taken to ensure perfect fit and comfort.' },
              { step: '03', title: 'Creation', description: 'Our skilled artisans craft your garment with attention to every detail.' },
              { step: '04', title: 'Fitting', description: 'Final fitting and adjustments to ensure absolute perfection.' },
            ].map((item, index) => (
              <div key={item.step} className="text-center animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-luxury-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C

TA Section */}
      <section className="py-20 gradient-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact us today to begin your journey towards exceptional style and unmatched quality.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-luxury-gold hover:bg-luxury-gold-dark text-white font-semibold"
          >
            <a 
              href="https://wa.me/2349022920617?text=Hello%20AL-KOGIWWYY%20CASUALS,%20I'm%20ready%20to%20get%20started%20with%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us Now
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
