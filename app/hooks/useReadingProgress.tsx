'use client';

import { useEffect, useState } from 'react';
// import { throttle } from 'lodash';

export function useReadingProgress() {
  const storedCompletion = localStorage.getItem('readingProgress');

  const [completion, setCompletion] = useState(
    storedCompletion ? parseFloat(storedCompletion) : 0
  );

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;

      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (totalScroll / windowHeight) * 100;

      setCompletion(progress);
      localStorage.setItem('readingProgress', progress.toString());
    };

    // TODO: make smooth scroll animation
    // const throttledHandleScroll = throttle(handleScroll, 100);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return completion;
}
