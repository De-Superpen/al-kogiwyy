import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Plus, 
  Edit3, 
  Trash2, 
  Globe,
  Truck,
  Clock,
  DollarSign
} from 'lucide-react';

const mockStates = [
  {
    id: 1,
    name: 'Lagos',
    deliveryFee: 2500,
    estimatedDays: '1-2',
    active: true,
    zones: ['Lagos Island', 'Lagos Mainland', 'Ikeja', 'Victoria Island', 'Lekki']
  },
  {
    id: 2,
    name: 'Abuja',
    deliveryFee: 3500,
    estimatedDays: '2-3',
    active: true,
    zones: ['Garki', 'Wuse', 'Maitama', 'Gwarinpa', 'Kubwa']
  },
  {
    id: 3,
    name: 'Kano',
    deliveryFee: 4000,
    estimatedDays: '3-4',
    active: true,
    zones: ['Kano Municipal', 'Fagge', 'Dala', 'Gwale', 'Tarauni']
  },
  {
    id: 4,
    name: 'Port Harcourt',
    deliveryFee: 3800,
    estimatedDays: '2-4',
    active: true,
    zones: ['Port Harcourt City', 'Obio-Akpor', 'Eleme', 'Ikwerre', 'Emohua']
  },
  {
    id: 5,
    name: 'Ibadan',
    deliveryFee: 3200,
    estimatedDays: '2-3',
    active: true,
    zones: ['Ibadan North', 'Ibadan South', 'Oluyole', 'Lagelu', 'Ona Ara']
  }
];

const mockCountries = [
  {
    id: 1,
    name: 'United States',
    deliveryFee: 15000,
    estimatedDays: '7-14',
    active: true,
    currency: 'USD'
  },
  {
    id: 2,
    name: 'United Kingdom',
    deliveryFee: 12000,
    estimatedDays: '5-10',
    active: true,
    currency: 'GBP'
  },
  {
    id: 3,
    name: 'Canada',
    deliveryFee: 14000,
    estimatedDays: '7-12',
    active: true,
    currency: 'CAD'
  },
  {
    id: 4,
    name: 'South Africa',
    deliveryFee: 8000,
    estimatedDays: '5-8',
    active: false,
    currency: 'ZAR'
  }
];

export const LocationManagement: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'domestic' | 'international'>('domestic');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Location & Delivery Management</h1>
        <Button className="mt-4 sm:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Add New Location
        </Button>
      </div>

      {/* Tab Selection */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        <button
          onClick={() => setSelectedTab('domestic')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedTab === 'domestic'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Domestic (Nigeria)
        </button>
        <button
          onClick={() => setSelectedTab('international')}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            selectedTab === 'international'
              ? 'bg-background text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          International
        </button>
      </div>

      {selectedTab === 'domestic' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Nigerian States & Cities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockStates.map((state) => (
                <div key={state.id} className="p-4 border rounded-lg">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">{state.name}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <DollarSign className="h-4 w-4" />
                          ₦{state.deliveryFee.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {state.estimatedDays} days
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Truck className="h-4 w-4" />
                          {state.zones.length} zones
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 lg:mt-0">
                      <div className="flex items-center space-x-2">
                        <Switch id={`state-${state.id}`} checked={state.active} />
                        <Label htmlFor={`state-${state.id}`}>Active</Label>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Delivery Zones:</p>
                    <div className="flex flex-wrap gap-2">
                      {state.zones.map((zone, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {zone}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {selectedTab === 'international' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              International Delivery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockCountries.map((country) => (
                <div key={country.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-medium">{country.name}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <DollarSign className="h-4 w-4" />
                        ₦{country.deliveryFee.toLocaleString()} ({country.currency})
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {country.estimatedDays} days
                      </div>
                      <Badge variant={country.active ? 'default' : 'secondary'}>
                        {country.active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <div className="flex items-center space-x-2">
                      <Switch id={`country-${country.id}`} checked={country.active} />
                      <Label htmlFor={`country-${country.id}`}>Active</Label>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Active States</p>
                <p className="text-2xl font-bold">{mockStates.filter(s => s.active).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">International</p>
                <p className="text-2xl font-bold">{mockCountries.filter(c => c.active).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Avg. Domestic Fee</p>
                <p className="text-2xl font-bold">₦{Math.round(mockStates.reduce((sum, s) => sum + s.deliveryFee, 0) / mockStates.length).toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Delivery Zones</p>
                <p className="text-2xl font-bold">{mockStates.reduce((sum, s) => sum + s.zones.length, 0)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};