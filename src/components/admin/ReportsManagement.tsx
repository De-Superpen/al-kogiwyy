import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Download,
  Calendar,
  Filter
} from 'lucide-react';

const mockSalesData = [
  { month: 'Jan', sales: 45000, orders: 120 },
  { month: 'Feb', sales: 52000, orders: 140 },
  { month: 'Mar', sales: 48000, orders: 130 },
  { month: 'Apr', sales: 61000, orders: 165 },
  { month: 'May', sales: 55000, orders: 150 },
  { month: 'Jun', sales: 67000, orders: 180 }
];

const mockTopProducts = [
  { name: 'Premium Agbada - Gold', sales: 45, revenue: 135000 },
  { name: 'Classic Agbada - Navy', sales: 38, revenue: 114000 },
  { name: 'Royal Agbada - Burgundy', sales: 32, revenue: 128000 },
  { name: 'Traditional Agbada - White', sales: 28, revenue: 84000 }
];

export const ReportsManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Reports & Analytics</h1>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₦1,245,670</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15.3%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.24%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">-0.5%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="sales" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Sales chart will be displayed here</p>
                  <p className="text-sm text-muted-foreground mt-2">Integration with charting library needed</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockTopProducts.map((product, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {product.sales} units sold
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p className="font-semibold">₦{product.revenue.toLocaleString()}</p>
                      <Badge variant="secondary">#{index + 1}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">New Customers</h3>
                  <p className="text-2xl font-bold">127</p>
                  <p className="text-sm text-muted-foreground">This month</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Returning Customers</h3>
                  <p className="text-2xl font-bold">720</p>
                  <p className="text-sm text-muted-foreground">This month</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Average Order Value</h3>
                  <p className="text-2xl font-bold">₦97,500</p>
                  <p className="text-sm text-green-600">+5.2% from last month</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Customer Lifetime Value</h3>
                  <p className="text-2xl font-bold">₦245,000</p>
                  <p className="text-sm text-green-600">+8.1% from last month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inventory" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Total Products</h3>
                    <p className="text-2xl font-bold">156</p>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Low Stock Items</h3>
                    <p className="text-2xl font-bold text-orange-600">12</p>
                  </div>
                  <Badge variant="destructive">Attention</Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Out of Stock</h3>
                    <p className="text-2xl font-bold text-red-600">3</p>
                  </div>
                  <Badge variant="destructive">Critical</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};