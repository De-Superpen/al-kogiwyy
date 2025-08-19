import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Package, DollarSign, Users, TrendingUp, Eye, Edit, MessageCircle } from 'lucide-react';

interface AdminOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: any[];
  total: number;
  status: 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered';
  deliveryAddress: string;
  orderDate: string;
  paymentStatus: 'pending' | 'paid' | 'failed';
}

const MOCK_ADMIN_ORDERS: AdminOrder[] = [
  {
    id: 'ORD-1703123456',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '+2348123456789',
    items: [
      { id: '1', name: 'Royal Agbada - Navy Blue', quantity: 1, price: 85000 },
      { id: '2', name: 'Senator Cap - Gold', quantity: 1, price: 15000 }
    ],
    total: 103000,
    status: 'confirmed',
    deliveryAddress: '123 Main Street, Lekki, Lagos',
    orderDate: '2024-01-15',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-1703123457',
    customerName: 'Jane Smith',
    customerEmail: 'jane@example.com',
    customerPhone: '+2348123456788',
    items: [
      { id: '3', name: 'Kaftan - Emerald Green', quantity: 2, price: 65000 }
    ],
    total: 133000,
    status: 'pending',
    deliveryAddress: '456 Oak Avenue, Garki, Abuja',
    orderDate: '2024-01-16',
    paymentStatus: 'paid'
  },
  {
    id: 'ORD-1703123458',
    customerName: 'Mike Johnson',
    customerEmail: 'mike@example.com',
    customerPhone: '+2348123456787',
    items: [
      { id: '4', name: 'Senator Fabric - Premium', quantity: 3, price: 45000 }
    ],
    total: 138000,
    status: 'processing',
    deliveryAddress: '789 Pine Street, Fagge, Kano',
    orderDate: '2024-01-17',
    paymentStatus: 'paid'
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

export const AdminDashboard: React.FC = () => {
  const [orders, setOrders] = useState(MOCK_ADMIN_ORDERS);
  
  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus as any } : order
    ));
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(order => order.status === 'pending').length;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button>Export Orders</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">₦{totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{totalOrders}</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Orders</p>
                <p className="text-2xl font-bold">{pendingOrders}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Customers</p>
                <p className="text-2xl font-bold">{new Set(orders.map(o => o.customerEmail)).size}</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Management */}
      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList>
          <TabsTrigger value="orders">Orders Management</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">Order #{order.id}</h3>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                          <Badge variant={order.paymentStatus === 'paid' ? 'default' : 'destructive'}>
                            {order.paymentStatus}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {order.customerName} • {order.customerEmail} • {order.customerPhone}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="text-lg font-bold">₦{order.total.toLocaleString()}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Items</h4>
                        <div className="space-y-1">
                          {order.items.map((item) => (
                            <p key={item.id} className="text-sm text-muted-foreground">
                              {item.name} × {item.quantity}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Delivery Address</h4>
                        <p className="text-sm text-muted-foreground">{order.deliveryAddress}</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium">Update Status:</label>
                        <Select 
                          value={order.status} 
                          onValueChange={(value) => updateOrderStatus(order.id, value)}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="processing">Processing</SelectItem>
                            <SelectItem value="shipped">Shipped</SelectItem>
                            <SelectItem value="delivered">Delivered</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Inventory management features will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card>
            <CardHeader>
              <CardTitle>Customer Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Customer management features will be available here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};