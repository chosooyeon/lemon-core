import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Layout/Header';
import { SideComp } from '@/components/Layout/SideComp';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <SideComp />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

