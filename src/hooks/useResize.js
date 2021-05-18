import { useState, useEffect } from 'react';
import {
  checkDevice,
  getMedia,
  getWindowDimensions,
} from '../utils/utilsFuncs';

const useResize = () => {
  // const [mediaDetails, setMediaDetails] = useState({});
  // const [windowDimensions, setWindowDimensions] = useState({});
  // const [isMobile, setIsMobile] = useState({});

  const [details, setDetails] = useState({
    winDim: getWindowDimensions(),
    device: checkDevice(),
    media: getMedia(),
  });

  useEffect(() => {
    const handleResize = () => {
      const winDim = getWindowDimensions();
      const device = checkDevice();
      const media = getMedia();

      setDetails({ winDim, device, media });

      // setWindowDimensions(winDim);
      // setIsMobile(device);
      // setMediaDetails(media);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return details;
};

export default useResize;
