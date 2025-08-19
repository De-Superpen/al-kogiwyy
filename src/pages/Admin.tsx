import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { ProductManagement } from '@/components/admin/ProductManagement';
import { OrderManagement } from '@/components/admin/OrderManagement';
import { CustomerManagement } from '@/components/admin/CustomerManagement';
import { DeliveryManagement } from '@/components/admin/DeliveryManagement';

const Admin: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="products" element={<ProductManagement />} />
        <Route path="orders" element={<OrderManagement />} />
        <Route path="customers" element={<CustomerManagement />} />
        <Route path="delivery" element={<DeliveryManagement />} />
        <Route path="reports" element={<div className="p-6">Reports coming soon...</div>} />
        <Route path="content" element={<div className="p-6">Content management coming soon...</div>} />
        <Route path="locations" element={<div className="p-6">Location management coming soon...</div>} />
        <Route path="settings" element={<div className="p-6">Settings coming soon...</div>} />
      </Route>
    </Routes>
  );
};

export default Admin;