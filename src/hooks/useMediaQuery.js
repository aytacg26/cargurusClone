import { useState, useEffect } from 'react';

export const useMediaQuery = (media) => {
  const [mediaQuery, setMediaQuery] = useState('');

  useEffect(() => {
    if (media && typeof media === 'string') {
      const mQ = window.matchMedia(media);
      setMediaQuery(mQ);
    }
  }, [media]);

  return mediaQuery;
};
