import React from 'react';
import AppStoreSection from './AppStoreSection/AppStoreSection';
import classes from './Footer.module.scss';
import FooterNavigation from './FooterNavigation/FooterNavigation';
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
      <FooterNavigation />
    </div>
  );
};

export default Footer;
