'use client';

import React, { useEffect } from 'react';
import { useReadingProgress } from '@/app/hooks/useReadingProgress';

export const ProgressScrollBar: React.FC = () => {
  const completion = useReadingProgress();

  console.log(completion);

  return (
    <span
      className="fixed top-0 bg-indigo-600 w-full h-1.5 z-50 before:absolute before:w-full before:h-1.5 before:t-0 before:translate-x-full before:bg-gray-200 rounded-full"
      style={{ transform: `translateX(${completion - 100}%)` }}
    />
  );
};
