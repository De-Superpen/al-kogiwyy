import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

export const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-4 lg:p-6 lg:ml-0">
          <div className="pt-16 lg:pt-0">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};