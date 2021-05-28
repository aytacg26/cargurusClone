import React from 'react';
import classes from './AppStoreSection.module.scss';
import AppStore from '../../../../assets/images/AppStore/download-on-the-app-store.png';
import GooglePlay from '../../../../assets/images/AppStore/get-it-on-google-play.png';

const AppStoreSection = ({ header }) => {
  return (
    <div className={classes.Mobile}>
      <span>{header}</span>
      <div className={classes.AppStoreLinks}>
        <a
          href='https://apps.apple.com/us/app/id814517475?pid=site&c=subscribe_blade'
          target='_blank'
          rel='noreferrer'
          title='AppStore'
        >
          <img src={AppStore} alt='Apple AppStore' title='Apple AppStore' />
        </a>
        <a
          href='https://play.google.com/store/apps/details?id=com.cargurus.mobileApp&pid=site&c=subscribe_blade'
          target='_blank'
          rel='noreferrer'
          title='Google Play'
        >
          <img
            src={GooglePlay}
            alt='Google Play'
            title='Google Play Application Store'
          />
        </a>
      </div>
    </div>
  );
};

export default AppStoreSection;
