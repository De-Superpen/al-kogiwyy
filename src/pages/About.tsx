
import React from 'react';
import { Calendar, MapPin, Award, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-luxury-navy to-luxury-navy-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            About AL-KOGIWWYY CASUALS
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            A story of passion, precision, and cultural pride in African fashion.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-4xl font-playfair font-bold text-luxury-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  AL-KOGIWWYY CASUALS is a premium Nigerian fashion brand founded in January 2024, specializing in bespoke menswear that blends traditional African elegance with modern sophistication.
                </p>
                <p>
                  After working for some years in Ghana and gaining hands-on experience in West African fashion trends and garment production, our founder returned to Nigeria with a renewed vision to redefine casual luxury for the modern African man.
                </p>
                <p>
                  The brand offers meticulously tailored kaftans and luxurious agbadas, each crafted with precision, quality, and cultural pride. With a strong focus on customer satisfaction, we provide personalized service, custom fittings, and seamless communication.
                </p>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="AL-KOGIWWYY CASUALS craftsmanship"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-luxury-navy mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Committed to excellence, cultural authenticity, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Passion',
                description: 'Every piece is crafted with love and dedication to African fashion heritage.',
              },
              {
                icon: Award,
                title: 'Quality',
                description: 'We use only the finest materials and maintain the highest standards of craftsmanship.',
              },
              {
                icon: MapPin,
                title: 'Cultural Pride',
                description: 'Celebrating and preserving African fashion traditions while embracing modernity.',
              },
              {
                icon: Calendar,
                title: 'Innovation',
                description: 'Continuously evolving our designs to meet contemporary fashion needs.',
              },
            ].map((value, index) => (
              <div 
                key={value.title}
                className="text-center bg-white p-8 rounded-lg shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-luxury-gold mb-4">
                  <value.icon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-luxury-navy mb-8">
              Our Vision
            </h2>
            <div className="bg-luxury-gold/10 p-12 rounded-lg">
              <p className="text-2xl font-medium text-gray-800 leading-relaxed mb-8">
                "As we continue to grow, AL-KOGIWWYY CASUALS aims to expand its reach, train emerging designers, and showcase African style on a global stage - positioning itself as a beacon of excellence in men's fashion across the continent."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-white"
                >
                  <a 
                    href="https://wa.me/2349022920617?text=Hello%20AL-KOGIWWYY%20CASUALS,%20I'd%20love%20to%20learn%20more%20about%20your%20brand"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect With Us
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white">
                  <a href="/gallery">View Our Work</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-luxury-navy mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to becoming a trusted name in African fashion.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2019-2023',
                  title: 'Learning & Experience',
                  description: 'Gained valuable experience in West African fashion trends and garment production in Ghana.',
                },
                {
                  year: 'January 2024',
                  title: 'Brand Foundation',
                  description: 'AL-KOGIWWYY CASUALS was officially founded with a vision to redefine luxury African menswear.',
                },
                {
                  year: '2024 - Present',
                  title: 'Growth & Excellence',
                  description: 'Serving hundreds of satisfied customers and establishing ourselves as a premium fashion brand.',
                },
              ].map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-4 animate-slide-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-luxury-gold font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-luxury-gold rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-luxury-navy mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
