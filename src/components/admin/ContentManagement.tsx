import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Edit3, 
  Trash2, 
  Plus, 
  Image,
  FileText,
  Globe,
  Star,
  Eye,
  Save
} from 'lucide-react';

const mockPages = [
  {
    id: 1,
    title: 'About Us',
    slug: '/about',
    status: 'published',
    lastModified: '2024-01-15',
    views: 1234
  },
  {
    id: 2,
    title: 'Services',
    slug: '/services',
    status: 'published',
    lastModified: '2024-01-10',
    views: 856
  },
  {
    id: 3,
    title: 'Contact',
    slug: '/contact',
    status: 'published',
    lastModified: '2024-01-08',
    views: 645
  }
];

const mockBanners = [
  {
    id: 1,
    title: 'Spring Collection 2024',
    image: '/uploads/agbada1.jpg',
    link: '/gallery',
    active: true,
    position: 'hero'
  },
  {
    id: 2,
    title: 'Free Delivery Promo',
    image: '/uploads/agbada2.jpg',
    link: '/services',
    active: true,
    position: 'announcement'
  }
];

const mockTestimonials = [
  {
    id: 1,
    name: 'Adebayo Johnson',
    rating: 5,
    comment: 'Excellent quality and beautiful designs. Highly recommended!',
    date: '2024-01-12',
    featured: true
  },
  {
    id: 2,
    name: 'Fatima Abdullah',
    rating: 5,
    comment: 'Outstanding service and perfect fit. Will definitely order again.',
    date: '2024-01-10',
    featured: false
  }
];

export const ContentManagement: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('pages');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold">Content Management</h1>
        <Button className="mt-4 sm:mt-0">
          <Plus className="h-4 w-4 mr-2" />
          Add New Content
        </Button>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="pages">Pages</TabsTrigger>
          <TabsTrigger value="banners">Banners</TabsTrigger>
          <TabsTrigger value="testimonials">Reviews</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Website Pages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockPages.map((page) => (
                  <div key={page.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{page.title}</h3>
                      <p className="text-sm text-muted-foreground">{page.slug}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <Badge variant={page.status === 'published' ? 'default' : 'secondary'}>
                          {page.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {page.views} views
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Modified: {page.lastModified}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 sm:mt-0">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit3 className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="banners" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Website Banners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockBanners.map((banner) => (
                  <div key={banner.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4 flex-1">
                      <img 
                        src={banner.image} 
                        alt={banner.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-medium">{banner.title}</h3>
                        <p className="text-sm text-muted-foreground">Position: {banner.position}</p>
                        <p className="text-sm text-muted-foreground">Link: {banner.link}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                      <div className="flex items-center space-x-2">
                        <Switch id={`banner-${banner.id}`} checked={banner.active} />
                        <Label htmlFor={`banner-${banner.id}`}>Active</Label>
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
        </TabsContent>

        <TabsContent value="testimonials" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Customer Reviews & Testimonials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-3">
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                        {testimonial.featured && (
                          <Badge variant="secondary">Featured</Badge>
                        )}
                        <span className="text-sm text-muted-foreground">{testimonial.date}</span>
                      </div>
                    </div>
                    <p className="text-sm mb-3">{testimonial.comment}</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit3 className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        <Star className="h-4 w-4 mr-1" />
                        {testimonial.featured ? 'Unfeature' : 'Feature'}
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                SEO Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="site-title">Site Title</Label>
                  <Input 
                    id="site-title" 
                    defaultValue="Adire Agbada Store - Premium Nigerian Fashion"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea 
                    id="meta-description"
                    defaultValue="Discover premium quality Agbada and traditional Nigerian fashion. Custom tailoring, authentic designs, and worldwide delivery available."
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input 
                    id="keywords" 
                    defaultValue="agbada, Nigerian fashion, traditional wear, custom tailoring"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="og-image">Open Graph Image URL</Label>
                  <Input 
                    id="og-image" 
                    defaultValue="/uploads/agbada1.jpg"
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-4">Social Media Links</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input 
                      id="facebook" 
                      defaultValue="https://facebook.com/adireagbada"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input 
                      id="instagram" 
                      defaultValue="https://instagram.com/adireagbada"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input 
                      id="twitter" 
                      defaultValue="https://twitter.com/adireagbada"
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save SEO Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};