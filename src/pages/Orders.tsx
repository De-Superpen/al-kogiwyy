import React from 'react';
import { OrderTracking } from '@/components/OrderTracking';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Orders: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <OrderTracking />
      </div>
      <Footer />
    </div>
  );
};

export default Orders;