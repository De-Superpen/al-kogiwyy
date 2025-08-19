import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Settings, 
  Store, 
  CreditCard, 
  Mail, 
  Bell, 
  Shield, 
  Database,
  Palette,
  Save
} from 'lucide-react';

export const SettingsManagement: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Settings</h1>
        <Button>
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="store">Store</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="notifications">Alerts</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
          <TabsTrigger value="appearance">Theme</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                General Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="site-name">Site Name</Label>
                    <Input id="site-name" defaultValue="Adire Agbada Store" />
                  </div>
                  <div>
                    <Label htmlFor="tagline">Tagline</Label>
                    <Input id="tagline" defaultValue="Premium Nigerian Fashion" />
                  </div>
                  <div>
                    <Label htmlFor="admin-email">Admin Email</Label>
                    <Input id="admin-email" type="email" defaultValue="admin@adireagbada.com" />
                  </div>
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="africa-lagos">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="africa-lagos">Africa/Lagos</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="america-new_york">America/New_York</SelectItem>
                        <SelectItem value="europe-london">Europe/London</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select defaultValue="ngn">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ngn">Nigerian Naira (₦)</SelectItem>
                        <SelectItem value="usd">US Dollar ($)</SelectItem>
                        <SelectItem value="gbp">British Pound (£)</SelectItem>
                        <SelectItem value="eur">Euro (€)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="yo">Yoruba</SelectItem>
                        <SelectItem value="ig">Igbo</SelectItem>
                        <SelectItem value="ha">Hausa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="date-format">Date Format</Label>
                    <Select defaultValue="dd-mm-yyyy">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                        <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                        <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="store" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5" />
                Store Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="store-address">Store Address</Label>
                    <Textarea 
                      id="store-address" 
                      defaultValue="123 Fashion Street, Victoria Island, Lagos, Nigeria"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+234 801 234 5678" />
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp Number</Label>
                    <Input id="whatsapp" defaultValue="+234 801 234 5678" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="business-hours">Business Hours</Label>
                    <Textarea 
                      id="business-hours" 
                      defaultValue="Monday - Friday: 9:00 AM - 6:00 PM&#10;Saturday: 10:00 AM - 4:00 PM&#10;Sunday: Closed"
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="maintenance-mode" />
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="store-open" defaultChecked />
                    <Label htmlFor="store-open">Store Open</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Accepted Payment Methods</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center space-x-2">
                      <Switch id="bank-transfer" defaultChecked />
                      <Label htmlFor="bank-transfer">Bank Transfer</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="paystack" defaultChecked />
                      <Label htmlFor="paystack">Paystack</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="flutterwave" />
                      <Label htmlFor="flutterwave">Flutterwave</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="card-payment" defaultChecked />
                      <Label htmlFor="card-payment">Card Payments</Label>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t">
                  <div className="space-y-4">
                    <h3 className="font-medium">Bank Details</h3>
                    <div>
                      <Label htmlFor="bank-name">Bank Name</Label>
                      <Input id="bank-name" defaultValue="First Bank of Nigeria" />
                    </div>
                    <div>
                      <Label htmlFor="account-name">Account Name</Label>
                      <Input id="account-name" defaultValue="Adire Agbada Store Ltd" />
                    </div>
                    <div>
                      <Label htmlFor="account-number">Account Number</Label>
                      <Input id="account-number" defaultValue="1234567890" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium">API Configuration</h3>
                    <div>
                      <Label htmlFor="paystack-public">Paystack Public Key</Label>
                      <Input id="paystack-public" type="password" defaultValue="pk_test_..." />
                    </div>
                    <div>
                      <Label htmlFor="paystack-secret">Paystack Secret Key</Label>
                      <Input id="paystack-secret" type="password" defaultValue="sk_test_..." />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="smtp-host">SMTP Host</Label>
                    <Input id="smtp-host" defaultValue="smtp.gmail.com" />
                  </div>
                  <div>
                    <Label htmlFor="smtp-port">SMTP Port</Label>
                    <Input id="smtp-port" defaultValue="587" />
                  </div>
                  <div>
                    <Label htmlFor="smtp-username">SMTP Username</Label>
                    <Input id="smtp-username" defaultValue="admin@adireagbada.com" />
                  </div>
                  <div>
                    <Label htmlFor="smtp-password">SMTP Password</Label>
                    <Input id="smtp-password" type="password" defaultValue="********" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="from-email">From Email</Label>
                    <Input id="from-email" defaultValue="noreply@adireagbada.com" />
                  </div>
                  <div>
                    <Label htmlFor="from-name">From Name</Label>
                    <Input id="from-name" defaultValue="Adire Agbada Store" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="email-notifications" defaultChecked />
                    <Label htmlFor="email-notifications">Enable Email Notifications</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-medium">Order Notifications</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center space-x-2">
                      <Switch id="new-order" defaultChecked />
                      <Label htmlFor="new-order">New Order Received</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="order-cancelled" defaultChecked />
                      <Label htmlFor="order-cancelled">Order Cancelled</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="payment-received" defaultChecked />
                      <Label htmlFor="payment-received">Payment Received</Label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Label className="text-base font-medium">Inventory Notifications</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center space-x-2">
                      <Switch id="low-stock" defaultChecked />
                      <Label htmlFor="low-stock">Low Stock Alert</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="out-of-stock" defaultChecked />
                      <Label htmlFor="out-of-stock">Out of Stock Alert</Label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <Label className="text-base font-medium">Customer Notifications</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center space-x-2">
                      <Switch id="new-customer" />
                      <Label htmlFor="new-customer">New Customer Registration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="new-review" defaultChecked />
                      <Label htmlFor="new-review">New Product Review</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="two-factor" />
                  <Label htmlFor="two-factor">Enable Two-Factor Authentication</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="login-alerts" defaultChecked />
                  <Label htmlFor="login-alerts">Login Alerts</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="force-ssl" defaultChecked />
                  <Label htmlFor="force-ssl">Force SSL/HTTPS</Label>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-4">Password Policy</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="min-length">Minimum Password Length</Label>
                      <Select defaultValue="8">
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">6 characters</SelectItem>
                          <SelectItem value="8">8 characters</SelectItem>
                          <SelectItem value="12">12 characters</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="require-uppercase" defaultChecked />
                      <Label htmlFor="require-uppercase">Require uppercase letters</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="require-numbers" defaultChecked />
                      <Label htmlFor="require-numbers">Require numbers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="require-symbols" />
                      <Label htmlFor="require-symbols">Require special characters</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Backup & Recovery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="auto-backup" defaultChecked />
                  <Label htmlFor="auto-backup">Enable Automatic Backups</Label>
                </div>
                
                <div>
                  <Label htmlFor="backup-frequency">Backup Frequency</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="retention-days">Backup Retention (days)</Label>
                  <Input id="retention-days" type="number" defaultValue="30" className="w-32" />
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-4">Manual Backup</h3>
                  <div className="flex gap-4">
                    <Button>Create Backup Now</Button>
                    <Button variant="outline">Download Latest Backup</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance & Theme
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="theme-mode">Theme Mode</Label>
                  <Select defaultValue="system">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="primary-color">Primary Brand Color</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="w-10 h-10 bg-primary rounded-md border"></div>
                    <Input id="primary-color" defaultValue="#8B5A3C" className="w-32" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="secondary-color">Secondary Color</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="w-10 h-10 bg-secondary rounded-md border"></div>
                    <Input id="secondary-color" defaultValue="#D4AF37" className="w-32" />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="rounded-corners" defaultChecked />
                  <Label htmlFor="rounded-corners">Rounded Corners</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch id="animations" defaultChecked />
                  <Label htmlFor="animations">Enable Animations</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};