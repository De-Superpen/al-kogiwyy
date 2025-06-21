
export const products = [
  {
    id: 'kaftan-royal-blue',
    name: 'Royal Blue Kaftan',
    category: 'Kaftan',
    price: 45000,
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=500&h=600&fit=crop',
    ],
    description: 'Luxurious royal blue kaftan crafted with premium fabrics and intricate embroidery. Perfect for special occasions and cultural events.',
  },
  {
    id: 'agbada-gold-embroidered',
    name: 'Gold Embroidered Agbada',
    category: 'Agbada',
    price: 120000,
    images: [
      'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=500&h=600&fit=crop',
    ],
    description: 'Majestic agbada with gold embroidery, tailored to perfection for weddings and royal occasions. Features traditional Nigerian craftsmanship.',
  },
  {
    id: 'custom-event-dress-navy',
    name: 'Navy Custom Event Dress',
    category: 'Custom Event Dresses',
    price: 85000,
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop',
    ],
    description: 'Elegant custom event dress in navy blue, designed for formal occasions and celebrations.',
  },
  {
    id: 'casual-dress-modern',
    name: 'Modern Casual Dress',
    category: 'Casual Dresses',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=500&h=600&fit=crop',
    ],
    description: 'Contemporary casual dress perfect for everyday wear while maintaining African elegance.',
  },
  {
    id: 'senator-trousers-black',
    name: 'Black Senator Trousers',
    category: 'Pants/Trousers',
    price: 25000,
    images: [
      'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=600&fit=crop',
    ],
    description: 'Premium black senator trousers with perfect tailoring for formal and semi-formal occasions.',
  },
  {
    id: 'senator-material-cream',
    name: 'Cream Senator Material',
    category: 'Senator Materials',
    price: 55000,
    images: [
      'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=500&h=600&fit=crop',
    ],
    description: 'High-quality cream senator material set including shirt and trousers, perfect for important meetings.',
  },
  {
    id: 'traditional-cap-gold',
    name: 'Traditional Gold Cap',
    category: 'Caps',
    price: 15000,
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop',
    ],
    description: 'Handcrafted traditional cap with gold accents, completing your African formal wear.',
  },
];

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};
