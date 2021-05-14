import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';
import MainImageLoader from '../MainImageLoader/MainImageLoader';
import SearchWindow from '../SearchWindow/SearchWindow';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.Home}>
      <MainImageLoader />
      <SearchWindow header='Know more, shop wisely' />
      <InfoContainer heading='We take the guesswork out' />
    </div>
  );
};

export default Home;
