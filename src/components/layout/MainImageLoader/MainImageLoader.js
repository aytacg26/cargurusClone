import React, { useState, useEffect } from 'react';
import image1 from '../../../assets/images/scott@2x.jpg';
import image2 from '../../../assets/images/mike_2x.png';
import image3 from '../../../assets/images/meagan@2x.jpg';
import classes from './MainImageLoader.module.css';

import { randomNum } from '../../../utils/utilsFuncs';

const MainImageLoader = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    //Remove setTimeout after completing loading css
    let timer = setTimeout(() => {
      const num = randomNum(1, 3);
      num === 1
        ? setImage(image1)
        : num === 2
        ? setImage(image2)
        : setImage(image3);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={classes['image-section']}>
      {image && <img src={image} alt='Car Cyprus For Sale Cars' />}
      {!image && (
        <div className={classes.MainLoader}>
          <span className={classes.inner}></span>
          <span className={classes.textLoading}>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default MainImageLoader;
