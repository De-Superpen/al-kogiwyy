
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ open, onClose }) => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;
    
    // Create detailed message with all product information
    let message = "Hello AL-KOGIWWYY CASUALS, I'm interested in purchasing the following items:\n\n";
    
    // Add each item with full details
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Category: ${item.category}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Unit Price: ₦${item.price.toLocaleString()}\n`;
      message += `   Subtotal: ₦${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    // Add total
    const total = getTotalPrice();
    message += `TOTAL AMOUNT: ₦${total.toLocaleString()}\n\n`;
    
    // Add closing message
    message += "Please confirm availability, delivery details, and payment methods. Looking forward to experiencing your premium fashion services!";
    
    window.open(`https://wa.me/2349022920617?text=${encodeURIComponent(message)}`, '_blank');
    clearCart();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 border-b pb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <p className="text-xs text-gray-600">{item.category}</p>
                      <p className="text-sm font-semibold text-luxury-gold">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-red-500 hover:bg-red-50"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-luxury-gold text-lg">
                  ₦{getTotalPrice().toLocaleString()}
                </span>
              </div>
              <Button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Checkout on WhatsApp
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
