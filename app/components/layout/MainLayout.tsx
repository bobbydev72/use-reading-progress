import { MainLayoutProps } from '@/types/layout';
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
