import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';
import MainImageLoader from '../MainImageLoader/MainImageLoader';
import ProductSlider from '../ProductSlider/ProductSlider';
import SearchWindow from '../SearchWindow/SearchWindow';
import VideoSlider from '../VideoSlider/VideoSlider';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.Home}>
      <MainImageLoader />
      <SearchWindow header='Know more, shop wisely' />
      <div className={classes.HomeBottomContainer}>
        <InfoContainer heading='We take the guesswork out' />
        <VideoSlider />
        <ProductSlider />
      </div>
    </div>
  );
};

export default Home;
