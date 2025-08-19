import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { ProductManagement } from '@/components/admin/ProductManagement';
import { OrderManagement } from '@/components/admin/OrderManagement';
import { CustomerManagement } from '@/components/admin/CustomerManagement';
import { DeliveryManagement } from '@/components/admin/DeliveryManagement';
import { ReportsManagement } from '@/components/admin/ReportsManagement';
import { ContentManagement } from '@/components/admin/ContentManagement';
import { LocationManagement } from '@/components/admin/LocationManagement';
import { SettingsManagement } from '@/components/admin/SettingsManagement';

const Admin: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<ProductManagement />} />
        <Route path="orders" element={<OrderManagement />} />
        <Route path="customers" element={<CustomerManagement />} />
        <Route path="delivery" element={<DeliveryManagement />} />
        <Route path="reports" element={<ReportsManagement />} />
        <Route path="content" element={<ContentManagement />} />
        <Route path="locations" element={<LocationManagement />} />
        <Route path="settings" element={<SettingsManagement />} />
      </Route>
    </Routes>
  );
};

export default Admin;