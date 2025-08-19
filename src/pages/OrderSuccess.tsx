import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Package, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderSuccess: React.FC = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardContent className="p-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
              <p className="text-muted-foreground mb-6">
                Thank you for your purchase. Your order has been successfully placed and confirmed.
              </p>
              
              <div className="bg-muted p-4 rounded-lg mb-6">
                <p className="font-semibold mb-2">Order Details</p>
                <p className="text-sm text-muted-foreground">Order ID: {orderId}</p>
                <p className="text-sm text-muted-foreground">
                  Confirmation sent to your email
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-card border rounded-lg">
                  <Package className="h-8 w-8 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Processing</p>
                    <p className="text-sm text-muted-foreground">
                      Your order is being prepared
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-card border rounded-lg">
                  <Clock className="h-8 w-8 text-primary" />
                  <div className="text-left">
                    <p className="font-medium">Estimated Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      3-5 business days
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={() => navigate('/orders')} 
                  className="w-full md:w-auto"
                >
                  Track Your Order
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/gallery')}
                  className="w-full md:w-auto md:ml-3"
                >
                  Continue Shopping
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccess;