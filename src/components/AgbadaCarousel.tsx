
import React, { useEffect, useState } from 'react';

const AgbadaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

 const agbadaImages = [
  '/uploads/agbada1.jpg',
  '/uploads/agbada2.jpg',
  '/uploads/agbada5.jpg',
  '/uploads/agbada3.jpg',
  '/uploads/agbada4.jpg',
  '/uploads/agbada1.jpg',
  '/uploads/agbada2.jpg',
  '/uploads/agbada5.jpg',
  // Add more as needed, matching the files in your public/uploads folder
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % agbadaImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [agbadaImages.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="relative w-full h-full perspective-1000">
        {agbadaImages.map((image, index) => {
          const position = (index - currentIndex + agbadaImages.length) % agbadaImages.length;
          const isActive = position === 0;
          const isNext = position === 1;
          const isPrev = position === agbadaImages.length - 1;
          
          let transform = '';
          let opacity = 0.3;
          let zIndex = 1;
          
          if (isActive) {
            transform = 'translateX(0) rotateY(0deg) scale(1)';
            opacity = 0.8;
            zIndex = 3;
          } else if (isNext) {
            transform = 'translateX(300px) rotateY(-45deg) scale(0.8)';
            opacity = 0.6;
            zIndex = 2;
          } else if (isPrev) {
            transform = 'translateX(-300px) rotateY(45deg) scale(0.8)';
            opacity = 0.6;
            zIndex = 2;
          } else if (position <= 3) {
            transform = `translateX(${600 + (position - 2) * 200}px) rotateY(-60deg) scale(0.6)`;
            opacity = 0.4;
          } else {
            transform = `translateX(${-600 - (agbadaImages.length - position - 2) * 200}px) rotateY(60deg) scale(0.6)`;
            opacity = 0.4;
          }

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-80 h-96 transition-all duration-1000 ease-in-out transform-gpu"
              style={{
                transform: `translate(-50%, -50%) ${transform}`,
                opacity,
                zIndex,
              }}
            >
              <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-luxury-gold/20">
                <img
                  src={image}
                  alt={`Agbada Style ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Floating indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {agbadaImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-luxury-gold scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AgbadaCarousel;
