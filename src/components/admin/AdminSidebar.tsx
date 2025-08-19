import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Truck, 
  Settings, 
  BarChart3,
  FileText,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const sidebarItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Products',
    href: '/admin/products',
    icon: Package,
  },
  {
    title: 'Orders',
    href: '/admin/orders',
    icon: ShoppingCart,
  },
  {
    title: 'Customers',
    href: '/admin/customers',
    icon: Users,
  },
  {
    title: 'Delivery Fees',
    href: '/admin/delivery',
    icon: Truck,
  },
  {
    title: 'Reports',
    href: '/admin/reports',
    icon: BarChart3,
  },
  {
    title: 'Content',
    href: '/admin/content',
    icon: FileText,
  },
  {
    title: 'Locations',
    href: '/admin/locations',
    icon: MapPin,
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
];

const SidebarContent: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="p-4 space-y-2">
      {sidebarItems.map((item) => {
        const isActive = location.pathname === item.href;
        
        return (
          <NavLink
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
};

export const AdminSidebar: React.FC = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-card border-r border-border min-h-[calc(100vh-4rem)]">
        <div className="w-full">
          <SidebarContent />
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="fixed top-4 left-4 z-50 lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="bg-card h-full">
              <div className="p-4 border-b">
                <h2 className="font-semibold">Admin Panel</h2>
              </div>
              <SidebarContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};