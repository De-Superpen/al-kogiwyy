import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, MapPin, User, Mail, Phone } from 'lucide-react';

interface CheckoutFormProps {
  cartItems: any[];
  onCheckout: (orderData: any) => void;
}

const STATES = {
  'Lagos': ['Ikeja', 'Victoria Island', 'Lekki', 'Surulere', 'Alaba'],
  'Abuja': ['Garki', 'Wuse', 'Maitama', 'Asokoro', 'Kubwa'],
  'Kano': ['Fagge', 'Nassarawa', 'Gwale', 'Dala', 'Tarauni'],
  'Rivers': ['Port Harcourt', 'Obio-Akpor', 'Okrika', 'Eleme', 'Degema']
};

const DELIVERY_FEES = {
  'Lagos': { 'Ikeja': 2000, 'Victoria Island': 2500, 'Lekki': 3000, 'Surulere': 2200, 'Alaba': 2800 },
  'Abuja': { 'Garki': 3000, 'Wuse': 3200, 'Maitama': 3500, 'Asokoro': 3300, 'Kubwa': 2800 },
  'Kano': { 'Fagge': 2500, 'Nassarawa': 2600, 'Gwale': 2400, 'Dala': 2300, 'Tarauni': 2700 },
  'Rivers': { 'Port Harcourt': 3200, 'Obio-Akpor': 3000, 'Okrika': 3500, 'Eleme': 3300, 'Degema': 3800 }
};

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ cartItems, onCheckout }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Nigeria',
    state: '',
    area: '',
    address: ''
  });
  
  const [selectedState, setSelectedState] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = selectedState && selectedArea ? DELIVERY_FEES[selectedState]?.[selectedArea] || 0 : 0;
  const total = subtotal + deliveryFee;

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedArea('');
    setFormData({ ...formData, state, area: '' });
  };

  const handleAreaChange = (area: string) => {
    setSelectedArea(area);
    setFormData({ ...formData, area });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      items: cartItems,
      subtotal,
      deliveryFee,
      total,
      orderId: `ORD-${Date.now()}`,
      status: 'pending'
    };
    onCheckout(orderData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Delivery Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Delivery Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1"
                  required
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-1"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={formData.country}
                  disabled
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Select onValueChange={handleStateChange}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(STATES).map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="area">Area/LGA</Label>
              <Select onValueChange={handleAreaChange} disabled={!selectedState}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select area" />
                </SelectTrigger>
                <SelectContent>
                  {selectedState && STATES[selectedState]?.map((area) => (
                    <SelectItem key={area} value={area}>{area}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="address">Street Address</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="mt-1"
                placeholder="Enter your full address"
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>

            <Button 
              onClick={handleSubmit} 
              className="w-full mt-6" 
              size="lg"
              disabled={!formData.name || !formData.email || !formData.phone || !selectedState || !selectedArea || !formData.address}
            >
              Proceed to Payment
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};