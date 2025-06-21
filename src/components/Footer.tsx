
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-playfair font-bold text-luxury-gold mb-4">
              AL-KOGIWWYY CASUALS
            </div>
            <p className="text-gray-300 mb-4">
              "Redefining luxury fashion for the modern African man with precision tailoring and cultural pride."
            </p>
            <p className="text-sm text-gray-400">
              Business Number: BN-8336017
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-luxury-gold transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-luxury-gold transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-luxury-gold transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-luxury-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>+234 9022920617</p>
              <p>Ogun State, Nigeria</p>
              <p>Mon–Sat, 9AM – 8PM</p>
              <p className="text-sm">Worldwide Delivery</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="https://instagram.com/alkogiwwyy_casuals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-luxury-gold transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://tiktok.com/@alkogiwwyy_casuals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-luxury-gold transition-colors"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/2349022920617" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-luxury-gold transition-colors"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-luxury-gold transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-luxury-gold transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              © 2024 AL-KOGIWWYY CASUALS. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Developed by{' '}
              <a 
                href="https://wa.me/2347064835520?text=Hi%20Superpen-Dev,%20I%20saw%20your%20credit%20on%20AL-KOGIWWYY%20CASUALS%20website%20and%20I'm%20interested%20in%20your%20web%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-luxury-gold hover:underline"
              >
                Superpen-Dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
