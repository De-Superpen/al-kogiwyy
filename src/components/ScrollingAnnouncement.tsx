
import React from 'react';

const ScrollingAnnouncement = () => {
  return (
    <div className="bg-luxury-gold text-white py-2 overflow-hidden relative top-16 z-40">
      <div className="animate-scroll whitespace-nowrap">
        <span className="inline-block px-8">
          🎉 New Collection Available - Premium Agbadas & Kaftans Starting from ₦45,000
        </span>
        <span className="inline-block px-8">
          ✨ Custom Fittings Available - Book Your Appointment Today
        </span>
        <span className="inline-block px-8">
          🚚 Worldwide Delivery - Experience Luxury Fashion Anywhere
        </span>
        <span className="inline-block px-8">
          💎 Bespoke Designs - Tailored to Perfection for the Modern African Man
        </span>
      </div>
    </div>
  );
};

export default ScrollingAnnouncement;
