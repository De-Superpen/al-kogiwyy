import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Edit, 
  Trash2, 
  MapPin,
  Truck,
  DollarSign
} from 'lucide-react';

interface DeliveryZone {
  id: string;
  state: string;
  areas: string[];
  fee: number;
  estimatedDays: string;
}

const MOCK_DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: '1',
    state: 'Lagos',
    areas: ['Victoria Island', 'Lekki', 'Ikeja', 'Surulere', 'Ajah', 'Ikoyi'],
    fee: 2500,
    estimatedDays: '1-2 days'
  },
  {
    id: '2',
    state: 'Abuja',
    areas: ['Garki', 'Wuse', 'Asokoro', 'Maitama', 'Gwarinpa', 'Kubwa'],
    fee: 3500,
    estimatedDays: '2-3 days'
  },
  {
    id: '3',
    state: 'Rivers',
    areas: ['Port Harcourt', 'Obio-Akpor', 'Eleme', 'Oyigbo'],
    fee: 4000,
    estimatedDays: '3-4 days'
  },
  {
    id: '4',
    state: 'Kano',
    areas: ['Fagge', 'Dala', 'Gwale', 'Kano Municipal', 'Nasarawa'],
    fee: 4500,
    estimatedDays: '4-5 days'
  },
  {
    id: '5',
    state: 'Oyo',
    areas: ['Ibadan North', 'Ibadan South', 'Akinyele', 'Lagelu', 'Oluyole'],
    fee: 3000,
    estimatedDays: '2-3 days'
  }
];

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
  'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo',
  'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa',
  'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba',
  'Yobe', 'Zamfara'
];

export const DeliveryManagement: React.FC = () => {
  const [deliveryZones, setDeliveryZones] = useState(MOCK_DELIVERY_ZONES);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newZone, setNewZone] = useState({
    state: '',
    areas: '',
    fee: '',
    estimatedDays: ''
  });

  const handleAddZone = () => {
    const zone: DeliveryZone = {
      id: Date.now().toString(),
      state: newZone.state,
      areas: newZone.areas.split(',').map(area => area.trim()),
      fee: parseInt(newZone.fee),
      estimatedDays: newZone.estimatedDays
    };
    setDeliveryZones([...deliveryZones, zone]);
    setNewZone({ state: '', areas: '', fee: '', estimatedDays: '' });
    setIsAddDialogOpen(false);
  };

  const handleDeleteZone = (id: string) => {
    setDeliveryZones(deliveryZones.filter(zone => zone.id !== id));
  };

  const ZoneForm = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="state">State</Label>
        <Select value={newZone.state} onValueChange={(value) => setNewZone({...newZone, state: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select state" />
          </SelectTrigger>
          <SelectContent>
            {NIGERIAN_STATES.map(state => (
              <SelectItem key={state} value={state}>
                {state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="areas">Areas (comma-separated)</Label>
        <Input 
          id="areas"
          placeholder="e.g., Victoria Island, Lekki, Ikeja"
          value={newZone.areas}
          onChange={(e) => setNewZone({...newZone, areas: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="fee">Delivery Fee (₦)</Label>
          <Input 
            id="fee"
            type="number"
            placeholder="0"
            value={newZone.fee}
            onChange={(e) => setNewZone({...newZone, fee: e.target.value})}
          />
        </div>
        <div>
          <Label htmlFor="days">Estimated Delivery</Label>
          <Input 
            id="days"
            placeholder="e.g., 2-3 days"
            value={newZone.estimatedDays}
            onChange={(e) => setNewZone({...newZone, estimatedDays: e.target.value})}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
          Cancel
        </Button>
        <Button onClick={handleAddZone}>
          Add Zone
        </Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Delivery Management</h1>
          <p className="text-muted-foreground">Manage delivery zones and fees across Nigeria</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Delivery Zone
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Delivery Zone</DialogTitle>
              <DialogDescription>
                Configure delivery fees and areas for a new state
              </DialogDescription>
            </DialogHeader>
            <ZoneForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Zones</p>
                <p className="text-2xl font-bold">{deliveryZones.length}</p>
              </div>
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Fee</p>
                <p className="text-2xl font-bold">
                  ₦{Math.round(deliveryZones.reduce((sum, zone) => sum + zone.fee, 0) / deliveryZones.length).toLocaleString()}
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Coverage Areas</p>
                <p className="text-2xl font-bold">{deliveryZones.reduce((sum, zone) => sum + zone.areas.length, 0)}</p>
              </div>
              <Truck className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="zones" className="space-y-6">
        <TabsList>
          <TabsTrigger value="zones">Delivery Zones</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="zones">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Zones & Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>State</TableHead>
                    <TableHead>Areas Covered</TableHead>
                    <TableHead>Delivery Fee</TableHead>
                    <TableHead>Estimated Time</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deliveryZones.map((zone) => (
                    <TableRow key={zone.id}>
                      <TableCell className="font-medium">{zone.state}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {zone.areas.slice(0, 3).map((area, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {area}
                            </Badge>
                          ))}
                          {zone.areas.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{zone.areas.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">₦{zone.fee.toLocaleString()}</TableCell>
                      <TableCell>{zone.estimatedDays}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleDeleteZone(zone.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="freeShipping">Free Shipping Threshold (₦)</Label>
                  <Input id="freeShipping" type="number" placeholder="100000" />
                  <p className="text-sm text-muted-foreground mt-1">
                    Orders above this amount get free shipping
                  </p>
                </div>
                
                <div>
                  <Label htmlFor="maxWeight">Maximum Package Weight (kg)</Label>
                  <Input id="maxWeight" type="number" placeholder="50" />
                  <p className="text-sm text-muted-foreground mt-1">
                    Maximum weight allowed per package
                  </p>
                </div>

                <div>
                  <Label htmlFor="defaultFee">Default Delivery Fee (₦)</Label>
                  <Input id="defaultFee" type="number" placeholder="5000" />
                  <p className="text-sm text-muted-foreground mt-1">
                    Default fee for areas not in delivery zones
                  </p>
                </div>

                <div>
                  <Label htmlFor="processingTime">Processing Time (days)</Label>
                  <Input id="processingTime" type="number" placeholder="1" />
                  <p className="text-sm text-muted-foreground mt-1">
                    Time to process orders before shipping
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};