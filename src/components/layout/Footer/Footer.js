import React from 'react';
import AppStoreSection from './AppStoreSection/AppStoreSection';

import classes from './Footer.module.css';
import SocialSection from './SocialSection/SocialSection';
import SubscribeSection from './SubscribeSection/SubscribeSection';

const Footer = (props) => {
  return (
    <div className={classes.Footer}>
      <div className={classes.upperContainer}>
        <SocialSection />
        <SubscribeSection header='Sign up for Price Drops, New Listings, & More' />
        <AppStoreSection header='Go Mobile' />
      </div>
      <div className={classes.FooterNav}>Footer Navigation Section</div>
    </div>
  );
};

export default Footer;
