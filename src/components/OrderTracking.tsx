import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react';

interface Order {
  id: string;
  items: any[];
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
  deliveryAddress: string;
  orderDate: string;
  estimatedDelivery: string;
}

const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-1703123456',
    items: [
      { id: '1', name: 'Royal Agbada - Navy Blue', quantity: 1, price: 85000 },
      { id: '2', name: 'Senator Cap - Gold', quantity: 1, price: 15000 }
    ],
    total: 103000,
    status: 'shipped',
    deliveryAddress: 'Lekki, Lagos',
    orderDate: '2024-01-15',
    estimatedDelivery: '2024-01-18'
  },
  {
    id: 'ORD-1703123457',
    items: [
      { id: '3', name: 'Kaftan - Emerald Green', quantity: 2, price: 65000 }
    ],
    total: 133000,
    status: 'processing',
    deliveryAddress: 'Garki, Abuja',
    orderDate: '2024-01-16',
    estimatedDelivery: '2024-01-20'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending': return 'bg-yellow-100 text-yellow-800';
    case 'confirmed': return 'bg-blue-100 text-blue-800';
    case 'processing': return 'bg-purple-100 text-purple-800';
    case 'shipped': return 'bg-orange-100 text-orange-800';
    case 'delivered': return 'bg-green-100 text-green-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending': return <Clock className="h-4 w-4" />;
    case 'confirmed': return <CheckCircle className="h-4 w-4" />;
    case 'processing': return <Package className="h-4 w-4" />;
    case 'shipped': return <Truck className="h-4 w-4" />;
    case 'delivered': return <CheckCircle className="h-4 w-4" />;
    default: return <Clock className="h-4 w-4" />;
  }
};

export const OrderTracking: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Orders</h1>
        <Button variant="outline">Download Invoice</Button>
      </div>

      <div className="space-y-6">
        {MOCK_ORDERS.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Placed on {new Date(order.orderDate).toLocaleDateString()}
                  </p>
                </div>
                <Badge className={getStatusColor(order.status)}>
                  <span className="flex items-center gap-1">
                    {getStatusIcon(order.status)}
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </span>
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-2">
                <h4 className="font-medium">Items</h4>
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              {/* Order Progress */}
              <div className="space-y-3">
                <h4 className="font-medium">Order Progress</h4>
                <div className="flex items-center justify-between relative">
                  <div className="absolute top-4 left-0 right-0 h-0.5 bg-muted"></div>
                  <div className={`absolute top-4 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    order.status === 'pending' ? 'w-0' :
                    order.status === 'confirmed' ? 'w-1/4' :
                    order.status === 'processing' ? 'w-2/4' :
                    order.status === 'shipped' ? 'w-3/4' :
                    'w-full'
                  }`}></div>
                  
                  {['confirmed', 'processing', 'shipped', 'delivered'].map((status, index) => (
                    <div key={status} className="flex flex-col items-center relative z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        order.status === status || 
                        (status === 'confirmed' && ['processing', 'shipped', 'delivered'].includes(order.status)) ||
                        (status === 'processing' && ['shipped', 'delivered'].includes(order.status)) ||
                        (status === 'shipped' && order.status === 'delivered')
                          ? 'bg-primary text-white' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {getStatusIcon(status)}
                      </div>
                      <p className="text-xs mt-2 capitalize">{status}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Info */}
              <div className="grid md:grid-cols-2 gap-4 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Delivery Address</p>
                    <p className="text-sm text-muted-foreground">{order.deliveryAddress}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Estimated Delivery</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(order.estimatedDelivery).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <p className="text-lg font-bold">Total: ₦{order.total.toLocaleString()}</p>
                <div className="space-x-2">
                  <Button variant="outline" size="sm">Contact Support</Button>
                  {order.status === 'delivered' && (
                    <Button size="sm">Leave Review</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};