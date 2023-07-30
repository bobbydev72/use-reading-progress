import { MainLayoutProps } from '@/types/layout';
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ProgressScrollBar } from '../ui/ProgressScrollBar';

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-900">
      <ProgressScrollBar />
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
