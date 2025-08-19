import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, CheckCircle, Loader2 } from 'lucide-react';

interface PaymentInterfaceProps {
  orderData: any;
  onPaymentSuccess: (orderId: string) => void;
}

export const PaymentInterface: React.FC<PaymentInterfaceProps> = ({ orderData, onPaymentSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      
      // Simulate successful payment
      setTimeout(() => {
        onPaymentSuccess(orderData.orderId);
      }, 2000);
    }, 3000);
  };

  if (paymentComplete) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardContent className="text-center p-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-muted-foreground mb-4">
              Your order #{orderData.orderId} has been confirmed.
            </p>
            <Badge variant="secondary" className="mb-4">
              Redirecting to order tracking...
            </Badge>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Order Summary */}
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Order ID:</span>
                <span className="font-mono">{orderData.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span>Items ({orderData.items.length}):</span>
                <span>₦{orderData.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery to {orderData.area}, {orderData.state}:</span>
                <span>₦{orderData.deliveryFee.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2 border-t">
                <span>Total Amount:</span>
                <span>₦{orderData.total.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="font-semibold">Payment Method</h3>
            <div className="border rounded-lg p-4 bg-card">
              <div className="flex items-center gap-3">
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">Paystack Payment Gateway</p>
                  <p className="text-sm text-muted-foreground">
                    Secure payment via card, bank transfer, or USSD
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="space-y-2">
            <h3 className="font-semibold">Delivery Address</h3>
            <div className="text-sm text-muted-foreground">
              <p>{orderData.name}</p>
              <p>{orderData.address}</p>
              <p>{orderData.area}, {orderData.state}</p>
              <p>{orderData.phone}</p>
            </div>
          </div>

          <Button 
            onClick={handlePayment} 
            className="w-full" 
            size="lg"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing Payment...
              </>
            ) : (
              <>
                Pay ₦{orderData.total.toLocaleString()}
              </>
            )}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            Your payment is secured with 256-bit SSL encryption
          </p>
        </CardContent>
      </Card>
    </div>
  );
};