
import React from 'react';
import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 9022920617',
      action: 'tel:+2349022920617',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Ogun State, Nigeria',
      subtitle: 'Worldwide Delivery Available',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday – Saturday',
      subtitle: '9:00 AM – 8:00 PM',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'Send us a message',
      action: 'mailto:info@al-kogiwwyy.com',
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@alkogiwwyy_casuals',
      url: 'https://instagram.com/alkogiwwyy_casuals',
      color: 'bg-pink-600',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'AL-KOGIWWYY CASUALS',
      url: '#',
      color: 'bg-blue-600',
    },
    {
      icon: Twitter,
      name: 'Twitter/X',
      handle: '@alkogiwwyy_casuals',
      url: '#',
      color: 'bg-black',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-r from-luxury-navy to-luxury-navy-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to start your luxury fashion journey? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-luxury-gold mb-6">
                  <info.icon className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-700 font-medium mb-2">
                  {info.details}
                </p>
                {info.subtitle && (
                  <p className="text-gray-600 text-sm">
                    {info.subtitle}
                  </p>
                )}
                {info.action && (
                  <Button 
                    asChild 
                    size="sm" 
                    className="mt-4 bg-luxury-gold hover:bg-luxury-gold-dark text-white"
                  >
                    <a 
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      Contact Now
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-luxury-navy mb-4">
              Follow Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay connected with us on social media for the latest updates, fashion inspiration, and behind-the-scenes content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialMedia.map((social, index) => (
              <div 
                key={social.name}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${social.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <social.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-luxury-navy mb-2">
                  {social.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {social.handle}
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white"
                >
                  <a 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Us
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok Special Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-white p-12 rounded-lg text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-playfair font-bold mb-6">
                See Our Creations in Action
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Follow us on TikTok @alkogiwwyy_casuals to see our latest designs, behind-the-scenes content, and fashion inspiration.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="bg-black hover:bg-gray-800 text-white"
              >
                <a 
                  href="https://tiktok.com/@alkogiwwyy_casuals"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  Follow on TikTok
                </a>
              </Button>
            </div>
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
            Contact us today to discuss your fashion needs and begin your journey with AL-KOGIWWYY CASUALS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                Start Conversation
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-navy">
              <a href="tel:+2349022920617">Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
