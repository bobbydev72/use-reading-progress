import { useState } from 'react';

export function useReadingProgress() {
  const [completion, setCompletion] = useState(0);

  return completion;
}
