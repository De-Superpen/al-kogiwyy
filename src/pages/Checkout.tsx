import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { CheckoutForm } from '@/components/CheckoutForm';
import { PaymentInterface } from '@/components/PaymentInterface';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<'checkout' | 'payment'>('checkout');
  const [orderData, setOrderData] = useState(null);

  const handleCheckout = (data: any) => {
    setOrderData(data);
    setCurrentStep('payment');
  };

  const handlePaymentSuccess = (orderId: string) => {
    clearCart();
    navigate(`/order-success/${orderId}`);
  };

  if (items.length === 0 && currentStep === 'checkout') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <p className="text-muted-foreground mb-8">Add some items to your cart to continue</p>
          <button 
            onClick={() => navigate('/gallery')}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90"
          >
            Continue Shopping
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {currentStep === 'checkout' && (
          <CheckoutForm cartItems={items} onCheckout={handleCheckout} />
        )}
        {currentStep === 'payment' && orderData && (
          <PaymentInterface orderData={orderData} onPaymentSuccess={handlePaymentSuccess} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;