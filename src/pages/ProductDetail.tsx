
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { getProductById } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = id ? getProductById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/gallery">Back to Gallery</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${product.name} (${quantity}) added to your cart`,
    });
    
    setQuantity(1);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hello AL-KOGIWWYY CASUALS, I'm interested in:\n\n${product.name}\nCategory: ${product.category}\nQuantity: ${quantity}\nPrice: ₦${(product.price * quantity).toLocaleString()}\n\nPlease confirm availability and delivery details.`;
    window.open(`https://wa.me/2349022920617?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link to="/gallery">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gallery
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 ${
                      selectedImage === index ? 'border-luxury-gold' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-luxury-gold uppercase tracking-wide font-medium">
                {product.category}
              </span>
              <h1 className="text-4xl font-playfair font-bold text-luxury-navy mt-2">
                {product.name}
              </h1>
            </div>

            <div className="text-3xl font-bold text-luxury-gold">
              ₦{product.price.toLocaleString()}
              <span className="text-sm text-gray-600 font-normal ml-2">Starting from</span>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-luxury-navy mb-4">What's Included:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom tailoring and fitting</li>
                <li>• Premium quality fabrics</li>
                <li>• Personal consultation</li>
                <li>• Quality guarantee</li>
                <li>• Worldwide shipping available</li>
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-900">Quantity:</span>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-medium text-xl w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Total Price */}
            <div className="bg-luxury-gold/10 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Total:</span>
                <span className="text-2xl font-bold text-luxury-gold">
                  ₦{(product.price * quantity).toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-white"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button
                onClick={handleWhatsAppOrder}
                size="lg"
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
              >
                Order via WhatsApp
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                className="w-full"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: product.name,
                      text: `Check out this ${product.name} from AL-KOGIWWYY CASUALS`,
                      url: window.location.href,
                    });
                  }
                }}
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share Product
              </Button>
            </div>

            {/* Contact Info */}
            <div className="border-t pt-6">
              <p className="text-sm text-gray-600 mb-2">
                Questions about this product? Contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button asChild size="sm" variant="outline">
                  <a href="tel:+2349022920617">Call: +234 9022920617</a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a 
                    href={`https://wa.me/2349022920617?text=I%20have%20questions%20about%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
