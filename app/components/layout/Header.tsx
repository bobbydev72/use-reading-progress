import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-6 bg-slate-800">
      <div className="container mx-auto">
        <span className="flex justify-center text-slate-400 uppercase">
          Header
        </span>
      </div>
    </header>
  );
};
